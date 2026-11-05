import type { Meme, MemeYear } from '../types/meme'

/** Источники: Know Your Meme (Meme of the Month), wikiHow 2025 Meme Calendar, обзоры трендов. */

const memes2025: Meme[] = [
  {
    id: 'italian-brainrot',
    title: 'Italian Brainrot',
    emoji: '🦈',
    image: '/images/memes/2025/italian-brainrot.jpg',
    month: 1,
    description:
      'AI-ролики с «итальянскими» существами вроде Tralalero Tralala. Абсурд, странные имена и бесконечные нарезки — старт хайпа в начале года.',
    tags: ['tiktok', 'ai', 'brainrot'],
  },
  {
    id: 'cave-divers',
    title: 'Cave Divers',
    emoji: '🕳️',
    image: '/images/memes/2025/cave-divers.jpg',
    month: 2,
    description:
      'Шутки про спелеологов, которые лезут в крошечные дыры. Пародии: человек торчит ногами из унитаза или вентиляции — «ну а что, пещера».',
    tags: ['tiktok', 'пародия'],
  },
  {
    id: 'six-seven',
    title: '6-7 (Six-Seven)',
    emoji: '🔢',
    image: '/images/memes/2025/six-seven.jpg',
    month: 3,
    description:
      'Мальчик на баскетбольном матче орёт «six-seven» и машет руками. Бессмысленная фраза стала главным саундтреком Gen Alpha.',
    tags: ['спорт', 'звук'],
  },
  {
    id: 'chicken-jockey',
    title: 'Chicken Jockey',
    emoji: '🐔',
    image: '/images/memes/2025/chicken-jockey.jpg',
    month: 4,
    description:
      'Из фильма Minecraft: зал взрывается от двух слов «chicken jockey». Мем про то, как фанаты преувеличивают каждую реплику.',
    tags: ['кино', 'minecraft'],
  },
  {
    id: 'blue-shirt-guy',
    title: 'Blue Shirt Guy Dance',
    emoji: '💃',
    image: '/images/memes/2025/blue-shirt-guy.png',
    month: 5,
    description:
      'Человек в синей рубашке танцует на концерте так от души, что стал символом «просто кайфую, мне всё равно».',
    tags: ['танец', 'концерт'],
  },
  {
    id: 'not-clocking',
    title: 'It\'s Not Clocking to You',
    emoji: '🕰️',
    image: '/images/memes/2025/not-clocking.jpg',
    month: 6,
    description:
      'Фраза из drag-сленга: «тебе это не ясно?» Реакция на чужую наивность или когда очевидная шутка не заходит.',
    tags: ['реакция', 'сленг'],
  },
  {
    id: 'jet2-holiday',
    title: 'Nothing Beats a Jet2 Holiday',
    emoji: '✈️',
    image: '/images/memes/2025/jet2-holiday.jpg',
    month: 7,
    description:
      'Ностальгия по рекламе Jet2: «ничто не сравнится с отпуском Jet2». Иронично вставляют в любые «идеальные» моменты.',
    tags: ['реклама', 'nostalgia'],
  },
  {
    id: 'clanker',
    title: 'Clanker',
    emoji: '🤖',
    image: '/images/memes/2025/clanker.jpg',
    month: 8,
    description:
      'Сленг для роботов/ИИ из Star Wars. Мемный способ назвать бота, ChatGPT или любую «железяку, которая отвечает».',
    tags: ['star-wars', 'ии'],
  },
  {
    id: 'six-seven-kid-scp',
    title: '6-7 Kid / SCP-067',
    emoji: '👦',
    image: '/images/memes/2025/six-seven-kid-scp.jpg',
    month: 9,
    description:
      'Тот же «67 kid», но осень — пик: его оформили как SCP-067, крипипасту и символ «brainrot-поколения».',
    tags: ['scp', 'gen-alpha'],
  },
  {
    id: 'speed-early-stream',
    title: 'IShowSpeed "EARLY STREAM!"',
    emoji: '📺',
    image: '/images/memes/2025/speed-early-stream.jpg',
    month: 10,
    description:
      'Кадр старого стрима Speed: он сжимается, чтобы не засмеяться. Реакция на что-то невыносимо смешное.',
    tags: ['стрим', 'реакция'],
  },
  {
    id: 'ai-baby-laugh',
    title: 'AI Baby Holding Laugh (Tuff Baby)',
    emoji: '👶',
    image: '/images/memes/2025/ai-baby-laugh.png',
    month: 11,
    description:
      'AI наложил лицо младенца на видео, где человек прикрывает рот от смеха. Жутковато-милый формат для «я не могу».',
    tags: ['ai', 'видео'],
  },
  {
    id: 'bird-game-3',
    title: 'Bird Game 3',
    emoji: '🐦',
    image: '/images/memes/2025/bird-game-3.jpg',
    month: 12,
    description:
      'Выдуманная «игра», которую «находят в магазине» — цепочка AI-роликов на TikTok. Фейковый лор, настоящий хайп.',
    tags: ['tiktok', 'ai-slop'],
  },
]

