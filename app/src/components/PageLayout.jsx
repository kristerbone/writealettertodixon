import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import SiteNav from './SiteNav'

export default function PageLayout() {
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`page ${revealed ? 'page--revealed' : ''}`}>
      <div className="watermark" aria-hidden="true">
        CLASSIFIED
      </div>

      <div className="document-wrapper">
        <SiteNav />
        <Outlet />
      </div>
    </div>
  )
}
