import React from "react";
import "../assets/styles/contact.css";
import { useState } from "react";
import logo from "../assets/images/logo.svg";
import linkedin from "../assets/images/linkedin.svg";
import gmail from "../assets/images/gmail.svg";
import call from "../assets/images/phone.svg";
import wp from "../assets/images/wp.svg";
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
          Thank you for reviewing my portfolio. I hope you found it enjoyable. If you are interested in exploring collaboration opportunities or discussing potential contributions to your company, please feel free to contact me. I am excited about the possibility of bringing my skills to your team and working together to develop innovative ideas.
          </p>

          <div className="contact__social-media">
            <a  href="https://wa.me/79054514616">
              <img src={wp} alt="whatsapp" />
            </a>
            <a href="tel:+79054514616">
              <img src={call} alt="call" />
            </a>
            <a href="https://www.linkedin.com/in/esneider-alejandro-herrera-romero-19a202309/" target="_BLANK" >
              <img src={linkedin} alt="linkedin" />
              
            </a>
            <a href="mailto:hertecnology@gmail.com" target="_BLANK">
              <img src={gmail} alt="gmail" />
            </a>
          </div>
        </div>

        {/* <form onSubmit={handleSubmit}>
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
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
