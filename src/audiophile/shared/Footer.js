import React from 'react'
import Logo from './Logo'
import NavListBtn from './NavListBtn'
import Facebook from '../../assets/shared/desktop/icon-facebook.svg'
import Instagram from '../../assets/shared/desktop/icon-instagram.svg'
import Twitter from '../../assets/shared/desktop/icon-twitter.svg'

function Footer() {
    return (
        <footer className='footer'>

            <nav className='footer-container container'
                aria-label="footer menu">

                <div className="footer-logo-container">
                    <Logo />
                </div>

                <ul className={`footer-nav`} role="menu">
                    <NavListBtn address="/" name="Home" roleItem="menuitem" />
                    <NavListBtn address="./headphones" name="Headphones" roleItem="menuitem" />
                    <NavListBtn address="./speakers" name="Speakers" roleItem="menuitem" />
                    <NavListBtn address="./earphones" name="Earphones" roleItem="menuitem" />
                </ul>

                <p className='footer-text'>
                    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
                    and sound specialists who are devoted to helping you get the most out of personal audio. Come and
                    visit our demo facility - we're open 7 days a week.
                </p>

                <p className='copyright'>
                    Copyright &copy; 2022. All Rights Reserved
                </p>

                <div className='social-media'>

                    <ul className='social-list'>

                        <li className='social-link'>

                            <a className='btn-social'
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.facebook.com/chamu.mutezva">

                                <span className='sr-only'>
                                    visit our facebook page
                                </span>

                                <img src={Facebook}
                                    alt=""
                                    aria-hidden={true}
                                    width="24"
                                    height="24" />
                            </a>

                        </li>

                        <li className='social-link'>

                            <a className='btn-social'
                                rel="noreferrer"
                                target="_blank"
                                href="https://twitter.com/ChamuMutezva">

                                <span className='sr-only'>
                                    visit our twitter page
                                </span>

                                <img src={Twitter}
                                    alt=""
                                    aria-hidden={true}
                                    width="24"
                                    height="20" />
                            </a>

                        </li>

                        <li className='social-link'>

                            <a className='btn-social'
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.instagram.com/mutezva/">

                                <span className='sr-only'>
                                    visit our instagram page
                                </span>

                                <img src={Instagram}
                                    alt=""
                                    aria-hidden={true}
                                    width="24"
                                    height="24" />
                            </a>

                        </li>

                    </ul>

                </div>

            </nav>

        </footer >
    )
}

export default Footer