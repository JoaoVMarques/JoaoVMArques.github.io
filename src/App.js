import "./App.css";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="main">
          <div className="center-text-container">
            <span className="subhead-title">Olá! eu sou</span>
            <h1 className="name-title">João Marques</h1>
            <h2 className="programming-title">Sou um programador Front-End</h2>
          </div>
        </main>
        <h2>.</h2>
      </div>
    );
  }
}

export default App;
