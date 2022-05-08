import React, { useRef, useEffect } from 'react'
import HeroShared from '../../../shared/HeroShared'

function HeaderHeadPhones() {

    const headphonesMain = useRef()
    useEffect(() => {
        headphonesMain.current.focus()
    })

    return (
        <>
            <header className='header'
                tabIndex="-1"
                ref={headphonesMain}>

                <HeroShared title="Headphones" />

            </header>
        </>
    )
}

export default HeaderHeadPhones