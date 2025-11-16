import express from 'express';
import cors from 'cors';
import path from 'path';
import lessonService from './services/lessonService';
import lessonsRouter from './api/lessonsRouter';
import readingRouter from './api/readingRouter';
import vocabRouter from './api/vocabRouter';
import healthRouter from './api/healthRouter';
import appRouter from './router/appRouter';

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

const publicPath = process.env.VERCEL 
    ? path.join(process.cwd(), 'public')
    : process.env.NODE_ENV === 'production' 
        ? path.join(__dirname, '../../public')
        : path.join(process.cwd(), 'public');

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' https://vercel.live; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        "font-src 'self' https://fonts.gstatic.com; " +
        "img-src 'self' data: https:; " +
        "connect-src 'self' https://vercel.live https://minna-quiz-quocanhnguyen402s-projects.vercel.app;"
    );
    next();
});

app.use(express.static(publicPath));

// API Routes
app.use('/api/lessons', lessonsRouter);
app.use('/api/reading', readingRouter);
app.use('/api/vocab', vocabRouter);
app.use('/api/health', healthRouter);

// App Routes (HTML pages)
app.use('/', appRouter);

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
