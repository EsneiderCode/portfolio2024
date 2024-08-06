import React from "react";
import "../assets/styles/header.css";
import Button from "./Button.js";
import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="#" className="navbar__logo">
          <img alt="hertec" src={logo} />
        </a>
        <div className="navbar__buttons">
          <Button text="HOME" />
          <Button text="ABOUT ME" />
          <Button text="SERVICES" />
          <Button text="SKILLS" />
          <Button text="PROJECTS" />
          <Button text="BLOG" />
          <Button text="LET'S CHAT" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
