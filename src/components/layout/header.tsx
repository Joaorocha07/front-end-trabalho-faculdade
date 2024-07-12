'use client'
import React, { useEffect, useState } from 'react'

import {
  Logo,
  NavMenu,
  StyledButton,
  StyledToolbar
} from './styles/header'

import {
  AppBar,
  Container
} from '@mui/material'

import { usePathname } from 'next/navigation'

import logo from '@/../public/logo-branco.png'

export default function Header (): JSX.Element {
  const pathname = usePathname()
  const [selectedButton, setSelectedButton] = useState('')

  const handleButtonClick = (button: string): void => {
    setSelectedButton(button)
  }

  useEffect(() => {
    if (pathname === '/tik-tok-video') {
      setSelectedButton('video')
    } else if (pathname === '/tik-tok-audio') {
      setSelectedButton('audio')
    }
  }, [pathname])

  return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Container>
                <StyledToolbar>
                    <Logo src={logo.src} alt="Logo" />
                    <NavMenu>
                      <StyledButton
                        color="inherit"
                        href="/tik-tok-video"
                        onClick={() => { handleButtonClick('video') }}
                        isSelected={selectedButton === 'video'}
                      >
                        Baixar Vídeo TikTok
                      </StyledButton>
                      <StyledButton
                        color="inherit"
                        href="/tik-tok-audio"
                        onClick={() => { handleButtonClick('audio') }}
                        isSelected={selectedButton === 'audio'}
                      >
                        Baixar audio TikTok
                      </StyledButton>
                    </NavMenu>
                </StyledToolbar>
            </Container>
      </AppBar>
  )
}
