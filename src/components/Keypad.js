// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component{

    keyUpClicked = () => {
        console.log("Entering password...")
    }

    render(){

        return(
            <input type='password' onKeyUp={this.keyUpClicked}/>
        )
    }
}

export default Keypad