import React from "react";
import "../assets/styles/skills.css";
import ProgressBar from "./ProgressBar";

import wordpress from "../assets/images/skills/wordpress.webp";
import visualstudio from "../assets/images/skills/visualstudio.png";
import typescript from "../assets/images/skills/typescript.svg";
import trello from "../assets/images/skills/trello.png";
import sql from "../assets/images/skills/sql.png";
import spanish from "../assets/images/skills/spanish.png";
import slack from "../assets/images/skills/slack.webp";
import scss from "../assets/images/skills/scss.svg";
import scrum from "../assets/images/skills/scrum.png";
import russian from "../assets/images/skills/russian.png";
import restapi from "../assets/images/skills/restapi.png";
import redux from "../assets/images/skills/redux.png";
import react from "../assets/images/skills/react.png";
import postman from "../assets/images/skills/postman.svg";
import postgres from "../assets/images/skills/postgresql.png";
import mysql from "../assets/images/skills/mysql.png";
import nginx from "../assets/images/skills/nginx.png";
import mongodb from "../assets/images/skills/mongodb.png";
import machinelearning from "../assets/images/skills/machinelearning.png";
import linux from "../assets/images/skills/linux.png";
import jira from "../assets/images/skills/jira.svg";
import jest from "../assets/images/skills/jest.png";
import github from "../assets/images/skills/github.svg";
import git from "../assets/images/skills/git.png";
import german from "../assets/images/skills/german.png";
import fastapi from "../assets/images/skills/fastapi.svg";
import english from "../assets/images/skills/english.svg";
import docker from "../assets/images/skills/docker.svg";
import cicd from "../assets/images/skills/cicd.png";
import api from "../assets/images/skills/api.png";
import agile from "../assets/images/skills/agile.png";
import python from "../assets/images/skills/python.png";
import nodejs from "../assets/images/skills/nodejs.png";

const Skills = () => {
  return (
    <section className="skills global-container">
      <h2 className="section-title line-text">MY SKILLS & TOOLS</h2>
      <div className="skills__content">
        <div className="skills__list">
          {/* Frontend */}
          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={typescript} alt="typescript" />
                <span>TypeScript</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={90} max={100} />
                <span>Expert</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={react} alt="react" />
                <span>React</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={90} max={100} />
                <span>Expert</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={scss} alt="scss" />
                <span>Scss</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={100} max={100} />
                <span>Expert</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={redux} alt="redux" />
                <span>Redux</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={65} max={100} />
                <span>Proficient</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={restapi} alt="restapi" />
                <span>RestAPI</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={85} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={api} alt="api" />
                <span>API</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={90} max={100} />
                <span>Expert</span>
              </div>
            </div>
          </div>

          {/* Backend */}

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={python} alt="python" />
                <span>Python</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={85} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={fastapi} alt="fastapi" />
                <span>FastAPI</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={70} max={100} />
                <span>Proficient</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={nodejs} alt="nodejs" />
                <span>NodeJS</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={70} max={100} />
                <span>Proficient</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={docker} alt="docker" />
                <span>Docker</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={30} max={100} />
                <span>Beginner</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={cicd} alt="cd/cd" />
                <span>CI/CD</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={50} max={100} />
                <span>Proficient</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={sql} alt="sql" />
                <span>SQL</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={95} max={100} />
                <span>Expert</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={postgres} alt="postgres" />
                <span>PostgreSQL</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={92} max={100} />
                <span>Expert</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={mysql} alt="mysql" />
                <span>MySQL</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={90} max={100} />
                <span>Expert</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={mongodb} alt="mongodb" />
                <span>MongoDB</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={65} max={100} />
                <span>Proficient</span>
              </div>
            </div>
          </div>

          {/* Tools & Platforms */}

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={visualstudio} alt="visualstudio" />
                <span>VS</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={100} max={100} />
                <span>Expert</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={github} alt="github" />
                <span>GitHub</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={80} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={git} alt="git" />
                <span>Git</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={70} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={jira} alt="jira" />
                <span>Jira</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={85} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={trello} alt="trello" />
                <span>Trello</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={85} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={postman} alt="postman" />
                <span>Postman</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={100} max={100} />
                <span>Expert</span>
              </div>
            </div>
          </div>
          
          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={jest} alt="jest" />
                <span>Jest</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={50} max={100} />
                <span>Proficient</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={slack} alt="slack" />
                <span>Slack</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={95} max={100} />
                <span>Expert</span>
              </div>
            </div>
          </div>

          {/* Dev Ops */}
          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={nginx} alt="nginx" />
                <span>Nginx</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={70} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={linux} alt="linux" />
                <span>Linux</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={95} max={100} />
                <span>Expert</span>
              </div>
            </div>
          </div>

          {/* Methodologies */}

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={scrum} alt="scrum" />
                <span>Scrum</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={65} max={100} />
                <span>Proficient</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={agile} alt="agile" />
                <span>Agile</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={60} max={100} />
                <span>Proficient</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={wordpress} alt="wp" />
                <span>WordPress</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={80} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>

          {/* ML */}

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={machinelearning} alt="ml" />
                <span>Machine Learning</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={40} max={100} />
                <span>Beginner</span>
              </div>
            </div>
          </div>

 {/* Languages */}

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={english} alt="eng" />
                <span>English</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={80} max={100} />
                <span>B2</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={russian} alt="rus" />
                <span>Russian</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={95} max={100} />
                <span>C1</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={spanish} alt="spa" />
                <span>Spanish</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={100} max={100} />
                <span>Native</span>
              </div>
            </div>
          </div>

          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={german} alt="ger" />
                <span>German</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={20} max={100} />
                <span>A1</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
