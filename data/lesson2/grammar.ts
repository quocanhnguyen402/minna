import { GrammarItem } from '../../src/types/lesson.types';

export const lesson2Grammar: GrammarItem[] = [
    {
        title: "1. Confirmation Questions: ～は Nですか",
        pattern: "A: ～は Nですか。\nB: はい、Nです。/ はい、そうです。\n   いいえ、Nじゃありません。/ いいえ、N₁です。/ いいえ、ちがいます。",
        explanation: "When asking confirmation questions, you can answer with 'はい、そうです' instead of 'はい、Nです'. To answer negatively, you can use 'いいえ、ちがいます' or 'いいえ、N₁です' instead of 'いいえ、Nじゃありません'.",
        examples: [
            {
                japanese: "A: これは しんぶんですか。B: はい、そうです。",
                romaji: "A: Kore wa shinbun desu ka. B: Hai, sō desu.",
                english: "A: Is this a newspaper? B: Yes, it is."
            },
            {
                japanese: "A: あなたは じゅうはっさいですか。B: いいえ、はたちです。",
                romaji: "A: Anata wa jūhassai desu ka. B: Iie, hatachi desu.",
                english: "A: Are you 18 years old? B: No, I'm 20."
            },
            {
                japanese: "A: それは シャープペンシルですか。B: いいえ、ちがいます。",
                romaji: "A: Sore wa shāpupenshiru desu ka. B: Iie, chigaimasu.",
                english: "A: Is that a mechanical pencil? B: No, it's not."
            }
        ]
    },
    {
        title: "2. Choice Questions: ～か、～か",
        pattern: "A: ～は N₁ですか、N₂ですか。\nB: N₁です。/ N₂です。",
        explanation: "This is a choice question asking whether it's N₁ or N₂. For this type of question, you typically choose one of the options provided by the questioner.",
        examples: [
            {
                japanese: "A: これは しんぶんですか、ざっしですか。B: しんぶんです。",
                romaji: "A: Kore wa shinbun desu ka, zasshi desu ka. B: Shinbun desu.",
                english: "A: Is this a newspaper or a magazine? B: It's a newspaper."
            },
            {
                japanese: "A: あなたは じゅうはっさいですか、はたちですか。B: わたしは はたちです。",
                romaji: "A: Anata wa jūhassai desu ka, hatachi desu ka. B: Watashi wa hatachi desu.",
                english: "A: Are you 18 or 20 years old? B: I'm 20 years old."
            }
        ]
    },
    {
        title: "3. Demonstratives: これ、それ、あれ / この、その、あの",
        pattern: "これ・それ・あれ\nこのN・そのN・あのN",
        explanation: "これ、それ、あれ are used only for things. このN、そのN、あのN can be used for both people and things, and always accompany a noun. これ/このN: thing near the speaker; それ/そのN: thing near the listener; あれ/あのN: thing far from both speaker and listener.",
        examples: [
            {
                japanese: "これは かさです。",
                romaji: "Kore wa kasa desu.",
                english: "This is an umbrella."
            },
            {
                japanese: "あれは たなかさんの くるまです。",
                romaji: "Are wa Tanaka-san no kuruma desu.",
                english: "That over there is Tanaka's car."
            },
            {
                japanese: "あのかたは やまだせんせいです。",
                romaji: "Ano kata wa Yamada-sensei desu.",
                english: "That person over there is Professor Yamada."
            },
            {
                japanese: "このほんは にほんごの ほんじゃありません。",
                romaji: "Kono hon wa nihongo no hon ja arimasen.",
                english: "This book is not a Japanese book."
            }
        ]
    },
    {
        title: "4. N₂の N₁ - Question Word: なん",
        pattern: "A: ～は なんの N₁ですか。\nB: ～は N₂の N₁です。",
        explanation: "なんのN₁ is used to ask about characteristics or type. N₂ typically represents words indicating characteristics or categories.",
        examples: [
            {
                japanese: "A: これは なんの ほんですか。B: にほんごの ほんです。",
                romaji: "A: Kore wa nan no hon desu ka. B: Nihongo no hon desu.",
                english: "A: What kind of book is this? B: It's a Japanese book."
            },
            {
                japanese: "やまださんは おとこの せんせいです。",
                romaji: "Yamada-san wa otoko no sensei desu.",
                english: "Mr. Yamada is a male teacher."
            }
        ]
    },
    {
        title: "5. N₂の N₁ - Question Word: だれ",
        pattern: "A: ～は だれの N₁ですか。\nB: ～は N₂の N₁です。",
        explanation: "だれの is used to ask about possession. N₂ typically refers to people.",
        examples: [
            {
                japanese: "A: これは だれの ほんですか。B: わたしの ほんです。",
                romaji: "A: Kore wa dare no hon desu ka. B: Watashi no hon desu.",
                english: "A: Whose book is this? B: It's my book."
            },
            {
                japanese: "あれは たなかさんの じしょです。",
                romaji: "Are wa Tanaka-san no jisho desu.",
                english: "That's Tanaka's dictionary."
            }
        ]
    },
    {
        title: "6. N₂の [N₁] - Omitting N₁",
        pattern: "N₂の N₁です。→ 〇 N₂のです。(when N₁ is a thing)\n✖ N₂のです。(when N₁ is a person)",
        explanation: "In N₂の N₁です, N₁ can be omitted when N₁ has already appeared and is a noun referring to things. の can substitute for nouns referring to things but cannot be used for nouns referring to people.",
        examples: [
            {
                japanese: "A: あれは だれの ほんですか。B: ミラーさんのです。",
                romaji: "A: Are wa dare no hon desu ka. B: Mirā-san no desu.",
                english: "A: Whose book is that? B: It's Miller's."
            },
            {
                japanese: "A: このかばんは あなたのですか。B: いいえ、わたしのじゃ ありません。",
                romaji: "A: Kono kaban wa anata no desu ka. B: Iie, watashi no ja arimasen.",
                english: "A: Is this bag yours? B: No, it's not mine."
            },
            {
                japanese: "A: ミラーさんは IMCの しゃいんですか。B: はい、IMCの しゃいんです。(✖ はい、IMCのです。)",
                romaji: "A: Mirā-san wa IMC no shain desu ka. B: Hai, IMC no shain desu.",
                english: "A: Is Miller an IMC employee? B: Yes, he's an IMC employee. (Cannot substitute for person noun)"
            }
        ]
    },
    {
        title: "7. そうですか",
        pattern: "そうですか",
        explanation: "Used when the speaker receives information and expresses understanding. Although it ends with か, it's not a question but an interjection. そうですか is pronounced with falling intonation at the end.",
        examples: [
            {
                japanese: "A: この かさは あなたのですか。B: いいえ、ちがいます。さとうさんのです。A: そうですか。",
                romaji: "A: Kono kasa wa anata no desu ka. B: Iie, chigaimasu. Satō-san no desu. A: Sō desu ka.",
                english: "A: Is this umbrella yours? B: No, it's not. It's Sato's. A: I see."
            }
        ]
    }
];

