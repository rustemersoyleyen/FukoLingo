// FukoLingo - Kelime Adası Macerası - Mini Oyunlar

const IslandGames = {
    currentGame: null,
    currentWords: [],
    currentScore: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    
    // Oyunu başlat
    async startGame(gate, unitWords) {
        this.currentGame = gate;
        this.currentScore = 0;
        this.totalQuestions = gate.words.length;
        this.correctAnswers = 0;
        
        // Üniteden kelimeleri al ve KARIŞTIR (her seferinde farklı sırada)
        this.currentWords = shuffleArray(
            unitWords.filter(w => gate.words.includes(w.english.toLowerCase()))
        );
        
        // Oyun tipine göre yükle
        switch(gate.gameType) {
            case 'match-image':
                await this.loadMatchImageGame();
                break;
            case 'word-scramble':
                await this.loadWordScrambleGame();
                break;
            case 'listen-select':
                await this.loadListenSelectGame();
                break;
            case 'sentence-fill':
                await this.loadSentenceFillGame();
                break;
        }
    },
    
    // 1. Kelime-Resim Eşleştirme
    async loadMatchImageGame() {
        const gate = this.currentGame;
        const activityArea = document.getElementById('activityArea');
        
        activityArea.innerHTML = `
            <div style="max-width: 900px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <h2 style="color: var(--text-dark); margin-bottom: 10px;">
                        ${gate.emoji} ${gate.name}
                    </h2>
                    <p style="color: var(--text-light);">${gameTypes[gate.gameType].description}</p>
                    <div style="margin-top: 15px;">
                        <span style="background: var(--primary-color); color: white; padding: 8px 20px; border-radius: 20px; font-weight: 600;">
                            Soru: <span id="questionNumber">1</span> / ${this.totalQuestions}
                        </span>
                        <span style="background: var(--success-color); color: white; padding: 8px 20px; border-radius: 20px; font-weight: 600; margin-left: 10px;">
                            Doğru: <span id="correctCount">0</span>
                        </span>
                    </div>
                </div>
                
                <div id="gameContainer" style="min-height: 400px;">
                    <!-- Oyun içeriği buraya yüklenecek -->
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button class="btn btn-secondary" onclick="IslandAdventure.backToGates()">
                        Geri Dön
                    </button>
                </div>
            </div>
        `;
        
        this.showNextMatchQuestion(0);
    },
    
    // Eşleştirme sorusu göster
    async showNextMatchQuestion(index) {
        if (index >= this.currentWords.length) {
            this.finishGame();
            return;
        }
        
        const word = this.currentWords[index];
        const gameContainer = document.getElementById('gameContainer');
        
        // İpucu al (Gemini veya fallback)
        const hint = await IslandGemini.generateHint(word.english, 'breakfast');
        
        // Yanlış seçenekler
        const wrongWords = this.currentWords.filter(w => w.english !== word.english);
        const shuffled = shuffleArray([word, ...wrongWords.slice(0, 3)]);
        
        gameContainer.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 8rem; margin: 30px 0;">${word.image}</div>
                
                <div style="background: #f0f9ff; padding: 15px; border-radius: 10px; margin-bottom: 30px;">
                    <p style="color: var(--text-dark); font-size: 1.1rem;">
                        💡 <strong>İpucu:</strong> ${hint.hint}
                    </p>
                </div>
                
                <p style="color: var(--text-dark); font-size: 1.3rem; margin-bottom: 20px; font-weight: 600;">
                    Bu hangi kelime?
                </p>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; max-width: 500px; margin: 0 auto;">
                    ${shuffled.map(w => `
                        <button class="match-choice-btn" onclick="IslandGames.checkMatchAnswer('${w.english}', '${word.english}', ${index})"
                                style="padding: 20px; font-size: 1.2rem; font-weight: 600; border: 3px solid var(--primary-color); background: white; color: var(--primary-color); border-radius: 10px; cursor: pointer; transition: all 0.2s;">
                            ${w.english}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    },
    
    // Eşleştirme cevabını kontrol et
    checkMatchAnswer(selected, correct, index) {
        const isCorrect = selected === correct;
        
        if (isCorrect) {
            this.correctAnswers++;
            document.getElementById('correctCount').textContent = this.correctAnswers;
            showCelebration('🎉 Doğru!');
            addPointsWithAnimation(20);
        } else {
            showCelebration('❌ Yanlış! Doğrusu: ' + correct, false);
        }
        
        // Sonraki soruya geç
        setTimeout(() => {
            document.getElementById('questionNumber').textContent = index + 2;
            this.showNextMatchQuestion(index + 1);
        }, 1500);
    },
    
    // 2. Kelime Oluşturma (Harfleri Sırala)
    async loadWordScrambleGame() {
        const gate = this.currentGame;
        const activityArea = document.getElementById('activityArea');
        
        activityArea.innerHTML = `
            <div style="max-width: 900px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <h2 style="color: var(--text-dark); margin-bottom: 10px;">
                        ${gate.emoji} ${gate.name}
                    </h2>
                    <p style="color: var(--text-light);">${gameTypes[gate.gameType].description}</p>
                    <div style="margin-top: 15px;">
                        <span style="background: var(--primary-color); color: white; padding: 8px 20px; border-radius: 20px; font-weight: 600;">
                            Soru: <span id="questionNumber">1</span> / ${this.totalQuestions}
                        </span>
                        <span style="background: var(--success-color); color: white; padding: 8px 20px; border-radius: 20px; font-weight: 600; margin-left: 10px;">
                            Doğru: <span id="correctCount">0</span>
                        </span>
                    </div>
                </div>
                
                <div id="gameContainer" style="min-height: 400px;">
                    <!-- Oyun içeriği buraya yüklenecek -->
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button class="btn btn-secondary" onclick="IslandAdventure.backToGates()">
                        Geri Dön
                    </button>
                </div>
            </div>
        `;
        
        this.showNextScrambleQuestion(0);
    },
    
    // Kelime oluşturma sorusu göster
    async showNextScrambleQuestion(index) {
        if (index >= this.currentWords.length) {
            this.finishGame();
            return;
        }
        
        const word = this.currentWords[index];
        const gameContainer = document.getElementById('gameContainer');
        
        // Harfleri karıştır
        const scrambled = shuffleArray(word.english.split('')).join('');
        const hint = await IslandGemini.generateHint(word.english, 'breakfast');
        
        gameContainer.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 6rem; margin: 30px 0;">${word.image}</div>
                
                <div style="background: #f0f9ff; padding: 15px; border-radius: 10px; margin-bottom: 30px;">
                    <p style="color: var(--text-dark); font-size: 1.1rem;">
                        💡 <strong>İpucu:</strong> ${hint.hint}
                    </p>
                </div>
                
                <div style="background: var(--primary-color); color: white; padding: 20px; border-radius: 15px; margin: 30px auto; max-width: 400px;">
                    <p style="font-size: 0.9rem; margin-bottom: 10px;">Karışık Harfler:</p>
                    <p style="font-size: 2.5rem; font-weight: 700; letter-spacing: 8px;">${scrambled.toUpperCase()}</p>
                </div>
                
                <input type="text" id="scrambleInput" 
                       placeholder="Kelimeyi yaz..."
                       style="padding: 15px; font-size: 1.5rem; text-align: center; border: 3px solid var(--primary-color); border-radius: 10px; width: 300px; margin-bottom: 20px;"
                       onkeypress="if(event.key==='Enter') IslandGames.checkScrambleAnswer('${word.english}', ${index})">
                
                <br>
                
                <button class="btn btn-primary" onclick="IslandGames.checkScrambleAnswer('${word.english}', ${index})"
                        style="font-size: 1.2rem; padding: 15px 40px;">
                    ✓ Kontrol Et
                </button>
            </div>
        `;
        
        document.getElementById('scrambleInput').focus();
    },
    
    // Kelime oluşturma cevabını kontrol et
    checkScrambleAnswer(correct, index) {
        const input = document.getElementById('scrambleInput');
        const answer = input.value.trim().toLowerCase();
        
        if (!answer) {
            showCelebration('⚠️ Lütfen bir kelime yaz!', false);
            return;
        }
        
        const isCorrect = answer === correct.toLowerCase();
        
        if (isCorrect) {
            this.correctAnswers++;
            document.getElementById('correctCount').textContent = this.correctAnswers;
            showCelebration('🎉 Mükemmel!');
            addPointsWithAnimation(20);
        } else {
            showCelebration(`❌ Yanlış! Doğrusu: ${correct}`, false);
        }
        
        // Sonraki soruya geç
        setTimeout(() => {
            document.getElementById('questionNumber').textContent = index + 2;
            this.showNextScrambleQuestion(index + 1);
        }, 2000);
    },
    
    // 3. Dinle ve Seç (Ses sentezi ile)
    async loadListenSelectGame() {
        const gate = this.currentGame;
        const activityArea = document.getElementById('activityArea');
        
        activityArea.innerHTML = `
            <div style="max-width: 900px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 20px;">
                    <h2 style="color: var(--text-dark); margin-bottom: 10px;">
                        ${gate.emoji} ${gate.name}
                    </h2>
                    <p style="color: var(--text-light);">${gameTypes[gate.gameType].description}</p>
                    <div style="margin-top: 15px;">
                        <span style="background: var(--primary-color); color: white; padding: 8px 20px; border-radius: 20px; font-weight: 600;">
                            Soru: <span id="questionNumber">1</span> / ${this.totalQuestions}
                        </span>
                        <span style="background: var(--success-color); color: white; padding: 8px 20px; border-radius: 20px; font-weight: 600; margin-left: 10px;">
                            Doğru: <span id="correctCount">0</span>
                        </span>
                    </div>
                </div>
                
                <div id="gameContainer" style="min-height: 400px;">
                    <!-- Oyun içeriği buraya yüklenecek -->
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                    <button class="btn btn-secondary" onclick="IslandAdventure.backToGates()">
                        Geri Dön
                    </button>
                </div>
            </div>
        `;
        
        this.showNextListenQuestion(0);
    },
    
    // Dinle ve seç sorusu göster
    async showNextListenQuestion(index) {
        if (index >= this.currentWords.length) {
            this.finishGame();
            return;
        }
        
        const word = this.currentWords[index];
        const gameContainer = document.getElementById('gameContainer');
        
        // Yanlış seçenekler
        const wrongWords = this.currentWords.filter(w => w.english !== word.english);
        const shuffled = shuffleArray([word, ...wrongWords.slice(0, 3)]);
        
        gameContainer.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 8rem; margin: 30px 0;">👂</div>
                
                <p style="color: var(--text-dark); font-size: 1.3rem; margin-bottom: 30px;">
                    Kelimeyi dinle ve doğru yazılışını seç!
                </p>
                
                <button onclick="IslandGames.playWord('${word.english}')" 
                        style="background: var(--primary-color); color: white; border: none; padding: 30px 60px; border-radius: 20px; font-size: 1.5rem; cursor: pointer; margin-bottom: 40px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: transform 0.2s;"
                        onmouseover="this.style.transform='scale(1.05)'"
                        onmouseout="this.style.transform='scale(1)'">
                    🔊 Dinle
                </button>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; max-width: 500px; margin: 0 auto;">
                    ${shuffled.map(w => `
                        <button class="listen-choice-btn" onclick="IslandGames.checkListenAnswer('${w.english}', '${word.english}', ${index})"
                                style="padding: 20px; font-size: 1.3rem; font-weight: 600; border: 3px solid var(--primary-color); background: white; color: var(--primary-color); border-radius: 10px; cursor: pointer; transition: all 0.2s;">
                            ${w.english}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Otomatik olarak bir kez çal
        setTimeout(() => this.playWord(word.english), 500);
    },
    
    // Kelimeyi seslendir
    playWord(word) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            utterance.rate = 0.8;
            window.speechSynthesis.speak(utterance);
        } else {
            showCelebration('⚠️ Tarayıcınız ses özelliğini desteklemiyor', false);
        }
    },
    
    // Dinle ve seç cevabını kontrol et
    checkListenAnswer(selected, correct, index) {
        const isCorrect = selected === correct;
        
        if (isCorrect) {
            this.correctAnswers++;
            document.getElementById('correctCount').textContent = this.correctAnswers;
            showCelebration('🎉 Harika!');
            addPointsWithAnimation(20);
        } else {
            showCelebration(`❌ Yanlış! Doğrusu: ${correct}`, false);
        }
        
        // Sonraki soruya geç
        setTimeout(() => {
            document.getElementById('questionNumber').textContent = index + 2;
            this.showNextListenQuestion(index + 1);
        }, 1500);
    },
    
    // Oyunu bitir
    async finishGame() {
        const score = Math.round((this.correctAnswers / this.totalQuestions) * 100);
        this.currentScore = score;
        
        const gameContainer = document.getElementById('gameContainer');
        const isPassed = score >= this.currentGame.requiredScore;
        
        // AI teşvik mesajı al
        const encouragement = await IslandGemini.generateEncouragement(score, this.currentGame.name);
        
        gameContainer.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <div style="font-size: 5rem; margin-bottom: 20px;">
                    ${isPassed ? '🎉' : '💪'}
                </div>
                
                <h2 style="color: var(--text-dark); margin-bottom: 20px;">
                    ${isPassed ? 'Görev Tamamlandı!' : 'Biraz Daha Pratik Gerekli!'}
                </h2>
                
                <div style="background: ${isPassed ? '#10b981' : '#f59e0b'}; color: white; padding: 30px; border-radius: 20px; max-width: 500px; margin: 0 auto 30px;">
                    <p style="font-size: 3rem; font-weight: 700; margin-bottom: 10px;">${score}/100</p>
                    <p style="font-size: 1.2rem;">Doğru: ${this.correctAnswers} / ${this.totalQuestions}</p>
                </div>
                
                <div style="background: #f0f9ff; padding: 20px; border-radius: 15px; margin-bottom: 30px; max-width: 600px; margin-left: auto; margin-right: auto;">
                    <p style="color: var(--text-dark); font-size: 1.2rem; line-height: 1.6;">
                        ${encouragement}
                    </p>
                </div>
                
                ${isPassed ? `
                    <button class="btn btn-primary" onclick="IslandGames.completeAndContinue()" 
                            style="font-size: 1.3rem; padding: 15px 40px;">
                        ✨ Devam Et
                    </button>
                ` : `
                    <button class="btn btn-primary" onclick="IslandGames.retryGame()" 
                            style="font-size: 1.3rem; padding: 15px 40px; margin-right: 15px;">
                        🔄 Tekrar Dene
                    </button>
                    <button class="btn btn-secondary" onclick="IslandAdventure.backToGates()">
                        Geri Dön
                    </button>
                `}
            </div>
        `;
        
        if (isPassed) {
            // Puanı kaydet
            addPointsWithAnimation(score);
        }
    },
    
    // Görevi tamamla ve devam et
    completeAndContinue() {
        const progress = IslandProgress.completeGate(
            IslandAdventure.currentIsland.id,
            this.currentGame.id,
            this.currentScore
        );
        
        showCelebration('🎊 Yeni kapı açıldı!');
        
        // Kapılar ekranına dön
        setTimeout(() => {
            IslandAdventure.showGates(IslandAdventure.currentIsland);
        }, 1500);
    },
    
    // Oyunu tekrar dene
    retryGame() {
        this.startGame(this.currentGame, IslandAdventure.currentUnit.words);
    }
};

