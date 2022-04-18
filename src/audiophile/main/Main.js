import React, { useContext } from 'react'
import PrimaryNav from './PrimaryNav'
import Products from './Products'

// Primary list
import Headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import Speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import Earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'

//import Headphones from '../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg'
//import Speakers from '../../assets/cart/image-zx9-speaker.jpg'
//import Earphones from '../../assets/cart/image-yx1-earphones.jpg'


//Product list
import MobileYx1 from '../../assets/home/mobile/image-earphones-yx1.jpg'
import MobileZx7 from '../../assets/home/mobile/image-speaker-zx7.jpg'
import MobileZx9 from '../../assets/home/mobile/image-speaker-zx9.png'

import TabletYx1 from '../../assets/home/tablet/image-earphones-yx1.jpg'
import TabletZx7 from '../../assets/home/tablet/image-speaker-zx7.jpg'
import TabletZx9 from '../../assets/home/tablet/image-speaker-zx9.png'


import DesktopYx1 from '../../assets/home/desktop/image-earphones-yx1.jpg'
import DesktopZx7 from '../../assets/home/desktop/image-speaker-zx7.jpg'
import DesktopZx9 from '../../assets/home/desktop/image-speaker-zx9.png'

import Forward from '../../assets/shared/desktop/icon-arrow-right.svg'
import { DataContext } from '../context/Context'

function Main() {
    const data = useContext(DataContext)
    console.log(data)
    const FilteredPrimaryNav = data.products.filter(item => item.category === "earphones" || item.category === "speakers")
    const SortFilterPrimaryNav = FilteredPrimaryNav.sort((a, b) => b.id - a.id)
    console.log(SortFilterPrimaryNav)
    return (
        <main className='main'>
            <div className='primary-nav'>
                <ul className='primary-nav-list'>
                    <PrimaryNav src={Headphones} forward={Forward} title="Headphones" text=" for headphones here" />
                    <PrimaryNav src={Speakers} forward={Forward} title="Speakers" text=" for speakers here" />
                    <PrimaryNav src={Earphones} forward={Forward} title="Earphones" text=" for earphones here" />
                </ul>
            </div>
            <div className="products">
                <Products />
              {/*  <Products desktop={DesktopZx7} tablet={TabletZx7} mobile={MobileZx7} name="Zx7 speaker" />
                <Products desktop={DesktopYx1} tablet={TabletYx1} mobile={MobileYx1} name="Yx1 earphones" />
    */}
            </div>
        </main>
    )
}

export default Main