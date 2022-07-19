import React, { useState } from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Fade from "react-reveal/Fade";

const About = () => {
  const EXPERIENCE =
    "I dont like define myself by the work i've done. I define myself by the work i want to do. I prefer to keep learning, continue challenging myself and do interesting thing that matter.";
  const CLIENT =
    "I'm proud to have collaborated with some awesome companies such as Briteweb, Good Kind, Redstemp, Domain7, DesignLab ";
  const PROJECT =
    "I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own.";
  const [content, setContent] = useState(EXPERIENCE);

  const clickExperience = () => {
    setContent(EXPERIENCE);
  };

  const clickClient = () => {
    setContent(CLIENT);
  };

  const clickProject = () => {
    setContent(PROJECT);
  };
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <Fade left duration={500}>
              <article className="about__card" onClick={clickExperience}>
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small> 3+ Year Working</small>
              </article>
            </Fade>
            <Fade left delay={500} duration={500}>
              <article className="about__card" onClick={clickClient}>
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small> 200+ Worldwide</small>
              </article>
            </Fade>
            <Fade left delay={1000} duration={500}>
              <article className="about__card" onClick={clickProject}>
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small> 80+ Complete</small>
              </article>
            </Fade>
          </div>
          <p>{content}</p>

          <a href="#contact" className="btn btn-primary ">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
