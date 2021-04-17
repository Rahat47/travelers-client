import React from "react";
import { Divider, Grid, Header, Segment } from "semantic-ui-react";
import bgVideo from "../../../../Images/video.mp4";
import { Carousel } from "react-responsive-carousel";

import ReviewCard from "./ReviewCard";
const TourSingleReviews = ({ reviews }) => {
    return (
        <section className="section-stories">
            <div className="bg-video">
                <video autoPlay muted loop className="bg-video__content">
                    <source src={bgVideo} type="video/mp4" />
                </video>
            </div>

            <Header
                textAlign="center"
                className="heading-secondary"
                content="What Our Amazing Have To Say"
            />
            <Divider hidden />
            <Grid container centered>
                {reviews.length > 0 ? (
                    <Carousel
                        showArrows
                        autoPlay
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop
                    >
                        {reviews.map(review => (
                            <ReviewCard key={review._id} review={review} />
                        ))}
                    </Carousel>
                ) : (
                    <Segment padded>
                        <Header>There are no reviews for this Tour..</Header>
                    </Segment>
                )}
            </Grid>
        </section>
    );
};

export default TourSingleReviews;
