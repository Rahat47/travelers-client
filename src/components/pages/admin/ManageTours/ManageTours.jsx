import React, { useEffect, useState } from "react";
import { Header, Item } from "semantic-ui-react";
import { getAllTours } from "../../../../API";
import TourItems from "./TourItems";

const ManageTours = () => {
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
        <>
            <Header textAlign="center">All Available Tours</Header>

            <Item.Group>
                {tours.length > 0
                    ? tours.map(tour => (
                          <TourItems key={tour._id} tour={tour} />
                      ))
                    : "Loading..."}
            </Item.Group>
        </>
    );
};

export default ManageTours;
