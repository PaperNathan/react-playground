import React from 'react';

import Jumbotron from './Jumbotron';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';

class Stage extends React.Component {
    constructor(props) {
        super(props);

        this.jumbotronStatus = this.jumbotronStatus.bind(this);
        this.keyboardInput = this.keyboardInput.bind(this);

        this.state={
            status: "Ready",
            ready: true,
            timerOffset: Math.floor((3+(Math.random()*4))*1000),
            startTimer: Date.now(),
            image: 'rOne',
            playerReaction: 0,
            enemyReaction: 400
        }
    }

    // Event Listeners and Jumbrotron Call
    componentDidMount() {
        window.addEventListener('keydown', this.keyboardInput);
        setTimeout(() => {
          this.jumbotronStatus('Go');
        }, this.state.timerOffset);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyboardInput);
    }

    // Jumbotron Status
    jumbotronStatus(status) {
        this.setState((state) => ({status: `${status}`}));
    }

    // Starts Animation for Player
    keyboardInput = (e) => {
        if (e.keyCode === 32) {
            let reactionTime = Date.now();

            this.setState((state) => {
                return state = {
                    playerReaction: reactionTime - this.state.startTimer - this.state.timerOffset,
                }
            });
        }
    }

    evaluateWinner = () => {
      console.log(this.state.playerReaction);
      if (this.state.playerReaction < this.state.enemyReaction) {
        this.jumbotronStatus('You Win');
      } else {
        this.jumbotronStatus('You Lose');
      }
    }

    render() {
        return(
            <div className='background'>
                <Jumbotron status={this.state.status} />
                <PlayerOne ready={this.state.ready} timer={this.state.startTimer} timerOffset={this.state.timerOffset} imageClass={this.state.image} />
                <PlayerTwo ready={this.state.ready} timer={this.state.startTimer} timerOffset={this.state.timerOffset} reaction={this.state.enemyReaction}/>
            </div>
        )
    }
}

export default Stage;
