import { VocabularyItem } from '../types/lesson.types';
import lessonService from './lessonService';

class QuizService {

    public getVocabularyForLessons(lessonNumbers: number[]): VocabularyItem[] {
        const vocabulary: VocabularyItem[] = [];

        lessonNumbers.forEach(lessonNum => {
            const lessonVocab = lessonService.getLessonVocabulary(lessonNum);
            if (lessonVocab) {
                vocabulary.push(...lessonVocab);
            }
        });

        return vocabulary;
    }

    public getAllVocabulary(): VocabularyItem[] {
        const allLessons = lessonService.getAvailableLessons();
        return this.getVocabularyForLessons(allLessons);
    }

    public filterVocabulary(vocabulary: VocabularyItem[], filterType: string): VocabularyItem[] {
        const category = filterType.toLowerCase();

        const hasCategoryField = vocabulary.some(item => item.category !== undefined);
        
        if (hasCategoryField) {

            return vocabulary.filter(item => item.category === category);
        }

        switch (category) {
            case 'verb':
                return this.filterVerbs(vocabulary);
            case 'noun':
                return this.filterNouns(vocabulary);
            case 'adjective':
                return this.filterAdjectives(vocabulary);
            default:
                return vocabulary;
        }
    }

    private filterVerbs(vocabulary: VocabularyItem[]): VocabularyItem[] {
        return vocabulary.filter(item => {
            const meaning = item.meaning.toLowerCase();
            const romaji = item.romaji.toLowerCase();

            return meaning.includes('to ') ||
                   romaji.endsWith('ru') ||
                   romaji.endsWith('u') ||
                   romaji.endsWith('su') ||
                   romaji.endsWith('ku') ||
                   romaji.endsWith('gu') ||
                   romaji.endsWith('mu') ||
                   romaji.endsWith('bu') ||
                   romaji.endsWith('nu') ||
                   romaji.endsWith('tsu');
        });
    }

    private filterNouns(vocabulary: VocabularyItem[]): VocabularyItem[] {
        return vocabulary.filter(item => {
            const meaning = item.meaning.toLowerCase();
            const romaji = item.romaji.toLowerCase();

            return !meaning.includes('to ') &&
                   !romaji.endsWith('i') &&
                   !meaning.match(/\b(is|are|was|were)\b/);
        });
    }

    private filterAdjectives(vocabulary: VocabularyItem[]): VocabularyItem[] {
        return vocabulary.filter(item => {
            const romaji = item.romaji.toLowerCase();

            return romaji.endsWith('i') && !romaji.endsWith('shi');
        });
    }

    public getVocabularyStats(lessonNumbers?: number[]) {
        const vocabulary = lessonNumbers 
            ? this.getVocabularyForLessons(lessonNumbers)
            : this.getAllVocabulary();

        const categoryCount: Record<string, number> = {};
        vocabulary.forEach(item => {
            categoryCount[item.category] = (categoryCount[item.category] || 0) + 1;
        });

        return {
            total: vocabulary.length,
            categories: categoryCount,

            verbs: this.filterVerbs(vocabulary).length,
            nouns: this.filterNouns(vocabulary).length,
            adjectives: this.filterAdjectives(vocabulary).length
        };
    }
}

export default new QuizService();
