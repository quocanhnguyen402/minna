import { GrammarItem } from '../../src/types/lesson.types';

export const lesson20Grammar: GrammarItem[] = [
  {
    title: 'Plain form (普通形)',
    pattern: 'Plain/casual conjugation for verbs, adjectives, nouns',
    explanation: 'The plain form (casual speech) is used with family, close friends, in writing (books, reports, diaries), and in subordinate clauses. Verbs: Vる (dictionary), Vない (negative), Vた (past), Vなかった (past negative). い-adjectives: い, くない, かった, くなかった. な-adjectives/Nouns: だ, じゃない, だった, じゃなかった.',
    examples: [
      {
        japanese: 'たべる、たべない、たべた、たべなかった',
        romaji: 'taberu, tabenai, tabeta, tabenakatta',
        english: 'eat, don\'t eat, ate, didn\'t eat'
      },
      {
        japanese: 'おいしい、おいしくない、おいしかった、おいしくなかった',
        romaji: 'oishii, oishikunai, oishikatta, oishikunakatta',
        english: 'delicious, not delicious, was delicious, wasn\'t delicious'
      },
    ],
  },
  {
    title: 'Polite vs plain form usage',
    pattern: '丁寧形 (polite) vs 普通形 (plain)',
    explanation: 'Polite form (ます/です) is used with strangers, elders, superiors, in formal situations. Plain form is used with family, close friends, in writing (except letters), books, reports, diaries. Choosing the right form depends on relationship and context.',
    examples: [
      {
        japanese: 'いきます (polite) → いく (plain)',
        romaji: 'ikimasu → iku',
        english: 'go'
      },
      {
        japanese: 'がくせいです (polite) → がくせいだ (plain)',
        romaji: 'gakusei desu → gakusei da',
        english: 'am a student'
      },
    ],
  },
  {
    title: 'Casual conversation features',
    pattern: 'Plain form conversation patterns',
    explanation: 'In casual speech: (1) Questions drop か and use rising intonation, drop だ before question. (2) Particles を, へ, は, が can be omitted if context is clear. (3) い in Vている can be dropped (Vてる). (4) が is often replaced by けど in conversation.',
    examples: [
      {
        japanese: 'おちゃ［を］のむ？',
        romaji: 'Ocha [wo] nomu?',
        english: 'Wanna drink tea?'
      },
      {
        japanese: 'パソコン、もって［い］る？',
        romaji: 'Pasokon, motte [i] ru?',
        english: 'Do you have a computer?'
      },
    ],
  },
  {
    title: 'Plain form with grammar patterns',
    pattern: 'Converting polite patterns to plain',
    explanation: 'Many grammar patterns learned with polite endings can be made casual: Vたいです→Vたい, Vてもいいです→Vてもいい, Vてはいけません→Vてはいけない, Vなければなりません→Vなければならない, Vてください→Vて, Vています→Vている.',
    examples: [
      {
        japanese: 'たべたい。',
        romaji: 'Tabetai.',
        english: 'I want to eat.'
      },
      {
        japanese: 'いってもいい。',
        romaji: 'Itte mo ii.',
        english: 'You may go.'
      },
    ],
  },
  {
    title: 'Informal pronouns and responses',
    pattern: 'ぼく, きみ, うん, ううん',
    explanation: 'Casual speech uses different pronouns and responses: ぼく (I, male), きみ (you, to equals/younger), ～くん (suffix for males), うん (yeah), ううん (nope). こっち/そっち/あっち/どっち are informal versions of こちら/そちら/あちら/どちら.',
    examples: [
      {
        japanese: 'ぼくは がくせいだ。',
        romaji: 'Boku wa gakusei da.',
        english: 'I\'m a student. (male speaker)'
      },
      {
        japanese: 'きみも いく？ ...うん、いく。',
        romaji: 'Kimi mo iku? ...Un, iku.',
        english: 'Are you going too? ...Yeah, I\'m going.'
      },
    ],
  },
];

