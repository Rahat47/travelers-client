import React, { useEffect, useState } from "react";
import { Container, Header, Item, Message } from "semantic-ui-react";
import { getAllOrdersFromDB } from "../../../../API";
import OrderItem from "./OrderItem";
const AdminOrders = ({ action, setAction }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function getOrders() {
            try {
                const data = await getAllOrdersFromDB();
                setOrders(data.data.orders);
            } catch (error) {
                console.log(error);
            }
        }
        getOrders();
    }, [action]);

    return (
        <>
            <Container>
                <Header textAlign="center" size="huge">
                    Orders from all users
                </Header>

                {orders.length > 0 ? (
                    <Item.Group>
                        {orders.map(order => (
                            <OrderItem
                                action={action}
                                setAction={setAction}
                                key={order._id}
                                order={order}
                            />
                        ))}
                    </Item.Group>
                ) : (
                    <Message error> There are no orders made yet</Message>
                )}
            </Container>
        </>
    );
};

export default AdminOrders;
