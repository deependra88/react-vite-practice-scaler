import React,{useState} from "react";

function Counter(){

const [count,setCount] = useState(0);

function IncCount(){
    setCount(count+1);
}

function DecCount(){
    setCount(count-1);
}
    return(
        <>
        <h1>The value of the counter: {count}</h1>

        <button onClick={IncCount}>Increment</button>
        <button onClick={DecCount}>Decrement</button>
        </>
    )
}

export default Counter;