import { GrammarItem } from '../../src/types/lesson.types';

export const lesson1Grammar: GrammarItem[] = [
  {
    title: 'N です / N ではありません (じゃありません)',
    pattern: 'Affirmative: N です\nNegative: N ではありません / N じゃありません',
    explanation: 'です is used after a noun to form the predicate. It expresses judgment/affirmation and shows polite attitude to the listener. The negative form is ではありません (formal) or じゃありません (casual conversation).',
    examples: [
      {
        japanese: 'がくせいです。',
        romaji: 'gakusei desu.',
        english: 'I am a student.'
      },
      {
        japanese: 'やまだです。',
        romaji: 'yamada desu.',
        english: 'I am Yamada.'
      },
      {
        japanese: 'がくせいじゃありません。',
        romaji: 'gakusei ja arimasen.',
        english: 'I am not a student.'
      }
    ]
  },
  {
    title: 'は particle (topic marker)',
    pattern: '~ は ~',
    explanation: 'は marks the noun before it as the topic of the sentence. Used to introduce what the speaker wants to talk about. Can separate subject and predicate. Pronounced "wa" not "ha".',
    examples: [
      {
        japanese: 'わたしは はたちです。',
        romaji: 'watashi wa hatachi desu.',
        english: 'I am 20 years old.'
      },
      {
        japanese: 'わたしは がくせいじゃありません。',
        romaji: 'watashi wa gakusei ja arimasen.',
        english: 'I am not a student.'
      }
    ]
  },
  {
    title: 'Question sentences with か',
    pattern: '~ は N ですか。\n~ は N じゃありませんか。',
    explanation: 'か is placed at the end of a sentence to make it a question. Expresses uncertainty or doubt. The end of question sentences is pronounced with rising intonation.',
    examples: [
      {
        japanese: 'あなたは がくせいですか。',
        romaji: 'anata wa gakusei desu ka.',
        english: 'Are you a student?'
      },
      {
        japanese: 'たなかさんは いしゃじゃありませんか。',
        romaji: 'tanaka-san wa isha ja arimasen ka.',
        english: 'Isn\'t Mr. Tanaka a doctor?'
      }
    ]
  },
  {
    title: 'Yes/No confirmation questions',
    pattern: 'A: ～は N ですか。\nB: はい、N です。 / いいえ、N じゃありません。',
    explanation: 'Questions to confirm whether information is correct or incorrect. Answers must include はい (yes) or いいえ (no). When answering negatively, provide the correct information.',
    examples: [
      {
        japanese: 'A: シュミットさんは ドイツじんですか。\nB: はい、ドイツじんです。',
        romaji: 'A: shumitto-san wa doitsu-jin desu ka.\nB: hai, doitsu-jin desu.',
        english: 'A: Is Mr. Schmidt German?\nB: Yes, he is German.'
      },
      {
        japanese: 'A: あなたは じゅうはっさいですか。\nB: いいえ、わたしは はたちです。',
        romaji: 'A: anata wa juuhassai desu ka.\nB: iie, watashi wa hatachi desu.',
        english: 'A: Are you 18 years old?\nB: No, I am 20.'
      }
    ]
  },
  {
    title: 'WH-questions with interrogative words',
    pattern: 'A: ～は [interrogative] ですか。\nB: [answer] です。',
    explanation: 'Replace the content you want to ask about with an interrogative word (who, what, where, how old, etc.). Answers are direct without はい or いいえ.',
    examples: [
      {
        japanese: 'A: あの かたは どなたですか。\nB: やまださんです。',
        romaji: 'A: ano kata wa donata desu ka.\nB: yamada-san desu.',
        english: 'A: Who is that person?\nB: That\'s Ms. Yamada.'
      },
      {
        japanese: 'A: あなたは なんさいですか。\nB: わたしは はたちです。',
        romaji: 'A: anata wa nan-sai desu ka.\nB: watashi wa hatachi desu.',
        english: 'A: How old are you?\nB: I am 20.'
      }
    ]
  },
  {
    title: 'も particle (also, too)',
    pattern: '~ も ~',
    explanation: 'Used when there is a repeated element from the previous sentence. When the repeated element disappears, も also disappears. も replaces は in the same position.',
    examples: [
      {
        japanese: 'たなかさんは じゅうはっさいです。やまださんも じゅうはっさいですか。',
        romaji: 'tanaka-san wa juuhassai desu. yamada-san mo juuhassai desu ka.',
        english: 'Tanaka is 18. Is Yamada also 18?'
      },
      {
        japanese: 'わたしは がくせいじゃありません。はらださんも がくせいじゃありません。',
        romaji: 'watashi wa gakusei ja arimasen. harada-san mo gakusei ja arimasen.',
        english: 'I am not a student. Harada is also not a student.'
      }
    ]
  },
  {
    title: 'の particle (possessive/affiliation)',
    pattern: 'N₁ の N₂',
    explanation: 'の connects two nouns. N₂ is the main idea, N₁ modifies N₂. In lesson 1, N₁ indicates affiliation or belonging of N₂.',
    examples: [
      {
        japanese: 'ふじだいがくの がくせいです。',
        romaji: 'fuji daigaku no gakusei desu.',
        english: 'Student of Fuji University.'
      },
      {
        japanese: 'さくらだいがくの せんせいです。',
        romaji: 'sakura daigaku no sensei desu.',
        english: 'Teacher of Sakura University.'
      }
    ]
  },
  {
    title: 'Asking age: なんさい / おいくつ',
    pattern: '~は なんさいですか。 / ~は おいくつですか。',
    explanation: 'Use なんさい or おいくつ to ask someone\'s age. おいくつ is the more polite way to ask age.',
    examples: [
      {
        japanese: 'A: やまだせんせいは おいくつですか。\nB: やまだせんせいは よんじゅっさいです。',
        romaji: 'A: yamada-sensei wa oikutsu desu ka.\nB: yamada-sensei wa yonjussai desu.',
        english: 'A: How old is Teacher Yamada?\nB: Teacher Yamada is 40.'
      },
      {
        japanese: 'A: あなたは なんさいですか。\nB: にじゅういっさいです。',
        romaji: 'A: anata wa nan-sai desu ka.\nB: nijuuissai desu.',
        english: 'A: How old are you?\nB: I am 21.'
      }
    ]
  },
  {
    title: '～さん、～ちゃん honorific suffixes',
    pattern: 'N さん',
    explanation: 'さん is used after the family name or given name of the listener or a third person. Never use after your own name. For children, use ちゃん with a more intimate nuance. ちゃん can be used for both boys and girls.',
    examples: [
      {
        japanese: 'あの かたは ワットさんです。',
        romaji: 'ano kata wa watto-san desu.',
        english: 'That person is Mr. Watt.'
      },
      {
        japanese: 'A: タワポンさんは がくせいですか。\nB: はい、がくせいです。',
        romaji: 'A: tawapon-san wa gakusei desu ka.\nB: hai, gakusei desu.',
        english: 'A: Is Mr. Thawaphon a student?\nB: Yes, he is a student.'
      }
    ]
  }
];

