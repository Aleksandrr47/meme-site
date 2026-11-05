import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { generateQuizQuestions, type QuizQuestion } from '../data/quiz'

type Phase = 'intro' | 'playing' | 'done'

function scoreLabel(correct: number, total: number): string {
  const ratio = correct / total
  if (ratio >= 0.9) return 'Ты настоящий мем-архивариус!'
  if (ratio >= 0.7) return 'Очень круто — лента не зря прожита.'
  if (ratio >= 0.5) return 'Неплохо! Ещё пара раундов — и топ.'
  return 'Ничего, зайди в каталог и повтори месяцы.'
}

export function QuizPage() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [index, setIndex] = useState(0)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [correctCount, setCorrectCount] = useState(0)

  const current = questions[index]
  const total = questions.length
  const answered = selectedId !== null

  const progress = useMemo(() => {
    if (total === 0) return 0
    return Math.round((index / total) * 100)
  }, [index, total])

  function startQuiz() {
    setQuestions(generateQuizQuestions())
    setIndex(0)
    setSelectedId(null)
    setCorrectCount(0)
    setPhase('playing')
  }

  function chooseOption(optionId: string) {
    if (!current || answered) return
    setSelectedId(optionId)
    if (optionId === current.correctOptionId) {
      setCorrectCount((c) => c + 1)
    }
  }

  function goNext() {
    if (!current) return
    if (index + 1 >= total) {
      setPhase('done')
      return
    }
    setIndex((i) => i + 1)
    setSelectedId(null)
  }

  return (
    <div className="page page--quiz">
      <div className="page-head">
        <p className="eyebrow">Игра</p>
        <h1 className="page-title">Квиз по мемам 2025–2026</h1>
        <p className="page-lead">
          10 случайных вопросов: угадай месяц и год или название мема. Вопросы
          чередуются и каждый раз новые.
        </p>
      </div>

      {phase === 'intro' && (
        <div className="quiz-panel">
          <p className="quiz-intro-text">
            В базе все мемы из каталога — и за 2025, и за 2026 (кроме удалённого
            декабря 2026). Готов?
          </p>
          <button type="button" className="quiz-primary" onClick={startQuiz}>
            Начать квиз
          </button>
        </div>
      )}

      {phase === 'playing' && current && (
        <div className="quiz-panel">
          <div className="quiz-progress" aria-hidden>
            <div className="quiz-progress__bar" style={{ width: `${progress}%` }} />
          </div>
          <p className="quiz-meta">
            Вопрос {index + 1} из {total} · Счёт: {correctCount}
          </p>

          <article className="quiz-question">
            <p className="quiz-prompt">{current.prompt}</p>
            <div className="quiz-visual">
              {current.meme.image ? (
                <img
                  src={current.meme.image}
                  alt=""
                  className="quiz-visual__img"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="quiz-visual__emoji" aria-hidden>
                  {current.meme.emoji}
                </span>
              )}
              <div className="quiz-visual__meta">
                {current.kind === 'when' ? (
                  <strong>{current.meme.title}</strong>
                ) : (
                  <p className="quiz-visual__desc">{current.meme.description}</p>
                )}
              </div>
            </div>

            <ul className="quiz-options">
              {current.options.map((option) => {
                let stateClass = ''
                if (answered) {
                  if (option.id === current.correctOptionId) stateClass = 'is-correct'
                  else if (option.id === selectedId) stateClass = 'is-wrong'
                } else if (option.id === selectedId) {
                  stateClass = 'is-selected'
                }

                return (
                  <li key={option.id}>
                    <button
                      type="button"
                      className={`quiz-option ${stateClass}`}
                      onClick={() => chooseOption(option.id)}
                      disabled={answered}
                    >
                      {option.label}
                    </button>
                  </li>
                )
              })}
            </ul>

            {answered && (
              <p className="quiz-feedback" role="status">
                {selectedId === current.correctOptionId ? 'Верно!' : 'Мимо.'}{' '}
                {current.explanation}
              </p>
            )}

            <button
              type="button"
              className="quiz-primary"
              onClick={goNext}
              disabled={!answered}
            >
              {index + 1 >= total ? 'Увидеть результат' : 'Следующий вопрос'}
            </button>
          </article>
        </div>
      )}

      {phase === 'done' && (
        <div className="quiz-panel quiz-panel--result">
          <p className="quiz-score">
            {correctCount} / {total}
          </p>
          <p className="quiz-result-text">{scoreLabel(correctCount, total)}</p>
          <div className="quiz-result-actions">
            <button type="button" className="quiz-primary" onClick={startQuiz}>
              Играть снова
            </button>
            <Link to="/2025" className="quiz-secondary">
              Каталог 2025
            </Link>
            <Link to="/2026" className="quiz-secondary">
              Каталог 2026
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
