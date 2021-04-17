import React from "react";
import {
    Button,
    Container,
    Grid,
    Header,
    Image,
    Segment,
} from "semantic-ui-react";
import "./TourBooking.scss";
import ctaImg from "../../../../Images/nat-3-large.jpg";

const TourBooking = ({ tour }) => {
    return (
        <Container className="cta-section">
            <Segment className="cta">
                <Grid centered verticalAlign="middle">
                    <Grid.Column computer="6">
                        <Image fluid src={ctaImg} />
                    </Grid.Column>
                    <Grid.Column computer="7">
                        <Header className="cta-heading">
                            What are you waiting for ?
                        </Header>
                        <p className="cta-text">
                            {tour?.duration} days. 1 adventure. Infinite
                            memories. Make it yours today!
                        </p>
                    </Grid.Column>
                    <Grid.Column textAlign="center" computer="3">
                        <Button size="huge" positive animated="fade">
                            <Button.Content visible>Book Now!!</Button.Content>
                            <Button.Content hidden>
                                ${tour.price} per person
                            </Button.Content>
                        </Button>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
    );
};

export default TourBooking;
