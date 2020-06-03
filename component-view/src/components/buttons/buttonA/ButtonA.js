import React from 'react';
import './buttonA.css';

class ButtonA extends React.Component {
    render() {
        return(
            <div className='buttonA'>
                <div className="squareA"></div>
                <div className="squareA"></div>
                <div className="squareA"></div>
                <div className="buttonA-text">BUTTON A</div>
            </div>
        )
    }
}

export default ButtonA;