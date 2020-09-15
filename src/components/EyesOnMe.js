// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

    focusListener = () => {
        console.log("Good!")
    }

    blurListener = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <button onFocus={this.focusListener} onBlur={this.blurListener}></button>
        )
    }
}

export default EyesOnMe;