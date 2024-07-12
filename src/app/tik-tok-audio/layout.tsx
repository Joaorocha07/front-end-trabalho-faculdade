'use client'
import React from 'react'

import { type IRootLayout } from '@/types/global'

import CustomHead from '@/app/head'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function TikTokAudioLayout ({
  children
}: IRootLayout): JSX.Element {
  return (
    <>
      <CustomHead title="Vid Drop - Tik Tok - Audio" />
      <Header />
      {children}
      <Footer />
    </>
  )
}