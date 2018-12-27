import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "../forms/loginForm";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
