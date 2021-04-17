import React from "react";
import {
    Divider,
    Grid,
    Header,
    Icon,
    Label,
    Message,
    Table,
} from "semantic-ui-react";

const TourSingleDetails = ({ tour }) => {
    return (
        <div className="single-description">
            <Grid container>
                <Grid.Column computer="8" mobile="16">
                    <Header
                        textAlign="center"
                        size="huge"
                        color="blue"
                        style={{ textTransform: "uppercase" }}
                    >
                        Quick Facts
                    </Header>
                    <Divider />
                    <Table textAlign="center" celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell colSpan="2">
                                    Details
                                </Table.HeaderCell>
                                <Table.HeaderCell>Value</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell textAlign="center">
                                    <Icon
                                        name="calendar alternate outline"
                                        size="big"
                                    />
                                </Table.Cell>
                                <Table.Cell>NEXT DATE</Table.Cell>
                                {tour.startDates && (
                                    <Table.Cell>
                                        {new Date(
                                            tour?.startDates[0]
                                        ).toDateString()}
                                    </Table.Cell>
                                )}
                                {!tour.startDates > 0 && (
                                    <Table.Cell>Starting Soon..</Table.Cell>
                                )}
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign="center">
                                    <Icon name="crosshairs" size="big" />
                                </Table.Cell>
                                <Table.Cell>DIFFICULTY</Table.Cell>
                                <Table.Cell>{tour.difficulty}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign="center">
                                    <Icon name="user" size="big" />
                                </Table.Cell>
                                <Table.Cell>GROUP SIZE</Table.Cell>
                                <Table.Cell>{tour.maxGroupSize}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell textAlign="center">
                                    <Icon
                                        name="star"
                                        size="big"
                                        color="yellow"
                                    />
                                </Table.Cell>
                                <Table.Cell>RATING</Table.Cell>
                                <Table.Cell>
                                    <Label ribbon color="green">
                                        {tour.ratingsAverage} Out of 5
                                    </Label>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Grid.Column>
                <Grid.Column computer="8" mobile="16">
                    <Header
                        textAlign="center"
                        size="huge"
                        color="blue"
                        style={{ textTransform: "uppercase" }}
                    >
                        Tour Description
                    </Header>
                    <Divider />
                    <Message className="tour-description">
                        {tour.description}
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default TourSingleDetails;
