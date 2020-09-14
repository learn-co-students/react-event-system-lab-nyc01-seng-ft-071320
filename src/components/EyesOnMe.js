import React from 'react'

function EyesOnMe(){
    return(<button onFocus={good} onBlur={look}></button>) 
}

const good = () => {
    console.log("Good!")
}

const look = () => {
    console.log("Hey! Eyes on me!")
}

export default EyesOnMe