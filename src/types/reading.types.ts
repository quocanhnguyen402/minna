export interface ReadingPassage {
    id: string;
    title: string;
    difficulty: 'Beginner' | 'Beginner+' | 'Intermediate' | 'Advanced';
    icon: string;
    content: ReadingSentence[];
    comprehensionQuestions?: string[];
}

export interface ReadingSentence {
    words: WordBreakdown[];
}

export interface WordBreakdown {
    japanese: string;
    hiragana?: string;
    romaji?: string;
    english: string;
    type?: 'word' | 'particle' | 'punctuation';
}

export interface ReadingLesson {
    lessonNumber: number;
    title: string;
    grammarFocus: string[];
    passages: ReadingPassage[];
}