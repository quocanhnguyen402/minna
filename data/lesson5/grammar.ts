import { GrammarItem } from '../../src/types/lesson.types';

export const lesson5Grammar: GrammarItem[] = [
  {
    title: 'Movement Verbs: いきます, きます, かえります',
    pattern: 'いきます (to go) / きます (to come) / かえります (to return)',
    explanation: 'きます is used at the location where the speaker is present. かえります is used only when returning to familiar places like home, hometown, or country.',
    examples: [
      {
        japanese: 'わたしは きます。/ かれは いきます。',
        romaji: 'Watashi wa kimasu. / Kare wa ikimasu.',
        english: 'I will come. / He will go.'
      },
      {
        japanese: 'うちへ かえります。',
        romaji: 'Uchi e kaerimasu.',
        english: 'I will return home.'
      }
    ]
  },
  {
    title: 'Direction Particle へ',
    pattern: 'Place へ いきます / きます / かえります',
    explanation: 'The particle へ (read as "e") indicates direction. It is used with verbs of movement and means "to" or "toward".',
    examples: [
      {
        japanese: 'A: きのう どこへ いきましたか。B: としょかんへ いきました。',
        romaji: 'A: Kinou doko e ikimashita ka. B: Toshokan e ikimashita.',
        english: 'A: Where did you go yesterday? B: I went to the library.'
      },
      {
        japanese: 'A: あした どこへ いきますか。B: こいびとの うちへ いきます。',
        romaji: 'A: Ashita doko e ikimasu ka. B: Koibito no uchi e ikimasu.',
        english: 'A: Where will you go tomorrow? B: I will go to my lover\'s house.'
      }
    ]
  },
  {
    title: 'Negative Emphasis with も',
    pattern: 'どこも Verb ません',
    explanation: 'も is used to emphasize negation, meaning "not...anywhere/anyone/anything at all".',
    examples: [
      {
        japanese: 'A: こんしゅうの にちようび どこへ いきますか。B: いいえ、どこも いきません。',
        romaji: 'A: Konshuu no nichiyoubi doko e ikimasu ka. B: Iie, doko mo ikimasen.',
        english: 'A: Where are you going this Sunday? B: No, I\'m not going anywhere.'
      },
      {
        japanese: 'A: やすみのひ、どこへ いきましたか。B: どこも いきませんでした。',
        romaji: 'A: Yasumi no hi, doko e ikimashita ka. B: Doko mo ikimasen deshita.',
        english: 'A: Where did you go on your day off? B: I didn\'t go anywhere.'
      }
    ]
  },
  {
    title: 'Means of Transportation: で',
    pattern: 'Vehicle/Method で いきます',
    explanation: 'The particle で indicates the means or method by which something is done. なんで means "by what means?". Note: For walking, use あるいて without で.',
    examples: [
      {
        japanese: 'A: まいにち なんで がっこうへ いきますか。B: じてんしゃで がっこうへ いきます。',
        romaji: 'A: Mainichi nande gakkou e ikimasu ka. B: Jitensha de gakkou e ikimasu.',
        english: 'A: How do you go to school every day? B: I go to school by bicycle.'
      },
      {
        japanese: 'A: こんばん なんで うちへ かえりますか。B: あるいて かえります。',
        romaji: 'A: Konban nande uchi e kaerimasu ka. B: Aruite kaerimasu.',
        english: 'A: How will you go home tonight? B: I will walk home.'
      }
    ]
  },
  {
    title: 'Accompaniment Particle と',
    pattern: 'Person と Verb',
    explanation: 'The particle と means "with (someone)". だれと means "with whom?". When doing something alone, use ひとりで (not と).',
    examples: [
      {
        japanese: 'A: こんしゅうの にちようび、だれと こうえんへ いきますか。B: かぞくと いきます。',
        romaji: 'A: Konshuu no nichiyoubi, dare to kouen e ikimasu ka. B: Kazoku to ikimasu.',
        english: 'A: Who will you go to the park with this Sunday? B: I will go with my family.'
      },
      {
        japanese: 'A: まいにち だれと がっこうへ いきますか。B: ひとりで がっこうへ いきます。',
        romaji: 'A: Mainichi dare to gakkou e ikimasu ka. B: Hitori de gakkou e ikimasu.',
        english: 'A: Who do you go to school with every day? B: I go to school alone.'
      }
    ]
  },
  {
    title: 'Time Expressions (without に)',
    pattern: 'Time word (no particle) + Verb',
    explanation: 'Certain time words like きょう (today), きのう (yesterday), あした (tomorrow), せんしゅう (last week), こんしゅう (this week), etc., do not take the particle に.',
    examples: [
      {
        japanese: 'きのう としょかんへ いきました。',
        romaji: 'Kinou toshokan e ikimashita.',
        english: 'I went to the library yesterday.'
      },
      {
        japanese: 'らいしゅう とうきょうへ いきます。',
        romaji: 'Raishuu toukyou e ikimasu.',
        english: 'I will go to Tokyo next week.'
      }
    ]
  },
  {
    title: 'Counting Days and Months',
    pattern: 'Year / Month / Day / Day of Week',
    explanation: 'In Japanese, dates are expressed in the order: Year, Month, Day, Day of the week. なんがつ (what month), なんにち (what day).',
    examples: [
      {
        japanese: '2023ねん 7がつ 20にち もくようび',
        romaji: '2023-nen 7-gatsu 20-nichi mokuyoubi',
        english: 'Thursday, July 20, 2023'
      },
      {
        japanese: 'A: きょうは なんがつ なんにちですか。B: 4がつ 5にちです。',
        romaji: 'A: Kyou wa nangatsu nannichi desu ka. B: 4-gatsu 5-nichi desu.',
        english: 'A: What is the date today? B: It is April 5th.'
      }
    ]
  },
  {
    title: 'Question Word いつ (when)',
    pattern: 'いつ Verb ますか。',
    explanation: 'いつ is used to ask about time and means "when". It does not take the particle に.',
    examples: [
      {
        japanese: 'A: あなたの たんじょうびは いつですか。B: しちがつ はつかです。',
        romaji: 'A: Anata no tanjoubi wa itsu desu ka. B: Shichigatsu hatsuka desu.',
        english: 'A: When is your birthday? B: It is July 20th.'
      },
      {
        japanese: 'A: いつ にほんへ いきますか。B: ことしの しがつに にほんへ いきます。',
        romaji: 'A: Itsu nihon e ikimasu ka. B: Kotoshi no shigatsu ni nihon e ikimasu.',
        english: 'A: When will you go to Japan? B: I will go to Japan in April of this year.'
      }
    ]
  },
  {
    title: 'Sentence-ending Particle よ',
    pattern: '～よ',
    explanation: 'よ at the end of a sentence emphasizes information to the listener, similar to "you know" or adding emphasis in English.',
    examples: [
      {
        japanese: 'A: このでんしゃは こうしえんへ いきますか。B: いいえ、いきません。つぎの「ふつう」ですよ。',
        romaji: 'A: Kono densha wa koushien e ikimasu ka. B: Iie, ikimasen. Tsugi no "futsuu" desu yo.',
        english: 'A: Does this train go to Koshien? B: No, it doesn\'t. It\'s the next local train, you know.'
      }
    ]
  },
  {
    title: 'Acknowledging Agreement: そうですね',
    pattern: 'そうですね',
    explanation: 'そうですね expresses agreement or empathy with what the other person said, meaning "That\'s right" or "I agree". Note: そうですね (agreement with known information) ≠ そうですか (receiving new information).',
    examples: [
      {
        japanese: 'A: あしたは やすみですね。B: あ、そうですね。',
        romaji: 'A: Ashita wa yasumi desu ne. B: A, sou desu ne.',
        english: 'A: Tomorrow is a day off, isn\'t it? B: Oh, that\'s right.'
      }
    ]
  }
];

