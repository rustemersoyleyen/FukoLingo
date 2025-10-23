// FukoLingo - Sıralama Egzersizleri
// Unit 1 için ay, gün ve sıra sayıları çalışmaları

class SequenceExercises {
    constructor(words) {
        this.words = words;
        this.score = 0;
        this.totalQuestions = 0;
        this.correctAnswers = 0;
    }

    start(container) {
        this.container = container;
        this.showMainMenu();
    }

    showMainMenu() {
        this.container.innerHTML = `
            <div class="sequence-exercises">
                <div class="exercise-header">
                    <h2>🔢 Sıralama Egzersizleri</h2>
                    <div class="exercise-stats">
                        <span>✅ Doğru: ${this.correctAnswers}</span>
                        <span>📊 Toplam: ${this.totalQuestions}</span>
                        <span>⭐ Puan: ${this.score}</span>
                    </div>
                </div>
                
                <div class="exercise-menu">
                    <div class="exercise-card" data-type="orderMonths">
                        <div class="exercise-icon">📅</div>
                        <h3>Ayları Sırala</h3>
                        <p>12 ayı doğru sıraya koy</p>
                    </div>
                    
                    <div class="exercise-card" data-type="orderDays">
                        <div class="exercise-icon">📆</div>
                        <h3>Günleri Sırala</h3>
                        <p>Haftanın günlerini sırala</p>
                    </div>
                    
                    <div class="exercise-card" data-type="orderSeasons">
                        <div class="exercise-icon">🌸</div>
                        <h3>Mevsimleri Sırala</h3>
                        <p>4 mevsimi doğru sıraya koy</p>
                    </div>
                    
                    <div class="exercise-card" data-type="ordinalNumbers">
                        <div class="exercise-icon">🥇</div>
                        <h3>Sıra Sayıları</h3>
                        <p>First, second, third...</p>
                    </div>
                    
                    <div class="exercise-card" data-type="monthQuiz">
                        <div class="exercise-icon">❓</div>
                        <h3>Ay Bilgisi Testi</h3>
                        <p>Aylar hakkında sorular</p>
                    </div>
                </div>
                
                <button class="btn-secondary" id="backToModes">⬅️ Geri Dön</button>
            </div>
        `;

        document.querySelectorAll('.exercise-card').forEach(card => {
            card.addEventListener('click', () => {
                this.startExercise(card.dataset.type);
            });
        });

        document.getElementById('backToModes').addEventListener('click', () => {
            window.location.reload();
        });
    }

    startExercise(type) {
        switch(type) {
            case 'orderMonths':
                this.orderMonthsExercise();
                break;
            case 'orderDays':
                this.orderDaysExercise();
                break;
            case 'orderSeasons':
                this.orderSeasonsExercise();
                break;
            case 'ordinalNumbers':
                this.ordinalNumbersExercise();
                break;
            case 'monthQuiz':
                this.monthQuizExercise();
                break;
        }
    }

