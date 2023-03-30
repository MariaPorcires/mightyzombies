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
    <div>
      <h4>{status.eta}</h4>
      <h4>{orderNr}</h4>
    </div>
  )
}

export default OrderStatus_page