import { GrammarItem } from '../../src/types/lesson.types';

export const lesson3Grammar: GrammarItem[] = [
    {
        title: "1. Location Words: ここ、そこ、あそこ (and こちら、そちら、あちら)",
        pattern: "ここ・そこ・あそこ (casual)\nこちら・そちら・あちら (polite)\nどこ？ (casual) / どちら？ (polite)",
        explanation: "ここ、そこ、あそこ and こちら、そちら、あちら are used to indicate places. こちら、そちら、あちら are the polite forms of ここ、そこ、あそこ. Additionally, こちら、そちら、あちら can be used to indicate directions.",
        examples: [
            {
                japanese: "ここは かいぎしつです。",
                romaji: "Koko wa kaigishitsu desu.",
                english: "This place is a conference room."
            },
            {
                japanese: "あちらは びょういんです。",
                romaji: "Achira wa byōin desu.",
                english: "That direction is the hospital."
            }
        ]
    },
    {
        title: "2. Location Sentence Patterns",
        pattern: "ここは Nです。(This place is N)\nNは ここです。(N is here)",
        explanation: "These patterns are used to indicate locations. The topic and the location word can switch positions depending on what you want to emphasize.",
        examples: [
            {
                japanese: "ここは わたしの うちです。",
                romaji: "Koko wa watashi no uchi desu.",
                english: "This is my house."
            },
            {
                japanese: "わたしの うちは ここです。",
                romaji: "Watashi no uchi wa koko desu.",
                english: "My house is here."
            }
        ]
    },
    {
        title: "3. Questions with Location Question Words",
        pattern: "A: ～は どこですか。/ ～は どちらですか。\nB: ～は ここです。/ ～は こちらです。",
        explanation: "どこ (casual) and どちら (polite) are used to ask about locations. どこ means 'where' and どちら means 'which direction' or 'where (polite)'.",
        examples: [
            {
                japanese: "A: かいだんは どこですか。B: そこです。",
                romaji: "A: Kaidan wa doko desu ka. B: Soko desu.",
                english: "A: Where are the stairs? B: Over there."
            },
            {
                japanese: "A: すみません、うけつけは どちらですか。B: あちらです。",
                romaji: "A: Sumimasen, uketsuke wa dochira desu ka. B: Achira desu.",
                english: "A: Excuse me, where is the reception desk? B: It's over there."
            }
        ]
    },
    {
        title: "4. Question Word: どちら",
        pattern: "A: ～は どちらですか。\nB: ～は Nです。",
        explanation: "どちら has three main meanings: (1) Used to ask about places (polite form of どこ), (2) Used to ask about directions, (3) Used to ask about country names, schools, companies, etc.",
        examples: [
            {
                japanese: "A: おくには どちらですか。B: わたしの くには ベトナムです。",
                romaji: "A: Okuni wa dochira desu ka. B: Watashi no kuni wa Betonamu desu.",
                english: "A: What is your country? B: My country is Vietnam."
            },
            {
                japanese: "A: だいがくは どちらですか。B: ふじ だいがくです。",
                romaji: "A: Daigaku wa dochira desu ka. B: Fuji daigaku desu.",
                english: "A: What is your university? B: It's Fuji University."
            }
        ]
    },
    {
        title: "5. Demonstrative System: こそあど",
        pattern: "Ko-group / So-group / A-group / Do-group",
        explanation: "Japanese demonstratives follow the ko-so-a-do pattern:\n- Objects: これ / それ / あれ / どれ (Lesson 16)\n- Objects/People: この N / その N / あの N / どの N (Lesson 16)\n- Locations: ここ / そこ / あそこ / どこ\n- Directions/Locations (polite): こちら / そちら / あちら / どちら",
        examples: []
    },
    {
        title: "6. N₂の N₁ - Question Word: どこ",
        pattern: "A: ～は どこの Nですか。\nB: ～は N₁の Nです。",
        explanation: "どこのN is used to ask about origin or source. N₁ typically refers to place names.",
        examples: [
            {
                japanese: "A: これは どこの ワインですか。B: フランスの ワインです。",
                romaji: "A: Kore wa doko no wain desu ka. B: Furansu no wain desu.",
                english: "A: Where is this wine from? B: It's French wine."
            },
            {
                japanese: "あれは ドイツの くるまです。",
                romaji: "Are wa Doitsu no kuruma desu.",
                english: "That is a German car."
            }
        ]
    },
    {
        title: "7. Asking and Counting Floors",
        pattern: "A: ～は なんがいですか。\nB: ～は ～かいです。/ ～がいです。",
        explanation: "The ground floor is counted as the 1st floor. For basement floors, use ちか before the floor number. Example: Basement 1st floor → ちかいっかい",
        examples: [
            {
                japanese: "A: とけいうりばは なんがいですか。B: さんがいです。",
                romaji: "A: Tokei uriba wa nangai desu ka. B: Sangai desu.",
                english: "A: What floor is the watch department on? B: On the third floor."
            },
            {
                japanese: "A: ほんやは なんがいですか。B: ちか にかいです。",
                romaji: "A: Hon'ya wa nangai desu ka. B: Chika nikai desu.",
                english: "A: What floor is the bookstore on? B: On the second basement floor."
            }
        ]
    },
    {
        title: "8. Asking About Prices",
        pattern: "A: ～は いくらですか。\nB: ～は ～えんです。/ ドルです。/ ドンです。",
        explanation: "いくら means 'how much'. When answering about prices, use numbers with currency units. Example: 80,000 dong → はちまん ドン",
        examples: [
            {
                japanese: "A: このくつは いくらですか。B: はっぴゃくえんです。",
                romaji: "A: Kono kutsu wa ikura desu ka. B: Happyaku en desu.",
                english: "A: How much are these shoes? B: 800 yen."
            },
            {
                japanese: "A: あのてちょうは いくらですか。B: ごまんドンです。",
                romaji: "A: Ano techō wa ikura desu ka. B: Goman don desu.",
                english: "A: How much is that notebook? B: 50,000 dong."
            }
        ]
    }
];

