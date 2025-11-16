import { GrammarItem } from '../../src/types/lesson.types';

export const lesson18Grammar: GrammarItem[] = [
  {
    title: 'Dictionary form (Vる)',
    pattern: 'Verb ます → Verb る',
    explanation: 'The dictionary form (plain present affirmative) is the basic form found in dictionaries. Group I: change い-row to う-row (かきます→かく). Group II: remove ます, add る (たべます→たべる). Group III: きます→くる, します→する.',
    examples: [
      {
        japanese: 'いきます → いく',
        romaji: 'ikimasu → iku',
        english: 'go'
      },
      {
        japanese: 'たべます → たべる',
        romaji: 'tabemasu → taberu',
        english: 'eat'
      },
    ],
  },
  {
    title: 'Vることができます: can do',
    pattern: 'V(dictionary form) + ことができます',
    explanation: 'Expresses ability or capability to do something. こと nominalizes the verb, making it a noun phrase meaning "the act of doing ~." This is more formal than potential verb forms learned later.',
    examples: [
      {
        japanese: 'カリナちゃんは かんじが できますか。',
        romaji: 'Karina-chan wa kanji ga dekimasu ka.',
        english: 'Can Karina read kanji?'
      },
      {
        japanese: 'はい、かんじを よむことが できます。',
        romaji: 'Hai, kanji wo yomu koto ga dekimasu.',
        english: 'Yes, she can read kanji.'
      },
    ],
  },
  {
    title: 'しゅみは Vることです: hobby',
    pattern: 'しゅみは V(dictionary form) + ことです',
    explanation: 'Used to describe hobbies. The verb is nominalized with こと. When answering "what is your hobby," you can respond with a noun or a nominalized verb phrase.',
    examples: [
      {
        japanese: 'あなたの しゅみは なんですか。',
        romaji: 'Anata no shumi wa nan desu ka.',
        english: 'What is your hobby?'
      },
      {
        japanese: 'ピアノを ひくことです。',
        romaji: 'Piano wo hiku koto desu.',
        english: 'It is playing the piano.'
      },
    ],
  },
  {
    title: 'Vるまえに: before doing',
    pattern: 'V(dictionary form) + まえに / Nの + まえに',
    explanation: 'Indicates an action occurs before another action. The verb before まえに is always in dictionary form regardless of the overall tense. With nouns, use の before まえに. Time duration + まえに means "~ ago."',
    examples: [
      {
        japanese: 'ねる まえに はを みがきました。',
        romaji: 'Neru mae ni ha wo migakimashita.',
        english: 'I brushed my teeth before going to bed.'
      },
      {
        japanese: 'しょくじの まえに てを あらいました。',
        romaji: 'Shokuji no mae ni te wo araimashita.',
        english: 'I washed my hands before the meal.'
      },
    ],
  },
  {
    title: 'なかなか～ない: not easily',
    pattern: 'なかなか + negative verb',
    explanation: 'Expresses that something doesn\'t happen easily despite efforts or expectations. Always used with negative forms. Conveys frustration or difficulty in achieving something.',
    examples: [
      {
        japanese: 'わたしは なんかいも きものの きかたを ならいましたが、なかなか きることが できません。',
        romaji: 'Watashi wa nankai mo kimono no kikata wo naraimashita ga, nakanaka kiru koto ga dekimasen.',
        english: 'I learned how to wear a kimono many times, but I still can\'t wear it.'
      },
      {
        japanese: 'しごとが たくさん ありますから、なかなか いえへ かえることが できません。',
        romaji: 'Shigoto ga takusan arimasu kara, nakanaka ie e kaeru koto ga dekimasen.',
        english: 'Since I have a lot of work, I can\'t easily go home.'
      },
    ],
  },
  {
    title: 'N₁を N₂に かえます: exchange',
    pattern: 'N₁(original) + を + N₂(result) + に + かえます',
    explanation: 'Expresses exchanging or changing one thing into another. に marks what something is changed into. Commonly used for currency exchange, language translation, or format conversion.',
    examples: [
      {
        japanese: 'ドルを えんに かえます。',
        romaji: 'Doru wo en ni kaemasu.',
        english: 'I exchange dollars into yen.'
      },
      {
        japanese: 'えいごを にほんごに かえます。',
        romaji: 'Eigo wo nihongo ni kaemasu.',
        english: 'I translate English into Japanese.'
      },
    ],
  },
];

