import { LinuxLogo } from "@phosphor-icons/react";
import { Link } from "react-scroll"
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="container">
            <ul className="nav__big">
                <Link to="home" smooth={true} duration={500}>Home</Link>
                <Link to="about" smooth={true} duration={500}>About</Link>
                <LinuxLogo size={64} />
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </ul>
        </nav>
    );
};

export default Navbar;