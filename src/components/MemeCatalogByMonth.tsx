import { groupMemesByMonth, monthSectionId } from '../data/months'
import type { Meme } from '../types/meme'
import { MemeGrid } from './MemeGrid'
import { UserMemesPanel } from './UserMemesPanel'

type Props = {
  memes: Meme[]
  year: number
}

export function MemeCatalogByMonth({ memes, year }: Props) {
  const groups = groupMemesByMonth(memes)

  return (
    <div className="catalog-by-month">
      <nav className="month-nav" aria-label="Переход по месяцам">
        <ul className="month-nav__list">
          {groups.map(({ month, label, memes: monthMemes }) => (
            <li key={month}>
              <a href={`#${monthSectionId(year, month)}`} className="month-nav__link">
                {label}
                <span className="month-nav__count">{monthMemes.length}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="month-sections">
        {groups.map(({ month, label, memes: monthMemes }) => (
          <section
            key={month}
            id={monthSectionId(year, month)}
            className="month-section"
            aria-labelledby={`heading-${year}-${month}`}
          >
            <header className="month-section__head">
              <h2 id={`heading-${year}-${month}`} className="month-section__title">
                {label}
              </h2>
              <span className="month-section__year">{year}</span>
            </header>
            <MemeGrid memes={monthMemes} year={year} />
            <UserMemesPanel year={year} month={month} monthLabel={label} />
          </section>
        ))}
      </div>
    </div>
  )
}
