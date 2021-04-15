import React from "react";
import { Header } from "semantic-ui-react";
import storyAuthor from "../../../../Images/nat-8.jpg";
const StoryCard = () => {
    return (
        <div className="story">
            <figure className="story__shape">
                <img
                    src={storyAuthor}
                    className="story__img"
                    alt="Person on a tour"
                />
                <figcaption className="story__caption">Mary Smith</figcaption>
            </figure>
            <div className="story__text">
                <Header
                    size="large"
                    content="I had a best week with my family"
                    color="green"
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat, impedit? Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Perferendis,
                    velit. Lorem ipsum dolor sit amet consectetur. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Officia
                    laboriosam rerum culpa dolorem{" "}
                </p>
            </div>
        </div>
    );
};

export default StoryCard;
