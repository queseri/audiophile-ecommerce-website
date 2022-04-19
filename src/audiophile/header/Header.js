import React, { useState } from 'react'
import Hamburger from '../../assets/shared/tablet/icon-hamburger.svg'
import CartIcon from '../../assets/shared/desktop/icon-cart.svg'
//import ButtonView from '../components/ButtonView'
import NavListBtn from '../components/NavListBtn'
import Logo from '../components/Logo'
import Hero from './Hero'

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

                    <Logo header={true} />

                </div>

                <ul className={`nav-list  ${menu ? "nav-list-show" : ""}`} role="menu">
                    <NavListBtn address="/" name="Home" />
                    <NavListBtn address="./headphones" name="Headphones" />
                    <NavListBtn address="./speakers" name="Speakers" />
                    <NavListBtn address="./earphones" name="Earphones" />
                </ul>

                <div className="cart-container">
                    <button className="btns btn-cart">
                        <img src={CartIcon} alt="" />
                    </button>
                </div>
            </nav>

            <Hero />
        </header>
    )
}

export default Header