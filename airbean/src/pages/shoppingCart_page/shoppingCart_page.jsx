import React, { useEffect, useState } from 'react'
import './shoppingCart_page.css'
//import { userChoiceARRAY } from '../../reducers/addObjectReducer';
import UserchoiceITEM from '../../components/UserchoiceITEM/UserchoiceITEM';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ShoppingCart_page() {

  const navigate = useNavigate();

  const [orderNumber, setOrder] = useState();

    
    console.log(orderNumber)

  const order = useSelector(state => state.order)

  const displayOrder = order.map(function (item){
    console.log(item)
    return (<UserchoiceITEM order={item}/>)
  })

  useEffect(()=>{
    async function getOrder(){
      const body = {
        details: {
          order: order
        }
      }
      const response = await fetch('https://airbean.awesomo.dev/api/beans/order', {
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json();
      setOrder(data)
    }
    getOrder();
  }, []);

  let totalPrice = 0;

  function price() {
    order.forEach(order => {
      totalPrice = totalPrice + order.price
    })
    return (totalPrice)
  }
    totalPrice = price()
    console.log(totalPrice);

  function handleClick(){
    console.log(orderNumber.eta)
    console.log(orderNumber.orderNr);
    navigate('/orderstatus', { state: { order: orderNumber } }); 
  }

  return (
    <div className='Cart'>
      <h2 className='cart__title'>Din beställning</h2>
        {displayOrder}
      
      <p className='cart__total'>Totalt: {totalPrice}</p>
      <button className='cart__button' onClick={handleClick}>Take my money!</button>
    </div>
  )
}

export default ShoppingCart_page