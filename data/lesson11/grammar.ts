import { GrammarItem } from '../../src/types/lesson.types';

export const lesson11Grammar: GrammarItem[] = [
  {
    title: 'Counters (Lượng từ)',
    pattern: '～つ, ～人(にん), ～枚(まい), ～台(だい), ～回(かい)',
    explanation: 'Japanese uses different counter words depending on what is being counted. ～つ is for general objects (1-10), ～人 for people, ～枚 for flat/thin objects, ～台 for vehicles/machines, and ～回 for frequency/times.',
    examples: [
      {
        japanese: 'りんごを ふたつ ください。',
        romaji: 'Ringo wo futatsu kudasai.',
        english: 'Please give me two apples.'
      },
      {
        japanese: 'つくえの うえに ビールが ろっぽん あります。',
        romaji: 'Tsukue no ue ni biiru ga roppon arimasu.',
        english: 'There are six bottles of beer on the desk.'
      },
    ],
  },
  {
    title: 'Quantity after particles',
    pattern: 'Nが/を [quantity]',
    explanation: 'Quantity expressions and counters always come after particles. The particle comes first, followed by the quantity/counter.',
    examples: [
      {
        japanese: 'かいぎしつに なんにん いますか。',
        romaji: 'Kaigishitsu ni nan nin imasu ka.',
        english: 'How many people are in the conference room?'
      },
      {
        japanese: 'よにん います。',
        romaji: 'Yo nin imasu.',
        english: 'There are four people.'
      },
    ],
  },
  {
    title: 'Frequency expressions',
    pattern: '[time period]に [frequency] V',
    explanation: 'Use ～回 (kai) to express how many times an action is performed. The pattern is: time period + に + number of times + verb.',
    examples: [
      {
        japanese: 'わたしは いっしゅうかんに にかい えいがを みます。',
        romaji: 'Watashi wa isshuukan ni ni kai eiga wo mimasu.',
        english: 'I watch movies twice a week.'
      },
      {
        japanese: 'ナムさんは いっかげつに いっかい いなかへ かえります。',
        romaji: 'Namu-san wa ikkagetsu ni ikkai inaka e kaerimasu.',
        english: 'Nam returns to his hometown once a month.'
      },
    ],
  },
  {
    title: 'Connecting quantities with と',
    pattern: 'N₁を [quantity]と N₂を [quantity]と...',
    explanation: 'Use と to connect multiple items with different quantities. The particle depends on the final verb in the sentence.',
    examples: [
      {
        japanese: 'りんごを ふたつと バナナを さんぼん ください。',
        romaji: 'Ringo wo futatsu to banana wo sanbon kudasai.',
        english: 'Please give me two apples and three bananas.'
      },
    ],
  },
  {
    title: 'Approximate quantity: ～ぐらい',
    pattern: '[quantity]ぐらい',
    explanation: 'ぐらい (or くらい) means "about" or "approximately" and comes after quantity expressions to indicate approximation.',
    examples: [
      {
        japanese: 'きょうしつに がくせいが 20にんぐらい います。',
        romaji: 'Kyoushitsu ni gakusei ga nijuu nin gurai imasu.',
        english: 'There are about 20 students in the classroom.'
      },
    ],
  },
  {
    title: 'どのくらい: duration/quantity questions',
    pattern: 'どのくらい／どのぐらい',
    explanation: 'どのくらい (or どのぐらい) means "how long" or "how much" and is used to ask about duration or quantity. When answering, ぐらい is optional.',
    examples: [
      {
        japanese: 'どのくらい にほんへ いきますか。',
        romaji: 'Dono kurai nihon e ikimasu ka.',
        english: 'How long will you go to Japan?'
      },
      {
        japanese: 'さんかげつぐらい いきます。',
        romaji: 'Sankagetsu gurai ikimasu.',
        english: 'I will go for about three months.'
      },
    ],
  },
  {
    title: 'だけ: only',
    pattern: 'Nだけ',
    explanation: 'だけ means "only" and replaces the particles を and が. It indicates limitation or exclusiveness.',
    examples: [
      {
        japanese: 'やさいだけ たべます。',
        romaji: 'Yasai dake tabemasu.',
        english: 'I only eat vegetables.'
      },
    ],
  },
];

