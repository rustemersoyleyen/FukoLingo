// FukoLingo - Eşleştirme Oyunu Modülü

let matchingGame = {
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    moves: 0,
    canFlip: true
};

// Eşleştirme oyununu yükle
function loadMatchingGame(unit, difficulty = null, gameType = 'tr-en') {
    // Eğer zorluk seçilmemişse, seçim ekranını göster
    if (difficulty === null) {
        showDifficultySelection(unit);
        return;
    }
    
    // Zorluk seviyesine göre kelime sayısı
    let wordCount;
    let gridColumns;
    let difficultyName;
    
    switch(difficulty) {
        case 'easy':
            wordCount = 6;
            gridColumns = 4;
            difficultyName = '😊 Kolay (6 çift)';
            break;
        case 'medium':
            wordCount = 10;
            gridColumns = 5;
            difficultyName = '🤔 Orta (10 çift)';
            break;
        case 'hard':
            wordCount = 15;
            gridColumns = 6;
            difficultyName = '🔥 Zor (15 çift)';
            break;
        default:
            wordCount = 6;
            gridColumns = 4;
            difficultyName = '😊 Kolay (6 çift)';
    }
    
    // Oyun tipi bilgisi
    const gameTypeName = gameType === 'tr-en' ? '🔤 Türkçe-İngilizce' : '🎨 Görsel-İngilizce';
    
    // Rastgele kelime seç
    const selectedWords = shuffleArray(unit.words).slice(0, wordCount);
    
    // Kart çiftleri oluştur
    matchingGame.cards = [];
    matchingGame.difficulty = difficulty;
    matchingGame.gameType = gameType;
    
    selectedWords.forEach((word, index) => {
        if (gameType === 'tr-en') {
            // Türkçe-İngilizce Modu
            // İngilizce kart
            matchingGame.cards.push({
                id: `en-${index}`,
                text: word.english,
                pair: `tr-${index}`,
                type: 'english',
                matched: false,
                isVisual: false
            });
            // Türkçe kart
            matchingGame.cards.push({
                id: `tr-${index}`,
                text: word.turkish,
                pair: `en-${index}`,
                type: 'turkish',
                matched: false,
                isVisual: false
            });
        } else {
            // Görsel-İngilizce Modu
            // Görsel kart
            matchingGame.cards.push({
                id: `visual-${index}`,
                text: word.image,
                pair: `en-${index}`,
                type: 'visual',
                matched: false,
                isVisual: true
            });
            // İngilizce kart
            matchingGame.cards.push({
                id: `en-${index}`,
                text: word.english,
                pair: `visual-${index}`,
                type: 'english',
                matched: false,
                isVisual: false
            });
        }
    });
    
    // Kartları karıştır
    matchingGame.cards = shuffleArray(matchingGame.cards);
    matchingGame.flippedCards = [];
    matchingGame.matchedPairs = 0;
    matchingGame.moves = 0;
    matchingGame.canFlip = true;
    
    const activityArea = document.getElementById('activityArea');
    activityArea.innerHTML = `
        <div style="max-width: 1000px; margin: 0 auto;">
            <h2 style="text-align: center; margin-bottom: 10px; color: var(--text-dark);">
                Eşleştirme Oyunu - ${unit.title}
            </h2>
            <p style="text-align: center; color: var(--text-light); margin-bottom: 5px;">
                ${gameType === 'tr-en' ? '🎯 İngilizce kelimeleri Türkçe anlamlarıyla eşleştir!' : '🎨 Görselleri İngilizce kelimelerle eşleştir!'}
            </p>
            <div style="text-align: center; margin-bottom: 20px;">
                <span style="display: inline-block; background: var(--secondary-color); color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.9rem; margin-right: 10px;">
                    ${gameTypeName}
                </span>
                <span style="display: inline-block; background: var(--primary-color); color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.9rem;">
                    ${difficultyName}
                </span>
            </div>
            <div style="text-align: center; margin-bottom: 25px;">
                <span style="font-size: 1.2rem; color: var(--text-dark); font-weight: 600;">
                    Hamle: <span id="moveCount">0</span> | 
                    Eşleşen: <span id="matchCount">0</span> / ${selectedWords.length}
                </span>
            </div>
            
            <div class="matching-game" id="matchingGrid" style="grid-template-columns: repeat(${gridColumns}, 1fr);">
                <!-- Kartlar JavaScript ile doldurulacak -->
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <button class="btn btn-primary" onclick="loadMatchingGame(currentUnit, '${difficulty}', '${gameType}')">
                    🔄 Yeniden Başla
                </button>
                <button class="btn btn-secondary" onclick="loadMatchingGame(currentUnit, null)" style="background: #6366f1;">
                    🎚️ Ayarları Değiştir
                </button>
                <button class="btn btn-secondary" onclick="goBackToModeSelection()">
                    Geri Dön
                </button>
            </div>
        </div>
    `;
    
    renderMatchingCards();
}

