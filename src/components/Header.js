import React from "react";
import "../assets/styles/header.css";
import Button from "./Button.js";
import logo from "../assets/images/logo.svg";
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="#" className="navbar__logo">
          <img alt="hertec" src={logo} />
        </a>
        <div className="navbar__buttons">
          <a href="#home">
          <Button  text="HOME" /></a>
          <a href="#about">
          <Button text="ABOUT ME" /></a>
          <a href="#expertises">
          <Button text="SERVICES" /></a>
          <a href="#skills">
          <Button text="SKILLS" /></a>
          <a href="#projects">
          <Button text="PROJECTS" /></a>
          <a href="#contact">
          <Button text="LET'S CHAT" /></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
