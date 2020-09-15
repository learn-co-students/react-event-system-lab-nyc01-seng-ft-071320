import React from 'react'

class EyesOnMe extends React.Component {

    eventHandler= () =>{
        console.log("Good!")
    }

    eventHandler2 = () =>{
        console.log("Hey! Eyes on me!")
    }


    render(){
        return(
            <button onFocus={this.eventHandler} onBlur={this.eventHandler2}>Eyes on me, please!</button>
        )
    }



}

export default EyesOnMe
