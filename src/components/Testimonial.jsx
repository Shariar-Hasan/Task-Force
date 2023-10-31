import Heading from "./SmallComponents/Heading"
import TestimoniCard from "./SmallComponents/TestimoniCard"

const Testimonial = () => {
    return (
        <div id="testimonials">
            <div className="container my-20">
                <Heading>Testimonials</Heading>
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-12">
                        <TestimoniCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial