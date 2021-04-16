import React from "react";
import { Link } from "react-router-dom";
import { Divider, Header, Segment } from "semantic-ui-react";
import TourContainer from "./tourContainer/TourContainer";
import "./Tours.scss";
const Tours = () => {
    return (
        <section className="tours-page">
            <Segment className="tours-header">
                <div className="tours-header__logo-box">
                    <Header
                        as={Link}
                        to="/"
                        content="Travelers"
                        size="huge"
                        style={{
                            color: "#fff",
                            fontFamily: " cursive",
                        }}
                    />
                </div>

                <div className="tours-header__text-box">
                    <Header
                        content="Our Tours..."
                        className="heading--primary"
                    />
                    <Header
                        content="Find tours that will heal your souls..."
                        className="tours--primary--sub"
                    />
                    <Divider hidden />
                </div>
            </Segment>

            <TourContainer />
        </section>
    );
};

export default Tours;
