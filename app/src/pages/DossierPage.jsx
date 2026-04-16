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
            Dixon—formally requesting backstage VIP access at DC10 Circoloco Opening Weekend, Ibiza. 36.666666 light-years
            deserves a spot on the list.
          </p>
        </div>

        <div className="dossier-section">
          <h2 className="dossier-section__title">This site</h2>
          <p>
            The <Link to="/">Official Letter</Link> is the full transmission.{' '}
            <Link to="/mission-updates">Mission Updates</Link> has relay notices, field reports, and extras as the concept
            grows. This dossier is the boring-but-useful context file.
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
                The site is real. The backstage pass is aspirational until someone with a laminator agrees. The vibe is
                sincere.
              </p>
            </div>
            <div className="dossier-faq__item">
              <h3 className="dossier-faq__q">Why Dixon?</h3>
              <p className="dossier-faq__a">
                Because 36.666666 light-years of travel should not end in a queue. The Council has taste.
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
                amplification beats bot energy.
              </p>
            </div>
          </div>
        </div>

        <div className="dossier-section">
          <h2 className="dossier-section__title">Colophon</h2>
          <p>
            Published at{' '}
            <a href="https://writealettertodixon.com" rel="noopener noreferrer">
              writealettertodixon.com
            </a>
            .
          </p>
        </div>

        <p className="dossier-footnote">“We came 36.666666 light-years.”</p>
      </article>

      <div className="classified-stripe classified-stripe--sub">
        <span className="classified-stripe__bar" aria-hidden="true" />
        <span className="classified-stripe__text">END DOSSIER</span>
        <span className="classified-stripe__bar" aria-hidden="true" />
      </div>
    </>
  )
}
