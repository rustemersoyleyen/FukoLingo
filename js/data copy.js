// FukoLingo - Kelime Veritabanı
// 6. Sınıf İngilizce Kelimeleri - Ünitelere Göre Düzenlenmiş

const vocabularyData = {
    units: [
        {
            id: 1,
            title: "Unit 1 - Life",
            icon: "🌍",
            description: "Yaşam, hobiler ve günlük aktiviteler",
            words: [
                {
                    english: "life",
                    turkish: "hayat, yaşam",
                    pronunciation: "/laɪf/",
                    example: "I love my life.",
                    exampleTr: "Hayatımı seviyorum.",
                    image: "🌟"
                },
                {
                    english: "music",
                    turkish: "müzik",
                    pronunciation: "/ˈmjuːzɪk/",
                    example: "I listen to music every day.",
                    exampleTr: "Her gün müzik dinlerim.",
                    image: "🎵"
                },
                {
                    english: "sport",
                    turkish: "spor",
                    pronunciation: "/spɔːrt/",
                    example: "My favorite sport is football.",
                    exampleTr: "En sevdiğim spor futboldur.",
                    image: "⚽"
                },
                {
                    english: "book",
                    turkish: "kitap",
                    pronunciation: "/bʊk/",
                    example: "I read a book every week.",
                    exampleTr: "Her hafta bir kitap okurum.",
                    image: "📚"
                },
                {
                    english: "friend",
                    turkish: "arkadaş",
                    pronunciation: "/frend/",
                    example: "She is my best friend.",
                    exampleTr: "O benim en iyi arkadaşım.",
                    image: "👫"
                },
                {
                    english: "family",
                    turkish: "aile",
                    pronunciation: "/ˈfæməli/",
                    example: "I love my family.",
                    exampleTr: "Ailemi seviyorum.",
                    image: "👨‍👩‍👧‍👦"
                },
                {
                    english: "hobby",
                    turkish: "hobi",
                    pronunciation: "/ˈhɒbi/",
                    example: "Reading is my hobby.",
                    exampleTr: "Okumak benim hobimdir.",
                    image: "🎨"
                },
                {
                    english: "weekend",
                    turkish: "hafta sonu",
                    pronunciation: "/ˌwiːkˈend/",
                    example: "We play games on the weekend.",
                    exampleTr: "Hafta sonu oyun oynarız.",
                    image: "📅"
                }
            ]
        },
        {
            id: 2,
            title: "Unit 2 - Yummy Breakfast",
            icon: "🍳",
            description: "Kahvaltı ve yiyecekler",
            words: [
                {
                    english: "breakfast",
                    turkish: "kahvaltı",
                    pronunciation: "/ˈbrekfəst/",
                    example: "I have breakfast at 7 o'clock.",
                    exampleTr: "Saat 7'de kahvaltı yaparım.",
                    image: "🍳"
                },
                {
                    english: "bread",
                    turkish: "ekmek",
                    pronunciation: "/bred/",
                    example: "I eat bread and cheese for breakfast.",
                    exampleTr: "Kahvaltıda ekmek ve peynir yerim.",
                    image: "🍞"
                },
                {
                    english: "cheese",
                    turkish: "peynir",
                    pronunciation: "/tʃiːz/",
                    example: "Would you like some cheese?",
                    exampleTr: "Biraz peynir ister misin?",
                    image: "🧀"
                },
                {
                    english: "egg",
                    turkish: "yumurta",
                    pronunciation: "/eɡ/",
                    example: "I eat two eggs every morning.",
                    exampleTr: "Her sabah iki yumurta yerim.",
                    image: "🥚"
                },
                {
                    english: "milk",
                    turkish: "süt",
                    pronunciation: "/mɪlk/",
                    example: "I drink milk for breakfast.",
                    exampleTr: "Kahvaltıda süt içerim.",
                    image: "🥛"
                },
                {
                    english: "honey",
                    turkish: "bal",
                    pronunciation: "/ˈhʌni/",
                    example: "I put honey on my bread.",
                    exampleTr: "Ekmeğimin üzerine bal sürerim.",
                    image: "🍯"
                },
                {
                    english: "tea",
                    turkish: "çay",
                    pronunciation: "/tiː/",
                    example: "My mother drinks tea every morning.",
                    exampleTr: "Annem her sabah çay içer.",
                    image: "🍵"
                },
                {
                    english: "butter",
                    turkish: "tereyağı",
                    pronunciation: "/ˈbʌtər/",
                    example: "I like butter and jam.",
                    exampleTr: "Tereyağı ve reçeli severim.",
                    image: "🧈"
                }
            ]
        },
        {
            id: 3,
            title: "Unit 3 - Downtown",
            icon: "🏙️",
            description: "Şehir merkezi ve mekanlar",
            words: [
                {
                    english: "downtown",
                    turkish: "şehir merkezi",
                    pronunciation: "/ˌdaʊnˈtaʊn/",
                    example: "We go downtown on Saturdays.",
                    exampleTr: "Cumartesi günleri şehir merkezine gideriz.",
                    image: "🏙️"
                },
                {
                    english: "library",
                    turkish: "kütüphane",
                    pronunciation: "/ˈlaɪbreri/",
                    example: "I study in the library.",
                    exampleTr: "Kütüphanede ders çalışırım.",
                    image: "📚"
                },
                {
                    english: "museum",
                    turkish: "müze",
                    pronunciation: "/mjuːˈziːəm/",
                    example: "Let's go to the museum.",
                    exampleTr: "Hadi müzeye gidelim.",
                    image: "🏛️"
                },
                {
                    english: "park",
                    turkish: "park",
                    pronunciation: "/pɑːrk/",
                    example: "Children play in the park.",
                    exampleTr: "Çocuklar parkta oynar.",
                    image: "🌳"
                },
                {
                    english: "cinema",
                    turkish: "sinema",
                    pronunciation: "/ˈsɪnəmə/",
                    example: "We watch movies at the cinema.",
                    exampleTr: "Sinemada film izleriz.",
                    image: "🎬"
                },
                {
                    english: "restaurant",
                    turkish: "restoran",
                    pronunciation: "/ˈrestrɒnt/",
                    example: "This restaurant is very good.",
                    exampleTr: "Bu restoran çok iyi.",
                    image: "🍽️"
                },
                {
                    english: "hospital",
                    turkish: "hastane",
                    pronunciation: "/ˈhɒspɪtl/",
                    example: "The hospital is near here.",
                    exampleTr: "Hastane buraya yakın.",
                    image: "🏥"
                },
                {
                    english: "school",
                    turkish: "okul",
                    pronunciation: "/skuːl/",
                    example: "I go to school every day.",
                    exampleTr: "Her gün okula giderim.",
                    image: "🏫"
                }
            ]
        },
        {
            id: 4,
            title: "Unit 4 - Weather and Emotions",
            icon: "☀️",
            description: "Hava durumu ve duygular",
            words: [
                {
                    english: "weather",
                    turkish: "hava durumu",
                    pronunciation: "/ˈweðər/",
                    example: "The weather is nice today.",
                    exampleTr: "Bugün hava güzel.",
                    image: "🌤️"
                },
                {
                    english: "sunny",
                    turkish: "güneşli",
                    pronunciation: "/ˈsʌni/",
                    example: "It is sunny and warm.",
                    exampleTr: "Güneşli ve sıcak.",
                    image: "☀️"
                },
                {
                    english: "rainy",
                    turkish: "yağmurlu",
                    pronunciation: "/ˈreɪni/",
                    example: "It is rainy and cold.",
                    exampleTr: "Yağmurlu ve soğuk.",
                    image: "🌧️"
                },
                {
                    english: "happy",
                    turkish: "mutlu",
                    pronunciation: "/ˈhæpi/",
                    example: "I am very happy today.",
                    exampleTr: "Bugün çok mutluyum.",
                    image: "😊"
                },
                {
                    english: "sad",
                    turkish: "üzgün",
                    pronunciation: "/sæd/",
                    example: "Why are you sad?",
                    exampleTr: "Neden üzgünsün?",
                    image: "😢"
                },
                {
                    english: "angry",
                    turkish: "kızgın",
                    pronunciation: "/ˈæŋɡri/",
                    example: "Don't be angry!",
                    exampleTr: "Kızma!",
                    image: "😠"
                },
                {
                    english: "tired",
                    turkish: "yorgun",
                    pronunciation: "/ˈtaɪərd/",
                    example: "I am very tired.",
                    exampleTr: "Çok yorgunum.",
                    image: "😴"
                },
                {
                    english: "excited",
                    turkish: "heyecanlı",
                    pronunciation: "/ɪkˈsaɪtɪd/",
                    example: "I am excited about the party.",
                    exampleTr: "Parti için heyecanlıyım.",
                    image: "🤩"
                }
            ]
        },
        {
            id: 5,
            title: "Unit 5 - At the Fair",
            icon: "🎡",
            description: "Panayır ve eğlence",
            words: [
                {
                    english: "fair",
                    turkish: "panayır, lunapark",
                    pronunciation: "/feər/",
                    example: "Let's go to the fair!",
                    exampleTr: "Hadi panayıra gidelim!",
                    image: "🎡"
                },
                {
                    english: "carousel",
                    turkish: "atlıkarınca",
                    pronunciation: "/ˌkærəˈsel/",
                    example: "The carousel is fun.",
                    exampleTr: "Atlıkarınca eğlenceli.",
                    image: "🎠"
                },
                {
                    english: "ferris wheel",
                    turkish: "dönme dolap",
                    pronunciation: "/ˈferɪs wiːl/",
                    example: "I love the ferris wheel!",
                    exampleTr: "Dönme dolabı çok severim!",
                    image: "🎡"
                },
                {
                    english: "ticket",
                    turkish: "bilet",
                    pronunciation: "/ˈtɪkɪt/",
                    example: "Can I buy a ticket?",
                    exampleTr: "Bir bilet alabilir miyim?",
                    image: "🎫"
                },
                {
                    english: "candy",
                    turkish: "şeker",
                    pronunciation: "/ˈkændi/",
                    example: "I want some candy.",
                    exampleTr: "Biraz şeker istiyorum.",
                    image: "🍬"
                },
                {
                    english: "balloon",
                    turkish: "balon",
                    pronunciation: "/bəˈluːn/",
                    example: "I have a red balloon.",
                    exampleTr: "Kırmızı bir balonum var.",
                    image: "🎈"
                },
                {
                    english: "game",
                    turkish: "oyun",
                    pronunciation: "/ɡeɪm/",
                    example: "Let's play a game!",
                    exampleTr: "Hadi oyun oynayalım!",
                    image: "🎮"
                },
                {
                    english: "prize",
                    turkish: "ödül",
                    pronunciation: "/praɪz/",
                    example: "I won a prize!",
                    exampleTr: "Bir ödül kazandım!",
                    image: "🏆"
                }
            ]
        },
        {
            id: 6,
            title: "Unit 6 - Occupations",
            icon: "👨‍⚕️",
            description: "Meslekler",
            words: [
                {
                    english: "teacher",
                    turkish: "öğretmen",
                    pronunciation: "/ˈtiːtʃər/",
                    example: "My mother is a teacher.",
                    exampleTr: "Annem öğretmendir.",
                    image: "👩‍🏫"
                },
                {
                    english: "doctor",
                    turkish: "doktor",
                    pronunciation: "/ˈdɒktər/",
                    example: "The doctor helps sick people.",
                    exampleTr: "Doktor hasta insanlara yardım eder.",
                    image: "👨‍⚕️"
                },
                {
                    english: "nurse",
                    turkish: "hemşire",
                    pronunciation: "/nɜːrs/",
                    example: "The nurse is very kind.",
                    exampleTr: "Hemşire çok nazik.",
                    image: "👩‍⚕️"
                },
                {
                    english: "engineer",
                    turkish: "mühendis",
                    pronunciation: "/ˌendʒɪˈnɪər/",
                    example: "My father is an engineer.",
                    exampleTr: "Babam mühendistir.",
                    image: "👨‍💻"
                },
                {
                    english: "police officer",
                    turkish: "polis",
                    pronunciation: "/pəˈliːs ˈɒfɪsər/",
                    example: "The police officer keeps us safe.",
                    exampleTr: "Polis bizi güvende tutar.",
                    image: "👮"
                },
                {
                    english: "firefighter",
                    turkish: "itfaiyeci",
                    pronunciation: "/ˈfaɪərfaɪtər/",
                    example: "Firefighters are very brave.",
                    exampleTr: "İtfaiyeciler çok cesurdur.",
                    image: "👨‍🚒"
                },
                {
                    english: "chef",
                    turkish: "aşçı",
                    pronunciation: "/ʃef/",
                    example: "The chef cooks delicious food.",
                    exampleTr: "Aşçı lezzetli yemekler pişirir.",
                    image: "👨‍🍳"
                },
                {
                    english: "pilot",
                    turkish: "pilot",
                    pronunciation: "/ˈpaɪlət/",
                    example: "I want to be a pilot.",
                    exampleTr: "Pilot olmak istiyorum.",
                    image: "👨‍✈️"
                }
            ]
        }
    ]
};

