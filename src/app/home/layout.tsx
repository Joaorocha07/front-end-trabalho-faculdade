'use client'
import React from 'react'

import { type IRootLayout } from '@/types/global'

export default function HomeLayout ({
  children
}: IRootLayout): JSX.Element {
  return (
    <>
        {children}
    </>
  )
}
