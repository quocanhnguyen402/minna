import { GrammarItem } from '../../src/types/lesson.types';

export const lesson14Grammar: GrammarItem[] = [
  {
    title: 'Verb groups classification',
    pattern: 'Group I (う-verbs), Group II (る-verbs), Group III (irregular)',
    explanation: 'Japanese verbs are classified into three groups based on their conjugation patterns. Group I verbs end with い-row + ます. Group II verbs end with え-row + ます plus special い-row verbs. Group III has only きます and します.',
    examples: [
      {
        japanese: 'いきます、かきます、およぎます (Group I)',
        romaji: 'ikimasu, kakimasu, oyogimasu',
        english: 'Group I verbs (う-verbs)'
      },
      {
        japanese: 'たべます、みます、おきます (Group II)',
        romaji: 'tabemasu, mimasu, okimasu',
        english: 'Group II verbs (る-verbs)'
      },
    ],
  },
  {
    title: 'Te-form conjugation',
    pattern: 'Verb ます → Verb て',
    explanation: 'The て-form is essential for many grammar patterns. Group I: い/ち/り→って, み/び/に→んで, き/ぎ→いて/いで, し→して. Group II: remove ます, add て. Group III: きます→きて, します→して.',
    examples: [
      {
        japanese: 'かきます → かいて',
        romaji: 'kakimasu → kaite',
        english: 'write'
      },
      {
        japanese: 'よみます → よんで',
        romaji: 'yomimasu → yonde',
        english: 'read'
      },
    ],
  },
  {
    title: '～Vてください: please do',
    pattern: 'Vて + ください',
    explanation: 'Used to make polite requests. The speaker asks the listener to perform an action. Often preceded by すみませんが for extra politeness.',
    examples: [
      {
        japanese: 'すみませんが、でんきを つけてください。',
        romaji: 'Sumimasen ga, denki wo tsukete kudasai.',
        english: 'Excuse me, please turn on the light.'
      },
      {
        japanese: 'みなさん、ここに なまえを かいてください。',
        romaji: 'Minasan, koko ni namae wo kaite kudasai.',
        english: 'Everyone, please write your name here.'
      },
    ],
  },
  {
    title: 'Vかた: how to do',
    pattern: 'V(stem) + かた',
    explanation: 'Creates a noun meaning "how to do" or "way of doing" something. The verb stem is the ます-form minus ます. The resulting phrase is a noun and uses の instead of を when connecting.',
    examples: [
      {
        japanese: 'かんじの かきかたを ならいます。',
        romaji: 'Kanji no kakikata wo naraimasu.',
        english: 'I learn how to write kanji.'
      },
      {
        japanese: 'この ことばの よみかたを おしえてください。',
        romaji: 'Kono kotoba no yomikata wo oshiete kudasai.',
        english: 'Please teach me how to read this word.'
      },
    ],
  },
  {
    title: '～Vましょうか: shall I do?',
    pattern: 'V(stem) + ましょうか',
    explanation: 'Used to offer to do something for someone. The speaker proposes performing an action for the listener. The response can be はい、おねがいします (yes please) or けっこうです (no thank you).',
    examples: [
      {
        japanese: 'しゃしんを とりましょうか。',
        romaji: 'Shashin wo torimashou ka.',
        english: 'Shall I take a photo (for you)?'
      },
      {
        japanese: 'てつだいましょうか。',
        romaji: 'Tetsudaimashou ka.',
        english: 'Shall I help?'
      },
    ],
  },
  {
    title: '～Vています: progressive/continuous',
    pattern: 'Vて + います',
    explanation: 'Describes an action currently in progress at the moment of speaking. Often used with いま (now). This is the present progressive tense.',
    examples: [
      {
        japanese: 'なにを していますか。',
        romaji: 'Nani wo shite imasu ka.',
        english: 'What are you doing?'
      },
      {
        japanese: 'しんぶんを よんでいます。',
        romaji: 'Shinbun wo yonde imasu.',
        english: 'I\'m reading a newspaper.'
      },
    ],
  },
  {
    title: 'Nが V: describing natural phenomena',
    pattern: 'N + が + V',
    explanation: 'When describing natural phenomena or events perceived through senses, use が to mark the subject. This objectively conveys observations without personal involvement.',
    examples: [
      {
        japanese: 'あめが ふっています。',
        romaji: 'Ame ga futte imasu.',
        english: 'It\'s raining.'
      },
      {
        japanese: 'ミラーさんが いませんね。',
        romaji: 'Miraa-san ga imasen ne.',
        english: 'Mr. Miller isn\'t here, is he?'
      },
    ],
  },
];

