import { plans } from "../assets/data/plans"
import Heading from "./SmallComponents/Heading"
import PlanCard from "./SmallComponents/PlanCard"
const Planning = () => {
  return (
    <div className="planning-section my-30">
      <div className="container">
        <Heading>Our Packages</Heading>
        <div className="row">
          {
            plans.map((plan, i) => <PlanCard key={i} index={i} plan={plan} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Planning