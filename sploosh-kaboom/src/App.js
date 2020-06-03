import React from 'react';

import Board from './components/Board';

class App extends React.Component {
    state = {
      activeBoard: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ]
    }

    setPieces = () => {
        let squid = {
            large: [],
            medium: [],
            small: [],
        }
    }

    takeShot = () => {
        this.setState(() => {
          let newGameState = [...this.state.activeBoard];

          this.setState({
            activeBoard: newGameState,
          });
        })
    }

    render() {
      return (
        <div>
          <Board activeBoard={this.state.activeBoard} takeShot={this.takeShot()} />
        </div>
      );
    }
}

export default App;
