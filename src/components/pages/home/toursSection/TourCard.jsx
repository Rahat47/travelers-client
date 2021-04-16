import { Link } from "react-router-dom";
import { Button, Card, Grid, Header, Icon, Popup } from "semantic-ui-react";
import tourCover from "../../../../Images/nat-3.jpg";
const TourCard = ({ tour }) => {
    return (
        <Grid.Column computer="8" tablet="16" mobile="16">
            <Card className="tour-card">
                <div className="card__header">
                    <div className="card__picture">
                        <div className="card__picture-overlay">&nbsp;</div>
                        <img
                            alt={tour.name}
                            src={tourCover}
                            className="card__picture-img"
                        />
                    </div>

                    <Header
                        className="tour-title"
                        textAlign="center"
                        content={tour.name}
                        size="huge"
                    />
                </div>

                <Card.Description textAlign="center" className="card__details">
                    <h4 className="card__sub-heading">
                        {tour.difficulty} {tour.duration}-day tour
                    </h4>
                    <p className="card__text">{tour.summary}</p>
                    <Popup
                        position="top center"
                        inverted
                        content="Start Location"
                        trigger={
                            <div className="card__data">
                                <Icon name="map marker alternate" color="red" />{" "}
                                <span>{tour.startLocation}</span>
                            </div>
                        }
                    />
                    <Popup
                        trigger={
                            <div className="card__data">
                                <Icon
                                    name="calendar alternate"
                                    color="violet"
                                />{" "}
                                <span>
                                    {new Date(
                                        tour.startDates[0]
                                    ).toDateString()}
                                </span>
                            </div>
                        }
                        content="Start Date"
                        inverted
                        position="top center"
                    />
                    <div className="card__data">
                        <Icon name="flag outline" color="teal" />
                        <span>3 stops</span>
                    </div>
                    <div className="card__data">
                        <Icon name="user" color="green" />
                        <span>{tour.maxGroupSize} people</span>
                    </div>
                </Card.Description>

                <div className="card__footer">
                    <p>
                        <Icon name="dollar" />
                        <span className="card__footer-value">
                            {tour.price}{" "}
                        </span>
                        <span className="card__footer-text">per person</span>
                    </p>
                    <p className="card__ratings">
                        <Icon name="star" color="yellow" />
                        <span className="card__footer-value">
                            {tour.ratingsAverage}{" "}
                        </span>
                        <span className="card__footer-text">
                            rating ({tour.ratingsQuantity})
                        </span>
                    </p>
                    <Button
                        as={Link}
                        to={`/tours/${tour._id}`}
                        primary
                        className="card-btn"
                    >
                        Details
                    </Button>
                </div>
            </Card>
        </Grid.Column>
    );
};

export default TourCard;
