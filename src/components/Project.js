import React from "react";
import "../assets/styles/project.css";

const Project = ({ title, description, imageUrl, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <article className="card">
      <img className="card__background" src={imageUrl} alt={title} />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{description}</p>
        </div>
        <button onClick={handleClick} className="card__button">
          I want to see it!
        </button>
      </div>
    </article>
  );
};

export default Project;
