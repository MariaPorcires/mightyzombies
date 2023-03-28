import React from 'react'
import './shoppingCart_page.css'

function ShoppingCart_page() {
  return (
    <div className='Cart'>
      <h2 className='cart__title'>Din beställning</h2>
      <p className='cart__order'>
        Bryggkaffe
      </p>
      <p className='cart__price'>49 kr</p>
      <p className='cart__total'>Total</p>

      <button className='cart__button'>Take my money!</button>

    </div>
  )
}

export default ShoppingCart_page