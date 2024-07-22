'use client'
import React from 'react'

import 'react-toastify/dist/ReactToastify.css'

import {
  ContainerBox,
  ContentContainer,
  CustomButton,
  CustomTextField,
  Title
} from './components/styles'

import { ToastContainer } from 'react-toastify'
import { UseDownloadAudio } from '@/hooks/tik-tok/useDonwloadAudio'
import { CircularProgress, IconButton } from '@mui/material'

import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import CardTutorial from '../tik-tok-video/components/CardTutorial'

export default function TikTokAudioPage (): JSX.Element {
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

  return (
    <ContentContainer>
      <ContainerBox>
        <Title>Baixar audio tik tok</Title>
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
        {/* <Image src={isMobile ? tutorialMobile.src : tutorial.src} alt="Como baixar audio tiktok" /> */}
        <CardTutorial text='Como baixar audio do tik tok?' />
      </ContainerBox>
    </ContentContainer>
  )
}
