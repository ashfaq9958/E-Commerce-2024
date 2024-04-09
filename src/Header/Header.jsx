import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/elogo2.jpg";

const Header = () => {
  const [scrollNavbar, setScollNavbar] = useState(false);

  const handleScrollNavbar = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScollNavbar(true);
    } else {
      setScollNavbar(false``);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNavbar);
  }, []);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg nav_sec1 ${
          scrollNavbar ? "sticky_nav1" : ""
        }`}
      >
        <div className="container gx-0 ">
          <NavLink to="/">
            <img
              src={logo}
              alt=""
              style={{ height: "70px", backgroundColor: "#f5f5f5" }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0 nav_ul">
              <li className="nav-li">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav_li">
                <NavLink>About</NavLink>
              </li>

              <li className="nav_li">
                <NavLink>Products</NavLink>
              </li>
              <li className="nav_li">
                <NavLink>Contact Us</NavLink>
              </li>
            </ul>
            <form
              className="cart1 d-flex align-items-center mx-4 "
              role="search"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1040/1040225.png"
                alt=""
                width="26"
                height="26"
                className="img-small mx-3"
              />
              <NavLink to="">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4903/4903878.png"
                  alt=""
                  width="26"
                  height="26"
                />
              </NavLink>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
