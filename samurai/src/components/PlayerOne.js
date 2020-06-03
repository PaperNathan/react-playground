import React from 'react';

class PlayerOne extends React.Component {
    constructor(props) {
        super(props);

        this.keyboardInput = this.keyboardInput.bind(this);

        this.state = {
            image: this.props.imageClass,
            reaction: 0
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.keyboardInput);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyboardInput);
    }

    // Display Reaction Time
    keyboardInput = (e) => {
        if (e.keyCode === 32) {
            let reactionTime = Date.now();

            this.setState((state) => {
                return state = {
                    image: "rSlash",
                    reaction: (reactionTime - this.props.timer - this.props.timerOffset)
                }
            });
        }
    }

    render() {
        return(
            <div id="red" className={this.state.image}>
                <div className="reaction-time">{this.state.reaction}ms</div>
            </div>
        )
    }
}

export default PlayerOne;
