import React, { Component } from 'react'

class EyesOnMe extends Component {

    constructor() {
        super()
    }

    noFocus = (event) => {
        console.log('Hey! Eyes on me!')
    }

    focus = (event) => {
        console.log('Good!')
    }

    render() {
        return (
            <button 
                onBlur = {this.noFocus}
                onFocus= {this.focus} >
            </button>
        )
    }
}

export default EyesOnMe