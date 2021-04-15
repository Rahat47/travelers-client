import React from "react";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import About from "./about/About";
import ContactUs from "./contactUs/ContactUs";
import Features from "./features/Features.jsx";
import MainHeader from "./header/MainHeader";
import Stories from "./stories/Stories";
import ToursSection from "./toursSection/ToursSection";

const Home = () => {
    return (
        <>
            <Navbar />
            <MainHeader />
            <About />
            <Features />
            <ToursSection />
            <Stories />
            <ContactUs />
            <Footer />
        </>
    );
};

export default Home;
