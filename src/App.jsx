import "./App.css";

// import components
import Navbar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About.jsx";
import Home from "./components/home/Home.jsx";
import Projects from "./components/projects/Projects.tsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
