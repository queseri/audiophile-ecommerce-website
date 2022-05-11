import React from 'react'
import PrimaryNav from './PrimaryNav'

import Headphones from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import Speakers from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import Earphones from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import Forward from '../../assets/shared/desktop/icon-arrow-right.svg'

function MainPrimaryNavs() {
  const shortpath = "/"
  return (
    <div className='primary-nav'>

      <ul className='primary-nav-list'>

        <PrimaryNav
          src={Headphones}
          forward={Forward}
          address={`${shortpath}headphones`}
         // width="438"
          //height="422"
          title="Headphones"
          text=" for headphones here" />

        <PrimaryNav
          src={Speakers}
          forward={Forward}
          address={`${shortpath}speakers`}
          //  width="438"
          //  height="408"
          title="Speakers"
          text=" for speakers here" />

        <PrimaryNav
          src={Earphones}
          forward={Forward}
          address={`${shortpath}earphones`}
          // width="438"
          // height="380"
          title="Earphones"
          text=" for earphones here" />

      </ul>

    </div>
  )
}

export default MainPrimaryNavs