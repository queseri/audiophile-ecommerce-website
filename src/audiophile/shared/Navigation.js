import React, { useState, useEffect, useContext } from 'react'
import Hamburger from '../../assets/shared/tablet/icon-hamburger.svg'
import CartIcon from '../../assets/shared/desktop/icon-cart.svg'
import { DataContext } from '../context/Context'
import NavListBtn from './NavListBtn'
import Cart from './Cart'
import Logo from './Logo'

function Navigation() {
    const [menu, setMenu] = useState(false)
    const { isCartOpen, handleCart, cart } = useContext(DataContext)

    function handleMenu(evt) {
        setMenu(!menu)
    }

    function handleMenuLogo() {
        if (menu) {
            setMenu(!menu)
        }
    }

    useEffect(() => {
        if (isCartOpen) {
            document.body.classList.add('body-hide-overflow');
        } else {
            document.body.classList.remove('body-hide-overflow');
        }
    }, [isCartOpen])

    return (
        <div className="main-navigation">
            <nav className="nav container flex" aria-label="main navigation">
                <div className="menu-ctrl flex">

                    <button className="btns btn-menu-control"
                        aria-label="mobile navigation button"
                        aria-controls="main-menu"                                              
                        aria-expanded={menu}
                        onClick={handleMenu}>
                        <img src={Hamburger} width="16" height="15" alt="" />
                    </button>

                    <Logo header={true} onClick={handleMenuLogo} />

                </div>

                <ul id="main-menu" className={`nav-list  ${menu ? "nav-list-show" : ""}`} role="menu">

                    <NavListBtn address="/" name="Home" onclick={handleMenu} roleItem="menuitem" />
                    <NavListBtn address="./headphones" name="Headphones" onclick={handleMenu} roleItem="menuitem" />
                    <NavListBtn address="./speakers" name="Speakers" onclick={handleMenu} roleItem="menuitem" />
                    <NavListBtn address="./earphones" name="Earphones" onclick={handleMenu} roleItem="menuitem" />

                </ul>

                <div className="cart-container">

                    <button className="btns btn-cart"
                        onClick={handleCart}>

                        <span className="sr-only">
                            number of items in the cart
                        </span>

                        <img src={CartIcon} width="23" height="20" alt="" />

                    </button>

                    <span aria-live='polite'
                        className={`cart-total ${cart.length === 0 ? "hide-cart-total" : ""}`}>
                        {cart.length}
                    </span>

                </div>
            </nav>

            <div className={`overlay ${isCartOpen ? "show-overlay" : ""}`}>
                <Cart open={isCartOpen} />
            </div>
        </div>
    )
}

export default Navigation