import React from "react";
import "./intro.css";
import bg from "../../Assets/jayani.png";

import { Link } from "react-scroll";
import btnImg from "../../Assets/hireme.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Jayani</span>
          <br />
          Software Engineer
        </span>
        <p className="intropara">
          {" "}
          Passionate software engineer with a knack for solving complex problems and a love for creating innovative solutions. Dedicated to continuous learning and delivering high-quality work.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg"></img>Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};
export default Intro;
