'use client'
import React from 'react'

import { type IRootLayout } from '@/types/global'

import CustomHead from '../head'

export default function DocumentacaoLayout ({
  children
}: IRootLayout): JSX.Element {
  return (
    <>
        {children}
        <CustomHead title="Documentação" description='Documentação | Documentação Acesse os qr code do nosso projeto' />
    </>
  )
}
