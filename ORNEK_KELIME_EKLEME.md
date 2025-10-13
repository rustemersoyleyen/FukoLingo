# 🎯 Örnek: Yeni Kelime Ekleme

## Senaryo: Unit 1'e "dance" kelimesini ekliyoruz

### ❌ ÖNCE (Son kelime: weekend)

```javascript
{
    english: "weekend",
    turkish: "hafta sonu",
    pronunciation: "/ˌwiːkˈend/",
    example: "We play games on the weekend.",
    exampleTr: "Hafta sonu oyun oynarız.",
    image: "📅"
}
```

### ✅ SONRA (dance eklendi)

```javascript
{
    english: "weekend",
    turkish: "hafta sonu",
    pronunciation: "/ˌwiːkˈend/",
    example: "We play games on the weekend.",
    exampleTr: "Hafta sonu oyun oynarız.",
    image: "📅"
},
{
    english: "dance",
    turkish: "dans, dans etmek",
    pronunciation: "/dæns/",
    example: "I love to dance.",
    exampleTr: "Dans etmeyi severim.",
    image: "💃"
}
```

**DİKKAT:** Önceki kelimenin sonuna virgül (`,`) koymayı unutmayın!

---

## 📝 Kelime Formatı

Her kelime şu alanları içermelidir:

```javascript
{
    english: "kelime",              // İngilizce kelime (küçük harf)
    turkish: "türkçe anlamı",       // Türkçe karşılığı
    pronunciation: "/telaffuz/",    // IPA formatında telaffuz
    example: "Example sentence.",   // İngilizce örnek cümle
    exampleTr: "Örnek cümle.",     // Türkçe çeviri
    image: "🎨"                     // Emoji veya görsel yolu
}
```

---

## 🔤 Telaffuz Nasıl Bulunur?

### Yöntem 1: Online Sözlükler
- **Cambridge Dictionary:** https://dictionary.cambridge.org/
- **Merriam-Webster:** https://www.merriam-webster.com/
- **Oxford Learner's:** https://www.oxfordlearnersdictionaries.com/

### Yöntem 2: Otomatik Araç
- **ToPhonetics:** https://tophonetics.com/
  - Kelimeyi yazın
  - IPA çeviriyi kopyalayın

### Örnek:
```
dance → /dæns/
computer → /kəmˈpjuːtər/
beautiful → /ˈbjuːtɪfl/
```

---

## 😊 Emoji Seçimi

### Popüler Kategoriler

**Duygular:**
```
😊 happy, 😢 sad, 😠 angry, 😴 tired, 🤩 excited
😱 scared, 😂 laughing, 🤔 thinking, 😎 cool
```

**Hayvanlar:**
```
🐶 dog, 🐱 cat, 🐭 mouse, 🐰 rabbit, 🦊 fox
🐻 bear, 🐯 tiger, 🦁 lion, 🐮 cow, 🐷 pig
```

**Yiyecekler:**
```
🍎 apple, 🍊 orange, 🍋 lemon, 🍌 banana, 🍕 pizza
🍔 burger, 🍟 fries, 🥗 salad, 🍰 cake, 🍦 ice cream
```

**Aktiviteler:**
```
⚽ football, 🏀 basketball, 🎮 gaming, 📚 reading
🎵 music, 🎨 painting, 💃 dancing, 🏊 swimming
```

**Nesneler:**
```
💻 computer, 📱 phone, 🖊️ pen, 📓 notebook, 🎒 backpack
⌚ watch, 🚗 car, 🏠 house, 🌳 tree, ☀️ sun
```

**Emoji Arama:**
- Windows: `Win + .` (nokta)
- Mac: `Cmd + Ctrl + Space`
- Online: https://emojipedia.org/

---

## ✍️ İyi Örnek Cümle Nasıl Yazılır?

### ✅ İYİ Örnekler:
```javascript
"I dance with my friends."        // Basit ve net
"My computer is new."             // Günlük hayat
"She is very happy today."        // Anlaşılır
```

### ❌ KÖTÜ Örnekler:
```javascript
"The multifaceted computer..."    // Çok karmaşık
"Dance."                          // Çok kısa, cümle değil
"I don't not dance never."        // Gramer hatası
```

### 💡 İpuçları:
- 4-8 kelime arası olsun
- Basit present/past tense kullanın
- Kelime cümlede net görünmeli
- Günlük konuşma dilinde olsun
- Çocukların anlayabileceği cümleler

---

## 🎯 Tam Örnek: 3 Kelime Ekleme

