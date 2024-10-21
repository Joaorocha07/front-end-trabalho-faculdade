import React from 'react'

import { type CustomHeadProps } from '@/types/global'
import Link from 'next/link'
import logo from './favicon-32x32.png'

export default function CustomHead ({ title, description }: CustomHeadProps): JSX.Element {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <Link
        rel="icon"
        href={logo.src}
        type="image/png"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="../../public/images/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="../../public/images/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="../../public/images/favicon.ico" />
      <link rel="manifest" href="../../public/logo-site/site.webmanifest"></link>
    </>
  )
}
