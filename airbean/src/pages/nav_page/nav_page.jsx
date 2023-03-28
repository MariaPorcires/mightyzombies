import React from 'react'
import './nav_page.css'

import { Link } from 'react-router-dom'


function Nav_page() {
  return (
    <section className='navigation'>
      <Link to={"/"}>Meny</Link>
      <Link to={ "/about"}>Vårt kaffe</Link>
      <Link to={"/:orderID"}>Orderstatus</Link>
    </section>

  )
}

export default Nav_page