import React from 'react'

function ShoppingCart_page() {
  return (
    <div>ShoppingCart_page</div>
  )
  async function saveOrder(order) {
    const response = await fetch('https://airbean.awesomo.dev/api/beans/order', { method: 'POST', body: order} );
    const data = await response.json();
}
saveOrder();
}

export default ShoppingCart_page