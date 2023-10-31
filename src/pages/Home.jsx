import About from "../components/About"
import { Banner } from "../components/Banner"
import { Brands } from "../components/Brands"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Location from "../components/Location"
import { Navbar } from "../components/Navbar"
import Services from "../components/Services"
import Testimonial from "../components/Testimonial"

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Brands />
            <Services />
            <About />
            <Testimonial />
            <Contact />
            <Location />
            <Footer />
        </>
    )
}

export default Home