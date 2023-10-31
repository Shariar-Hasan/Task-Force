import { Fade } from "react-reveal"
import { BsCheckAll } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx"
const PlanCard = ({ index, plan: { title, price, logo, checked, unchecked, classname, buttonText } }) => {
    return (
        <div className="col-12 col-md-4 col-lg-4 px-6">
            <Fade left delay={index * 100}>
                <div className={`sub-card w-100 ${classname}`}>
                    {logo}
                    <h2>{title}</h2>
                    <h3>{price.toLocaleString("bn-bd",
                        { style: "currency", currency: "BDT" }
                    )}</h3>
                    <hr />
                    <ul>
                        {checked.map((chk, i) => <li key={i}><BsCheckAll className="checked" /> {chk}</li>)}
                        {unchecked.map((unchk, i) => <li key={i}><RxCross2 className="unchecked" />{unchk}</li>)}
                    </ul>
                    <div className="text-center">
                        <button className="btn btn-brand px-10 py-2 rounded-sm">{buttonText}</button>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default PlanCard