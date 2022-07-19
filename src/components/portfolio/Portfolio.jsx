import React, { Component } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="portfolio">
        <h5>My recent work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {this.props.projects.map(({ id, image, title, github, demo }) => {
            return (
              <Fade bottom duration={500}>
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn" target="_blank">
                      Github
                    </a>
                    <a href={demo} className="btn btn-primary" target="_blank">
                      Live Demo
                    </a>
                  </div>
                </article>
              </Fade>
            );
          })}
        </div>
      </section>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Portfolio));
