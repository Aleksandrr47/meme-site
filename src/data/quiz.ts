import { getAllMemesWithYear, type MemeWithYear } from './memes'
import { getMonthLabel } from './months'

export type QuizOption = {
  id: string
  label: string
}

export type QuizQuestion = {
  id: string
  kind: 'when' | 'name'
  prompt: string
  meme: MemeWithYear
  options: QuizOption[]
  correctOptionId: string
  explanation: string
}

const QUESTION_COUNT = 10

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function pickWrong<T>(pool: T[], correct: T, count: number): T[] {
  return shuffle(pool.filter((item) => item !== correct)).slice(0, count)
}

function whenLabel(meme: MemeWithYear): string {
  return `${getMonthLabel(meme.month)} ${meme.year}`
}

function buildWhenQuestion(meme: MemeWithYear, all: MemeWithYear[]): QuizQuestion {
  const correct = whenLabel(meme)
  const pool = [...new Set(all.map(whenLabel))]
  const wrong = pickWrong(pool, correct, 3)
  const options = shuffle([
    { id: 'a', label: correct },
    ...wrong.map((label, i) => ({ id: String.fromCharCode(98 + i), label })),
  ])

  return {
    id: `when-${meme.year}-${meme.id}`,
    kind: 'when',
    prompt: 'В каком месяце и году был этот мем?',
    meme,
    options,
    correctOptionId: options.find((o) => o.label === correct)!.id,
    explanation: `«${meme.title}» — ${correct}.`,
  }
}

function buildNameQuestion(meme: MemeWithYear, all: MemeWithYear[]): QuizQuestion {
  const correct = meme.title
  const wrong = pickWrong(
    all.map((m) => m.title),
    correct,
    3,
  )
  const options = shuffle([
    { id: 'a', label: correct },
    ...wrong.map((label, i) => ({ id: String.fromCharCode(98 + i), label })),
  ])

  const snippet =
    meme.description.length > 120
      ? `${meme.description.slice(0, 120)}…`
      : meme.description

  return {
    id: `name-${meme.year}-${meme.id}`,
    kind: 'name',
    prompt: `Как называется мем (${getMonthLabel(meme.month)} ${meme.year})?`,
    meme,
    options,
    correctOptionId: options.find((o) => o.label === correct)!.id,
    explanation: `${correct}: ${snippet}`,
  }
}

export function generateQuizQuestions(count = QUESTION_COUNT): QuizQuestion[] {
  const all = getAllMemesWithYear()
  const picked = shuffle(all).slice(0, Math.min(count, all.length))

  return picked.map((meme, index) => {
    const builder = index % 2 === 0 ? buildWhenQuestion : buildNameQuestion
    return builder(meme, all)
  })
}
