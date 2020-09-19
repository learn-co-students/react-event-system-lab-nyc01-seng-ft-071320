import React from 'react';

class Keypad extends React.Component {

    keyHandler = () => {
        console.log("Entering password...")
    }

    render() {
        return(
            <input type="password" onKeyUp={this.keyHandler}/>
        )
    }
}

export default Keypad;