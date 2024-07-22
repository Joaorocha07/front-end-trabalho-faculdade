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
  styled,
  Container,
  IconButton,
  type SvgIconProps
} from '@mui/material'

import { usePathname } from 'next/navigation'

import DrawerMenu from './DrawerMenu'
import logo from '@/../public/logo-branco.png'
import MenuIcon from '@mui/icons-material/Menu'
interface RotatingMenuIconProps extends SvgIconProps {
  rotated: boolean
}

export default function Header (): JSX.Element {
  const pathname = usePathname()

  const [drawerOpen, setDrawerOpen] = useState(false)
  const [iconRotated, setIconRotated] = useState(false)
  const [selectedButton, setSelectedButton] = useState('')

  const handleButtonClick = (button: string): void => {
    setSelectedButton(button)
  }

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setDrawerOpen(open)
    setIconRotated(open)
  }

  const RotatingMenuIcon = styled((props: RotatingMenuIconProps) => (
    <MenuIcon {...props} />
  ))(({ rotated }) => ({
    transition: 'transform 0.3s ease-in-out',
    transform: rotated ? 'rotate(90deg)' : 'rotate(180deg)'
  }))

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
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className="icon-button"
              sx={{ display: { xs: 'block', sm: 'none' } }}
              onClick={() => {
                setDrawerOpen(!drawerOpen)
                setIconRotated(!drawerOpen)
              }}
            >
              <RotatingMenuIcon rotated={iconRotated} />
            </IconButton>
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
            <DrawerMenu
              drawerOpen={drawerOpen}
              toggleDrawer={toggleDrawer}
              handleButtonClick={handleButtonClick}
              setDrawerOpen={setDrawerOpen}
              setIconRotated={setIconRotated}
            />
        </StyledToolbar>
      </Container>
    </AppBar>
  )
}
