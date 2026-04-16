import { missionUpdates } from '../content/missionUpdates'

export default function MissionUpdatesPage() {
  return (
    <>
      <div className="classified-stripe classified-stripe--sub">
        <span className="classified-stripe__bar" aria-hidden="true" />
        <span className="classified-stripe__text">MISSION UPDATES — FIELD REPORTS</span>
        <span className="classified-stripe__bar" aria-hidden="true" />
      </div>

      <article className="document document--secondary">
        <header className="secondary-page__header">
          <h1 className="secondary-page__title">Mission Updates</h1>
        </header>

        <div className="document__rule" />

        {missionUpdates.length === 0 ? (
          <p className="secondary-page__empty">
            No mission updates on record yet. Check back when the next ping lands.
          </p>
        ) : (
          <ol className="mission-update-list">
            {missionUpdates.map((u) => (
              <li key={u.id} className="mission-update-list__item">
                <time className="mission-update-list__date" dateTime={u.date}>
                  {u.date}
                </time>
                <h2 className="mission-update-list__title">{u.title}</h2>
                <UpdateBody body={u.body} />
              </li>
            ))}
          </ol>
        )}
      </article>

      <div className="classified-stripe classified-stripe--sub">
        <span className="classified-stripe__bar" aria-hidden="true" />
        <span className="classified-stripe__text">END MISSION UPDATES</span>
        <span className="classified-stripe__bar" aria-hidden="true" />
      </div>
    </>
  )
}

function UpdateBody({ body }) {
  if (Array.isArray(body)) {
    return body.map((p, i) => (
      <p key={i} className="mission-update-list__text">
        {p}
      </p>
    ))
  }
  return <p className="mission-update-list__text">{body}</p>
}
