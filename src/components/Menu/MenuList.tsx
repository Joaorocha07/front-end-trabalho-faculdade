import React from 'react'

import {
  Box,
  List,
  Divider,
  ListItem,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItemButton
} from '@mui/material'

import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import ChatIcon from '@mui/icons-material/Chat'
import InboxIcon from '@mui/icons-material/MoveToInbox'

export const MenuList = ({ toggleDrawer }: { toggleDrawer: (open: boolean) => void }): JSX.Element => {
  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, href: './home' },
    { text: 'Falar com BM', icon: <ChatIcon />, href: './beat-match' },
    { text: 'Documentação', icon: <InboxIcon />, href: './documentacao' }
  ]

  return (
      <Box
        sx={{
          width: 250,
          padding: 2,
          backgroundColor: '#fff',
          height: '100%'
        }}
        role="presentation"
        onClick={() => { toggleDrawer(false) }}
        onKeyDown={() => { toggleDrawer(false) }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: 'The Seasons', textAlign: 'center' }}
        >
          Beat Match
        </Typography>
        <Divider
          sx={{
            width: '80%',
            mb: 1,
            borderColor: '#c6c6c6',
            mx: 'auto',
            borderWidth: 2,
            borderRadius: '20px'
          }}
        />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} href={item.href}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
  )
}
