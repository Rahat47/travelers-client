import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import { features } from "./features";
import FeaturesCard from "./FeaturesCard";
import "./Features.scss";
const Features = () => {
    return (
        <section className="feature-section">
            <Container>
                <Header
                    className="feature-heading"
                    content="Benefits of choosing us"
                />
                <Grid>
                    <Grid.Row>
                        {features.map(feature => (
                            <FeaturesCard key={feature.id} feature={feature} />
                        ))}
                    </Grid.Row>
                </Grid>
            </Container>
        </section>
    );
};

export default Features;
