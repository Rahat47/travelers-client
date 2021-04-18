import React from "react";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import { Button, Divider, Icon, Item, Label, Popup } from "semantic-ui-react";
import { deleteATour } from "../../../../API";

const TourItems = ({ tour, setAction, action }) => {
    const alert = useAlert();

    const deleteSelectedTour = async id => {
        try {
            await deleteATour(id);
            alert.success("Tour Deleted Successfully");
            setAction(!action);
        } catch (error) {
            console.log(error);
            alert.error(error.message);
        }
    };

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
                                <Button
                                    onClick={() => deleteSelectedTour(tour._id)}
                                    negative
                                    icon
                                    floated="right"
                                    circular
                                >
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
