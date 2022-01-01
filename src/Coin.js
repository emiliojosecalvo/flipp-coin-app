import React, { Component } from 'react';
import "./Coin.css"
import headsIMG from "./head.jpg"
import tailsIMG from "./tails.jpg"

class Coin extends Component {
    render() {
        return (
            <div>
                <img className='Coin-img' src={this.props.res.side === 'heads' ? headsIMG : tailsIMG} alt={this.props.res.side} />
            </div>
        )
    }
}

export default Coin;