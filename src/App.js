import "./styles/App.css";
import { Component } from "react";
import Main from './components/Main'
import About from './components/About'
import Projects from './components/Projects'

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
