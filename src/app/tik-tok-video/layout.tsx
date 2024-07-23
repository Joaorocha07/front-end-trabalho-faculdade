'use client'
import React from 'react'

import { Box } from '@mui/material'
import { type IRootLayout } from '@/types/global'

import CustomHead from '@/app/head'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function TikTokVideoLayout ({
  children
}: IRootLayout): JSX.Element {
  return (
    <>
      <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CustomHead title="Vid Drop - Tik Tok - Vídeo" />
        <Header />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </Box>
    </>
  )
}
