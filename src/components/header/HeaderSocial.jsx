import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/trung-nguy%C3%AAn-ph%E1%BA%A1m-0bb039242/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Eskimo111" target="_blank">
        <FaGithub />
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=100010376056960"
        target="_blank"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocial;
