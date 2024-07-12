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
import { CircularProgress } from '@mui/material'
import { UseDownloadAudio } from '@/hooks/tik-tok/useDonwloadAudio'

import tutorial from '@/../public/como-baixar-video-tiktok.png'

export default function TikTokAudioPage (): JSX.Element {
  const {
    videoUrl,
    handleChange,
    handleDownload,
    loading
  } = UseDownloadAudio()

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
        <Image src={tutorial.src} alt="Logo" />
      </ContainerBox>
    </ContentContainer>
  )
}
