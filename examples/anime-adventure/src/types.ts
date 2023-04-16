export interface AnimeSearchResults {
  pageInfo: PageInfo
  media: Media[]
}

export interface Media {
  id: number
  title: Title
}

export interface Title {
  romaji: string
  english: null | string
  native: string
  userPreferred: string
}

export interface PageInfo {
  total: number
  currentPage: number
  lastPage: number
  hasNextPage: boolean
  perPage: number
}
