export function CubeWireframe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`opacity-30 ${className}`}>
      <defs>
        <linearGradient id="wireframeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        d="M50 5 L90 25 L90 65 L50 85 L10 65 L10 25 Z M50 5 L50 45 M50 45 L90 25 M50 45 L10 25 M50 45 L50 85 M10 65 L50 45 L90 65"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />
      {/* Inner detailed lines */}
      <path
        d="M30 15 L70 35 M70 35 L70 75 M70 75 L30 55 M30 55 L30 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.2"
        strokeDasharray="2 2"
        className="opacity-50"
      />
    </svg>
  );
}

export function DimensionLine({ className, width = 100 }: { className?: string, width?: number }) {
  return (
    <svg width={width} height="40" className={`opacity-40 ${className}`} viewBox={`0 0 ${width} 40`}>
      {/* Main dimension line */}
      <line x1="0" y1="20" x2={width} y2="20" stroke="currentColor" strokeWidth="0.5" />
      
      {/* End caps */}
      <line x1="0" y1="15" x2="0" y2="25" stroke="currentColor" strokeWidth="0.5" />
      <line x1={width} y1="15" x2={width} y2="25" stroke="currentColor" strokeWidth="0.5" />
      
      {/* Arrows */}
      <path d="M0 20 L5 18 M0 20 L5 22" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d={`M${width} 20 L${width - 5} 18 M${width} 20 L${width - 5} 22`} stroke="currentColor" strokeWidth="0.5" fill="none" />
      
      {/* Measurement Text */}
      <text x={width / 2} y="12" fontSize="6" fill="currentColor" textAnchor="middle" fontFamily="monospace" letterSpacing="1px">
        AXIS-Y: {width}mm
      </text>
      
      {/* Dashed extension lines */}
      <line x1="0" y1="25" x2="0" y2="35" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-50" />
      <line x1={width} y1="25" x2={width} y2="35" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-50" />
    </svg>
  );
}

export function Gear({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`opacity-20 ${className}`}>
      {/* Outer Ring */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 5" />
      
      {/* Complex Gear Shape */}
      <path 
        d="M50 15 
           L53 8 L58 8 L61 15 L65 16 L70 11 L74 13 L73 20 L76 23 L83 21 L86 24 L81 30 L83 34 L90 37 L91 41 L85 45 L85 50 L91 54 L90 58 L83 61 L81 65 L86 71 L83 74 L76 72 L73 75 L74 82 L70 84 L65 79 L61 80 L58 87 L53 87 L50 80 L47 87 L42 87 L39 80 L35 79 L30 84 L26 82 L27 75 L24 72 L17 74 L14 71 L19 65 L17 61 L10 58 L9 54 L15 50 L15 45 L9 41 L10 37 L17 34 L19 30 L14 24 L17 21 L24 23 L27 20 L26 13 L30 11 L35 16 L39 15 L42 8 L47 8 Z" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.8"
      />
      
      {/* Inner Details */}
      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
      <circle cx="50" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
      
      {/* Crosshairs */}
      <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.2" />
      <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.2" />
    </svg>
  );
}

export function CircuitNode({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`opacity-30 ${className}`}>
      {/* Nodes */}
      <circle cx="20" cy="20" r="3" fill="currentColor" />
      <circle cx="80" cy="20" r="2" fill="none" stroke="currentColor" />
      <circle cx="50" cy="50" r="4" fill="none" stroke="currentColor" />
      <circle cx="20" cy="80" r="2" fill="none" stroke="currentColor" />
      <circle cx="80" cy="80" r="3" fill="currentColor" />
      
      {/* Connections */}
      <path d="M20 20 L50 50 L80 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M20 80 L50 50 L80 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M20 20 L20 80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      <path d="M80 20 L80 80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      
      {/* Data bits */}
      <rect x="45" y="15" width="10" height="2" fill="currentColor" className="animate-pulse" />
      <rect x="45" y="83" width="10" height="2" fill="currentColor" className="animate-pulse" />
    </svg>
  );
}
