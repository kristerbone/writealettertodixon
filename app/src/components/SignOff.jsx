export default function SignOff() {
  return (
    <section className="sign-off">
      <p className="sign-off__valediction">
        With infinite respect, deep bass, and unconditional love from across the cosmos,
      </p>

      <div className="sign-off__signature-block">
        <div className="sign-off__signature-line" aria-hidden="true" />
        <p className="sign-off__name">The Arcturian High Council</p>
        <p className="sign-off__title">
          Office of Interdimensional Cultural Affairs
        </p>
        <p className="sign-off__tagline">
          &ldquo;We came 36.7 light-years. The least you can do is put us on the list.&rdquo;
        </p>
      </div>

      <div className="sign-off__comms">
        <div className="sign-off__comms-header">
          <span className="sign-off__comms-line" />
          <span className="sign-off__comms-label">SECURE DIPLOMATIC CHANNEL</span>
          <span className="sign-off__comms-line" />
        </div>
        <p className="sign-off__comms-note">
          For ongoing interdimensional communiqu&eacute;s, the Council maintains a
          presence on Earth&rsquo;s primitive but endearing &ldquo;Instagram&rdquo; network.
          We do not fully understand the algorithm, but we have been told it helps.
        </p>
        <a
          href="https://www.instagram.com/arcturianhighcouncil"
          target="_blank"
          rel="noopener noreferrer"
          className="sign-off__ig-link"
        >
          <span className="sign-off__ig-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <span className="sign-off__ig-handle">@arcturianhighcouncil</span>
          <span className="sign-off__ig-clearance">CLEARANCE: PUBLIC (regrettably)</span>
        </a>
        <p className="sign-off__comms-footnote">
          * The Council accepts no responsibility for any followers who experience
          spontaneous third-eye activation while viewing our content.
        </p>
      </div>
    </section>
  )
}
