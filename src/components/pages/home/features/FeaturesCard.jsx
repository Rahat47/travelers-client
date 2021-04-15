import { Card, Divider, Grid, Icon } from "semantic-ui-react";

const FeaturesCard = ({ feature }) => {
    return (
        <Grid.Column computer="4" tablet="8" mobile="16">
            <Card className="feature-card">
                <Card.Content textAlign="center">
                    <Icon
                        circular
                        inverted
                        color="green"
                        size="huge"
                        name={feature.icon}
                    />
                    <Divider hidden />
                    <Card.Header>{feature.title}</Card.Header>
                    <Divider hidden />
                    <Card.Meta>{feature.text}</Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column>
    );
};

export default FeaturesCard;
