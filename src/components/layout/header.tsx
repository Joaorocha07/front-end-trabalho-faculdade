'use client'
import React, { useState } from 'react'

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
  const [selectedButton, setSelectedButton] = useState('')

  const handleButtonClick = (button: string): void => {
    setSelectedButton(button)
  }

  console.log(selectedButton)

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
                      >
                        Baixar Vídeo TikTok
                      </StyledButton>
                      <StyledButton
                        color="inherit"
                        href="/tik-tok-audio"
                        onClick={() => { handleButtonClick('audio') }}
                      >
                        Baixar TikTok MP3
                      </StyledButton>
                    </NavMenu>
                </StyledToolbar>
            </Container>
      </AppBar>
  )
}
