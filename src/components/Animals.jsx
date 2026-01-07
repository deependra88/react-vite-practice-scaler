import React from "react";

function Animals(){
    let animals = ["cow","horse","dog"];
    return(
    <>
    <ul>
    {animals.map((animal) =>(
        <li>{animal}</li>
    ))}
    </ul>
    </>
    )
}

export default Animals;