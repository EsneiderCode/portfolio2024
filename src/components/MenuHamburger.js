import React, { useState } from "react";
import "../assets/styles/menuhamburger.css";
import logo from "../assets/images/logo.png";
import close from "../assets/images/close.png";
import hamburgerLogo from "../assets/images/hamburger.png";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <div className={"header__top"}>
        <img className="logo" src={logo} />
        <img
          className="menu-button"
          onClick={toggleMenu}
          src={isOpen ? close : hamburgerLogo}
        />
      </div>

      <nav className={`nav-links ${isOpen ? "visible" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
