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
import { UseDownloadAudio } from '@/hooks/tik-tok/useDonwloadAudio'
import { CircularProgress, IconButton, useMediaQuery, useTheme } from '@mui/material'

import tutorial from '@/../public/como-baixar-audio-tiktok.png'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import tutorialMobile from '@/../public/como-baixar-audio-mobile.png'

export default function TikTokAudioPage (): JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const {
    loading,
    videoUrl,
    handlePaste,
    handleChange,
    handleDownload
  } = UseDownloadAudio()

  const PasteIconButton = ({ onPaste }: any): any => (
    <IconButton className="icon-button" onClick={onPaste}>
      <ContentPasteIcon />
    </IconButton>
  )

  console.log('aqui')

  return (
    <ContentContainer>
      <ContainerBox>
        <Title>Baixar audio TikTok</Title>
        <CustomTextField
          fullWidth
          label="Insira o link do vídeo TikTok"
          variant="outlined"
          value={videoUrl}
          onChange={handleChange}
          InputProps={{
            endAdornment: <PasteIconButton onPaste={handlePaste} />
          }}
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
        <Image src={isMobile ? tutorialMobile.src : tutorial.src} alt="Como baixar audio tiktok" />
      </ContainerBox>
    </ContentContainer>
  )
}
