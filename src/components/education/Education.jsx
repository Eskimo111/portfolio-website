import React from "react";
import { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { Rotate } from "react-reveal";
import "./education.css";

const HIGHSCHOOL = {
  header: "Hung Vuong Gifted High School",
  list: [
    "Specialized Math Class",
    "Member of Competetive Programming Student Team",
  ],
};

const UNIVERSITY = {
  header: "FPT University",
  list: [
    "100% Scholarship",
    "GPA: 8.4/10 (3.4/4)",
    "Excellent Student of Semester Fall 2021",
    "Honorable Student of Semester Spring 2021, Summer 2021",
  ],
};

const Education = () => {
  const [active, setActive] = useState(0);
  const [content, setContent] = useState(HIGHSCHOOL);
  const clickHighSchool = () => {
    setActive(0);
    setContent(HIGHSCHOOL);
  };

  const clickUniversity = () => {
    setActive(1);
    setContent(UNIVERSITY);
  };
  return (
    <section id="education">
      <h5>Where i study</h5>
      <h2>Education</h2>
      <div className="flex-parent">
        <div className="input-flex-container">
          <div
            className={"input " + (active ? "" : "active")}
            onClick={clickHighSchool}
          >
            <span>Hung Vuong High School for The Gifted</span>
            <p>2017-2020</p>
          </div>
          <div
            className={"input " + (active ? "active" : "")}
            onClick={clickUniversity}
          >
            <span>FPT University</span>
            <p>2020</p>
          </div>
        </div>
      </div>

      <Rotate top left duration={500}>
        <div className="education__card">
          <h3>{content.header}</h3>
          <div className="education__content">
            {content.list.map((element) => {
              return (
                <article className="education__details">
                  <BsPatchCheckFill className="education__details-icon" />
                  <div>
                    <h4>{element}</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Rotate>
    </section>
  );
};

export default Education;
