import React from 'react';

import ReceiptItem from './ReceiptItem';

class Receipt extends React.Component {
    render() {
        return (
            <div className="receipt">
                {this.props.items.map((item, i) => {
                    return <ReceiptItem key={i} info={item} />
                })}
                <ReceiptItem key='10000' info={{
                    "name": 'Total',
                    "description": "",
                    "price": this.props.total
                }} />
            </div>
        )
    }
}

export default Receipt;
