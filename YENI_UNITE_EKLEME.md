# 🏝️ Yeni Ünite ve Ada Ekleme Rehberi

Bu dokümanda FukoLingo'ya yeni bir ünite ve ona özel Ada Macerası nasıl eklenir öğreneceksiniz.

---

## 📋 Adım 1: Ünite Kelimelerini Ekle

### `js/data.js` dosyasını düzenle:

```javascript
const vocabularyData = {
    units: [
        // Mevcut üniteler...
        
        // YENİ ÜNİTE - UNIT 7
        {
            id: 7, // Sıradaki ID
            title: "Unit 7 - My New Topic", // Başlık
            icon: "🎨", // Emoji ikonu
            description: "Yeni konunun açıklaması",
            words: [
                {
                    english: "art",
                    turkish: "sanat",
                    pronunciation: "/ɑːrt/",
                    example: "I love art.",
                    exampleTr: "Sanatı severim.",
                    image: "🎨"
                },
                // Daha fazla kelime...
            ]
        }
    ]
};
```

### ⚠️ Önemli Noktalar:
- **`id`**: Benzersiz numara olmalı (1, 2, 3, ...)
- **`image`**: Emoji veya resim yolu
- **En az 20 kelime** eklemeniz önerilir

---

## 📋 Adım 2: Ada Konfigürasyonu Ekle

### `js/island-config.js` dosyasını düzenle:

```javascript
const islandConfig = {
    islands: [
        // Mevcut adalar...
        
        // UNIT 7 - YENİ ADA
        {
            id: 7, // Ünite ID ile aynı olmalı!
            name: '🏝️ Sanat Adası',
            theme: 'Sanat ve Yaratıcılık',
            emoji: '🎨',
            color: '#ef4444', // Hex renk kodu
            gates: [
                {
                    id: 'gate-1',
                    name: '🎨 Resim Atölyesi',
                    description: 'Resim terimlerini öğren!',
                    gameType: 'match-image', // Oyun tipi
                    words: ['art', 'paint', 'draw', 'color', 'canvas'], // 5 kelime
                    unlocked: true, // İlk kapı açık
                    completed: false,
                    requiredScore: 80,
                    emoji: '🎨'
                },
                {
                    id: 'gate-2',
                    name: '🖌️ Boya Odası',
                    description: 'Renkleri keşfet!',
                    gameType: 'word-scramble',
                    words: ['red', 'blue', 'green', 'yellow', 'purple'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🖌️'
                },
                {
                    id: 'gate-3',
                    name: '🖼️ Galeri',
                    description: 'Sanat eserlerini tanı!',
                    gameType: 'listen-select',
                    words: ['painting', 'sculpture', 'museum', 'artist', 'gallery'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '🖼️'
                },
                {
                    id: 'gate-4',
                    name: '✏️ Çizim Stüdyosu',
                    description: 'Çizim teknikleri!',
                    gameType: 'match-image',
                    words: ['sketch', 'pencil', 'brush', 'paper', 'eraser'],
                    unlocked: false,
                    completed: false,
                    requiredScore: 80,
                    emoji: '✏️'
                }
            ]
        }
    ]
};
```

### 🎮 Oyun Tipleri:
- **`match-image`**: Kelime-Resim Eşleştirme
- **`word-scramble`**: Harfleri Sırala
- **`listen-select`**: Dinle ve Seç
- **`sentence-fill`**: Cümle Tamamla (henüz eklenmedi)

### 🎨 Renk Önerileri:
- `#ef4444` - Kırmızı
- `#f59e0b` - Turuncu
- `#10b981` - Yeşil
- `#06b6d4` - Cyan
- `#8b5cf6` - Mor
- `#ec4899` - Pembe
- `#6366f1` - İndigo

---

## 📋 Adım 3: İpuçları Ekle (Opsiyonel)

### `js/island-gemini.js` dosyasını düzenle:

