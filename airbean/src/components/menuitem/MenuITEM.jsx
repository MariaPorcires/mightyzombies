import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './MenuITEM.css'
import { addObject } from '../../actions/addObject';

function MenuITEM(props) {
    const {title, desc, price} = props.coffee;

    const dispatch = useDispatch();

    const order = [{
        title: title,
        price: price
    }]

    function addItemTest(order){
        console.log(order);
        dispatch(addObject(order))
    }

    function handleClick(){
        console.log(order);
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