import { BiSolidQuoteLeft } from "react-icons/bi"
const TestimoniCard = () => {
    return (
        <div className="test-card">
            <span><BiSolidQuoteLeft /></span>
            <img className="test-avater rounded-full" src="https://i.pravatar.cc/80?img=1" alt="random placeholder" />
            <div className="p-5">

                <p className="font-thin">Complete recommendation for the Company from my side</p>
                <hr className="my-2" />
                <strong>Json Akter</strong>
                <br />
                <span>CEO, Chief Minister</span>
            </div>
        </div>
    )
}

export default TestimoniCard