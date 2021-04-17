import React from "react";
import { Grid, Icon } from "semantic-ui-react";

const ReviewCard = ({ review }) => {
    return (
        <Grid.Column computer="4" tablet="8" mobile="16">
            <div className="reviews__card">
                <div className="reviews__avatar">
                    <img
                        className="reviews__avatar-img"
                        src={review.userImage}
                        alt={review.user}
                    />
                    <h6 className="reviews__user">{review.user}</h6>
                </div>
                <div className="reviews__rating">
                    {review.rating}
                    /5
                    <Icon name="star" color="yellow" />
                </div>
                <p className="reviews__text">{review.review}</p>
            </div>
        </Grid.Column>
    );
};

export default ReviewCard;
