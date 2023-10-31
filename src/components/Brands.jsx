import Marquee from "react-fast-marquee"
import { brands } from "../assets/data/brands"
import { Fade } from "react-reveal"
export const Brands = () => {
    return (
        <div className="container-fluid my-30">
            <Fade>
                <Marquee
                    pauseOnHover
                    direction="right"
                    speed={10}
                    gradient
                >
                    {brands.map(({ title, link }, i) => <span key={i} className="mx-5"><img src={link} alt={title} title={title} /></span>)}
                </Marquee>
            </Fade>
        </div>
    )
}
