import React from "react";
import "./newnav.css";
import CV from "../../assets/cv.pdf";
import { Link } from "react-router-dom";

const NewNav = () => {
  return (
    <nav className="container">
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/education" className="nav-link">
        Education
      </Link>
      <Link to="/projects" className="nav-link">
        Projects
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
      <a href={CV} className="nav-CTA">
        Download CV
      </a>
    </nav>
  );
};

export default NewNav;
