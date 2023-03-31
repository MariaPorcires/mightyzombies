import React from 'react'
import { useLocation } from "react-router-dom"
import { useEffect, useState } from 'react';

function OrderStatus_page() {

  const [status, setStatus] = useState({});

  const navigationState = useLocation();
  console.log(navigationState)
  const {orderNr} = navigationState.state.order;

  useEffect(()=>{
    async function getStatus(){
      const response = await fetch(`https://airbean.awesomo.dev/api/beans/order/status/${orderNr}`)
      const data = await response.json();
      setStatus(data);
  }
  console.log("useEffect!")
  getStatus();
  }, [])
  
  return (

    <div>OrderStatus_page !! shit asså</div>
    
   
  ) 

  function foto() {
    document.getElementById();
  

    return (
      <section className= 'orderStatus' >
      <p className='order__nr'>ordernumber</p>
      <img src='\src\assets\assets\graphics\drone.svg' alt='drone' />
      <h1 className='order__heading'>Your order is on its way!</h1>
      <Link to='"/"' className='order__button'>Ok, cool!</Link>
      </section>
    )
  }

}

  


export default OrderStatus_page