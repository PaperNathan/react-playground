import React from 'react';

import './compStyle.css';

import Drink from './Drink';

class Glass extends React.Component {
    render() {
        return (
            <div>
                <div className="cup-mask">
                    <Drink drink={this.props.drink} />
                </div>
            </div>
        )
    }
}

export default Glass;
