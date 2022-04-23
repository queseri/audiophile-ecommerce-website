import React from 'react'

function DecorativeImages(props) {
    return (
        <picture className='shared-products-picture'>
            <source media="(min-width: 61.25rem)" srcSet={props.desktop} />
            <source media="(min-width: 38.75rem)" srcSet={props.tablet} />
            <img className='shared-products-img border-radius' src={props.mobile} alt="" />
        </picture>
    )
}

export default DecorativeImages