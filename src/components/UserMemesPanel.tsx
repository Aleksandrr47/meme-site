import { useId, useState } from 'react'
import type { MonthIndex } from '../types/meme'
import type { UserFavoriteMeme } from '../types/userMeme'
import {
  addUserMeme,
  loadUserMemesForMonth,
  removeUserMeme,
} from '../utils/userMemesStorage'

type Props = {
  year: number
  month: MonthIndex
  monthLabel: string
}

const emptyForm = { author: '', title: '', note: '', link: '' }

function trimField(value: string, max: number): string {
  return value.trim().slice(0, max)
}

export function UserMemesPanel({ year, month, monthLabel }: Props) {
  const formId = useId()
  const [items, setItems] = useState<UserFavoriteMeme[]>(() =>
    loadUserMemesForMonth(year, month),
  )
  const [form, setForm] = useState(emptyForm)
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    const title = trimField(form.title, 120)
    if (!title) {
      setError('Напиши название мема.')
      return
    }

    const link = trimField(form.link, 500)
    if (link && !/^https?:\/\/.+/i.test(link)) {
      setError('Ссылка должна начинаться с http:// или https://')
      return
    }

    const entry: UserFavoriteMeme = {
      id: crypto.randomUUID(),
      year,
      month,
      author: trimField(form.author, 40) || 'Аноним',
      title,
      note: trimField(form.note, 400),
      link,
      createdAt: new Date().toISOString(),
    }

    setItems(addUserMeme(entry))
    setForm(emptyForm)
  }

  function handleRemove(id: string) {
    setItems(removeUserMeme(id, year, month))
  }

  return (
    <div className="user-memes">
      <div className="user-memes__head">
        <h3 className="user-memes__title">Ваши мемы — {monthLabel} {year}</h3>
        <p className="user-memes__hint">
          Добавь любимый мем за этот месяц. Сохраняется в браузере на этом
          устройстве (другие посетители пока не видят чужие записи).
        </p>
      </div>

      <form className="user-memes__form" onSubmit={handleSubmit} aria-labelledby={formId}>
        <p id={formId} className="visually-hidden">
          Форма добавления мема
        </p>
        <div className="user-memes__fields">
          <label className="user-memes__label">
            Название мема *
            <input
              className="user-memes__input"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Например: Sigma face"
              maxLength={120}
              required
            />
          </label>
          <label className="user-memes__label">
            Ваше имя
            <input
              className="user-memes__input"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              placeholder="Аноним"
              maxLength={40}
            />
          </label>
          <label className="user-memes__label user-memes__label--wide">
            Комментарий
            <textarea
              className="user-memes__textarea"
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
              placeholder="Почему этот мем зашёл?"
              maxLength={400}
              rows={2}
            />
          </label>
          <label className="user-memes__label user-memes__label--wide">
            Ссылка (картинка или видео)
            <input
              className="user-memes__input"
              type="url"
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
              placeholder="https://..."
              maxLength={500}
            />
          </label>
        </div>
        {error ? (
          <p className="user-memes__error" role="alert">
            {error}
          </p>
        ) : null}
        <button type="submit" className="user-memes__submit">
          Добавить мем
        </button>
      </form>

      {items.length > 0 ? (
        <ul className="user-memes__list">
          {items.map((item) => (
            <li key={item.id} className="user-memes__item">
              <div className="user-memes__item-main">
                <strong className="user-memes__item-title">{item.title}</strong>
                <span className="user-memes__item-author">— {item.author}</span>
                {item.note ? <p className="user-memes__item-note">{item.note}</p> : null}
                {item.link ? (
                  <a
                    className="user-memes__item-link"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Открыть ссылку
                  </a>
                ) : null}
              </div>
              <button
                type="button"
                className="user-memes__remove"
                onClick={() => handleRemove(item.id)}
                aria-label={`Удалить «${item.title}»`}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="user-memes__empty">Пока никто не добавил свой мем за этот месяц.</p>
      )}
    </div>
  )
}
