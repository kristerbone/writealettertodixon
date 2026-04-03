export default function OfficialSeal() {
  const ticks = Array.from({ length: 36 }, (_, i) => {
    const angle = (i * 10 * Math.PI) / 180
    return (
      <line
        key={i}
        x1={100 + 82 * Math.cos(angle)}
        y1={100 + 82 * Math.sin(angle)}
        x2={100 + (i % 3 === 0 ? 92 : 87) * Math.cos(angle)}
        y2={100 + (i % 3 === 0 ? 92 : 87) * Math.sin(angle)}
        stroke="currentColor"
        strokeWidth={i % 3 === 0 ? '1.5' : '0.8'}
      />
    )
  })

  return (
    <div className="seal" aria-label="Official Seal of the Arcturian High Council">
      <svg viewBox="0 0 200 200" className="seal__svg">
        <defs>
          <path id="outerArc" d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0" />
          <path id="innerArc" d="M 100,100 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" />
        </defs>

        <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="1" />

        {ticks}

        <text className="seal__text-outer" fill="currentColor">
          <textPath href="#outerArc" startOffset="2%">
            &#9733; ARCTURIAN HIGH COUNCIL &#9733; INTERDIMENSIONAL CULTURAL AFFAIRS &#9733; BO&Ouml;TES &#9733;
          </textPath>
        </text>

        <text className="seal__text-inner" fill="currentColor">
          <textPath href="#innerArc" startOffset="5%">
            &#9733; STAR SYSTEM ARCTURUS &#9733; EST. 10,000 B.E. &#9733;
          </textPath>
        </text>

        {/* Central star */}
        <polygon
          points="100,58 106,80 128,80 110,92 117,114 100,102 83,114 90,92 72,80 94,80"
          fill="currentColor"
        />

        {/* Orbital rings around star */}
        <ellipse cx="100" cy="86" rx="22" ry="8" fill="none" stroke="currentColor" strokeWidth="0.6" transform="rotate(-20 100 86)" />
        <ellipse cx="100" cy="86" rx="22" ry="8" fill="none" stroke="currentColor" strokeWidth="0.6" transform="rotate(20 100 86)" />
      </svg>
    </div>
  )
}
