export default function DocumentHeader() {
  return (
    <header className="doc-header">
      <div className="doc-header__top-class">
        TOP SECRET // GROOVE CLEARANCE LEVEL 5
      </div>

      <h1 className="doc-header__title">
        OFFICIAL DIPLOMATIC TRANSMISSION
      </h1>
      <p className="doc-header__org">
        From the Arcturian High Council
      </p>

      <div className="doc-header__fields">
        <Field label="FROM" value="The Office of Interdimensional Cultural Affairs, Arcturian High Council, Star System Arcturus, Bo&ouml;tes Constellation" />
        <Field label="TO" value={<>His Excellency, <strong>DIXON</strong> &mdash; Guardian of the Low End, Keeper of the Groove, Sovereign of the Dancefloor</>} />
        <Field label="RE" value="Formal Request for Backstage VIP &amp; DJ Booth Access &mdash; DC10 Circoloco Opening Weekend, Ibiza, Earth" />
        <Field label="DATE" value="Stardate 2026.04 (Earth Calendar)" />
        <Field label="PRIORITY" value="MAXIMUM GROOVE" classified />
      </div>

      <div className="doc-header__doc-id">
        DOC ID: AHC-2026-DIXON-001 &nbsp;|&nbsp; PAGE 1 OF 1 &nbsp;|&nbsp;
      </div>
    </header>
  )
}

function Field({ label, value, classified }) {
  return (
    <div className="field">
      <span className="field__label">{label}:</span>
      <span className={`field__value ${classified ? 'field__value--classified' : ''}`}>
        {typeof value === 'string' ? <span dangerouslySetInnerHTML={{ __html: value }} /> : value}
      </span>
    </div>
  )
}
