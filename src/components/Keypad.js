// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {
    keyUpListener = () => {
        console.log('Entering password...')
    }

    render() {
        return <input onKeyUp={this.keyUpListener} type="password" />
    }
}

export default Keypad