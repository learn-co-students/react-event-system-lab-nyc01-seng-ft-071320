// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

    consoleMe=()=>console.log('Entering password...')
    
    render(){
        return(
            <div>
            <input 
              type="password"
              onKeyUp={this.consoleMe} 
            />
          </div>
        )
    }
}

export default Keypad