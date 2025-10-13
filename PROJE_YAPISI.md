# 📁 FukoLingo - Proje Yapısı

## Dizin Yapısı

```
FukoLingo/
│
├── index.html                 # Ana HTML dosyası
│
├── css/
│   └── style.css             # Tüm stil dosyaları
│
├── js/
│   ├── data.js               # Kelime veritabanı ve veri yönetimi
│   ├── app.js                # Ana uygulama mantığı
│   ├── flashcards.js         # Flash kartlar modülü
│   ├── matching.js           # Eşleştirme oyunu modülü
│   ├── quiz.js               # Quiz modülü
│   └── sentence.js           # Cümle kurma modülü
│
├── images/                   # Görseller klasörü
│   └── README.md            # Görsel kullanım rehberi
│
├── README.md                 # Proje ana dokümantasyonu
├── HIZLI_BASLANGIC.md       # Hızlı başlangıç kılavuzu
├── KULLANIM_KILAVUZU.md     # Detaylı kullanım kılavuzu
├── OGRETMEN_KILAVUZU.md     # Öğretmen rehberi
├── KELIME_SABLONU.json      # Yeni kelime ekleme şablonu
├── CHANGELOG.md              # Sürüm değişiklikleri
├── CONTRIBUTING.md           # Katkıda bulunma rehberi
├── LICENSE                   # MIT Lisansı
├── .gitignore               # Git ignore dosyası
└── PROJE_YAPISI.md          # Bu dosya
```

## 📄 Dosya Açıklamaları

### HTML Dosyası

