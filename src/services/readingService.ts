import { ReadingLesson } from '../types/reading.types';

class ReadingService {
    private lessons: Map<number, ReadingLesson> = new Map();

    constructor() {
        this.loadLessons();
    }

    private loadLessons() {
        try {
            const lesson8 = require('../../data/lesson8/reading').lesson8Reading;
            this.lessons.set(8, lesson8);
        } catch (error) {
            console.error('Error loading reading lessons:', error);
            if (error instanceof Error) {
                console.error('Full error details:', error.message);
                console.error('Stack trace:', error.stack);
            }
        }
    }

    getAvailableLessons(): number[] {
        return Array.from(this.lessons.keys()).sort((a, b) => a - b);
    }

    getLesson(lessonNumber: number): ReadingLesson | null {
        return this.lessons.get(lessonNumber) || null;
    }

    getPassage(lessonNumber: number, passageId: string) {
        const lesson = this.getLesson(lessonNumber);
        if (!lesson) return null;
        
        return lesson.passages.find(p => p.id === passageId) || null;
    }

    getAllPassages(lessonNumber: number) {
        const lesson = this.getLesson(lessonNumber);
        return lesson ? lesson.passages : [];
    }
}

export default new ReadingService();