import React from 'react'
//import ButtonView from './ButtonView'

function HeroShared(props) {
    return (
        <div className="hero-container">

            <div className="hero-shared">

                <div className="hero-content-container-shared">

                    <h1 className="hero-title-secondary hero-title-secondary-shared">

                        <span className="sr-only">
                            Audiophile entertainment products
                        </span>

                        {props.title}

                        <span className="sr-only">
                            Section
                        </span>

                    </h1>

                </div>

            </div>

        </div>
    )
}

export default HeroShared