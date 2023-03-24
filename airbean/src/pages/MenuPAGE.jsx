import React from 'react'
import { useState, useEffect } from 'react'

function MenuPAGE() {
    //HÄR FETCHAR VI!!!!! OCH DISPLAYAR SKITEN UR ALL KAFFE

    const [allCoffee, setAllCoffee] = useState([])

    useEffect(()=>{
        async function getProducts(){
            const response = await fetch('https://airbean.awesomo.dev/api/beans')
            const data = await response.json();
            console.log(data.menu)
            setAllCoffee(data.menu);
        }

        getProducts();
    }, []);

    const displayAllCoffee = allCoffee.map(OneCoffee=>{
        return(
            <section>
                <h1>{OneCoffee.title}</h1>
                <h5>{OneCoffee.desc}</h5>
            </section>
        )
    })


  return (
    <div>{displayAllCoffee}</div>
  )
}

export default MenuPAGE