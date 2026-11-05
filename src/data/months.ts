import type { Meme, MonthIndex } from '../types/meme'

export type { MonthIndex }

export const MONTH_NAMES_RU = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
] as const

export function getMonthLabel(month: MonthIndex): string {
  return MONTH_NAMES_RU[month - 1]
}

export function monthSectionId(year: number, month: MonthIndex): string {
  return `month-${year}-${month}`
}

export type MemeMonthGroup = {
  month: MonthIndex
  label: string
  memes: Meme[]
}

export function groupMemesByMonth(memes: Meme[]): MemeMonthGroup[] {
  const byMonth = new Map<MonthIndex, Meme[]>()

  for (const meme of memes) {
    const list = byMonth.get(meme.month) ?? []
    list.push(meme)
    byMonth.set(meme.month, list)
  }

  return [...byMonth.entries()]
    .sort(([a], [b]) => a - b)
    .map(([month, groupMemes]) => ({
      month,
      label: getMonthLabel(month),
      memes: groupMemes,
    }))
}
