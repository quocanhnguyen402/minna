import { GrammarItem } from '../../src/types/lesson.types';

export const lesson4Grammar: GrammarItem[] = [
  {
    title: 'Telling Time (Hours and Minutes)',
    pattern: '―じ / ―ふん（―ぷん） / はん',
    explanation: 'Used to tell time. なんじ (what time) and なんぷん (how many minutes). はん means "half past" and is always used with the hour (e.g., にじはん = 2:30).',
    examples: [
      {
        japanese: 'A: いま なんじ なんぷんですか。B: しちじ さんじゅっぷんです。/ しちじ はんです。',
        romaji: 'A: Ima nanji nanpun desu ka. B: Shichiji sanjuppun desu. / Shichiji han desu.',
        english: 'A: What time is it now? B: It is 7:30.'
      },
      {
        japanese: 'A: にほんは いま なんじですか。B: くじです。',
        romaji: 'A: Nihon wa ima nanji desu ka. B: Kuji desu.',
        english: 'A: What time is it in Japan now? B: It is 9 o\'clock.'
      }
    ]
  },
  {
    title: 'Verb Conjugations (Past, Present, Future)',
    pattern: 'Verb ます / ません / ました / ませんでした',
    explanation: 'Japanese verbs conjugate to indicate tense and positive/negative forms. ます (present/future positive), ません (present/future negative), ました (past positive), ませんでした (past negative).',
    examples: [
      {
        japanese: 'はたらきます / はたらきません / はたらきました / はたらきませんでした',
        romaji: 'hatarakimasu / hatarakimasen / hatarakimashita / hatarakimasen deshita',
        english: 'work / do not work / worked / did not work'
      },
      {
        japanese: 'べんきょう します / べんきょう しません / べんきょう しました / べんきょう しませんでした',
        romaji: 'benkyou shimasu / benkyou shimasen / benkyou shimashita / benkyou shimasen deshita',
        english: 'study / do not study / studied / did not study'
      }
    ]
  },
  {
    title: 'Time Particle に',
    pattern: 'Time に Verb',
    explanation: 'The particle に marks a specific point in time when an action occurs. It means "at" or "on" in English.',
    examples: [
      {
        japanese: 'A: まいあさ なんじに おきますか。B: ６じに おきます。',
        romaji: 'A: Maiasa nanji ni okimasu ka. B: Rokuji ni okimasu.',
        english: 'A: What time do you wake up every morning? B: I wake up at 6 o\'clock.'
      },
      {
        japanese: 'A: まいばん なんじに ねますか。B: １１じに ねます。',
        romaji: 'A: Maiban nanji ni nemasu ka. B: Juuichiji ni nemasu.',
        english: 'A: What time do you go to bed every night? B: I go to bed at 11 o\'clock.'
      }
    ]
  },
  {
    title: 'Time Range: から…まで',
    pattern: 'Time₁ から Time₂ まで',
    explanation: 'から indicates the starting point and まで indicates the ending point of time or location. They mean "from...to/until". They can be used separately and don\'t always need to accompany a verb.',
    examples: [
      {
        japanese: 'A: あなたは まいしゅう なんようびから なんようびまで べんきょう しますか。B: げつようびから きんようびまで べんきょう します。',
        romaji: 'A: Anata wa maishuu nanyoubi kara nanyoubi made benkyou shimasu ka. B: Getsuyoubi kara kinyoubi made benkyou shimasu.',
        english: 'A: What days of the week do you study? B: I study from Monday to Friday.'
      },
      {
        japanese: 'ぎんこうは ９じからです。',
        romaji: 'Ginkou wa kuji kara desu.',
        english: 'The bank opens from 9 o\'clock.'
      }
    ]
  },
  {
    title: 'Conjunction Particle と (and)',
    pattern: 'N₁ と N₂',
    explanation: 'The particle と connects two nouns of equal status, meaning "and".',
    examples: [
      {
        japanese: 'ぎんこうの やすみは どようびと にちようびです。',
        romaji: 'Ginkou no yasumi wa doyoubi to nichiyoubi desu.',
        english: 'The bank is closed on Saturday and Sunday.'
      },
      {
        japanese: 'A: としょかんは なんがいですか。B: ３がいと ４かいです。',
        romaji: 'A: Toshokan wa nangai desu ka. B: Sangai to yonkai desu.',
        english: 'A: What floor is the library on? B: The 3rd and 4th floors.'
      }
    ]
  },
  {
    title: 'Sentence-ending Particle ね',
    pattern: '～ね',
    explanation: 'ね at the end of a sentence expresses the speaker\'s expectation of agreement from the listener, or is used for confirmation or reminder. Similar to "isn\'t it?" or "right?" in English.',
    examples: [
      {
        japanese: 'A: まいにち 10じまで はたらきます。B: たいへんですね。',
        romaji: 'A: Mainichi juuji made hatarakimasu. B: Taihen desu ne.',
        english: 'A: I work until 10 o\'clock every day. B: That\'s tough, isn\'t it?'
      },
      {
        japanese: 'A: やまださんの でんわばんごうは 871の 6813です。B: 871の 6813ですね。',
        romaji: 'A: Yamada-san no denwa bangou wa 871 no 6813 desu. B: 871 no 6813 desu ne.',
        english: 'A: Mr. Yamada\'s phone number is 871-6813. B: 871-6813, right?'
      }
    ]
  },
  {
    title: 'Asking for Phone Numbers',
    pattern: 'A: ～は なんばんですか。B: ～は ～です。',
    explanation: 'なんばん means "what number". Phone numbers are read digit by digit. For long numbers, use の to separate groups.',
    examples: [
      {
        japanese: 'A: としょかんの でんわばんごうは なんばんですか。B: ゼロはちの ろくななはちの ななはちきゅうです。',
        romaji: 'A: Toshokan no denwa bangou wa nanban desu ka. B: Zero hachi no rokunana hachi no nana hachi kyuu desu.',
        english: 'A: What is the library\'s phone number? B: 08-678-789.'
      },
      {
        japanese: 'A: やまだせんせいの けいたいでんわの ばんごうは なんばんですか。B: ゼロきゅうゼロきゅうの ななゼロななの ななゼロはちです。',
        romaji: 'A: Yamada-sensei no keitai denwa no bangou wa nanban desu ka. B: Zero kyuu zero kyuu no nana zero nana no nana zero hachi desu.',
        english: 'A: What is Mr. Yamada\'s mobile phone number? B: 0909-707-708.'
      }
    ]
  }
];

