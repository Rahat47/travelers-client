import React from "react";
import { Button, Divider, Header, Segment } from "semantic-ui-react";
import "./MainHeader.scss";
import { Link } from "react-router-dom";

const MainHeader = () => {
    return (
        <Segment padded className="site-header" as="header">
            <div className="site-header__logo-box">
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

            <div className="site-header__text-box">
                <Header content="Travelers..." className="heading--primary" />
                <Header
                    content="Where magic happens..."
                    className="heading--primary--sub"
                />
                <Divider hidden />
                <Button
                    as={Link}
                    to="/tours"
                    content="Discover Our Tours"
                    positive
                    size="big"
                    className="btn btn-primary"
                />
            </div>
        </Segment>
    );
};

export default MainHeader;
