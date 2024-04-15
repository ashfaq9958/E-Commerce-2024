import React from "react";
import "./Category.css";
import img from "../../../assets/headphone-icon.png";

const Category = () => {
  return (
    <>
      <div className="container gx-0 py-5 full_main_category ">
        <h2>Browse By Category</h2>
        <div className="row gx-0 main_category">
          <div className="col-md-2 col-6">
            <div className="home_category text-center">
              <img src={img} alt="" />
              <h5 className="category_title">Categorys</h5>
            </div>
          </div>

          <div className="col-md-2 col-6">
            <div className="home_category text-center">
              <img src={img} alt="" />
              <h5 className="category_title">Categorys</h5>
            </div>
          </div>

          <div className="col-md-2 col-6">
            <div className="home_category text-center">
              <img src={img} alt="" />
              <h5 className="category_title">Categorys</h5>
            </div>
          </div>

          <div className="col-md-2 col-6">
            <div className="home_category text-center">
              <img src={img} alt="" />
              <h5 className="category_title">Categorys</h5>
            </div>
          </div>

          <div className="col-md-2 col-6">
            <div className="home_category text-center">
              <img src={img} alt="" />
              <h5 className="category_title">Categorys</h5>
            </div>
          </div>

          <div className="col-md-2 col-6">
            <div className="home_category text-center">
              <img src={img} alt="" />
              <h5 className="category_title">Categorys</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
