// FukoLingo - Saat Egzersizleri
// Unit 1 için özel saat ve zaman çalışmaları

class TimeExercises {
    constructor(words) {
        this.words = words;
        this.currentExercise = null;
        this.score = 0;
        this.totalQuestions = 0;
        this.correctAnswers = 0;
        
        // Saat egzersiz türleri
        this.exerciseTypes = [
            'readTime',      // Saati oku
            'matchActivity', // Aktivite-saat eşleştirme
            'orderDaily',    // Günlük rutini sırala
            'timeQuestions'  // Zaman soruları
        ];
    }

    // Egzersizi başlat
    start(container) {
        this.container = container;
        this.score = 0;
        this.totalQuestions = 0;
        this.correctAnswers = 0;
        
        this.showMainMenu();
    }

    // Ana menü
    showMainMenu() {
        this.container.innerHTML = `
            <div class="time-exercises">
                <div class="exercise-header">
                    <h2>⏰ Saat ve Zaman Egzersizleri</h2>
                    <div class="exercise-stats">
                        <span>✅ Doğru: ${this.correctAnswers}</span>
                        <span>📊 Toplam: ${this.totalQuestions}</span>
                        <span>⭐ Puan: ${this.score}</span>
                    </div>
                </div>
                
                <div class="exercise-menu">
                    <div class="exercise-card" data-type="readTime">
                        <div class="exercise-icon">🕐</div>
                        <h3>Saati Oku</h3>
                        <p>Gösterilen saati İngilizce oku</p>
                    </div>
                    
                    <div class="exercise-card" data-type="matchActivity">
                        <div class="exercise-icon">📅</div>
                        <h3>Aktivite-Saat Eşleştir</h3>
                        <p>Günlük aktiviteleri saatlerle eşleştir</p>
                    </div>
                    
                    <div class="exercise-card" data-type="orderDaily">
                        <div class="exercise-icon">⏰</div>
                        <h3>Günlük Rutini Sırala</h3>
                        <p>Aktiviteleri doğru sıraya koy</p>
                    </div>
                    
                    <div class="exercise-card" data-type="timeQuestions">
                        <div class="exercise-icon">❓</div>
                        <h3>Zaman Soruları</h3>
                        <p>Before/After sorularını yanıtla</p>
                    </div>
                </div>
                
                <button class="btn-secondary" id="backToModes">⬅️ Geri Dön</button>
            </div>
        `;

        // Event listeners
        document.querySelectorAll('.exercise-card').forEach(card => {
            card.addEventListener('click', () => {
                const type = card.dataset.type;
                this.startExercise(type);
            });
        });

        document.getElementById('backToModes').addEventListener('click', () => {
            window.location.reload();
        });
    }

    // Egzersizi başlat
    startExercise(type) {
        switch(type) {
            case 'readTime':
                this.readTimeExercise();
                break;
            case 'matchActivity':
                this.matchActivityExercise();
                break;
            case 'orderDaily':
                this.orderDailyExercise();
                break;
            case 'timeQuestions':
                this.timeQuestionsExercise();
                break;
        }
    }

