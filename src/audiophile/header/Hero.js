import React from 'react'
import ButtonView from '../components/ButtonView'

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-content-container">
          <h1 className="sr-only">Audiophile entertainment products</h1>
          <h2 className="hero-title">New product</h2>
          <h3 className="hero-title-secondary"> XX99 Mark II Headphones </h3>
          <p className="hero-content">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <ButtonView />
        </div>
      </div>
    </div>
  )
}

export default Hero