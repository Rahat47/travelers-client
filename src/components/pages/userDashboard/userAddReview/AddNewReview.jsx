import React, { useContext, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useHistory } from "react-router";
import {
    Button,
    Container,
    Divider,
    Form,
    Header,
    Icon,
    Label,
    Rating,
    Segment,
} from "semantic-ui-react";
import { createNewReview, getAllTours } from "../../../../API";
import { TravelersContext } from "../../../../App";

const AddNewReview = () => {
    const history = useHistory();
    const alert = useAlert();

    const { loggedInUser } = useContext(TravelersContext);

    const [tours, setTours] = useState([]);
    const [reviewData, setReviewData] = useState({});
    useEffect(() => {
        async function getTours() {
            try {
                const { data } = await getAllTours();
                setTours(data.tours);
            } catch (error) {
                console.log(error);
            }
        }
        getTours();
    }, []);

    let options = [];

    if (tours.length > 0) {
        tours.map(tour =>
            options.push({
                key: tour._id,
                value: tour._id,
                text: tour.name,
            })
        );
    }

    const handleSelectChange = (e, { value }) => {
        const newReviewData = { ...reviewData, tour: value };
        setReviewData(newReviewData);
    };

    const handleRate = (e, { rating, maxRating }) => {
        const newReviewData = { ...reviewData, rating };
        setReviewData(newReviewData);
    };

    const handleChange = e => {
        const newReviewData = {
            ...reviewData,
            [e.target.name]: e.target.value,
        };
        setReviewData(newReviewData);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!reviewData.review || !reviewData.rating) {
            return alert.error("Please fill the fields correctly");
        }

        const newReviewData = {
            userImage: loggedInUser.image,
            user: loggedInUser.fullName,
            ...reviewData,
        };

        try {
            await createNewReview(newReviewData);
            alert.success("Review Added successfully");
        } catch (error) {
            console.log(error);
        }
    };

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
                <Header textAlign="center" className="heading-secondary">
                    Share your thoughts for a Tour.
                </Header>

                <Divider />

                <Segment clearing raised>
                    <Header textAlign="center">
                        Write your thoughts here...
                    </Header>
                    <Form onSubmit={handleSubmit}>
                        <Form.Select
                            label="Select Tour"
                            selection
                            options={options}
                            clearable
                            onChange={handleSelectChange}
                            placeholder="Select A Tour"
                        />
                        <Form.TextArea
                            required
                            name="review"
                            placeholder="Your Thoughts..."
                            label="Your Thoughts"
                            onChange={handleChange}
                        />
                        <Label color="green">Select Rating</Label>
                        &nbsp;
                        <Rating
                            size="massive"
                            maxRating={5}
                            onRate={handleRate}
                            icon="star"
                        />
                        <Form.Button primary floated="right" content="Submit" />
                    </Form>
                </Segment>
            </Container>
        </Segment>
    );
};

export default AddNewReview;
