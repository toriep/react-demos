import React from 'react';

function Greeting(props){
    console.log('Props:',props);

    const style = {
        color: props.favColor
    }

    return <h1 style={style}>Hello, {props.name}!</h1>
}

export default Greeting;