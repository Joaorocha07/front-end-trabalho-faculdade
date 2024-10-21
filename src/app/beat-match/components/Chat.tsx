/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'

import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton
} from '@mui/material'

import { UseChat } from '@/hooks/beat-match/useChat'

import Link from 'next/link'
import SendIcon from '@mui/icons-material/Send'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export default function Chat (): JSX.Element {
  const {
    message,
    messages,
    currentIndex,
    filteredMessages,
    handleNext,
    setMessage,
    handlePrevious,
    handleSendMessage
  } = UseChat()

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: '50%',
          left: '50px',
          transform: 'translateY(-50%)',
          width: '500px',
          height: '95%',
          backgroundColor: '#4f4f4f',
          borderRadius: '10px',
          boxShadow: 2,
          padding: 2,
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        <Typography variant="h5" sx={{ fontFamily: 'The Seasons', mb: 1.5, textAlign: 'center', color: 'white' }}>
          Falar com BM
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            overflowY: 'auto',
            mb: 1,
            background: '#373737',
            borderRadius: '20px',
            opacity: '60%',
            padding: '10px'
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              mb: 2,
              textAlign: 'center'
            }}
          >
            Pesquise suas músicas favoritas no nosso chat
          </Typography>
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                textAlign: msg.fromUser ? 'right' : 'left',
                mb: 1
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: 'white',
                  mb: 0.5
                }}
              >
                {msg.fromUser ? `Você - ${new Date(msg.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false })}` : `Chat respondeu - ${new Date(msg.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: false })}`}
              </Typography>
              <Typography
                sx={{
                  color: 'white',
                  bgcolor: msg.fromUser ? '#3f51b5' : '#555555',
                  borderRadius: '10px',
                  padding: '8px',
                  width: '100%',
                  display: 'inline-block'
                }}
              >
                {msg.text}
                {(msg.external_url != null) && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'lightblue',
                      display: 'block',
                      mt: 0.5
                    }}
                  >
                    <Link href={msg.external_url} target="_blank" rel="noopener noreferrer" style={{ color: 'lightblue', textDecoration: 'underline' }}>
                      {msg.external_url}
                    </Link>
                    </Typography>
                )}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: 'white',
                  mt: 1
                }}
              >
                {new Date(msg.timestamp).toLocaleDateString('pt-BR')}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            variant="outlined"
            placeholder="Digite sua mensagem..."
            fullWidth
            value={message}
            onChange={(e) => { setMessage(e.target.value) }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && message.trim() !== '') {
                void handleSendMessage()
                e.preventDefault()
              }
            }}
            InputProps={{
              sx: {
                bgcolor: '#fff',
                borderRadius: '20px',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                }
              },
              endAdornment: (
                <InputAdornment position="end">
                  <Button onClick={handleSendMessage} disabled={message.trim() === ''} sx={{ p: 1 }}>
                    <SendIcon />
                  </Button>
                </InputAdornment>
              )
            }}
            sx={{ mb: 1 }}
          />
        </Box>
      </Box>

      {/* QR Code Display */}
      {filteredMessages.length > 0 && (
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            backgroundColor: '#191414',
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography variant="h6" sx={{ color: '#1DB954', mb: 2 }}>
            {filteredMessages[currentIndex].text}
          </Typography>
          <img
            src={filteredMessages[currentIndex].qrCodeUrl}
            alt="QR Code Spotify"
            style={{ width: '200px', height: '200px', marginBottom: '10px' }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handlePrevious}>
              <ArrowBackIosIcon sx={{ color: '#1DB954' }} />
            </IconButton>
            <Typography variant="body2" sx={{ color: '#fff', mx: 2 }}>
              {currentIndex + 1} de {filteredMessages.length}
            </Typography>
            <IconButton onClick={handleNext}>
              <ArrowForwardIosIcon sx={{ color: '#1DB954' }} />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  )
}
