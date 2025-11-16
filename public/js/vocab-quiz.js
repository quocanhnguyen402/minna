
class VocabularyQuizPlayer {
    constructor() {
        this.quizCards = []; // Cards for current quiz with mastery tracking
        this.reviewPool = new Set(); // Cards that need review (added when answered incorrectly)
        this.currentCardIndex = 0;
        this.masteryTarget = 3;
        this.returnUrl = '/vocab'; // Default return URL
        this.totalAttempts = 0;
        this.isRevealed = false;
        this.currentRound = 1; // Track current round (1 to masteryTarget)
        this.roundCards = []; // Cards for current round
        this.roundCardIndex = 0; // Index within current round
        this.shownInRound = new Set(); // Track cards shown in current round
        this.currentCard = null;

        this.speechSynthesis = window.speechSynthesis;
        this.currentUtterance = null;
        this.japaneseVoices = [];
        this.speechReady = false;
        
        this.init();
    }

    async init() {

        const quizData = sessionStorage.getItem('quizData');
        if (!quizData) {
            alert('No quiz data found. Redirecting to setup...');
            window.location.href = '/vocab';
            return;
        }

        try {
            const data = JSON.parse(quizData);
            this.masteryTarget = data.masteryTarget || 3;
            this.returnUrl = data.returnUrl || '/vocab'; // Store return URL
            console.log('Loaded returnUrl:', this.returnUrl);
            const vocabularyPool = data.vocabulary || [];
            
            if (vocabularyPool.length === 0) {
                alert('No vocabulary in quiz data. Redirecting to setup...');
                window.location.href = '/vocab';
                return;
            }

            this.vocabularyPool = vocabularyPool;
            this.initializeQuizCards();

            this.initializeTTS();
            this.setupEventListeners();

            const backLink = document.querySelector('.back-link-modern');
            if (backLink) {
                backLink.href = this.returnUrl || '/vocab';
            }

            this.showNextCard();
            
        } catch (error) {
            console.error('Error loading quiz data:', error);
            alert('Error loading quiz. Redirecting to setup...');
            window.location.href = '/vocab';
        }
    }