**`index.html`**
- Ana sayfa ve uygulama iskeleti
- Tüm bölümler: header, ana içerik, footer
- Modüler yapı (section'lara ayrılmış)
- Responsive meta tag'ler
- Google Fonts (Poppins) entegrasyonu

### CSS Dosyası

**`css/style.css`**
- CSS Variables (renk şeması)
- Responsive tasarım (media queries)
- Animasyonlar (fadeIn, slideDown, pulse)
- Tüm modül stilleri:
  - Flash kartlar
  - Eşleştirme oyunu
  - Quiz
  - Cümle kurma
- Yardımcı sınıflar (utility classes)

### JavaScript Modülleri

**`js/data.js`**
- Kelime veritabanı (vocabularyData)
- 6 ünite, her birinde 8 kelime
- LocalStorage yönetimi (StorageManager)
- Veri yapısı:
  ```javascript
  {
    units: [
      {
        id, title, icon, description,
        words: [
          {english, turkish, pronunciation, example, exampleTr, image}
        ]
      }
    ]
  }
  ```

**`js/app.js`**
- Ana uygulama mantığı
- Ünite yükleme ve navigasyon
- Mod seçimi ve yönlendirme
- İstatistik güncelleme
- Genel yardımcı fonksiyonlar:
  - `speak()` - Sesli okuma
  - `shuffleArray()` - Karıştırma
  - `showCelebration()` - Kutlama gösterisi
  - `addPointsWithAnimation()` - Puan ekleme

**`js/flashcards.js`**
- Flash kart görüntüleme
- Kart çevirme animasyonu
- İleri/geri navigasyon
- Ses entegrasyonu
- İlerleme takibi

**`js/matching.js`**
- Eşleştirme oyunu mantığı
- Kart karıştırma ve yerleştirme
- Eşleşme kontrolü
- Hamle sayacı
- Puan hesaplama

**`js/quiz.js`**
- Çoktan seçmeli test
- Rastgele soru oluşturma
- Cevap kontrolü
- Geri bildirim sistemi
- Sonuç sayfası ve istatistikler

**`js/sentence.js`**
- Cümle kurma aktivitesi
- Kelime bankası
- Cümle validasyonu
- Yaratıcı yazma teşviki
- Kullanıcı cümlelerini kaydetme

## 🔧 Teknik Detaylar

### Kullanılan Teknolojiler

| Teknoloji | Kullanım Alanı | Versiyon |
|-----------|----------------|----------|
| HTML5 | Yapı | - |
| CSS3 | Tasarım | - |
| JavaScript | Mantık | ES6+ |
| Web Speech API | Sesli okuma | Native |
| LocalStorage API | Veri saklama | Native |
| Google Fonts | Tipografi | Poppins |

### Özellikler

**Frontend:**
- ✅ Single Page Application (SPA)
- ✅ Vanilla JavaScript (framework yok)
- ✅ Responsive tasarım
- ✅ CSS Grid & Flexbox
- ✅ CSS Animations
- ✅ Progressive Enhancement

**Veri Yönetimi:**
- ✅ JSON veri formatı
- ✅ LocalStorage persistance
- ✅ Client-side hesaplama
- ✅ Offline çalışma

**Kullanıcı Deneyimi:**
- ✅ Smooth animasyonlar
- ✅ Anlık geri bildirim
- ✅ Sesli telaffuz
- ✅ İlerleme takibi
- ✅ Gamification

## 📱 Platform Desteği

### Tarayıcı Uyumluluğu

| Tarayıcı | Minimum Versiyon | Notlar |
|----------|------------------|--------|
| Chrome | 90+ | ✅ Tam destek |
| Firefox | 88+ | ✅ Tam destek |
| Safari | 14+ | ✅ Tam destek |
| Edge | 90+ | ✅ Tam destek |
| Opera | 76+ | ✅ Tam destek |

### Cihaz Desteği

- ✅ Desktop (1920x1080+)
- ✅ Laptop (1366x768+)
- ✅ Tablet (768x1024)
- ✅ Mobil (375x667+)

### Breakpoint'ler

```css
/* Desktop: Varsayılan */
@media (max-width: 768px) { /* Tablet */ }
@media (max-width: 480px) { /* Mobil */ }
```

## 🎨 Tasarım Sistemi

### Renk Paleti

```css
--primary-color: #6366f1;    /* İndigo */
--secondary-color: #8b5cf6;  /* Mor */
--accent-color: #ec4899;     /* Pembe */
--success-color: #10b981;    /* Yeşil */
--warning-color: #f59e0b;    /* Turuncu */
--danger-color: #ef4444;     /* Kırmızı */
--bg-color: #f8fafc;         /* Açık gri */
--text-dark: #1e293b;        /* Koyu gri */
--text-light: #64748b;       /* Orta gri */
```

### Tipografi

- **Ana Font:** Poppins (Google Fonts)
- **Font Ağırlıkları:** 300, 400, 600, 700
- **Başlık Boyutları:** 2.5rem, 2rem, 1.8rem
- **Gövde Metni:** 1rem (16px base)

### Spacing

```css
--border-radius: 16px;
--shadow: 0 4px 6px rgba(0,0,0,0.1);
--shadow-lg: 0 20px 25px rgba(0,0,0,0.1);
```

## 🔄 Veri Akışı

### Uygulama Başlangıcı

```
1. DOMContentLoaded
   ↓
2. initializeApp()
   ↓
3. loadUnits() + updateStats()
   ↓
4. Üniteler görüntülenir
```

### Öğrenme Akışı

```
1. Ünite seçimi (selectUnit)
   ↓
2. Mod seçimi (selectMode)
   ↓
3. Aktivite yükleme (loadFlashcards/loadQuiz/...)
   ↓
4. Kullanıcı interaksiyonu
   ↓
5. İlerleme kaydetme (StorageManager)
   ↓
6. İstatistik güncelleme (updateStats)
```

### LocalStorage Yapısı

```javascript
{
  "fukoLingo_progress": {
    "1": {"completed": 5, "total": 8, "lastScore": 6},
    "2": {"completed": 3, "total": 8, "lastScore": 5}
  },
  "fukoLingo_points": "350",
  "fukoLingo_learned": ["1-0", "1-1", "1-2", "2-0"]
}
```

## 🚀 Performans

### Optimizasyonlar

- ✅ CSS dosyası minimize edilebilir
- ✅ JavaScript modüler yapı
- ✅ Lazy loading (görsel yükleme yok - emoji kullanımı)
- ✅ LocalStorage (backend yok)
- ✅ Hafif yapı (~50KB toplam)

### Yükleme Süreleri

- **İlk yükleme:** < 1 saniye
- **Sayfa geçişi:** Anlık (SPA)
- **Aktivite yükleme:** < 200ms

## 📦 Deployment

### GitHub Pages

1. Repository Settings
2. Pages > Source > main branch
3. Save
4. URL: `https://username.github.io/FukoLingo/`

### Netlify / Vercel

```bash
# Direkt upload veya Git entegrasyonu
# Build command: (yok - static site)
# Publish directory: .
```

### Lokal Sunucu

```bash
# Python
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

## 🔐 Güvenlik

### Özellikler

- ✅ Client-side only (backend yok)
- ✅ No external API calls
- ✅ No user data collection
- ✅ LocalStorage only
- ✅ No cookies
- ✅ HTTPS ready (GitHub Pages)

## 📊 Metrikler

### Kod İstatistikleri

```
HTML: ~200 satır
CSS: ~1000 satır
JavaScript: ~1500 satır
JSON Data: ~600 satır
─────────────────────
Toplam: ~3300 satır
```

### İçerik İstatistikleri

```
Üniteler: 6
Kelimeler: 48
Aktivite Modları: 4
Dokümantasyon: 8 dosya
```

## 🛠️ Geliştirme

### Başlangıç

```bash
# Clone
git clone https://github.com/username/FukoLingo.git
cd FukoLingo

# Açın
# index.html'i tarayıcıda açın

# Veya lokal sunucu
python -m http.server 8000
# Tarayıcıda: http://localhost:8000
```

### Değişiklik Yapma

```bash
# Branch oluştur
git checkout -b feature/yeni-ozellik

# Değişiklikleri yap
# Test et

# Commit
git add .
git commit -m "feat: yeni özellik"

# Push
git push origin feature/yeni-ozellik

# Pull request aç
```

## 📚 Kaynaklar

### İçerik Kaynakları

- MEB 6. Sınıf İngilizce Müfredatı
- Cambridge Dictionary
- Oxford Learner's Dictionary

### Teknik Kaynaklar

- MDN Web Docs
- Web Speech API Documentation
- CSS-Tricks
- JavaScript.info

### Tasarım Inspirasyonu

- Duolingo
- Quizlet
- Memrise
- Khan Academy

## 🎯 Gelecek Planlar

### Kısa Vadeli (v1.1)
- [ ] Ses efektleri
- [ ] Başarı rozetleri
- [ ] Dark mode

### Orta Vadeli (v1.2)
- [ ] 7-8. sınıf içerikleri
- [ ] İstatistik grafikler
- [ ] PDF export

### Uzun Vadeli (v2.0)
- [ ] Progressive Web App (PWA)
- [ ] Offline full support
- [ ] User accounts
- [ ] Backend integration

---

## 📞 Destek ve İletişim

- **GitHub:** [Repository Link]
- **Issues:** Bug raporları
- **Discussions:** Sorular ve öneriler
- **Wiki:** Ek dokümantasyon

---

**Proje Durumu:** ✅ Aktif Geliştirme
**Son Güncelleme:** 8 Ekim 2025
**Versiyon:** 1.0.0

🦊 **FukoLingo - İngilizce öğrenmek çok eğlenceli!** 📚✨
