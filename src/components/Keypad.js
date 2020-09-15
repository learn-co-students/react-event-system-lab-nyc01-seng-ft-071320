// Code Keypad Component Here
import React from 'react'

class KeyPad extends React.Component {

    keyUpHandler = () => {
        console.log('Entering password...')
    }

    render() {
        return <input onKeyUp={this.keyUpHandler} type="password"></input>
    }

}

export default KeyPad