// FukoLingo - Kelime Adası Macerası - Konfigürasyon

// Ada ve Kapı Konfigürasyonları
const islandConfig = {
    islands: [
        // UNIT 1 - LIFE
        {
            id: 1,
            name: '🏝️ Yaşam Adası',
            theme: 'Hayat, Hobiler ve Aktiviteler',
            emoji: '🌟',
            color: '#8b5cf6',
            gates: [
                {
                    id: 'gate-1',
                    name: '🎵 Müzik ve Eğlence',
                    description: 'Hobilerini keşfet!',
                    gameType: 'match-image',
                    words: ['music', 'sport', 'book', 'hobby', 'game'],
                    unlocked: true,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🎵'
                },
                {
                    id: 'gate-2',
                    name: '👨‍👩‍👧‍👦 Aile ve Arkadaşlar',
                    description: 'Sevdiklerini tanı!',
                    gameType: 'word-scramble',
                    words: ['family', 'friend', 'mother', 'father', 'sister'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '👨‍👩‍👧‍👦'
                },
                {
                    id: 'gate-3',
                    name: '🏡 Ev Yaşamı',
                    description: 'Evdeki hayatı öğren!',
                    gameType: 'listen-select',
                    words: ['home', 'house', 'room', 'garden', 'kitchen'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🏡'
                },
                {
                    id: 'gate-4',
                    name: '⏰ Günlük Aktiviteler',
                    description: 'Her gün neler yapıyorsun?',
                    gameType: 'match-image',
                    words: ['wake up', 'breakfast', 'study', 'sleep', 'watch'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '⏰'
                }
            ]
        },
        
        // UNIT 2 - YUMMY BREAKFAST
        {
            id: 2,
            name: '🏝️ Lezzet Adası',
            theme: 'Kahvaltı ve Yiyecekler',
            emoji: '🍳',
            color: '#f59e0b',
            gates: [
                {
                    id: 'gate-1',
                    name: '🥛 Kahvaltı Masası',
                    description: 'Kahvaltı temellerini öğren!',
                    gameType: 'match-image',
                    words: ['milk', 'cheese', 'honey', 'egg', 'butter'],
                    unlocked: true,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🥛'
                },
                {
                    id: 'gate-2',
                    name: '🥐 Fırın Lezzetleri',
                    description: 'Fırından taze lezzetler!',
                    gameType: 'word-scramble',
                    words: ['bread', 'croissant', 'muffin', 'pancake', 'bagel'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🥐'
                },
                {
                    id: 'gate-3',
                    name: '🍎 Sağlıklı Atıştırmalıklar',
                    description: 'Sağlıklı beslen!',
                    gameType: 'listen-select',
                    words: ['fruit', 'vegetable', 'healthy', 'nutritious', 'yummy'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🍎'
                },
                {
                    id: 'gate-4',
                    name: '☕ İçecekler',
                    description: 'İçecekleri tanı!',
                    gameType: 'match-image',
                    words: ['coffee', 'tea', 'fruit juice', 'drink', 'milk'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '☕'
                }
            ]
        },
        
        // UNIT 3 - DOWNTOWN
        {
            id: 3,
            name: '🏝️ Şehir Adası',
            theme: 'Şehir Merkezi ve Mekanlar',
            emoji: '🏙️',
            color: '#06b6d4',
            gates: [
                {
                    id: 'gate-1',
                    name: '🏛️ Önemli Binalar',
                    description: 'Şehirdeki binaları öğren!',
                    gameType: 'match-image',
                    words: ['library', 'museum', 'hospital', 'school', 'bank'],
                    unlocked: true,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🏛️'
                },
                {
                    id: 'gate-2',
                    name: '🛍️ Alışveriş Bölgesi',
                    description: 'Mağazaları keşfet!',
                    gameType: 'word-scramble',
                    words: ['store', 'shop', 'market', 'mall', 'bookstore'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🛍️'
                },
                {
                    id: 'gate-3',
                    name: '🍽️ Yemek Bölgesi',
                    description: 'Restoranlar ve kafeler!',
                    gameType: 'listen-select',
                    words: ['restaurant', 'cafe', 'bakery', 'pizza place', 'food court'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🍽️'
                },
                {
                    id: 'gate-4',
                    name: '🎭 Eğlence Merkezi',
                    description: 'Eğlenceli yerler!',
                    gameType: 'match-image',
                    words: ['cinema', 'park', 'playground', 'zoo', 'theatre'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🎭'
                }
            ]
        },
        
        // UNIT 4 - WEATHER AND EMOTIONS
        {
            id: 4,
            name: '🏝️ Duygu Adası',
            theme: 'Hava Durumu ve Duygular',
            emoji: '☀️',
            color: '#10b981',
            gates: [
                {
                    id: 'gate-1',
                    name: '🌤️ Hava Durumu',
                    description: 'Hava nasıl?',
                    gameType: 'match-image',
                    words: ['sunny', 'rainy', 'cloudy', 'snowy', 'windy'],
                    unlocked: true,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🌤️'
                },
                {
                    id: 'gate-2',
                    name: '😊 Mutlu Duygular',
                    description: 'Mutluluğu hisset!',
                    gameType: 'word-scramble',
                    words: ['happy', 'excited', 'cheerful', 'joyful', 'glad'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '😊'
                },
                {
                    id: 'gate-3',
                    name: '😢 Üzgün Duygular',
                    description: 'Duyguları tanı!',
                    gameType: 'listen-select',
                    words: ['sad', 'angry', 'worried', 'scared', 'tired'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '😢'
                },
                {
                    id: 'gate-4',
                    name: '🌡️ Sıcaklık ve Mevsimler',
                    description: 'Mevsimler ve sıcaklık!',
                    gameType: 'match-image',
                    words: ['hot', 'cold', 'warm', 'cool', 'temperature'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🌡️'
                }
            ]
        },
        
        // UNIT 5 - AT THE FAIR
        {
            id: 5,
            name: '🏝️ Eğlence Adası',
            theme: 'Panayır ve Oyunlar',
            emoji: '🎡',
            color: '#ec4899',
            gates: [
                {
                    id: 'gate-1',
                    name: '🎪 Panayır Girişi',
                    description: 'Panayıra hoş geldin!',
                    gameType: 'match-image',
                    words: ['fair', 'carousel', 'ferris wheel', 'roller coaster', 'bumper cars'],
                    unlocked: true,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🎪'
                },
                {
                    id: 'gate-2',
                    name: '🎮 Oyun Alanı',
                    description: 'Oyunları oyna!',
                    gameType: 'word-scramble',
                    words: ['game', 'prize', 'ticket', 'win', 'try'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🎮'
                },
                {
                    id: 'gate-3',
                    name: '🍿 Yiyecek Stantları',
                    description: 'Lezzetli atıştırmalıklar!',
                    gameType: 'listen-select',
                    words: ['popcorn', 'cotton candy', 'ice cream', 'hot dog', 'candy'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🍿'
                },
                {
                    id: 'gate-4',
                    name: '🎉 Eğlence Zamanı',
                    description: 'Eğlen ve öğren!',
                    gameType: 'match-image',
                    words: ['fun', 'exciting', 'enjoy', 'laugh', 'smile'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🎉'
                }
            ]
        },
        
        // UNIT 6 - OCCUPATIONS
        {
            id: 6,
            name: '🏝️ Meslek Adası',
            theme: 'Meslekler ve Kariyer',
            emoji: '👨‍⚕️',
            color: '#6366f1',
            gates: [
                {
                    id: 'gate-1',
                    name: '👨‍⚕️ Sağlık Mesleği',
                    description: 'Sağlık çalışanları!',
                    gameType: 'match-image',
                    words: ['doctor', 'nurse', 'dentist', 'pharmacist', 'vet'],
                    unlocked: true,
                    completed: false,
                    requiredScore: 80,
                    emoji: '👨‍⚕️'
                },
                {
                    id: 'gate-2',
                    name: '👨‍🏫 Eğitim Mesleği',
                    description: 'Öğretenler!',
                    gameType: 'word-scramble',
                    words: ['teacher', 'professor', 'student', 'principal', 'tutor'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '👨‍🏫'
                },
                {
                    id: 'gate-3',
                    name: '👨‍💼 Ofis Mesleği',
                    description: 'Büro çalışanları!',
                    gameType: 'listen-select',
                    words: ['engineer', 'architect', 'lawyer', 'accountant', 'manager'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '👨‍💼'
                },
                {
                    id: 'gate-4',
                    name: '👨‍🍳 Hizmet Mesleği',
                    description: 'Hizmet sektörü!',
                    gameType: 'match-image',
                    words: ['chef', 'waiter', 'pilot', 'driver', 'police officer'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '👨‍🍳'
                }
            ]
        }
    ]
};

// Oyun tipleri ve açıklamaları
const gameTypes = {
    'match-image': {
        name: 'Kelime-Resim Eşleştirme',
        icon: '🎨',
        description: 'Kelimeleri doğru resimlerle eşleştir!'
    },
    'word-scramble': {
        name: 'Harfleri Sırala',
        icon: '🔤',
        description: 'Karışık harflerden kelime oluştur!'
    },
    'listen-select': {
        name: 'Dinle ve Seç',
        icon: '👂',
        description: 'Dinle ve doğru kelimeyi seç!'
    },
    'sentence-fill': {
        name: 'Cümle Tamamla',
        icon: '📝',
        description: 'Boşluğa doğru kelimeyi yerleştir!'
    }
};

// LocalStorage için anahtar
const ISLAND_PROGRESS_KEY = 'fukolingo_island_progress';

// İlerleme yöneticisi
const IslandProgress = {
    // İlerlemeyi yükle
    load() {
        const saved = localStorage.getItem(ISLAND_PROGRESS_KEY);
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error('Progress load error:', e);
                return this.getDefaultProgress();
            }
        }
        return this.getDefaultProgress();
    },
    
    // Varsayılan ilerleme
    getDefaultProgress() {
        const progress = {};
        islandConfig.islands.forEach(island => {
            // Güvenlik kontrolü
            if (!island || !island.id || !island.gates) {
                console.error('Invalid island config:', island);
                return;
            }
            
            progress[island.id] = {
                unlocked: true,
                completed: false,
                gates: {}
            };
            island.gates.forEach(gate => {
                progress[island.id].gates[gate.id] = {
                    unlocked: gate.unlocked,
                    completed: gate.completed,
                    bestScore: 0,
                    attempts: 0
                };
            });
        });
        return progress;
    },
    
    // İlerlemeyi kaydet
    save(progress) {
        localStorage.setItem(ISLAND_PROGRESS_KEY, JSON.stringify(progress));
    },
    
    // Kapıyı tamamla
    completeGate(islandId, gateId, score) {
        const progress = this.load();
        const gateProgress = progress[islandId].gates[gateId];
        
        gateProgress.completed = true;
        gateProgress.bestScore = Math.max(gateProgress.bestScore, score);
        gateProgress.attempts++;
        
        // Bir sonraki kapıyı aç
        const island = islandConfig.islands.find(i => i.id === islandId);
        const currentGateIndex = island.gates.findIndex(g => g.id === gateId);
        
        if (currentGateIndex < island.gates.length - 1) {
            const nextGate = island.gates[currentGateIndex + 1];
            progress[islandId].gates[nextGate.id].unlocked = true;
        } else {
            // Tüm kapılar tamamlandı, ada tamamlandı
            progress[islandId].completed = true;
        }
        
        this.save(progress);
        return progress;
    },
    
    // Ada durumunu al
    getIslandStatus(islandId) {
        const progress = this.load();
        const island = islandConfig.islands.find(i => i.id === islandId);
        const islandProgress = progress[islandId];
        
        const totalGates = island.gates.length;
        const completedGates = Object.values(islandProgress.gates).filter(g => g.completed).length;
        
        return {
            completed: islandProgress.completed,
            progress: Math.round((completedGates / totalGates) * 100),
            completedGates,
            totalGates
        };
    }
};
