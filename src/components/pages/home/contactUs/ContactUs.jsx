import React from "react";
import { Container, Grid, Header, Segment } from "semantic-ui-react";
import "./ContactUs.scss";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
    return (
        <section className="section-contact">
            <Container className="form-container">
                <Segment className="contact-form">
                    <Grid>
                        <Grid.Column computer={10}>
                            <Header
                                textAlign="center"
                                className="heading-secondary"
                                content="Have a question.??"
                            />
                            <Header
                                textAlign="center"
                                content="Contact Us Now.!!"
                                color="green"
                                className="heading-tertiary"
                            />
                            <ContactUsForm />
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Container>
        </section>
    );
};

export default ContactUs;
