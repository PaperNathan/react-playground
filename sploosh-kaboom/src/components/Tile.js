import React from 'react'

class Tile extends React.Component {
    state = {
        x: this.props.id[0],
        y: this.props.id[1],
    };

    render() {
        return (
            <div>
                {`${this.props.tileState}`}
            </div>
        )
    }
}

export default Tile;