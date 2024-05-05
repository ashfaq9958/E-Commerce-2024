import React from "react";
import Banner from "./Banner/Banner.jsx";
import Category from "./Category/Category.jsx";
import Products from "../Products/Products.jsx";
import NewArrivals from "../Products/NewArrivals.jsx";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <NewArrivals />
    </div>
  );
};

export default Home;
