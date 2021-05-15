import React from "react";
import { Link } from "react-router-dom";
import { Container, Divider, Grid, Header, Icon } from "semantic-ui-react";
import "./Footer.scss";
const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column computer={16}>
                            <h1 className="footer-heading">Travelers...</h1>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column computer="8">
                            <Divider />
                            <div className="footer__list">
                                <Link to="#" className="footer__link">
                                    Company
                                </Link>

                                <Link to="#" className="footer__link">
                                    Contact Us
                                </Link>

                                <Link to="#" className="footer__link">
                                    Careers
                                </Link>

                                <Link to="#" className="footer__link">
                                    Privacy Policy
                                </Link>

                                <Link to="#" className="footer__link">
                                    Terms
                                </Link>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer="8" textAlign="center">
                            <Divider />
                            <Header size="medium" style={{ color: "#fff" }}>
                                Made by Rahat with 💗
                            </Header>
                            <p style={{ color: "#fff" }}>
                                Copyright &copy; | {new Date().getFullYear()} |
                                by Travelers <Icon name="registered" /> .
                                <br />
                                Design Inspiration From{" "}
                                <a
                                    href="https://twitter.com/jonasschmedtman"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Jonas
                                </a>
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
