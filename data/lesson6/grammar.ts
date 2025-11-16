import { GrammarItem } from '../../src/types/lesson.types';

export const lesson6Grammar: GrammarItem[] = [
  {
    title: 'Object Particle を (Transitive Verbs)',
    pattern: 'N を V',
    explanation: 'The particle を marks the direct object of a transitive verb. The noun before を is the object that receives the action of the verb.',
    examples: [
      {
        japanese: 'わたしは パンを たべます。',
        romaji: 'Watashi wa pan o tabemasu.',
        english: 'I eat bread.'
      },
      {
        japanese: 'みずを のみます。',
        romaji: 'Mizu o nomimasu.',
        english: 'I drink water.'
      }
    ]
  },
  {
    title: 'N を します (do N)',
    pattern: 'N を します',
    explanation: 'します is a versatile verb meaning "to do". It can be used with various nouns to express doing work, playing sports, organizing events, and more. N をします means "do/play/organize N".',
    examples: [
      {
        japanese: 'しごとを します。',
        romaji: 'Shigoto o shimasu.',
        english: 'I do work.'
      },
      {
        japanese: 'サッカーを します。',
        romaji: 'Sakkaa o shimasu.',
        english: 'I play soccer.'
      },
      {
        japanese: 'パーティーを します。',
        romaji: 'Paatii o shimasu.',
        english: 'I organize a party.'
      },
      {
        japanese: 'でんわを します。',
        romaji: 'Denwa o shimasu.',
        english: 'I make a phone call.'
      }
    ]
  },
  {
    title: 'Question Word なに (what)',
    pattern: 'なにを V ますか',
    explanation: 'なに and なん both mean "what". なに is typically used with verbs. Important: Do not use なんに in written form.',
    examples: [
      {
        japanese: 'A: ゆうべ、なにを しましたか。B: えいがを みました。',
        romaji: 'A: Yuube, nani o shimashita ka. B: Eiga o mimashita.',
        english: 'A: What did you do last night? B: I watched a movie.'
      },
      {
        japanese: 'A: けさ、なにを たべましたか。B: なにも たべませんでした。',
        romaji: 'A: Kesa, nani o tabemashita ka. B: Nani mo tabemasen deshita.',
        english: 'A: What did you eat this morning? B: I didn\'t eat anything.'
      }
    ]
  },
  {
    title: 'なん vs なに Usage',
    pattern: 'なん～ / なに～',
    explanation: 'Use なん before words starting with た、だ、な rows (e.g., なんで、なんの、なんと) and before counters (e.g., なんさい、なんじ、なんぷん、なんにち). Use なに in other cases. Note: なんで can mean both "by what means" and "why". To avoid confusion when asking about means, use なにで.',
    examples: [
      {
        japanese: 'なんの ほんですか。',
        romaji: 'Nan no hon desu ka.',
        english: 'What kind of book is it?'
      },
      {
        japanese: 'テレーザちゃんは なんさいですか。',
        romaji: 'Tereeza-chan wa nansai desu ka.',
        english: 'How old is Teresa?'
      },
      {
        japanese: 'なにを たべますか。',
        romaji: 'Nani o tabemasu ka.',
        english: 'What will you eat?'
      }
    ]
  },
  {
    title: 'Location Particle で (at, in)',
    pattern: 'Place で V',
    explanation: 'The particle で indicates the location where an action takes place. どこで means "where" (at which place).',
    examples: [
      {
        japanese: 'わたしは うちで ごはんを たべます。',
        romaji: 'Watashi wa uchi de gohan o tabemasu.',
        english: 'I eat meals at home.'
      },
      {
        japanese: 'やまださんは としょかんで ほんを よみます。',
        romaji: 'Yamada-san wa toshokan de hon o yomimasu.',
        english: 'Mr. Yamada reads books at the library.'
      }
    ]
  },
  {
    title: 'Accompaniment Particle と (with)',
    pattern: 'Person と V',
    explanation: 'The particle と means "with (someone)". だれと means "with whom".',
    examples: [
      {
        japanese: 'あした こいびとと えいがを みます。',
        romaji: 'Ashita koibito to eiga o mimasu.',
        english: 'Tomorrow I will watch a movie with my lover.'
      },
      {
        japanese: 'A: だれと ベトナムへ きましたか。B: かぞくと きました。',
        romaji: 'A: Dare to betonamu e kimashita ka. B: Kazoku to kimashita.',
        english: 'A: Who did you come to Vietnam with? B: I came with my family.'
      }
    ]
  },
  {
    title: 'Invitation: ～Vませんか',
    pattern: '[いっしょに] ～Vませんか',
    explanation: 'Use this pattern to invite someone to do something together. ～Vませんか is a polite invitation, not a negative question. Use this when you\'re unsure if the other person will agree. When actively accepting an invitation, respond with ～Vましょう.',
    examples: [
      {
        japanese: 'A: こんしゅうのにちようび、いっしょに はなみを しませんか。B: いいですね。いきましょう。',
        romaji: 'A: Konshuu no nichiyoubi, issho ni hanami o shimasen ka. B: Ii desu ne. Ikimashou.',
        english: 'A: Shall we go cherry blossom viewing together this Sunday? B: That sounds great. Let\'s go.'
      },
      {
        japanese: 'A: あした いっしょに いなかへ かえりませんか。B: すみません、ちょっと。。。',
        romaji: 'A: Ashita issho ni inaka e kaerimasen ka. B: Sumimasen, chotto...',
        english: 'A: Would you like to go back to the countryside with me tomorrow? B: Sorry, but...'
      }
    ]
  },
  {
    title: 'Suggestion/Proposal: ～Vましょう',
    pattern: '～Vましょう',
    explanation: '～Vましょう is used to actively suggest or propose doing something together, or to enthusiastically accept an invitation. ～Vましょう is more casual/friendly than ～Vませんか, which is more respectful.',
    examples: [
      {
        japanese: 'ちょっと やすみましょう。',
        romaji: 'Chotto yasumimashou.',
        english: 'Let\'s take a short break.'
      },
      {
        japanese: 'A: いっしょに ばんごはんを たべませんか。B: ええ、たべましょう。',
        romaji: 'A: Issho ni bangohan o tabemasen ka. B: Ee, tabemashou.',
        english: 'A: Would you like to have dinner together? B: Yes, let\'s eat.'
      }
    ]
  },
  {
    title: 'Sentence-ending Particle か (acknowledgment)',
    pattern: '～か。',
    explanation: 'When か is used at the end of a sentence with falling intonation, it\'s not a question but expresses acknowledgment of new information, similar to そうですか.',
    examples: [
      {
        japanese: 'A: にちようび きょうとへ いきました。B: きょうとですか。いいですね。',
        romaji: 'A: Nichiyoubi kyouto e ikimashita. B: Kyouto desu ka. Ii desu ne.',
        english: 'A: I went to Kyoto on Sunday. B: Kyoto, I see. That\'s nice.'
      }
    ]
  }
];

