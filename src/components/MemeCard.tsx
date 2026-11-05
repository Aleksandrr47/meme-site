import { getMonthLabel } from '../data/months'
import type { Meme } from '../types/meme'

type Props = {
  meme: Meme
  year: number
}

export function MemeCard({ meme, year }: Props) {
  return (
    <article className="meme-card">
      <div className="meme-card__visual">
        {meme.image ? (
          <img
            className="meme-card__img"
            src={meme.image}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="meme-card__emoji" aria-hidden>
            {meme.emoji}
          </span>
        )}
        <span className="meme-card__year">{year}</span>
      </div>
      <div className="meme-card__body">
        <p className="meme-card__meta">
          {getMonthLabel(meme.month)} · {year}
        </p>
        <h2 className="meme-card__title">{meme.title}</h2>
        <p className="meme-card__desc">{meme.description}</p>
        <ul className="meme-card__tags">
          {meme.tags.map((tag) => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
