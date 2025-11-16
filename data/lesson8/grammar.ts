import { GrammarItem } from '../../src/types/lesson.types';

export const lesson8Grammar: GrammarItem[] = [
  {
    title: 'Introduction to Adjectives',
    pattern: 'い-adjectives and な-adjectives',
    explanation: 'Japanese has two types of adjectives: い-adjectives (A-イ) which end in い, and な-adjectives (A-ナ) which are all other adjectives plus exceptions from い-adjectives.',
    examples: [
      {
        japanese: 'あつい、さむい、おいしい (い-adjectives)',
        romaji: 'atsui, samui, oishii (i-adjectives)',
        english: 'hot, cold, delicious (i-adjectives)'
      },
      {
        japanese: 'しずか、げんき、ゆうめい (な-adjectives)',
        romaji: 'shizuka, genki, yuumei (na-adjectives)',
        english: 'quiet, healthy, famous (na-adjectives)'
      }
    ]
  },
  {
    title: 'い-adjectives (A-イ)',
    pattern: '～は い-adjective です',
    explanation: 'い-adjectives conjugate by changing the ending. Present affirmative: ～い. Past affirmative: ～かった. Present negative: ～くない. Past negative: ～くなかった.',
    examples: [
      {
        japanese: 'きのうは とても いそがしかったです。',
        romaji: 'Kinou wa totemo isogashikatta desu.',
        english: 'Yesterday was very busy.'
      }
    ]
  },
  {
    title: 'な-adjectives (A-ナ)',
    pattern: '～は な-adjective です',
    explanation: 'な-adjectives conjugate similarly to nouns. Present affirmative: ～です. Past affirmative: ～でした. Present negative: ～じゃありません/～ではありません. Past negative: ～じゃありませんでした.',
    examples: [
      {
        japanese: 'しんかんせんは とても べんりです。',
        romaji: 'Shinkansen wa totemo benri desu.',
        english: 'The bullet train is very convenient.'
      }
    ]
  },
  {
    title: '～は どうですか (How is ~?)',
    pattern: '～は どうですか',
    explanation: 'どう is used to ask about impressions, opinions, feelings, or characteristics of something or someone.',
    examples: [
      {
        japanese: 'A: このしゅくだいは どうですか。B: とても むずかしいです。',
        romaji: 'A: Kono shukudai wa dou desu ka. B: Totemo muzukashii desu.',
        english: 'A: How is this homework? B: It\'s very difficult.'
      },
      {
        japanese: 'A: このまちは どうですか。B: しずかです。',
        romaji: 'A: Kono machi wa dou desu ka. B: Shizuka desu.',
        english: 'A: How is this town? B: It\'s quiet.'
      }
    ]
  },
  {
    title: 'Adjectives Modifying Nouns',
    pattern: 'い-adj N / な-adj な N',
    explanation: 'When adjectives modify nouns, い-adjectives are placed directly before the noun, while な-adjectives require な between the adjective and noun. どんな is used before nouns to ask "what kind of".',
    examples: [
      {
        japanese: 'A: たなかさんの カメラは どんな カメラですか。B: たかい カメラです。',
        romaji: 'A: Tanaka-san no kamera wa donna kamera desu ka. B: Takai kamera desu.',
        english: 'A: What kind of camera is Tanaka\'s camera? B: It\'s an expensive camera.'
      },
      {
        japanese: 'A: ふじさんは どんな やまですか。B: ゆうめいな やまです。',
        romaji: 'A: Fuji-san wa donna yama desu ka. B: Yuumeina yama desu.',
        english: 'A: What kind of mountain is Mt. Fuji? B: It\'s a famous mountain.'
      }
    ]
  },
  {
    title: 'とても / あまり～ない (very / not very)',
    pattern: 'とても～ / あまり～ない',
    explanation: 'とても (very) emphasizes adjectives in affirmative sentences. あまり (not very) is used with negative forms to soften the negation.',
    examples: [
      {
        japanese: 'ペキンは とても さむいです。',
        romaji: 'Pekin wa totemo samui desu.',
        english: 'Beijing is very cold.'
      },
      {
        japanese: 'しょくどうの ごはんは あまり おいしくないです。',
        romaji: 'Shokudou no gohan wa amari oishikunai desu.',
        english: 'The cafeteria food is not very delicious.'
      },
      {
        japanese: 'A: さくらだいがくは ゆうめいな だいがくですか。B: いいえ、あまり ゆうめいな だいがくじゃありません。',
        romaji: 'A: Sakura daigaku wa yuumeina daigaku desu ka. B: Iie, amari yuumeina daigaku ja arimasen.',
        english: 'A: Is Sakura University a famous university? B: No, it\'s not a very famous university.'
      }
    ]
  },
  {
    title: 'そして (and, and then)',
    pattern: 'Sentence 1。そして Sentence 2。',
    explanation: 'そして is used to connect two sentences with similar or compatible meanings, expressing addition or continuation.',
    examples: [
      {
        japanese: 'このケーキは おいしいです。そして、やすいです。',
        romaji: 'Kono keeki wa oishii desu. Soshite, yasui desu.',
        english: 'This cake is delicious. And it\'s cheap.'
      },
      {
        japanese: 'ふじさんは きれいです。そして、ゆうめいです。',
        romaji: 'Fuji-san wa kirei desu. Soshite, yuumei desu.',
        english: 'Mt. Fuji is beautiful. And it\'s famous.'
      }
    ]
  },
  {
    title: '～が、～ (but)',
    pattern: 'Clause 1 が、Clause 2',
    explanation: 'が is used to connect two clauses with contrasting or different meanings.',
    examples: [
      {
        japanese: 'バスは やすいですが、べんりじゃありません。',
        romaji: 'Basu wa yasui desu ga, benri ja arimasen.',
        english: 'The bus is cheap, but it\'s not convenient.'
      },
      {
        japanese: 'この おちゃは たかいですが、おいしいです。',
        romaji: 'Kono ocha wa takai desu ga, oishii desu.',
        english: 'This tea is expensive, but it\'s delicious.'
      }
    ]
  }
];

