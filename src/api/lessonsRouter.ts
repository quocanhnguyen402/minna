import { Router, Request, Response } from 'express';
import lessonService from '../services/lessonService';
import quizService from '../services/quizService';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    const lessons = lessonService.getAvailableLessons();
    res.json({
        success: true,
        data: lessons,
        total: lessons.length
    });
});

router.get('/info', (req: Request, res: Response) => {
    const lessonsInfo = lessonService.getLessonsInfo();
    res.json({
        success: true,
        data: lessonsInfo,
        total: lessonsInfo.length
    });
});

router.get('/info/:category', (req: Request, res: Response) => {
    const category = req.params.category.toLowerCase();
    const lessonsInfo = lessonService.getLessonsInfo();
    
    const categoryInfo = lessonsInfo.map(lesson => ({
        lessonNumber: lesson.lessonNumber,
        count: (lesson.categories as any)[category] || 0
    })).filter(lesson => lesson.count > 0);
    
    res.json({
        success: true,
        category: category,
        data: categoryInfo
    });
});

router.get('/:lessonNumber', (req: Request, res: Response) => {
    const lessonNumber = parseInt(req.params.lessonNumber);
    
    if (isNaN(lessonNumber) || lessonNumber < 1 || lessonNumber > 50) {
        return res.status(400).json({
            success: false,
            error: 'Invalid lesson number. Must be between 1 and 50.'
        });
    }

    const lesson = lessonService.getLesson(lessonNumber);
    
    if (!lesson) {
        return res.status(404).json({
            success: false,
            error: `Lesson ${lessonNumber} data not available yet.`
        });
    }

    res.json({
        success: true,
        data: lesson
    });
});

router.get('/:lessonNumber/vocabulary/:category', (req: Request, res: Response) => {
    const lessonNumber = parseInt(req.params.lessonNumber);
    const category = req.params.category;
    
    if (isNaN(lessonNumber) || lessonNumber < 1 || lessonNumber > 50) {
        return res.status(400).json({
            success: false,
            error: 'Invalid lesson number. Must be between 1 and 50.'
        });
    }

    const vocabulary = lessonService.getLessonVocabulary(lessonNumber);
    
    if (!vocabulary) {
        return res.status(404).json({
            success: false,
            error: `Lesson ${lessonNumber} vocabulary not available yet.`
        });
    }

    const filtered = quizService.filterVocabulary(vocabulary, category);

    res.json({
        success: true,
        data: filtered,
        total: filtered.length,
        lessonNumber: lessonNumber,
        category: category
    });
});

router.get('/:lessonNumber/vocabulary', (req: Request, res: Response) => {
    const lessonNumber = parseInt(req.params.lessonNumber);
    
    if (isNaN(lessonNumber) || lessonNumber < 1 || lessonNumber > 50) {
        return res.status(400).json({
            success: false,
            error: 'Invalid lesson number. Must be between 1 and 50.'
        });
    }

    const vocabulary = lessonService.getLessonVocabulary(lessonNumber);
    
    if (!vocabulary) {
        return res.status(404).json({
            success: false,
            error: `Lesson ${lessonNumber} vocabulary not available yet.`
        });
    }

    res.json({
        success: true,
        data: vocabulary
    });
});

router.get('/:lessonNumber/grammar', (req: Request, res: Response) => {
    const lessonNumber = parseInt(req.params.lessonNumber);
    
    if (isNaN(lessonNumber) || lessonNumber < 1 || lessonNumber > 50) {
        return res.status(400).json({
            success: false,
            error: 'Invalid lesson number. Must be between 1 and 50.'
        });
    }

    const grammar = lessonService.getLessonGrammar(lessonNumber);
    
    if (!grammar) {
        return res.status(404).json({
            success: false,
            error: `Lesson ${lessonNumber} grammar not available yet.`
        });
    }

    res.json({
        success: true,
        data: grammar
    });
});

export default router;
