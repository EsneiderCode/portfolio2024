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
            <p className="expertise__label">.NET & C# Development</p>
            <p className="expertise__value">.NET and C# developer with a growing expertise in building robust and scalable applications. I am dedicated to mastering the full stack of .NET technologies, from back-end development with ASP.NET Core to front-end design using ReactJs. My focus is on creating high-performance, maintainable solutions that enhance user experiences, streamline operations, and drive strategic decision-making. I am eager to apply my knowledge to develop innovative software solutions that align with your business objectives and contribute to the success of your projects.</p>        </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
