import React from 'react';

class Tile extends React.Component {

    state = {
        tileState: this.props.gameState,
    }

    createStyle = () => {
        let x = Math.floor(this.props.id/3);
        let y = this.props.id%3;

        let xUrl = 'https://image.freepik.com/free-icon/x-botton_318-10910.jpg';
        let oUrl = 'https://alphagolffoxtrot.files.wordpress.com/2017/03/o29.jpg';

        let displayUrl = '';

        if (this.state.tileState[x][y] != null) {
            displayUrl = (this.state.tileState[x][y]) ? xUrl : oUrl;
        }


        return {
            height: '100px',
            width: '100px',
            boxSizing: 'border-box', 
            borderBottom: (this.props.id > 5) ? '0px solid black' : '1px solid black',
            borderRight: ((this.props.id + 1) % 3 > 0) ? '1px solid black' : '0px solid black',
            backgroundImage: `url(${displayUrl})`,
            backgroundSize: '80px 80px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }
    }

    render() {
        return (
            <div style={this.createStyle()} onClick={this.props.move.bind(this, this.props.id)} ></div>
        );
    }
}

export default Tile;
