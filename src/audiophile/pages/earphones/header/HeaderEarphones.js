import React, { useRef, useEffect } from 'react'
import HeroShared from '../../../shared/HeroShared'

function HeaderEarphones() {
  const earphonesMain = useRef()
  useEffect(() => {
    earphonesMain.current.focus()
  })
  return (
    <>
      <header className='header'
        tabIndex="-1"
        ref={earphonesMain}>

        <HeroShared title="Earphones" />

      </header>
    </>
  )
}

export default HeaderEarphones