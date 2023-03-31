import React from 'react'
import { useState, useEffect } from 'react'
import MenuITEM from '../../components/menuitem/MenuITEM'
import './MenuPAGE.css'
import {Link} from 'react-router-dom'
import Header from '../../components/header/Header'

function MenuPAGE() {

    const [allCoffee, setAllCoffee] = useState([])
    //const [addItemTest] = props;

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
            <MenuITEM key={OneCoffee.id} coffee={OneCoffee}/>
        )
    })




  return (
    <main className='menuPage'>
        <Header />
        
        <h1 className='menuPage__title'>Menu</h1>
        <div>{displayAllCoffee}</div>
    </main>
  )
}
export default MenuPAGE