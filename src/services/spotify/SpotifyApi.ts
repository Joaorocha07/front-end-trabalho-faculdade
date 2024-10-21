'use server'

import { type ISpotifyArtistResponse } from '@/types/chat'

export interface ISpotifyProps {
  name: string
}

export default async function SpotifyApi ({
  name
}: ISpotifyProps): Promise<ISpotifyArtistResponse | null> {
  try {
    const apiUrl = `http://127.0.0.1:5000/api/search-artist?name=${name}`

    console.log(apiUrl)

    const requestOptions: RequestInit = {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch(apiUrl, requestOptions)

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`)
    }

    const jsonData: ISpotifyArtistResponse | null = await response.json()

    return jsonData
  } catch (e: any) {
    console.error('Error fetching Spotify API:', e)
    return null
  }
}
