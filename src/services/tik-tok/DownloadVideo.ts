'use server'

import { type ITikTokResponse } from '@/types/tik-tok/tik-tok'

export interface IDownloadVideosProps {
  videoUrl: string
  jwt: string
}

export default async function DownloadVideos ({
  videoUrl,
  jwt
}: IDownloadVideosProps): Promise<ITikTokResponse | any> {
  try {
    const dados = new FormData()
    dados.append('url', videoUrl)
    dados.append('hd', '1')

    // const apiUrl = `${process.env.NEXT_PUBLIC_API ?? ''}`
    const apiUrl = 'https://tiktok-video-no-watermark2.p.rapidapi.com/'

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '5b77832ff7mshe2e6baa11cecd15p12be79jsn83ab7eb40f87',
        'x-rapidapi-host': 'tiktok-video-no-watermark2.p.rapidapi.com',
        Authorization: `Bearer ${jwt}`
      },
      body: dados,
      redirect: 'follow',
      cache: 'no-cache'
    }

    const data = await fetch(apiUrl, requestOptions)
    const jsonData: ITikTokResponse = await data.json()

    return jsonData
  } catch (e: any) {
    return null
  }
}
