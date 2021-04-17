import React from "react";
import { Link } from "react-router-dom";
import { Button, Divider, Icon, Item, Label, Popup } from "semantic-ui-react";

const TourItems = ({ tour }) => {
    return (
        <>
            <Divider hidden />
            <Item>
                <Item.Image size="medium" src={tour.imageCover} />

                <Item.Content>
                    <Item.Header as={Link} to={`/tours/${tour._id}`}>
                        {tour.name}
                    </Item.Header>
                    <Item.Meta>{tour.summary}</Item.Meta>
                    <Item.Description>{tour.description}</Item.Description>
                    <Item.Extra>
                        <Label tag color="purple">
                            ${tour.price}
                        </Label>
                        <Label color="violet">
                            {tour.difficulty.toUpperCase()}
                        </Label>
                        <Label color="orange">{tour.duration} days</Label>
                        <Label
                            color="green"
                            icon="star"
                            content={tour.ratingsAverage}
                        />

                        <Popup
                            content={`Delete ${tour.name}`}
                            inverted
                            trigger={
                                <Button negative icon floated="right" circular>
                                    <Icon name="trash alternate" />
                                </Button>
                            }
                        />
                        <Popup
                            content={`Edit ${tour.name}`}
                            inverted
                            trigger={
                                <Button secondary icon floated="right" circular>
                                    <Icon name="pencil square" />
                                </Button>
                            }
                        />
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Divider />
        </>
    );
};

export default TourItems;
