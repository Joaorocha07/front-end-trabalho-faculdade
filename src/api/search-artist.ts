/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

const getToken = async (): Promise<string | null> => {
  const authString = `${clientId}:${clientSecret}`
  const authBase64 = Buffer.from(authString).toString('base64')

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({ grant_type: 'client_credentials' }),
      {
        headers: {
          Authorization: `Basic ${authBase64}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    return response.data.access_token
  } catch (error) {
    console.error('Error getting token:', error)
    return null
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const searchForArtist = async (token: string, artistName: string) => {
  const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist&limit=1`

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    const artistInfo = response.data.artists.items[0]
    return artistInfo
  } catch (error) {
    console.error('Error searching for artist:', error)
    return null
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { name } = req.query
    if (!name) {
      res.status(400).json({ error: 'Nome do artista não fornecido.' }); return
    }

    const token = await getToken()
    if (!token) {
      res.status(500).json({ error: 'Erro ao obter token.' }); return
    }

    const artistInfo = await searchForArtist(token, String(name))
    if (artistInfo) {
      res.status(200).json({
        name: artistInfo.name,
        external_url: artistInfo.external_urls.spotify,
        genres: artistInfo.genres,
        followers: artistInfo.followers.total
      })
    } else {
      res.status(404).json({ error: 'Artista não encontrado.' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
