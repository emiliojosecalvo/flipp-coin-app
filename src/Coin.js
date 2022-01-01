import React, { Component } from 'react';
import "./Coin.css"
import head from "./head.jpg"
import tails from "./tails.jpg"

class Coin extends Component {
    static defaultProps = {
        face: 'head'
    }
    render() {
        return (
            <div>
                <img className='Coin-img' src={this.props.face === 'head' ? head : tails} />
            </div>
        )
    }
}

export default Coin;