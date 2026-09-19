import React, { useMemo } from 'react';

// A simple seeded random number generator for consistent renders
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export const NetworkBackground = () => {
  const { paths, nodes, grid } = useMemo(() => {
    const gridSize = 40; // The base grid unit
    const width = 3000;
    const height = 2000;
    
    let seed = 42; // Fixed seed for consistency
    const generatedPaths = [];
    const generatedNodes = [];
    
    const colors = [
      { stroke: "#64748b", node: "circle", r: 3, opacity: 0.3 }, // Slate
      { stroke: "#f97316", node: "rect", size: 6, opacity: 0.5 }, // Orange
      { stroke: "#38bdf8", node: "circle", r: 4, opacity: 0.6 }, // Blue
      { stroke: "#f97316", node: "circle", r: 3, opacity: 0.4 }, // Orange subtle
      { stroke: "#38bdf8", node: "rect", size: 5, opacity: 0.4 }, // Blue subtle
    ];

    for (let i = 0; i < 70; i++) {
      let x = Math.floor(seededRandom(seed++) * (width / gridSize)) * gridSize;
      let y = Math.floor(seededRandom(seed++) * (height / gridSize)) * gridSize;
      
      let d = `M${x},${y}`;
      const segments = 2 + Math.floor(seededRandom(seed++) * 6); // 2 to 7 segments
      
      let currentX = x;
      let currentY = y;
      
      // 0: R, 1: D, 2: L, 3: U
      let dir = Math.floor(seededRandom(seed++) * 4);
      
      for (let j = 0; j < segments; j++) {
        // Travel in strict grid units
        const length = (2 + Math.floor(seededRandom(seed++) * 12)) * gridSize;
        
        let nextX = currentX;
        let nextY = currentY;
        
        if (dir === 0) nextX += length;
        else if (dir === 1) nextY += length;
        else if (dir === 2) nextX -= length;
        else if (dir === 3) nextY -= length;
        
        // Clamp to boundaries
        nextX = Math.max(0, Math.min(width, nextX));
        nextY = Math.max(0, Math.min(height, nextY));
        
        if (nextX === currentX && nextY === currentY) {
          dir = (dir + (seededRandom(seed++) > 0.5 ? 1 : 3)) % 4;
          continue;
        }
        
        d += ` L${nextX},${nextY}`;
        currentX = nextX;
        currentY = nextY;
        
        // 90 degree turn
        dir = (dir + (seededRandom(seed++) > 0.5 ? 1 : 3)) % 4;
      }
      
      const config = colors[i % colors.length];
      const dur = 8 + Math.floor(seededRandom(seed++) * 20); // 8s to 28s for pulse traversing
      const pulseDelay = Math.floor(seededRandom(seed++) * 10);
      
      generatedPaths.push({
        id: `circuit-path-${i}`,
        d,
        color: config.stroke,
        opacity: config.opacity,
        dur,
        pulseDelay,
      });

      // Add static nodes at the start and end of the paths
      if (seededRandom(seed++) > 0.3) {
        generatedNodes.push({
          x, y,
          color: config.stroke,
          type: config.node,
          size: config.size || 0,
          r: config.r || 0,
          opacity: 0.8
        });
      }
      
      if (seededRandom(seed++) > 0.3) {
        generatedNodes.push({
          x: currentX, y: currentY,
          color: config.stroke,
          type: config.node,
          size: config.size || 0,
          r: config.r || 0,
          opacity: 0.8
        });
      }
    }
    
    return { 
      paths: generatedPaths, 
      nodes: generatedNodes,
      grid: { width, height, major: 200, minor: 40 } 
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.5] overflow-hidden">
      <svg 
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="geometric-grid"
            x="0"
            y="0"
            width={grid.major}
            height={grid.major}
            patternUnits="userSpaceOnUse"
          >
            {/* Major grid lines (Large squares) */}
            <path d={`M ${grid.major} 0 L 0 0 0 ${grid.major}`} fill="none" stroke="#cbd5e1" strokeWidth="1" opacity="0.15"/>
            
            {/* Minor grid lines (Subdivisions) */}
            {Array.from({ length: 4 }).map((_, i) => (
              <path key={`v-${i}`} d={`M ${(i + 1) * grid.minor} 0 L ${(i + 1) * grid.minor} ${grid.major}`} fill="none" stroke="#f1f5f9" strokeWidth="0.5" opacity="0.05" />
            ))}
            {Array.from({ length: 4 }).map((_, i) => (
              <path key={`h-${i}`} d={`M 0 ${(i + 1) * grid.minor} L ${grid.major} ${(i + 1) * grid.minor}`} fill="none" stroke="#f1f5f9" strokeWidth="0.5" opacity="0.05" />
            ))}
            
            {/* Intersection dots on major grid */}
            <circle cx="0" cy="0" r="1.5" fill="#cbd5e1" opacity="0.3" />
          </pattern>
        </defs>
        
        {/* Fill background with infinite repeating grid */}
        <rect width="100%" height="100%" fill="url(#geometric-grid)" />

        {/* Draw the static circuit paths */}
        <g strokeLinecap="square" strokeLinejoin="miter" fill="none">
          {paths.map((p) => (
            <path 
              key={`base-${p.id}`} 
              d={p.d} 
              stroke={p.color} 
              strokeOpacity={p.opacity} 
              strokeWidth="1.5"
            />
          ))}
        </g>

        {/* Draw the traveling data pulses */}
        <g fill="none">
          {paths.map((p) => (
            <path
              key={`pulse-${p.id}`}
              d={p.d}
              stroke={p.color}
              strokeWidth="2.5"
              pathLength="100"
              strokeDasharray="2 98"
              strokeDashoffset="100"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: `drop-shadow(0 0 4px ${p.color})` }}
            >
              <animate 
                attributeName="stroke-dashoffset" 
                from="100" 
                to="-100" 
                dur={`${p.dur}s`}
                begin={`${p.pulseDelay}s`}
                repeatCount="indefinite" 
              />
            </path>
          ))}
        </g>

        {/* Draw the nodes (endpoints/junctions) */}
        <g>
          {nodes.map((n, i) => (
            <g key={`node-${i}`} transform={`translate(${n.x}, ${n.y})`}>
              {n.type === 'circle' ? (
                <circle r={n.r} fill={n.color} fillOpacity={n.opacity} />
              ) : (
                <rect x={-n.size / 2} y={-n.size / 2} width={n.size} height={n.size} fill={n.color} fillOpacity={n.opacity} />
              )}
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

