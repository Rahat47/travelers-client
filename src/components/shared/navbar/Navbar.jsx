import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TravelersContext } from "../../../App";
import "./Navbar.scss";

const Navbar = () => {
    const { loggedInUser } = useContext(TravelersContext);
    return (
        <div className="navigation">
            <input
                type="checkbox"
                className="navigation__checkbox"
                id="nav-toggle"
            />

            <label htmlFor="nav-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <Link to="/about" className="navigation__link">
                            <span>01</span> About Us
                        </Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/tours" className="navigation__link">
                            <span>02</span>Our Tours
                        </Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/reviews" className="navigation__link">
                            <span>03</span>Tour Reviews
                        </Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/admin" className="navigation__link">
                            <span>04</span>Admin Panel
                        </Link>
                    </li>
                    {loggedInUser?.fullName ? (
                        <li className="navigation__item">
                            <Link to="/profile" className="navigation__link">
                                <span>05</span> {loggedInUser.fullName}
                            </Link>
                        </li>
                    ) : (
                        <li className="navigation__item">
                            <Link to="/auth" className="navigation__link">
                                <span>05</span>Sign In
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
