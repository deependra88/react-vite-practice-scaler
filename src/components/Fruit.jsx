import React from "react";

function Fruit({name, price}){
    return(
        <>
       {/* <li>price of {name} is {price}</li> */}
       <li>{price >100 ? <h2>price of {name} is {price}</h2> : " "}</li>
        </>
    )
}
export default Fruit;
