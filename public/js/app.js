
class MinnaApp {
    constructor() {
        this.currentLesson = null;
        this.currentVocabulary = [];
        this.currentGrammar = [];
        this.allVocabulary = [];
        this.totalLessons = 50;
        this.apiBaseUrl = '/api';
        this.init();
    }

    async init() {
        await this.loadAvailableLessons();
        this.generateLessonButtons();
        this.setupTabListeners();
        this.setupSearchListener();

        await this.loadLesson(1);
    }

    async loadAvailableLessons() {
        try {
            const response = await fetch(`${this.apiBaseUrl}/lessons`);
            const result = await response.json();
            
            if (result.success) {
                this.availableLessons = result.data;
            } else {
                console.error('Failed to load available lessons');
                this.availableLessons = [1, 2, 3]; // Default fallback
            }
        } catch (error) {
            console.error('Error loading available lessons:', error);
            this.availableLessons = [1, 2, 3]; // Default fallback
        }
    }

    generateLessonButtons() {
        const lessonButtonsContainer = document.getElementById('lessonButtons');

        if (this.availableLessons && this.availableLessons.length > 0) {
            this.availableLessons.forEach(lessonNumber => {
                const button = document.createElement('button');
                button.className = 'lesson-btn available';
                button.textContent = lessonNumber;
                button.dataset.lesson = lessonNumber;
                
                button.addEventListener('click', () => {
                    this.loadLesson(lessonNumber);
                    this.setActiveLesson(button);
                });
                
                lessonButtonsContainer.appendChild(button);
            });
        } else {

            lessonButtonsContainer.innerHTML = '<p class="placeholder">No lessons available</p>';
        }
    }

    setActiveLesson(activeButton) {
        const allButtons = document.querySelectorAll('.lesson-btn');
        allButtons.forEach(btn => btn.classList.remove('active'));
        activeButton.classList.add('active');
    }

    async loadLesson(lessonNumber) {
        this.currentLesson = lessonNumber;
        
        try {
            const response = await fetch(`${this.apiBaseUrl}/lessons/${lessonNumber}`);
            const result = await response.json();
            
            if (result.success && result.data) {
                this.currentVocabulary = result.data.vocabulary || [];
                this.currentGrammar = result.data.grammar || [];
                this.displayVocabulary();
                this.displayGrammar();
            } else {
                this.displayNoDataMessage(lessonNumber);
            }
        } catch (error) {
            console.error('Error loading lesson:', error);
            this.displayNoDataMessage(lessonNumber);
        }
    }

    displayVocabulary() {
        const vocabularyList = document.getElementById('vocabularyList');
        
        if (this.currentVocabulary.length === 0) {
            vocabularyList.innerHTML = '<p class="placeholder">No vocabulary data available for this lesson</p>';
            return;
        }
        
        this.allVocabulary = this.currentVocabulary;
        this.renderVocabulary(this.currentVocabulary);
    }

    renderVocabulary(vocabArray) {
        const vocabularyList = document.getElementById('vocabularyList');
        vocabularyList.innerHTML = '';
        
        vocabArray.forEach(item => {
            const vocabItem = document.createElement('div');
            vocabItem.className = 'vocab-item';

            const frontText = item.kanji || item.japanese;
            
            vocabItem.innerHTML = `
                <div class="vocab-card">
                    <div class="vocab-front">
                        <div class="vocab-kanji">${frontText}</div>
                    </div>
                    <div class="vocab-back">
                        <div class="vocab-japanese">${item.japanese}</div>
                        <div class="vocab-romaji">${item.romaji}</div>
                        <div class="vocab-meaning">${item.meaning}</div>
                    </div>
                </div>
            `;

            vocabItem.addEventListener('click', () => {
                vocabItem.classList.toggle('flipped');
            });
            
            vocabularyList.appendChild(vocabItem);
        });
    }

    displayGrammar() {
        const grammarList = document.getElementById('grammarList');
        
        if (this.currentGrammar.length === 0) {
            grammarList.innerHTML = '<p class="placeholder">No grammar data available for this lesson</p>';
            return;
        }
        
        grammarList.innerHTML = '';
        
        this.currentGrammar.forEach(item => {
            const grammarItem = document.createElement('div');
            grammarItem.className = 'grammar-item';
            
            let examplesHTML = '';
            if (item.examples && item.examples.length > 0) {
                examplesHTML = '<div class="grammar-examples">';
                item.examples.forEach(example => {
                    examplesHTML += `
                        <div class="grammar-example">
                            <div class="example-japanese">${example.japanese}</div>
                            <div class="example-romaji">${example.romaji}</div>
                            <div class="example-english">${example.english}</div>
                        </div>
                    `;
                });
                examplesHTML += '</div>';
            }
            
            grammarItem.innerHTML = `
                <div class="grammar-title">${item.title}</div>
                <div class="grammar-pattern">${item.pattern}</div>
                <div class="grammar-explanation">${item.explanation}</div>
                ${examplesHTML}
            `;
            
            grammarList.appendChild(grammarItem);
        });
    }

    displayNoDataMessage(lessonNumber) {
        const vocabularyList = document.getElementById('vocabularyList');
        const grammarList = document.getElementById('grammarList');
        
        const message = `
            <p class="placeholder">
                Lesson ${lessonNumber} data is not yet available.<br>
                <small>Currently available lessons: ${this.availableLessons.join(', ')}</small>
            </p>
        `;
        
        vocabularyList.innerHTML = message;
        grammarList.innerHTML = message;
        
        this.currentVocabulary = [];
        this.currentGrammar = [];
    }

    setupTabListeners() {
        const tabButtons = document.querySelectorAll('.tab-button');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabName = button.dataset.tab;
                this.switchTab(tabName);

                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    switchTab(tabName) {
        const tabPanes = document.querySelectorAll('.tab-pane');
        
        tabPanes.forEach(pane => {
            pane.classList.remove('active');
        });
        
        const activePane = document.getElementById(tabName);
        if (activePane) {
            activePane.classList.add('active');
        }
    }

    setupSearchListener() {
        const searchInput = document.getElementById('vocabSearch');
        
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            this.filterVocabulary(searchTerm);
        });
    }

    filterVocabulary(searchTerm) {
        if (searchTerm === '') {
            this.renderVocabulary(this.allVocabulary);
            return;
        }
        
        const filtered = this.allVocabulary.filter(item => {
            return item.japanese.toLowerCase().includes(searchTerm) ||
                   item.romaji.toLowerCase().includes(searchTerm) ||
                   item.meaning.toLowerCase().includes(searchTerm) ||
                   (item.kanji && item.kanji.toLowerCase().includes(searchTerm));
        });
        
        this.renderVocabulary(filtered);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MinnaApp();
});
