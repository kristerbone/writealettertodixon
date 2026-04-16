import ClassifiedStripe from '../components/ClassifiedStripe'
import OfficialSeal from '../components/OfficialSeal'
import DocumentHeader from '../components/DocumentHeader'
import LetterBody from '../components/LetterBody'
import SignOff from '../components/SignOff'
import DocumentFooter from '../components/DocumentFooter'

export default function OfficialLetterPage() {
  return (
    <>
      <ClassifiedStripe />

      <article className="document">
        <div className="document__edge document__edge--left" aria-hidden="true" />
        <div className="document__edge document__edge--right" aria-hidden="true" />

        <OfficialSeal />
        <DocumentHeader />

        <div className="document__rule" />

        <LetterBody />
        <SignOff />
        <DocumentFooter />

        <Stamp className="stamp--approved" label="APPROVED" sub="PENDING REVIEW" rotation={14} top="18%" right="-6px" />
        <Stamp className="stamp--received" label="RECEIVED" sub="STARDATE 2026.04" rotation={-10} bottom="30%" left="-4px" />
        <Stamp className="stamp--urgent" label="URGENT" sub="MAXIMUM GROOVE" rotation={-3} top="55%" right="10px" />
      </article>

      <ClassifiedStripe />
    </>
  )
}

function Stamp({ className, label, sub, rotation, top, right, bottom, left }) {
  const style = {
    transform: `rotate(${rotation}deg)`,
    ...(top && { top }),
    ...(right && { right }),
    ...(bottom && { bottom }),
    ...(left && { left }),
  }
  return (
    <div className={`stamp ${className}`} style={style} aria-hidden="true">
      <span className="stamp__label">{label}</span>
      <span className="stamp__sub">{sub}</span>
    </div>
  )
}
