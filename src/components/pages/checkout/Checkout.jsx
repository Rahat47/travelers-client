import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { paymentRequest, singleTour } from "../../../API";
import { Container, Header, Segment } from "semantic-ui-react";
import ProductDisplay from "../tours/payment/ProductDisplay";
import { useParams } from "react-router";

const Checkout = () => {
    const { id } = useParams();
    const [tour, setTour] = useState({});

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

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API);

    const handleClick = async e => {
        const stripe = await stripePromise;

        const session = await paymentRequest(tour);

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        console.log(result);

        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
            console.log(result.error);
        }
    };
    return (
        <Container>
            <Segment>
                <Header textAlign="center">Let's make a new memory</Header>
                <Segment textAlign="center" padded>
                    {tour && (
                        <ProductDisplay handleClick={handleClick} tour={tour} />
                    )}
                </Segment>
            </Segment>
        </Container>
    );
};

export default Checkout;
