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
            <p className="expertise__label">Web Development</p>
            <p className="expertise__value">
            Specializing in creating tailored web solutions that enhance digital experiences. My expertise covers everything from responsive design to complex functionality, ensuring your website is both user-friendly and visually appealing. I focus on building websites that effectively represent your brand and meet your business needs.            </p>
          </div>
          <div className="expertise">
            <p className="expertise__label">Machine Learning</p>
            <p className="expertise__value">
            Expert in applying machine learning techniques to analyze data and uncover insights. I work with advanced algorithms to develop solutions that improve decision-making, optimize processes, and personalize user experiences. My goal is to harness the power of data to drive efficiency and innovation in your projects.            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
