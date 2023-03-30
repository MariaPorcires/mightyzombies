import React from 'react'
import { useState } from 'react';
import './MenuITEM.css'
import { useDispatch } from 'react-redux';
import { addObject } from '../../actions/addObject';

function MenuITEM(props) {
    const {title, desc, price} = props.coffee;
    const dispatch = useDispatch();

    const order = [{
        name: title,
        price: price
    }]

    function addItemTest(order){
        dispatch(addObject(order))
    }

    function handleClick(){
        addItemTest(order)
    }

    return (
        <article className='menuitem' onClick={handleClick}>
            <img className='menuitem__img' 
            src="./src/assets/assets/graphics/add.svg" alt="" />
            <section>
                <h2 className='menuitem__title'>{title}</h2>
                <h3 className='menuitem__desc'>{desc}</h3>
            </section>
            <h2 className='menuitem__title menuitem__price'>{price} kr</h2>
        </article>
    )
}

export default MenuITEM