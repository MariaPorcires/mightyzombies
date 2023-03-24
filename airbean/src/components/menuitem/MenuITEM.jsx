import React from 'react'
import { useState } from 'react';
import './MenuITEM.css'


function MenuITEM(props) {
    const {title, desc, price} = props.coffee;

    function handleClick(){
        console.log(title)
    }

    return (
        <article className='menuitem' onClick={handleClick}>
            <h2 className='menuitem__title'>{title}</h2>
            <h3 className='menuitem__desc'>{desc}</h3>
            <h2 className='menuitem__title menuitem__price'>{price} kr</h2>
        </article>
    )
}

export default MenuITEM