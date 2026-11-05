import type { Meme } from '../types/meme'
import { MemeCard } from './MemeCard'

type Props = {
  memes: Meme[]
  year: number
}

export function MemeGrid({ memes, year }: Props) {
  return (
    <ul className="meme-grid">
      {memes.map((meme) => (
        <li key={meme.id}>
          <MemeCard meme={meme} year={year} />
        </li>
      ))}
    </ul>
  )
}
