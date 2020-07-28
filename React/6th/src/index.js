import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from "react-router-dom";
import App from "./App";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Services from "./components/Services";

const routing = (
  <Router>
    <div>
      <h1>React Router Example</h1>
      <ul>
        <li>
          <NavLink to="/home" exact activeStyle={{ color: "red" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" exact activeStyle={{ color: "green" }}>
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink to="/project" exact activeStyle={{ color: "magenta" }}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/service" exact activeStyle={{ color: "yellow" }}>
            Services
          </NavLink>
        </li>
      </ul>
        <Route path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contacts} />
        <Route path="/project" component={Projects} />
        <Route path="/service" component={Services} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
