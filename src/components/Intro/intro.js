import React from "react";
import "./intro.css";
import bg from "../../assets/girl_photo.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
import CV from "../../assets/CV_Khushi_Pandey(2023).pdf";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <h5 className="hello">Who I am?</h5>
        <span className="introText">
          I'm <span className="introName">Khushi  </span> <br /> Website Designer{" "}
        </span>

        <p className="introPara">
          I am a result-oriented and self-motivated individual with B.Tech in CSE.My passion for software development and strong foundation in coding and web design make me a valuable assert to any software engineering team.
        </p>

        <div className="button-section">
          <Link to="contact">
            <button className="btn">
              <img src={btnImg} alt="Hire me" className="btnImg" />
              Hire me
            </button>
          </Link>

          <button className="btn">
            <a href={CV} download>
              Download CV
            </a>
          </button>
        </div>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
