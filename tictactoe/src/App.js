import React from 'react';

import Board from "./components/Board";
import './App.css';

class App extends React.Component {
  state = {
    gameState: [[null, null, null],
                [null, null, null],
                [null, null, null]],
    turn: true,
    gameOver: false
  }

  // Modifies the gameState and turn
  nextMove = (id) => {
    if (this.state.gameOver) return;

    let x = Math.floor(id/3);
    let y = id%3;

    let newGameState = [...this.state.gameState];
    newGameState[x][y] = this.state.turn;

    this.setState({
      gameState: newGameState,
      turn: !this.state.turn
    });

    this.checkWin(newGameState);
  }

  // Checks if there is a winner
  checkWin = (game) => {
    for (let i=0; i<3; i++) {
      if (game[i][0] === game[i][1] && game[i][1] === game[i][2]) {
        if (game[i][0] != null && game[i][1] != null && game[i][2] != null) {
          this.setState({gameOver: true});
        }
      }

      if (game[0][i] === game[1][i] && game[1][i] === game[2][i]) {
        if (game[0][i] != null && game[1][i] != null && game[2][i] != null) {
          this.setState({gameOver: true});
        }
      }
    } // End of For Loop

    if (game[0][0] === game[1][1] && game[1][1] === game[2][2]) {
      if (game[0][0] != null && game[1][1] != null && game[2][2] != null) {
        this.setState({gameOver: true});
      }
    }

    if (game[0][2] === game[1][1] && game[1][1] === game[2][0]) {
      if (game[0][2] != null && game[1][1] != null && game[2][0] != null) {
        this.setState({gameOver: true});
      }
    }
  }

  render() {
      return (
      <div style={appContainer}>
        <Board move={this.nextMove} gameState={this.state.gameState} player={this.state.turn} gameOver={this.state.gameOver} />
      </div>
    );
  }
}

// Styles for App Container
let appContainer = {
  height: '300px',
  width: '300px',
}

export default App;
