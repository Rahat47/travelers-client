import React from "react";
import { Divider, Item, Label } from "semantic-ui-react";

const OrderSingleItem = ({ order }) => {
    return (
        <Item>
            <Item.Content>
                <Item.Header>Ordered on {order.tourName}</Item.Header>
                <Item.Meta>
                    Your Email Address: <strong>{order.userEmail}</strong>
                </Item.Meta>
                <Item.Description>
                    <strong>Total Ammount:</strong> ${order.totalAmmount}
                    <br />
                    <strong>Stripe Payment Id: </strong>
                    {order.paymentId}
                    <br />
                </Item.Description>
                <Item.Extra>
                    {order.orderStatus === "pending" && (
                        <Label color="black">{order.orderStatus}</Label>
                    )}

                    {order.orderStatus === "processing" && (
                        <Label color="orange">{order.orderStatus}</Label>
                    )}

                    {order.orderStatus === "delivered" && (
                        <Label color="green">{order.orderStatus}</Label>
                    )}
                </Item.Extra>
                <Divider />
            </Item.Content>
        </Item>
    );
};

export default OrderSingleItem;
