import Heading from "./SmallComponents/Heading"
import SubHeading from "./SmallComponents/SubHeading"
import { ImCheckboxChecked } from "react-icons/im"
import { Fade } from "react-reveal"
const About = () => {
  return (
    <div className=" about-us-top">
      <div className="container my-30">
        <Heading id="about">About Us</Heading>
        <Fade >
          <div className="px-3">
            <SubHeading>Our Misssion</SubHeading>
          </div>
          
        </Fade>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12 p-3">
            <Fade left delay={0}>
              <div>
                <p className="font-thin">Our Main goal is to lead the technology field in bangladseh with high scalable, availabiliy of high secure application and products in market with proper technological idea about the industry.</p>
                <p className="font-thin">We have over 1000 years of experienc in developmet of web technology in any kind of field.</p>
                <p className="font-thin">We encourage the youngs to take part in all kinds of technological event to build up their technological skill more hardly</p>
                <button className="btn btn-brand px-6 py-3 rounded-lg clicked">Join Out Mission</button>
              </div>
            </Fade>
          </div>
          <div className="col-md-6 col-lg-6 col-12 p-3">
            <Fade right delay={100}>
              <div className="about-us">
                <ul className="">
                  <li className="mb-5"><ImCheckboxChecked className="text-brand mr-2" /><h5>Contribute to 4th industrial evoluation</h5></li>
                  <li className="mb-5"><ImCheckboxChecked className="text-brand mr-2" /><h5>Lead the current technological </h5></li>
                  <li className="mb-5"><ImCheckboxChecked className="text-brand mr-2" /><h5>Lead in every sector in the country</h5></li>
                  <li className="mb-5"><ImCheckboxChecked className="text-brand mr-2" /><h5>Build the Digital Bangladesh</h5></li>
                  <li className="mb-5"><ImCheckboxChecked className="text-brand mr-2" /><h5>Be a business Empire</h5></li>
                </ul>
              </div>
            </Fade>
          </div>
        </div>

      </div>
    </div >
  )
}

export default About