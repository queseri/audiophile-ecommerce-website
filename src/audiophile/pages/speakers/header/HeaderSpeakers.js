import React, { useRef, useEffect } from 'react'
import HeroShared from '../../../shared/HeroShared'

function HeaderSpeakers() {
    const speakersMain = useRef()
    useEffect(() => {
        speakersMain.current.focus()
    })
    return (
        <>
            <header className='header'
                tabIndex="-1"
                ref={speakersMain}>

                <HeroShared title="Speakers" />

            </header>
        </>
    )
}

export default HeaderSpeakers