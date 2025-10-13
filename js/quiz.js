// FukoLingo - Quiz Modülü

let quizData = {
    questions: [],
    currentQuestion: 0,
    score: 0,
    answered: false
};

// Quiz'i yükle
function loadQuiz(unit) {
    // Tüm kelimeleri karıştır
    quizData.questions = shuffleArray([...unit.words]);
    quizData.currentQuestion = 0;
    quizData.score = 0;
    quizData.answered = false;
    
    const activityArea = document.getElementById('activityArea');
    activityArea.innerHTML = `
        <div class="quiz-container">
            <h2 style="text-align: center; margin-bottom: 15px; color: var(--text-dark);">
                Kelime Testi - ${unit.title}
            </h2>
            <p style="text-align: center; color: var(--text-light); margin-bottom: 20px;">
                📝 Doğru cevabı seç ve bilgini test et!
            </p>
            <div style="text-align: center; margin-bottom: 25px;">
                <span style="font-size: 1.2rem; color: var(--text-dark); font-weight: 600;">
                    Soru: <span id="questionNumber">1</span> / ${quizData.questions.length} | 
                    Puan: <span id="quizScore">0</span>
                </span>
            </div>
            
            <div id="quizContent">
                <!-- Quiz içeriği JavaScript ile doldurulacak -->
            </div>
        </div>
    `;
    
    displayQuestion();
}

// Soruyu göster
function displayQuestion() {
    const question = quizData.questions[quizData.currentQuestion];
    quizData.answered = false;
    
    // Yanlış cevaplar için rastgele 3 kelime seç
    const wrongAnswers = quizData.questions
        .filter(w => w.english !== question.english)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.turkish);
    
    // Tüm cevapları karıştır
    const allAnswers = shuffleArray([question.turkish, ...wrongAnswers]);
    
    const quizContent = document.getElementById('quizContent');
    quizContent.innerHTML = `
        <div class="quiz-question">
            <div class="quiz-image">${question.image}</div>
            <h3>${question.english}</h3>
            <p style="color: var(--text-light); font-style: italic;">${question.pronunciation}</p>
            <button class="btn btn-secondary" onclick="speak('${question.english}')" style="margin-bottom: 20px;">
                🔊 Dinle
            </button>
        </div>
        
        <div class="quiz-answers" id="quizAnswers">
            ${allAnswers.map(answer => `
                <div class="quiz-answer" data-answer="${answer}">
                    ${answer}
                </div>
            `).join('')}
        </div>
        
        <div id="quizFeedback"></div>
        
        <div style="text-align: center; margin-top: 25px;">
            <button class="btn btn-primary hidden" id="btnNextQuestion">
                ${quizData.currentQuestion < quizData.questions.length - 1 ? 'Sonraki Soru ➡️' : 'Testi Bitir 🎉'}
            </button>
        </div>
    `;
    
    // Cevap butonlarına event listener ekle
    const answerButtons = document.querySelectorAll('.quiz-answer');
    answerButtons.forEach(btn => {
        btn.addEventListener('click', () => checkAnswer(btn, question.turkish));
    });
    
    // Sonraki soru butonuna event listener ekle
    document.getElementById('btnNextQuestion').addEventListener('click', nextQuestion);
    
    // Soru numarasını güncelle
    document.getElementById('questionNumber').textContent = quizData.currentQuestion + 1;
}

// Cevabı kontrol et
function checkAnswer(button, correctAnswer) {
    if (quizData.answered) return;
    
    quizData.answered = true;
    const selectedAnswer = button.getAttribute('data-answer');
    const isCorrect = selectedAnswer === correctAnswer;
    
    // Butonları devre dışı bırak
    const allButtons = document.querySelectorAll('.quiz-answer');
    allButtons.forEach(btn => {
        btn.style.pointerEvents = 'none';
        
        // Doğru cevabı göster
        if (btn.getAttribute('data-answer') === correctAnswer) {
            btn.classList.add('correct');
        }
    });
    
    // Seçilen butonu işaretle
    if (isCorrect) {
        button.classList.add('correct');
        quizData.score++;
        addPointsWithAnimation(10);
        
        const feedback = document.getElementById('quizFeedback');
        feedback.className = 'quiz-feedback correct';
        feedback.textContent = '✅ Doğru! Harika iş! +10 puan';
        
        // Kelimeyi öğrenildi say
        StorageManager.markWordLearned(currentUnit.id, quizData.currentQuestion);
        updateStats();
    } else {
        button.classList.add('incorrect');
        
        const feedback = document.getElementById('quizFeedback');
        feedback.className = 'quiz-feedback incorrect';
        feedback.textContent = '❌ Yanlış! Doğru cevap yukarıda işaretlendi.';
    }
    
    // Skoru güncelle
    document.getElementById('quizScore').textContent = quizData.score;
    
    // Sonraki soru butonunu göster
    document.getElementById('btnNextQuestion').classList.remove('hidden');
}

// Sonraki soru
function nextQuestion() {
    if (quizData.currentQuestion < quizData.questions.length - 1) {
        quizData.currentQuestion++;
        displayQuestion();
    } else {
        // Quiz bitti
        finishQuiz();
    }
}

// Quiz'i bitir
function finishQuiz() {
    const totalQuestions = quizData.questions.length;
    const percentage = Math.round((quizData.score / totalQuestions) * 100);
    const bonusPoints = Math.round(percentage / 2);
    
    addPointsWithAnimation(bonusPoints);
    StorageManager.saveProgress(currentUnit.id, quizData.score);
    
    const quizContent = document.getElementById('quizContent');
    quizContent.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div style="font-size: 5rem; margin-bottom: 20px;">
                ${percentage >= 80 ? '🏆' : percentage >= 60 ? '⭐' : '💪'}
            </div>
            <h2 style="color: var(--primary-color); margin-bottom: 20px;">
                ${percentage >= 80 ? 'Mükemmel!' : percentage >= 60 ? 'Çok İyi!' : 'Devam Et!'}
            </h2>
            <div style="font-size: 1.3rem; color: var(--text-dark); margin-bottom: 30px;">
                <p><strong>${quizData.score}</strong> / ${totalQuestions} doğru cevap</p>
                <p style="color: var(--success-color); font-weight: 600;">
                    %${percentage} başarı oranı
                </p>
                <p style="color: var(--accent-color); font-weight: 600;">
                    +${bonusPoints} bonus puan!
                </p>
            </div>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button class="btn btn-primary" onclick="loadQuiz(currentUnit)">
                    🔄 Tekrar Dene
                </button>
                <button class="btn btn-secondary" onclick="goBackToModeSelection()">
                    Geri Dön
                </button>
            </div>
        </div>
    `;
}
