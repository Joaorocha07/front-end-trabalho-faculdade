import React from 'react'

import { type IRootLayout } from '@/types/global'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import '../styles/globals.css'

export default function RootLayout ({ children }: IRootLayout): JSX.Element {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
