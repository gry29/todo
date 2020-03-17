import React, { Component } from "react";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Route, Switch, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" className="header">
          <Navbar.Brand href="#home">TO-DO App</Navbar.Brand>
          <Nav>
            <NavLink className="header__link" to="/">
              Актуальные задачи
            </NavLink>
            <NavLink className="header__link" to="/complete">
              Выполненные задачи
            </NavLink>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" />
          <Route path="/complete" />
        </Switch>
      </div>
    );
  }
}

export default App;
