import React, { Component } from "react";
import "./projects.css";
import Fade from "react-reveal/Fade";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Project from "./Project";

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

class Projects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="projects">
        <h5>My recent work</h5>
        <h2>Projects</h2>
        <div className="container projects__container">
          {this.props.projects.map((project) => {
            return (
              <Fade bottom duration={500}>
                <Project project={project}></Project>
              </Fade>
            );
          })}
        </div>
      </section>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Projects));
