import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { TravelersContext } from "../../../../App";
import "./TourSingle.scss";
import TourSingleHeader from "./TourSingleHeader";
const TourSingle = () => {
    const { loggedInUser, setLoggedInUser } = useContext(TravelersContext);

    return (
        <div>
            <header className="tour-single-header">
                <nav className="nav nav--tours">
                    <Link to="/tours" className="nav__el">
                        All tours
                    </Link>
                </nav>

                <nav className="nav nav--user">
                    <Button
                        negative
                        onClick={() => {
                            setLoggedInUser(null);
                            localStorage.clear();
                        }}
                        className="nav__el"
                    >
                        Log out
                    </Button>
                    <Link className="nav__el" to="/profile">
                        <img
                            className="nav__user-img"
                            src={loggedInUser.image}
                            alt="..."
                        />
                        <span>{loggedInUser.fullName.split(" ")[0]}</span>
                    </Link>
                </nav>
            </header>
            <TourSingleHeader />
        </div>
    );
};

export default TourSingle;
