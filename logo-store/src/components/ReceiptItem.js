import React from 'react';

class ReceiptItem extends React.Component {
    render() {
        let { name, price, description } = this.props.info;
        return (
            <div className="receipt-item">
                <div>{name}</div>
                <div>{description}</div>
                <div>{`$${(price/100).toFixed(2)}`}</div>
            </div>
        )
    }
}

export default ReceiptItem;
