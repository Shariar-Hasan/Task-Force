
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from "../assets/data/testimonialData"
import Heading from "./SmallComponents/Heading"
import TestimoniCard from "./SmallComponents/TestimoniCard"
import { Fade } from "react-reveal"
import { Autoplay, Controller, EffectCoverflow, EffectFade, Navigation, Zoom } from "swiper/modules"
const Testimonial = () => {
    return (
        <div id="testimonials">
            <div className="container-fluid my-30 mx-3">
                <Heading>Testimonials</Heading>
                <Swiper
                    autoplay={{
                        delay: 20000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    spaceBetween={40}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        }
                    }}
                    loop={true}
                    pagination
                    navigation
                    modules={[Autoplay, Navigation]}
                    className="container"
                >
                    {testimonials.map((testimonial, i) => <SwiperSlide className='' key={i}>
                        <div className=" test-slider-section w-full h-full py-10 h-100">
                            <Fade>
                                <TestimoniCard index={i} testimonial={testimonial} />
                            </Fade>
                        </div>
                    </SwiperSlide>)
                    }
                </Swiper>
                {/* <div className="row">
                    
                    {
                        testimonials.map((testimonial, i) => <div key={i} className="col-md-4 col-lg-4 col-12 p-3">
                            <TestimoniCard index={i} testimonial={testimonial} />
                        </div>)
                    }

                </div> */}
            </div>
        </div>
    )
}

export default Testimonial