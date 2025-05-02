import myself from "../../assets/about-myself-img.jpeg";
import "./About.css";
import { Element, Link } from "react-scroll";

const About = () => {
  return (
    <Element name="about" className="container">
      <div className="element__about">
        <span className="img-wrapper__about">
          <img src={myself} alt="myself" />
        </span>
        <article className="element__about--text">
          <h2>Over mij</h2>
          <p>
            Hoi! Ik ben Benjamin, een gedreven en nieuwsgierige developer met een brede interesse in
            technologie en het bouwen van slimme, schaalbare oplossingen. Na enkele jaren
            werkervaring in boekhouding en databeheer heb ik bewust de stap gezet naar een carrière
            in softwareontwikkeling.
            <br />
            <br />
            Wat begon als een persoonlijke interesse in programmeren, groeide al snel uit tot een
            echte passie. Inmiddels heb ik mezelf een stevige basis aangeleerd in zowel front-end
            als back-end development, met onder andere HTML, CSS, JavaScript, React, Java en Spring
            Boot. Daarnaast verdiep ik me actief in Docker en PHP, omdat ik geloof dat een goede
            developer voortdurend blijft leren.
            <br />
            <br />
            Mijn leerproces is sterk praktijkgericht: ik werk graag aan kleine projecten,
            experimenteer met nieuwe technieken en pas die kennis vervolgens toe in realistische
            situaties. Mijn ambitie is om me verder te ontwikkelen tot een veelzijdige developer die
            breed inzetbaar is en teams kan versterken met een combinatie van technische kennis,
            leergierigheid en een gestructureerde aanpak.
            <br />
            <br />
            Naast coderen werk ik graag samen, communiceer ik helder en denk ik actief mee over
            oplossingen. Ik haal veel energie uit het sparren met collega’s en geloof dat de beste
            resultaten ontstaan door goede samenwerking en open communicatie.
            <br />
            <br />
            In mijn vrije tijd ben ik vaak achter mijn laptop te vinden, maar ook buiten te spotten
            tijdens het hardlopen of onderweg naar een nieuwe reisbestemming. Ik ben ervan overtuigd
            dat een brede blik en nieuwsgierigheid je als developer verder brengen — en die mindset
            neem ik mee in alles wat ik doe.
            <br />
            <br />
            Nieuwsgierig naar mijn werk of wil je gewoon eens kennismaken? Stuur gerust{" "}
            <Link to="contact" smooth={true} duration={500}>
              teen berichtje
            </Link>{" "}
            of neem een kijkje op{" "}
            <a href="https://github.com/Bernardthe3rd" target="_blank">
              {" "}
              mijn GitHub!
            </a>
          </p>
        </article>
      </div>
    </Element>
  );
};

export default About;