```javascript
words: [
    // ... mevcut kelimeler ...
    {
        english: "weekend",
        turkish: "hafta sonu",
        pronunciation: "/ˌwiːkˈend/",
        example: "We play games on the weekend.",
        exampleTr: "Hafta sonu oyun oynarız.",
        image: "📅"
    },
    {
        english: "dance",
        turkish: "dans, dans etmek",
        pronunciation: "/dæns/",
        example: "I love to dance.",
        exampleTr: "Dans etmeyi severim.",
        image: "💃"
    },
    {
        english: "sing",
        turkish: "şarkı söylemek",
        pronunciation: "/sɪŋ/",
        example: "She sings very well.",
        exampleTr: "Çok güzel şarkı söyler.",
        image: "🎤"
    },
    {
        english: "draw",
        turkish: "çizmek, resim yapmak",
        pronunciation: "/drɔː/",
        example: "I draw pictures in my free time.",
        exampleTr: "Boş zamanımda resim çizerim.",
        image: "✏️"
    }
]
```

**Önemli:**
- Her kelimenin sonunda virgül (`,`) olmalı
- Son kelimenin sonunda virgül OLMAMALI
- Her kelime `{}` süslü parantez içinde
- Tüm alanlar doldurulmalı

---

## 🚀 Hızlı Başlangıç Şablonu

Kopyala-yapıştır için:

```javascript
{
    english: "",
    turkish: "",
    pronunciation: "//",
    example: "",
    exampleTr: "",
    image: "❓"
},
```

**Kullanım:**
1. Şablonu kopyala
2. `js/data.js` dosyasına yapıştır
3. Alanları doldur
4. Kaydet
5. Tarayıcıda test et (F5 ile yenile)

---

## ⚠️ Yaygın Hatalar

### 1. Virgül Unutma
```javascript
❌ } // Virgül yok!
    {
✅ }, // Doğru
    {
```

### 2. Son Kelimede Virgül
```javascript
❌ image: "🎨"
   }, // Son kelime, virgül olmamalı!
]

✅ image: "🎨"
   } // Son kelime, virgül yok
]
```

### 3. Tırnak İşaretleri
```javascript
❌ english: dance,        // Tırnak yok!
✅ english: "dance",      // Doğru

❌ example: 'I dance.',   // Tek tırnak (sorun çıkarabilir)
✅ example: "I dance.",   // Çift tırnak (önerilen)
```

### 4. Türkçe Karakterler
```javascript
✅ turkish: "müzik",      // Türkçe karakter OK
✅ turkish: "şarkı",      // Türkçe karakter OK
```

---

## 🧪 Test Etme

Kelime ekledikten sonra:

1. **Dosyayı kaydet** (Ctrl+S)
2. **Tarayıcıda F5** ile sayfayı yenile
3. **İlgili üniteyi aç**
4. **Flash Kartlarda görünüyor mu kontrol et**
5. **Tüm modları test et:**
   - Flash Kartlar ✓
   - Eşleştirme ✓
   - Quiz ✓
   - Cümle Kurma ✓

---

## 🎓 Seviye Uygunluğu

### 6. Sınıf İçin Uygun Kelimeler:
✅ Basit isimler: cat, dog, book, pen
✅ Temel fiiller: go, come, eat, drink
✅ Sık kullanılan sıfatlar: big, small, good, bad
✅ Günlük kelimeler: school, home, family

### Uygun OLMAYAN:
❌ İleri kelimeler: magnificent, astonishing
❌ Teknik terimler: algorithm, processor
❌ Nadir kelimeler: quaint, archaic

---

## 📊 Kaç Kelime Eklemeli?

**Önerilen:**
- Her ünitede: **8-12 kelime**
- Fazla kelime öğrenciyi yorar
- Az kelime yetersiz kalır

**Şu anki durum:**
- Her ünite: 8 kelime
- Toplam: 48 kelime

**Genişletme önerisi:**
- Her üniteye 2-4 kelime daha
- Toplam: 60-72 kelime hedefi

---

## 💾 Yedekleme

**Önemli:** Değişiklik yapmadan önce yedek alın!

```bash
# Windows
copy js\data.js js\data.backup.js

# Mac/Linux
cp js/data.js js/data.backup.js
```

Hata yaptıysanız yedekten geri yükleyin:
```bash
copy js\data.backup.js js\data.js
```

---

## 🆘 Sorun Giderme

### "Kelime görünmüyor!"
- ✓ Dosyayı kaydettiniz mi? (Ctrl+S)
- ✓ Tarayıcıyı yenilediniz mi? (F5)
- ✓ Virgülleri kontrol edin
- ✓ Console'da hata var mı? (F12)

### "Sayfa bozuldu!"
- ✓ Syntax hatası olabilir
- ✓ F12 → Console → Hata mesajını okuyun
- ✓ Yedekten geri yükleyin
- ✓ Virgül, tırnak, parantez kontrolü

### "Telaffuz çalışmıyor!"
- ✓ IPA formatı doğru mu? `/telaffuz/`
- ✓ Tarayıcı Chrome/Edge mi?
- ✓ Ses izni verildi mi?

---

Başarılar! 🦊📚✨