// Zorluk ve oyun tipi seçim ekranını göster
function showDifficultySelection(unit) {
    const activityArea = document.getElementById('activityArea');
    activityArea.innerHTML = `
        <div style="max-width: 900px; margin: 0 auto; text-align: center;">
            <h2 style="margin-bottom: 15px; color: var(--text-dark);">
                Eşleştirme Oyunu - Ayarlar
            </h2>
            <p style="color: var(--text-light); margin-bottom: 30px;">
                Oyun tipini ve zorluk seviyesini seç!
            </p>
            
            <!-- Oyun Tipi Seçimi -->
            <div style="margin-bottom: 40px;">
                <h3 style="color: var(--text-dark); margin-bottom: 20px; font-size: 1.3rem;">
                    🎮 Oyun Tipi
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                    <!-- Türkçe-İngilizce -->
                    <div class="game-type-card" onclick="showDifficultyOptions('tr-en')" 
                         style="background: linear-gradient(135deg, #8b5cf6, #7c3aed); padding: 25px; border-radius: var(--border-radius); cursor: pointer; transition: transform 0.2s; box-shadow: var(--shadow);">
                        <div style="font-size: 2.5rem; margin-bottom: 10px;">🔤</div>
                        <h4 style="color: white; margin-bottom: 8px; font-size: 1.1rem;">Türkçe - İngilizce</h4>
                        <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem;">Kelimeleri anlamlarıyla eşleştir</p>
                    </div>
                    
                    <!-- Görsel-İngilizce -->
                    <div class="game-type-card" onclick="showDifficultyOptions('visual-en')" 
                         style="background: linear-gradient(135deg, #ec4899, #db2777); padding: 25px; border-radius: var(--border-radius); cursor: pointer; transition: transform 0.2s; box-shadow: var(--shadow);">
                        <div style="font-size: 2.5rem; margin-bottom: 10px;">🎨</div>
                        <h4 style="color: white; margin-bottom: 8px; font-size: 1.1rem;">Görsel - İngilizce</h4>
                        <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem;">Resimleri kelimelerle eşleştir</p>
                    </div>
                </div>
            </div>
            
            <button class="btn btn-secondary" onclick="goBackToModeSelection()">
                Geri Dön
            </button>
        </div>
        
        <style>
            .game-type-card:hover {
                transform: translateY(-5px) scale(1.02);
            }
            .game-type-card:active {
                transform: translateY(-2px) scale(0.98);
            }
            .difficulty-card:hover {
                transform: translateY(-5px) scale(1.02);
            }
            .difficulty-card:active {
                transform: translateY(-2px) scale(0.98);
            }
        </style>
    `;
}

