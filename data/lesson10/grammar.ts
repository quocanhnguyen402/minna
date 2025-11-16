import { GrammarItem } from '../../src/types/lesson.types';

export const lesson10Grammar: GrammarItem[] = [
  {
    title: '～に N が います/あります (There is N at ~)',
    pattern: 'Place に N が います/あります',
    explanation: 'Used to express the existence of a person, animal, or thing at a certain location. います is used for people and animals. あります is used for inanimate objects. The particle が marks the subject that exists. Question words: なに (what), だれ (who). Note: Do not use は after question words.',
    examples: [
      {
        japanese: 'つくえの うえに ほんが あります。',
        romaji: 'Tsukue no ue ni hon ga arimasu.',
        english: 'There is a book on the desk.'
      },
      {
        japanese: 'はこの なかに ねこが います。',
        romaji: 'Hako no naka ni neko ga imasu.',
        english: 'There is a cat in the box.'
      },
      {
        japanese: 'A: うけつけに だれが いますか。B: きむらさんが います。',
        romaji: 'A: Uketsuke ni dare ga imasu ka. B: Kimura-san ga imasu.',
        english: 'A: Who is at the reception desk? B: Kimura is there.'
      }
    ]
  },
  {
    title: 'N は～に います/あります (N is at ~)',
    pattern: 'N は Place に います/あります',
    explanation: 'Used to indicate the location of a specific person or thing that both the speaker and listener know about. This pattern emphasizes where something or someone is located. Question word: どこ (where).',
    examples: [
      {
        japanese: 'A: にほんごの ほんは どこに ありますか。B: つくえの うえに あります。',
        romaji: 'A: Nihongo no hon wa doko ni arimasu ka. B: Tsukue no ue ni arimasu.',
        english: 'A: Where is the Japanese book? B: It\'s on the desk.'
      },
      {
        japanese: 'A: ねこは どこに いますか。B: はこの なかに います。',
        romaji: 'A: Neko wa doko ni imasu ka. B: Hako no naka ni imasu.',
        english: 'A: Where is the cat? B: It\'s in the box.'
      }
    ]
  },
  {
    title: 'Position Words',
    pattern: 'N₁(person/thing/place) の Position',
    explanation: 'Position words indicate spatial relationships. Common position words: うえ (on, above), した (under, below), まえ (in front), うしろ (behind), みぎ (right), ひだり (left), なか (inside), そと (outside), そば (beside, near), となり (next to, adjacent), ちかく (near), あいだ (between).',
    examples: [
      {
        japanese: 'わたしの うちは こうえんの ちかくに あります。',
        romaji: 'Watashi no uchi wa kouen no chikaku ni arimasu.',
        english: 'My house is near the park.'
      },
      {
        japanese: 'ミラーさんは かいぎしつに います。',
        romaji: 'Miraa-san wa kaigishitsu ni imasu.',
        english: 'Mr. Miller is in the meeting room.'
      }
    ]
  },
  {
    title: '～N₁ と N₂ の あいだ～ (between N₁ and N₂)',
    pattern: 'N₁ と N₂ の あいだ',
    explanation: 'Used to express that something is located between two specific things or people.',
    examples: [
      {
        japanese: 'わたしのうちは ほんやと こうえんの あいだに あります。',
        romaji: 'Watashi no uchi wa hon\'ya to kouen no aida ni arimasu.',
        english: 'My house is between the bookstore and the park.'
      },
      {
        japanese: 'ミラーさんと はらださんの あいだに たなかさんが います。',
        romaji: 'Miraa-san to Harada-san no aida ni Tanaka-san ga imasu.',
        english: 'Tanaka is between Miller and Harada.'
      }
    ]
  },
  {
    title: 'N₁ や N₂ [など] (N₁ and N₂, [etc.])',
    pattern: 'N₁ や N₂ [など]',
    explanation: 'Used to list nouns as examples. や connects items in a non-exhaustive list. など (etc.) is often added after the last item to indicate there are more examples. など comes before appropriate particles depending on the verb.',
    examples: [
      {
        japanese: 'へやの なかに テレビや れいぞうこなどが あります。',
        romaji: 'Heya no naka ni terebi ya reizouko nado ga arimasu.',
        english: 'In the room there are things like a TV and a refrigerator.'
      },
      {
        japanese: 'スーパーで にくや たまごなどを かいました。',
        romaji: 'Suupaa de niku ya tamago nado o kaimashita.',
        english: 'At the supermarket I bought things like meat and eggs.'
      }
    ]
  }
];

