import React from 'react';
import './buttonB.css';

class ButtonB extends React.Component {
    render() {
        return(
            <div className='buttonB'>
                <div className="squareB"></div>
                <div className="squareB"></div>
                <div className="squareB"></div>
                <div className="buttonB-text">BUTTON B</div>
            </div>
        )
    }
}

export default ButtonB;