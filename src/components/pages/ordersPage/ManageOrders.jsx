import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
    Button,
    Container,
    Divider,
    Header,
    Icon,
    Item,
    Message,
    Segment,
} from "semantic-ui-react";
import { getOrdersByEmail } from "../../../API";
import { TravelersContext } from "../../../App";
import OrderSingleItem from "./OrderSingleItem";

const ManageOrders = () => {
    const { loggedInUser } = useContext(TravelersContext);
    const email = loggedInUser.email;

    const [orders, setOrders] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function getCurrentUserOrders(email) {
            try {
                const data = await getOrdersByEmail(email);
                setOrders(data.data.orders);
            } catch (error) {
                console.log(error);
            }
        }
        getCurrentUserOrders(email);
    }, [email]);

    return (
        <Container>
            <Divider hidden />
            <Button
                onClick={() => history.goBack()}
                secondary
                floated="left"
                circular
                icon
            >
                <Icon name="backward" />
            </Button>
            <Header className="heading-secondary">Your Past Orders</Header>

            <Divider />
            <Segment>
                {orders.length > 0 ? (
                    <Item.Group>
                        {orders.map(order => (
                            <OrderSingleItem key={order._id} order={order} />
                        ))}
                    </Item.Group>
                ) : (
                    <Message error> You Have Not Made Any Orders Yet</Message>
                )}
            </Segment>
        </Container>
    );
};

export default ManageOrders;
