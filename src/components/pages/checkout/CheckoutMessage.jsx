import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Divider, Message, Segment } from "semantic-ui-react";

const CheckoutMessage = ({ setDisabled, setLoading, storeNewOrder }) => {
    const [message, setMessage] = useState(
        "Your order is ready. Proceed to checkout"
    );
    const [msgType, setMsgType] = useState("info");

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
            setLoading(false);
            setDisabled(true);
            setMsgType("success");
            setMessage("Order placed! You will receive an email confirmation.");
            storeNewOrder();
        }
        if (query.get("canceled")) {
            setLoading(false);
            setMsgType("error");
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Segment placeholder textAlign="center">
                {msgType === "info" && (
                    <Message info>
                        {message} <br />
                        <Divider></Divider>
                        <Link to="/">Go Home</Link>
                    </Message>
                )}

                {msgType === "success" && (
                    <Message success>
                        {message} <br />
                        <Divider></Divider>
                        <Link to="/">Go Home</Link>
                    </Message>
                )}

                {msgType === "error" && (
                    <Message error>
                        {message} <br />
                        <Divider></Divider>
                        <Link to="/">Go Home</Link>
                    </Message>
                )}
            </Segment>
        </Container>
    );
};

export default CheckoutMessage;
