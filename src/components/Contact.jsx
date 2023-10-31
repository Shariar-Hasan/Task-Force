import Heading from "./SmallComponents/Heading"
import contact from "./../assets/images/contact.jpg"
import TextInput from "./Base/TextInput"
import TextareaInput from "./Base/TextareaInput"
import { Fade } from "react-reveal"
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <div className="container my-30" id="contact">
        <Heading id="services">Contact Us</Heading>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <Fade>
              <img src={contact} alt="Contact us" className="w-100" />
            </Fade>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <Fade>
              <div className="contact-form w-75 mx-auto ">
                <form onSubmit={handleSubmit}>
                  <TextInput title={"Name"} placeholder="👤 Your Name" />
                  <TextInput title={"Email"} placeholder="✉️ Your Email" />
                  <TextareaInput title={"Meassge"} placeholder="🗨️ Your Message . . . " />
                  <div className="px-5">
                    <button className="btn btn-outline-brand w-100 py-3 rounded-sm clicked">Send Message</button>
                  </div>
                </form>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact