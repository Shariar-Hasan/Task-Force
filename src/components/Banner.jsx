import { Fade } from "react-reveal"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { sliderData } from '../assets/data/sliderData';
export const Banner = () => {
    return (
        <div className='w-full mb-30' id="home">
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {sliderData.map(({ descriptionData, img }, i) => <SwiperSlide key={i}>
                    <div className="slider-section container w-full h-full">
                        <Fade>
                            <div className="row">
                                <div className="col-md-6 col-lg-6 col-12">
                                    <div className='descriptition-section p-10'>
                                        {descriptionData}
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-6 col-12">
                                    <div className='image-section'>
                                        <img className='w-full' src={img} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                </SwiperSlide>)}


            </Swiper>
        </div>
    )
}
