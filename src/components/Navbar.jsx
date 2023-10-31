import { useState } from "react";
import { routes } from "../assets/data/routes"
import { AiOutlineBars } from "react-icons/ai"
import { GrClose } from "react-icons/gr"
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navbar sticky-top">
            <div className="container navbar-container">
                <div className="logo">
                    <img src="https://img.logoipsum.com/296.svg" alt="Placeholder logo" />
                    <span>TaskForce</span>
                </div>
                <div>
                    <span className="menu-button" onClick={() => setIsOpen(true)}>
                        <AiOutlineBars />
                    </span>
                    <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                        <span className="close-button" onClick={() => setIsOpen(false)}>
                            <GrClose />
                        </span>
                        {
                            routes.map(({ title, path }, i) => <li key={i} className="nav-item">
                                <a href={path}>{title}</a>
                            </li>)
                        }
                    </ul>
                </div>

            </div>
        </nav>
    )
}
