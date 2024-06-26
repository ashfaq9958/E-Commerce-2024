import React from "react";
import Product from "./Product/Product";
import "./Products.css"

const Products = () => {
  return (
    <>
      <div className="container gx-0 ">
        <h2 className="product_h2 pb-5">Popular Products</h2>
        <div className="row gx-0">
          <div className="col-md-12">
            <div className="products_main">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
