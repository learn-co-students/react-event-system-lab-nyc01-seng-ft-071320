import React from 'react';

class EyesOnMe extends React.Component {

    focusing = () => {
        console.log("Good!")
    }
    notFocusing = () => {
        console.log("Hey! Eyes on me!")
    }

    render(){
        return (
            <div>
                <button
                    onFocus={this.focusing}
                    onBlur={this.notFocusing}
                >Hello</button>
            </div>
        )
    }


}
export default EyesOnMe