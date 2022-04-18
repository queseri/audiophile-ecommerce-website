import React from 'react'
import Logo from '../components/Logo'
import NavListBtn from '../components/NavListBtn'
import Facebook from '../../assets/shared/desktop/icon-facebook.svg'
import Instagram from '../../assets/shared/desktop/icon-instagram.svg'
import Twitter from '../../assets/shared/desktop/icon-twitter.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-container container'>
                <div className="footer-logo-container">
                    <Logo />
                </div>

                <ul className={`footer-nav`} role="menu">
                    <NavListBtn name="Home" />
                    <NavListBtn name="Headphones" />
                    <NavListBtn name="Speakers" />
                    <NavListBtn name="Earphones" />
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
                            <a className='btn-social' href="./">
                                <span className='sr-only'>visit our facebook page</span>
                                <img src={Facebook}
                                    alt=""
                                    aria-hidden={true} width="24px" height="24px" />
                            </a>
                        </li>

                        <li className='social-link'>
                            <a className='btn-social' href="./">
                                <span className='sr-only'>visit our twitter page</span>
                                <img src={Twitter}
                                    alt=""
                                    aria-hidden={true} width="24px" height="20px" />
                            </a>
                        </li>

                        <li className='social-link'>
                            <a className='btn-social' href="./">
                                <span className='sr-only'>visit our instagram page</span>
                                <img src={Instagram}
                                    alt=""
                                    aria-hidden={true} width="24px" height="24px" />
                            </a>
                        </li>
                    </ul>


                </div>
            </div>
        </footer >
    )
}

export default Footer