    // Egzersiz 1: Ayları Sırala
    orderMonthsExercise() {
        const months = [
            { name: "January", order: 1, emoji: "☃️", tr: "Ocak" },
            { name: "February", order: 2, emoji: "❤️", tr: "Şubat" },
            { name: "March", order: 3, emoji: "🍀", tr: "Mart" },
            { name: "April", order: 4, emoji: "🌷", tr: "Nisan" },
            { name: "May", order: 5, emoji: "🌼", tr: "Mayıs" },
            { name: "June", order: 6, emoji: "🌊", tr: "Haziran" },
            { name: "July", order: 7, emoji: "🏖️", tr: "Temmuz" },
            { name: "August", order: 8, emoji: "🌻", tr: "Ağustos" },
            { name: "September", order: 9, emoji: "🎒", tr: "Eylül" },
            { name: "October", order: 10, emoji: "🎃", tr: "Ekim" },
            { name: "November", order: 11, emoji: "🍁", tr: "Kasım" },
            { name: "December", order: 12, emoji: "🎄", tr: "Aralık" }
        ];

        // Random 6 ay seç
        const selected = this.shuffleArray(months).slice(0, 6);
        const shuffled = this.shuffleArray([...selected]);

        this.container.innerHTML = `
            <div class="sequence-exercise-area">
                <div class="exercise-header">
                    <button class="btn-back" id="backToMenu">⬅️ Menüye Dön</button>
                    <h3>📅 Ayları Doğru Sıraya Koy</h3>
                    <div class="score-display">⭐ ${this.score}</div>
                </div>

                <p class="instructions">Ayları yıl içindeki sırasına göre dizin:</p>

                <div class="sequence-container">
                    <div class="sequence-grid" id="sequenceGrid">
                        ${shuffled.map((month, index) => `
                            <div class="sequence-block draggable" draggable="true" 
                                 data-order="${month.order}" data-index="${index}">
                                <div class="block-emoji">${month.emoji}</div>
                                <div class="block-name">${month.name}</div>
                                <div class="block-tr">${month.tr}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <button class="btn-primary btn-large" id="checkOrder">✓ Kontrol Et</button>
                <button class="btn-secondary" id="resetOrder">🔄 Yeniden Başlat</button>
                
                <div class="feedback-area" id="feedback"></div>
            </div>
        `;

        this.setupMonthDragAndDrop(selected);
    }

    // Egzersiz 2: Günleri Sırala
    orderDaysExercise() {
        const days = [
            { name: "Monday", order: 1, emoji: "📅", tr: "Pazartesi" },
            { name: "Tuesday", order: 2, emoji: "📅", tr: "Salı" },
            { name: "Wednesday", order: 3, emoji: "📅", tr: "Çarşamba" },
            { name: "Thursday", order: 4, emoji: "📅", tr: "Perşembe" },
            { name: "Friday", order: 5, emoji: "📅", tr: "Cuma" },
            { name: "Saturday", order: 6, emoji: "🎉", tr: "Cumartesi" },
            { name: "Sunday", order: 7, emoji: "🎉", tr: "Pazar" }
        ];

        const shuffled = this.shuffleArray([...days]);

        this.container.innerHTML = `
            <div class="sequence-exercise-area">
                <div class="exercise-header">
                    <button class="btn-back" id="backToMenu">⬅️ Menüye Dön</button>
                    <h3>📆 Haftanın Günlerini Sırala</h3>
                    <div class="score-display">⭐ ${this.score}</div>
                </div>

                <p class="instructions">Günleri Pazartesi'den başlayarak sırala:</p>

                <div class="sequence-container">
                    <div class="sequence-grid" id="sequenceGrid">
                        ${shuffled.map((day, index) => `
                            <div class="sequence-block draggable" draggable="true" 
                                 data-order="${day.order}" data-index="${index}">
                                <div class="block-emoji">${day.emoji}</div>
                                <div class="block-name">${day.name}</div>
                                <div class="block-tr">${day.tr}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <button class="btn-primary btn-large" id="checkOrder">✓ Kontrol Et</button>
                <button class="btn-secondary" id="resetOrder">🔄 Yeniden Başlat</button>
                
                <div class="feedback-area" id="feedback"></div>
            </div>
        `;

        this.setupMonthDragAndDrop(days);
    }

    // Egzersiz 3: Mevsimleri Sırala
    orderSeasonsExercise() {
        const seasons = [
            { name: "Spring", order: 1, emoji: "🌸", tr: "İlkbahar", months: "Mar-May" },
            { name: "Summer", order: 2, emoji: "☀️", tr: "Yaz", months: "Jun-Aug" },
            { name: "Autumn", order: 3, emoji: "🍂", tr: "Sonbahar", months: "Sep-Nov" },
            { name: "Winter", order: 4, emoji: "❄️", tr: "Kış", months: "Dec-Feb" }
        ];

        const shuffled = this.shuffleArray([...seasons]);

        this.container.innerHTML = `
            <div class="sequence-exercise-area">
                <div class="exercise-header">
                    <button class="btn-back" id="backToMenu">⬅️ Menüye Dön</button>
                    <h3>🌸 Mevsimleri Sırala</h3>
                    <div class="score-display">⭐ ${this.score}</div>
                </div>

                <p class="instructions">Mevsimleri İlkbahar'dan başlayarak sırala:</p>

                <div class="sequence-container">
                    <div class="sequence-grid large-grid" id="sequenceGrid">
                        ${shuffled.map((season, index) => `
                            <div class="sequence-block draggable large-block" draggable="true" 
                                 data-order="${season.order}" data-index="${index}">
                                <div class="block-emoji large-emoji">${season.emoji}</div>
                                <div class="block-name">${season.name}</div>
                                <div class="block-tr">${season.tr}</div>
                                <div class="block-info">${season.months}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <button class="btn-primary btn-large" id="checkOrder">✓ Kontrol Et</button>
                <button class="btn-secondary" id="resetOrder">🔄 Yeniden Başlat</button>
                
                <div class="feedback-area" id="feedback"></div>
            </div>
        `;

        this.setupMonthDragAndDrop(seasons);
    }

    // Egzersiz 4: Sıra Sayıları
    ordinalNumbersExercise() {
        const ordinals = [
            { num: 1, ordinal: "first", suffix: "1st" },
            { num: 2, ordinal: "second", suffix: "2nd" },
            { num: 3, ordinal: "third", suffix: "3rd" },
            { num: 4, ordinal: "fourth", suffix: "4th" },
            { num: 5, ordinal: "fifth", suffix: "5th" },
            { num: 6, ordinal: "sixth", suffix: "6th" },
            { num: 7, ordinal: "seventh", suffix: "7th" },
            { num: 8, ordinal: "eighth", suffix: "8th" },
            { num: 9, ordinal: "ninth", suffix: "9th" },
            { num: 10, ordinal: "tenth", suffix: "10th" }
        ];

        const question = ordinals[Math.floor(Math.random() * ordinals.length)];
        const options = this.generateOrdinalOptions(question.ordinal, ordinals);

        this.container.innerHTML = `
            <div class="sequence-exercise-area">
                <div class="exercise-header">
                    <button class="btn-back" id="backToMenu">⬅️ Menüye Dön</button>
                    <h3>🥇 Sıra Sayıları</h3>
                    <div class="score-display">⭐ ${this.score}</div>
                </div>

                <div class="ordinal-question">
                    <div class="number-display">
                        <div class="big-number">${question.suffix}</div>
                        <p class="question-text">Bu sayı İngilizce nasıl okunur?</p>
                    </div>
                </div>

                <div class="ordinal-options">
                    ${options.map(option => `
                        <button class="ordinal-option" data-answer="${option}">
                            ${option}
                        </button>
                    `).join('')}
                </div>

                <div class="ordinal-reference">
                    <h4>📚 Sıra Sayıları Referansı:</h4>
                    <div class="reference-grid">
                        <span>1st = first</span>
                        <span>2nd = second</span>
                        <span>3rd = third</span>
                        <span>4th = fourth</span>
                        <span>5th = fifth</span>
                        <span>6th = sixth</span>
                        <span>7th = seventh</span>
                        <span>8th = eighth</span>
                        <span>9th = ninth</span>
                        <span>10th = tenth</span>
                    </div>
                </div>

                <div class="feedback-area" id="feedback"></div>
            </div>
        `;

        document.getElementById('backToMenu').addEventListener('click', () => {
            this.showMainMenu();
        });

        document.querySelectorAll('.ordinal-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.checkAnswer(e.target.dataset.answer, question.ordinal);
            });
        });
    }

    // Egzersiz 5: Ay Bilgisi Testi
    monthQuizExercise() {
        const questions = [
            {
                q: "Which is the first month of the year?",
                options: ["December", "January", "February", "March"],
                correct: "January"
            },
            {
                q: "Which month comes after April?",
                options: ["March", "June", "May", "July"],
                correct: "May"
            },
            {
                q: "Which month comes before September?",
                options: ["October", "August", "July", "November"],
                correct: "August"
            },
            {
                q: "Which is the last month of the year?",
                options: ["November", "January", "December", "October"],
                correct: "December"
            },
            {
                q: "Which month is the shortest?",
                options: ["January", "February", "April", "June"],
                correct: "February"
            },
            {
                q: "In which month do schools close in Turkey?",
                options: ["May", "June", "July", "August"],
                correct: "June"
            },
            {
                q: "In which month do schools start in Turkey?",
                options: ["August", "September", "October", "July"],
                correct: "September"
            },
            {
                q: "Which month comes between June and August?",
                options: ["May", "September", "July", "April"],
                correct: "July"
            }
        ];

        const question = questions[Math.floor(Math.random() * questions.length)];

        this.container.innerHTML = `
            <div class="sequence-exercise-area">
                <div class="exercise-header">
                    <button class="btn-back" id="backToMenu">⬅️ Menüye Dön</button>
                    <h3>❓ Ay Bilgisi Testi</h3>
                    <div class="score-display">⭐ ${this.score}</div>
                </div>

                <div class="quiz-question">
                    <p class="question-text">${question.q}</p>
                </div>

                <div class="quiz-options">
                    ${question.options.map(option => `
                        <button class="quiz-option" data-answer="${option}">
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

        document.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.checkAnswer(e.target.dataset.answer, question.correct);
            });
        });
    }

    // Yardımcı Fonksiyonlar

    setupMonthDragAndDrop(correctData) {
        const grid = document.getElementById('sequenceGrid');
        const blocks = grid.querySelectorAll('.draggable');
        let draggedElement = null;

        blocks.forEach(block => {
            // Drag başlat
            block.addEventListener('dragstart', (e) => {
                draggedElement = block;
                block.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
            });

            block.addEventListener('dragend', () => {
                block.classList.remove('dragging');
            });

            // Drop izin ver
            block.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
            });

            block.addEventListener('drop', (e) => {
                e.preventDefault();
                if (draggedElement !== block) {
                    // Elementleri değiştir
                    const allBlocks = [...grid.children];
                    const draggedIndex = allBlocks.indexOf(draggedElement);
                    const targetIndex = allBlocks.indexOf(block);

                    if (draggedIndex < targetIndex) {
                        block.parentNode.insertBefore(draggedElement, block.nextSibling);
                    } else {
                        block.parentNode.insertBefore(draggedElement, block);
                    }
                }
            });

            // Mobil dokunmatik destek
            block.addEventListener('touchstart', (e) => {
                block.classList.add('touching');
            });

            block.addEventListener('touchend', () => {
                block.classList.remove('touching');
            });
        });

        // Kontrol butonu
        document.getElementById('checkOrder').addEventListener('click', () => {
            const currentBlocks = grid.querySelectorAll('.sequence-block');
            const currentOrder = Array.from(currentBlocks).map(b => parseInt(b.dataset.order));
            const correctOrder = correctData.sort((a, b) => a.order - b.order).map(d => d.order);
            
            this.checkSequence(currentOrder, correctOrder);
        });

        // Yeniden başlat butonu
        document.getElementById('resetOrder').addEventListener('click', () => {
            const blocks = Array.from(grid.children);
            const shuffled = this.shuffleArray(blocks);
            grid.innerHTML = '';
            shuffled.forEach(block => grid.appendChild(block));
        });

        document.getElementById('backToMenu').addEventListener('click', () => {
            this.showMainMenu();
        });
    }

    generateOrdinalOptions(correct, allOrdinals) {
        const options = [correct];
        
        while (options.length < 4) {
            const random = allOrdinals[Math.floor(Math.random() * allOrdinals.length)].ordinal;
            if (!options.includes(random)) {
                options.push(random);
            }
        }

        return this.shuffleArray(options);
    }

    checkAnswer(selected, correct) {
        this.totalQuestions++;
        const feedback = document.getElementById('feedback');
        const buttons = document.querySelectorAll('button[data-answer]');

        buttons.forEach(btn => btn.disabled = true);

        if (selected === correct) {
            this.correctAnswers++;
            this.score += 10;
            feedback.innerHTML = `
                <div class="feedback-correct">
                    ✅ Harika! Doğru cevap!
                    <button class="btn-primary" onclick="location.reload()">Sonraki Soru</button>
                </div>
            `;
            
            buttons.forEach(btn => {
                if (btn.dataset.answer === correct) {
                    btn.classList.add('correct');
                }
            });
        } else {
            feedback.innerHTML = `
                <div class="feedback-incorrect">
                    ❌ Yanlış. Doğru cevap: <strong>${correct}</strong>
                    <button class="btn-primary" onclick="location.reload()">Tekrar Dene</button>
                </div>
            `;
            
            buttons.forEach(btn => {
                if (btn.dataset.answer === correct) {
                    btn.classList.add('correct');
                } else if (btn.dataset.answer === selected) {
                    btn.classList.add('incorrect');
                }
            });
        }

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
                    🎉 Mükemmel! Tüm sıralama doğru!
                    <button class="btn-primary" onclick="location.reload()">Yeni Soru</button>
                </div>
            `;
        } else {
            feedback.innerHTML = `
                <div class="feedback-incorrect">
                    ❌ Sıralama doğru değil. Tekrar dene!
                    <p class="hint">İpucu: Doğru sırayı düşün ve kartları yeniden düzenle.</p>
                </div>
            `;
        }

        this.updateScore();
    }

    updateScore() {
        const scoreDisplay = document.querySelector('.score-display');
        if (scoreDisplay) {
            scoreDisplay.textContent = `⭐ ${this.score}`;
        }

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
function startSequenceExercises(words, container) {
    const exercises = new SequenceExercises(words);
    exercises.start(container);
}

