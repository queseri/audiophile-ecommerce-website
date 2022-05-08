import React, { useRef, useEffect } from 'react'

import Hero from './Hero'

function Header() {

    const homeMain = useRef()
    useEffect(() => {
        homeMain.current.focus()
    })

    return (
        <>
            <header className="header"
                tabIndex="-1"
                ref={homeMain}>

                <Hero />

            </header>
        </>
    )
}

export default Header