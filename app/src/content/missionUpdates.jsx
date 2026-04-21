import { Fragment } from 'react'

/**
 * Circoloco Ibiza DC-10 opening bill (Monday roster — verify dates/handles on official listings).
 * Same-event Instagram handles for diplomatic “adjacent signal” strategy; confirm in-app before use.
 */
const CIRCOLOCO_OPENING_ROSTER_IG = [
  'andmeandyou',
  'alineumberlive',
  'beltran',
  'call_super',
  'carlita',
  'dixon_',
  'gene_on_earth',
  'jambackdj',
  'jenniferrloveless',
  'jimi_jules',
  'lucianolocal',
  'djmoxie',
  'palmstrax',
  'prospa__',
  'rampa_keinemusik',
  'stroxler',
  'sosamusic',
  'sweely_music',
  'taniavulcano_official',
  'tomasstation',
]

function CircolocoOpeningRosterLinks() {
  return (
    <>
      {CIRCOLOCO_OPENING_ROSTER_IG.map((handle, index) => (
        <Fragment key={handle}>
          {index > 0 ? ', ' : null}
          <a href={`https://www.instagram.com/${handle}/`} rel="noopener noreferrer">
            @{handle}
          </a>
        </Fragment>
      ))}
    </>
  )
}

/**
 * Mission updates — add entries as the story expands.
 * Newest entries first. `body` may be a string or an array of paragraphs.
 * Paragraphs may be strings or React nodes (e.g. inline links).
 */
export const missionUpdates = [
  {
    id: '2026-04-21',
    date: '2026-04-21',
    title: 'Fifth field report: engagement shortfall; co-bill roster compiled; print shop defeats cardstock',
    body: [
      'Fifth transmission: relay engagement remains below what the High Council is willing to pretend is “mysterious restraint.” The mission is visible; the mission is not viral. Morale is strained but operational.',
      <>
        Journey objective: accommodation has been secured at{' '}
        <a href="https://www.instagram.com/pikesibiza/" rel="noopener noreferrer">
          @PikesIbiza
        </a>
        . Ambassadors are preparing for onward movement to the island.
      </>,
      <>
        Reach annex: the primary line to{' '}
        <a href="https://www.instagram.com/dixon_" rel="noopener noreferrer">
          DJ Dixon
        </a>{' '}
        is still quiet. Ambassadors have compiled the public Instagram roster for artists billed the same Circoloco DC-10 opening Monday 27th April 2026. Hypothesis: adjacent humans may carry signal without converting this into harassment—polite amplification only.
      </>,
      <>
        <h4>Roster - same Opening Party:</h4>
        <CircolocoOpeningRosterLinks />
      </>,
      'Provisioning setback: embossed business cards intended for dignified handoffs in  corridors and on dancefloors will not clear print deadlines before deployment to Ibiza. A civilization capable of interstellar travel remains humbled by paper stock and “two business days.” The Council is taking it well.',
      'Next objective: sustain relay discipline, cross-link to this frequency.',
      'Mission priority: Maximum groove.',
    ],
  },
  {
    id: '2026-04-19',
    date: '2026-04-19',
    title: 'Fourth field report: two-week embodiment; relay accountability; Ibiza deployment pending',
    body: [
      'Embodiment log: Ambassadors have maintained continuous human form on Earth for approximately fourteen days, with ongoing exploration of the planet’s sensory catalogue. Communication protocols native to this biosphere — timings, tones, platform etiquette—remain a training burden; several incidents are under informal debrief.',
      'Domestic annex: the Delegation is operating within a host family context and has integrated a secondary Terran companion organism (quadruped, fur, high novelty). Field slang: “puppy.” Morale impact: positive. Focus impact: non-zero. Additional shiny stimuli have also competed for attention. The Council notes the mission deadline is approaching.',
      'Relay accountability: following the latest Instagram performance review, the High Council has classified social metrics as mission-critical. The Terran relay is not decorative; it must convert curiosity into signal. Results are expected.',
      <>
        Diplomatic pressure:{' '}
        <a href="https://www.instagram.com/dixon_" rel="noopener noreferrer">
          DJ Dixon
        </a>{' '}
        remains non-responsive on the primary line. Hypotheses filed include 'unawareness', 'competing priorities', or 'caution'.
        The Council elevates this to urgent correspondence: Earth’s groove-adjacent civilizational classification is not a
        joke to the parties filing the paperwork—only half a joke, maximum.
      </>,
      'Movement order: Ambassadors are preparing inter-Earth transit toward Ibiza in support of the Circoloco opening-weekend objective. Objectives unchanged: secure acknowledgment, sustain relay discipline, pursue backstage VIP access with dignity. Mission priority: Maximum groove.',
    ],
  },
  {
    id: '2026-04-18',
    date: '2026-04-18',
    title: 'Third mission update: preliminary follower uptick; harmonic protocol acknowledged',
    body: [
      'The Council has filed its third public communiqué on the Instagram frequency. Direct diplomatic contact with DJ Dixon remains unconfirmed; the mission posture is unchanged.',
      'Preliminary telemetry suggests 4 additional Earthside followers since our previous transmission. Counts are pending full analytics review, but the upward trend is noted with dignified optimism.',
      'Provisioning note: ambassadors have acquired t-shirts bearing the Arcturian High Council’s insignia for the event.',
    ],
  },
  {
    id: '2026-04-15',
    date: '2026-04-15',
    title: 'Contact report: Dixon line unconfirmed; signal amplification authorized',
    body: [
      'Direct diplomatic contact with DJ Dixon has not yet been established. No verified relay through known associates has been confirmed at this time.',
      <>
        The delegation’s Terran social relay (
        <a href="https://www.instagram.com/arcturianhighcouncil" rel="noopener noreferrer">
          @arcturianhighcouncil
        </a>
        ) is active and the full transmission has been posted. Engagement remains below target; the Council has authorized additional field reports on this site and expanded dossier material to improve discoverability.
      </>,
      'Next objective: sustain a steady update cadence, cross-link from relay posts to this frequency, and pursue good-faith visibility in spaces where Circoloco- and Ibiza-adjacent humans cross paths. Priority: Maximum groove.',
    ],
  },
  {
    id: '2026-04-12',
    date: '2026-04-12',
    title: 'Transmission channel online',
    body:
      'Ground relay established. This frequency will carry mission updates, intercepts, and other classified-adjacent fun as the Arcturian delegation continues its very serious diplomatic work.',
  },
]
