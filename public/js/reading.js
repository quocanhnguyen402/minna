
class ReadingPractice {
    constructor() {
        this.currentLesson = null;
        this.availableLessons = [];
        this.lessonData = null;
        this.apiBaseUrl = '/api';
        this.init();
    }

    async init() {
        await this.loadAvailableLessons();
        this.renderLessonSelector();
        this.setupEventListeners();
        this.showEmptyState();
    }

    showEmptyState() {

        const readingPassages = document.getElementById('readingPassages');
        
        if (readingPassages) {
            readingPassages.style.display = 'none';
        }
    }

    async loadAvailableLessons() {
        try {
            const response = await fetch(`${this.apiBaseUrl}/reading/lessons`);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const result = await response.json();
            
            if (result.success) {
                this.availableLessons = result.data;
                console.log('Available reading lessons:', this.availableLessons);
            } else {
                console.error('API returned error for lessons:', result.error || 'Unknown error');
                this.availableLessons = [];
            }
        } catch (error) {
            console.error('Error loading reading lessons:', error);
            this.availableLessons = [];
        }
    }

    renderLessonSelector() {
        const container = document.getElementById('readingLessonButtons');
        if (!container) {
            console.warn('Reading lesson buttons container not found');
            return;
        }
        
        container.innerHTML = '';

        this.availableLessons.forEach(lessonNumber => {
            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'lesson-btn';
            buttonDiv.textContent = lessonNumber;
            buttonDiv.addEventListener('click', () => this.selectLesson(lessonNumber));
            container.appendChild(buttonDiv);
        });

        if (this.availableLessons.length === 0) {
            const message = document.createElement('p');
            message.className = 'placeholder';
            message.textContent = 'No reading lessons available yet.';
            container.appendChild(message);
        }
    }

