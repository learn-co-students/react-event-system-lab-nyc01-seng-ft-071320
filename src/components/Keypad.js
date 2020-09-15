import React from 'react'

class Keypad extends React.Component {


    eventHandler = () =>{
        console.log("Entering password...")

    }

    render(){
        return(
        <div>
            <input type="password" onKeyUp={this.eventHandler}/>
        </div>
        )
    }


}

export default Keypad