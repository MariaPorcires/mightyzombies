import React from 'react'
import './nav_page.css'

import { Link } from 'react-router-dom'


function Nav_page() {
  return (

    <section className='navigation'>
      
      <Link className="nav__links" to={"/"}>Meny</Link>
      <Link className="nav__links" to={"/about"}>Vårt kaffe</Link>
      <Link className="nav__links" to={"/orderstatus"}>Orderstatus</Link>
      
    </section>
    

  )
}

export default Nav_page