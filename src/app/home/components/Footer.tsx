import React from 'react'

import '../../../styles/home/styles.css'
import Background from '../../../../public/images/background-bm.jpg'

export default function Footer (): JSX.Element {
  return (
      <div>
        <img src={Background.src} className="background-footer" alt="logo" />
      </div>
  )
}
