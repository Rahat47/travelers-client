import React, { useState } from "react";
import { useAlert } from "react-alert";
import {
    Button,
    Divider,
    Dropdown,
    Icon,
    Item,
    Label,
    Popup,
} from "semantic-ui-react";
import { updateOrder } from "../../../../API";

const OrderItem = ({ order, setAction, action }) => {
    const alert = useAlert();
    const options = [
        { key: 1, text: "Pending", value: "pending" },
        { key: 2, text: "Processing", value: "processing" },
        { key: 3, text: "Delivered", value: "delivered" },
    ];

    const [loading, setLoading] = useState(false);
    const [orderStatus, setOderStatus] = useState("");

    const handleStatusChange = (e, { value }) => setOderStatus(value);

    const handleOrderStateChange = async () => {
        if (!orderStatus) {
            return alert.info("Please Choose a new status");
        }

        try {
            setLoading(true);
            const data = await updateOrder({ orderStatus }, order._id);
            if (!data.data.order) {
                return alert.error("Something went wrong");
            } else {
                setAction(!action);
                setLoading(false);
                return alert.success(`Order Status Updated to ${orderStatus}`);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    return (
        <Item>
            <Item.Content>
                <Item.Header>Order on {order.tourName}</Item.Header>
                <Item.Meta>
                    Order Placed By <strong>{order.userName}</strong>{" "}
                </Item.Meta>

                <Item.Meta>
                    User Email Address: <strong>{order.userEmail}</strong>
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

                    <Popup
                        content="Change Order Status"
                        trigger={
                            <Dropdown
                                onChange={handleStatusChange}
                                floating
                                options={options}
                                placeholder="Change Order Status"
                                selection
                            />
                        }
                    />

                    <Button
                        onClick={handleOrderStateChange}
                        loading={loading}
                        primary
                        floated="right"
                    >
                        Change Status
                        <Icon name="right chevron" />
                    </Button>
                </Item.Extra>
                <Divider />
            </Item.Content>
        </Item>
    );
};

export default OrderItem;
