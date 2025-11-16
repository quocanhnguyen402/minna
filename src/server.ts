import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import lessonService from './services/lessonService';
import quizService from './services/quizService';

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

const publicPath = process.env.NODE_ENV === 'production' 
    ? path.join(__dirname, '../../public')  // When running from dist
    : path.join(process.cwd(), 'public');   // When running from root

app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));


app.get('/api/lessons', (req: Request, res: Response) => {
    const lessons = lessonService.getAvailableLessons();
    res.json({
        success: true,
        data: lessons,
        total: lessons.length
    });
});

app.get('/api/lessons/:lessonNumber', (req: Request, res: Response) => {
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

app.get('/api/lessons/:lessonNumber/vocabulary', (req: Request, res: Response) => {
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

app.get('/api/lessons/:lessonNumber/grammar', (req: Request, res: Response) => {
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

app.get('/api/health', (req: Request, res: Response) => {
    res.json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

import readingService from './services/readingService';

app.get('/api/reading/lessons', (req: Request, res: Response) => {
    const lessons = readingService.getAvailableLessons();
    res.json({
        success: true,
        data: lessons
    });
});

app.get('/api/reading/lessons/:lessonNumber', (req: Request, res: Response) => {
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

app.get('/api/reading/lessons/:lessonNumber/passages/:passageId', (req: Request, res: Response) => {
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


app.get('/api/vocab/stats', (req: Request, res: Response) => {
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

app.get('/api/vocab/lessons', (req: Request, res: Response) => {
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

app.get('/api/vocab', (req: Request, res: Response) => {
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

app.get('/api/vocab/:category', (req: Request, res: Response) => {
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

app.get('/vocab/quiz', (req: Request, res: Response) => {
    res.sendFile(path.join(publicPath, 'quiz.html'));
});

app.get('/vocab*', (req: Request, res: Response) => {
    res.sendFile(path.join(publicPath, 'vocab-setup.html'));
});

app.get('/reading', (req: Request, res: Response) => {
    res.sendFile(path.join(publicPath, 'reading.html'));
});

app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(publicPath, 'main.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    const os = require('os');
    const interfaces = os.networkInterfaces();

    const localIPs: string[] = [];
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name] || []) {

            if (iface.family === 'IPv4' && !iface.internal) {
                localIPs.push(iface.address);
            }
        }
    }
    
    console.log(`🚀 Minna no Nihongo server is running on port ${PORT}`);
    console.log(`\n📍 Access URLs:`);
    console.log(`   Local:    http://localhost:${PORT}`);
    console.log(`   Local:    http://127.0.0.1:${PORT}`);
    
    if (localIPs.length > 0) {
        localIPs.forEach(ip => {
            console.log(`   Network:  http://${ip}:${PORT}`);
        });
        console.log(`\n🌐 Other devices on your network can access using the Network URLs above`);
    } else {
        console.log(`   Network:  Unable to detect network IP address`);
    }
    
    console.log(`\n📚 API available at: /api`);
    console.log(`📖 Available lessons: ${lessonService.getAvailableLessons().join(', ')}`);
    console.log(`\n💡 Make sure Windows Firewall allows connections on port ${PORT}`);
});

export default app;
