import React from 'react'
import LogoImg from '../../assets/shared/desktop/logo.svg'
function Logo(props) {
   const logoHeaderBtn = props.header ? "logo-header-btn" : "logo-footer-btn"
    return (
        <a className={`logo-btn ${logoHeaderBtn}`} href="./">
            <img src={LogoImg} alt="" />
        </a>
    )
}

export default Logo