import React from 'react'
import Hamburger from '../assets/shared/tablet/icon-hamburger.svg'
import CartIcon from '../assets/shared/desktop/icon-cart.svg'
import Logo from '../assets/shared/desktop/logo.svg'

function Header() {
    return (
        <header className='header'>
            <nav className='nav container flex'>
                <button className="btn-menu-control">
                    <img src={Hamburger} alt="" />
                </button>
                <a href="./">
                    <img src={Logo} alt="" />
                </a>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        Home
                    </li>
                    <li className="nav-list-item">
                        Headphones
                    </li>
                    <li className="nav-list-item">
                        Speakers
                    </li>
                    <li className="nav-list-item">
                        Earphones
                    </li>
                </ul>
                <button className="btn-cart">
                    <img src={CartIcon} alt="" />
                </button>
            </nav>
            <div className="hero">
                <h1 className="hero-title">
                    <span className="hero-title-light">
                        New product
                    </span>
                    XX99 Mark II Headphones
                </h1>
                <p className="hero-content">
                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                </p>
                <a href="/" className="btn-view-product">
                    See product
                </a>

            </div>
        </header>
    )
}

export default Header