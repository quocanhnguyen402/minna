import { GrammarItem } from '../../src/types/lesson.types';

export const lesson15Grammar: GrammarItem[] = [
  {
    title: '～Vてもいいです: may do, allowed to do',
    pattern: 'Vて + も + いいです／かまいません',
    explanation: 'Used to ask for or give permission to do something. も means "even if" and いいです means "it\'s okay." The pattern literally means "even if you do ~, it\'s okay." かまいません is a more formal alternative.',
    examples: [
      {
        japanese: 'すみませんが、タバコを すってもいいですか。',
        romaji: 'Sumimasen ga, tabako wo sutte mo ii desu ka.',
        english: 'Excuse me, may I smoke?'
      },
      {
        japanese: 'はい、どうぞ。',
        romaji: 'Hai, douzo.',
        english: 'Yes, please go ahead.'
      },
    ],
  },
  {
    title: '～Vてはいけません: must not do, prohibited',
    pattern: 'Vて + は + いけません／だめです',
    explanation: 'Used to express prohibition or state that something is not allowed. だめです is a more casual alternative. This is the negative counterpart to Vてもいいです.',
    examples: [
      {
        japanese: 'ここで でんわを つかってはいけませんよ。',
        romaji: 'Koko de denwa wo tsukatte wa ikemasen yo.',
        english: 'You must not use the phone here.'
      },
      {
        japanese: 'そとに ごみを すてては いけません。',
        romaji: 'Soto ni gomi wo sutete wa ikemasen.',
        english: 'You must not throw garbage outside.'
      },
    ],
  },
  {
    title: 'Permission patterns',
    pattern: 'Vてもいいですか / Vても かまいませんか',
    explanation: 'Complete pattern for asking permission and giving/refusing permission. To refuse politely, say すみません、ちょっと… instead of directly using いけません.',
    examples: [
      {
        japanese: 'せんせい、こんばん おふろに はいってもいいですか。',
        romaji: 'Sensei, konban ofuro ni haitte mo ii desu ka.',
        english: 'Doctor, may I take a bath tonight?'
      },
      {
        japanese: 'はい、はいっても かまいません。',
        romaji: 'Hai, haitte mo kamaimasen.',
        english: 'Yes, you may take a bath.'
      },
    ],
  },
  {
    title: '～Vています: resultant state/habitual action',
    pattern: 'Vて + います',
    explanation: 'Besides expressing ongoing actions (Lesson 14), Vています also expresses: ① resultant states (being married, knowing, living somewhere), ② habitual/repeated actions (working, selling). Note: しります becomes しっています (know), but negative is しりません.',
    examples: [
      {
        japanese: 'わたしは けっこんしています。',
        romaji: 'Watashi wa kekkon shite imasu.',
        english: 'I am married.'
      },
      {
        japanese: 'わたしは たなかさんを しっています。',
        romaji: 'Watashi wa Tanaka-san wo shitte imasu.',
        english: 'I know Mr./Ms. Tanaka.'
      },
    ],
  },
  {
    title: 'Nに V: location after action',
    pattern: 'N(location) + に + V',
    explanation: 'The particle に marks the location where the subject ends up after performing the action. Used with verbs like はいります (enter), すわります (sit), のります (board), のぼります (climb), つきます (arrive).',
    examples: [
      {
        japanese: 'ここに はいっては いけません。',
        romaji: 'Koko ni haitte wa ikemasen.',
        english: 'You must not enter here.'
      },
      {
        japanese: 'この いすに すわっても いいですか。',
        romaji: 'Kono isu ni suwatte mo ii desu ka.',
        english: 'May I sit in this chair?'
      },
    ],
  },
  {
    title: 'N₁に N₂を V: object placement',
    pattern: 'N₁(location) + に + N₂(object) + を + V',
    explanation: 'Pattern for placing or locating an object at a specific location. に marks where N₂ ends up after the action V. Common with verbs like おきます (place), とめます (park), かきます (write).',
    examples: [
      {
        japanese: 'ここに くるまを とめて ください。',
        romaji: 'Koko ni kuruma wo tomete kudasai.',
        english: 'Please park your car here.'
      },
      {
        japanese: 'ここに じゅうしょを かいて ください。',
        romaji: 'Koko ni juusho wo kaite kudasai.',
        english: 'Please write your address here.'
      },
    ],
  },
];

