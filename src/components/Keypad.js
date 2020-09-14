import React from 'react';

class Keypad extends React.Component{
    
    printConsole = () => {
        console.log("Entering password...")
    }

    render(){
        return(
            <div>
                <input type="password" onKeyUp={this.printConsole}/>
            </div>
        )
    }
}

export default Keypad