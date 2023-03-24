import React from 'react'
import { useState } from 'react';


function MenuITEM(props) {
    const {title} = props.coffee;

    function handleClick(){
        console.log(title)
    }

    return (
        <div onClick={handleClick}>{title}</div>
    )
}

export default MenuITEM