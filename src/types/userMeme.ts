import type { MonthIndex } from './meme'

export type UserFavoriteMeme = {
  id: string
  year: number
  month: MonthIndex
  author: string
  title: string
  note: string
  link: string
  createdAt: string
}

export type UserMemeDraft = {
  author: string
  title: string
  note: string
  link: string
}
