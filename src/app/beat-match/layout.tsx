'use client'
import React from 'react'

import { type IRootLayout } from '@/types/global'
import CustomHead from '../head'

export default function BeatMatchLayout ({
  children
}: IRootLayout): JSX.Element {
  return (
    <>
        {children}
        <CustomHead title="Beat Match" description='Beat Match | Pesquise suas músicas favoritas no nosso chat' />
    </>
  )
}
