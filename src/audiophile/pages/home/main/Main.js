import React, { useContext } from 'react'
import PrimaryNav from './PrimaryNav'
import Products from './Products'
import Hero from '../../../header/Hero'

// Primary list

import Headphones from '../../../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import Speakers from '../../../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import Earphones from '../../../../assets/shared/desktop/image-category-thumbnail-earphones.png'

import Forward from '../../../../assets/shared/desktop/icon-arrow-right.svg'
import { DataContext } from '../../../context/Context'

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
            </div>
        </main>
    )
}

export default Main