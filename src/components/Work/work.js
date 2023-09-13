import React from "react";
import "./work.css";
import IMG1 from "../../assets/Image1.png";
import IMG2 from "../../assets/Image2.png";
import IMG3 from "../../assets/Image3.png";
import IMG4 from "../../assets/Image4.png";
import IMG5 from "../../assets/Image5.png";
import IMG6 from "../../assets/Image6.png";

const Works = () => (
  <section id="work">
    <h5>My Recent Work</h5>
    <h2 className="skillTitle title">Project</h2>

    <div className="project_container">
      {/* project 1 */}
      <article className="project_item">
        <div className="project_item-image">
          <img src={IMG1} alt="" className="project_image" />
        </div>

        <div className="project_desc">
          <h3>FindPixel - Image Search website</h3>
          <a href="https://github.com/khushi9555/FindPixel" className="btn1">
            Github
          </a>
          <a
            href="https://drive.google.com/file/d/1YsOWTPBtLdnbZPGdXJ-wg-7pp7F9lOFx/view?usp=sharing"
            className="btn1 btn2"
          >
            Live Demo
          </a>
          <a
            href="https://khushi9555.github.io/FindPixel/"
            className="btn1 btn3"
          >
            Link
          </a>
        </div>
      </article>
      {/* project 2 */}
      <article className="project_item">
        <div className="project_item-image">
          <img src={IMG2} alt="" className="project_image" />
        </div>
        <div className="project_desc">
          <h3>Bubble Hit - Game</h3>
          <a href="https://github.com/khushi9555/Bubble-hit" className="btn1">
            Github
          </a>
          <a
            href="https://drive.google.com/file/d/1fJG2b4Lx5TPlOIwJWs3_vD-gppjtX2bK/view?usp=sharing"
            className="btn1 btn2"
          >
            Live Demo
          </a>
          <a
            href="https://khushi9555.github.io/Bubble-hit/"
            className="btn1 btn3"
          >
            Link
          </a>
        </div>
      </article>

      {/* project 3 */}
      <article className="project_item">
        <div className="project_item-image">
          <img src={IMG3} alt="" className="project_image" />
        </div>
        <div className="project_desc">
          <h3>DailyNews - News Website</h3>
          <a href="https://github.com/khushi9555/DailyNews" className="btn1">
            Github
          </a>
          <a
            href="https://drive.google.com/file/d/1oLlKLClenLg3BfyH1X0FFr2hc36WYUk7/view?usp=sharing"
            className="btn1 btn2"
          >
            Live Demo
          </a>
        </div>
      </article>

      {/* project 4 */}
      <article className="project_item">
        <div className="project_item-image">
          <img src={IMG4} alt="" className="project_image" />
        </div>
        <div className="project_desc">
          <h3>Cynthia ugwu's portfolio Clone</h3>
          <a
            href="https://github.com/khushi9555/Cynthia_Portfolio_Clone"
            className="btn1 "
          >
            Github
          </a>
          <a
            href="https://drive.google.com/file/d/1fV6IiRyi04yKYs0nZZeHRuyidzjA7Xxm/view?usp=sharing"
            className="btn1 btn2"
          >
            Live Demo
          </a>
          <a
            href="https://khushi9555.github.io/Cynthia_Portfolio_Clone/"
            className="btn1 btn3"
          >
            Link
          </a>
        </div>
      </article>

      {/* project 5 */}
      <article className="project_item">
        <div className="project_item-image">
          <img src={IMG5} alt="" className="project_image" />
        </div>
        <div className="project_desc">
          <h3>ToDoList</h3>
          <a href="https://github.com/khushi9555/ToDoList" className="btn1">
            Github
          </a>
          <a
            href="https://drive.google.com/file/d/1UgtAmCrkGAN3vV2OldUgpXpHzBEpRzfy/view?usp=sharing"
            className="btn1 btn2"
          >
            Live Demo
          </a>
        </div>
      </article>

      {/* project 6*/}
      <article className="project_item">
        <div className="project_item-image">
          <img src={IMG6} alt="" className="project_image" />
        </div>
        <div className="project_desc">
          <h3>Countdown timer </h3>
          <a
            href="https://github.com/khushi9555/Countdown-timer"
            className="btn1"
          >
            Github
          </a>
          <a
            href="https://khushi9555.github.io/Countdown-timer/"
            className="btn1 btn2"
          >
            Link
          </a>
        </div>
      </article>
    </div>
  </section>
);

export default Works;
