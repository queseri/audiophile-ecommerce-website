import React, { useState } from 'react'
import Hamburger from '../../assets/shared/tablet/icon-hamburger.svg'
import CartIcon from '../../assets/shared/desktop/icon-cart.svg'
import NavListBtn from './NavListBtn'
import Logo from './Logo'

function Navigation() {
    const [menu, setMenu] = useState(false)
    function handleMenu() {
        setMenu(!menu)
    }
    return (
        <div className="main-navigation">
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
                    <NavListBtn address="/" name="Home" onclick={handleMenu} />
                    <NavListBtn address="./headphones" name="Headphones" onclick={handleMenu} />
                    <NavListBtn address="./speakers" name="Speakers" onclick={handleMenu} />
                    <NavListBtn address="./earphones" name="Earphones" onclick={handleMenu}/>
                </ul>

                <div className="cart-container">
                    <button className="btns btn-cart">
                        <img src={CartIcon} alt="" />
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navigation