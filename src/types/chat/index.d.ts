export interface IMessage {
  text: string
  fromUser: boolean
  qrCodeUrl?: string
  external_url?: string
  timestamp: string | number | Date
}

export interface IUseChat {
  message: string
  currentIndex: number
  messages: IMessage[]
  filteredMessages: IMessage[]
  handleNext: () => void
  handlePrevious: () => void
  setMessage: (message: string) => void
  handleSendMessage: () => Promise<void>
}

export interface ISpotifyArtistResponse {
  name: string
  genres: string[]
  followers: number
  external_url: string
}
