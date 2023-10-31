import About from "../components/About"
import { Banner } from "../components/Banner"
import { Brands } from "../components/Brands"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Location from "../components/Location"
import { Navbar } from "../components/Navbar"
import Planning from "../components/Planning"
import Services from "../components/Services"
import SubscribeNewletter from "../components/SubscribeNewletter"
import Testimonial from "../components/Testimonial"

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Brands />
            <Services />
            <About />
            <Planning />
            <Testimonial />
            <Contact />
            <SubscribeNewletter />
            <Location />
            <Footer />
        </>
    )
}

export default Home