import React from "react";
import { Header, Icon, Segment } from "semantic-ui-react";
const TourSingleHeader = ({ tour }) => {
    return (
        <Segment
            style={{
                backgroundImage: `linear-gradient(
                to right bottom,
                hsla(180, 65%, 59%, 0.849),
                hsla(207, 96%, 37%, 0.849)
            ),
            url(${tour.imageCover})`,
            }}
            padded
            className="single-tour-header"
        >
            <div className="site-header__text-box">
                <Header className="heading--primary single-tour-header">
                    <span>{tour.name}</span>
                </Header>
                <Header size="huge" color="olive">
                    <span>
                        <Icon name="clock outline" />
                        {tour.duration} Days
                    </span>
                    &nbsp; &nbsp; &nbsp;
                    <span>
                        <Icon name="map outline" />
                        {tour.startLocation}
                    </span>
                </Header>
            </div>
        </Segment>
    );
};

export default TourSingleHeader;
