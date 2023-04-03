import React from 'react'
import './landing_page.css'
import { useNavigate } from 'react-router';

function Landing_page() {
  const navigate = useNavigate();

    function navMenu() {
      navigate('/')
    }

  return (
    <section className="landing_page" onClick={ navMenu }>
    <img className='landing__left' src="../src/assets/assets/graphics/intro-graphic-left.svg" /> 
    <img className='landing-__logo' src="../src/assets/assets/graphics/airbean-landing.svg" />
    <img className='landing__right' src="src/assets/assets/graphics/intro-graphic-right.svg" />
    
    </section>

  )
}


export default Landing_page;