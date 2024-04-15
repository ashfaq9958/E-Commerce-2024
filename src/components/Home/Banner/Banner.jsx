import React from "react";
import "./Banner.css";
import Carousel from "react-material-ui-carousel";
import headphone_3 from "../../../assets/headphone_3.png";
import head_2 from "../../../assets/head_2.png";
const Banner = () => {
  return (
    <Carousel className="banner_main" autoPlay>
      <>
        <div className="container-fluid Banner_1">
          <div className="container gx-0 corparent1">
            <div className="row gx-0 align-items-center cor1">
              <div className="col-md-12 col-lg-6 carcontent1">
                <div className="banner_col1 pt-md-4 mt-4">
                  <h6 className="main_label pb-3">
                    <i className="fa-solid fa-star"></i>Top Products of The
                    Month
                  </h6>
                  <h1>Micropack MHP Headphone Black</h1>
                  <p className="py-3">
                    The Microphone Headphone offers a stereo PC headset with
                    volume control, a flexible mic arm, adjustable headband.
                  </p>
                  <div className="banner_btns">
                    <button className="main_btn">Shop Now </button>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-6 imgpar1">
                <img src={head_2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="container-fluid banner_2">
          <div className="container gx-0">
            <div className="row gx-0 align-items-center cor1">
              <div
                className="col-md-12 col-lg-6 order-md-2"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="banner_col1 pt-md-5 ">
                  <h6 className="main_label pb-3">
                    <i className="fa-solid fa-star"></i>Top Products of The
                    Month
                  </h6>
                  <h1>Micropack MHP Headphone Black</h1>
                  <p>
                    The Microphone Headphone offers a stereo PC headset with
                    volume control, a flexible mic arm, adjustable headband.
                  </p>
                  <div className="banner_btns">
                    <button className="main_btn">Shop Now </button>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-6 order-md-1 imgpar2">
                <img src={headphone_3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    </Carousel>
  );
};

export default Banner;
