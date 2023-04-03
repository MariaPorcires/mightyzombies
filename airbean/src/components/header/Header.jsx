import React from "react";
import './Header.css'
import { Link } from 'react-router-dom'
import Nav_page from "../../pages/nav_page/nav_page";
import { useState } from "react";
import ShoppingCart_page from "../../pages/shoppingCart_page/shoppingCart_page";




const Header = () => {

    const [isNavOpen, setNavOpen] = useState(false);
    const [nav, setNav] = useState("./src/assets/assets/graphics/navicon.svg")
    const [isCartOpen, setIsCartOpen] = useState(false)

 function openNav () {
    setNavOpen(!isNavOpen);
   
 }

 function openCart() {
    setIsCartOpen(!isCartOpen)
 }
 
    return(
        <section className="header">

            <div onClick={ openNav } className="header__Nav"><img className="navIcon" src={nav}/></div>
            <div onClick={ openCart } className="header__Cart"><img className="cartIcon" src="./src/assets/assets/graphics/bag.svg" /></div>
            
           {isNavOpen ? <Nav_page /> : null }
           {isCartOpen ? <ShoppingCart_page /> : null}
        
        </section>

    )
}

export default Header


 
//<article className="header__Nav"><Link to="/nav"><img className="navIcon" src="./src/assets/assets/graphics/navicon.svg" alt="" /></Link></article>
//<article className="header__Cart"><Link to="/shoppingCart"><img className="cartIcon" src="./src/assets/assets/graphics/bag.svg" alt="" /></Link></article>
/*margin: 1rem;
background-color: white;
width: 50px;
height:50px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: relative;*/