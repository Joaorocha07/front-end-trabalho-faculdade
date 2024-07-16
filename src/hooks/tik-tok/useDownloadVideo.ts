import { useState } from 'react'

import { notifyError, notifySuccess } from '@/components/modals'

import DownloadVideos from '@/services/tik-tok/DownloadVideo'

interface IUseDowloadVideo {
  videoUrl: string
  loading: boolean
  handlePaste: () => Promise<void>
  handleDownload: () => Promise<void>
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const UseDownloadVideo = (): IUseDowloadVideo => {
  const [videoUrl, setVideoUrl] = useState('')
  const [isValidUrl, setIsValidUrl] = useState(true)
  const [loading, setLoading] = useState<boolean>(false)

  const validateUrl = (url: string): boolean => {
    const regexStandard = /^https:\/\/www\.tiktok\.com\/@[\w.-]+\/video\/\d+$/
    const regexMobile = /^https:\/\/vm\.tiktok\.com\/[\w\d]+\/?$/
    const regex = /^https:\/\/www\.tiktok\.com\/@[\w.-]+\/video\/\d+\?[\w=&-]+$/

    return regexStandard.test(url) || regexMobile.test(url) || regex.test(url)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const url = e.target.value
    setVideoUrl(url)
    setIsValidUrl(validateUrl(url))
  }

  const handlePaste = async (): Promise<void> => {
    const text = await navigator.clipboard.readText()

    if (validateUrl(text)) {
      const event = new Event('input', { bubbles: true }) as unknown as React.ChangeEvent<HTMLInputElement>

      Object.defineProperty(event, 'target', {
        writable: false,
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        value: { value: text, type: 'text' } as HTMLInputElement
      })

      handleChange(event)
    } else {
      notifyError('Cole um link válido do TikTok!')
    }
  }

  const downloadVideo = async (url: string, data: any): Promise<void> => {
    const response = await fetch(url)
    const blob = await response.blob()

    const nameVideo = data?.data.author.nickname.toLowerCase().replace(/\s+/g, '-')
    const fileName = `viddrop-video-${nameVideo}.mp4`

    const anchor = document.createElement('a')
    anchor.href = URL.createObjectURL(blob)
    anchor.download = fileName
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)

    notifySuccess('Download de vídeo concluído!')
    setLoading(false)
    setVideoUrl('')
  }

  const handleDownload = async (): Promise<void> => {
    setLoading(true)

    if (videoUrl === '') {
      notifyError('O campo está vazio!')
      setLoading(false)
      return
    }

    if (!isValidUrl) {
      notifyError('Insira um link válido do TikTok!')
      setLoading(false)
      setVideoUrl('')
      return
    }

    const jwt = process.env.NEXT_JWT_USER ?? ''
    const response = await DownloadVideos({ videoUrl, jwt })

    if (response?.msg === 'success') {
      const downloadUrl: string = response?.data?.play
      await downloadVideo(downloadUrl, response)
    } else {
      notifyError('Falha ao baixar o vídeo. Tente novamente mais tarde!')
      setLoading(false)
    }
  }

  return {
    videoUrl,
    loading,
    handlePaste,
    handleChange,
    handleDownload
  }
}
