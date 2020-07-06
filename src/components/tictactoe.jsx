import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayAgain from "./playAgain";
import Piece from "./piece";

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces: Array(9).fill(null),
      xIsNext: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    if (calWinner(this.state.pieces)) {
      return;
    }
    const prevPieces = this.state.pieces.slice();
    if (prevPieces[index] === null) {
      if (this.state.xIsNext) {
        prevPieces[index] = "X";
      } else {
        prevPieces[index] = "O";
      }
      this.setState({
        pieces: prevPieces,
        xIsNext: !this.state.xIsNext
      });
    }
  }

  render() {
    const winner = calWinner(this.state.pieces);
    return (
      <div>
        <div className="board">
          {this.state.pieces.map((piece, index) => {
            return (
              <Piece value={piece} onClick={() => this.handleClick(index)} />
            );
          })}
        </div>
        {winner ? <PlayAgain winner={winner} /> : null}
      </div>
    );
  }
}
/* return the winner */
function calWinner(pieces) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (pieces[a] && pieces[a] === pieces[b] && pieces[a] === pieces[c]) {
      return pieces[a];
    }
  }
  return null;
}

export default TicTacToe;
