import type { MonthIndex } from '../types/meme'
import type { UserFavoriteMeme } from '../types/userMeme'

const STORAGE_KEY = 'memevault-user-memes-v1'

function readAll(): UserFavoriteMeme[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed.filter(isUserFavoriteMeme)
  } catch {
    return []
  }
}

function isUserFavoriteMeme(value: unknown): value is UserFavoriteMeme {
  if (!value || typeof value !== 'object') return false
  const o = value as Record<string, unknown>
  return (
    typeof o.id === 'string' &&
    typeof o.year === 'number' &&
    typeof o.month === 'number' &&
    typeof o.author === 'string' &&
    typeof o.title === 'string' &&
    typeof o.note === 'string' &&
    typeof o.link === 'string' &&
    typeof o.createdAt === 'string'
  )
}

function writeAll(items: UserFavoriteMeme[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export function loadUserMemesForMonth(
  year: number,
  month: MonthIndex,
): UserFavoriteMeme[] {
  return readAll()
    .filter((m) => m.year === year && m.month === month)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export function addUserMeme(entry: UserFavoriteMeme): UserFavoriteMeme[] {
  const all = readAll()
  all.push(entry)
  writeAll(all)
  return loadUserMemesForMonth(entry.year, entry.month)
}

export function removeUserMeme(id: string, year: number, month: MonthIndex): UserFavoriteMeme[] {
  writeAll(readAll().filter((m) => m.id !== id))
  return loadUserMemesForMonth(year, month)
}
