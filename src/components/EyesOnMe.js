import { render } from 'enzyme'
// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

  focusHandler = () => {
    return console.log('Good!')
  }

  blurHandler = () => {
    return console.log('Hey! Eyes on me!')
  }

  render() {
    return <button onFocus={this.focusHandler} onBlur={this.blurHandler}>Button</button>
  }
  
}


export default EyesOnMe