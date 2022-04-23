import React from 'react'
import ButtonView from './ButtonView'
import DecorativeImages from './DecorativeImages'

function ProductsShared(props) {
    return (
        <div className='shared-products container'>
            <div className='shared-products-image-container border-radius'>   
            <DecorativeImages desktop={props.desktop} tablet={props.tablet} mobile={props.mobile}  />  
         
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