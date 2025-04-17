import { LinuxLogo } from "@phosphor-icons/react";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="container">
            <ul className="nav__big">
                <li>Home</li>
                <li>About</li>
                <LinuxLogo size={64} />
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;