import { Router, Request, Response } from 'express';
import readingService from '../services/readingService';

const router = Router();

router.get('/lessons', (req: Request, res: Response) => {
    const lessons = readingService.getAvailableLessons();
    res.json({
        success: true,
        data: lessons
    });
});

router.get('/lessons/:lessonNumber', (req: Request, res: Response) => {
    const lessonNumber = parseInt(req.params.lessonNumber);
    
    if (isNaN(lessonNumber)) {
        return res.status(400).json({
            success: false,
            error: 'Invalid lesson number'
        });
    }

    const lesson = readingService.getLesson(lessonNumber);
    
    if (!lesson) {
        return res.status(404).json({
            success: false,
            error: `Reading content for lesson ${lessonNumber} not available`
        });
    }

    res.json({
        success: true,
        data: lesson
    });
});

router.get('/lessons/:lessonNumber/passages/:passageId', (req: Request, res: Response) => {
    const lessonNumber = parseInt(req.params.lessonNumber);
    const passageId = req.params.passageId;
    
    if (isNaN(lessonNumber)) {
        return res.status(400).json({
            success: false,
            error: 'Invalid lesson number'
        });
    }

    const passage = readingService.getPassage(lessonNumber, passageId);
    
    if (!passage) {
        return res.status(404).json({
            success: false,
            error: `Passage '${passageId}' not found in lesson ${lessonNumber}`
        });
    }

    res.json({
        success: true,
        data: passage
    });
});

export default router;
