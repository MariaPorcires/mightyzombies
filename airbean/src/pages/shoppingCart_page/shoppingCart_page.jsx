import React, { useEffect, useState } from 'react'
import './shoppingCart_page.css'
//import { userChoiceARRAY } from '../../reducers/addObjectReducer';
import UserchoiceITEM from '../../components/UserchoiceITEM/UserchoiceITEM';
import { useSelector } from 'react-redux';

function ShoppingCart_page() {

  const [orderNumber, setOrder] = useState();

    
    console.log(orderNumber)

  const order = useSelector(state => state.order)
  console.log(order)

  const displayOrder = order.map(function (item){
    console.log(item)
    return (<UserchoiceITEM order={item}/>)
  }) //MAP-function som loopar igenom ordern från userChoiceITEM*/

  //funktion som plussar ihop alla priser med allt i arrayen och returnerar priset
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
  
  return (
    <div className='Cart'>
      <h2 className='cart__title'>Din beställning</h2>
        {displayOrder}
      <p className='cart__price'></p>
      <p className='cart__total'>Total</p>

      <button className='cart__button'>Take my money!</button>

    </div>
  )
}

export default ShoppingCart_page