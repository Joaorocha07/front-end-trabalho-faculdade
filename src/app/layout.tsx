import React from 'react'

import { type IRootLayout } from '@/types/global'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import '../styles/globals.css'
import CustomHead from './head'

export default function RootLayout ({ children }: IRootLayout): JSX.Element {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true}>
        {children}
        <CustomHead title="Vid Drop - Página Principal" description='Página principal | Baixe seus vídeos do tiktok ou áudios' />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
