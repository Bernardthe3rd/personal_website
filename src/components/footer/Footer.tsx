import "./Footer.css";
import { ArrowBendRightUp, EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer">
        <article className="footer__article">
          <h4>Stay connected?</h4>
          <a href="https://www.linkedin.com/in/benjamin-meijer" target="_blank">
            <LinkedinLogo size={32} />
          </a>
          <a href="https://github.com/Bernardthe3rd" target="_blank">
            <GithubLogo size={32} />
          </a>
          <a href="mailto:bernardmeijer@icloud.com">
            <EnvelopeSimple size={32} />
          </a>
          <Link to="home" smooth={true} duration={500}>
            <ArrowBendRightUp size={32} />
          </Link>
        </article>
        <p>© 2025 Benjamin Meijer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
