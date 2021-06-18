import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Header/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Project/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
