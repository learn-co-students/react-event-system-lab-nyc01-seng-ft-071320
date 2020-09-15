// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends React.Component {

    onKeyUp = () => {
        console.log('Entering password...')
    }

    render(){
        return(
            <div>
            <input onKeyUp={this.onKeyUp} type="password" /> 
            </div>
        )}
}

export default Keypad;