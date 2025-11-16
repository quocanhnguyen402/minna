import { GrammarItem } from '../../src/types/lesson.types';

export const lesson9Grammar: GrammarItem[] = [
  {
    title: 'Particle が with Emotion/Degree Adjectives',
    pattern: '～は N が A (emotion/degree)',
    explanation: 'The particle が is used with adjectives expressing emotions, preferences, abilities, and degrees of understanding. Question word: なに.',
    examples: [
      {
        japanese: 'わたしは かんじが へたです。',
        romaji: 'Watashi wa kanji ga heta desu.',
        english: 'I am poor at kanji.'
      },
      {
        japanese: 'A: あなたは なにが きらいですか。B: わたしは たばこが きらいです。',
        romaji: 'A: Anata wa nani ga kirai desu ka. B: Watashi wa tabako ga kirai desu.',
        english: 'A: What do you dislike? B: I dislike cigarettes.'
      }
    ]
  },
  {
    title: '～N が あります (to have)',
    pattern: '～は N が あります',
    explanation: 'Used to express possession or availability. The particle が marks the object that is possessed. Question word: なに.',
    examples: [
      {
        japanese: 'わたしは おかねが ありません。',
        romaji: 'Watashi wa okane ga arimasen.',
        english: 'I don\'t have money.'
      },
      {
        japanese: 'やまださんは たかいくるまが あります。',
        romaji: 'Yamada-san wa takai kuruma ga arimasu.',
        english: 'Yamada has an expensive car.'
      }
    ]
  },
  {
    title: '～N が わかります (to understand)',
    pattern: '～は N が わかります',
    explanation: 'Used to express understanding or knowledge. The particle が marks what is understood. Question word: なに.',
    examples: [
      {
        japanese: 'はらださんは えいごが わかります。',
        romaji: 'Harada-san wa eigo ga wakarimasu.',
        english: 'Harada understands English.'
      },
      {
        japanese: 'わたしは なにも わかりません。',
        romaji: 'Watashi wa nanimo wakarimasen.',
        english: 'I don\'t understand anything.'
      }
    ]
  },
  {
    title: 'Adverbs of Degree and Quantity',
    pattern: 'Adverb + V/A',
    explanation: 'Adverbs modify verbs or adjectives to express degree or quantity. Degree adverbs (affirmative): よく, だいたい, すこし. Degree adverbs (negative): あまり, ぜんぜん. Quantity adverbs (affirmative): たくさん, すこし. Quantity adverbs (negative): あまり, ぜんぜん.',
    examples: [
      {
        japanese: 'えいごが よく わかります。',
        romaji: 'Eigo ga yoku wakarimasu.',
        english: 'I understand English well.'
      },
      {
        japanese: 'えいごが すこし わかります。',
        romaji: 'Eigo ga sukoshi wakarimasu.',
        english: 'I understand a little English.'
      },
      {
        japanese: 'えいごが あまり わかりません。',
        romaji: 'Eigo ga amari wakarimasen.',
        english: 'I don\'t understand English very well.'
      },
      {
        japanese: 'おかねが たくさん あります。',
        romaji: 'Okane ga takusan arimasu.',
        english: 'I have a lot of money.'
      },
      {
        japanese: 'おかねが ぜんぜん ありません。',
        romaji: 'Okane ga zenzen arimasen.',
        english: 'I have no money at all.'
      },
      {
        japanese: 'ここは すこし さむいです。',
        romaji: 'Koko wa sukoshi samui desu.',
        english: 'It\'s a little cold here.'
      },
      {
        japanese: 'あの えいがは ぜんぜん おもしろくないです。',
        romaji: 'Ano eiga wa zenzen omoshirokunai desu.',
        english: 'That movie is not interesting at all.'
      }
    ]
  },
  {
    title: 'どうして～か / ～から (why / because)',
    pattern: 'どうして～か。～から。',
    explanation: 'どうして is a question word asking for a reason ("why"). から indicates a reason or cause ("because"). When answering a どうして question, you can use どうしてですか to avoid repeating the previous statement. から can also connect clauses to show cause and effect.',
    examples: [
      {
        japanese: 'A: どうして きのう はやく かえりましたか。B: ようじが ありましたから。',
        romaji: 'A: Doushite kinou hayaku kaerimashita ka. B: Youji ga arimashita kara.',
        english: 'A: Why did you go home early yesterday? B: Because I had some business to attend to.'
      },
      {
        japanese: 'A: どうして たべませんか。B: けさ もう あさごはんを たべましたから。',
        romaji: 'A: Doushite tabemasen ka. B: Kesa mou asagohan o tabemashita kara.',
        english: 'A: Why don\'t you eat? B: Because I already ate breakfast this morning.'
      },
      {
        japanese: 'じかんが ありませんから、しんぶんを よみません。',
        romaji: 'Jikan ga arimasen kara, shinbun o yomimasen.',
        english: 'Because I don\'t have time, I don\'t read the newspaper.'
      }
    ]
  },
  {
    title: 'どんな A (what kind of)',
    pattern: 'どんな A',
    explanation: 'どんな N can ask about characteristics (as learned in Lesson 8), but also about category or type. When answering, provide a specific name or type.',
    examples: [
      {
        japanese: 'A: どんな スポーツが すきですか。B: サッカーが すきです。',
        romaji: 'A: Donna supootsu ga suki desu ka. B: Sakkaa ga suki desu.',
        english: 'A: What kind of sport do you like? B: I like soccer.'
      }
    ]
  }
];

