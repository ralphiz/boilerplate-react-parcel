/**
 * TODO:
 * - Extract navigation to a seprate component.
 */
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
          <nav className="relative select-none bg-grey lg:flex lg:items-stretch w-full">
            {/* Top left of navigation */}
            <div className="flex flex-no-shrink items-stretch h-12">
              <Link
                className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
                to="/"
              >
                Ralph&#39;s Boilerplate
              </Link>
            </div>
            {/* Top right links start here */}
            <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
              <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
                <Link
                  className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
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

/**
 * Sources / Credit
 * Navigation: https://tailwindcomponents.com/component/responsive-navbar
 */
