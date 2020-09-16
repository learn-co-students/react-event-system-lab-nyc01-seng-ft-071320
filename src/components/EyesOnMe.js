import React from 'react';

class EyesOnMe extends React.Component {

    focusHandler = (e) => {
        console.log('Good!')
    }

    blurHandler = (e) => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <button onFocus={this.focusHandler} onBlur={this.blurHandler}>Button</button>
        )
    }
}

export default EyesOnMe;