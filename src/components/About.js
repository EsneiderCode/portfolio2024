import React from "react";
import "../assets/styles/about.css";
import Button from "./Button";
const About = () => {
  return (
    <section className="about-me global-container">
      <h2 className="about-me__title section-title line-text">WHO AM I?</h2>

      <div className="about-me__description">
        <p className="about-me__description-text">
          Hello! I’m Esneider Herrera, a passionate Software Engineer with
          experience in full-stack web development and machine learning. My
          enthusiasm for technology matches my love for reading, traveling, and
          exploring new cultures. My passion drives me to learn quickly, adapt
          with agility, and maintain a friendly demeanor at all times.
          <br /> <br/>
          <b>
            Rather than just solving problems, I enjoy creating innovative
            solutions.{" "}
          </b>
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
            <p className="info-list__value">ESP | ENG | RUS | GER</p>
          </div>
          <div className="info-list">
            <h4 className="info-list__label">Degree</h4>
            <p className="info-list__value">Software Engineer</p>
          </div>
          <a className="button--primary" href="https://drive.google.com/file/d/1kke7JeOUmwgXFdglAdPk6BMoL2-i4iwV/view?usp=sharing" target="_BLANK" download="CV_2024.pdf">DOWNLOAD CV</a>
        </div>
      </div>
    </section>
  );
};

export default About;
