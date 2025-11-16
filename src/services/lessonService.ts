import { LessonData } from '../types/lesson.types';

import { vocabularyData, grammarData } from '../../data';

class LessonService {
    private lessons: Map<number, LessonData> = new Map();

    constructor() {
        this.initializeLessons();
    }

    private initializeLessons(): void {

        for (let i = 0; i < vocabularyData.length; i++) {
            const lessonNumber = i + 1; // Lessons start at 1
            this.lessons.set(lessonNumber, {
                lessonNumber,
                vocabulary: vocabularyData[i],
                grammar: grammarData[i]
            });
        }
    }

    public getLesson(lessonNumber: number): LessonData | null {
        return this.lessons.get(lessonNumber) || null;
    }

    public getAllLessons(): LessonData[] {
        return Array.from(this.lessons.values());
    }

    public getAvailableLessons(): number[] {
        return Array.from(this.lessons.keys()).sort((a, b) => a - b);
    }

    public getLessonVocabulary(lessonNumber: number) {
        const lesson = this.lessons.get(lessonNumber);
        return lesson ? lesson.vocabulary : null;
    }

    public getLessonGrammar(lessonNumber: number) {
        const lesson = this.lessons.get(lessonNumber);
        return lesson ? lesson.grammar : null;
    }
}

export default new LessonService();
