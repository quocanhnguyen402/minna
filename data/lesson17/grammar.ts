import { GrammarItem } from '../../src/types/lesson.types';

export const lesson17Grammar: GrammarItem[] = [
  {
    title: 'Negative verb form (ない-form)',
    pattern: 'Vない conjugation',
    explanation: 'The ない-form is the negative plain form. Group I: change final い-row to あ-row + ない (いう→いわ→いわない). Group II: remove ます + ない. Group III: します→しない, きます→こない. Special: あります→ない.',
    examples: [
      {
        japanese: 'かきます → かかない',
        romaji: 'kakimasu → kakanai',
        english: 'write → do not write'
      },
      {
        japanese: 'たべます → たべない',
        romaji: 'tabemasu → tabenai',
        english: 'eat → do not eat'
      },
    ],
  },
  {
    title: 'Vないでください: please don\'t',
    pattern: 'Vない + でください',
    explanation: 'A polite request asking someone not to do something. This is softer than Vてはいけません (prohibition). Used when asking for cooperation or consideration.',
    examples: [
      {
        japanese: 'これから ビールを のまないでください。',
        romaji: 'Kore kara biiru wo nomanaide kudasai.',
        english: 'Please don\'t drink beer from now on.'
      },
      {
        japanese: 'さとうを いれないでください。',
        romaji: 'Satou wo irenaide kudasai.',
        english: 'Please don\'t add sugar.'
      },
    ],
  },
  {
    title: 'Vなくてもいいです: don\'t have to',
    pattern: 'Vない(～い→くて) + も + いいです',
    explanation: 'Expresses that it\'s okay not to do something; there\'s no obligation. Change the final い of ない to くて. Opposite of Vなければなりません (must do).',
    examples: [
      {
        japanese: 'じかんが ありますから、いそがなくてもいいです。',
        romaji: 'Jikan ga arimasu kara, isoganakute mo ii desu.',
        english: 'Since we have time, you don\'t have to hurry.'
      },
      {
        japanese: 'すずしいですから、エアコンを つけなくてもいいです。',
        romaji: 'Suzushii desu kara, eakon wo tsukenakute mo ii desu.',
        english: 'It\'s cool, so you don\'t have to turn on the air conditioner.'
      },
    ],
  },
  {
    title: 'Vなければなりません: must do',
    pattern: 'Vない(～い→ければ) + なりません',
    explanation: 'Expresses obligation or necessity; must do something. Change the final い of ない to ければ. More casual alternative: Vなきゃだめです. This indicates something required by rules, circumstances, or social expectations.',
    examples: [
      {
        japanese: 'あした テストが ありますから、こんばん べんきょうしなければなりません。',
        romaji: 'Ashita tesuto ga arimasu kara, konban benkyou shinakereba narimasen.',
        english: 'I have a test tomorrow, so I must study tonight.'
      },
      {
        japanese: 'びょうきですから、くすりを のまなければなりません。',
        romaji: 'Byouki desu kara, kusuri wo nomanakereba narimasen.',
        english: 'I\'m sick, so I must take medicine.'
      },
    ],
  },
  {
    title: '～までに: by (deadline)',
    pattern: 'Time + までに',
    explanation: 'Indicates a deadline by which an action must be completed. Different from まで (until), which indicates duration. までに emphasizes the point in time when something should be done.',
    examples: [
      {
        japanese: 'レポートは いつまでに ださなければなりませんか。',
        romaji: 'Repooto wa itsu made ni dasanakereba narimasen ka.',
        english: 'By when must I submit the report?'
      },
      {
        japanese: 'きんようびまでに だしてください。',
        romaji: 'Kinyoubi made ni dashite kudasai.',
        english: 'Please submit it by Friday.'
      },
    ],
  },
  {
    title: 'Object topicalization',
    pattern: 'Nを V → Nは V',
    explanation: 'When making the direct object the topic of discussion, replace the particle を with は and move the noun to the front of the sentence. This emphasizes or contrasts the object.',
    examples: [
      {
        japanese: 'ここに にもつを おかないで ください。→ にもつは ここに おかないで ください。',
        romaji: 'Koko ni nimotsu wo okanaide kudasai. → Nimotsu wa koko ni okanaide kudasai.',
        english: 'Please don\'t put luggage here. → As for luggage, please don\'t put it here.'
      },
      {
        japanese: 'ひるごはんを たべます。→ ひるごはんは かいしゃの しょくどうで たべます。',
        romaji: 'Hirugohan wo tabemasu. → Hirugohan wa kaisha no shokudou de tabemasu.',
        english: 'I eat lunch. → As for lunch, I eat it at the company cafeteria.'
      },
    ],
  },
];

