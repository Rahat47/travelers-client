import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Container, Message } from "semantic-ui-react";
import StoryCard from "./StoryCard";
import { getFiveLatestReviews } from "../../../../API";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        async function getFiveLatestReview() {
            try {
                const data = await getFiveLatestReviews();
                setReviews(data.data.reviews);
            } catch (error) {
                console.log(error);
            }
        }
        getFiveLatestReview();
    }, []);
    return (
        <Container textAlign="center" className="story-container">
            {reviews.length > 0 ? (
                <Carousel
                    showArrows
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop
                >
                    {reviews.map(rv => (
                        <StoryCard key={rv._id} review={rv} />
                    ))}
                </Carousel>
            ) : (
                <Message info content="Loading..." />
            )}
        </Container>
    );
};

export default Testimonials;
