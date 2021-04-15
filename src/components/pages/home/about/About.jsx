import React from "react";
import { Divider, Grid, Header, Image } from "semantic-ui-react";
import "./About.scss";
import aboutImg from "../../../../Images/nat-9.jpg";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <section className="section-about">
            <Header
                className="heading-secondary mb-med"
                content="Exciting tours for adventurous people"
            />

            <Grid container>
                <Grid.Row>
                    <Grid.Column computer={8} mobile={16} tablet={16}>
                        <Header
                            content="You're going to fall in love with nature"
                            className="heading-tertiary"
                        />

                        <Header
                            as="p"
                            color="grey"
                            size="tiny"
                            className="about-content"
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. voluptas error Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Dolores autem
                            perferendis assumenda amet vel quod animi nam earum
                            blanditiis dicta?
                        </Header>
                        <Divider hidden />
                        <Header
                            content="Live adventurous like you never have before"
                            className="heading-tertiary"
                        />

                        <Header
                            as="p"
                            color="grey"
                            size="tiny"
                            className="about-content"
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. voluptas error Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Dolores autem
                            perferendis assumenda amet vel quod animi nam earum
                            blanditiis dicta?
                        </Header>

                        <Divider hidden />
                        <Header
                            content="Feel the oneness with mother nature"
                            className="heading-tertiary"
                        />

                        <Header
                            as="p"
                            color="grey"
                            size="tiny"
                            className="about-content"
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. voluptas error Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Dolores autem
                            perferendis assumenda amet vel quod animi nam earum
                        </Header>
                        <Link to="/about" className="btn-text">
                            Learn More &rarr;
                        </Link>
                        <Divider hidden />
                    </Grid.Column>
                    <Grid.Column computer={8} mobile={16} tablet="16">
                        <Image src={aboutImg} alt="A man on a mountain" fluid />
                        {/* <Image src={aboutImg} alt="A man on a mountain" fluid /> */}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </section>
    );
};

export default About;
