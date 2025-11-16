import { GrammarItem } from '../../src/types/lesson.types';

export const lesson13Grammar: GrammarItem[] = [
  {
    title: '～が ほしい: want (something)',
    pattern: 'Nが ほしい／ほしくない',
    explanation: 'ほしい is an い-adjective meaning "want" or "desire". It expresses the speaker\'s desire to have something. Use particle が to mark the desired object.',
    examples: [
      {
        japanese: 'いま なにが ほしいですか。',
        romaji: 'Ima nani ga hoshii desu ka.',
        english: 'What do you want now?'
      },
      {
        japanese: 'カメラが ほしいです。',
        romaji: 'Kamera ga hoshii desu.',
        english: 'I want a camera.'
      },
    ],
  },
  {
    title: 'Vたい: want to (do)',
    pattern: 'Verb stem + たい／たくない',
    explanation: 'たい is attached to the verb stem to express the speaker\'s desire to do something. It conjugates like an い-adjective. Change ます to たい: たべます → たべたい.',
    examples: [
      {
        japanese: 'いま なにを したいですか。',
        romaji: 'Ima nani wo shitai desu ka.',
        english: 'What do you want to do now?'
      },
      {
        japanese: 'みずを のみたいです。',
        romaji: 'Mizu wo nomitai desu.',
        english: 'I want to drink water.'
      },
    ],
  },
  {
    title: 'Object particle with ～たい',
    pattern: 'Nを／が Vたい',
    explanation: 'With Vたい, the object particle を can optionally be replaced with が, since たい has い-adjective properties. Both patterns are acceptable.',
    examples: [
      {
        japanese: 'みずを のみたいです。',
        romaji: 'Mizu wo nomitai desu.',
        english: 'I want to drink water.'
      },
      {
        japanese: 'べんきょう したくないですよ。',
        romaji: 'Benkyou shitakunai desu yo.',
        english: 'I don\'t want to study!'
      },
    ],
  },
  {
    title: 'Purpose with に: V(stem) + に',
    pattern: 'V₁(stem) + に V₂(movement)',
    explanation: 'に indicates purpose when attached to the verb stem. V₂ is typically a movement verb like いきます (go), きます (come), or かえります (return). The pattern means "go/come/return to do V₁".',
    examples: [
      {
        japanese: 'そとへ タバコを すいに いきます。',
        romaji: 'Soto e tabako wo sui ni ikimasu.',
        english: 'I\'m going outside to smoke.'
      },
      {
        japanese: 'アメリカへ えいごを べんきょうしに きました。',
        romaji: 'Amerika e eigo wo benkyou shi ni kimashita.',
        english: 'I came to America to study English.'
      },
    ],
  },
  {
    title: 'Purpose with noun-verb (Nする)',
    pattern: 'Nしに V or Nに V',
    explanation: 'For noun-verbs (Nする), there are two ways to express purpose: attach しに to the noun, or use just the noun + に.',
    examples: [
      {
        japanese: 'にほんごを べんきょうしに いきます。',
        romaji: 'Nihongo wo benkyou shi ni ikimasu.',
        english: 'I\'m going to study Japanese.'
      },
      {
        japanese: 'にほんごの べんきょうに いきます。',
        romaji: 'Nihongo no benkyou ni ikimasu.',
        english: 'I\'m going to study Japanese.'
      },
    ],
  },
  {
    title: 'Place + object + purpose',
    pattern: '～へ Nを V₁に V₂',
    explanation: 'Complete pattern combining destination (へ), object (を), and purpose (V₁に) with a movement verb.',
    examples: [
      {
        japanese: 'どこへ いきますか。',
        romaji: 'Doko e ikimasu ka.',
        english: 'Where are you going?'
      },
      {
        japanese: 'デパートへ かいものに いきました。',
        romaji: 'Depaato e kaimono ni ikimashita.',
        english: 'I went to the department store to shop.'
      },
    ],
  },
  {
    title: 'Indefinite pronouns: ～か',
    pattern: 'Question word + か',
    explanation: 'Adding か to question words creates indefinite pronouns: なにか (something), どこか (somewhere), だれか (someone), いつか (sometime). Particles を and へ can be omitted after these expressions.',
    examples: [
      {
        japanese: 'きのう どこか いきましたか。',
        romaji: 'Kinou dokoka ikimashita ka.',
        english: 'Did you go somewhere yesterday?'
      },
      {
        japanese: 'なにか のみたいです。',
        romaji: 'Nanika nomitai desu.',
        english: 'I want to drink something.'
      },
    ],
  },
];

