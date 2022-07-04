import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container container__portfolio">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First project" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://dribbble.com/shots/18671535-DeFi-farming-identity-and-illustrations"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First project" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://dribbble.com/shots/18671535-DeFi-farming-identity-and-illustrations"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First project" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://dribbble.com/shots/18671535-DeFi-farming-identity-and-illustrations"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First project" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://dribbble.com/shots/18671535-DeFi-farming-identity-and-illustrations"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First project" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://dribbble.com/shots/18671535-DeFi-farming-identity-and-illustrations"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First project" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target="_blank">
            Github
          </a>
          <a
            href="https://dribbble.com/shots/18671535-DeFi-farming-identity-and-illustrations"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
