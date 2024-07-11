'use client'
import React from 'react'

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

import logo from '@/../public/logo-branco.png'

export default function Header (): JSX.Element {
  return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Container>
                <StyledToolbar>
                    <Logo src={logo.src} alt="Logo" />
                    <NavMenu>
                        <StyledButton color="inherit" href="#baixar-video-tiktok">Baixar Vídeo TikTok</StyledButton>
                        <StyledButton color="inherit" href="#baixar-tiktok-mp3">Baixar TikTok MP3</StyledButton>
                    </NavMenu>
                </StyledToolbar>
            </Container>
      </AppBar>
  )
}
