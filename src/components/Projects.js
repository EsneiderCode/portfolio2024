import React from "react";
import "../assets/styles/projects.css";
import Project from "./Project";
import basket from "../assets/images/basket.png";
const Projects = () => {
  return (
    <section className="my-projects global-container">
      <h2 className="my-projects__title section-title line-text">MY PROJECTS</h2>

      <div className="projects">
        <Project
          title="Project 1"
          description="Description 1"
          imageUrl={basket}
          link="https://www.ejemplo.com"
        />
        <Project
          title="Project 2"
          description="Description 2"
          imageUrl={basket}
          link="https://www.ejemplo.com"
        />
        <Project
          title="Project 3"
          description="Description 3"
          imageUrl={basket}
          link="https://www.ejemplo.com"
        />
        <Project
        title="Project 4"
        description="Description 4"
        imageUrl={basket}
        link="https://www.ejemplo.com"
      />
      </div>
    </section>
  );
};

export default Projects;
