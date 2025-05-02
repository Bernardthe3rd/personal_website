import { LinuxLogo, List, XCircle } from "@phosphor-icons/react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [logoColor, setLogoColor] = useState("#503D42");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const handleReload = () => {
    setLogoColor(getRandomColor());
    setTimeout(() => {
      window.location.reload();
    }, 300);
  };

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className={`nav__small ${isMenuOpen ? "menu-open" : ""}`}>
        <button onClick={handleMenu} className="hamburger">
          {isMenuOpen ? <XCircle size={32} /> : <List size={32} />}
        </button>
        <Link to="home" smooth={true} duration={500} onClick={handleMenu}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={handleMenu}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={handleMenu}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={handleMenu}>
          Contact
        </Link>
      </div>

      <ul className="nav__big">
        <LinuxLogo
          size={64}
          weight="thin"
          color={logoColor}
          style={{ cursor: "pointer" }}
          onClick={handleReload}
        />
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
