import { Link, Router } from "@reach/router";

import Contact from "./components/Contact";
import Home from "./components/Home";
import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="w-full">
          <nav className="container mx-auto flex items-center justify-between flex-wrap py-3">
            <Link to="/">Ralph&#39;s Boilerplate</Link>
          </nav>
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
