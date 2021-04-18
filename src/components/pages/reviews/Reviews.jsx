import React, { useEffect, useState } from "react";
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
import { getAllReviews } from "../../../API";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function getReviews() {
            try {
                const data = await getAllReviews();
                setReviews(data.data.reviews);
            } catch (error) {
                console.log(error);
            }
        }
        getReviews();
    }, []);

    const history = useHistory();

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
                    All Reviews By Our Users
                </Header>

                <Divider />

                {reviews.length > 0 ? (
                    <Table celled padded>
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
                    "Loading...."
                )}
            </Container>
        </Segment>
    );
};

export default Reviews;
