import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import title from "../pictures/title.jpg";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
    this.setRedirect = this.setRedirect.bind(this);
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={"/tictactoe"} />;
    }
  };
  render() {
    return (
      <div className="home">
        <img className="title" src={title} alt="TicTacToe" />
        <div className="begin">
          {this.renderRedirect()}
          <Button
            className="button"
            variant="secondary"
            name="begin"
            onClick={this.setRedirect}
          >
            Let's begin
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
