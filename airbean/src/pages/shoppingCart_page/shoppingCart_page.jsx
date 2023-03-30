import React from 'react'
import './shoppingCart_page.css'
//import { userChoiceARRAY } from '../../reducers/addObjectReducer';
import UserchoiceITEM from '../../components/UserchoiceITEM/UserchoiceITEM';
import { useSelector } from 'react-redux';

function ShoppingCart_page() {

  function handleClick(){
    //lägg in i APIt här!!
    /*async function saveOrder(order) {
      const response = await fetch('https://airbean.awesomo.dev/api/beans/order', { method: 'POST', data: order} );
      const data = await response.json();
  }*/
  }

  const order = useSelector(state => state.order)
  console.log(order)

  const displayOrder = order.map(function (item){
    console.log(item)
    return (<UserchoiceITEM order={item}/>)
  }) //MAP-function som loopar igenom ordern från userChoiceITEM*/

  //funktion som plussar ihop alla priser med allt i arrayen och returnerar priset

  return (
    <div className='Cart'>
      <h2 className='cart__title'>Din beställning</h2>
        {displayOrder}
      <p className='cart__price'></p>
      <p className='cart__total'>Total</p>

      <button onClick={handleClick} className='cart__button'>Take my money!</button>

    </div>
  )
}

export default ShoppingCart_page