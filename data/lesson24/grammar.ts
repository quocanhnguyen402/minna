import { GrammarItem } from '../../src/types/lesson.types';

export const lesson24Grammar: GrammarItem[] = [
  {
    title: '～Vてあげます (do for someone)',
    pattern: 'Vて + あげます',
    explanation: 'Someone does an action for the benefit of someone else. The subject (doer) performs the action, and the recipient is marked with に. Cannot be used when others do something for you.',
    examples: [
      {
        japanese: 'カリナさんは おばあさんに 荷物を 運んであげます',
        romaji: 'karina-san wa obāsan ni nimotsu o hakonde agemasu',
        english: 'Karina carries the luggage for the old lady.'
      },
      {
        japanese: '日曜日、私は 母に 料理を 手伝ってあげます',
        romaji: 'nichiyōbi, watashi wa haha ni ryōri o tetsudatte agemasu',
        english: 'On Sunday, I help my mother with cooking.'
      }
    ]
  },
  {
    title: '～Vてもらいます (receive favor)',
    pattern: 'Vて + もらいます',
    explanation: 'Someone receives a favor or benefit from someone else doing an action. The recipient (beneficiary) is the subject, and the doer is marked with に. Expresses gratitude. Cannot be used when others receive something from you.',
    examples: [
      {
        japanese: '私は カリナさんに スキーの やり方を 教えてもらいました',
        romaji: 'watashi wa karina-san ni sukī no yarikata o oshiete moraimashita',
        english: 'I had Karina teach me how to ski. / Karina taught me how to ski (and I\'m grateful).'
      },
      {
        japanese: '私達は 店の人に 写真を とってもらいました',
        romaji: 'watashitachi wa mise no hito ni shashin o totte moraimashita',
        english: 'We had the shop staff take our photo. / The shop staff took our photo (for us).'
      }
    ]
  },
  {
    title: '～Vてくれます (someone does for me)',
    pattern: 'Vて + くれます',
    explanation: 'Someone does something for the speaker or the speaker\'s family. The doer is marked with が. Used only when the beneficiary is yourself or your close family. Can omit わたしに, in which case the subject takes が.',
    examples: [
      {
        japanese: '姉が この犬を 買ってくれましたよ',
        romaji: 'ane ga kono inu o katte kuremashita yo',
        english: 'My older sister bought this dog for me.'
      },
      {
        japanese: 'ママが 送ってくれましたよ',
        romaji: 'mama ga okutte kuremashita yo',
        english: 'Mom sent it to me.'
      }
    ]
  },
  {
    title: 'Usage of ～てもらいます vs ～てくれます',
    pattern: 'Comparison of receiving help',
    explanation: 'Both express receiving help, but differ in subject/perspective. てくれます: used only for yourself or close family, emphasizes the giver\'s kindness/voluntariness. てもらいます: more universal, can be used for anyone, expresses higher gratitude, emphasizes the receiver needed/requested the action.',
    examples: [
      {
        japanese: '母は 私に 料理を 作ってくれます',
        romaji: 'haha wa watashi ni ryōri o tsukutte kuremasu',
        english: 'My mother cooks for me. (emphasis on mother\'s kindness)'
      },
      {
        japanese: '私は 母に 料理を 作ってもらいます',
        romaji: 'watashi wa haha ni ryōri o tsukutte moraimasu',
        english: 'I have my mother cook for me. (emphasis on receiving the favor)'
      }
    ]
  }
];

