/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react'

import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment
} from '@mui/material'

import Link from 'next/link'
import SendIcon from '@mui/icons-material/Send'
import SpotifyApi from '@/services/spotify/Chamada'

interface IMessage {
  timestamp: string | number | Date
  text: string
  fromUser: boolean
  external_url?: string
}

export default function Chat (): JSX.Element {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<IMessage[]>([])

  const handleSendMessage = async (): Promise<void> => {
    try {
      const res = await SpotifyApi({ name: message })

      console.log(res)

      if (res != null) {
        const currentTime = new Date().toISOString()
        setMessages((prevMessages) => [
          ...prevMessages,
          { fromUser: true, text: message, timestamp: currentTime },
          {
            fromUser: false,
            text: `Artista encontrado: ${res.name}`,
            external_url: res.external_url,
            timestamp: currentTime
          }
        ])
      } else {
        const currentTime = new Date().toISOString()
        setMessages((prevMessages) => [
          ...prevMessages,
          { fromUser: true, text: message, timestamp: currentTime },
          { fromUser: false, text: 'Artista não encontrado.', timestamp: currentTime }
        ])
      }
    } catch (error) {
      console.error('Erro:', error)
      const currentTime = new Date().toISOString()
      setMessages((prevMessages) => [
        ...prevMessages,
        { fromUser: true, text: message, timestamp: currentTime }, // Mensagem do usuário
        { fromUser: false, text: 'Erro ao buscar artista.', timestamp: currentTime } // Resposta do chat
      ])
    }

    setMessage('')
  }

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
              // Verifica se a tecla pressionada é 'Enter'
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
    </>
  )
}
