import React from "react";

const Project = (props) => {
  return (
    <article key={props.project.id} className="projects__item">
      <div className="projects__item-image">
        <img src={props.project.image} />
      </div>
      <h3>{props.project.title}</h3>
      <div className="projects__item-cta">
        <a href={props.project.github} className="btn" target="_blank">
          Github
        </a>
        <a
          href={props.project.demo}
          className="btn btn-primary"
          target="_blank"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default Project;
