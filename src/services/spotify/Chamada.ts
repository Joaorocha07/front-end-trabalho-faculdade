'use server'
export interface ISpotifyProps {
  name: string
}

export default async function SpotifyApi ({
  name
}: ISpotifyProps): Promise<any> {
  try {
    const apiUrl = process.env.API_SPOTIFY ?? 'http://127.0.0.1:5000/api/search-artist'

    // Using GET method to search by artist name
    const fullUrl = `${apiUrl}?name=${encodeURIComponent(name)}`

    const requestOptions: RequestInit = {
      method: 'POST', // Ensure your backend accepts POST if needed
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    // Make the fetch request to the full URL with POST
    const response = await fetch(fullUrl, requestOptions)

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`)
    }

    const jsonData = await response.json() // Parse the response to JSON
    return jsonData // Return the parsed response
  } catch (e: any) {
    console.error('Error fetching Spotify API:', e)
    return null // Return null if there’s an error
  }
}
