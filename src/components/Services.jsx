import { Fade } from "react-reveal"
import { services } from "../assets/data/services"
import Heading from "./SmallComponents/Heading"
const Services = () => {
  return (
    <div>
      <div className="container my-30">
        <Heading id="services">Our Services</Heading>
        <div className="row">
          {services.map(({ title, path }, i) => <div key={i} className="col-md-4 col-sm-6 col-lg-4 col-6 p-1 mx-auto">
            <Fade top delay={i * 100}>
              <div className="card">
                <img src={path} alt={title} />
                <p className="font-bold">{title}</p>
              </div>
            </Fade>
          </div>
          )}

        </div>
      </div>

    </div>
  )
}

export default Services