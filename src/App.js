import React, { Component } from "react";
import NavBar from "./componets/navbar";
import "./App.css";
import Counters from "./componets/counters";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
