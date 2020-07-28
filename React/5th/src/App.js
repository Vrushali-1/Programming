import React, { Component } from "react";
import Clock from "./components/Clock";
import Header from "./components/Header";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "React Clock"
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <Clock />
      </div>
    );
  }
}
