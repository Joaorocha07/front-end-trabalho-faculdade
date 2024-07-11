import React from 'react'

import { type CustomHeadProps } from '@/types/global'

import icon from '@/../public/favicon.ico'

export default function CustomHead ({ title }: CustomHeadProps): JSX.Element {
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta name="description" content="Donwload Videos" />
      <link
        rel="icon"
        href={icon.src}
        type="image/svg+xml"
        sizes="any"
      />
    </>
  )
}
