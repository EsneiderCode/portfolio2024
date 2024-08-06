import React from "react";
import "../assets/styles/expertise.css";
import robot from "../assets/images/robot.png";
const Expertise = () => {
  return (
    <section className="my-expertise global-container">
      <h2 className="my-expertise__title section-title line-text">MY EXPERTISE</h2>

      <div className="my-expertise__content">
        {/* <div className="robot">
          <img alt="robot" src={robot} />
        </div> */}
        <div className="expertises">
          <div className="expertise">
            <p className="expertise__label">SOFTWARE DEVELOPMENT</p>
            <p className="expertise__value">
              Uncover the transformative power of software for digital
              innovation and enhanced user experiences..
            </p>
          </div>
          <div className="expertise">
            <p className="expertise__label">WEB DEVELOPMENT</p>
            <p className="expertise__value">
              Uncover the transformative power of software for digital
              innovation and enhanced user experiences..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
