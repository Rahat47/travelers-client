import React from "react";
import About from "./about/About";
import Features from "./features/Features";
import MainHeader from "./header/MainHeader";
import ToursSection from "./toursSection/ToursSection";

const Home = () => {
    return (
        <>
            <MainHeader />
            <About />
            <Features />
            <ToursSection />
        </>
    );
};

export default Home;
