import { Link } from 'react-router-dom'
import { getMemesForYear } from '../data/memes'

export function Home() {
  const count2025 = getMemesForYear(2025).length
  const count2026 = getMemesForYear(2026).length

  return (
    <div className="page page--home">
      <section className="hero-block">
        <p className="eyebrow">Мемы · 2025–2026</p>
        <h1 className="hero-title">Два года интернета в одном месте</h1>
        <p className="hero-lead">
          Мемы по месяцам: 2025 — полный год, 2026 — январь–ноябрь.
          Данные собраны по публичным календарям и опросам Know Your Meme.
        </p>
      </section>

      <div className="year-cards">
        <Link to="/2025" className="year-card year-card--2025">
          <span className="year-card__label">Раздел</span>
          <span className="year-card__year">2025</span>
          <span className="year-card__count">{count2025} мемов</span>
          <span className="year-card__cta">Смотреть →</span>
        </Link>
        <Link to="/2026" className="year-card year-card--2026">
          <span className="year-card__label">Раздел</span>
          <span className="year-card__year">2026</span>
          <span className="year-card__count">{count2026} мемов</span>
          <span className="year-card__cta">Смотреть →</span>
        </Link>
      </div>

      <section className="quiz-teaser">
        <h2 className="quiz-teaser__title">Проверь себя</h2>
        <p className="quiz-teaser__text">
          Квиз на 10 вопросов: угадай месяц, год или название мема из 2025 и 2026.
        </p>
        <Link to="/quiz" className="quiz-teaser__link">
          Пройти квиз →
        </Link>
      </section>
    </div>
  )
}
