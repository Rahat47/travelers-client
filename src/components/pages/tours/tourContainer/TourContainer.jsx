import React, { useEffect, useState } from "react";
import { Dimmer, Grid, Loader, Placeholder, Segment } from "semantic-ui-react";
import { getAllTours } from "../../../../API";
import TourCard from "../../home/toursSection/TourCard";

const TourContainer = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        async function getTours() {
            try {
                const { data } = await getAllTours();
                setTours(data.tours);
            } catch (error) {
                console.log(error);
            }
        }
        getTours();
    }, []);

    return (
        <div className="tours-container">
            <Grid container stretched>
                {tours.length > 0 ? (
                    tours.map(tr => <TourCard key={tr._id} tour={tr} />)
                ) : (
                    <Segment>
                        <Dimmer active>
                            <Loader />
                        </Dimmer>
                        <Placeholder>
                            <Placeholder.Header image>
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </Segment>
                )}
            </Grid>
        </div>
    );
};

export default TourContainer;
