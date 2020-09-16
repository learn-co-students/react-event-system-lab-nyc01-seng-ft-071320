// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{

    focusYandler = () => {
        console.log('Good!')
    }

    blurYandler = () => {
        console.log('Hey! Eyes on me!')
    }


    render() {
        return (<button onBlur={this.blurYandler} onFocus={this.focusYandler}></button>)
    }
}

export default EyesOnMe