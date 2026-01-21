import React,{useState} from "react";

function Counter(){

const [count,setCount] = useState(0);
const [factor,setFactor] = useState(1);

function IncCount(){
    setCount(count+factor);
}

function DecCount(){
    setCount(count-factor);
}

function IncFactor(){
    setFactor(factor+1);
}

function DecFactor(){
    setFactor(factor-1);
}
    return(
        <>
        <h1>The value of the counter: {count}</h1>

        <button onClick={IncCount}>Increment</button>
        <button onClick={DecCount}>Decrement</button>

        <h1>The value of the factor: {factor}</h1>

        <button onClick={IncFactor}>Increment</button>
        <button onClick={DecFactor}>Decrement</button>
        </>
    )
}

export default Counter;