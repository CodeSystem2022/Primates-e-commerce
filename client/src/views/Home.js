import React from "react";
import Landing from "../components/Home/Landing/Landing";
import LandingCategories from "../components/Home/LandingCategories/CategoriesLanding";
import LandingProducts from "../components/Home/LandingProducts/LandingProducts";

const Home = () => {
    return (
        <> 
            <Landing />
            <LandingCategories />
            <LandingProducts />
        </>
    );
};

export default Home;
