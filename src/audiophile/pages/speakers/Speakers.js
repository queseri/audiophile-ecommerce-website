import React from 'react'
import Aside from '../../shared/Aside'
import MainSpeakers from './main/MainSpeakers'
import HeaderSpeakers from './header/HeaderSpeakers'

function Speakers() {
  return (
    <>
      <HeaderSpeakers />
      <MainSpeakers />
      <Aside />
    </>
  )
}

export default Speakers