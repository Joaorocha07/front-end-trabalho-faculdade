'use client'
import React from 'react'

import { Box, Grid, Typography } from '@mui/material'

import Image from 'next/image'
import Menu from '@/components/Menu/Menu'
import '../../styles/documentacao/styles.css'
import QrCodeBM from '../../../public/images/BeatMatchQRCODE.jpeg'
import QrCodeQM from '../../../public/images/QuickMatchQRCODE.jpeg'
import BackgroundDoc from '../../../public/images/background-bm.jpg'

export default function Documentacao (): JSX.Element {
  return (
    <>
      <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            zIndex: -1
          }}
        >
        <Image
          src={BackgroundDoc.src}
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <Menu />
        <Grid container className='main-content'>
          <Grid className='content-bm'>
            <Typography
              variant="h3"
              sx={{
                fontFamily: 'The Seasons, Arial, sans-serif',
                color: '#fff',
                textAlign: 'center',
                mb: 5
              }}
            >
              Beat Match
            </Typography>
            <Grid className='text-container'>
            <Typography variant="h5" sx={{ fontFamily: 'The Seasons, Arial, sans-serif', color: '#000', textAlign: 'center', mb: 5 }}>
              Leia abaixo o QR code e acesse a<br/>
              documentação AGORA
            </Typography>
            </Grid>
            <img id='qr-code-bm' src={QrCodeBM.src} alt="qrcode" />
          </Grid>
          <Grid className='content-qm'>
            <Typography variant="h3" sx={{ fontFamily: 'The Seasons, Arial, sans-serif', color: '#C6C5C5', textAlign: 'center', mb: 5 }}>
              Quick Match
            </Typography>
            <Grid className='text-container'>
            <Typography variant="h5" sx={{ fontFamily: 'The Seasons, Arial, sans-serif', color: '#000', textAlign: 'center', mb: 5 }}>
              Leia abaixo o QR code e acesse a<br/>
              documentação AGORA
            </Typography>
            </Grid>
            <img id='qr-code-bm' src={QrCodeQM.src} alt="qrcode" />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
