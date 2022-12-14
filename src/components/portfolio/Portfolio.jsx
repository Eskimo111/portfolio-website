import React, { Component } from "react";
import "./portfolio.css";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PortfolioItem from "./PortfolioItem";

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
          {this.props.projects.map((project) => {
            return (
              <Fade bottom duration={500}>
                <PortfolioItem project={project}></PortfolioItem>
              </Fade>
            );
          })}
        </div>
      </section>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Portfolio));
