import React from "react";
import "../assets/styles/project.css";

const Project = ({ title, description, imageUrl, link }) => {
    return (
      <a href={link} className="project-link">
        <div className="project">
          <img src={imageUrl} alt={title} className="project-image" />
          <div className="project-content">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
          </div>
        </div>
      </a>
    );
}

export default Project;