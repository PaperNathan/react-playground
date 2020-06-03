import React from 'react';
import './buttonA.css';

class ButtonA extends React.Component {
    render() {
        return(
            <div className='buttonA' onClick={this.props.onClick}>
                <div className="squareA"></div>
                <div className="squareA"></div>
                <div className="squareA"></div>
                <div className="buttonA-text">{this.props.text.toUpperCase()}</div>
            </div>
        )
    }
}

export default ButtonA;