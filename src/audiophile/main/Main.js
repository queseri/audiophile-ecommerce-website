import React from 'react'
import Headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import Speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import Earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import Forward from '../../assets/shared/desktop/icon-arrow-right.svg'
function Main() {
    return (
        <main className='main'>
            <div className='primary-nav'>
                <ul className='primary-nav-list'>
                    <li className="primary-nav-list-item">
                        <img className="primary-nav-image"
                            src={Headphones}
                            alt=""
                            aria-hidden="true" />

                        <h4 className='headphones primary-nav-heading'>Headphones</h4>
                        <a className='primary-nav-btn' href="./">
                            shop
                            <span className='sr-only'> for headphones here </span>
                            <img src={Forward} alt="" aria-hidden="true" />
                        </a>
                    </li>
                    <li className="primary-nav-list-item">

                        <img className="primary-nav-image"
                            src={Speakers} alt=""
                            aria-hidden="true" />

                        <h4 className='speakers primary-nav-heading'>Speakers</h4>
                        <a className='primary-nav-btn' href="./">
                            shop
                            <span className='sr-only'> for speakers here </span>
                            <img src={Forward} alt="" aria-hidden="true" />
                        </a>
                    </li>
                    <li className='primary-nav-list-item'>

                        <img className="primary-nav-image"
                            src={Earphones} alt=""
                            aria-hidden="true" />

                        <h4 className='earphones primary-nav-heading'>Earphones</h4>
                        <a className='primary-nav-btn' href='./'>
                            shop
                            <span className='sr-only'> for earphones here </span>
                            <img src={Forward} alt="" aria-hidden="true" />
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Main