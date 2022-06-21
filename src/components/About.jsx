import { Component } from "react";
import java from "../imgs/javascript.png";
import html from "../imgs/html.png";
import react from "../imgs/react.png";
import git from "../imgs/git.png";
import boostrap from "../imgs/bootstrap.png";
import csharp from "../imgs/csharp.png";
import nodejs from "../imgs/nodejs.png";
import python from "../imgs/python.png";
import "../styles/About.css";

class About extends Component {
  render() {
    return (
      <section className="about-Section">
        <h1 className="title text-center">Sobre Mim</h1>
        <article>
          <h2 className="Sub-Title-About blue">Um pouco sobre mim</h2>
          <p className="about-text">
            Eu sou um desenvolvedor Front-End, Tenho um sonho desde criança por
            programação, Graças a Trybe isso está deixando de ser um sonho para
            ser realidade. Atualmente estou aprendendo sobre Front-End e tenho
            interesse também em Back-End. Sempre tentando inovar e aprendendo
            novas tecnologias.
          </p>
        </article>
        <div>
          <h2 className="Sub-Title-About blue">Ferramentas e Skills</h2>
          <div className="tools-container">
            <div className="skill-container">
              <img className="skills-img" src={java} alt="logo javascript" />
              <span className="skill-name">Javascript</span>
            </div>
            <div className="skill-container">
              <img className="skills-img" src={html} alt="logo html" />
              <span className="skill-name">Html</span>
            </div>
            <div className="skill-container">
              <img className="skills-img" src={react} alt="logo reactJs" />
              <span className="skill-name">React js</span>
            </div>
            <div className="skill-container">
              <img className="skills-img" src={git} alt="logo git" />
              <span className="skill-name">Git</span>
            </div>
          </div>
          <div className="tools-container">
            <div className="skill-container">
              <img className="skills-img" src={nodejs} alt="logo nodeJs" />
              <span className="skill-name">NodeJs</span>
            </div>
            <div className="skill-container">
              <img className="skills-img" src={csharp} alt="logo CSharp" />
              <span className="skill-name">C#</span>
            </div>
            <div className="skill-container">
              <img className="skills-img" src={python} alt="logo python" />
              <span className="skill-name">Python</span>
            </div>
            <div className="skill-container">
              <img className="skills-img" src={boostrap} alt="logo boostrap" />
              <span className="skill-name">Boostrap</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
