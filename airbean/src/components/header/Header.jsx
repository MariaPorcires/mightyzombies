import React from "react";
import './Header.css'
import { Link } from 'react-router-dom'




function Header() {
    return(
        <section className="header">
            
            <article className="header__Nav"><Link to="/nav"><img className="navIcon" src="./src/assets/assets/graphics/navicon.svg" alt="" /></Link></article>
            <article className="header__Cart"><Link to="/shoppingCart"><img className="cartIcon" src="./src/assets/assets/graphics/bag.svg" alt="" /></Link></article>
            
        </section>

    )
}

export default Header