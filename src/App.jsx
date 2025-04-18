import './App.css'
import myself from "./assets/about-myself-img.jpeg"
import Navbar from "./components/navbar/Navbar.jsx"
import { Element } from 'react-scroll'
import { CaretCircleDown } from "@phosphor-icons/react";

function App() {

  return (
    <>
      <Navbar/>
      <Element name="home" className="container">
          <div className="element__home">
              <div className="element__home--title">
                  <h1>BENJAMIN MEIJER</h1>
                  <h2>Developer - Adventurer - IT help</h2>
              </div>
              <CaretCircleDown size={64} color="#84C318" />
          </div>
      </Element>
      <Element name="about" className="container">
          <img src={myself} alt="myself" />
          <article>
              <h2>Over mij</h2>
              <p>Biografie over mij</p>
          </article>
      </Element>
      <Element name="projects" className="container">
          <article>
              <span>
                  <img src={myself} alt="img of first project" />
              </span>
              <p>informatie over het project</p>
              <a href="https://github.com" target="_blank" >github link</a>
          </article>
          <article>
              <span>
                  <img src={myself} alt="img of first project" />
              </span>
              <p>informatie over het project</p>
              <a href="https://github.com" target="_blank" >github link</a>
          </article>
      </Element>
      <Element name="contact" className="container">
          <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="name" id="field-name" placeholder="Name" />
              <input type="email" name="email" id="field-email" placeholder="Email" />
              <textarea name="message" id="field-message" cols="50" rows="10" placeholder="Message" />
              <button type="submit">Send</button>
          </form>
      </Element>
      <footer className="container">
          <p>copyright</p>
      </footer>
    </>
  )
}

export default App
