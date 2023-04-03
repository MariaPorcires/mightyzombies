import React, { useEffect, useState } from 'react'
import './shoppingCart_page.css'
//import { userChoiceARRAY } from '../../reducers/addObjectReducer';
//import UserchoiceITEM from '../../components/UserchoiceITEM/UserchoiceITEM';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ShoppingCart_page() {

  const navigate = useNavigate();

  const [orderNumber, setOrder] = useState();

    
    console.log(orderNumber)

  const order = useSelector(state => state.order)

  const displayOrder = order.map(function (item){
    console.log(item)
    return (
      <section className='cart__products'>
        <h1 className='cart__text'>{item.name}</h1>
        <p className='cart__price'>{item.price}</p>
      </section>
    )
    
    //(<UserchoiceITEM order={item}/>)
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
  //saveOrder();

  return (
    <div className='Cart'>
      <h2 className='cart__title'>Din beställning</h2>
        <ul className='cart__text'>{displayOrder}</ul>
      
      <p className='cart__total'>Totalt:<p className="cart__dots"> </p>{totalPrice} kr</p>
      <p className='cart__moms'>inkl. moms + drönarleverans</p>
      <button className='cart__button' onClick={handleClick}>Take my money!</button>
    </div>
  )
  //async function saveOrder(order) {
    //const response = await fetch('https://airbean.awesomo.dev/api/beans/order', { method: 'POST', body: order} );
    //const data = await response.json();
}



export default ShoppingCart_page