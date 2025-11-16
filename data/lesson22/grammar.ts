import { GrammarItem } from '../../src/types/lesson.types';

export const lesson22Grammar: GrammarItem[] = [
  {
    title: 'Noun/Adjective/Verb Modifying Nouns',
    pattern: '[Plain form] + N',
    explanation: 'Nouns, adjectives, and verbs in their plain forms can directly modify nouns. This creates noun phrases that describe or specify the noun. For verbs: use Vた (た-form/past plain) or Vる (dictionary form) depending on whether the action is completed or not.',
    examples: [
      {
        japanese: 'わたしが 買った 本',
        romaji: 'watashi ga katta hon',
        english: 'the book that I bought'
      },
      {
        japanese: 'わたしが きのう 友達と 本屋で 買った 本',
        romaji: 'watashi ga kinō tomodachi to honya de katta hon',
        english: 'the book that I bought at the bookstore with my friend yesterday'
      }
    ]
  },
  {
    title: 'Modifying Clause as Subject',
    pattern: '[Clause]が + V/です',
    explanation: 'A modifying clause can serve as the subject of a sentence. The modified noun is marked with は or が depending on its grammatical role.',
    examples: [
      {
        japanese: 'わたしが きのう 友達と 本屋で 買った 本は 日本語の 本です',
        romaji: 'watashi ga kinō tomodachi to honya de katta hon wa nihongo no hon desu',
        english: 'The book that I bought at the bookstore with my friend yesterday is a Japanese book.'
      }
    ]
  },
  {
    title: 'Modifying Clause as Predicate',
    pattern: 'N は [Clause] です',
    explanation: 'A modifying clause can serve as the predicate (complement) in a sentence with です, describing or identifying the subject.',
    examples: [
      {
        japanese: 'これは 私が きのう 友達と 本屋で 買った 本です',
        romaji: 'kore wa watashi ga kinō tomodachi to honya de katta hon desu',
        english: 'This is the book that I bought at the bookstore with my friend yesterday.'
      },
      {
        japanese: '母は 私が きのう 友達と 本屋で 買った 本を よんでいます',
        romaji: 'haha wa watashi ga kinō tomodachi to honya de katta hon o yondeimasu',
        english: 'My mother is reading the book that I bought at the bookstore with my friend yesterday.'
      }
    ]
  },
  {
    title: 'Both Subject and Predicate as Modifying Clauses',
    pattern: '[Clause]は [Clause]です',
    explanation: 'Both the subject and predicate of a sentence can contain modifying clauses, creating complex sentences with multiple embedded descriptions.',
    examples: [
      {
        japanese: '母が よんでいる 本は 私が きのう 友達と 本屋で 買った 本です',
        romaji: 'haha ga yondeiru hon wa watashi ga kinō tomodachi to honya de katta hon desu',
        english: 'The book that my mother is reading is the book that I bought at the bookstore with my friend yesterday.'
      }
    ]
  },
  {
    title: 'Vましょうか (let\'s / shall I)',
    pattern: 'Vます-stem + ましょうか',
    explanation: 'Used to suggest doing something together with the listener, or to offer to do something for the listener. It\'s a polite way to propose an action or offer help.',
    examples: [
      {
        japanese: 'この 部屋、きょう 見る ことが できますか。…ええ。今から 行きましょうか',
        romaji: 'kono heya, kyō miru koto ga dekimasu ka. ...ee. ima kara ikimashō ka',
        english: 'Can I view this room today? ...Yes. Shall we go now?'
      }
    ]
  }
];