    // Egzersiz 1: Saati Oku
    readTimeExercise() {
        const times = this.generateRandomTime();
        const correctAnswer = times.text;
        const options = this.generateTimeOptions(correctAnswer);

        this.container.innerHTML = `
            <div class="time-exercise-area">
                <div class="exercise-header">
                    <button class="btn-back" id="backToMenu">⬅️ Menüye Dön</button>
                    <h3>🕐 Saati Oku</h3>
                    <div class="score-display">⭐ ${this.score}</div>
                </div>

                <div class="clock-display">
                    <div class="clock">
                        <div class="clock-face">
                            <div class="clock-time">${times.digital}</div>
                            <div class="clock-analog">⏰</div>
                        </div>
                    </div>
                    <p class="question-text">Bu saat İngilizce nasıl okunur?</p>
                </div>

                <div class="time-options">
                    ${options.map((option, index) => `
                        <button class="time-option" data-answer="${option}">
                            ${option}
                        </button>
                    `).join('')}
                </div>

                <div class="feedback-area" id="feedback"></div>
            </div>
        `;

        // Event listeners
        document.getElementById('backToMenu').addEventListener('click', () => {
            this.showMainMenu();
        });

        document.querySelectorAll('.time-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.checkTimeAnswer(e.target.dataset.answer, correctAnswer);
            });
        });
    }

    // Egzersiz 2: Aktivite-Saat Eşleştirme
    matchActivityExercise() {
        const activities = [
            { activity: "wake up", time: "7:00 a.m.", emoji: "⏰" },
            { activity: "have breakfast", time: "7:30 a.m.", emoji: "🥞" },
            { activity: "go to school", time: "8:00 a.m.", emoji: "🏫" },
            { activity: "have lunch", time: "12:00 p.m.", emoji: "🍽️" },
            { activity: "arrive home", time: "4:00 p.m.", emoji: "🏡" },
            { activity: "have dinner", time: "7:00 p.m.", emoji: "🍲" },
            { activity: "go to bed", time: "10:00 p.m.", emoji: "🛌" }
        ];

        // Random 4 aktivite seç
        const selected = this.shuffleArray(activities).slice(0, 4);
        const question = selected[0];
        const timeOptions = this.shuffleArray(selected.map(a => a.time));

        this.container.innerHTML = `
            <div class="time-exercise-area">
                <div class="exercise-header">
                    <button class="btn-back" id="backToMenu">⬅️ Menüye Dön</button>
                    <h3>📅 Aktivite-Saat Eşleştir</h3>
                    <div class="score-display">⭐ ${this.score}</div>
                </div>

                <div class="activity-question">
                    <div class="activity-card">
                        <div class="activity-emoji">${question.emoji}</div>
                        <h3>"${question.activity}"</h3>
                        <p>Bu aktivite genellikle ne zaman yapılır?</p>
                    </div>
                </div>

                <div class="time-options">
                    ${timeOptions.map(time => `
                        <button class="time-option" data-answer="${time}">
                            ${time}
                        </button>
                    `).join('')}
                </div>

                <div class="feedback-area" id="feedback"></div>
            </div>
        `;

        document.getElementById('backToMenu').addEventListener('click', () => {
            this.showMainMenu();
        });

        document.querySelectorAll('.time-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.checkActivityAnswer(e.target.dataset.answer, question.time);
            });
        });
    }

    // Egzersiz 3: Günlük Rutini Sırala
    orderDailyExercise() {
        const routine = [
            { text: "I wake up", order: 1, emoji: "⏰" },
            { text: "I have breakfast", order: 2, emoji: "🥞" },
            { text: "I go to school", order: 3, emoji: "🏫" },
            { text: "I have lunch", order: 4, emoji: "🍽️" },
            { text: "I do homework", order: 5, emoji: "📝" },
            { text: "I have dinner", order: 6, emoji: "🍲" },
            { text: "I go to bed", order: 7, emoji: "🛌" }
        ];

        // Random 5 aktivite seç ve karıştır
        const selected = this.shuffleArray(routine.slice(0, 5));
        const correctOrder = selected.sort((a, b) => a.order - b.order);
        const shuffled = this.shuffleArray([...selected]);

        this.container.innerHTML = `
            <div class="time-exercise-area">
                <div class="exercise-header">
                    <button class="btn-back" id="backToMenu">⬅️ Menüye Dön</button>
                    <h3>⏰ Günlük Rutini Sırala</h3>
                    <div class="score-display">⭐ ${this.score}</div>
                </div>

                <p class="instructions">Aktiviteleri günlük sırasına göre dizin (sürükle-bırak veya tıkla):</p>

                <div class="sequence-area">
                    <div class="sequence-target" id="sequenceTarget">
                        <div class="empty-message">Buraya aktiviteleri sürükle</div>
                    </div>

                    <div class="sequence-items" id="sequenceItems">
                        ${shuffled.map((item, index) => `
                            <div class="sequence-item" draggable="true" data-order="${item.order}" data-index="${index}">
                                <span class="item-emoji">${item.emoji}</span>
                                <span class="item-text">${item.text}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <button class="btn-primary" id="checkOrder">Kontrol Et</button>
                <div class="feedback-area" id="feedback"></div>
            </div>
        `;

        this.setupDragAndDrop(correctOrder);
    }

    // Egzersiz 4: Zaman Soruları (Before/After)
    timeQuestionsExercise() {
        const questions = [
            {
                q: "What do you do BEFORE breakfast?",
                options: ["I sleep", "I wake up and wash my face", "I go to school", "I have lunch"],
                correct: "I wake up and wash my face"
            },
            {
                q: "What do you do AFTER school?",
                options: ["I go to school", "I have breakfast", "I do homework", "I wake up"],
                correct: "I do homework"
            },
            {
                q: "What do you do BEFORE going to bed?",
                options: ["I wake up", "I go to school", "I take a shower and read a book", "I have breakfast"],
                correct: "I take a shower and read a book"
            },
            {
                q: "What do you do AFTER dinner?",
                options: ["I have breakfast", "I go to school", "I watch TV or read", "I have lunch"],
                correct: "I watch TV or read"
            },
            {
                q: "Which comes first in the morning?",
                options: ["have breakfast", "go to school", "wake up", "have lunch"],
                correct: "wake up"
            }
        ];

        const question = questions[Math.floor(Math.random() * questions.length)];

        this.container.innerHTML = `
            <div class="time-exercise-area">
                <div class="exercise-header">
                    <button class="btn-back" id="backToMenu">⬅️ Menüye Dön</button>
                    <h3>❓ Zaman Soruları</h3>
                    <div class="score-display">⭐ ${this.score}</div>
                </div>

                <div class="question-card">
                    <p class="question-text">${question.q}</p>
                </div>

                <div class="time-options">
                    ${question.options.map(option => `
                        <button class="time-option" data-answer="${option}">
                            ${option}
                        </button>
                    `).join('')}
                </div>

                <div class="feedback-area" id="feedback"></div>
            </div>
        `;

        document.getElementById('backToMenu').addEventListener('click', () => {
            this.showMainMenu();
        });

        document.querySelectorAll('.time-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.checkAnswer(e.target.dataset.answer, question.correct);
            });
        });
    }

    // Yardımcı Fonksiyonlar

    generateRandomTime() {
        const hours = Math.floor(Math.random() * 12) + 1;
        const minutes = [0, 15, 30, 45][Math.floor(Math.random() * 4)];
        const ampm = Math.random() > 0.5 ? 'a.m.' : 'p.m.';

        let text = '';
        if (minutes === 0) {
            text = `${hours} o'clock ${ampm}`;
        } else if (minutes === 15) {
            text = `quarter past ${hours} ${ampm}`;
        } else if (minutes === 30) {
            text = `half past ${hours} ${ampm}`;
        } else if (minutes === 45) {
            text = `quarter to ${hours + 1} ${ampm}`;
        }

        const digital = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;

        return { text, digital, hours, minutes, ampm };
    }

    generateTimeOptions(correct) {
        const options = [correct];
        const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        const minutes = [0, 15, 30, 45];
        const ampm = ['a.m.', 'p.m.'];

        while (options.length < 4) {
            const h = hours[Math.floor(Math.random() * hours.length)];
            const m = minutes[Math.floor(Math.random() * minutes.length)];
            const ap = ampm[Math.floor(Math.random() * ampm.length)];

            let text = '';
            if (m === 0) text = `${h} o'clock ${ap}`;
            else if (m === 15) text = `quarter past ${h} ${ap}`;
            else if (m === 30) text = `half past ${h} ${ap}`;
            else if (m === 45) text = `quarter to ${h + 1} ${ap}`;

            if (!options.includes(text)) {
                options.push(text);
            }
        }

        return this.shuffleArray(options);
    }

    setupDragAndDrop(correctOrder) {
        const items = document.querySelectorAll('.sequence-item');
        const target = document.getElementById('sequenceTarget');
        let userOrder = [];

        items.forEach(item => {
            // Tıklama ile ekleme
            item.addEventListener('click', () => {
                if (item.parentElement.id === 'sequenceItems') {
                    target.appendChild(item);
                    userOrder.push(parseInt(item.dataset.order));
                    this.updateEmptyMessage();
                }
            });

            // Drag başlat
            item.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', item.dataset.index);
                item.classList.add('dragging');
            });

            item.addEventListener('dragend', () => {
                item.classList.remove('dragging');
            });
        });

        // Drop alanı
        target.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        target.addEventListener('drop', (e) => {
            e.preventDefault();
            const index = e.dataTransfer.getData('text/plain');
            const item = document.querySelector(`[data-index="${index}"]`);
            target.appendChild(item);
            userOrder.push(parseInt(item.dataset.order));
            this.updateEmptyMessage();
        });

        // Kontrol butonu
        document.getElementById('checkOrder').addEventListener('click', () => {
            const targetItems = target.querySelectorAll('.sequence-item');
            const currentOrder = Array.from(targetItems).map(item => parseInt(item.dataset.order));
            const correct = correctOrder.map(item => item.order);
            
            this.checkSequence(currentOrder, correct);
        });

        document.getElementById('backToMenu').addEventListener('click', () => {
            this.showMainMenu();
        });
    }

    updateEmptyMessage() {
        const target = document.getElementById('sequenceTarget');
        const empty = target.querySelector('.empty-message');
        if (empty && target.querySelectorAll('.sequence-item').length > 0) {
            empty.remove();
        }
    }

    // Cevap kontrolü
    checkTimeAnswer(selected, correct) {
        this.totalQuestions++;
        const feedback = document.getElementById('feedback');
        
        if (selected === correct) {
            this.correctAnswers++;
            this.score += 10;
            feedback.innerHTML = `
                <div class="feedback-correct">
                    ✅ Doğru! Harika!
                    <button class="btn btn-primary" id="nextQuestionBtn">Sonraki Soru</button>
                </div>
            `;
            
            document.getElementById('nextQuestionBtn').addEventListener('click', () => {
                this.readTimeExercise();
            });
        } else {
            feedback.innerHTML = `
                <div class="feedback-incorrect">
                    ❌ Yanlış. Doğru cevap: <strong>${correct}</strong>
                    <button class="btn btn-secondary" id="retryBtn">Tekrar Dene</button>
                </div>
            `;
            
            document.getElementById('retryBtn').addEventListener('click', () => {
                this.readTimeExercise();
            });
        }

        document.querySelectorAll('.time-option').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.answer === correct) {
                btn.classList.add('correct');
            } else if (btn.dataset.answer === selected) {
                btn.classList.add('incorrect');
            }
        });

        this.updateScore();
    }

    checkActivityAnswer(selected, correct) {
        this.totalQuestions++;
        const feedback = document.getElementById('feedback');
        
        if (selected === correct) {
            this.correctAnswers++;
            this.score += 10;
            feedback.innerHTML = `
                <div class="feedback-correct">
                    ✅ Doğru! Harika!
                    <button class="btn btn-primary" id="nextActivityBtn">Sonraki Soru</button>
                </div>
            `;
            
            document.getElementById('nextActivityBtn').addEventListener('click', () => {
                this.matchActivityExercise();
            });
        } else {
            feedback.innerHTML = `
                <div class="feedback-incorrect">
                    ❌ Yanlış. Doğru cevap: <strong>${correct}</strong>
                    <button class="btn btn-secondary" id="retryActivityBtn">Tekrar Dene</button>
                </div>
            `;
            
            document.getElementById('retryActivityBtn').addEventListener('click', () => {
                this.matchActivityExercise();
            });
        }

        document.querySelectorAll('.time-option').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.answer === correct) {
                btn.classList.add('correct');
            } else if (btn.dataset.answer === selected) {
                btn.classList.add('incorrect');
            }
        });

        this.updateScore();
    }

    checkAnswer(selected, correct) {
        this.totalQuestions++;
        const feedback = document.getElementById('feedback');
        
        if (selected === correct) {
            this.correctAnswers++;
            this.score += 10;
            feedback.innerHTML = `
                <div class="feedback-correct">
                    ✅ Harika! Doğru cevap!
                    <button class="btn btn-primary" id="nextTimeQBtn">Sonraki Soru</button>
                </div>
            `;
            
            document.getElementById('nextTimeQBtn').addEventListener('click', () => {
                this.timeQuestionsExercise();
            });
        } else {
            feedback.innerHTML = `
                <div class="feedback-incorrect">
                    ❌ Yanlış. Doğru cevap: <strong>${correct}</strong>
                    <button class="btn btn-secondary" id="retryTimeQBtn">Tekrar Dene</button>
                </div>
            `;
            
            document.getElementById('retryTimeQBtn').addEventListener('click', () => {
                this.timeQuestionsExercise();
            });
        }

        document.querySelectorAll('.time-option, .quiz-option').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.answer === correct) {
                btn.classList.add('correct');
            } else if (btn.dataset.answer === selected) {
                btn.classList.add('incorrect');
            }
        });

        this.updateScore();
    }

    checkSequence(userOrder, correctOrder) {
        this.totalQuestions++;
        const feedback = document.getElementById('feedback');
        const isCorrect = JSON.stringify(userOrder) === JSON.stringify(correctOrder);

        if (isCorrect) {
            this.correctAnswers++;
            this.score += 20;
            feedback.innerHTML = `
                <div class="feedback-correct">
                    ✅ Mükemmel! Doğru sıralama!
                    <button class="btn btn-primary" id="nextSequenceBtn">Sonraki Soru</button>
                </div>
            `;
            
            document.getElementById('nextSequenceBtn').addEventListener('click', () => {
                this.orderDailyExercise();
            });
        } else {
            feedback.innerHTML = `
                <div class="feedback-incorrect">
                    ❌ Sıralama yanlış. Tekrar dene!
                    <button class="btn btn-secondary" id="retrySequenceBtn">Yeniden Başlat</button>
                </div>
            `;
            
            document.getElementById('retrySequenceBtn').addEventListener('click', () => {
                this.orderDailyExercise();
            });
        }

        this.updateScore();
    }

    updateScore() {
        const scoreDisplay = document.querySelector('.score-display');
        if (scoreDisplay) {
            scoreDisplay.textContent = `⭐ ${this.score}`;
        }

        // LocalStorage'a kaydet
        const currentPoints = parseInt(localStorage.getItem('totalPoints') || '0');
        localStorage.setItem('totalPoints', currentPoints + 10);
    }

    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
}

// Global fonksiyon
function startTimeExercises(words, container) {
    const exercises = new TimeExercises(words);
    exercises.start(container);
}

