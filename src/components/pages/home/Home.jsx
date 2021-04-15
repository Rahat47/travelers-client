import React from "react";
import About from "./about/About";
import Features from "./features/Features.jsx";
import MainHeader from "./header/MainHeader";
import Stories from "./stories/Stories";
import ToursSection from "./toursSection/ToursSection";

const Home = () => {
    return (
        <>
            <MainHeader />
            <About />
            <Features />
            <ToursSection />
            <Stories />
        </>
    );
};

export default Home;
