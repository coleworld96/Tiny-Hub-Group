export const Logo = ({ className = "w-24 h-24" }) => {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Center Solid White Circle */}
      <circle cx="100" cy="100" r="30" fill="#ffffff" />
      
      {/* Outer White Ring with gap at top left */}
      <path d="M 47,47 A 75,75 0 1,0 80.6,27.6" stroke="#ffffff" strokeWidth="8" fill="none" strokeLinecap="round" />
      
      {/* Orange Circle with White Outline and Black Minus */}
      <circle cx="153" cy="47" r="22" fill="#ff6b00" stroke="#ffffff" strokeWidth="8" />
      <rect x="143" y="43" width="20" height="8" rx="4" fill="#000000" />
    </svg>
  );
};
