import React from "react";
import { Header } from "semantic-ui-react";
const StoryCard = ({ review }) => {
    return (
        <div className="story">
            <figure className="story__shape">
                <img
                    src={review.userImage}
                    className="story__img"
                    alt={review.user}
                />
                <figcaption className="story__caption">
                    {review.user}
                </figcaption>
            </figure>
            <div className="story__text">
                <Header size="large" content={review.user} color="green" />
                <p>{review.review}</p>
            </div>
        </div>
    );
};

export default StoryCard;
