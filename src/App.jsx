import './App.css'
import myself from "./assets/about-myself-img.jpeg"
import Navbar from "./components/navbar/Navbar.jsx"
import { Element, Link } from 'react-scroll'
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
          <div className="element__about">
              <span className="img-wrapper">
                  <img src={myself} alt="myself" />
              </span>
              <article className="element__about--text">
                  <h2>Over mij</h2>
                  <p>
                      Hoi! Ik ben Benjamin, een gedreven en nieuwsgierige developer met een brede interesse in technologie en het bouwen van slimme, schaalbare oplossingen. Na enkele jaren werkervaring in boekhouding en databeheer heb ik bewust de stap gezet naar een carrière in softwareontwikkeling.
                      <br/><br/>
                      Wat begon als een persoonlijke interesse in programmeren, groeide al snel uit tot een echte passie. Inmiddels heb ik mezelf een stevige basis aangeleerd in zowel front-end als back-end development, met onder andere HTML, CSS, JavaScript, React, Java en Spring Boot. Daarnaast verdiep ik me actief in Docker en PHP, omdat ik geloof dat een goede developer voortdurend blijft leren.
                      <br/><br/>
                      Mijn leerproces is sterk praktijkgericht: ik werk graag aan kleine projecten, experimenteer met nieuwe technieken en pas die kennis vervolgens toe in realistische situaties. Mijn ambitie is om me verder te ontwikkelen tot een veelzijdige developer die breed inzetbaar is en teams kan versterken met een combinatie van technische kennis, leergierigheid en een gestructureerde aanpak.
                      <br/><br/>
                      Naast coderen werk ik graag samen, communiceer ik helder en denk ik actief mee over oplossingen. Ik haal veel energie uit het sparren met collega’s en geloof dat de beste resultaten ontstaan door goede samenwerking en open communicatie.
                      <br/><br/>
                      In mijn vrije tijd ben ik vaak achter mijn laptop te vinden, maar ook buiten te spotten tijdens het hardlopen of onderweg naar een nieuwe reisbestemming. Ik ben ervan overtuigd dat een brede blik en nieuwsgierigheid je als developer verder brengen — en die mindset neem ik mee in alles wat ik doe.
                      <br/><br/>
                      Nieuwsgierig naar mijn werk of wil je gewoon eens kennismaken? Stuur gerust <Link to="contact" smooth={true} duration={500}> een berichtje </Link> of neem een kijkje op <a href="https://github.com/Bernardthe3rd"> mijn GitHub!</a>
                  </p>
              </article>
          </div>
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
