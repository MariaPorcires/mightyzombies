import React from "react";
import './Header.css'
import { Link } from 'react-router-dom'


function Header() {
    return(
        <section className="header">
            
        <Link to="/nav"><img className="navIcon" src="./src/assets/assets/graphics/navicon.svg" alt="" /></Link>
        <Link to="/shoppingCart"><img className="Img" src="./src/assets/assets/graphics/bag.svg" alt="" /></Link>
        
        </section>

    )
}

export default Header