// Zorluk seviyesi seçeneklerini göster
function showDifficultyOptions(gameType) {
    const activityArea = document.getElementById('activityArea');
    const gameTypeName = gameType === 'tr-en' ? '🔤 Türkçe-İngilizce' : '🎨 Görsel-İngilizce';
    
    activityArea.innerHTML = `
        <div style="max-width: 800px; margin: 0 auto; text-align: center;">
            <h2 style="margin-bottom: 10px; color: var(--text-dark);">
                Eşleştirme Oyunu
            </h2>
            <p style="color: var(--secondary-color); font-weight: 600; margin-bottom: 15px;">
                ${gameTypeName}
            </p>
            <p style="color: var(--text-light); margin-bottom: 30px;">
                Zorluk seviyesini seç
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 30px;">
                <!-- Kolay -->
                <div class="difficulty-card" onclick="loadMatchingGame(currentUnit, 'easy', '${gameType}')" 
                     style="background: linear-gradient(135deg, #10b981, #059669); padding: 30px; border-radius: var(--border-radius); cursor: pointer; transition: transform 0.2s; box-shadow: var(--shadow);">
                    <div style="font-size: 3rem; margin-bottom: 10px;">😊</div>
                    <h3 style="color: white; margin-bottom: 10px;">Kolay</h3>
                    <p style="color: rgba(255,255,255,0.9); font-size: 0.95rem; margin-bottom: 5px;">6 çift kart</p>
                    <p style="color: rgba(255,255,255,0.9); font-size: 0.95rem;">(12 kart)</p>
                </div>
                
                <!-- Orta -->
                <div class="difficulty-card" onclick="loadMatchingGame(currentUnit, 'medium', '${gameType}')" 
                     style="background: linear-gradient(135deg, #f59e0b, #d97706); padding: 30px; border-radius: var(--border-radius); cursor: pointer; transition: transform 0.2s; box-shadow: var(--shadow);">
                    <div style="font-size: 3rem; margin-bottom: 10px;">🤔</div>
                    <h3 style="color: white; margin-bottom: 10px;">Orta</h3>
                    <p style="color: rgba(255,255,255,0.9); font-size: 0.95rem; margin-bottom: 5px;">10 çift kart</p>
                    <p style="color: rgba(255,255,255,0.9); font-size: 0.95rem;">(20 kart)</p>
                </div>
                
                <!-- Zor -->
                <div class="difficulty-card" onclick="loadMatchingGame(currentUnit, 'hard', '${gameType}')" 
                     style="background: linear-gradient(135deg, #ef4444, #dc2626); padding: 30px; border-radius: var(--border-radius); cursor: pointer; transition: transform 0.2s; box-shadow: var(--shadow);">
                    <div style="font-size: 3rem; margin-bottom: 10px;">🔥</div>
                    <h3 style="color: white; margin-bottom: 10px;">Zor</h3>
                    <p style="color: rgba(255,255,255,0.9); font-size: 0.95rem; margin-bottom: 5px;">15 çift kart</p>
                    <p style="color: rgba(255,255,255,0.9); font-size: 0.95rem;">(30 kart)</p>
                </div>
            </div>
            
            <button class="btn btn-secondary" onclick="showDifficultySelection(currentUnit)">
                ← Geri Dön
            </button>
        </div>
    `;
}

// Kartları render et
function renderMatchingCards() {
    const grid = document.getElementById('matchingGrid');
    grid.innerHTML = '';
    
    matchingGame.cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'match-card hidden-card';
        cardElement.setAttribute('data-id', card.id);
        cardElement.textContent = '?';
        
        // Görsel kart ise özel stil ekle
        if (card.isVisual) {
            cardElement.setAttribute('data-visual', 'true');
        }
        
        if (!card.matched) {
            cardElement.addEventListener('click', () => handleCardClick(card, cardElement));
        }
        
        grid.appendChild(cardElement);
    });
}

// Kart tıklama işlemi
function handleCardClick(card, cardElement) {
    if (!matchingGame.canFlip || card.matched) return;
    if (matchingGame.flippedCards.find(c => c.card.id === card.id)) return;
    
    // Kartı çevir
    cardElement.classList.remove('hidden-card');
    cardElement.classList.add('revealed');
    cardElement.textContent = card.text;
    
    matchingGame.flippedCards.push({ card, element: cardElement });
    
    // İki kart açıldıysa kontrol et
    if (matchingGame.flippedCards.length === 2) {
        matchingGame.canFlip = false;
        matchingGame.moves++;
        document.getElementById('moveCount').textContent = matchingGame.moves;
        
        setTimeout(checkMatch, 800);
    }
}

// Eşleşmeyi kontrol et
function checkMatch() {
    const [first, second] = matchingGame.flippedCards;
    
    if (first.card.pair === second.card.id) {
        // Eşleşti!
        first.card.matched = true;
        second.card.matched = true;
        first.element.classList.add('matched');
        second.element.classList.add('matched');
        
        matchingGame.matchedPairs++;
        document.getElementById('matchCount').textContent = matchingGame.matchedPairs;
        
        // Puan ekle
        addPointsWithAnimation(10);
        
        // Tüm çiftler eşleştiyse
        if (matchingGame.matchedPairs === matchingGame.cards.length / 2) {
            setTimeout(() => {
                const bonus = Math.max(50, 100 - matchingGame.moves * 5);
                addPointsWithAnimation(bonus);
                showCelebration(`🎉 Harika! ${matchingGame.moves} hamlede tamamladın! +${bonus} bonus puan!`);
                StorageManager.saveProgress(currentUnit.id, matchingGame.moves);
            }, 500);
        }
    } else {
        // Eşleşmedi
        first.element.classList.remove('revealed');
        first.element.classList.add('hidden-card');
        first.element.textContent = '?';
        
        second.element.classList.remove('revealed');
        second.element.classList.add('hidden-card');
        second.element.textContent = '?';
    }
    
    matchingGame.flippedCards = [];
    matchingGame.canFlip = true;
}
