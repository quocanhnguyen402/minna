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

        const withCategory = vocabulary.filter(item => item.category === category);
        const withoutCategory = vocabulary.filter(item => !item.category);
        
        let filteredWithoutCategory: VocabularyItem[] = [];
        if (withoutCategory.length > 0) {
            switch (category) {
                case 'verb':
                    filteredWithoutCategory = this.filterVerbs(withoutCategory);
                    break;
                case 'noun':
                    filteredWithoutCategory = this.filterNouns(withoutCategory);
                    break;
                case 'adjective':
                    filteredWithoutCategory = this.filterAdjectives(withoutCategory);
                    break;
            }
        }
        
        return [...withCategory, ...filteredWithoutCategory];
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