    async selectLesson(lessonNumber) {

        document.querySelectorAll('.lesson-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        const allButtons = document.querySelectorAll('.lesson-btn');
        const buttonIndex = this.availableLessons.indexOf(lessonNumber);
        if (buttonIndex !== -1 && allButtons[buttonIndex]) {
            allButtons[buttonIndex].classList.add('active');
        }

        this.currentLesson = lessonNumber;
        
        try {
            const response = await fetch(`${this.apiBaseUrl}/reading/lessons/${lessonNumber}`);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const result = await response.json();
            
            if (result.success) {
                this.lessonData = result.data;
                console.log('Loaded lesson data:', this.lessonData);
                console.log('First passage content:', this.lessonData.passages[0]?.content);
                this.showLessonContent();
                this.renderLessonContent();
            } else {
                console.error('API returned error:', result.error || 'Unknown error');
                alert(`Failed to load lesson content: ${result.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error loading lesson data:', error);
            alert(`Error loading lesson content: ${error.message}`);
        }
    }

    showLessonContent() {

        const readingPassages = document.getElementById('readingPassages');
        
        if (readingPassages) {
            readingPassages.style.display = 'block';
        }
    }

    renderLessonContent() {
        if (!this.lessonData) return;

        this.renderPassages();
    }

    renderPassages() {
        const passagesContainer = document.getElementById('readingPassages');
        if (!passagesContainer || !this.lessonData) return;
        
        this.renderPassageTabs();
        this.renderPassageContent();
    }

    renderPassageTabs() {
        const tabsContainer = document.getElementById('passageTabs');
        if (!tabsContainer || !this.lessonData) return;
        
        tabsContainer.innerHTML = '';
        
        this.lessonData.passages.forEach((passage, index) => {
            const tabButton = document.createElement('button');
            tabButton.className = `passage-tab ${index === 0 ? 'active' : ''}`;
            tabButton.dataset.passageId = passage.id;
            tabButton.innerHTML = `
                <div class="tab-title">${passage.title}</div>
            `;
            
            tabButton.addEventListener('click', () => this.switchPassageTab(passage.id));
            tabsContainer.appendChild(tabButton);
        });
    }

    renderPassageContent() {
        const contentContainer = document.getElementById('passageTabContent');
        if (!contentContainer || !this.lessonData) return;
        
        contentContainer.innerHTML = '';
        
        this.lessonData.passages.forEach((passage, index) => {
            const paneDiv = document.createElement('div');
            paneDiv.className = `passage-pane ${index === 0 ? 'active' : ''}`;
            paneDiv.id = `pane-${passage.id}`;

            let japaneseContent = '';
            
            try {
                if (passage.content && Array.isArray(passage.content)) {
                    japaneseContent = passage.content.map((sentence, sentenceIndex) => {

                        if (!sentence || !sentence.words || !Array.isArray(sentence.words)) {
                            console.error('Invalid sentence structure:', sentence);
                            return '<p class="error">Invalid sentence data</p>';
                        }
                        
                        const wordsHtml = sentence.words.map(word => {
                            if (word.type === 'punctuation' || !word.english) {
                                return `<span class="punctuation">${word.japanese}</span>`;
                            }
                            const tooltipText = word.hiragana ? 
                                `${word.hiragana} (${word.english})` : 
                                word.english;
                            return `<span class="hoverable-word" data-translation="${tooltipText}">
                                ${word.japanese}
                                <span class="translation-tooltip">${tooltipText}</span>
                            </span>`;
                        }).join('');

                        const japaneseText = sentence.words.map(word => word.japanese).join('');
                        const sentenceId = `sentence-${passage.id}-${sentenceIndex}`;
                        
                        console.log('Sentence words:', sentence.words.map(w => w.japanese));
                        console.log('Generated HTML for sentence:', wordsHtml);
                        
                        return `
                            <div class="sentence-container">
                                <button class="speaker-btn" onclick="readingPractice.speakSentence('${japaneseText}')" title="Listen to sentence">
                                    🔊
                                </button>
                                <p class="sentence" id="${sentenceId}">${wordsHtml}</p>
                            </div>
                        `;
                    }).join('');
                } else {
                    console.error('Invalid passage content structure:', passage.content);
                    japaneseContent = '<p class="error">No content available</p>';
                }
            } catch (error) {
                console.error('Error rendering passage content:', error);
                japaneseContent = '<p class="error">Error loading content</p>';
            }
            
            paneDiv.innerHTML = `
                <div class="passage-content">
                    <div class="japanese-text" id="passage${passage.id}">
                        ${japaneseContent}
                    </div>
                </div>
            `;
            contentContainer.appendChild(paneDiv);
        });
    }

    switchPassageTab(passageId) {

        document.querySelectorAll('.passage-tab').forEach(tab => {
            tab.classList.remove('active');
        });

        const targetTab = document.querySelector(`[data-passage-id="${passageId}"]`);
        if (targetTab) {
            targetTab.classList.add('active');
        }

        document.querySelectorAll('.passage-pane').forEach(pane => {
            pane.classList.remove('active');
        });

        const targetPane = document.getElementById(`pane-${passageId}`);
        if (targetPane) {
            targetPane.classList.add('active');
        }
    }

    setupEventListeners() {

    }

    speakSentence(text) {

        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(text);

        const voices = window.speechSynthesis.getVoices();
        const japaneseVoice = voices.find(voice => 
            voice.lang.includes('ja') || voice.name.includes('Japanese')
        );
        
        if (japaneseVoice) {
            utterance.voice = japaneseVoice;
        }

        utterance.rate = 0.8; // Slightly slower for learning
        utterance.pitch = 1.0;
        utterance.volume = 0.9;

        window.speechSynthesis.speak(utterance);
        
        console.log('Speaking:', text);
    }


}

let readingPractice;

document.addEventListener('DOMContentLoaded', () => {
    readingPractice = new ReadingPractice();

    if ('speechSynthesis' in window) {

        window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = () => {
            console.log('Available voices loaded:', window.speechSynthesis.getVoices().length);
        };
    } else {
        console.warn('Speech synthesis not supported in this browser');
    }
});