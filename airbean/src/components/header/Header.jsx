import React from "react";
import CartItem from "../CartItem/CartITEM";
import './Header.css'


function Header() {
    return(
        <section>

        <img className="navIcon" src="./src/assets/assets/graphics/navicon.svg" alt="" />
        
        <CartItem />
        </section>

    )
}

export default Header