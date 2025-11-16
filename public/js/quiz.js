
class VocabularyQuiz {
    constructor() {
        this.vocabularyPool = []; // All available vocabulary
        this.selectedWords = new Set(); // Track individually selected words
        this.quizCards = []; // Cards for current quiz with mastery tracking
        this.reviewPool = new Set(); // Cards that need review (added when answered incorrectly)
        this.masteryTarget = 3;
        this.totalAttempts = 0;
        this.isRevealed = false;
        this.apiBaseUrl = '/api';
        this.filterType = this.getFilterFromUrl();
        this.allLessons = []; // All lessons from API
        this.availableLessons = []; // Filtered lessons based on filter type
        this.currentRound = 1; // Track current round (1 to masteryTarget)
        this.roundCards = []; // Cards for current round
        this.roundCardIndex = 0; // Index within current round
        this.shownInRound = new Set(); // Track cards shown in current round

        this.speechSynthesis = window.speechSynthesis;
        this.currentUtterance = null;
        this.japaneseVoices = [];
        
        this.init();
    }

    getFilterFromUrl() {
        const path = window.location.pathname;
        const match = path.match(/\/vocab\/(.+)/);
        return match ? match[1] : null;
    }

    async init() {
        await this.loadAvailableLessons();
        this.setupEventListeners();
        this.initializeTTS();
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
            
            if (this.japaneseVoices.length === 0) {
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

    async loadAvailableLessons() {
        try {
            const response = await fetch(`${this.apiBaseUrl}/lessons`);
            const result = await response.json();
            
            if (result.success) {
                this.allLessons = result.data;

                if (this.filterType) {
                    await this.filterAvailableLessons();
                } else {
                    this.availableLessons = this.allLessons;
                }
                
                this.renderLessonSelector();
            } else {
                console.error('Failed to load lessons');
                this.availableLessons = [];
            }
        } catch (error) {
            console.error('Error loading lessons:', error);
            this.availableLessons = [];
        }
    }

    async filterAvailableLessons() {
        const lessonsWithContent = [];
        
        for (const lessonNum of this.allLessons) {
            try {
                const response = await fetch(`${this.apiBaseUrl}/lessons/${lessonNum}/vocabulary`);
                const result = await response.json();
                
                if (result.success && result.data) {

                    const hasMatchingVocab = result.data.some(item => 
                        item.category && item.category.toLowerCase() === this.filterType.toLowerCase()
                    );
                    
                    if (hasMatchingVocab) {
                        lessonsWithContent.push(lessonNum);
                    }
                }
            } catch (error) {
                console.error(`Error checking lesson ${lessonNum}:`, error);
            }
        }
        
        this.availableLessons = lessonsWithContent;
    }

    renderLessonSelector() {
        const container = document.getElementById('lessonSelector');
        if (!container) {
            console.warn('Lesson selector container not found');
            return;
        }
        container.innerHTML = '';

        this.availableLessons.forEach(lessonNum => {
            const checkboxDiv = document.createElement('div');
            checkboxDiv.className = 'lesson-checkbox-modern';
            checkboxDiv.innerHTML = `
                <input type="checkbox" id="lesson${lessonNum}" value="${lessonNum}">
                <label for="lesson${lessonNum}">${lessonNum}</label>
            `;
            
            const checkbox = checkboxDiv.querySelector('input');
            checkbox.addEventListener('change', async (e) => {
                if (e.target.checked) {
                    checkboxDiv.classList.add('selected');
                } else {
                    checkboxDiv.classList.remove('selected');
                }

                await this.updateCardPreview();

                this.updateSelectUpToButton();
            });

            checkboxDiv.addEventListener('click', (e) => {
                if (e.target !== checkbox) {
                    checkbox.checked = !checkbox.checked;
                    checkbox.dispatchEvent(new Event('change'));
                }
            });
            
            container.appendChild(checkboxDiv);
        });

        this.updateSelectUpToButton();
    }

    setupEventListeners() {
        const selectAllBtn = document.getElementById('selectAllBtn');
        const deselectAllBtn = document.getElementById('deselectAllBtn');
        
        if (selectAllBtn) {
            selectAllBtn.addEventListener('click', () => {
                this.toggleAllLessons(true);
            });
        }

        if (deselectAllBtn) {
            deselectAllBtn.addEventListener('click', () => {
                this.toggleAllLessons(false);
            });
        }

        const selectUpToBtn = document.getElementById('selectUpToBtn');
        if (selectUpToBtn) {
            selectUpToBtn.addEventListener('click', () => {
                this.selectUpToCurrentLesson();
            });
        }

        const selectAllCardsBtn = document.getElementById('selectAllCardsBtn');
        const deselectAllCardsBtn = document.getElementById('deselectAllCardsBtn');
        
        if (selectAllCardsBtn) {
            selectAllCardsBtn.addEventListener('click', () => {
                this.toggleAllCards(true);
            });
        }
        
        if (deselectAllCardsBtn) {
            deselectAllCardsBtn.addEventListener('click', () => {
                this.toggleAllCards(false);
            });
        }

        document.getElementById('increaseMastery')?.addEventListener('click', () => {
            const input = document.getElementById('masteryCount');
            const currentValue = parseInt(input.value);
            if (currentValue < 10) {
                input.value = currentValue + 1;
            }
        });

        document.getElementById('decreaseMastery')?.addEventListener('click', () => {
            const input = document.getElementById('masteryCount');
            const currentValue = parseInt(input.value);
            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        });

        document.getElementById('startQuizBtn').addEventListener('click', () => {
            this.startQuiz();
        });

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
            this.resetQuiz();
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

    async toggleAllLessons(select) {
        const checkboxes = document.querySelectorAll('#lessonSelector input[type="checkbox"]');
        checkboxes.forEach(cb => {
            cb.checked = select;
            const parent = cb.closest('.lesson-checkbox-modern');
            if (select) {
                parent.classList.add('selected');
            } else {
                parent.classList.remove('selected');
            }
        });

        await this.updateCardPreview();
    }

    toggleAllCards(select) {
        const previewCards = document.querySelectorAll('.preview-card');
        previewCards.forEach(card => {
            const checkbox = card.querySelector('input[type="checkbox"]');
            const wordId = card.dataset.wordId;
            
            if (checkbox && wordId) {
                checkbox.checked = select;
                if (select) {
                    this.selectedWords.add(wordId);
                    card.classList.add('selected');
                } else {
                    this.selectedWords.delete(wordId);
                    card.classList.remove('selected');
                }
            }
        });
        this.updateSelectedCount();
    }

    async selectUpToCurrentLesson() {
        const checkboxes = document.querySelectorAll('#lessonSelector input[type="checkbox"]');
        const currentLesson = this.getCurrentLesson();
        
        checkboxes.forEach(cb => {
            const lessonNum = parseInt(cb.value);
            const parent = cb.closest('.lesson-checkbox-modern');
            
            if (lessonNum <= currentLesson) {
                cb.checked = true;
                parent.classList.add('selected');
            } else {
                cb.checked = false;
                parent.classList.remove('selected');
            }
        });

        await this.updateCardPreview();
    }

    getCurrentLesson() {
        const checkboxes = document.querySelectorAll('#lessonSelector input[type="checkbox"]:checked');
        if (checkboxes.length === 0) {
            return Math.max(...this.availableLessons); // Default to highest available lesson
        }
        
        const selectedLessons = Array.from(checkboxes).map(cb => parseInt(cb.value));
        return Math.max(...selectedLessons);
    }

    updateSelectUpToButton() {
        const selectUpToBtn = document.getElementById('selectUpToBtn');
        const currentLessonSpan = document.getElementById('currentLessonNumber');
        
        if (selectUpToBtn && currentLessonSpan) {
            const currentLesson = this.getCurrentLesson();
            currentLessonSpan.textContent = currentLesson;

            if (this.availableLessons.length > 0) {
                selectUpToBtn.style.display = 'inline-block';
            }
        }
    }

    getSelectedLessons() {
        const checkboxes = document.querySelectorAll('#lessonSelector input[type="checkbox"]:checked');
        return Array.from(checkboxes).map(cb => parseInt(cb.value));
    }

    async startQuiz() {
        if (this.selectedWords.size === 0) {
            alert('Please select at least one word from the preview!');
            return;
        }

        this.masteryTarget = parseInt(document.getElementById('masteryCount').value);

        const selectedVocab = [];
        this.selectedWords.forEach(wordId => {
            const cardDiv = document.querySelector(`[data-word-id="${wordId}"]`);
            if (cardDiv) {
                const vocabData = JSON.parse(cardDiv.dataset.vocabData);
                selectedVocab.push(vocabData);
            }
        });
        
        this.vocabularyPool = selectedVocab;
        
        if (this.vocabularyPool.length === 0) {
            alert('No vocabulary available!');
            return;
        }

        this.initializeQuizCards();

        document.getElementById('quizSetup').style.display = 'none';
        document.getElementById('quizArea').style.display = 'block';
        document.getElementById('endQuizBtn').style.display = 'block';
        document.getElementById('answerButtons').style.display = 'flex';

        this.showNextCard();
    }

    async loadVocabulary(lessonNumbers) {
        try {
            const lessonParam = lessonNumbers.join(',');
            let url = `${this.apiBaseUrl}/vocab/lessons?lessons=${lessonParam}`;

            if (this.filterType) {
                url += `&filter=${this.filterType}`;
            }
            
            const response = await fetch(url);
            const result = await response.json();
            
            if (result.success && result.data) {
                this.vocabularyPool = result.data;
            } else {
                console.error('Failed to load vocabulary');
                this.vocabularyPool = [];
            }
        } catch (error) {
            console.error('Error loading vocabulary:', error);
            this.vocabularyPool = [];
        }
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
        if (this.currentRound <= this.masteryTarget) {
            this.roundCards = [...this.quizCards];
            this.shuffleCards();
            this.roundCards = [...this.quizCards];
        } else {
            if (this.reviewPool.size === 0) {
                this.roundCards = [];
                return;
            }

            const reviewCards = this.quizCards.filter(card => this.reviewPool.has(card.id));
            this.reviewPool.clear();
            this.roundCards = reviewCards;

            for (let i = this.roundCards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.roundCards[i], this.roundCards[j]] = [this.roundCards[j], this.roundCards[i]];
            }
        }
        
        this.roundCardIndex = 0;
        this.shownInRound = new Set();
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

        const kanjiElements = document.querySelectorAll('#cardKanji, .preview-kanji');
        
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

            if (this.currentRound <= this.masteryTarget) {
                this.currentCard.correctInRounds.add(this.currentRound);
            }
        } else {
            this.currentCard.incorrectCount++;

            if (this.currentRound <= this.masteryTarget) {
                this.currentCard.incorrectInRounds.add(this.currentRound);
            }

            this.reviewPool.add(this.currentCard.id);
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

    resetQuiz() {

        this.stopSpeech();
        
        document.getElementById('quizArea').style.display = 'none';
        document.getElementById('quizSetup').style.display = 'block';
        document.getElementById('endQuizBtn').style.display = 'none';

        this.vocabularyPool = [];
        this.quizCards = [];
        this.currentCard = null;
        this.totalAttempts = 0;
        this.currentRound = 1;
        this.roundCards = [];
        this.roundCardIndex = 0;
        this.shownInRound = new Set();

        document.querySelector('.flashcard-container-modern').style.display = 'block';
        document.getElementById('quizCompletion').style.display = 'none';
        document.querySelector('.quiz-progress-header').style.display = 'block';
    }

    endQuiz() {
      this.resetQuiz();
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

        this.currentUtterance.onend = () => {
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
        document.getElementById('speakerFront').classList.remove('speaking');
        document.getElementById('speakerBack').classList.remove('speaking');
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

    async updateCardPreview() {
        const selectedLessons = this.getSelectedLessons();
        const previewSection = document.getElementById('cardPreviewSection');
        const previewGrid = document.getElementById('cardPreviewGrid');
        const previewCount = document.getElementById('previewCount');

        if (!previewSection || !previewGrid || !previewCount) {
            console.warn('Preview elements not found');
            return;
        }

        if (selectedLessons.length === 0) {
            previewSection.style.display = 'none';
            return;
        }

        previewSection.style.display = 'block';
        previewGrid.innerHTML = '<div class="preview-loading">Loading cards...</div>';

        try {

            await this.loadVocabulary(selectedLessons);

            let vocabulary = this.vocabularyPool;
            if (this.filterType) {
                vocabulary = vocabulary.filter(item => 
                    item.category && item.category.toLowerCase() === this.filterType.toLowerCase()
                );
            }

            previewCount.textContent = `${vocabulary.length} cards selected`;

            this.renderPreviewCards(vocabulary);

        } catch (error) {
            console.error('Error loading card preview:', error);
            previewGrid.innerHTML = '<div class="preview-loading">Error loading cards</div>';
        }
    }

    updateSelectedCount() {
        const previewCount = document.getElementById('previewCount');
        if (previewCount) {
            previewCount.textContent = `${this.selectedWords.size} cards selected`;
        }
    }

    renderPreviewCards(vocabulary) {
        const previewGrid = document.getElementById('cardPreviewGrid');
        if (!previewGrid) {
            console.warn('Preview grid element not found');
            return;
        }
        previewGrid.innerHTML = '';

        vocabulary.forEach((vocab, index) => {

            const cleanJapanese = this.cleanJapaneseText(vocab.japanese);
            const cleanKanji = vocab.kanji ? this.cleanJapaneseText(vocab.kanji) : '';
            
            const wordId = `${vocab.lesson}_${index}`;
            const isSelected = this.selectedWords.has(wordId);
            
            const cardDiv = document.createElement('div');
            cardDiv.className = `preview-card ${isSelected ? 'selected' : ''}`;
            cardDiv.dataset.wordId = wordId;
            cardDiv.dataset.vocabData = JSON.stringify(vocab);
            
            cardDiv.innerHTML = `
                <div class="preview-card-checkbox">
                    <input type="checkbox" id="word_${wordId}" ${isSelected ? 'checked' : ''}>
                </div>
                <div class="preview-card-inner">
                    <div class="preview-card-front">
                        ${cleanKanji && cleanKanji.trim() !== '' ? 
                            `<div class="preview-kanji">${this.makeKanjiClickable(cleanKanji)}</div>` :
                            `<div class="preview-kanji">${this.makeKanjiClickable(cleanJapanese)}</div>`
                        }
                        <div class="preview-actions">
                            <button class="preview-btn preview-speaker-btn" title="Listen to pronunciation">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                                </svg>
                            </button>
                            <button class="preview-btn preview-dictionary-btn" title="Search in dictionary">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                                    <circle cx="10" cy="8" r="2"/>
                                    <path d="m20 2-4.5 4.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="preview-card-back">
                        <div class="preview-japanese">${cleanJapanese}</div>
                        <div class="preview-romaji">${vocab.romaji}</div>
                        <div class="preview-meaning">${vocab.meaning}</div>
                        <div class="preview-actions">
                            <button class="preview-btn preview-speaker-btn" title="Listen to pronunciation">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                                </svg>
                            </button>
                            <button class="preview-btn preview-dictionary-btn" title="Search in dictionary">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                                    <circle cx="10" cy="8" r="2"/>
                                    <path d="m20 2-4.5 4.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            `;

            const checkbox = cardDiv.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', (e) => {
                e.stopPropagation();
                if (e.target.checked) {
                    this.selectedWords.add(wordId);
                    cardDiv.classList.add('selected');
                } else {
                    this.selectedWords.delete(wordId);
                    cardDiv.classList.remove('selected');
                }
                this.updateSelectedCount();
            });

            cardDiv.addEventListener('click', (e) => {

                if (!e.target.closest('.preview-card-checkbox') && !e.target.closest('.preview-actions')) {
                    cardDiv.classList.toggle('flipped');
                }
            });

            const speakerBtns = cardDiv.querySelectorAll('.preview-speaker-btn');
            const dictionaryBtns = cardDiv.querySelectorAll('.preview-dictionary-btn');

            speakerBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.speakPreviewJapanese(vocab, btn);
                });
            });

            dictionaryBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.openPreviewDictionary(vocab);
                });
            });

            previewGrid.appendChild(cardDiv);
        });
    }

    speakPreviewJapanese(vocab, buttonElement) {
        if (!vocab) return;

        if (!this.speechSynthesis) {
            this.showSpeechNotSupported('Speech synthesis not available');
            return;
        }

        if (this.currentUtterance) {
            this.speechSynthesis.cancel();

            document.querySelectorAll('.speaking').forEach(btn => btn.classList.remove('speaking'));
        }

        const textToSpeak = this.cleanJapaneseText(vocab.japanese);
        
        if (!textToSpeak || textToSpeak.trim() === '') {
            console.warn('No text to speak');
            return;
        }

        this.currentUtterance = new SpeechSynthesisUtterance(textToSpeak);

        this.currentUtterance.lang = 'ja-JP';

        if (this.japaneseVoices.length > 0) {
            const femaleVoice = this.japaneseVoices.find(v => 
                v.name.toLowerCase().includes('female') || 
                !v.name.toLowerCase().includes('male')
            );
            this.currentUtterance.voice = femaleVoice || this.japaneseVoices[0];
        }
        
        this.currentUtterance.rate = 1.0; // Normal speed
        this.currentUtterance.pitch = 1.0;
        this.currentUtterance.volume = 1.0;

        buttonElement.classList.add('speaking');

        this.currentUtterance.onend = () => {
            buttonElement.classList.remove('speaking');
            this.currentUtterance = null;
        };

        this.currentUtterance.onerror = (event) => {
            console.warn('Speech synthesis error:', event.error);
            buttonElement.classList.remove('speaking');
            this.currentUtterance = null;
            
            let message = 'Speech failed';
            if (event.error === 'not-allowed') {
                message = 'Speech blocked. Try again.';
            }
            this.showSpeechNotSupported(message);
        };

        try {
            this.speechSynthesis.speak(this.currentUtterance);

            setTimeout(() => {
                if (this.currentUtterance && !this.speechSynthesis.speaking) {
                    buttonElement.classList.remove('speaking');
                }
            }, 1000);
            
        } catch (error) {
            console.warn('Speech synthesis not supported:', error);
            buttonElement.classList.remove('speaking');
            this.showSpeechNotSupported('Speech not supported');
        }
    }

    openPreviewDictionary(vocab) {
        if (!vocab) return;

        const cleanKanji = vocab.kanji ? this.cleanJapaneseText(vocab.kanji) : '';
        const cleanJapanese = this.cleanJapaneseText(vocab.japanese);
        const searchTerm = cleanKanji || cleanJapanese;
        const cleanSearchTerm = searchTerm.trim();
        const encodedSearchTerm = encodeURIComponent(cleanSearchTerm);
        const dictionaryUrl = `https://www.tanoshiijapanese.com/dictionary/index.cfm?j=${encodedSearchTerm}&search=Search+%3E`;

        window.open(dictionaryUrl, '_blank', 'noopener,noreferrer');
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
    new VocabularyQuiz();
});
