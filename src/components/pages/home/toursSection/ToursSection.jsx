import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import TourCard from "./TourCard";
import "./ToursSection.scss";

const ToursSection = () => {
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
                        <TourCard />
                        <TourCard />
                    </Grid.Row>
                </Grid>
            </Container>
        </section>
    );
};

export default ToursSection;