    initializeTTS() {
        if (!this.speechSynthesis) {
            console.warn('Speech synthesis not available');
            return;
        }

        const loadVoices = () => {
            const voices = this.speechSynthesis.getVoices();
            this.japaneseVoices = voices.filter(voice => 
                voice.lang.startsWith('ja') || 
                voice.lang.startsWith('jp') ||
                voice.name.toLowerCase().includes('japan')
            );
            
            if (this.japaneseVoices.length > 0) {
                this.speechReady = true;
                console.log('Japanese voices available:', this.japaneseVoices.length);
            } else {
                console.warn('No Japanese voices found');
            }
        };

        loadVoices();

        this.speechSynthesis.addEventListener('voiceschanged', loadVoices);

        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            const dummyUtterance = new SpeechSynthesisUtterance('');
            dummyUtterance.volume = 0;
            this.speechSynthesis.speak(dummyUtterance);
        }
    }

    setupEventListeners() {

        document.getElementById('flashcardModern').addEventListener('click', (e) => {

            if (e.target.classList.contains('clickable-kanji')) {
                e.stopPropagation(); // Prevent card flip
                const kanji = e.target.getAttribute('data-kanji');
                this.searchKanji(kanji);
                return;
            }
            this.flipCard();
        });

        document.getElementById('correctBtn').addEventListener('click', () => {
            this.handleAnswer(true);
        });

        document.getElementById('incorrectBtn').addEventListener('click', () => {
            this.handleAnswer(false);
        });

        document.getElementById('restartBtn').addEventListener('click', () => {
            this.goBackToSetup();
        });

        document.getElementById('endQuizBtn').addEventListener('click', () => {
            this.endQuiz();
        });

        document.getElementById('speakerFront').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card flip
            this.speakJapanese('front');
        });

        document.getElementById('speakerBack').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card flip
            this.speakJapanese('back');
        });

        document.getElementById('dictionaryFront').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card flip
            this.openDictionary();
        });

        document.getElementById('dictionaryBack').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card flip
            this.openDictionary();
        });

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('clickable-kanji')) {
                e.stopPropagation();
                const kanji = e.target.getAttribute('data-kanji');
                this.searchKanji(kanji);
            }
        });
    }

    initializeQuizCards() {
        this.quizCards = this.vocabularyPool.map((vocab, index) => ({
            ...vocab,
            id: vocab.id || `card_${index}`, // Generate unique ID if missing
            correctCount: 0,
            incorrectCount: 0,
            mastered: false,
            correctInRounds: new Set(), // Track rounds where this card was answered correctly
            incorrectInRounds: new Set() // Track rounds where this card was answered incorrectly
        }));

        this.currentRound = 1;
        this.setupRoundCards();
        
        this.currentCardIndex = 0;
        this.totalAttempts = 0;
        this.updateStats();
    }

    shuffleCards() {
        for (let i = this.quizCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.quizCards[i], this.quizCards[j]] = [this.quizCards[j], this.quizCards[i]];
        }
    }

    setupRoundCards() {
        console.log(`\n========== ROUND ${this.currentRound} SETUP ==========`);
        console.log(`Mastery Target: ${this.masteryTarget}`);
        console.log(`Total Quiz Cards: ${this.quizCards.length}`);
        console.log(`Review Pool Size BEFORE: ${this.reviewPool.size}`);
        
        if (this.currentRound <= this.masteryTarget) {

            this.roundCards = [...this.quizCards];
            this.shuffleCards();
            this.roundCards = [...this.quizCards]; // Copy shuffled order
            
            console.log(`Round Type: Regular (${this.currentRound}/${this.masteryTarget})`);
            console.log(`Cards in this round: ${this.roundCards.length}`);
            console.log('Cards:', this.roundCards.map(c => c.japanese).join(', '));
        } else {

            console.log(`Round Type: REVIEW ROUND (Round ${this.currentRound})`);
            
            if (this.reviewPool.size === 0) {
                const allMastered = this.quizCards.every(card => card.mastered);
                
                if (allMastered) {
                    this.roundCards = [];
                    console.log('All cards mastered - Quiz complete!');
                    console.log('==========================================\n');
                    return;
                } else {
                    console.log('ERROR: Review pool empty but not all cards mastered!');
                    this.quizCards.forEach(card => {
                        if (!card.mastered) {
                            console.log(`  - ${card.japanese}: correct in ${card.correctInRounds.size}/${this.masteryTarget} rounds`);
                        }
                    });
                    this.roundCards = [];
                    return;
                }
            }

            const reviewCards = this.quizCards.filter(card => this.reviewPool.has(card.id));
            
            console.log(`Cards in this review round: ${reviewCards.length}`);
            reviewCards.forEach(card => {
                console.log(`  - ${card.japanese}: correct in ${card.correctInRounds.size}/${this.masteryTarget} rounds, incorrect count: ${card.incorrectCount}`);
            });
            
            this.roundCards = reviewCards;

            this.reviewPool.clear();
            console.log('Review pool CLEARED - will be rebuilt based on this round\'s incorrect answers');

            for (let i = this.roundCards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.roundCards[i], this.roundCards[j]] = [this.roundCards[j], this.roundCards[i]];
            }
            
            console.log('Review round cards (shuffled):', this.roundCards.map(c => c.japanese).join(', '));
        }
        
        this.roundCardIndex = 0;
        this.shownInRound = new Set();
        console.log('==========================================\n');
    }

    getNextCard() {

        if (this.roundCardIndex >= this.roundCards.length) {

            this.currentRound++;

            this.setupRoundCards();

            if (this.roundCards.length === 0) {
                return null;
            }
        }

        let attempts = 0;
        let nextCard;
        
        do {
            if (this.roundCardIndex >= this.roundCards.length) {
                break;
            }
            
            nextCard = this.roundCards[this.roundCardIndex];
            this.roundCardIndex++;
            attempts++;

            if (attempts > this.roundCards.length * 2) {
                break;
            }
            
        } while (this.shownInRound.has(nextCard.id) && this.roundCardIndex < this.roundCards.length);
        
        if (nextCard && !this.shownInRound.has(nextCard.id)) {
            this.shownInRound.add(nextCard.id);
            return nextCard;
        }

        const remaining = this.roundCards.filter(card => !this.shownInRound.has(card.id));
        if (remaining.length > 0) {
            const card = remaining[0];
            this.shownInRound.add(card.id);
            return card;
        }
        return null;
    }

    cleanJapaneseText(text) {
        if (!text) return text;



        return text
            .replace(/[「『][^」』]*[」』].*$/, '') // Japanese brackets
            .replace(/\[[^\]]*\]/g, '') // Square brackets
            .trim();
    }

    showNextCard() {

        this.stopSpeech();
        
        this.currentCard = this.getNextCard();
        
        if (!this.currentCard) {

            this.showCompletion();
            return;
        }

        this.isRevealed = false;

        const cleanJapanese = this.cleanJapaneseText(this.currentCard.japanese);
        const cleanKanji = this.currentCard.kanji ? this.cleanJapaneseText(this.currentCard.kanji) : '';

        if (cleanKanji && cleanKanji.trim() !== '') {
            document.getElementById('cardKanji').textContent = cleanKanji;
        } else {

            document.getElementById('cardKanji').textContent = cleanJapanese;
        }

        document.getElementById('cardJapanese').textContent = cleanJapanese;
        document.getElementById('cardRomaji').textContent = this.currentCard.romaji;
        document.getElementById('cardMeaning').textContent = this.currentCard.meaning;

        const flashcard = document.getElementById('flashcardModern');
        flashcard.classList.remove('flipped');

        const container = document.querySelector('.flashcard-container-modern');
        container.classList.remove('card-exit', 'card-enter');

        this.addKanjiClickHandlers();
        
        this.updateStats();
    }

    addKanjiClickHandlers() {

        const kanjiElements = document.querySelectorAll('#cardKanji');
        
        kanjiElements.forEach(element => {

            element.innerHTML = this.makeKanjiClickable(element.textContent);
        });
    }

    makeKanjiClickable(text) {
        if (!text) return '';

        return text.split('').map(char => {
            if (this.isKanji(char)) {
                return `<span class="clickable-kanji" data-kanji="${char}" title="Search kanji: ${char}">${char}</span>`;
            }
            return char;
        }).join('');
    }

    isKanji(char) {
        const code = char.charCodeAt(0);

        return (code >= 0x4E00 && code <= 0x9FAF) || // CJK Unified Ideographs
               (code >= 0x3400 && code <= 0x4DBF) || // CJK Extension A
               (code >= 0x20000 && code <= 0x2A6DF) || // CJK Extension B
               (code >= 0x2A700 && code <= 0x2B73F) || // CJK Extension C
               (code >= 0x2B740 && code <= 0x2B81F) || // CJK Extension D
               (code >= 0x2B820 && code <= 0x2CEAF); // CJK Extension E
    }

    searchKanji(kanji) {
        const searchUrl = `https://mazii.net/vi-VN/search/kanji/javi/${encodeURIComponent(kanji)}`;
        window.open(searchUrl, '_blank', 'noopener,noreferrer');
    }

    flipCard() {
        const flashcard = document.getElementById('flashcardModern');

        if (flashcard.classList.contains('flipped')) {

            flashcard.classList.remove('flipped');
            this.isRevealed = false;
        } else {

            flashcard.classList.add('flipped');
            this.isRevealed = true;
        }
    }

    handleAnswer(isCorrect) {
        this.totalAttempts++;

        if (isCorrect) {
            this.currentCard.correctCount++;
            this.currentCard.correctInRounds.add(this.currentRound);

            if (this.currentCard.correctInRounds.size >= this.masteryTarget) {
                this.currentCard.mastered = true;
                console.log(`✓✓✓ ${this.currentCard.japanese} MASTERED (${this.currentCard.correctInRounds.size}/${this.masteryTarget} rounds)`);
            }
        } else {
            this.currentCard.incorrectCount++;
            this.currentCard.incorrectInRounds.add(this.currentRound);
            this.reviewPool.add(this.currentCard.id);
            console.log(`✗ ${this.currentCard.japanese} added to review pool (size now: ${this.reviewPool.size})`);

            this.currentCard.correctCount = 0;
        }

        this.updateStats();

        this.transitionToNextCard();
    }

    transitionToNextCard() {
        const container = document.querySelector('.flashcard-container-modern');

        container.classList.add('card-exit');

        setTimeout(() => {
            container.classList.remove('card-exit');
            this.showNextCard();
            container.classList.add('card-enter');

            setTimeout(() => {
                container.classList.remove('card-enter');
            }, 300);
        }, 300);
    }

    updateStats() {
        const mastered = this.quizCards.filter(card => card.mastered).length;
        const total = this.quizCards.length;

        const progressPercent = total > 0 ? (mastered / total) * 100 : 0;
        document.getElementById('progressBarFill').style.width = `${progressPercent}%`;

        document.getElementById('progressText').textContent = `${mastered} / ${total} mastered`;
    }

    showCompletion() {
        document.querySelector('.flashcard-container-modern').style.display = 'none';
        document.getElementById('answerButtons').style.display = 'none';
        document.querySelector('.quiz-progress-header').style.display = 'none';
        document.getElementById('quizCompletion').style.display = 'block';

        document.getElementById('totalCardsStat').textContent = this.quizCards.length;
        document.getElementById('totalAttemptsStat').textContent = this.totalAttempts;
    }

    goBackToSetup() {

        this.stopSpeech();

        window.location.href = this.returnUrl || '/vocab';
    }

    endQuiz() {

        this.stopSpeech();
        
        console.log('Ending quiz, returning to:', this.returnUrl || '/vocab');

        window.location.href = this.returnUrl || '/vocab';
    }

    speakJapanese(side) {
        if (!this.currentCard) return;

        if (!this.speechSynthesis) {
            this.showSpeechNotSupported('Speech synthesis not available');
            return;
        }

        if (this.currentUtterance) {
            this.speechSynthesis.cancel();
            this.removeSpeakingAnimation();
        }

        const textToSpeak = this.cleanJapaneseText(this.currentCard.japanese);
        
        if (!textToSpeak || textToSpeak.trim() === '') {
            console.warn('No text to speak');
            return;
        }

        this.currentUtterance = new SpeechSynthesisUtterance(textToSpeak);

        this.currentUtterance.lang = 'ja-JP';

        if (this.japaneseVoices.length > 0) {

            const femaleVoice = this.japaneseVoices.find(v => 
                v.name.toLowerCase().includes('female') || 
                v.name.toLowerCase().includes('woman') ||
                !v.name.toLowerCase().includes('male')
            );
            this.currentUtterance.voice = femaleVoice || this.japaneseVoices[0];
        }

        this.currentUtterance.rate = 1.0; // Normal speed
        this.currentUtterance.pitch = 1.0;
        this.currentUtterance.volume = 1.0;

        const speakerBtn = side === 'front' ? 
            document.getElementById('speakerFront') : 
            document.getElementById('speakerBack');

        if (!speakerBtn) {
            console.warn('Speaker button not found');
            return;
        }

        speakerBtn.classList.add('speaking');

        this.currentUtterance.onstart = () => {
            console.log('Speech started');
        };

        this.currentUtterance.onend = () => {
            console.log('Speech ended');
            this.removeSpeakingAnimation();
            this.currentUtterance = null;
        };

        this.currentUtterance.onerror = (event) => {
            console.warn('Speech synthesis error:', event.error, event);
            this.removeSpeakingAnimation();
            this.currentUtterance = null;

            let message = 'Speech synthesis failed';
            if (event.error === 'not-allowed') {
                message = 'Speech blocked. Try tapping the speaker button again.';
            } else if (event.error === 'network') {
                message = 'Network error. Check internet connection.';
            } else if (event.error === 'synthesis-failed') {
                message = 'Speech synthesis failed. Try again.';
            }
            
            this.showSpeechNotSupported(message);
        };

        try {

            if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {

                console.log('Mobile device detected, ensuring user interaction');
            }
            
            this.speechSynthesis.speak(this.currentUtterance);

            setTimeout(() => {
                if (this.currentUtterance && !this.speechSynthesis.speaking) {
                    console.warn('Speech may have failed to start');
                    this.removeSpeakingAnimation();
                }
            }, 1000);
            
        } catch (error) {
            console.warn('Speech synthesis not supported:', error);
            this.removeSpeakingAnimation();
            this.showSpeechNotSupported('Browser does not support speech synthesis');
        }
    }

    removeSpeakingAnimation() {
        document.getElementById('speakerFront')?.classList.remove('speaking');
        document.getElementById('speakerBack')?.classList.remove('speaking');
    }

    showSpeechNotSupported(message = 'Speech synthesis not supported in this browser') {

        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--black);
            color: var(--white);
            padding: 12px 20px;
            border: 2px solid var(--black);
            font-weight: bold;
            z-index: 1000;
            font-size: 0.9em;
            max-width: 300px;
            border-radius: 4px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        `;
        
        document.body.appendChild(notification);

        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 4000);
    }

    stopSpeech() {
        if (this.currentUtterance) {
            this.speechSynthesis.cancel();
            this.removeSpeakingAnimation();
            this.currentUtterance = null;
        }
    }

    openDictionary() {
        if (!this.currentCard) return;

        const cleanKanji = this.currentCard.kanji ? this.cleanJapaneseText(this.currentCard.kanji) : '';
        const cleanJapanese = this.cleanJapaneseText(this.currentCard.japanese);
        const searchTerm = cleanKanji || cleanJapanese;

        const cleanSearchTerm = searchTerm.trim();

        const encodedSearchTerm = encodeURIComponent(cleanSearchTerm);

        const dictionaryUrl = `https://www.tanoshiijapanese.com/dictionary/index.cfm?j=${encodedSearchTerm}&search=Search+%3E`;

        window.open(dictionaryUrl, '_blank', 'noopener,noreferrer');

        const buttons = document.querySelectorAll('.dictionary-btn');
        buttons.forEach(btn => {
            btn.style.background = '#1e40af';
            btn.style.borderColor = '#1e40af';
            btn.style.color = 'white';
            btn.style.transform = 'scale(0.95)';
        });

        setTimeout(() => {
            buttons.forEach(btn => {
                btn.style.background = '';
                btn.style.borderColor = '';
                btn.style.color = '';
                btn.style.transform = '';
            });
        }, 200);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new VocabularyQuizPlayer();
});
