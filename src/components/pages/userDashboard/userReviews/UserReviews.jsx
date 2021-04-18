import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
    Button,
    Container,
    Divider,
    Header,
    Icon,
    Segment,
    Table,
} from "semantic-ui-react";
import { getReviewsByUser } from "../../../../API";
import { TravelersContext } from "../../../../App";
import ReviewItem from "../../reviews/ReviewItem";

const UserReviews = () => {
    const { loggedInUser } = useContext(TravelersContext);
    const history = useHistory();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function getReviewForCurrentUser() {
            try {
                const data = await getReviewsByUser(loggedInUser.fullName);
                setReviews(data.data.reviews);
            } catch (error) {
                console.log(error);
            }
        }
        getReviewForCurrentUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Segment>
            <Container>
                <Button
                    onClick={() => history.goBack()}
                    secondary
                    floated="left"
                    circular
                    icon
                >
                    <Icon name="backward" />
                </Button>
                <Header textAlign="center" color="red" size="huge">
                    All Reviews By You
                </Header>

                <Divider />

                {reviews.length > 0 ? (
                    <Table inverted celled padded>
                        <Table.Header>
                            <Table.Row textAlign="center">
                                <Table.HeaderCell singleLine>
                                    User
                                </Table.HeaderCell>
                                <Table.HeaderCell>Review</Table.HeaderCell>
                                <Table.HeaderCell>Reviewd At</Table.HeaderCell>
                                <Table.HeaderCell>Tour Id</Table.HeaderCell>
                                <Table.HeaderCell>Rating</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {reviews.map(rev => (
                                <ReviewItem key={rev._id} review={rev} />
                            ))}
                        </Table.Body>
                    </Table>
                ) : (
                    "Looks like you don't have any reviews posted..."
                )}
            </Container>
        </Segment>
    );
};

export default UserReviews;
