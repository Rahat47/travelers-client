import React from "react";
import "./Stories.scss";
import bgVideo from "../../../../Images/video.mp4";
import { Header } from "semantic-ui-react";
import Testimonials from "./Testimonials";

const Stories = () => {
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
                content="We make people genuinely happy"
            />

            <Testimonials />
        </section>
    );
};

export default Stories;
