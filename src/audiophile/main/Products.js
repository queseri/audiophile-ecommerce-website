import React from 'react'
import ButtonView from '../components/ButtonView'

import MobileZx9 from '../../assets/home/mobile/image-speaker-zx9.png'
import TabletZx9 from '../../assets/home/tablet/image-speaker-zx9.png'
import DesktopZx9 from '../../assets/home/desktop/image-speaker-zx9.png'

import DesktopYx1 from '../../assets/home/desktop/image-earphones-yx1.jpg'
import TabletYx1 from '../../assets/home/tablet/image-earphones-yx1.jpg'
import MobileYx1 from '../../assets/home/mobile/image-earphones-yx1.jpg'

function Products(props) {
    // {idx === 0 ? <p>Upgrade to premium speakers that are phenomenally built to
    //     deliver truly remarkable sound </p> : null}
    return (
        <div className='select-products container'>
            <div className="products product1  border-radius">
                <picture className='product1-image'>
                    <source media="(min-width: 61.25rem)" srcSet={DesktopZx9} />
                    <source media="(min-width: 38.75rem)" srcSet={TabletZx9} />
                    <img className='product1-image-img' src={MobileZx9} alt="" />
                </picture>
                <div className="product1-content-container">
                    <h4 className='product-heading padding-inline'>Zx9 speaker</h4>
                    <p className='product-content padding-inline'>
                        Upgrade to premium speakers that are phenomenally built to
                        deliver truly remarkable sound
                    </p>
                    <ButtonView name="Zx9 speaker" bgblack={true} />
                </div>
            </div>

            <div className='products product2'>
                <div className='product2-content'>
                    <h4 className='product-heading product2-heading'>Zx7 speaker</h4>
                    <ButtonView name="Zx7 speaker" bgtransparent={true} />
                </div>
                <div className='product2-image border-radius'>
                    <span className='inner-image'></span>
                </div>
            </div>

            <div className='products product3'>
                <div className='product3-image-container'>
                    <picture className='product3-image'>
                        <source media="(min-width: 61.25rem)" srcSet={DesktopYx1} />
                        <source media="(min-width: 38.75rem)" srcSet={TabletYx1} />
                        <img className='product3-image-img border-radius' src={MobileYx1} alt="" />
                    </picture>
                </div>
                <div className='product3-content-container container border-radius'>
                    <h4 className='product-heading product3-heading'>Yx1 earphones</h4>
                    <ButtonView name="Yx1 earphones" bgtransparent={true} />
                </div>
            </div>
        </div>
    )
}

export default Products