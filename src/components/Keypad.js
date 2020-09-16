// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{

    eventHandeler = (e) => {
      console.log('Entering password...')
    }


    render() {
        return (<input onKeyUp={this.eventHandeler} type="password" />)
    }
}

export default Keypad