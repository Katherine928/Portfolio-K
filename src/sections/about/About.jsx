import "./about.css";
import data from "./data.js";
import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {/* {
                    data.map(item => (
                        <Card key={item.id} className="about__card">
                            <span className='about__card-icon'>{item.icon}</span>
                            <h5>{item.title}</h5>
                            <small>{item.desc}</small>
                        </Card>
                    ))
                } */}
          </div>
          <p>
            Project crafting is the heartbeat of my professional and personal
            pursuits, an eternal flame igniting innovation. With over 2
            enriching years in the industry, I've woven inspiring creations.
            Committed to exceeding expectations and chasing boundless
            innovation!
          </p>
          <p>
            Hello there! I'm Katherine Brooks, a full-stack web developer armed
            with a Master's degree in Computer Science. Within the labyrinth of
            the human brain, two passions reign supreme: coding and the
            insatiable quest for learning. Explore my resume below and reach out
            today with the specifics of your position. Let's embark on an
            extraordinary journey together!
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
