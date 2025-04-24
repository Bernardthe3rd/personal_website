import './Projects.css'
import myself from "../../assets/about-myself-img.jpeg";
import {Element, Link} from "react-scroll";
import {useState} from "react";
import {ArrowBendRightDown} from "@phosphor-icons/react";


const Projects = () => {

    const [projects, toggleProjects] = useState(false)

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
                <h2>PROJECTS</h2>
                <div className="element__projects">
                    <article className="element__projects--article">
                        <span className="img-wrapper__projects">
                            <img src={myself} alt="img of first project"/>
                        </span>
                        <p>Dit project heb ik gedaan tijdens mijn opleiding bij hogeschool Novi en heeft de focus op front-end</p>
                        <a href="https://github.com" target="_blank">github link</a>
                    </article>
                    <article className="element__projects--article">
                        <span className="img-wrapper__projects">
                            <img src={myself} alt="img of first project"/>
                        </span>
                        <p>Dit project heb ik gedaan tijdens mijn opleiding bij hogeschool Novi en heeft de focus op back-end</p>
                        <a href="https://github.com" target="_blank">github link</a>
                    </article>
                    <article className="element__projects--article">
                        <span className="img-wrapper__projects">
                            <img src={myself} alt="img of first project"/>
                        </span>
                        <p>Dit project gaat over deze persoonlijke website</p>
                        <a href="https://github.com" target="_blank">github link</a>
                    </article>
                </div>
            </Element>
    );
}

export default Projects;