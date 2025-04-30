import "./Projects.css";
import myself from "../../assets/about-myself-img.jpeg";
import { Element, Link } from "react-scroll";
import { useState } from "react";
import { ArrowBendRightDown } from "@phosphor-icons/react";
import Project from "./Project";

const Projects = () => {
  const [projects, toggleProjects] = useState<boolean>(true);

  const handleProjects = () => {
    toggleProjects(!projects);
  };

  return projects ? (
    <Element name="projects" className="container">
      <div className="element__projects-container-alt">
        <h2>PROJECTS</h2>
        <p>Sorry no projects yet! But please let me know if you have some inspiration</p>
        <Link to="contact" smooth={true} duration={500}>
          <ArrowBendRightDown size={48} />
        </Link>
      </div>
    </Element>
  ) : (
    <Element name="projects" className="container">
      <div className="element__projects">
        <h2>PROJECTS</h2>
        <div className="element__projects-container">
          <Project
            image={myself}
            alt="img of first project"
            text="Dit project heb ik gedaan tijdens mijn opleiding bij hogeschool Novi en heeft de focus op front-end"
            link="https://github.com"
            linktext="github link"
          />
          <Project
            image={myself}
            alt="img of first project"
            text="Dit project heb ik gedaan tijdens mijn opleiding bij hogeschool Novi en heeft de focus op back-end"
            link="https://github.com"
            linktext="github link"
          />
          <Project
            image={myself}
            alt="img of first project"
            text="Dit project gaat over deze persoonlijke website"
            link="https://github.com"
            linktext="github link"
          />
        </div>
      </div>
    </Element>
  );
};

export default Projects;
