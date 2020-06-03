import React from 'react';

class LineItem extends React.Component {
    state = {
        orderedAmount: 0
    }

    getPicture = () => {
        let pic = `https://picsum.photos/200/100?random=${this.props.imgSeed}`;
        return pic;
    }

    render() {
        let { name, price, description, uuid } = this.props.info;

        return (
            <div className="line-item" onClick={this.props.addLineItem.bind(this, this.props.imgSeed)}>
                <div className="item-count" style={{'opacity': this.state.orderedAmount}}>{this.state.orderedAmount}</div>
                <img src={this.getPicture()} alt="generated" />
                {name} <br />
                {description} <br />
                {price} <br />
            </div>
        )
    }
}

export default LineItem;