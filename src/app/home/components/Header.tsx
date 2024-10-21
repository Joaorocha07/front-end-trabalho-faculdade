import React from 'react'

import { Divider, Typography } from '@mui/material'

import '../../../styles/home/styles.css'
import Background from '../../../../public/images/background-bm.jpg'

export default function Header (): JSX.Element {
  return (
    <div>
        <img src={Background.src} className="background-header" alt="background" />
        <div className="nav-bar-header">
            <Typography
                variant="h4"
                id="text-nav"
                sx={{ fontFamily: 'The Seasons, Arial, sans-serif' }}
            >
                <a href="./home" id="link-text">
                    Home
                </a>
            </Typography>
            <Typography
                variant="h4"
                id="text-nav"
                sx={{ fontFamily: 'The Seasons, Arial, sans-serif' }}
            >
                <a href="./beat-match" id="link-text">
                    Beat Match
                </a>
            </Typography>
            <Typography
                variant="h4"
                id="text-nav"
                sx={{ fontFamily: 'The Seasons, Arial, sans-serif' }}
            >
                <a href="./documentacao" id="link-text">
                    Documentação
                </a>
            </Typography>
        </div>
        <Divider id="divisor" />
    </div>
  )
}
