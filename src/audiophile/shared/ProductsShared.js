import React from 'react'
import ButtonView from './ButtonView'

function ProductsShared(props) {
    return (
        <div className='shared-products container'>
            <div className='shared-products-image-container border-radius'>                
                <picture className='shared-products-picture'>
                    <source media="(min-width: 61.25rem)" srcSet={props.desktop} />
                    <source media="(min-width: 38.75rem)" srcSet={props.tablet} />
                    <img className='shared-products-img' src={props.mobile} alt="" />              
                </picture>
            </div>
            <div className='shared-products-content'>
                    <h2 className='product-title text-orange'>New product</h2>
                    <h3 className='product-title-secondary'>{props.name}</h3>
                    <p className='shared-product-text'>{props.description}</p>
                    <ButtonView name={props.name} address={props.address} hide={props.hide} />
            </div>
        </div>
    )
}

export default ProductsShared