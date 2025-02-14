import React from 'react'
import SearchBar from '../../molecules/search/SearchBar'
import './hero.sass'

function Hero() {
  return (
    <section className='hero-section'>
        <div className="hero-section__container">
            <h1 className='hero-section__title'>Nuestra Galería Casual</h1>
            <p className='hero-section__text'>Encuentra lo mejor en imágenes de casa, eventos, y muchas más!</p>
            <SearchBar />
        </div>
    </section>
  )
}

export default Hero
