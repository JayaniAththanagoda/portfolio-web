import React, { useRef } from "react";
import "./contact.css";
import FacebookIcon from "../../Assets/facebook.png";
import YoutubeIcon from "../../Assets/youtube.png";
import InstagramIcon from "../../Assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_llacxil", "template_xcm9v5j", form.current, {
        publicKey: "JwmD•••••••••••••••••",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contactpage">
      <div id="contact">
        <h1 className="contactpageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any oppotunity
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          >
            {" "}
          </textarea>
          <button type="submit" value="sent" className="submitBtn">
            submit
          </button>
          <div className="link">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={YoutubeIcon} alt="Youtube" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
