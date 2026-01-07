import React from 'react'
import Fruit from './Fruit';

function Fruits(){
    let fruits = [
        {name: "apple", price: 100},
        {name: "banana", price: 40},
        {name:"orange",price:120},
        {name:"mango", price: 150},
    ]
    return(
        <>{fruits.map((fruit) =>(
           <Fruit name={fruit.name} price={fruit.price} />
        ))}</>
    )
}
export default Fruits;
