import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { getReviewByTourId, singleTour } from "../../../../API";
import { TravelersContext } from "../../../../App";
import TourBooking from "../tourBooking/TourBooking";
import "./TourSingle.scss";
import TourSingleDetails from "./TourSingleDetails";
import TourSingleHeader from "./TourSingleHeader";
import TourSingleReviews from "./TourSingleReviews";
const TourSingle = () => {
    const { id } = useParams();
    const { loggedInUser, setLoggedInUser } = useContext(TravelersContext);
    const [tour, setTour] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function getSinleTour(id) {
            try {
                const data = await singleTour(id);
                setTour(data.data.tour);
            } catch (error) {
                console.log(error);
            }
        }
        getSinleTour(id);
    }, [id]);

    useEffect(() => {
        async function getReviewForTour(id) {
            try {
                const data = await getReviewByTourId(id);
                setReviews(data.data.reviews);
            } catch (error) {
                console.log(error);
            }
        }
        getReviewForTour(id);
    }, [id]);

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
            <TourSingleHeader tour={tour} />
            <TourSingleDetails tour={tour} />
            <TourSingleReviews reviews={reviews} />
            <TourBooking tour={tour} />
        </div>
    );
};

export default TourSingle;
