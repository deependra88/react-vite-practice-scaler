import React from 'react';

function Message(){

    function sayHello(){
        console.log("hello my name is React");
    }
    return(
        <>
        <button onClick={sayHello}>click me</button>
        </>
    )
}

export default Message;