import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import LogoImg from '../../assets/shared/desktop/logo.svg'


function Logo(props) {

    const LogoGsap = useRef(null)
    const logoHeaderBtn = props.header ? "logo-header-btn" : "logo-footer-btn"
    console.log(LogoGsap)

    const handleFocus = ({ currentTarget }) => {
       // gsap.from(currentTarget, { y: 10, duration: 2, ease: "elastic" });
    }

    useEffect(() => {
        gsap.from(LogoGsap.current, { autoAlpha: 0, duration: 2, ease: "none" });
    },[])

    return (
        <Link to="/"
            className={`logo-btn ${logoHeaderBtn}`}
            href="./">
            <img src={LogoImg} alt="" ref={LogoGsap} onMouseEnter={handleFocus} />
        </Link>
    )
}

export default Logo