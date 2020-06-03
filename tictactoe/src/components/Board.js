import React from 'react';

import Tile from "./Tile";

class Board extends React.Component {

    makeTiles = () => {
        let tiles = [];
        for (let i=0; i<9; i++) {
            tiles.push(<Tile key={`key-${i}`} id={i} move={this.props.move} gameState={this.props.gameState} />);
        }
        return tiles;
    }

    getGameState = () => {
      if (!this.props.gameOver) {
        return (this.props.player) ? "X's turn" : "O's turn";
      } else {
        return (this.props.player) ? "O Wins" : "X Wins";
      }
    }

    render() {
        return (
          <div>
              <div style={boardStyle}>
                  {this.makeTiles()}
              </div>
              <p style={{textAlign: 'center', fontSize: '32px'}}>{this.getGameState()}</p>
          </div>
        );
    }
}

let boardStyle = {
    height: '300px',
    width: '300px',
    display: 'flex',
    flexWrap: 'wrap',
};

export default Board;
