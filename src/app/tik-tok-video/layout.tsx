'use client'
import React from 'react'

import { type IRootLayout } from '@/types/global'

import CustomHead from '@/app/head'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function TikTokVideoLayout ({
  children
}: IRootLayout): JSX.Element {
  return (
    <>
      <CustomHead title="Vid Drop - Tik Tok - Vídeo" />
      <Header />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </>
  )
}