// Yerel depolama yönetimi
const StorageManager = {
    // Kullanıcı ilerlemesini kaydet
    saveProgress: function(unitId, score) {
        const progress = this.getProgress();
        if (!progress[unitId]) {
            progress[unitId] = {
                completed: 0,
                total: 0,
                lastScore: 0
            };
        }
        progress[unitId].completed += 1;
        progress[unitId].lastScore = score;
        localStorage.setItem('fukoLingo_progress', JSON.stringify(progress));
    },

    // İlerlemeyi getir
    getProgress: function() {
        const data = localStorage.getItem('fukoLingo_progress');
        return data ? JSON.parse(data) : {};
    },

    // Toplam puan
    getTotalPoints: function() {
        const data = localStorage.getItem('fukoLingo_points');
        return data ? parseInt(data) : 0;
    },

    // Puan ekle
    addPoints: function(points) {
        const current = this.getTotalPoints();
        const newTotal = current + points;
        localStorage.setItem('fukoLingo_points', newTotal.toString());
        return newTotal;
    },

    // Öğrenilen kelime sayısı
    getLearnedWordsCount: function() {
        const data = localStorage.getItem('fukoLingo_learned');
        return data ? JSON.parse(data).length : 0;
    },

    // Kelimeyi öğrenildi olarak işaretle
    markWordLearned: function(unitId, wordIndex) {
        const learned = this.getLearnedWords();
        const key = `${unitId}-${wordIndex}`;
        if (!learned.includes(key)) {
            learned.push(key);
            localStorage.setItem('fukoLingo_learned', JSON.stringify(learned));
        }
    },

    // Öğrenilen kelimeleri getir
    getLearnedWords: function() {
        const data = localStorage.getItem('fukoLingo_learned');
        return data ? JSON.parse(data) : [];
    }
};
