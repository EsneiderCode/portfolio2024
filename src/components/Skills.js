import React from "react";
import "../assets/styles/skills.css";
import python from "../assets/images/python.png";
import laptop from "../assets/images/laptop.png";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  return (
    <section className="skills global-container">
      <h2 className="section-title line-text">MY SKILLS & TOOLS</h2>
      <div className="skills__content">
        <div className="skills__list">
          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={python} alt="python" />
                <span>Python</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={75} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={python} alt="python" />
                <span>Python</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={75} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={python} alt="python" />
                <span>Python</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={75} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={python} alt="python" />
                <span>Python</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={75} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={python} alt="python" />
                <span>Python</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={75} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={python} alt="python" />
                <span>Python</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={75} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={python} alt="python" />
                <span>Python</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={75} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={python} alt="python" />
                <span>Python</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={75} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={python} alt="python" />
                <span>Python</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={75} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <div className="skill__info">
              <div className="skill_name">
                <img src={python} alt="python" />
                <span>Python</span>
              </div>
              <div className="skill__description">
                <ProgressBar value={75} max={100} />
                <span>Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
