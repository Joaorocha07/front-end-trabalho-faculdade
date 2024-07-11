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
import { UseDownloadVideo } from '@/hooks/tik-tok/useDownloadVideo'

import tutorial from '@/../public/como-baixar-video-tiktok.png'

export default function TikTokPage (): JSX.Element {
  const {
    videoUrl,
    handleChange,
    handleDownload,
    loading,
    response
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
            // error={!isValidUrl}
            onChange={handleChange}
            // helperText={!isValidUrl ? 'URL inválida' : ''}
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
              )}
        </CustomButton>
        {JSON.stringify(response?.data?.author?.nickname)}
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
