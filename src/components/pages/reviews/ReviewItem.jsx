import React from "react";
import { Link } from "react-router-dom";
import { Image, Rating, Table } from "semantic-ui-react";

const ReviewItem = ({ review }) => {
    return (
        <Table.Row>
            <Table.Cell collapsing>
                <Image alt={review.user} avatar src={review.userImage} />
                <span>{review.user}</span>
            </Table.Cell>
            <Table.Cell>{review.review}</Table.Cell>
            <Table.Cell>{new Date(review.reviewdAt).toDateString()}</Table.Cell>
            <Table.Cell textAlign="right">
                <Link to={`/tours/${review.tour}`}>{review.tour}</Link>
            </Table.Cell>
            <Table.Cell>
                <Rating
                    rating={review.rating}
                    disabled
                    icon="heart"
                    maxRating={5}
                />
            </Table.Cell>
        </Table.Row>
    );
};

export default ReviewItem;
