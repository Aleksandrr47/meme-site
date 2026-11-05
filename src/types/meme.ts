export type MonthIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type Meme = {
  id: string
  title: string
  emoji: string
  /** Путь из public/, например /images/memes/2025/id.jpg */
  image?: string
  /** Номер месяца: 1 = январь, 12 = декабрь */
  month: MonthIndex
  description: string
  tags: string[]
}

export type MemeYear = 2025 | 2026
