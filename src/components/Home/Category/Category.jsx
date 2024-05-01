import React from "react";
import "./Category.css";
import img from "../../../assets/head-icon.png";
import img2 from "../../../assets/mobile.png"
import img3 from "../../../assets/smart-watch.png"

const Category = () => {
  return (
    <>
      <div className="container gx-0 py-5 my-5 full_main_category ">
        <h2 className="py-3">Browse By Category</h2>
        <div className="row gx-0 main_category">
          <div className="col-md-2 col-6">
            <div className="home_category text-center">
              <img src={img} alt="" />
              <h5 className="category_title">Categorys</h5>
            </div>
          </div>

          <div className="col-md-2 col-6">
            <div className="home_category text-center">
              <img src={img2} alt="" />
              <h5 className="category_title">Categorys</h5>
            </div>
          </div>

          <div className="col-md-2 col-6">
            <div className="home_category text-center">
              <img src={img3} alt="" />
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
