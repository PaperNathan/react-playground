import React from 'react';

import Tile from './Tile';

class Board extends React.Component {
    createBoard = () => {
        let tiles = [];

        for (let i=0; i<64; i++) {
            let x = Math.floor(i/8);
            let y = i % 8;

            tiles.push(<Tile id={[x, y]} tileState={this.props.activeBoard[x][y]} />)
        }

        return tiles;
    }

    render() {
        return (
            <div>
                {this.createBoard()}
            </div>
        );
    }
}

export default Board;
