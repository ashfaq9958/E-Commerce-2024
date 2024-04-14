import React from "react";
import "./Banner.css";
import Carousel from "react-material-ui-carousel";
const Banner = () => {
  return (
    <Carousel className="banner_main">
      <>
        <div className="container-fluid Banner_1">
          <div className="container gx-0">
            <div className="row gx-0 align-items-center">
              <div
                className="col-md-12 col-lg-6"
                // data-aos="fade-right"
                // data-aos-duration="1000"
                // data-aos-easing="ease-in-out"
              >
                <div className="banner_col1 pt-md-4">
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

              <div
                className="col-md-12 col-lg-6"
                // data-aos="fade-left"
                // data-aos-duration="1000"
                // data-aos-easing="ease-in-out"
              >
                <div className="banner_col2">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <>
        <div className="container-fluid banner_2">
          <div className="container gx-0">
            <div className="row gx-0 ">
              <div
                className="col-md-12 col-lg-6 order-md-2"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="banner_col1 pt-md-5">
                  <h1>
                    Unlocked Your<span>Body</span>& <span>Mind</span> In
                    Exercises
                  </h1>
                  <p>
                    Discover optimal well-being through tailored exercises.
                    Acheive a healthy body with our expert guidance,
                    personalized routines, and transformative fitness solitions.
                  </p>
                  <div className="hero_btns">
                    <button className="btn1 btn0">Get Started</button>
                  </div>
                </div>
              </div>

              <div
                className="col-md-12 col-lg-6 order-md-1"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="banner_col2">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Carousel>
  );
};

export default Banner;
