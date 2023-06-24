import UpperSectionHeader from "../../common/UpperSectionHeader/UpperSectionHeader"
import KnowledgeCard from "./KnowledgeCard"

const Knowledge = () => {
  return (
    <div>
      <div className="container py-5">
        <UpperSectionHeader upperTitle='You already know ?' upperSubTitle='Useful pet knowledge' upperButtonText='View more'/>
        <div className="row py-3">
          <KnowledgeCard />
        </div>
      </div>
    </div>
  )
}

export default Knowledge