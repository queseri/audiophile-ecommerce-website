import React from 'react'
import MobileBestGear from '../../assets/shared/mobile/image-best-gear.jpg'
import TabletBestGear from '../../assets/shared/tablet/image-best-gear.jpg'
import DesktopBestGear from '../../assets/shared/desktop/image-best-gear.jpg'

function Aside() {
    return (
        <aside className='aside container'>

            <div className='aside-image-container'>
                <picture className='aside-image'>
                    <source media="(min-width: 61.25rem)" srcSet={DesktopBestGear} />
                    <source media="(min-width: 38.75rem)" srcSet={TabletBestGear} />
                    <img className='aside-image-img border-radius' src={MobileBestGear} alt="" />
                </picture>
            </div>

            <div className='aside-content-container'>

                <h4 className='aside-heading'>
                    Bringing you the
                    <span className='text-orange'> best </span>
                    audio gear
                </h4>

                <p className='aside-content-text'>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                    rooms available for you to browse and experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the best place to buy your portable
                    audio equipment.
                </p>

            </div>

        </aside>
    )
}

export default Aside