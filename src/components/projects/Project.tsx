import "./Projects.css";

interface ProjectProps {
  image: string;
  alt: string;
  text: string;
  link: string;
  linktext: string;
}

const Project = ({ image, alt, text, link, linktext }: ProjectProps) => {
  return (
    <article className="element__projects--article">
      <span className="img-wrapper__projects">
        <img src={image} alt={alt} />
      </span>
      <p>{text}</p>
      <a href={link} target="_blank">
        {linktext}
      </a>
    </article>
  );
};

export default Project;
