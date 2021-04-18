import React, { useContext, useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { createNewOrder, paymentRequest, singleTour } from "../../../API";
import { Container, Header, Segment } from "semantic-ui-react";
import ProductDisplay from "../tours/payment/ProductDisplay";
import { useParams } from "react-router";
import CheckoutMessage from "./CheckoutMessage";
import { TravelersContext } from "../../../App";
import { useAlert } from "react-alert";

const Checkout = () => {
    const alert = useAlert();
    const { loggedInUser } = useContext(TravelersContext);
    const { id } = useParams();
    const [tour, setTour] = useState({});
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getSinleTour(id) {
            try {
                const data = await singleTour(id);
                setTour(data.data.tour);
            } catch (error) {
                console.log(error);
            }
        }
        getSinleTour(id);
    }, [id]);

    async function storeNewOrder() {
        const orderDetails = {
            userName: loggedInUser.fullName,
            userEmail: loggedInUser.email,
            paymentId: JSON.parse(sessionStorage.getItem("pid")).id,
            tourId: id,
        };

        try {
            const data = await createNewOrder(orderDetails);
            alert.success(
                `Order for ${data.data.order.tourName} created successfully. Your order status is now ${data.data.order.orderStatus}`
            );
        } catch (error) {
            console.log(error.message);
        }
    }

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API);

    const handleClick = async e => {
        setLoading(true);
        const stripe = await stripePromise;

        const session = await paymentRequest(tour);
        sessionStorage.setItem("pid", JSON.stringify(session));
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        setLoading(false);
        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
            console.log(result.error.message);
        }
    };
    return (
        <Container>
            <Segment>
                <Header textAlign="center">Let's make a new memory</Header>

                <Segment textAlign="center" padded>
                    {tour && (
                        <ProductDisplay
                            loading={loading}
                            disabled={disabled}
                            handleClick={handleClick}
                            tour={tour}
                        />
                    )}
                </Segment>

                <CheckoutMessage
                    storeNewOrder={storeNewOrder}
                    setLoading={setLoading}
                    setDisabled={setDisabled}
                />
            </Segment>
        </Container>
    );
};

export default Checkout;
