import { VirtualConsole } from 'jsdom'
import React from 'react'

class Keypad extends React.Component {

    typing = () => {
        console.log("Entering password...")
    }

    render() {
        return <input onKeyUp={this.typing} type="password" />
    }
}

export default Keypad