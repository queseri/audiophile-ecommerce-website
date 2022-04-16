import React, { useState } from 'react'
import Hamburger from '../../assets/shared/tablet/icon-hamburger.svg'
import CartIcon from '../../assets/shared/desktop/icon-cart.svg'
import Logo from '../../assets/shared/desktop/logo.svg'

function Header() {
    const [menu, setMenu] = useState(false)

    function handleMenu() {
        setMenu(!menu)
    }

    return (
        <header className="header">
            <nav className="nav container flex">
                <div className="menu-ctrl flex">
                    <button className="btns btn-menu-control"
                        aria-controls="menu"
                        aria-haspopup="true"
                        aria-expanded={menu}
                        onClick={handleMenu}>
                        <img src={Hamburger} alt="" />
                    </button>
                    <a className="btn-logo" href="./">
                        <img src={Logo} alt="" />
                    </a>
                </div>
                <ul className={`nav-list  ${menu ? "nav-list-show" : ""}`} role="menu">
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
                <div className="cart-container">
                    <button className="btns btn-cart">
                        <img src={CartIcon} alt="" />
                    </button>
                </div>
            </nav>
            
            <div className="hero-container">
                <div className="hero">
                    <div className="hero-content-container">
                        <h1 className="sr-only">Audiophile entertainment products</h1>
                        <h2 className="hero-title">New product</h2>
                        <h3 className="hero-title-secondary"> XX99 Mark II Headphones </h3>
                        <p className="hero-content">
                            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                        </p>
                        <a href="/" className="btn-view-product">
                            See product
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header