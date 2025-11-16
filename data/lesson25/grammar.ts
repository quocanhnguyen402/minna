import { GrammarItem } from '../../src/types/lesson.types';

export const lesson25Grammar: GrammarItem[] = [
  {
    title: '～たら (if, conditional)',
    pattern: 'Plain past form + ら',
    explanation: 'Expresses a hypothetical condition ("if"). All forms conjugate to past tense + ら. Often used with もし (if) for emphasis. Used for hypothetical situations that may or may not happen.',
    examples: [
      {
        japanese: 'もし お金が あったら、何を したいですか',
        romaji: 'moshi okane ga attara, nani o shitai desu ka',
        english: 'If you had money, what would you want to do?'
      },
      {
        japanese: 'もし お金が あったら、新しい車を 買いたいです',
        romaji: 'moshi okane ga attara, atarashii kuruma o kaitai desu',
        english: 'If I had money, I would want to buy a new car.'
      },
      {
        japanese: 'もし 暇だったら、うみへ 釣りを しに 行きたいです',
        romaji: 'moshi hima dattara, umi e tsuri o shi ni ikitai desu',
        english: 'If I were free, I would want to go fishing at the beach.'
      }
    ]
  },
  {
    title: '～Vたら (when, after)',
    pattern: 'Vた + ら',
    explanation: 'Expresses "when" or "after" for actions that will certainly happen. Emphasizes that when V₁ occurs, V₂ will definitely occur. Different from conditional たら - this is about sequential events, not hypotheticals.',
    examples: [
      {
        japanese: '12時に なったら、昼ごはんを 食べます',
        romaji: 'jūni-ji ni nattara, hirugohan o tabemasu',
        english: 'When it becomes 12 o\'clock, I will eat lunch.'
      },
      {
        japanese: '卒業したら、何をしますか。…卒業したら、結婚したいと思います',
        romaji: 'sotsugyō shitara, nani o shimasu ka. ...sotsugyō shitara, kekkon shitai to omoimasu',
        english: 'What will you do after graduation? ...After graduation, I want to get married.'
      }
    ]
  },
  {
    title: '～ても (even if, although)',
    pattern: 'て-form + も',
    explanation: 'Expresses "even if" or "although". Conjugate all forms to て-form + も. Often used with いくら (no matter how much) for emphasis, meaning "even if/no matter how much".',
    examples: [
      {
        japanese: 'いくら 痛くても、歯医者の所へ 行きたくないです',
        romaji: 'ikura itakutemo, haisha no tokoro e ikitakunai desu',
        english: 'No matter how much it hurts, I don\'t want to go to the dentist.'
      },
      {
        japanese: '毎朝、雨が 降っても、ハイキングを しています',
        romaji: 'maiasa, ame ga futtemo, haikingu o shite imasu',
        english: 'Every morning, even if it rains, I go hiking.'
      }
    ]
  },
  {
    title: 'Subject Particle in Subordinate Clauses',
    pattern: '～が in subordinate clauses',
    explanation: 'In subordinate clauses (with てから, とき, と, まえに, たら, ても, etc.), the subject is marked with the particle が instead of は.',
    examples: [
      {
        japanese: '友達が 来る まえに、部屋を 掃除します',
        romaji: 'tomodachi ga kuru mae ni, heya o sōji shimasu',
        english: 'Before my friend comes, I clean the room.'
      },
      {
        japanese: '妻が 病気の とき、会社を 休みます',
        romaji: 'tsuma ga byōki no toki, kaisha o yasumimasu',
        english: 'When my wife is sick, I take off work.'
      }
    ]
  }
];

