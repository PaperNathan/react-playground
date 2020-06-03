import React from 'react';

class PlayerTwo extends React.Component {
    constructor(props) {
        super(props);

        this.draw = this.draw.bind(this);

        this.state = {
            image: 'bOne',
            reaction: this.props.reaction
        }
    }

    componentDidMount() {
        let reaction = (this.props.timerOffset + this.state.reaction);
        setTimeout(this.draw, reaction);
    }

    componentWillUnmount() {
        // clearTimeout(timer);
    }

    draw() {
        this.setState((state) => {
            return state.image = "bSlash";
        });
    }

    render() {
        return(
            <div id="blue" className={this.state.image}>
                <div className="reaction-time">{this.state.reaction}ms</div>
            </div>
        )
    }
}

export default PlayerTwo;
