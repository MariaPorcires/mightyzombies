import React from 'react'
import './about_page.css'
import Header from '../../components/header/Header'
import Footer from '../../components/Footer/Footer'

export default function About_page() {
  return (
    <section className='about'>
      <Header />
        <h1 className='about__title'>Vårt kaffe</h1>

          <p className='about__text__bold'>
            <b>Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</b></p>
          
          <p className='about__text'>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p>
          
          <p className='about__text'>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>

          <section className='about__eva'>
          <img className='about__img' src='\src\assets\assets\graphics\eva-cortado.jpg' />
          <h2 className='about__name'>Eva Cortado</h2>
          <p className='about__founder'>VD & Grundare</p>
      </section>

      <Footer />
    </section>
  )
}