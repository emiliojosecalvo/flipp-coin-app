import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers'

class FlippCoin extends Component {
    static defaultProps = {
        face: [
            { side: 'heads', imgSrc: 'headsIMG' },
            { side: 'tails', imgSrc: 'tailsIMG' }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            face: null,
            countHeads: 0,
            countTails: 0,
            countFlips: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }


    flipTheCoin() {
        const newCoin = choice(this.props.face);
        this.setState(st => {
            return {
                face: newCoin,
                countFlips: st.countFlips + 1,
                countHeads: st.countHeads + (newCoin.side === 'heads' ? 1 : 0),
                countTails: st.countTails + (newCoin.side === 'tails' ? 1 : 0)
            }
        })
    }
    //Function to handle the click and execute flipTheCoin function 
    handleClick(e) {
        this.flipTheCoin();
    }
    render() {
        return (
            <div>
                <h1>Lets Flip a Coin</h1>
                {this.state.face && <Coin res={this.state.face} />}
                <button onClick={this.handleClick}>Flip Coin</button>
                <p>Out of {this.state.countFlips} flips, there haven been {this.state.countHeads} heads and {this.state.countTails} tails</p>
            </div>
        )
    }
}

export default FlippCoin;