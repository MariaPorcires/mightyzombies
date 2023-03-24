import React from 'react'
import { useState, useEffect } from 'react'

function MenuPAGE() {
    //HÄR FETCHAR VI!!!!! OCH DISPLAYAR SKITEN UR ALL KAFFE

    const [allCoffee, setAllCoffee] = useState([])

    useEffect(()=>{
        async function getProducts(){
            const response = await fetch('www.hkadlkdsfjk.se')
            const data = await response.json();

            setAllCoffee(data.allCoffee);
        }

        getProducts();
    }, []);

    const displayAllCoffee = allCoffee.map(oneCoffee =>{
        <h1>oneCoffee.name</h1> //obs preliminär parameter
    })


  return (
    <div>{displayAllCoffee}</div>
  )
}

export default MenuPAGE