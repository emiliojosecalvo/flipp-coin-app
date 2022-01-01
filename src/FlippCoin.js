import React, { Component } from 'react';
import Coin from './Coin';

class FlippCoin extends Component {
    static defaultProps = {
        face: ['head', 'tails']
    }
    constructor(props) {
        super(props);
        this.state = { face: '', countHead: 0, countTails: 0, countFlips: 0 }
        this.flipTheCoin = this.flipTheCoin.bind(this);
    }
    flipTheCoin() {
        let res = Math.floor(Math.random() * this.props.face.length);
        this.setState({ countFlips: this.state.countFlips + 1 })
        if (res === 0) {
            this.setState({ face: 'head', countHead: this.state.countHead + 1 })
        } else {
            this.setState({ face: 'tails', countTails: this.state.countTails + 1 })
        }

    }
    render() {
        return (
            <div>
                <h1>Lets Flip a Coin</h1>
                <Coin face={this.state.face} />
                <button onClick={this.flipTheCoin}>Flip Coin</button>
                <p>Out of {this.state.countFlips} flips, there haven been {this.state.countHead} heads and {this.state.countTails} tails</p>
            </div>
        )
    }
}

export default FlippCoin;