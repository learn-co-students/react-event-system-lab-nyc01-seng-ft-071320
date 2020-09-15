import React from 'react';

class Keypad extends React.Component {

  inputHandler = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input onKeyUp={this.inputHandler} type="password" />
    )
  }
}

export default Keypad;