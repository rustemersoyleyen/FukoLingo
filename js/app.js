// FukoLingo - Ana Uygulama Mantığı

// Global değişkenler
let currentUnit = null;
let currentMode = null;

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Uygulamayı başlat
function initializeApp() {
    loadUnits();
    updateStats();
    setupEventListeners();
}

// İstatistikleri güncelle
function updateStats() {
    const totalPoints = StorageManager.getTotalPoints();
    const learnedWords = StorageManager.getLearnedWordsCount();
    
    document.getElementById('totalPoints').textContent = totalPoints;
    document.getElementById('totalWords').textContent = learnedWords;
}

// Üniteleri yükle
function loadUnits() {
    const container = document.getElementById('unitsContainer');
    container.innerHTML = '';
    
    const progress = StorageManager.getProgress();
    
    vocabularyData.units.forEach(unit => {
        const unitProgress = progress[unit.id] || { completed: 0 };
        const totalWords = unit.words.length;
        const completedPercentage = unitProgress.completed > 0 
            ? Math.min(100, Math.round((unitProgress.completed / totalWords) * 100))
            : 0;
        
        const unitCard = createUnitCard(unit, completedPercentage);
        container.appendChild(unitCard);
    });
}

// Ünite kartı oluştur
function createUnitCard(unit, progress) {
    const card = document.createElement('div');
    card.className = 'unit-card';
    card.innerHTML = `
        <div class="unit-icon">${unit.icon}</div>
        <h3>${unit.title}</h3>
        <p>${unit.description}</p>
        <div class="unit-progress">
            <span class="progress-text">${unit.words.length} kelime</span>
            <span class="progress-value">${progress}%</span>
        </div>
    `;
    
    card.addEventListener('click', () => selectUnit(unit));
    
    return card;
}

// Ünite seç
function selectUnit(unit) {
    currentUnit = unit;
    
    // Ana ekranı gizle
    document.querySelector('.welcome-card').classList.add('hidden');
    document.getElementById('unitsContainer').classList.add('hidden');
    
    // Öğrenme alanını göster
    const learningArea = document.getElementById('learningArea');
    learningArea.classList.remove('hidden');
    
    // Başlığı güncelle
    document.getElementById('currentUnitTitle').textContent = unit.title;
    
    // Mod seçimini göster
    document.getElementById('modeSelection').classList.remove('hidden');
    document.getElementById('activityArea').classList.add('hidden');
}

// Event listener'ları ayarla
function setupEventListeners() {
    // Geri dön butonu
    document.getElementById('btnBack').addEventListener('click', goBackToUnits);
    
    // Mod kartları
    const modeCards = document.querySelectorAll('.mode-card');
    modeCards.forEach(card => {
        card.addEventListener('click', function() {
            const mode = this.getAttribute('data-mode');
            selectMode(mode);
        });
    });
}

// Mod seç
function selectMode(mode) {
    currentMode = mode;
    
    // Mod seçimini gizle
    document.getElementById('modeSelection').classList.add('hidden');
    
    // Aktivite alanını göster
    const activityArea = document.getElementById('activityArea');
    activityArea.classList.remove('hidden');
    
    // Seçilen moda göre aktiviteyi yükle
    switch(mode) {
        case 'flashcards':
            loadFlashcards(currentUnit);
            break;
        case 'matching':
            loadMatchingGame(currentUnit);
            break;
        case 'quiz':
            loadQuiz(currentUnit);
            break;
        case 'sentence':
            loadSentenceBuilder(currentUnit);
            break;
        case 'island':
            // Başlık güncelle
            document.getElementById('currentUnitTitle').textContent = currentUnit.title + ' - Ada Macerası';
            // Direkt o ünitenin adasına git
            const island = islandConfig.islands.find(i => i.id === currentUnit.id);
            if (island) {
                IslandAdventure.currentIsland = island;
                IslandAdventure.currentUnit = currentUnit;
                IslandAdventure.showGates(island);
            } else {
                showCelebration('⚠️ Bu ünite için henüz ada oluşturulmamış!', false);
                goBackToModeSelection();
            }
            break;
    }
}

// Ünitelere geri dön
function goBackToUnits() {
    // Öğrenme alanını gizle
    document.getElementById('learningArea').classList.add('hidden');
    
    // Ana ekranı göster
    document.querySelector('.welcome-card').classList.remove('hidden');
    document.getElementById('unitsContainer').classList.remove('hidden');
    
    // Aktivite alanını temizle
    document.getElementById('activityArea').innerHTML = '';
    
    // Değişkenleri sıfırla
    currentUnit = null;
    currentMode = null;
    
    // İstatistikleri güncelle
    updateStats();
    loadUnits(); // İlerlemeyi güncellemek için
}

// Aktivite alanına geri dön
function goBackToModeSelection() {
    // Aktivite alanını gizle ve temizle
    document.getElementById('activityArea').classList.add('hidden');
    document.getElementById('activityArea').innerHTML = '';
    
    // Mod seçimini göster
    document.getElementById('modeSelection').classList.remove('hidden');
    
    // Ünite başlığını geri yükle
    if (currentUnit) {
        document.getElementById('currentUnitTitle').textContent = currentUnit.title;
    }
    
    currentMode = null;
}

// Puan ekle ve animasyon göster
function addPointsWithAnimation(points) {
    const newTotal = StorageManager.addPoints(points);
    
    // İstatistiği güncelle
    const pointsElement = document.getElementById('totalPoints');
    pointsElement.textContent = newTotal;
    
    // Animasyon ekle
    pointsElement.style.animation = 'pulse 0.5s ease';
    setTimeout(() => {
        pointsElement.style.animation = '';
    }, 500);
    
    return newTotal;
}

// Ses çal (Web Speech API)
function speak(text, lang = 'en-US') {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.8; // Biraz daha yavaş
        window.speechSynthesis.speak(utterance);
    }
}

// Kutlama göster
function showCelebration(message) {
    const celebration = document.createElement('div');
    celebration.className = 'celebration-overlay';
    celebration.innerHTML = `
        <div class="celebration-content">
            <div class="celebration-emoji">🎉🎊✨</div>
            <h2>${message}</h2>
            <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()">Harika!</button>
        </div>
    `;
    
    document.body.appendChild(celebration);
    
    // Kutlama stillerini ekle (eğer yoksa)
    if (!document.getElementById('celebration-styles')) {
        const style = document.createElement('style');
        style.id = 'celebration-styles';
        style.textContent = `
            .celebration-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                animation: fadeIn 0.3s ease;
            }
            .celebration-content {
                background: white;
                padding: 50px;
                border-radius: 20px;
                text-align: center;
                max-width: 400px;
                animation: slideDown 0.5s ease;
            }
            .celebration-emoji {
                font-size: 5rem;
                margin-bottom: 20px;
            }
            .celebration-content h2 {
                font-size: 2rem;
                margin-bottom: 30px;
                color: var(--primary-color);
            }
        `;
        document.head.appendChild(style);
    }
}

// Karıştır fonksiyonu (Fisher-Yates)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
