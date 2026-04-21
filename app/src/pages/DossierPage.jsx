import { Link } from 'react-router-dom'

export default function DossierPage() {
  return (
    <>
      <div className="classified-stripe classified-stripe--sub">
        <span className="classified-stripe__bar" aria-hidden="true" />
        <span className="classified-stripe__text">DOSSIER — CONTEXT &amp; META</span>
        <span className="classified-stripe__bar" aria-hidden="true" />
      </div>

      <article className="document document--secondary">
        <header className="secondary-page__header">
          <h1 className="secondary-page__title">Dossier</h1>
          <p className="secondary-page__lede">What this is, in plain Earth terms.</p>
        </header>

        <div className="document__rule" />

        <div className="dossier-section">
          <h2 className="dossier-section__title">Mission</h2>
          <p>
            <em>Write A Letter To Dixon</em> is an official diplomatic transmission from the Arcturian High Council to DJ
            Dixon—formally requesting backstage VIP access at DC10 Circoloco Opening Weekend, Ibiza.
          </p>
          <p>
            The delegation also maintains a Terran social relay with periodic field reports. A fifth update is on record:
            engagement remains below target, and the Council has authorized a compiled roster of Instagram contacts tied to
            the same Circoloco opening bill—polite amplification, not spam—because direct line-of-sight to DJ Dixon is still
            missing. Embossed business cards missed the print deadline; diplomacy continues without cardstock. Instagram
            performance stays mission-critical. Groove-capable civilization is still on the table. 36.666666 light-years does
            not negotiate with obscurity.
          </p>
        </div>

        <div className="dossier-section">
          <h2 className="dossier-section__title">This site</h2>
          <p>
            The <Link to="/">Official Letter</Link> is the full transmission.{' '}
            <Link to="/mission-updates">Mission Updates</Link> has relay notices, field reports, and extras as the concept
            grows.
          </p>
        </div>

        <div className="dossier-section">
          <h2 className="dossier-section__title">Ambassadors</h2>
          <p>
            The delegation operates under the Arcturian High Council’s Office of Interdimensional Cultural Affairs. Their
            credentials are impeccable; their grasp of Instagram’s algorithm is a work in progress. They maintain a public
            relay at{' '}
            <a href="https://www.instagram.com/arcturianhighcouncil" rel="noopener noreferrer">
              @arcturianhighcouncil
            </a>{' '}
            for Earthside updates and morale.
          </p>
        </div>

        <div className="dossier-section">
          <h2 className="dossier-section__title">FAQ</h2>
          <div className="dossier-faq">
            <div className="dossier-faq__item">
              <h3 className="dossier-faq__q">Is this real?</h3>
              <p className="dossier-faq__a">
                Yes.
              </p>
            </div>
            <div className="dossier-faq__item">
              <h3 className="dossier-faq__q">Why Dixon?</h3>
              <p className="dossier-faq__a">
                The High Council has very high standards and impeccable taste
              </p>
            </div>
            <div className="dossier-faq__item">
              <h3 className="dossier-faq__q">What happens if he replies?</h3>
              <p className="dossier-faq__a">
                Protocol calls for dignified celebration, followed by immediate publication of a Mission Update written in
                calm, professional caps lock.
              </p>
            </div>
            <div className="dossier-faq__item">
              <h3 className="dossier-faq__q">Can I help?</h3>
              <p className="dossier-faq__a">
                Share the letter, tag thoughtfully (not spam), and send curious humans to this transmission. Good-faith
                amplification.
              </p>
            </div>
          </div>
        </div>

        <div className="dossier-section">
          <h2 className="dossier-section__title">Colophon</h2>
          <p>
            Published at{' '}
            <a href="https://writealettertodixon.club" rel="noopener noreferrer">
              writealettertodixon.club
            </a>
            .
          </p>
        </div>

      </article>

      <div className="classified-stripe classified-stripe--sub">
        <span className="classified-stripe__bar" aria-hidden="true" />
        <span className="classified-stripe__text">END DOSSIER</span>
        <span className="classified-stripe__bar" aria-hidden="true" />
      </div>
    </>
  )
}
