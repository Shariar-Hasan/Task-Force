import Heading from "./SmallComponents/Heading"
import { Fade } from "react-reveal"

const Location = () => {
  return (
    <div>
      <Fade>
        <Heading>Our Office</Heading>
      </Fade>

      <Fade>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d102554.37384695158!2d90.42784563168382!3d23.832188691059223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1698699704968!5m2!1sen!2sbd" className="w-100"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </Fade>
    </div >
  )
}

export default Location