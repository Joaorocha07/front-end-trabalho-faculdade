'use client'
import React from 'react'

import { type IRootLayout } from '@/types/global'

export default function BeatMatchLayout ({
  children
}: IRootLayout): JSX.Element {
  return (
    <>
        {children}
    </>
  )
}
