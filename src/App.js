import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/homePage";
import LoginPage from "./components/pages/loginPage";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
      </div>
    );
  }
}

export default App;
