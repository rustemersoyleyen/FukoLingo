// FukoLingo - Cümle Kurma Modülü

let sentenceData = {
    words: [],
    currentWord: 0,
    userAnswers: []
};

// Cümle kurma modülünü yükle
function loadSentenceBuilder(unit) {
    sentenceData.words = shuffleArray([...unit.words]);
    sentenceData.currentWord = 0;
    sentenceData.userAnswers = [];
    
    const activityArea = document.getElementById('activityArea');
    activityArea.innerHTML = `
        <div class="sentence-builder">
            <h2 style="text-align: center; margin-bottom: 15px; color: var(--text-dark);">
                Cümle Kurma - ${unit.title}
            </h2>
            <p style="text-align: center; color: var(--text-light); margin-bottom: 20px;">
                💬 Kelimeyi kullanarak cümle kur!
            </p>
            <div style="text-align: center; margin-bottom: 25px;">
                <span style="font-size: 1.2rem; color: var(--text-dark); font-weight: 600;">
                    Kelime: <span id="sentenceNumber">1</span> / ${sentenceData.words.length}
                </span>
            </div>
            
            <div id="sentenceContent">
                <!-- Cümle içeriği JavaScript ile doldurulacak -->
            </div>
        </div>
    `;
    
    displaySentenceTask();
}

// Cümle görevini göster
function displaySentenceTask() {
    const word = sentenceData.words[sentenceData.currentWord];
    
    // Kelime bankası için rastgele yardımcı kelimeler
    const helpers = ['I', 'you', 'he', 'she', 'we', 'they', 'is', 'are', 'am', 'the', 'a', 'an', 
                      'like', 'love', 'have', 'has', 'can', 'want', 'go', 'to', 'very', 'my', 'your'];
    
    const sentenceContent = document.getElementById('sentenceContent');
    sentenceContent.innerHTML = `
        <div class="sentence-task">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                        color: white; padding: 30px; border-radius: 15px; margin-bottom: 25px;">
                <div style="font-size: 4rem; margin-bottom: 15px;">${word.image}</div>
                <h3 style="color: white; margin-bottom: 10px;">${word.english}</h3>
                <p style="opacity: 0.9; font-size: 1.1rem;">${word.turkish}</p>
                <button class="btn" onclick="speak('${word.english}')" 
                        style="background: rgba(255,255,255,0.2); color: white; margin-top: 15px; border: 2px solid white;">
                    🔊 Dinle
                </button>
            </div>
            
            <div class="target-sentence">
                <p style="font-size: 1.1rem; margin-bottom: 5px;">📌 Örnek cümle:</p>
                <p style="font-size: 1.2rem; font-weight: 600;">"${word.example}"</p>
                <p style="font-size: 1rem; margin-top: 5px;">${word.exampleTr}</p>
            </div>
        </div>
        
        <div class="word-bank">
            <h4>💡 Kelime Bankası (Tıklayarak ekleyebilirsin):</h4>
            <div class="word-chips">
                <span class="word-chip" onclick="addWordToSentence('${word.english}')">${word.english}</span>
                ${helpers.slice(0, 8).map(h => 
                    `<span class="word-chip" onclick="addWordToSentence('${h}')">${h}</span>`
                ).join('')}
            </div>
        </div>
        
        <div class="sentence-input">
            <textarea id="userSentence" 
                      placeholder="Buraya kendi cümleni yaz... (${word.english} kelimesini kullanmayı unutma!)"
                      style="font-size: 1.1rem;"></textarea>
        </div>
        
        <div style="text-align: center; display: flex; gap: 15px; justify-content: center; margin-bottom: 20px;">
            <button class="btn btn-primary" onclick="checkSentence()">
                ✅ Cümleyi Kontrol Et
            </button>
            <button class="btn btn-secondary" onclick="clearSentence()">
                🗑️ Temizle
            </button>
        </div>
        
        <div id="sentenceFeedback"></div>
        
        <div style="text-align: center; margin-top: 25px;">
            <button class="btn btn-secondary" onclick="goBackToModeSelection()">
                Geri Dön
            </button>
        </div>
    `;
    
    // Kelime numarasını güncelle
    document.getElementById('sentenceNumber').textContent = sentenceData.currentWord + 1;
}

// Kelimeyi cümleye ekle
function addWordToSentence(word) {
    const textarea = document.getElementById('userSentence');
    const currentText = textarea.value.trim();
    
    if (currentText && !currentText.endsWith(' ')) {
        textarea.value = currentText + ' ' + word + ' ';
    } else {
        textarea.value = currentText + word + ' ';
    }
    
    textarea.focus();
}

// Cümleyi temizle
function clearSentence() {
    document.getElementById('userSentence').value = '';
    document.getElementById('sentenceFeedback').innerHTML = '';
}

