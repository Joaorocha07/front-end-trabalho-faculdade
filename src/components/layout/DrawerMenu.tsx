import React from 'react'

import {
  List,
  Drawer,
  ListItem,
  ListItemText
} from '@mui/material'

import Link from 'next/link'

interface DrawerMenuProps {
  drawerOpen: boolean
  setDrawerOpen: (open: boolean) => void
  handleButtonClick: (type: string) => void
  setIconRotated: (rotated: boolean) => void
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

export default function DrawerMenu ({
  drawerOpen,
  toggleDrawer,
  setDrawerOpen,
  setIconRotated,
  handleButtonClick
}: DrawerMenuProps): JSX.Element {
  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
    >
      <List>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          href="/tik-tok-video"
          passHref
        >
          <ListItem
            onClick={() => {
              handleButtonClick('video')
              setDrawerOpen(false)
              setIconRotated(false)
            }}
          >
            <ListItemText primary="Baixar Vídeo TikTok" />
          </ListItem>
        </Link>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          href="/tik-tok-audio"
          passHref
        >
          <ListItem
            onClick={() => {
              handleButtonClick('audio')
              setDrawerOpen(false)
              setIconRotated(false)
            }}
          >
            <ListItemText primary="Baixar áudio TikTok" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  )
}
