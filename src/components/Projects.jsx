import { Component } from "react";
import "../styles/Projects.css";
import PlaceHolderCard from "./PlaceHolderCard";

class Projects extends Component {
  render() {
    return (
      <section className="projects-section">
        <h1 className="title text-center">Projetos</h1>
        <div className="row">
          <PlaceHolderCard />
          <PlaceHolderCard />
          <PlaceHolderCard />
        </div>
        <div className="row">
          <PlaceHolderCard />
          <PlaceHolderCard />
          <PlaceHolderCard />
        </div>
      </section>
    );
  }
}

export default Projects;
