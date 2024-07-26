import React from "react";
import "./skills.css";
import UIDesign from "../../Assets/ui-design.png";
import frontend from "../../Assets/frontend.png";
import backend from "../../Assets/backend.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle"> What I do </span>
      <span className="skillDesc">
        I possess a strong foundation in coding, problem-solving, and
        collaborative development.
      </span>
      <div className="skillsBars">
        <div className="skillBar">
          <img src={UIDesign} alt="ui-design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI Design</h2>
            <p>delivering engaging and user-friendly interfaces.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={frontend} alt="frontend" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Frontend Developer</h2>
            <p>creating intuitive and visually appealing user interfaces.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={backend} alt="backend" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Backend Developer</h2>
            <p> crafting robust and scalable server-side applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
