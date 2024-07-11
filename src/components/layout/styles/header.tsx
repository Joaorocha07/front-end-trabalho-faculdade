import { Button, styled, Toolbar } from '@mui/material'

export const Logo = styled('img')(({ theme }) => ({
  height: '120px',
  marginRight: theme.spacing(-17),
  [theme.breakpoints.down('md')]: {
    marginRight: theme.spacing(0)
  },
  [theme.breakpoints.down('sm')]: {
    marginRight: theme.spacing(0),
    marginBottom: theme.spacing(2)
  }
}))

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

export const NavMenu = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  }
}))

export const StyledButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  color: '#FFDE59',
  fontWeight: 'bold',
  '&:hover': {
    backgroundImage: 'linear-gradient(to right, #FFDE59, #F6D847)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    border: '2px solid #FFDE59'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem'
  }
}))
