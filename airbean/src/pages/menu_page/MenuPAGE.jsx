import React from 'react'
import { useState, useEffect } from 'react'
import MenuITEM from '../../components/menuitem/MenuITEM'
import './MenuPAGE.css'

function MenuPAGE() {

    const [allCoffee, setAllCoffee] = useState([])

    useEffect(()=>{
        async function getProducts(){
            const response = await fetch('https://airbean.awesomo.dev/api/beans')
            const data = await response.json();
            console.log(data.menu)
            setAllCoffee(data.menu);
        };

        getProducts();
    }, []);

    const displayAllCoffee = allCoffee.map(OneCoffee => {
        return(
            <MenuITEM coffee={OneCoffee}/>
        )
    })

   

  return (
    <div className='menuPage'>{displayAllCoffee}</div>
  )
}
export default MenuPAGE
