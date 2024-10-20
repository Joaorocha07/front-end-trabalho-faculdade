import React from 'react'

import { sections } from '@/variaveis/home'
import { Divider, Grid, Typography } from '@mui/material'

export default function Conteudo (): JSX.Element {
  return (
    <>
      <Grid container sx={{ mt: 6, justifyContent: 'space-between' }}>
        {/* Coluna da esquerda */}
        <Grid item xs={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Divider sx={{ width: '50%', mb: 1, borderColor: 'white' }} />
          <Typography
            variant="h2"
            sx={{ fontFamily: 'The Seasons, Arial, sans-serif', color: 'white', textAlign: 'center' }}
          >
            Beat Match
          </Typography>
          <Divider sx={{ width: '50%', mb: 2, borderColor: 'white' }} />

          {sections.slice(0, 5).map((section, index) => (
            <React.Fragment key={index}>
              <Typography
                variant="h4"
                sx={{ fontFamily: 'The Seasons, Arial, sans-serif', color: 'white', textAlign: 'center', mb: 1 }}
              >
                <strong>{section.subtitle}</strong>
              </Typography>
              {section.names.map((name, nameIndex) => (
                <Typography variant="h5" sx={{ fontFamily: 'The SeasonsN, Arial, sans-serif', color: '#C6C5C5', textAlign: 'center' }} key={nameIndex}>
                  {name}
                </Typography>
              ))}
            </React.Fragment>
          ))}
        </Grid>

        {/* Coluna da direita */}
        <Grid item xs={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Divider sx={{ width: '50%', mb: 1, borderColor: 'white' }} />
          <Typography
            variant="h2"
            sx={{ fontFamily: 'The Seasons, Arial, sans-serif', color: 'white', textAlign: 'center' }}
          >
            Quick Match
          </Typography>
          <Divider sx={{ width: '50%', mb: 2, borderColor: 'white' }} />

          {sections.slice(5).map((section, index) => (
            <React.Fragment key={index}>
              <Typography
                variant="h4"
                sx={{ fontFamily: 'The Seasons, Arial, sans-serif', color: 'white', textAlign: 'center', mb: 1 }}
              >
                <strong>{section.subtitle}</strong>
              </Typography>
              {section.names.map((name, nameIndex) => (
                <Typography variant="h5" sx={{ fontFamily: 'The SeasonsN, Arial, sans-serif', color: '#C6C5C5', textAlign: 'center' }} key={nameIndex}>
                  {name}
                </Typography>
              ))}
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </>
  )
}
