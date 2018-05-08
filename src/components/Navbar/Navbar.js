import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
            <li>AY OH LETS GO!!!</li>
            <li>{this.props.clickMessage}</li>
            <li> Score: {this.props.correctGuesses} | Top Score: {this.props.bestScore}
            </li>
          </ul>
      </nav>
    );
  }
}

export default Navbar;