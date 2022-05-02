import React, { useState, useEffect, useContext } from 'react'
import Hamburger from '../../assets/shared/tablet/icon-hamburger.svg'
import CartIcon from '../../assets/shared/desktop/icon-cart.svg'
import { DataContext } from '../context/Context'
import NavListBtn from './NavListBtn'
import Cart from './Cart'
import Logo from './Logo'

function Navigation() {
    const [menu, setMenu] = useState(false)
    const { isOpen, handleCart, cart } = useContext(DataContext)

    function handleMenu() {
        setMenu(!menu)
    }

    useEffect(() => {
        console.log(window.document.body.innerHeight)
        if (isOpen) {
            document.body.classList.add('body-hide-overflow');
        } else {
            document.body.classList.remove('body-hide-overflow');
        }
    }, [isOpen])

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
                    <NavListBtn address="./earphones" name="Earphones" onclick={handleMenu} />
                </ul>

                <div className="cart-container">
                    <button className="btns btn-cart" onClick={handleCart}>
                        <span className="sr-only">number of items in the cart</span>
                        <img src={CartIcon} alt="" />
                    </button>
                    <span className={`cart-total ${cart.length === 0 ? "hide-cart-total" : ""}`}>{cart.length}</span>
                </div>
            </nav>

            <div className={`overlay ${isOpen ? "show-overlay" : ""}`}>
                <Cart open={isOpen} />
            </div>
        </div>
    )
}

export default Navigation