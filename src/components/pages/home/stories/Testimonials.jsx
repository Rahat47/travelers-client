import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Container } from "semantic-ui-react";
import StoryCard from "./StoryCard";

const Testimonials = () => {
    return (
        <Container textAlign="center" className="story-container">
            <Carousel
                showArrows
                autoPlay
                showStatus={false}
                showThumbs={false}
                infiniteLoop
            >
                <StoryCard />
                <StoryCard />
                <StoryCard />
            </Carousel>
        </Container>
    );
};

export default Testimonials;
