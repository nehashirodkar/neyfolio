/**
 * Animated abstract avatar — three concentric rotating dashed rings around a
 * pulsing radial-gradient core, with two small orbiting "satellite" dots at
 * different radii. Reads as a tiny living energy core.
 *
 * Designed to fill a 128px circular container (the avatar slot in Orbital).
 */
export default function AnimatedAvatar() {
  return (
    <svg
      viewBox="-50 -50 100 100"
      className="w-full h-full"
      aria-hidden
    >
      <defs>
        {/* Hot inner core gradient — bright pink/violet falling off to dark */}
        <radialGradient id="av-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#fce7f3" stopOpacity="1" />
          <stop offset="35%"  stopColor="#c084fc" stopOpacity="0.95" />
          <stop offset="75%"  stopColor="#7c3aed" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0" />
        </radialGradient>
        {/* Subtle cyan/violet wash for rings */}
        <linearGradient id="av-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#22d3ee" />
          <stop offset="50%"  stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#e879f9" />
        </linearGradient>
      </defs>

      {/* Outer dashed ring — slow, counter-clockwise */}
      <circle
        cx="0" cy="0" r="44"
        fill="none"
        stroke="#22d3ee"
        strokeOpacity="0.7"
        strokeWidth="0.8"
        strokeDasharray="5 4"
        strokeLinecap="round"
        className="av-spin-slow-rev"
      />

      {/* Middle dashed ring — medium, clockwise */}
      <circle
        cx="0" cy="0" r="32"
        fill="none"
        stroke="#a78bfa"
        strokeOpacity="0.75"
        strokeWidth="0.7"
        strokeDasharray="3 3"
        strokeLinecap="round"
        className="av-spin-med"
      />

      {/* Inner dashed ring — fast, counter-clockwise */}
      <circle
        cx="0" cy="0" r="20"
        fill="none"
        stroke="#e879f9"
        strokeOpacity="0.85"
        strokeWidth="0.6"
        strokeDasharray="2 2"
        strokeLinecap="round"
        className="av-spin-fast-rev"
      />

      {/* Pulsing core orb */}
      <circle
        cx="0" cy="0" r="13"
        fill="url(#av-core)"
        className="av-pulse-soft"
      />

      {/* Tiny bright core dot */}
      <circle
        cx="0" cy="0" r="2"
        fill="#fce7f3"
        opacity="0.9"
      />

      {/* Satellite dot on outer ring — orbits with outer ring direction/speed */}
      <g className="av-spin-slow-rev">
        <circle cx="44" cy="0" r="1.6" fill="#22d3ee">
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Satellite dot on middle ring */}
      <g className="av-spin-med">
        <circle cx="32" cy="0" r="1.3" fill="#e879f9">
          <animate
            attributeName="opacity"
            values="0.6;1;0.6"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Satellite dot on inner ring */}
      <g className="av-spin-fast-rev">
        <circle cx="20" cy="0" r="1" fill="#a78bfa" />
      </g>
    </svg>
  );
}
