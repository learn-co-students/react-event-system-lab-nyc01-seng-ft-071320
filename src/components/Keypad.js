import React, { Component } from 'react'

class Keypad extends Component {

    constructor() {
        super()
    }

    handleKey = (event) => {
        console.log("Entering password...")
    }

    render() {
        return (
            <input 
                type="password"
                onKeyUp = {this.handleKey} >
            </input>
        )
    }
}

export default Keypad