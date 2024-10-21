import { useState } from 'react'

import { type IMessage, type IUseChat } from '@/types/chat'

import QRCode from 'qrcode'
import SpotifyApi from '@/services/spotify/SpotifyApi'

export const UseChat = (): IUseChat => {
  const [message, setMessage] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [messages, setMessages] = useState<IMessage[]>([])

  const filteredMessages = messages.filter((msg) => msg.qrCodeUrl != null)

  const handleSendMessage = async (): Promise<void> => {
    const res = await SpotifyApi({ name: message })

    console.log(res)

    const currentTime = new Date().toISOString()
    const newMessages: IMessage[] = [
      { fromUser: true, text: message, timestamp: currentTime }
    ]

    if (res != null) {
      const qrCodeUrl = await QRCode.toDataURL(res.external_url)
      newMessages.push({
        fromUser: false,
        text: `Artista encontrado: ${res.name}`,
        external_url: res.external_url,
        qrCodeUrl,
        timestamp: currentTime
      })
    } else {
      newMessages.push({
        fromUser: false,
        text: 'Artista não encontrado.',
        timestamp: currentTime
      })
    }

    setMessages((prevMessages) => [...prevMessages, ...newMessages])
    setCurrentIndex(filteredMessages.length)
    setMessage('')
  }

  const handlePrevious = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredMessages.length - 1 : prevIndex - 1
    )
  }

  const handleNext = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredMessages.length - 1 ? 0 : prevIndex + 1
    )
  }

  return {
    message,
    messages,
    currentIndex,
    filteredMessages,
    handleNext,
    setMessage,
    handlePrevious,
    handleSendMessage
  }
}
