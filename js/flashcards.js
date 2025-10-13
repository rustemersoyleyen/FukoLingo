// FukoLingo - Flash Kartlar Modülü

let flashcardData = {
    words: [],
    currentIndex: 0,
    isFlipped: false
};

// Flash kartları yükle
function loadFlashcards(unit) {
    flashcardData.words = [...unit.words];
    flashcardData.currentIndex = 0;
    flashcardData.isFlipped = false;
    
    const activityArea = document.getElementById('activityArea');
    activityArea.innerHTML = `
        <div class="flashcard-container">
            <h2 style="text-align: center; margin-bottom: 20px; color: var(--text-dark);">
                Flash Kartlar - ${unit.title}
            </h2>
            <p style="text-align: center; color: var(--text-light); margin-bottom: 30px;">
                📱 Karta tıklayarak çevir · 🔊 Kelimeyi dinle
            </p>
            
            <div class="flashcard" id="flashcard">
                <!-- Kart içeriği JavaScript ile doldurulacak -->
            </div>
            
            <div class="flashcard-controls">
                <button class="btn btn-secondary" id="btnPrevCard">⬅️ Önceki</button>
                <span class="card-counter" id="cardCounter">1 / ${flashcardData.words.length}</span>
                <button class="btn btn-primary" id="btnNextCard">Sonraki ➡️</button>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <button class="btn btn-secondary" onclick="goBackToModeSelection()">
                    Geri Dön
                </button>
            </div>
        </div>
    `;
    
    setupFlashcardEvents();
    displayCurrentCard();
}

// Flash kart olaylarını ayarla
function setupFlashcardEvents() {
    const flashcard = document.getElementById('flashcard');
    const btnPrev = document.getElementById('btnPrevCard');
    const btnNext = document.getElementById('btnNextCard');
    
    flashcard.addEventListener('click', flipCard);
    btnPrev.addEventListener('click', previousCard);
    btnNext.addEventListener('click', nextCard);
}

// Kartı göster
function displayCurrentCard() {
    const word = flashcardData.words[flashcardData.currentIndex];
    const flashcard = document.getElementById('flashcard');
    
    flashcard.classList.remove('flipped');
    flashcardData.isFlipped = false;
    
    flashcard.innerHTML = `
        <div class="flashcard-inner">
            <div class="flashcard-front">
                <div class="flashcard-image">${word.image}</div>
                <div class="flashcard-word">${word.english}</div>
                <div class="flashcard-pronunciation">${word.pronunciation}</div>
                <button class="btn btn-primary" onclick="speak('${word.english}'); event.stopPropagation();">
                    🔊 Dinle
                </button>
            </div>
            <div class="flashcard-back">
                <div class="flashcard-translation">${word.turkish}</div>
                <div class="flashcard-example">
                    "${word.example}"
                </div>
                <div style="margin-top: 15px; font-size: 0.95rem; opacity: 0.9;">
                    ${word.exampleTr}
                </div>
                <button class="btn btn-primary" onclick="speak('${word.example}'); event.stopPropagation();" style="margin-top: 20px;">
                    🔊 Cümleyi Dinle
                </button>
            </div>
        </div>
    `;
    
    // Sayacı güncelle
    document.getElementById('cardCounter').textContent = 
        `${flashcardData.currentIndex + 1} / ${flashcardData.words.length}`;
    
    // Butonları güncelle
    document.getElementById('btnPrevCard').disabled = flashcardData.currentIndex === 0;
    document.getElementById('btnNextCard').disabled = 
        flashcardData.currentIndex === flashcardData.words.length - 1;
}

// Kartı çevir
function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
    flashcardData.isFlipped = !flashcardData.isFlipped;
    
    // Eğer ilk defa çevriliyorsa, kelimeyi öğrenildi say
    if (flashcardData.isFlipped) {
        StorageManager.markWordLearned(currentUnit.id, flashcardData.currentIndex);
        updateStats();
    }
}

// Önceki kart
function previousCard() {
    if (flashcardData.currentIndex > 0) {
        flashcardData.currentIndex--;
        displayCurrentCard();
    }
}

// Sonraki kart
function nextCard() {
    if (flashcardData.currentIndex < flashcardData.words.length - 1) {
        flashcardData.currentIndex++;
        displayCurrentCard();
    } else {
        // Tüm kartlar tamamlandı
        addPointsWithAnimation(50);
        showCelebration('🎉 Tebrikler! Tüm kartları tamamladın! +50 puan');
        
        setTimeout(() => {
            goBackToModeSelection();
        }, 3000);
    }
}
