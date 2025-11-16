

export type VocabularyCategory = 
    | 'noun'           // Nouns (people, places, things)
    | 'verb'           // Verbs (action words ending in ~masu)
    | 'adjective'      // Adjectives (i-adjectives, na-adjectives)
    | 'pronoun'        // Pronouns (this, that, I, you)
    | 'adverb'         // Adverbs (time, manner)
    | 'particle'       // Particles (wa, ga, o, etc.)
    | 'expression'     // Expressions, phrases, greetings
    | 'suffix'         // Suffixes (san, chan, jin, etc.)
    | 'prefix'         // Prefixes
    | 'counter'        // Counters (for counting objects)
    | 'conjunction'    // Conjunctions (but, and, or)
    | 'interjection'   // Interjections (oh!, ah!)
    | 'other';         // Other categories

export interface VocabularyItem {
    japanese: string;
    kanji: string;
    romaji: string;
    meaning: string;
    category: VocabularyCategory;
}

export interface GrammarExample {
    japanese: string;
    romaji: string;
    english: string;
}

export interface GrammarItem {
    title: string;
    pattern: string;
    explanation: string;
    examples: GrammarExample[];
}

export interface LessonData {
    lessonNumber: number;
    vocabulary: VocabularyItem[];
    grammar: GrammarItem[];
}
