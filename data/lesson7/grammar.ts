import { GrammarItem } from '../../src/types/lesson.types';

export const lesson7Grammar: GrammarItem[] = [
  {
    title: 'Means/Method Particle で (with, by)',
    pattern: '～は N₁で N₂を V',
    explanation: 'The particle で indicates the tool, instrument, or method by which an action is performed. なんで means "by what means" or "with what".',
    examples: [
      {
        japanese: 'ベトナムじんは はしで ごはんを たべます。',
        romaji: 'Betonamu-jin wa hashi de gohan o tabemasu.',
        english: 'Vietnamese people eat rice with chopsticks.'
      },
      {
        japanese: 'A: なんで レポートを おくりましたか。B: Eメールで おくりました。',
        romaji: 'A: Nande repooto o okurimashita ka. B: E-meeru de okurimashita.',
        english: 'A: How did you send the report? B: I sent it by email.'
      }
    ]
  },
  {
    title: 'Asking for Translation',
    pattern: '"Word/Phrase" は ～ごで なんですか',
    explanation: 'Use this pattern to ask how to say a word or phrase in another language.',
    examples: [
      {
        japanese: 'A: これは にほんごで なんですか。B: 「パソコン」です。',
        romaji: 'A: Kore wa nihongo de nan desu ka. B: "Pasokon" desu.',
        english: 'A: What is this in Japanese? B: It\'s "pasokon".'
      },
      {
        japanese: 'A: 「ありがとう」は えいごで なんですか。B: 「Thank you」です。',
        romaji: 'A: "Arigatou" wa eigo de nan desu ka. B: "Thank you" desu.',
        english: 'A: What is "arigatou" in English? B: It\'s "Thank you".'
      }
    ]
  },
  {
    title: 'Indirect Object Particle に',
    pattern: '～は N₁に N₂を V',
    explanation: 'The particle に marks the indirect object - the recipient of a one-directional action. It indicates the target of the action.',
    examples: [
      {
        japanese: 'わたしは かみに なまえを かきます。',
        romaji: 'Watashi wa kami ni namae o kakimasu.',
        english: 'I write my name on the paper.'
      },
      {
        japanese: 'こんばん ははに でんわを かけます。',
        romaji: 'Konban haha ni denwa o kakemasu.',
        english: 'I will call my mother tonight.'
      }
    ]
  },
  {
    title: 'あげます (to give)',
    pattern: 'Giver は Receiver に Object を あげます',
    explanation: 'あげます means "to give/present". It is used when someone gives something to someone else. Do not use あげます when others give to you.',
    examples: [
      {
        japanese: 'わたしは ともだちに えんぴつを あげました。',
        romaji: 'Watashi wa tomodachi ni enpitsu o agemashita.',
        english: 'I gave a pencil to my friend.'
      },
      {
        japanese: 'まつもとさんは はらだせんせいに フランスのワインを あげました。',
        romaji: 'Matsumoto-san wa Harada-sensei ni furansu no wain o agemashita.',
        english: 'Ms. Matsumoto gave French wine to Mr. Harada.'
      }
    ]
  },
  {
    title: 'くれます (to give to me)',
    pattern: 'Giver が [わたしに] Object を くれます',
    explanation: 'くれます means "to give (to me or my family)". Use くれます only when others give something to you or your family members. わたしに can be omitted: N₁が Nを くれました.',
    examples: [
      {
        japanese: 'せんせいは わたしに ほんを くれました。',
        romaji: 'Sensei wa watashi ni hon o kuremashita.',
        english: 'The teacher gave me a book.'
      },
      {
        japanese: 'ちちは わたしに とけいを くれました。',
        romaji: 'Chichi wa watashi ni tokei o kuremashita.',
        english: 'My father gave me a watch.'
      }
    ]
  },
  {
    title: 'もらいます (to receive)',
    pattern: 'Receiver は Giver に Object を もらいます',
    explanation: 'もらいます means "to receive". It describes someone receiving something from someone else. Do not use もらいます to say that others received something from you.',
    examples: [
      {
        japanese: 'わたしは ちちに とけいを もらいました。',
        romaji: 'Watashi wa chichi ni tokei o moraimashita.',
        english: 'I received a watch from my father.'
      },
      {
        japanese: 'ナムさんは せんせいに じしょを もらいました。',
        romaji: 'Namu-san wa sensei ni jisho o moraimashita.',
        english: 'Nam received a dictionary from the teacher.'
      }
    ]
  },
  {
    title: 'もう～Vました / まだ～Vません (already/not yet)',
    pattern: 'もう～Vました / まだ～Vません',
    explanation: 'もう～Vました means "already did ~". まだ～Vません means "haven\'t done ~ yet". When using Vません alone, it means you definitely won\'t do the action. Adding まだ means you haven\'t done it yet but might do it in the future.',
    examples: [
      {
        japanese: 'A: もう ひるごはんを たべましたか。B: はい、もう たべました。',
        romaji: 'A: Mou hirugohan o tabemashita ka. B: Hai, mou tabemashita.',
        english: 'A: Have you eaten lunch yet? B: Yes, I\'ve already eaten.'
      },
      {
        japanese: 'A: テレーザちゃんは もう ねましたか。B: いいえ、まだです。',
        romaji: 'A: Tereeza-chan wa mou nemashita ka. B: Iie, mada desu.',
        english: 'A: Has Teresa gone to bed yet? B: No, not yet.'
      }
    ]
  }
];

