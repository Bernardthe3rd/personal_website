import { LinuxLogo } from "@phosphor-icons/react";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <LinuxLogo size={24} />
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}