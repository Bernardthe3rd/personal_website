import './Home.css'
import {Element, Link} from "react-scroll";
import {ArrowBendRightDown} from "@phosphor-icons/react";


const Home = () => {
    return (
        <Element name="home" className="container">
            <div className="element__home">
                <div className="element__home--title">
                    <h1>BENJAMIN MEIJER</h1>
                    <h2>Developer - Adventurer - IT help</h2>
                </div>
                <Link to="about" smooth={true} duration={500}>
                    <ArrowBendRightDown size={64} />
                </Link>
            </div>
        </Element>
    );
}

export default Home;