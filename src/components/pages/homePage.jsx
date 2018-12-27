import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class HomePage extends Component {
  render() {
    return (
      <div>
        <div>Wecome to My React App</div>
        <NavLink to="/login">Login</NavLink>
      </div>
    );
  }
}

export default HomePage;
