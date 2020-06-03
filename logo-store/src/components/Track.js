import React from 'react';

import LineItem from './LineItem';

import data from '../data/inventory.json'

class Track extends React.Component {
    render() {
        return (
            <div className="track">
                {data.map((item, i) => {
                    return <LineItem key={i} info={item} imgSeed={i} addLineItem={this.props.addLineItem} />
                })}
            </div>
        )
    }
}

export default Track;
