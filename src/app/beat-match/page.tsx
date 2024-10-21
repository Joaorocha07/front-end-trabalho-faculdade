'use client'
import React from 'react'

import { Box } from '@mui/material'

import Image from 'next/image'
import Chat from './components/Chat'
import Menu from '@/components/Menu/Menu'
import '../../styles/beat-match/styles.css'
import Background from '../../../public/images/background-bm.jpg'

export default function BeatMatch (): JSX.Element {
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
          src={Background.src}
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <Menu />
        <Chat />
        {/* <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '150px',
            height: '150px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            transform: 'translate(-50%, -50%)',
            zIndex: 1
          }}
        /> */}
      </Box>
    </>
  )
}
