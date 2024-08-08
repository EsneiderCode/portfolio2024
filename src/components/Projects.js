import React from "react";
import "../assets/styles/projects.css";
import Project from "./Project";
import basket from "../assets/images/basket.png";

import artistgarden from "../assets/images/projects/artistgarden.png";
import basketfeature from "../assets/images/projects/basketfeature.png";
import frontendmenetorscard from "../assets/images/projects/frontendmentors.png";
import hertec1 from "../assets/images/projects/hertec1.png";
import ictis from "../assets/images/projects/ictis.png";
import portfolio1 from "../assets/images/projects/portfolio1.png";
import servielectric from "../assets/images/projects/servielectric.png";
import stepi from "../assets/images/projects/stepi.png";
import umtelkomd from "../assets/images/projects/untelkom.png";
import zepto from "../assets/images/projects/zepto.png";

const Projects = () => {
  return (
    <section className="my-projects global-container">
      <h2 className="my-projects__title section-title line-text">
        MY PROJECTS
      </h2>

      <div className="projects">
        <Project
          title="Ictis"
          description=" Development of a web application for the Institute of Information Technologies and Systems Security. Where I got graduated 😁"
          imageUrl={ictis}
          link="https://ictis.sfedu.ru"
        />
        <Project
          title="Stepi"
          description="I developed an interactive platform for the exploration of Eurasian steppe biomes, designed to provide users with detailed insights into the region’s flora and fauna, facilitate engagement through quizzes, and offer comprehensive information on the history and conservation of these ecosystems."
          imageUrl={stepi}
          link="https://www.степиевразии.рф"
        />
        <Project
          title="Basket feature"
          description="Successful startup development in Russia, also a thesis project. Developed an application for collecting and analyzing basketball game statistics, aimed at coaches. The application received approval from 95% of coaches who tested it in real-time."
          imageUrl={basketfeature}
          link="https://www.basketfeature.com"
        />
        <Project
          title="Hertec"
          description="My first startup as freelancer. I made and released many top-notch projects for clients overseas from home."
          imageUrl={hertec1}
          link="https://esneidercode.github.io/hertec/"
        />

        <Project
          title="Artist Garden"
          description="
        An excellent and attractive landing page was developed for architects in Poland, who were very satisfied with the work and saw their revenue increase by up to 275%."
          imageUrl={artistgarden}
          link="https://esneidercode.github.io/artistgarden/"
        />

        <Project
          title="Zepto"
          description="
        E-commerce website for selling home appliances."
          imageUrl={zepto}
          link="https://esneidercode.github.io/zepto/"
        />

        <Project
          title="Servielectric"
          description="
          Web application for an electrical engineer from Colombia, resulting in up to a 200% increase in work inquiries.
          "
          imageUrl={servielectric}
          link="https://esneidercode.github.io/zepto/"
        />

        <Project
          title="Portfolio v1"
          description="
          My first portfolio, which was a source of great pride for me and helped me secure my first job."
          imageUrl={portfolio1}
          link="https://esneidercode.github.io/portfolio/"
        />
      </div>
    </section>
  );
};

export default Projects;
