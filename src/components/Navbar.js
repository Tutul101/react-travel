import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaAffiliatetheme } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Button } from "./Button";
import "./Navbar.css";
export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const menuClickHandler = () => {
    return setClick(!click);
  };
  const closeMobileMenu = () => {
    return setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      return setButton(false);
    }
    return setButton(true);
  };
  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL <FaAffiliatetheme className="navbar-icon"></FaAffiliatetheme>
          </Link>
          <div className="menu-icon" onClick={menuClickHandler}>
            {click ? (
              <ImCross className="cross" />
            ) : (
              <GiHamburgerMenu className="bars" />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline" children="Sign-Up" />}
        </div>
      </nav>
    </>
  );
};
