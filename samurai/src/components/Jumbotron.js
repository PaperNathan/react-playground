import React from 'react';

class Jumbotron extends React.Component {    
    render() {
        return (
            <div>
                <div className="jumbotron">{this.props.status}</div>
            </div>
        )
    }
}

export default Jumbotron;