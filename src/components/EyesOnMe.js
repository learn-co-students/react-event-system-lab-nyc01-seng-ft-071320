// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{

    onFocusHandler = () => {
        console.log('Good!')
    }
    blurHandler = () => {
        console.log('Hey! Eyes on me!')
    }

    render(){
        return <button onFocus={this.onFocusHandler} onBlur={this.blurHandler} ></button>
    }


}

export default EyesOnMe