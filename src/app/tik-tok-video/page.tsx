'use client'
import React from 'react'

import 'react-toastify/dist/ReactToastify.css'

import {
  ContainerBox,
  ContentContainer,
  CustomButton,
  CustomTextField,
  Image,
  Title
} from './components/styles'

import { ToastContainer } from 'react-toastify'
import { UseDownloadVideo } from '@/hooks/tik-tok/useDownloadVideo'
import { CircularProgress, useMediaQuery, useTheme } from '@mui/material'

import tutorial from '@/../public/como-baixar-video-tiktok.png'
import tutorialMobile from '@/../public/como-baixar-video-mobile.png'

export default function TikTokVideoPage (): JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const {
    videoUrl,
    handleChange,
    handleDownload,
    loading
  } = UseDownloadVideo()

  return (
    <ContentContainer>
      <ContainerBox>
        <Title>Baixar vídeo TikTok</Title>
        <CustomTextField
          fullWidth
          label="Insira o link do vídeo TikTok"
          variant="outlined"
          value={videoUrl}
          onChange={handleChange}
        />
        <CustomButton
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            handleDownload().catch((err) => {
              console.error(err)
            })
          }}
          disabled={loading}
        >
          {loading
            ? (
                <CircularProgress size={24} />
              )
            : (
                'Baixar'
              )
          }
        </CustomButton>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Image src={isMobile ? tutorialMobile.src : tutorial.src} alt="Como baixar video tiktok" />
      </ContainerBox>
    </ContentContainer>
  )
}
