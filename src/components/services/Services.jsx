import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import Roll from "react-reveal/Roll";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container container__services">
        {/*UX/UI DESIGN */}
        <Roll left duration={500}>
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>UX Design</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>UI and interaction design</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Rapid and interacting Prototyping</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Customer experience consulting</p>
              </li>
            </ul>
          </article>
        </Roll>
        {/*END OF UX/UI DESIGN */}
        {/*WEB DEVELOPMENT*/}
        <Roll left delay={500} duration={500}>
          <article className="service">
            <div className="service__head">
              <h3>Web Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Front-end Architecture & Design</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>SPA Application & Development</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>HTML5/ CSS Development</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p> React.js development</p>
              </li>
            </ul>
          </article>
        </Roll>
        {/*END OF WEB DEVELOPMENT*/}
        {/*CONTENT CREATION*/}
        <Roll left delay={1000} duration={500}>
          <article className="service">
            <div className="service__head">
              <h3>Mentor</h3>
            </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Makers/ Design enthusiasts</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Freelancers/ Solo designers</p>
              </li>
              <li>
                <BiCheck className="service__list-icon" />
                <p>Keeners/ Career switchers</p>
              </li>
            </ul>
          </article>
        </Roll>
        {/*END OF CONTENT CREATION*/}
      </div>
    </section>
  );
};

export default Services;
