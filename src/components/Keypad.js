import React from 'react'

class Keypad extends React.Component {

    keypadChange = (e) => {
        console.log('Entering password...')
    }

    render() {
        return (
            <input onKeyUp={this.keypadChange} type="password" placeholder="Password..." name="input" />
        )
    }

}

export default Keypad;