// Cümleyi kontrol et
function checkSentence() {
    const userSentence = document.getElementById('userSentence').value.trim();
    const word = sentenceData.words[sentenceData.currentWord];
    const feedback = document.getElementById('sentenceFeedback');
    
    if (!userSentence) {
        feedback.className = 'quiz-feedback incorrect';
        feedback.innerHTML = '❌ Lütfen bir cümle yaz!';
        return;
    }
    
    // Kelime kullanılmış mı kontrol et (büyük/küçük harf duyarsız)
    const wordUsed = userSentence.toLowerCase().includes(word.english.toLowerCase());
    
    // Minimum uzunluk kontrolü
    const wordCount = userSentence.split(' ').filter(w => w.length > 0).length;
    const isLongEnough = wordCount >= 3;
    
    if (wordUsed && isLongEnough) {
        // Başarılı!
        feedback.className = 'quiz-feedback correct';
        feedback.innerHTML = `
            <div style="padding: 20px;">
                <p style="font-size: 1.3rem; margin-bottom: 15px;">✅ Harika! Çok güzel bir cümle kurdun! +15 puan</p>
                <p style="font-size: 1.1rem; font-weight: 600; color: var(--primary-color);">
                    "${userSentence}"
                </p>
                <button class="btn btn-primary" onclick="speak('${userSentence}')" style="margin-top: 15px;">
                    🔊 Cümleni Dinle
                </button>
                <button class="btn btn-secondary" onclick="nextSentence()" style="margin-top: 15px; margin-left: 10px;">
                    ${sentenceData.currentWord < sentenceData.words.length - 1 ? 'Sonraki Kelime ➡️' : 'Tamamla 🎉'}
                </button>
            </div>
        `;
        
        addPointsWithAnimation(15);
        sentenceData.userAnswers.push({
            word: word.english,
            sentence: userSentence
        });
        
        // Kelimeyi öğrenildi say
        StorageManager.markWordLearned(currentUnit.id, sentenceData.currentWord);
        updateStats();
        
    } else {
        // Hata var
        let message = '';
        if (!wordUsed) {
            message = `❌ "${word.english}" kelimesini cümlende kullanmayı unutma!`;
        } else if (!isLongEnough) {
            message = '❌ Cümlen biraz daha uzun olmalı. En az 3 kelime kullan!';
        }
        
        feedback.className = 'quiz-feedback incorrect';
        feedback.innerHTML = `
            <p style="font-size: 1.1rem;">${message}</p>
            <p style="margin-top: 10px; font-size: 0.95rem;">💡 İpucu: Örnek cümleye bakabilir ya da kelime bankasını kullanabilirsin.</p>
        `;
    }
}

// Sonraki kelime
function nextSentence() {
    if (sentenceData.currentWord < sentenceData.words.length - 1) {
        sentenceData.currentWord++;
        displaySentenceTask();
    } else {
        // Tamamlandı
        finishSentenceBuilder();
    }
}

// Cümle kurma modülünü bitir
function finishSentenceBuilder() {
    const bonusPoints = sentenceData.userAnswers.length * 5;
    addPointsWithAnimation(bonusPoints);
    StorageManager.saveProgress(currentUnit.id, sentenceData.userAnswers.length);
    
    const sentenceContent = document.getElementById('sentenceContent');
    sentenceContent.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div style="font-size: 5rem; margin-bottom: 20px;">🎉</div>
            <h2 style="color: var(--primary-color); margin-bottom: 20px;">
                Muhteşem! Tüm Kelimeleri Tamamladın!
            </h2>
            <div style="font-size: 1.3rem; color: var(--text-dark); margin-bottom: 30px;">
                <p><strong>${sentenceData.userAnswers.length}</strong> cümle kurdun!</p>
                <p style="color: var(--accent-color); font-weight: 600;">
                    +${bonusPoints} bonus puan kazandın!
                </p>
            </div>
            
            <div style="background: #f8fafc; padding: 25px; border-radius: 15px; margin-bottom: 30px; text-align: left;">
                <h3 style="margin-bottom: 15px; color: var(--text-dark);">📝 Kurduğun Cümleler:</h3>
                ${sentenceData.userAnswers.map(answer => `
                    <div style="padding: 15px; background: white; border-radius: 10px; margin-bottom: 10px; box-shadow: var(--shadow);">
                        <p style="font-weight: 600; color: var(--primary-color); margin-bottom: 5px;">
                            ${answer.word}
                        </p>
                        <p style="font-size: 1.05rem;">
                            "${answer.sentence}"
                        </p>
                    </div>
                `).join('')}
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button class="btn btn-primary" onclick="loadSentenceBuilder(currentUnit)">
                    🔄 Tekrar Dene
                </button>
                <button class="btn btn-secondary" onclick="goBackToModeSelection()">
                    Geri Dön
                </button>
            </div>
        </div>
    `;
}