```javascript
// AI olmadan basit ipuçları
getFallbackHint(word) {
    const hints = {
        // Mevcut ipuçları...
        
        // UNIT 7 - SANAT
        'art': { hint: 'Resim, müzik gibi yaratıcı işler', example: 'I love art.', translation: 'sanat' },
        'paint': { hint: 'Boya ile resim yapmak', example: 'I paint pictures.', translation: 'boyamak' },
        'draw': { hint: 'Kalemle çizmek', example: 'I can draw a cat.', translation: 'çizmek' },
        'color': { hint: 'Renk - kırmızı, mavi, yeşil...', example: 'My favorite color is blue.', translation: 'renk' },
        // Daha fazla...
    };
    
    return hints[word.toLowerCase()] || { 
        hint: 'Bu kelimeyi öğren!', 
        example: `I know the word "${word}".`,
        translation: word 
    };
}
```

---

## 📋 Adım 4: Test Et!

### Test Adımları:

1. **LocalStorage'ı temizle:**
   - `reset-storage.html` açın
   - "Ada İlerlemesini Sıfırla" tıklayın

2. **Ana sayfayı aç:**
   - `index.html`

3. **Yeni üniteni seç:**
   - Unit 7'yi göreceksin

4. **Ada Macerası'nı aç:**
   - 🏝️ Ada Macerası modunu seç
   - Yeni adan görünmeli!

5. **İlk kapıyı oyna:**
   - Kapıya tıkla
   - Oyunu test et
   - 80+ puan al
   - Sonraki kapı açılmalı!

---

## ✅ Checklist

Yeni ünite eklerken kontrol et:

- [ ] `js/data.js` - Ünite eklendi (benzersiz ID)
- [ ] `js/data.js` - En az 20 kelime eklendi
- [ ] `js/data.js` - Her kelimede `image` emoji var
- [ ] `js/island-config.js` - Ada eklendi (aynı ID)
- [ ] `js/island-config.js` - 4 kapı oluşturuldu
- [ ] `js/island-config.js` - Her kapıda 5 kelime var
- [ ] `js/island-config.js` - İlk kapı `unlocked: true`
- [ ] `js/island-gemini.js` - İpuçları eklendi (opsiyonel)
- [ ] LocalStorage temizlendi
- [ ] Test edildi ve çalışıyor!

---

## 🎯 Örnek: Tam Ünite

### Özet:
```
Unit 7 - Art
├── 20 kelime (data.js)
├── 1 Ada (island-config.js)
│   ├── Kapı 1: Resim (5 kelime) ✅ Açık
│   ├── Kapı 2: Renkler (5 kelime) 🔒
│   ├── Kapı 3: Galeri (5 kelime) 🔒
│   └── Kapı 4: Çizim (5 kelime) 🔒
└── 20 ipucu (island-gemini.js)
```

---

## 🚨 Yaygın Hatalar

### Hata 1: "Ada bulunamadı"
❌ **Sebep**: Ada ID'si ile Ünite ID'si farklı  
✅ **Çözüm**: ID'leri aynı yap

### Hata 2: "Cannot read properties of undefined (reading 'gates')"
❌ **Sebep**: Eski LocalStorage verisi  
✅ **Çözüm**: `reset-storage.html` ile temizle

### Hata 3: Kelimeler görünmüyor
❌ **Sebep**: Kapıdaki kelime isimleri `data.js` ile uyuşmuyor  
✅ **Çözüm**: Kelime isimlerini tam olarak eşleştir (küçük harf!)

---

## 💡 İpuçları

1. **Kapı İsimleri**: Eğlenceli ve temaya uygun seçin
2. **Emoji Kullanımı**: Her kapı için farklı emoji
3. **Kelime Seçimi**: Her kapıda ilgili kelimeleri grupla
4. **Oyun Çeşitliliği**: Farklı oyun tiplerini karıştır
5. **Zorluk**: İlk kapıyı kolay, son kapıyı zor yap

---

## 🎉 Tebrikler!

Yeni ünite eklemeyi öğrendiniz! Artık FukoLingo'yu sınırsızca genişletebilirsiniz! 🦁

**Sorularınız varsa GitHub'da issue açın!**