const memes2026: Meme[] = [
  {
    id: 'skeleton-shield',
    title: 'Skeleton Banging On Shield',
    emoji: '💀',
    image: '/images/memes/2026/skeleton-shield.jpg',
    month: 1,
    description:
      'Скелет из Skyrim бьёт в щит под крик — монтаж про злость, решимость или «я сейчас взорвусь».',
    tags: ['skyrim', 'реакция'],
  },
  {
    id: 'punch-monkey',
    title: 'Punch the Monkey',
    emoji: '🐵',
    image: '/images/memes/2026/punch-monkey.jpg',
    month: 2,
    description:
      'Малыш-шимпанзе Punch в японском зоопарке: учится жить в стае, все переживают за каждый его шаг.',
    tags: ['животные', 'wholesome'],
  },
  {
    id: 'thank-you-chainsaw-man',
    title: 'Thank You… Chainsaw Man!',
    emoji: '⛓️',
    image: '/images/memes/2026/thank-you-chainsaw-man.jpg',
    month: 3,
    description:
      'Панель из финала манги Chainsaw Man: Asa называет Denji «Chainsaw Man». Фанаты перерисовывают с любыми персонажами.',
    tags: ['аниме', ' redraw'],
  },
  {
    id: 'scientology-runs',
    title: 'Scientology Runs',
    emoji: '🏃',
    month: 4,
    description:
      '«Спидран» через центры Scientology — забегают внутрь и снимают, пока их не выгонят. Мемы про «босса» Tom Cruise наверху.',
    tags: ['tiktok', 'speedrun'],
  },
  {
    id: 'son-meme',
    title: 'Son 😭 (Anthony Mackie)',
    emoji: '😭',
    image: '/images/memes/2026/son-meme.jpg',
    month: 5,
    description:
      'Фото Anthony Mackie с подписью «son😭😭» — ироничное разочарование. Весной 2026 взорвались варианты вроде «Sunion».',
    tags: ['реакция', 'редакт'],
  },
  {
    id: 'du-bist-gut-genug',
    title: 'Du Bist Gut Genug!',
    emoji: '🇩🇪',
    image: '/images/memes/2026/du-bist-gut-genug.jpg',
    month: 6,
    description:
      'Из песни «Gut Genug»: нежное «Du bist gut genug» («ты достаточно хорош»). Мем-саунд лета с Cleveland Jr. и brainrot-редакциями.',
    tags: ['музыка', 'лето'],
  },
  {
    id: 'jimothy-raccoon',
    title: 'Jimothy the Raccoon',
    emoji: '🦝',
    image: '/images/memes/2026/jimothy-raccoon.jpg',
    month: 7,
    description:
      'Енот Jimothy с короткой спиной из Сиэтла. Короткий, круглый, любимец ленты — даже Easter egg в Google.',
    tags: ['милота', 'instagram'],
  },
  {
    id: 'fandom-truce-lsp',
    title: 'Great Fandom Truce (Lesbian Space Princess)',
    emoji: '👽',
    image:
      'https://sun9-35.vkuserphoto.ru/s/v1/ig2/OOIgUjF7Ple1PD4VrOQsEEUfCD5onycu1o7vBBUepk4qADJpYn7yCvexuQvCnzkV76TJQZoZHlcY5o4Ph5fA2cyt.jpg?quality=95&from=bu&cs=640x0',
    month: 8,
    description:
      'Фандомы объединились, чтобы высмеивать мультфильм Lesbian Space Princess. «Перемирие ради одного рофла».',
    tags: ['фандом', 'netflix'],
  },
  {
    id: 'things-to-say',
    title: 'Things to Say',
    emoji: '📝',
    image: '/images/memes/2026/things-to-say.webp',
    month: 9,
    description:
      'Списки «что говорить, чтобы…» с крутыми celeb-фото. Все фразы — токсичный сарказм в стиле hustle-culture.',
    tags: ['instagram', 'ирония'],
  },
  {
    id: 'malfoid',
    title: 'Malfoid',
    emoji: '🪄',
    image: '/images/memes/2026/malfoid.jpg',
    month: 10,
    description:
      'Фан-арт: Draco Malfoy как anime-schoolgirl, который язвит в сторону Harry. Весь октябрь не исчезал из ленты X.',
    tags: ['harry-potter', 'art'],
  },
  {
    id: 'whats-up-brah',
    title: 'What\'s Up Brah?',
    emoji: '🧢',
    image: '/images/memes/2026/whats-up-brah.png',
    month: 11,
    description:
      'Randy Marsh из South Park ходит кругами и спрашивает «What\'s up brah?» — вставляют в любые конфликты и батлы.',
    tags: ['south-park', 'edit'],
  },
]

export const memesByYear: Record<MemeYear, Meme[]> = {
  2025: memes2025,
  2026: memes2026,
}

export function getMemesForYear(year: MemeYear): Meme[] {
  return memesByYear[year]
}
