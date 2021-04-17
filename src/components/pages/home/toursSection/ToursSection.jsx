import React, { useEffect, useState } from "react";
import {
    Container,
    Dimmer,
    Grid,
    Header,
    Loader,
    Placeholder,
    Segment,
} from "semantic-ui-react";
import TourCard from "./TourCard";
import "./ToursSection.scss";
import { bestTours } from "../../../../API";

const ToursSection = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        async function getBestTours() {
            try {
                const data = await bestTours();
                setTours(data.data.data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getBestTours();
    }, []);
    return (
        <section className="section-tours">
            <Container>
                <Header
                    className="heading-secondary"
                    content="Our Most Popular Tours"
                />
                <Header
                    textAlign="center"
                    content="Rated by everyone, Best of the Bests..."
                    className="card-heading-sub"
                />

                <Grid centered>
                    <Grid.Row>
                        {tours.length > 0 ? (
                            tours.map(tr => <TourCard key={tr._id} tour={tr} />)
                        ) : (
                            <Segment>
                                <Dimmer active>
                                    <Loader />
                                </Dimmer>
                                <Placeholder>
                                    <Placeholder.Header image>
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                    </Placeholder.Header>
                                    <Placeholder.Paragraph>
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                    </Placeholder.Paragraph>
                                </Placeholder>
                            </Segment>
                        )}
                    </Grid.Row>
                </Grid>
            </Container>
        </section>
    );
};

export default ToursSection;
