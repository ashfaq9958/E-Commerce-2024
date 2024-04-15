import React from "react";
import Banner from "./Banner/Banner.jsx";
import Category from "./Category/Category.jsx";
import Products from "../Products/Products.jsx";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category/>
      <Products/>
    </div>
  );
};

export default Home;
