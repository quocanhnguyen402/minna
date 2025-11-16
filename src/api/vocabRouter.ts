import { Router, Request, Response } from 'express';
import quizService from '../services/quizService';

const router = Router();

router.get('/stats', (req: Request, res: Response) => {
    const lessonNumbers = req.query.lessons as string;
    
    let stats;
    if (lessonNumbers) {
        const lessons = lessonNumbers.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
        stats = quizService.getVocabularyStats(lessons);
    } else {
        stats = quizService.getVocabularyStats();
    }

    res.json({
        success: true,
        data: stats
    });
});

router.get('/lessons', (req: Request, res: Response) => {
    const lessonNumbers = req.query.lessons as string;
    const filter = req.query.filter as string;

    if (!lessonNumbers) {
        return res.status(400).json({
            success: false,
            error: 'Please provide lesson numbers as query parameter (e.g., ?lessons=1,2,3)'
        });
    }

    const lessons = lessonNumbers.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    
    if (lessons.length === 0) {
        return res.status(400).json({
            success: false,
            error: 'Invalid lesson numbers provided'
        });
    }

    let vocabulary = quizService.getVocabularyForLessons(lessons);

    if (filter) {
        vocabulary = quizService.filterVocabulary(vocabulary, filter);
    }

    res.json({
        success: true,
        data: vocabulary,
        total: vocabulary.length,
        lessons: lessons,
        filter: filter || 'none'
    });
});

router.get('/:category', (req: Request, res: Response) => {
    const category = req.params.category;
    const lessonNumbers = req.query.lessons as string;

    let vocabulary = lessonNumbers
        ? quizService.getVocabularyForLessons(
            lessonNumbers.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n))
          )
        : quizService.getAllVocabulary();

    vocabulary = quizService.filterVocabulary(vocabulary, category);

    res.json({
        success: true,
        data: vocabulary,
        total: vocabulary.length,
        category: category
    });
});

router.get('/', (req: Request, res: Response) => {
    const filter = req.query.filter as string;
    let vocabulary = quizService.getAllVocabulary();

    if (filter) {
        vocabulary = quizService.filterVocabulary(vocabulary, filter);
    }

    res.json({
        success: true,
        data: vocabulary,
        total: vocabulary.length,
        filter: filter || 'none'
    });
});

export default router;
