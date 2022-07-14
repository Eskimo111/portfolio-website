import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { SiZalo } from "react-icons/si";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_esg9ieu",
        "template_u7qq4jn",
        form.current,
        "XY1fL_j1tCBiqe2Su"
      )
      .then(
        (result) => {
          console.log(form);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>trungnguyengl176@gmail.com</h5>
            <a href="mailto:trungnguyengl176@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Pham Nguyen</h5>
            <a href="https://www.facebook.com/nguyen176a">Send a message</a>
          </article>
          <article className="contact__option">
            <SiZalo className="contact__option-icon" />
            <h4>Zalo</h4>
            <h5>(+84) 0836 217 778</h5>
            <a href="mailto:trungnguyengl176@gmail.com">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Fullname" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
