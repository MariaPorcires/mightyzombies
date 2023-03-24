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

    function handleClick() {
        console.log(target.value);
        //const userCoffee = event.target.value;
        //userCoffee ? console.log(userCoffee) : console.log('den e tom');
    }

    const displayAllCoffee = allCoffee.map(OneCoffee => {
        return(
            <section onClick= { handleClick } value={OneCoffee.title} >
                <h1 value="KAFFEEEEEEEEE">{OneCoffee.title}</h1>
                <h5 value="KAFFEEEEEEEEE">{OneCoffee.desc}</h5>
            </section>
        )
    })


  return (
    <div>{displayAllCoffee}</div>
  )
}

export default MenuPAGE