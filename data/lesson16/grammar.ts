import { GrammarItem } from '../../src/types/lesson.types';

export const lesson16Grammar: GrammarItem[] = [
  {
    title: 'Transportation particles',
    pattern: 'に のります, を おります, から～に のりかえます',
    explanation: 'Different particles are used with transportation verbs: に marks the vehicle you board (のります), を marks the vehicle you get off (おります), and から～に marks the transfer from one vehicle to another (のりかえます).',
    examples: [
      {
        japanese: 'でんしゃに のります。',
        romaji: 'Densha ni norimasu.',
        english: 'I get on the train.'
      },
      {
        japanese: 'でんしゃを おります。',
        romaji: 'Densha wo orimasu.',
        english: 'I get off the train.'
      },
    ],
  },
  {
    title: 'Vて-form sentence connection',
    pattern: 'Vて, Vて, ..., V',
    explanation: 'The て-form connects sentences listing sequential actions in chronological order. Use this pattern to describe a series of actions performed one after another. The final verb indicates the overall tense.',
    examples: [
      {
        japanese: 'まいにち 6じに おきて、あさごはんを たべて、がっこうへ いきます。',
        romaji: 'Mainichi 6ji ni okite, asagohan wo tabete, gakkou e ikimasu.',
        english: 'Every day I wake up at 6, eat breakfast, and go to school.'
      },
      {
        japanese: 'うちへ かえって、シャワーを あびて、ねます。',
        romaji: 'Uchi e kaette, shawaa wo abite, nemasu.',
        english: 'I go home, take a shower, and sleep.'
      },
    ],
  },
  {
    title: 'Noun て-form connection',
    pattern: 'Nで, Nで, ..., N',
    explanation: 'Nouns and な-adjectives are connected using で. Unlike verb connections, this can be used to connect sentences with different subjects or to list characteristics.',
    examples: [
      {
        japanese: 'わたしは かいしゃいんで、たなかさんは いしゃです。',
        romaji: 'Watashi wa kaishain de, Tanaka-san wa isha desu.',
        english: 'I am a company employee, and Mr. Tanaka is a doctor.'
      },
      {
        japanese: 'この へやは しずかで、きれいです。',
        romaji: 'Kono heya wa shizuka de, kirei desu.',
        english: 'This room is quiet and clean.'
      },
    ],
  },
  {
    title: 'い-adjective て-form connection',
    pattern: 'いA(～くて), いA(～くて), ..., いA/V',
    explanation: 'い-adjectives change い to くて to connect sentences. Only connect adjectives with similar meanings (both positive or both negative qualities). The final predicate determines the overall tense.',
    examples: [
      {
        japanese: 'この かばんは やすくて、べんりです。',
        romaji: 'Kono kaban wa yasukute, benri desu.',
        english: 'This bag is cheap and convenient.'
      },
      {
        japanese: 'きょうは あつくて、たいへんです。',
        romaji: 'Kyou wa atsukute, taihen desu.',
        english: 'Today is hot and tough.'
      },
    ],
  },
  {
    title: 'どうやって: how to get there',
    pattern: 'どうやって N(place)へ いきますか',
    explanation: 'どうやって asks "how" or "by what means" to do something, especially for asking about methods of transportation or how to accomplish something.',
    examples: [
      {
        japanese: 'どうやって がっこうへ いきますか。',
        romaji: 'Dou yatte gakkou e ikimasu ka.',
        english: 'How do you go to school?'
      },
      {
        japanese: 'でんしゃで いきます。',
        romaji: 'Densha de ikimasu.',
        english: 'I go by train.'
      },
    ],
  },
  {
    title: 'どの/どれ: which (three or more)',
    pattern: 'どの N / どれ',
    explanation: 'Use どの before a noun and どれ alone when asking "which" from a selection of three or more items. For two items, use どちら instead.',
    examples: [
      {
        japanese: 'どの ほんが すきですか。',
        romaji: 'Dono hon ga suki desu ka.',
        english: 'Which book do you like?'
      },
      {
        japanese: 'どれが あなたの かばんですか。',
        romaji: 'Dore ga anata no kaban desu ka.',
        english: 'Which one is your bag?'
      },
    ],
  },
];

