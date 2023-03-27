import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import MenuPAGE from './pages/menu_page/MenuPAGE.jsx'
import About_page from './pages/about_page/about_page'
import Landing_page from './pages/landing page/landing_page'
import Nav_page from './pages/nav_page/nav_page'
import OrderStatus_page from './pages/orderStatus_page/orderStatus_page'
import ShoppingCart_page from './pages/shoppingCart_page/shoppingCart_page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuPAGE/>
  },
  {
    path: "/about",
    element: <About_page/>
  },
  {
    path: "/landing",
    element: <Landing_page/>
  },
  {
    path: "/nav",
    element: <Nav_page />
  },
  {
    path: "/:orderID",
    element: <OrderStatus_page/>
  },
  {
    path: "/shoppingCart", //kanske också behöver en :ID ? för användarens personliga lista
    element: <ShoppingCart_page/>
  }
])


function App() {
  
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
