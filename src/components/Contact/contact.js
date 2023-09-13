import React, { useRef } from "react";
import "./contact.css";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedinIcon from "../../assets/linkedin.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_99tqwwe",
        "template_9x13j6g",
        form.current,
        "pNpJPZ0fKgdc3rY4I"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h1 className="title">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          className="name"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="from_email"
          className="email"
          placeholder="Your Email"
        />
        <textarea
          name="message"
          className="msg"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>
        <div className="links">
          <a href="#">
            <img src={FacebookIcon} alt="Facebook icon" className="link" />
          </a>
          <a href="#">
            <img src={TwitterIcon} alt="Twitter icon " className="link" />{" "}
          </a>
          <a href="https://www.linkedin.com/in/khushi9555/">
            <img src={LinkedinIcon} alt="Linkedin icon" className="link" />{" "}
          </a>
          <a href="https://www.instagram.com/khushi_pandey_9555/">
            <img src={InstagramIcon} alt="Instagram icon" className="link" />{" "}
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
