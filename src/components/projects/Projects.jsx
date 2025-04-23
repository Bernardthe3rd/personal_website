import './Projects.css'
import myself from "../../assets/about-myself-img.jpeg";
import {Element} from "react-scroll";


const Projects = () => {
    return (
        <Element name="projects" className="container">
            <div className="element__projects">
                <article className="element__projects--article">
                <span className="img-wrapper__projects">
                    <img src={myself} alt="img of first project" />
                </span>
                    <p>
                        informatie over het project <a href="https://github.com" target="_blank" >github link</a>
                    </p>
                </article>
                <article className="element__projects--article">
                <span className="img-wrapper__projects">
                    <img src={myself} alt="img of first project" />
                </span>
                    <p>
                        informatie over het project <a href="https://github.com" target="_blank" >github link</a>
                    </p>
                </article>
                <article className="element__projects--article">
                <span className="img-wrapper__projects">
                    <img src={myself} alt="img of first project" />
                </span>
                    <p>
                        informatie over het project <a href="https://github.com" target="_blank" >github link</a>
                    </p>
                </article>
            </div>
        </Element>
    );
}

export default Projects;