// import { renderIntoDocument } from 'react-addons-test-utils'
import React from 'react'

class EyesOnMe extends React.Component {

    focus = () => {
        console.log('Good!')
    }

    blur = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (<button onFocus={this.focus} onBlur={this.blur}>BUTTON</button>)
    }
}

export default EyesOnMe