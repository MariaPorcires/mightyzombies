import React from 'react'
import './nav_page.css'

import { Link } from 'react-router-dom'


function Nav_page() {
  return (
    <section className='navigation'>
      <article className='nav__links'>
      <Link to={"/"}>Meny</Link>
      <Link to={ "/about"}>Vårt kaffe</Link>
      <Link to={"/:orderID"}>Orderstatus</Link>
      </article>
    </section>

  )
}

export default Nav_page