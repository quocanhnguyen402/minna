import { GrammarItem } from '../../src/types/lesson.types';

export const lesson19Grammar: GrammarItem[] = [
  {
    title: 'た-form (past tense plain form)',
    pattern: 'Verb conjugation in た-form',
    explanation: 'The た-form is the plain past tense, conjugated the same way as て-form but with た instead of て. Group I: い/ち/り→った, み/び/に→んだ, き/ぎ→いた/いだ, し→した. Group II: remove ます, add た. Group III: きます→きた, します→した. Special: いきます→いった.',
    examples: [
      {
        japanese: 'かきます → かいた',
        romaji: 'kakimasu → kaita',
        english: 'wrote'
      },
      {
        japanese: 'たべます → たべた',
        romaji: 'tabemasu → tabeta',
        english: 'ate'
      },
    ],
  },
  {
    title: 'Vたことがあります: have done before',
    pattern: 'V(た-form) + ことがあります',
    explanation: 'Expresses past experience - "have done something before." The verb あります stays in present tense regardless of when the experience occurred. Negative: Vたことがありません (have never done).',
    examples: [
      {
        japanese: 'ふじさんに のぼったことが ありますか。',
        romaji: 'Fujisan ni nobotta koto ga arimasu ka.',
        english: 'Have you ever climbed Mt. Fuji?'
      },
      {
        japanese: 'はい、いちど あります。',
        romaji: 'Hai, ichido arimasu.',
        english: 'Yes, I have once.'
      },
    ],
  },
  {
    title: 'V₁たり V₂たり します: doing things like',
    pattern: 'V₁(た-form) + り、V₂(た-form) + り... + します',
    explanation: 'Lists sample actions in no particular order. Unlike Vて which shows sequence, this pattern means "doing things like V₁ and V₂ (among other things)." Can be used for one or multiple subjects. The overall tense is determined by the final します.',
    examples: [
      {
        japanese: 'にちようびは へやを そうじしたり、せんたくしたり します。',
        romaji: 'Nichiyoubi wa heya wo souji shitari, sentaku shitari shimasu.',
        english: 'On Sundays, I do things like cleaning my room and doing laundry.'
      },
      {
        japanese: 'パーティーで みんな おさけを のんだり、はなしを したり しました。',
        romaji: 'Paatii de minna osake wo nondari, hanashi wo shitari shimashita.',
        english: 'At the party, everyone did things like drinking sake and chatting.'
      },
    ],
  },
  {
    title: 'なります: become',
    pattern: 'Nに なります / Aなに なります / Aiく なります',
    explanation: 'Expresses a change in state. Nouns and な-adjectives use に, い-adjectives drop い and add くなります. Often used in past tense to indicate a completed change.',
    examples: [
      {
        japanese: 'いしゃに なりたかったです。',
        romaji: 'Isha ni naritakatta desu.',
        english: 'I wanted to become a doctor.'
      },
      {
        japanese: 'てを あらってから、てが きれいに なりました。',
        romaji: 'Te wo aratte kara, te ga kirei ni narimashita.',
        english: 'After washing hands, my hands became clean.'
      },
    ],
  },
  {
    title: 'いちども～ない: never (not even once)',
    pattern: 'いちども + negative verb',
    explanation: 'Emphasizes that something has never happened, not even one time. Always used with negative forms.',
    examples: [
      {
        japanese: 'わたしは いちども にほんへ いったことが ありません。',
        romaji: 'Watashi wa ichido mo Nihon e itta koto ga arimasen.',
        english: 'I have never been to Japan, not even once.'
      },
      {
        japanese: 'かれは いちども じかんに おくれたことが ありません。',
        romaji: 'Kare wa ichido mo jikan ni okureta koto ga arimasen.',
        english: 'He has never been late, not even once.'
      },
    ],
  },
];

