import { GrammarItem } from '../../src/types/lesson.types';

export const lesson12Grammar: GrammarItem[] = [
  {
    title: 'Review: Adjective and noun past tense',
    pattern: 'い-adjective: ～かった／～くなかった、な-adjective: ～でした／～じゃありませんでした、Noun: ～でした／～じゃありませんでした',
    explanation: 'Review of how to conjugate adjectives and nouns into past tense. な-adjectives conjugate like nouns.',
    examples: [
      {
        japanese: 'きのうは いそがしかったです。',
        romaji: 'Kinou wa isogashikatta desu.',
        english: 'Yesterday was busy.'
      },
      {
        japanese: 'けさ あめでした。',
        romaji: 'Kesa ame deshita.',
        english: 'This morning it was rainy.'
      },
    ],
  },
  {
    title: 'Comparative: N₁は N₂より A',
    pattern: 'N₁は N₂より A～',
    explanation: 'より means "than" and is used to compare two things. N₁ has more of quality A than N₂.',
    examples: [
      {
        japanese: 'りんごは バナナより たかいです。',
        romaji: 'Ringo wa banana yori takai desu.',
        english: 'Apples are more expensive than bananas.'
      },
    ],
  },
  {
    title: 'Negative comparative: N₁は N₂ほど ～Aない',
    pattern: 'N₁は N₂ほど ～Aない',
    explanation: 'ほど～ない means "not as ~ as". N₁ does not have as much of quality A as N₂.',
    examples: [
      {
        japanese: 'バナナは りんごほど たかくないです。',
        romaji: 'Banana wa ringo hodo takakunai desu.',
        english: 'Bananas are not as expensive as apples.'
      },
    ],
  },
  {
    title: 'Equal comparison: N₁は N₂と おなじぐらい A',
    pattern: 'N₁は N₂と おなじぐらい A',
    explanation: 'おなじぐらい means "about the same" or "equally". N₁ and N₂ have equal amounts of quality A.',
    examples: [
      {
        japanese: 'Aさんは Bさんと おなじぐらい せが たかいです。',
        romaji: 'A-san wa B-san to onaji gurai se ga takai desu.',
        english: 'A is about as tall as B.'
      },
    ],
  },
  {
    title: 'Superlative: [scope]で Nが いちばん A',
    pattern: '[scope]で [question word]が いちばん A',
    explanation: 'いちばん means "most" or "number one". The particle で indicates the scope or range of comparison. Question words (なに、どこ、だれ etc.) cannot be followed by は.',
    examples: [
      {
        japanese: 'にほんりょうりで なにが いちばん すきですか。',
        romaji: 'Nihon ryouri de nani ga ichiban suki desu ka.',
        english: 'What Japanese food do you like the most?'
      },
      {
        japanese: 'すしが いちばん すきです。',
        romaji: 'Sushi ga ichiban suki desu.',
        english: 'I like sushi the most.'
      },
    ],
  },
  {
    title: 'Comparison questions: N₁と N₂と どちらが A',
    pattern: 'N₁と N₂と どちらが A',
    explanation: 'どちら means "which (of two)". Use this pattern to ask which of two items has more of a quality. Answers can use ～の ほう (the ~ side/one) or どちらも (both).',
    examples: [
      {
        japanese: 'コーヒーと こうちゃと どちらが すきですか。',
        romaji: 'Koohii to koucha to dochira ga suki desu ka.',
        english: 'Which do you like better, coffee or tea?'
      },
      {
        japanese: 'コーヒーの ほうが すきです。',
        romaji: 'Koohii no hou ga suki desu.',
        english: 'I like coffee better.'
      },
    ],
  },
  {
    title: 'Adjectival の: A+の',
    pattern: 'い-adjective + の、な-adjective + の',
    explanation: 'の can replace a previously mentioned noun. This avoids repetition and makes speech more natural.',
    examples: [
      {
        japanese: 'あの あかくて、おおきいのです。',
        romaji: 'Ano akakute, ookii no desu.',
        english: 'It\'s that red and big one.'
      },
      {
        japanese: 'しろい のが すきです。',
        romaji: 'Shiroi no ga suki desu.',
        english: 'I like the white one.'
      },
    ],
  },
];

