import React, { Component } from "react";
import Home from "./home";
import TicTacToe from "./tictactoe";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/tictactoe" component={TicTacToe} />
          <Redirect to="/home" component={Home} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;
