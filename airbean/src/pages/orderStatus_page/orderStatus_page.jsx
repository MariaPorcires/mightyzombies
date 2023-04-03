import React from 'react'
import { useLocation, Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import './orderStatus_page.css'

function OrderStatus_page() {

  const [status, setStatus] = useState({});

  const navigationState = useLocation();
  console.log(navigationState)
  let orderNr;
  {navigationState.state ? orderNr = navigationState.state.order.orderNr : orderNr = null}

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
        <article className='orderStatus__box'>
          <p className="orderStatus__text">Ordernummer: </p> {orderNr ? <h5 className="orderStatus__Nr">  {orderNr}</h5> : null}</article>
          <img className="order__img" src='\src\assets\assets\graphics\drone.svg' alt='drone' />
      {orderNr ? <h1 className='order__heading'>Din beställning är på väg!</h1> : <h1 className='order__heading'>{status.message}</h1>}
      {orderNr ? <h4 className="order__min">{status.eta} minuter</h4> : null}
      <Link to='/' className='order__button'>Ok, cool!</Link>
      </section>
    )
}
  


export default OrderStatus_page