import { LinuxLogo } from "@phosphor-icons/react";
import { Link } from "react-scroll"
import './Navbar.css'
import {useState} from "react";

const Navbar = () => {

    const [logoColor, setLogoColor] = useState("#503D42")

    const getRandomColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }

    const handleReload = () => {
        setLogoColor(getRandomColor())
        setTimeout(() => {
            window.location.reload();
        },300)
    }

    return (
        <nav className="container">
            <ul className="nav__big">
                <Link to="home" smooth={true} duration={500}>Home</Link>
                <Link to="about" smooth={true} duration={500}>About</Link>
                <LinuxLogo
                    size={64}
                    weight="thin"
                    color={logoColor}
                    style={{cursor: "pointer"}}
                    onClick={handleReload}
                />
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </ul>
        </nav>
    );
};

export default Navbar;