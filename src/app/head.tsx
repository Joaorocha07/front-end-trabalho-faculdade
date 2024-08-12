/* eslint-disable react/no-string-refs */
import React from 'react'

import { type CustomHeadProps } from '@/types/global'

// import favicon32x32 from '../../public/logo-branco.png'

export default function CustomHead ({ title, description }: CustomHeadProps): JSX.Element {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <link
        rel="icon"
        ref="../../public/logo-branco.png"
        type="image/png"
      />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={'https://viddrop.com.br/tik-tok-video'} />
      <meta property="og:image" content="../../public/logo-branco.png" />
      <meta property="og:type" content="website" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="../../public/logo-branco.png" />
    </>
  )
}
