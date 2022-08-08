import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.jpg";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <div className="header__right-section">
          <h1>
            Hello, I'm
            <br /> <b> Pham Nguyen</b>
            <br />
            Software Engineering Student.
          </h1>

          <CTA></CTA>
        </div>
        <HeaderSocial></HeaderSocial>

        {/*<a href="#contact" className="scroll__down">
          Scroll down
  </a>*/}
      </div>
    </header>
  );
};

export default Header;
