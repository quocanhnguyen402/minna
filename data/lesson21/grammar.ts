import { GrammarItem } from '../../src/types/lesson.types';

export const lesson21Grammar: GrammarItem[] = [
  {
    title: '～とおもいます: I think that ~',
    pattern: 'Plain form + とおもいます',
    explanation: 'Used to express personal opinions, judgments, or thoughts about something. The clause before と uses plain form. Common pattern: Nについて どうおもいますか (What do you think about N?).',
    examples: [
      {
        japanese: 'はこの なかに ねずみが いるとおもいます。',
        romaji: 'Hako no naka ni nezumi ga iru to omoimasu.',
        english: 'I think there is a mouse in the box.'
      },
      {
        japanese: 'ナムさんについて どうおもいますか。...ハンサムで、しんせつだとおもいます。',
        romaji: 'Namu-san ni tsuite dou omoimasu ka. ...Hansamu de, shinsetsu da to omoimasu.',
        english: 'What do you think about Nam? ...I think he is handsome and kind.'
      },
    ],
  },
  {
    title: '～といいます: say that ~',
    pattern: 'Plain form + といいます / 「quote」といいます',
    explanation: 'Used to report what someone said. Two patterns: (1) Indirect: uses plain form before と, change perspective (わたし→かれ/かのじょ). (2) Direct: quoted speech in「 」brackets, preserves original words. Usually past tense: といいました.',
    examples: [
      {
        japanese: 'たなかさんは こんばん でかけるといいました。',
        romaji: 'Tanaka-san wa konban dekakeru to iimashita.',
        english: 'Tanaka said he will go out tonight. (indirect)'
      },
      {
        japanese: 'たなかさんは「こんばん わたしは でかけます」といいました。',
        romaji: 'Tanaka-san wa "Konban watashi wa dekakemasu" to iimashita.',
        english: 'Tanaka said, "Tonight I will go out." (direct quote)'
      },
    ],
  },
  {
    title: '～でしょう？: right?, isn\'t it?',
    pattern: 'Plain form + でしょう？',
    explanation: 'Used to confirm information you already think is true, or to seek agreement from the listener. Rising intonation at the end. Expresses expectation of agreement.',
    examples: [
      {
        japanese: 'この りんご、おいしいでしょう？',
        romaji: 'Kono ringo, oishii deshou?',
        english: 'This apple is delicious, isn\'t it?'
      },
      {
        japanese: 'あした パーティーが あるでしょう？',
        romaji: 'Ashita paatii ga aru deshou?',
        english: 'There\'s a party tomorrow, right?'
      },
    ],
  },
  {
    title: '～で Nがあります: N takes place at ~',
    pattern: 'Place + で + Event + が + あります',
    explanation: 'Used when events, gatherings, or incidents occur at a location. The noun must be an event (party, festival, meeting, accident, etc.). で marks the location where the event takes place. Different from Nに Nがあります used for existence.',
    examples: [
      {
        japanese: 'うんどうじょうで サッカーの しあいが あります。',
        romaji: 'Undoujou de sakkaa no shiai ga arimasu.',
        english: 'There is a soccer match at the stadium.'
      },
      {
        japanese: 'らいしゅう きょうとで おまつりが あります。',
        romaji: 'Raishuu Kyouto de omatsuri ga arimasu.',
        english: 'There will be a festival in Kyoto next week.'
      },
    ],
  },
  {
    title: '～でも: something like, for example',
    pattern: 'N + でも',
    explanation: 'Gives a typical example or suggestion from a category. Used when making suggestions or expressing wishes to others. Softens the suggestion by implying "or something like that."',
    examples: [
      {
        japanese: 'ちょっと ビールでも のみませんか。',
        romaji: 'Chotto biiru demo nomimasen ka.',
        english: 'Shall we drink something like beer?'
      },
      {
        japanese: 'やすみの ひは えいがでも みます。',
        romaji: 'Yasumi no hi wa eiga demo mimasu.',
        english: 'On my day off, I watch something like a movie.'
      },
    ],
  },
];

