'use client'
import React from 'react'

import { type IRootLayout } from '@/types/global'

import CustomHead from '../head'

export default function HomeLayout ({
  children
}: IRootLayout): JSX.Element {
  return (
    <>
        {children}
        <CustomHead title="Home" description='Página principal | Home' />
    </>
  )
}
