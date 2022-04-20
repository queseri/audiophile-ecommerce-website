import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/shared/desktop/logo.svg'
function Logo(props) {
    const logoHeaderBtn = props.header ? "logo-header-btn" : "logo-footer-btn"
    return (
        <Link to="/" className={`logo-btn ${logoHeaderBtn}`} href="./">
            <img src={LogoImg} alt="" />
        </Link>
    )
}

export default Logo