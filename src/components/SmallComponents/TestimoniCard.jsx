import { BiSolidQuoteLeft } from "react-icons/bi"
const TestimoniCard = ({ index, testimonial: { quote, author, profession, avater } }) => {
    return (
        <div className="test-card w-100">
            <span className="quote"><BiSolidQuoteLeft className="text-brand" /></span>
            <img className="test-avater rounded-full" src={avater + (index + 1)} alt="random placeholder" />
            <div className="p-5">
                <p className="font-thin">{quote}</p>
                <hr className="my-2" />
                <strong>{author}</strong>
                <br />
                <span className="test-profession">{profession}</span>
            </div>
        </div>
    )
}

export default TestimoniCard