import "./App.css";
import { Component } from "react";
import Main from './Main'
import About from './About'
import Projects from "./Projects";

class App extends Component {
  render() {
    return (
      <>
      <Main />
      <hr className="section-line mg-auto" />
      <About />
      <Projects />
      </>
    );
  }
}

export default App;
