import React from "react";
import img from "../../../assets/mouse.png";

const Product = () => {
  return (
    <>
      <div className="Product_main">
        <div className="col">
          <div className="card border-0 h-100">
            <div className="card_head">
              <img src={img} alt="" className="img-fluid" />
            </div>
            <div className="card-body">
                <p className="Product_name">Mouse</p>
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

export default Product;
