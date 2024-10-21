import React, { useState } from 'react'

import { MenuList } from './MenuList'
import { Box, Drawer, IconButton } from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

export default function Menu (): JSX.Element {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (open: boolean): void => {
    setOpen(open)
  }

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: -25,
          right: -25,
          width: '90px',
          height: '90px',
          backgroundColor: '#cfcfcf',
          borderRadius: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        <IconButton onClick={() => { toggleDrawer(true) }}>
          <MenuIcon sx={{ fontSize: '40px', mt: 1.2, mr: 1.2 }} />
        </IconButton>
      </Box>
      <Drawer anchor="right" open={open} onClose={() => { toggleDrawer(false) }}>
        <MenuList toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  )
}
