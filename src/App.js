import { Link, Router } from "@reach/router";

import Contact from "./components/Contact";
import Home from "./components/Home";
import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Ralph's Boilerplate</Link>
        </header>
        <Router>
          <Home path="/" />
          <Contact path="/contact" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
