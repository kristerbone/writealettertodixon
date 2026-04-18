import { useState, useEffect } from 'react'

const TARGET = new Date('2026-04-27T16:00:00+02:00')

export default function DocumentFooter() {
  const [time, setTime] = useState(calcRemaining())

  useEffect(() => {
    const id = setInterval(() => setTime(calcRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="doc-footer">
      <div className="doc-footer__status">
        <span className="doc-footer__pulse" />
        <span className="doc-footer__status-text">AWAITING RESPONSE FROM DIXON</span>
      </div>

      <div className="doc-footer__countdown">
        <p className="doc-footer__countdown-label">
          COUNTDOWN TO DC10 CIRCOLOCO OPENING WEEKEND
        </p>
        <div className="doc-footer__countdown-units">
          <Unit value={time.days} label="DAYS" />
          <span className="doc-footer__colon">:</span>
          <Unit value={time.hours} label="HRS" />
          <span className="doc-footer__colon">:</span>
          <Unit value={time.minutes} label="MIN" />
          <span className="doc-footer__colon">:</span>
          <Unit value={time.seconds} label="SEC" />
        </div>
      </div>

      <div className="doc-footer__cta">
        <p>
          This transmission has been published at <strong><writealettertodixon className="club"></writealettertodixon></strong> so
          that all beings &mdash; terrestrial and otherwise &mdash; may bear witness.
        </p>
        <p>
          If you are Dixon, or know Dixon, or have ever stood near Dixon, please forward
          this document. The cosmos will thank you.
        </p>
      </div>

      <div className="doc-footer__classification">
        AHC-2026-DIXON-001 &bull; ARCTURIAN HIGH COUNCIL &bull; <writealettertodixon className="club"></writealettertodixon>
      </div>
    </footer>
  )
}

function Unit({ value, label }) {
  return (
    <div className="countdown-unit">
      <span className="countdown-unit__val">{String(value).padStart(2, '0')}</span>
      <span className="countdown-unit__label">{label}</span>
    </div>
  )
}

function calcRemaining() {
  const diff = Math.max(0, TARGET - new Date())
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}
