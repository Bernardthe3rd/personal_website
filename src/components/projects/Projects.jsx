import './Projects.css'
import myself from "../../assets/about-myself-img.jpeg";
import {Element, Link} from "react-scroll";
import {useState} from "react";
import {ArrowBendRightDown} from "@phosphor-icons/react";


const Projects = () => {

    const [projects, toggleProjects] = useState(true)

    const handleProjects = () => {
        toggleProjects(!projects)
    }

    return (
        projects
            ?
            <Element name="projects" className="container">
                <div className="element__projects-alt">
                    <h2>PROJECTS</h2>
                    <p>Sorry no projects yet! But please let me know if you have some inspiration</p>
                    <Link to="contact" smooth={true} duration={500}>
                        <ArrowBendRightDown size={64} />
                    </Link>
                </div>
            </Element>
            :
            <Element name="projects" className="container">
                <div className="element__projects">
                    <h2>PROJECTS</h2>
                    <article className="element__projects--article">
                        <span className="img-wrapper__projects">
                            <img src={myself} alt="img of first project"/>
                        </span>
                        <p>
                            informatie over het project <a href="https://github.com" target="_blank">github link</a>
                        </p>
                    </article>
                    <article className="element__projects--article">
                        <span className="img-wrapper__projects">
                            <img src={myself} alt="img of first project"/>
                        </span>
                        <p>
                            informatie over het project <a href="https://github.com" target="_blank">github link</a>
                        </p>
                    </article>
                    <article className="element__projects--article">
                        <span className="img-wrapper__projects">
                            <img src={myself} alt="img of first project"/>
                        </span>
                        <p>
                            informatie over het project <a href="https://github.com" target="_blank">github link</a>
                        </p>
                    </article>
                </div>
            </Element>
    );
}

export default Projects;