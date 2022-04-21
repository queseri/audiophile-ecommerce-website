import React from 'react'
//import ButtonView from './ButtonView'

function HeroShared(props) {
    return (
        <div className="hero-container">
            <div className="hero">
                <div className="hero-content-container">
                    <h1 className="sr-only">Audiophile entertainment products</h1>
                    <h2 className="hero-title sr-only">New product</h2>
                    <h3 className="hero-title-secondary">{props.title}</h3>                  
                </div>
            </div>
        </div>
    )
}

export default HeroShared