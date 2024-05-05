import React from "react";
import img from "../../../assets/head4.png";
// import "../NewArrivals.css"
import "../NewArrivals.css";

const Arrivals = () => {
  return (
    <>
      <div className="container gx-0 arrivals">
        <div className="row gx-0 align-items-center arrivals_main ">
          <div className="col-4">
            <div className="arrivals_col1 text-center">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="col-8">
            <div className="arrivals_col2">
              <p className="product_name">HeadPhones</p>
              <div className="icons py-2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <h4 className="product_price">$40</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arrivals;
