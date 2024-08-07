import React from "react";
import "../assets/styles/contact.css";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import email from "../assets/images/contact_email.png";
import xicon from "../assets/images/contact_x.png";
import linkedin from "../assets/images/contact_linkedin.png";
import fb from "../assets/images/contact_fb.png";
import call from "../assets/images/contact_call.png";
import wp from "../assets/images/contact_wp.png";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <section className="contact global-container">
      <h2 className="contact__title section-title line-text">HIRE ME</h2>
      <div className="contact__content">
        <div className="contact__info">
          <div className="info__name">
            <img src={logo} alt="hertec" />
            <h3>HerTec</h3>
          </div>
          <h5 className="contact__subtitle">Software Engineer</h5>
          <p className="info-description">
            My Name is Alehito. I’m a seasoned software engineer with a passion
            for crafting innovative and user-centric solutions. Skilled in
            multiple programming languages, specializing in the development of
            full-stack web applications and mobile applications.
          </p>

          <div className="contact__social-media">
            <a  href="https://wa.me/79054514616">
              <img src={wp} alt="whatsapp" />
            </a>
            <a href="tel:+79054514616">
              <img src={call} alt="call" />
            </a>
            <a href="#">
              <img href="https://linkedin.com/in/yourprofile" target="_BLANK" src={linkedin} alt="linkedin" />
              
            </a>
            <a href="https://facebook.com/yourprofile" target="_BLANK">
              <img src={fb} alt="fb" />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="contact__subtitles">
            <span className="span__questions">Any questions?</span>
            <span className="span__drop-line">Drop me a line</span>
          </div>

          <div className="form__inputs-container">
            {" "}
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                r
                required
              />
            </div>
          </div>

          <button className="button--secundary" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
