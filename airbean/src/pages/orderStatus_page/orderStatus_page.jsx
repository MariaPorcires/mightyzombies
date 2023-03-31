import React from 'react'
import { useLocation, Link } from "react-router-dom"
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
      <section className= 'orderStatus' >
      Ordernummer: {orderNr ? <h5>{orderNr}</h5> : null}
      <img src='\src\assets\assets\graphics\drone.svg' alt='drone' />
      {orderNr ? <h1 className='order__heading'>Din beställning är på väg!</h1> : <h1>{status.message}</h1>}
      {orderNr ? <h4>{status.eta} min</h4> : null}
      <Link to='"/"' className='order__button'>Ok, cool!</Link>
      </section>
    )

}

  


export default OrderStatus_page