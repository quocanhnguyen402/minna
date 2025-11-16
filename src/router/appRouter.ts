import { Router, Request, Response } from 'express';
import path from 'path';

const router = Router();

const publicPath = process.env.VERCEL 
    ? path.join(process.cwd(), 'public')
    : process.env.NODE_ENV === 'production' 
        ? path.join(__dirname, '../../../public')
        : path.join(process.cwd(), 'public');

router.get('/vocab/quiz', (req: Request, res: Response) => {
    res.sendFile(path.join(publicPath, 'quiz.html'));
});

router.get('/vocab*', (req: Request, res: Response) => {
    res.sendFile(path.join(publicPath, 'quiz-setup.html'));
});

router.get('/reading', (req: Request, res: Response) => {
    res.sendFile(path.join(publicPath, 'reading.html'));
});

router.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(publicPath, 'main.html'));
});

export default router;
