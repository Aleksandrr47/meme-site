import { Link, Navigate, useParams } from 'react-router-dom'
import { MemeCatalogByMonth } from '../components/MemeCatalogByMonth'
import { getMemesForYear } from '../data/memes'
import type { MemeYear } from '../types/meme'

function parseYear(raw: string | undefined): MemeYear | null {
  if (raw === '2025') return 2025
  if (raw === '2026') return 2026
  return null
}

export function YearPage() {
  const { year: yearParam } = useParams()
  const year = parseYear(yearParam)

  if (!year) {
    return <Navigate to="/" replace />
  }

  const memes = getMemesForYear(year)
  const otherYear: MemeYear = year === 2025 ? 2026 : 2025

  return (
    <div className="page">
      <div className="page-head">
        <p className="eyebrow">Каталог</p>
        <h1 className="page-title">Мемы {year} года</h1>
        <p className="page-lead">
          {memes.length} карточек, сгруппированы по месяцам. Перейти к{' '}
          <Link to={`/${otherYear}`}>мемам {otherYear}</Link> или на{' '}
          <Link to="/">главную</Link>.
        </p>
      </div>
      <MemeCatalogByMonth memes={memes} year={year} />
    </div>
  )
}
