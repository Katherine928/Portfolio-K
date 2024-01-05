import "./header.css";
import data from "./data.js";
import HeaderImage from "../../assets/header.png";
import Confetti from "./Confetti.jsx";

const Header = () => {
  return (
    <header id="header">
      <Confetti />
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">Katherine Brooks</h3>
        <p data-aos="fade-up">
          <strong>
            You're just a click away from discovering your dream worker!
          </strong>
          <br />
          Experienced in both front-end and back-end development, my expertise
          is forged through dedicated learning and substantial work experience.
          <br />
          Let's forge a connection! Share your specifics, and together, we'll
          curate the ideal match!
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
