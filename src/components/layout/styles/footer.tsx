import { styled } from '@mui/material'

import InstagramIcon from '@mui/icons-material/Instagram'

export const FooterContainer = styled('footer')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4.2, 0)
  },
  backgroundColor: 'black',
  color: '#fff',
  padding: theme.spacing(4, 0),
  textAlign: 'center'
}))

export const LogoInstagram = styled(InstagramIcon)(({ theme }) => ({
  color: '#fff',
  fontSize: 36,
  marginRight: theme.spacing(1),
  verticalAlign: 'middle'
}))
