import React, { useContext } from "react";
import { useAlert } from "react-alert";
import { Link, useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { TravelersContext } from "../../../App";
import "./Navbar.scss";

const Navbar = () => {
    const history = useHistory();
    const alert = useAlert();
    const { loggedInUser, setLoggedInUser } = useContext(TravelersContext);
    const logout = () => {
        setLoggedInUser(null);
        localStorage.clear();
        alert.info("You are successfully logged Out.");
        history.push("/");
    };
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
                        <Link to="/tours" className="navigation__link">
                            <span>01</span> Our Tours
                        </Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/orders" className="navigation__link">
                            <span>02</span> Manage Orders
                        </Link>
                    </li>

                    {loggedInUser?.role === "admin" ? (
                        <li className="navigation__item">
                            <Link to="/admin" className="navigation__link">
                                <span>04</span>Admin Panel
                            </Link>
                        </li>
                    ) : (
                        <li className="navigation__item">
                            <Link to="/dashboard" className="navigation__link">
                                <span>04</span>User Dashboard
                            </Link>
                        </li>
                    )}
                    {loggedInUser?.fullName ? (
                        <>
                            <li className="navigation__item">
                                <Link
                                    to="/profile"
                                    className="navigation__link"
                                >
                                    <span>05</span> {loggedInUser.fullName}
                                </Link>
                            </li>
                            <li className="navigation__item">
                                <Button onClick={logout} size="big" negative>
                                    Log Out
                                </Button>
                            </li>
                        </>
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
