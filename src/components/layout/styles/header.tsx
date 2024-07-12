import { Button, styled, Toolbar } from '@mui/material'
import { type StyledButtonProps } from '@/types/tik-tok/tik-tok'

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

export const NavMenu = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  margin: '0px auto',
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(2),
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  }
}))

export const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'isSelected'
})<StyledButtonProps>(({ theme, isSelected }) => ({
  position: 'relative',
  overflow: 'hidden',
  color: !isSelected ? '#F6D847' : '#FFDE59',
  fontWeight: 'bold',
  backgroundImage: !isSelected ? 'linear-gradient(to right, #FFDE59, #F6D847)' : 'none',
  '-webkit-background-clip': !isSelected ? 'text' : 'none',
  '-webkit-text-fill-color': !isSelected ? 'transparent' : 'inherit',
  border: (isSelected ?? false) ? '2px solid #FFDE59' : 'none',
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
