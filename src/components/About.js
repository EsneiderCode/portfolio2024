import React from "react";
import "../assets/styles/about.css";
import Button from "./Button";
const About = () => {
  return (
    <section className="about-me global-container">
    <h2 className="about-me__title section-title line-text">WHO AM I?</h2>
    
    <div className="about-me__description">
      <p className="about-me__description-text">
        My Name is Alehito. I’m a seasoned software engineer with a passion
        for crafting innovative and user-centric solutions. Skilled in
        multiple programming languages, specializing in the development of
        full-stack web applications and mobile applications.
      </p>
      
      <div className="about-me__info-list">
        <div className="info-list">
          <h4 className="info-list__label">Name</h4>
          <p className="info-list__value">Esneider Herrera</p>
        </div>
        <div className="info-list">
          <h4 className="info-list__label">Email</h4>
          <p className="info-list__value">reyalejandroh@gmail.com</p>
        </div>
        <div className="info-list">
          <h4 className="info-list__label">Languages</h4>
          <p className="info-list__value">ESP | ENG | RUS</p>
        </div>
        <div className="info-list">
          <h4 className="info-list__label">Degree</h4>
          <p className="info-list__value">Software Engineer</p>
        </div>
        <Button text="DOWNLOAD CV" primary={false}/>
      </div>
    </div>
    
  </section>
  );
};

export default About;
