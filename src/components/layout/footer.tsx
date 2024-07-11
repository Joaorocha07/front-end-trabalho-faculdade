import React from 'react'

import { Container, Typography } from '@mui/material'
import { FooterContainer, LogoInstagram } from './styles/footer'

export default function Footer (): JSX.Element {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <Container>
        <LogoInstagram />
        <Typography variant="body2" component="span">
          Desenvolvido por @João Rocha - {currentYear}
        </Typography>
      </Container>
    </FooterContainer>
  )
}
