import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { SiZalo } from "react-icons/si";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Button, Form, FormFeedback, FormGroup, Input } from "reactstrap";
const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState({ name: false, email: false });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
    }
  };

  const handleBlur = (field) => (event) => {
    setTouched((prevState) => {
      return { ...prevState, [field]: true };
    });
  };

  function validate(name, email) {
    const errors = {
      name: "",
      email: "",
    };
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (touched.name && name.length < 3)
      errors.name = "Name should be >= 3 characters";
    else if (touched.name && name.length > 16)
      errors.name = "Name should be <= 30 characters";
    if (touched.email && !re.test(email)) {
      errors.email = "Incorrect email format!!";
    }
    return errors;
  }

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

    form.current.reset();
    setName("");
    setEmail("");
    setTouched({ name: false, email: false });
  };

  const errors = validate(name, email);
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
          <FormGroup>
            <Input
              type="text"
              name="name"
              placeholder="Your Fullname"
              required
              value={name}
              valid={errors.name === ""}
              invalid={errors.name !== ""}
              onBlur={handleBlur("name")}
              onChange={handleInputChange}
            />
            <FormFeedback>{errors.name}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={email}
              valid={errors.email === ""}
              invalid={errors.email !== ""}
              onBlur={handleBlur("email")}
              onChange={handleInputChange}
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </FormGroup>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <Button type="submit" className="btn btn-primary">
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
