import { GrammarItem } from '../../src/types/lesson.types';

export const lesson23Grammar: GrammarItem[] = [
  {
    title: '～とき (when, at the time)',
    pattern: '[Plain form] + とき',
    explanation: 'Expresses "when" or "at the time of" an action or state. For verbs, tense matters: Vた + とき means the action happened before the main action; Vる + とき means the action happens after the main action. For adjectives and nouns, use their plain forms.',
    examples: [
      {
        japanese: '部屋を 出たとき、ドアを 閉めます',
        romaji: 'heya o deta toki, doa o shimemasu',
        english: 'When I leave the room, I close the door. (leave first, then close)'
      },
      {
        japanese: 'きのう、家へ帰るとき、パンを 買いました',
        romaji: 'kinō, ie e kaeru toki, pan o kaimashita',
        english: 'Yesterday, on my way home, I bought bread. (buy first, then go home)'
      },
      {
        japanese: '病気のとき、くすりを のまなければなりません',
        romaji: 'byōki no toki, kusuri o nomanakereba narimasen',
        english: 'When you\'re sick, you must take medicine.'
      }
    ]
  },
  {
    title: '～と (when, automatic result)',
    pattern: 'Plain form + と',
    explanation: 'Expresses an automatic, inevitable, or natural result. When one thing happens, another thing naturally follows. The second clause cannot express will, desire, request, or invitation.',
    examples: [
      {
        japanese: 'お酒を のむと、頭が いたく なります',
        romaji: 'osake o nomu to, atama ga itaku narimasu',
        english: 'When I drink alcohol, I get a headache.'
      },
      {
        japanese: 'このつまみを 右へ回すと、音が 大きく なりますよ',
        romaji: 'kono tsumami o migi e mawasu to, oto ga ōkiku narimasu yo',
        english: 'When you turn this knob to the right, the sound gets louder.'
      }
    ]
  },
  {
    title: '～を (space particle)',
    pattern: 'N を V',
    explanation: 'The particle を marks a space or area through which movement occurs. Used with verbs of movement like 歩く (walk), 渡る (cross), 散歩する (stroll), 飛ぶ (fly), etc.',
    examples: [
      {
        japanese: '公園を 散歩します',
        romaji: 'kōen o sanpo shimasu',
        english: 'I take a walk in the park.'
      },
      {
        japanese: '道を 渡ります',
        romaji: 'michi o watarimasu',
        english: 'I cross the road.'
      }
    ]
  }
];

