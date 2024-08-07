import React from "react";
import "../assets/styles/home.css";
import photo from "../assets/images/herrera.png";
import SocialMedia from "./SocialMedia";
import fb from "../assets/images/fb.png";
import gmail from "../assets/images/gmail.png";
import linkedin from "../assets/images/linkedin.png";
import phone from "../assets/images/phone.png";
import twitter from "../assets/images/twitter.png";
import wp from "../assets/images/wp.png";
import eye from "../assets/images/eye.png";

const Home = ({ position, containerRef }) => {




  return (
    <section className="home global-container">
      <div className="home__info">
        <div className="typewriter">
          <div className="name">
            <span className="first-name">ESNEIDER</span>
            <span className="last-name">HERRERA</span>
          </div>
        </div>
        <p>
          Uncover the transformative power of software for digital innovation
          and enhanced user experiences..
        </p>
      </div>
      <div className="home__photo">
        <div className="photo__container">
          <img className="picture" alt="Esneider Herrera" src={photo} />
          <div
            className="pupil__container"
            ref={containerRef} 
          >
            <img
              className="pupil"
              alt="pupil"
              src={eye}
              style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
              }}
            />
          </div>
        </div>
        <div className="social-media">
          <SocialMedia link={"tel:+79054514616"} src={phone} />
          <SocialMedia link={"mailto:hertecnology@gmail.com"} src={gmail} />
          <SocialMedia link={"https://wa.me/79054514616"} src={wp} />
          <SocialMedia link={"https://facebook.com/Herrrom/"} src={fb} />
          <SocialMedia link={"https://www.linkedin.com/in/esneider-alejandro-herrera-romero-19a202309/"} src={linkedin} />
        </div>
      </div>
    </section>
  );
};

export default Home;
