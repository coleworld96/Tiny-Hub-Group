import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb } from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const getAtomRadius = () => {
    if (typeof window === 'undefined') return 40;
    if (window.innerWidth >= 1280) return 56; // xl: w-56
    if (window.innerWidth >= 640) return 40; // sm: w-40
    return 24; // default: w-24
  };

  const [phase, setPhase] = useState(0);
  const [atomRadius, setAtomRadius] = useState(getAtomRadius);

  const particleCount = 60;
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => {
      const angle = (i / particleCount) * Math.PI * 2 + (Math.random() * 0.2 - 0.1);
      const distance = 1000 + Math.random() * 1500;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      const scale = 0.5 + Math.random() * 2;
      const duration = 1.6 + Math.random() * 1.2;
      const color = i % 2 === 0 ? "#ff6b00" : "#20a4dd";
      const shadowColor = i % 2 === 0 ? "rgba(255,107,0,1)" : "rgba(32,164,221,1)";
      return { x, y, scale, duration, color, shadowColor };
    });
  }, []);

  useEffect(() => {
    const updateSize = () => setAtomRadius(getAtomRadius());
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    // phase 0: initial show (Atom + Electron)
    // phase 1: detach electron and move to lightbulb across power lines
    // phase 2: electron absorbed, lightbulb lights up
    // phase 3: expand orange light to cover screen
    // phase 4: fade out loading screen to reveal home page
    const timers = [
      setTimeout(() => setPhase(1), 1200),
      setTimeout(() => setPhase(2), 2700),
      setTimeout(() => setPhase(3), 4000),
      setTimeout(() => setPhase(4), 4800),
      setTimeout(() => onComplete(), 5600)
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black text-white overflow-hidden"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Power Lines Background */}
          <motion.svg 
            className="absolute inset-x-0 w-full h-0 top-1/2 overflow-visible z-0" 
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Wires */}
            <line x1="15%" y1="-15" x2="85%" y2="-15" stroke="#222" strokeWidth="2" />
            <line x1="15%" y1="0" x2="85%" y2="0" stroke="#333" strokeWidth="4" />
            <line x1="15%" y1="15" x2="85%" y2="15" stroke="#222" strokeWidth="2" />
            
            {/* Pole 1 */}
            <svg x="38%" y="0" overflow="visible">
                <line x1="0" y1="-40" x2="0" y2="300" stroke="#333" strokeWidth="6" />
                <line x1="-35" y1="-15" x2="35" y2="-15" stroke="#444" strokeWidth="4" />
                <line x1="-45" y1="15" x2="45" y2="15" stroke="#444" strokeWidth="4" />
                <line x1="0" y1="45" x2="-35" y2="15" stroke="#333" strokeWidth="3" />
                <line x1="0" y1="45" x2="35" y2="15" stroke="#333" strokeWidth="3" />
            </svg>

            {/* Pole 2 */}
            <svg x="62%" y="0" overflow="visible">
                <line x1="0" y1="-40" x2="0" y2="300" stroke="#333" strokeWidth="6" />
                <line x1="-35" y1="-15" x2="35" y2="-15" stroke="#444" strokeWidth="4" />
                <line x1="-45" y1="15" x2="45" y2="15" stroke="#444" strokeWidth="4" />
                <line x1="0" y1="45" x2="-35" y2="15" stroke="#333" strokeWidth="3" />
                <line x1="0" y1="45" x2="35" y2="15" stroke="#333" strokeWidth="3" />
            </svg>
          </motion.svg>

          {/* Atom Structure */}
          <motion.div
            className="absolute left-[15%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-40 sm:h-40 xl:w-56 xl:h-56 z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full text-white">
                <circle cx="100" cy="100" r="30" fill="black" />
                <circle cx="100" cy="100" r="30" fill="currentColor" />
                <path d="M 47,47 A 75,75 0 1,0 80.6,27.6" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Traveling Electron */}
          <motion.div
            className="absolute z-20 drop-shadow-[0_0_15px_rgba(255,107,0,1)] -translate-x-1/2 -translate-y-1/2"
            style={{ width: 32, height: 32 }}
            initial={{ opacity: 0, left: "15%", top: "50%", x: atomRadius, y: -atomRadius, scale: 1 }}
            animate={
              phase === 0 ? { opacity: 1, left: "15%", top: "50%", x: atomRadius, y: -atomRadius, scale: 1 } :
              phase === 1 ? { opacity: 1, left: "85%", top: "50%", x: 0, y: 0, scale: 0.8 } :
              { opacity: 0, left: "85%", top: "50%", x: 0, y: 0, scale: 0 }
            }
            transition={{
              opacity: { duration: 0.3 },
              left: { duration: 1.5, ease: "easeInOut" },
              top: { duration: 1.5, ease: "easeInOut" },
              x: { duration: 1.5, ease: "easeInOut" },
              y: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: phase === 2 ? 0.2 : 1.5 }
            }}
          >
            <svg viewBox="0 0 44 44" className="w-full h-full">
               <circle cx="22" cy="22" r="16" fill="#ff6b00" />
               <circle cx="22" cy="22" r="16" fill="transparent" stroke="#fff" strokeWidth="2" strokeOpacity="0.8" />
               <rect x="15" y="20" width="14" height="4" rx="2" fill="#000000" />
            </svg>
          </motion.div>

          {/* Target Lightbulb */}
          <motion.div
            className="absolute left-[85%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-4 bg-black rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: phase >= 1 ? 1 : 0, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Lightbulb 
              strokeWidth={1.5}
              className={`w-24 h-24 sm:w-32 sm:h-32 xl:w-48 xl:h-48 transition-all duration-700 ease-out ${
                phase >= 2 
                  ? 'text-yellow-400 fill-[rgba(250,204,21,0.3)] drop-shadow-[0_0_40px_rgba(250,204,21,0.9)] scale-110' 
                  : 'text-neutral-700 scale-100'
              }`} 
            />
          </motion.div>

          {/* Dispersing Electrons */}
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: 32,
                height: 32,
                filter: `drop-shadow(0 0 15px ${p.shadowColor})`
              }}
              initial={{ opacity: 0, left: "85%", top: "50%", x: 0, y: 0, scale: 0.5 }}
              animate={
                phase >= 3 
                  ? { opacity: 1, left: "85%", top: "50%", x: p.x, y: p.y, scale: p.scale } 
                  : { opacity: 0, left: "85%", top: "50%", x: 0, y: 0, scale: 0.5 }
              }
              transition={{
                opacity: { duration: 0.1 },
                x: { duration: p.duration, ease: "easeOut" },
                y: { duration: p.duration, ease: "easeOut" },
                scale: { duration: p.duration, ease: "easeOut" }
              }}
            >
              <svg viewBox="0 0 44 44" className="w-full h-full">
                 <circle cx="22" cy="22" r="16" fill={p.color} />
                 <circle cx="22" cy="22" r="16" fill="transparent" stroke="#fff" strokeWidth="2" strokeOpacity="0.8" />
              </svg>
            </motion.div>
          ))}

        </motion.div>
      )}
    </AnimatePresence>
  );
};
