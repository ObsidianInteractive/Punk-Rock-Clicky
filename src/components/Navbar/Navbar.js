import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
            <li>Test Your Memory</li>
            <li>{this.props.navMessage}</li>
            <li> Score: {this.props.score} || Top Score: {this.props.topScore}
            </li>
          </ul>
      </nav>
    );
  }
}

export default Navbar;