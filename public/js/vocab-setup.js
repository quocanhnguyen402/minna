
class VocabularySetup {
    constructor() {
        this.vocabularyPool = [];
        this.selectedWords = new Set();
        this.apiBaseUrl = '/api';
        this.filterType = this.getFilterFromUrl();
        this.allLessons = [];
        this.availableLessons = [];


        
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
            }
        } catch (error) {
            console.error('Error loading lessons:', error);
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
        if (!container) return;
        container.innerHTML = '';

        this.availableLessons.forEach(lessonNum => {
            const checkboxDiv = document.createElement('div');
            checkboxDiv.className = 'lesson-checkbox-modern';
            checkboxDiv.innerHTML = `
                <input type="checkbox" id="lesson${lessonNum}" value="${lessonNum}">
                <label for="lesson${lessonNum}">${lessonNum}</label>
            `;
            
            const checkbox = checkboxDiv.querySelector('input');
            const label = checkboxDiv.querySelector('label');
            
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


                if (e.target !== checkbox && e.target !== label) {
                    checkbox.checked = !checkbox.checked;
                    checkbox.dispatchEvent(new Event('change'));
                }
            });
            
            container.appendChild(checkboxDiv);
        });
        
        this.updateSelectUpToButton();
    }

    setupEventListeners() {
        document.getElementById('selectAllBtn')?.addEventListener('click', () => {
            this.toggleAllLessons(true);
        });

        document.getElementById('deselectAllBtn')?.addEventListener('click', () => {
            this.toggleAllLessons(false);
        });

        document.getElementById('selectUpToBtn')?.addEventListener('click', () => {
            this.selectUpToCurrentLesson();
        });
        
        document.getElementById('selectAllCardsBtn')?.addEventListener('click', () => {
            this.toggleAllCards(true);
        });
        
        document.getElementById('deselectAllCardsBtn')?.addEventListener('click', () => {
            this.toggleAllCards(false);
        });
        
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

        document.getElementById('startQuizBtn')?.addEventListener('click', () => {
            this.startQuiz();
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
            return Math.max(...this.availableLessons);
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

    async updateCardPreview() {
        const selectedLessons = this.getSelectedLessons();
        
        if (selectedLessons.length === 0) {
            document.getElementById('cardPreviewSection').style.display = 'none';
            return;
        }

        await this.loadVocabulary(selectedLessons);
        this.renderPreviewCards();
        document.getElementById('cardPreviewSection').style.display = 'block';
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
            
            if (result.success) {
                this.vocabularyPool = result.data;
            }
        } catch (error) {
            console.error('Error loading vocabulary:', error);
            this.vocabularyPool = [];
        }
    }

    cleanJapaneseText(text) {
        if (!text) return text;



        return text
            .replace(/[「『][^」』]*[」』].*$/, '') // Japanese brackets
            .replace(/\[[^\]]*\]/g, '') // Square brackets
            .trim();
    }

    renderPreviewCards() {
        const grid = document.getElementById('cardPreviewGrid');
        if (!grid) return;
        
        grid.innerHTML = '';

        this.vocabularyPool.forEach((vocab, index) => {
            const wordId = vocab.id || `card_${index}`;
            const card = document.createElement('div');
            card.className = 'preview-card';
            card.dataset.wordId = wordId;
            card.dataset.vocabData = JSON.stringify(vocab);
            
            if (this.selectedWords.has(wordId)) {
                card.classList.add('selected');
            }

            const cleanKanji = vocab.kanji ? this.cleanJapaneseText(vocab.kanji) : '';
            const cleanHiragana = this.cleanJapaneseText(vocab.hiragana || vocab.japanese || '');
            
            card.innerHTML = `
                <div class="preview-card-checkbox">
                    <input type="checkbox" id="word_${wordId}" ${this.selectedWords.has(wordId) ? 'checked' : ''}>
                </div>
                <div class="preview-card-inner">
                    <div class="preview-card-front">
                        ${cleanKanji && cleanKanji.trim() !== '' ? 
                            `<div class="preview-kanji">${this.makeKanjiClickable(cleanKanji)}</div>` :
                            `<div class="preview-kanji">${this.makeKanjiClickable(cleanHiragana)}</div>`
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
                        <div class="preview-japanese">${cleanHiragana}</div>
                        <div class="preview-romaji">${vocab.romaji || ''}</div>
                        <div class="preview-meaning">${vocab.meaning || ''}</div>
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
            
            const checkbox = card.querySelector('input[type="checkbox"]');
            const speakerBtns = card.querySelectorAll('.preview-speaker-btn');
            const dictionaryBtns = card.querySelectorAll('.preview-dictionary-btn');

            checkbox.addEventListener('change', (e) => {
                e.stopPropagation();
                if (checkbox.checked) {
                    this.selectedWords.add(wordId);
                    card.classList.add('selected');
                } else {
                    this.selectedWords.delete(wordId);
                    card.classList.remove('selected');
                }
                this.updateSelectedCount();
            });

            card.addEventListener('click', (e) => {
                if (!e.target.closest('.preview-card-checkbox') && !e.target.closest('.preview-actions')) {
                    card.classList.toggle('flipped');
                }
            });

            speakerBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.speak(cleanHiragana);
                });
            });

            dictionaryBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const searchText = cleanKanji || cleanHiragana;
                    window.open(`https://mazii.net/search/kanji/javi/${encodeURIComponent(searchText)}`, '_blank');
                });
            });
            
            grid.appendChild(card);
        });

        this.updateSelectedCount();
    }

    makeKanjiClickable(text) {
        if (!text) return '';
        return text.split('').map(char => {
            if (this.isKanji(char)) {
                return `<span class="clickable-kanji" data-kanji="${char}">${char}</span>`;
            }
            return char;
        }).join('');
    }

    isKanji(char) {
        const code = char.charCodeAt(0);
        return (code >= 0x4E00 && code <= 0x9FAF) ||
               (code >= 0x3400 && code <= 0x4DBF) ||
               (code >= 0xF900 && code <= 0xFAFF);
    }

    searchKanji(kanji) {
        window.open(`https://mazii.net/search/kanji/javi/${encodeURIComponent(kanji)}`, '_blank');
    }

    updateSelectedCount() {
        const countElement = document.getElementById('previewCount');
        if (countElement) {
            countElement.textContent = `${this.selectedWords.size} cards selected`;
        }
    }

    startQuiz() {
        if (this.selectedWords.size === 0) {
            alert('Please select at least one word from the preview!');
            return;
        }

        const masteryTarget = parseInt(document.getElementById('masteryCount').value);

        const selectedVocab = [];
        this.selectedWords.forEach(wordId => {
            const cardDiv = document.querySelector(`[data-word-id="${wordId}"]`);
            if (cardDiv) {
                const vocabData = JSON.parse(cardDiv.dataset.vocabData);
                selectedVocab.push(vocabData);
            }
        });

        const returnUrl = window.location.pathname;
        
        sessionStorage.setItem('quizData', JSON.stringify({
            vocabulary: selectedVocab,
            masteryTarget: masteryTarget,
            returnUrl: returnUrl
        }));

        window.location.href = '/vocab/quiz';
    }

    speak(text) {
        if (!text) return;

        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        const voices = window.speechSynthesis.getVoices();
        const japaneseVoice = voices.find(voice => voice.lang.startsWith('ja'));
        if (japaneseVoice) {
            utterance.voice = japaneseVoice;
        }
        
        window.speechSynthesis.speak(utterance);
    }
}

const app = new VocabularySetup();
