import { FaArrowAltCircleUp } from "react-icons/fa"
const ScrollToTop = () => {
    return (
        <div onClick={() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }} className="p-3 scroll-to-top cursor-pointer" title="Scroll to Top ">
            <FaArrowAltCircleUp />
        </div>
    )
}

export default ScrollToTop