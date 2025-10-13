# 🎨 FukoLingo - Görsel Kullanım Rehberi

## 🖼️ Emoji mi? Gerçek Görsel mi?

### Emoji Kullanımı (Varsayılan)

**✅ Avantajları:**
- Hızlı yükleme
- Ek dosya gerekmez
- Her platformda çalışır
- Bakım gerektirmez
- Responsive (otomatik boyutlanır)

**❌ Dezavantajları:**
- Sınırlı görsel seçeneği
- Her platformda farklı görünebilir
- Profesyonel olmayabilir
- Bazı kavramlar için emoji yok

### Gerçek Görsel Kullanımı

**✅ Avantajları:**
- Profesyonel görünüm
- Tam kontrol (renk, stil, boyut)
- Eğitim materyali gibi görünür
- Marka kimliği oluşturabilir
- Özel tasarım yapabilirsiniz

**❌ Dezavantajları:**
- Dosya boyutu (yükleme süresi)
- Görsel hazırlamak gerekir
- Bakım gerektirir
- Copyright/lisans dikkat

---

## 📁 Gerçek Görsel Ekleme (Adım Adım)

### Adım 1: Görselleri Hazırlayın

**Önerilen Özellikler:**
- **Format:** PNG (şeffaf arka plan) veya JPG
- **Boyut:** 500x500px veya 1000x1000px (kare)
- **Dosya boyutu:** < 100KB (optimize edilmiş)
- **İsimlendirme:** `kelime-adi.png` (küçük harf, tire ile)

**Örnek:**
```
apple.png
computer.png
happy-face.png
```

### Adım 2: images/ Klasörüne Ekleyin

Proje yapısı:
```
FukoLingo/
├── images/
│   ├── apple.png           ✓ Yeni eklendi
│   ├── computer.png        ✓ Yeni eklendi
│   ├── cat.png             ✓ Yeni eklendi
│   └── README.md
├── js/
│   └── data.js
└── index.html
```

### Adım 3: data.js Dosyasını Güncelleyin

**ÖNCE (Emoji):**
```javascript
{
    english: "apple",
    turkish: "elma",
    pronunciation: "/ˈæpl/",
    example: "I eat an apple.",
    exampleTr: "Bir elma yerim.",
    image: "🍎"  // ← Emoji
}
```

**SONRA (Gerçek Görsel):**
```javascript
{
    english: "apple",
    turkish: "elma",
    pronunciation: "/ˈæpl/",
    example: "I eat an apple.",
    exampleTr: "Bir elma yerim.",
    image: "images/apple.png"  // ← Görsel yolu
}
```

---

## 🎨 Görsel Oluşturma Yöntemleri

### Yöntem 1: AI ile Görsel Oluşturma (Önerilen)

#### 🤖 DALL-E 3 (OpenAI)

**Avantajları:**
- Yüksek kalite
- İstediğiniz stilde
- Telif hakkı sorunu yok

**Nasıl Kullanılır:**
1. ChatGPT Plus hesabı (aylık ~20$)
2. Prompt yazın
3. Görseli indirin

**Örnek Prompt:**
```
Simple, flat design illustration of an apple for children's 
English learning. Colorful, cute style, white background, 
educational, 1:1 ratio, high quality.
```

**Türkçe Prompt:**
```
Çocuklar için eğitici İngilizce kelime kartı görseli: Elma.
Basit, renkli, sevimli çizim stili, beyaz arka plan, 
düz tasarım, yüksek kalite.
```

#### 🎨 Midjourney

**Avantajları:**
- Çok kaliteli görseller
- Sanatsal stil seçenekleri
- Hızlı üretim

**Nasıl Kullanılır:**
1. Discord üzerinden erişim
2. `/imagine` komutu
3. Prompt yazın

**Örnek Prompt:**
```
/imagine educational illustration of apple, 
simple children's book style, flat design, 
bright colors, white background --ar 1:1 --v 5
```

**Parametre Açıklamaları:**
- `--ar 1:1` → Kare boyut
- `--v 5` → Versiyon 5
- `--style cute` → Sevimli stil

#### 🆓 Stable Diffusion (Ücretsiz)

**Avantajları:**
- Tamamen ücretsiz
- Lokal çalışır
- Sınırsız kullanım

**Nasıl Kullanılır:**
1. Stable Diffusion Web UI kur
2. Model indir (Realistic Vision v5)
3. Prompt yaz

**Örnek Prompt:**
```
educational children's illustration, apple, 
simple cartoon style, flat design, colorful, 
white background, vector art style

Negative: complex, realistic, dark, scary, 
ugly, blurry, bad quality
```

#### 🌐 Online AI Araçları (Ücretsiz/Freemium)

| Platform | Özellik | Link |
|----------|---------|------|
| **Leonardo.ai** | Günde 150 ücretsiz | https://leonardo.ai |
| **Playground AI** | Günde 1000 ücretsiz | https://playgroundai.com |
| **Bing Image Creator** | DALL-E 3, ücretsiz | https://bing.com/create |
| **Craiyon** | Basit, ücretsiz | https://craiyon.com |

### Yöntem 2: Ücretsiz Görsel Kaynakları

#### 📸 Fotoğraf Siteleri

| Site | Özellik | Lisans |
|------|---------|--------|
| **Unsplash** | Yüksek kalite fotoğraf | Free |
| **Pexels** | Video + Fotoğraf | Free |
| **Pixabay** | Geniş koleksiyon | Free |
| **Freepik** | İllüstrasyon | Free (attribution) |

**Kullanım:**
1. Siteye git
2. Kelimeyi İngilizce ara (örn: "apple")
3. Beğendiğini indir
4. Yeniden boyutlandır (500x500px)

#### 🎨 İkon ve İllüstrasyon Siteleri

| Site | Özellik | Link |
|------|---------|------|
| **Flaticon** | Milyonlarca ikon | https://flaticon.com |
| **Icons8** | İkon + İllüstrasyon | https://icons8.com |
| **unDraw** | SVG illüstrasyonlar | https://undraw.co |
| **Storyset** | Animasyonlu illüstrasyon | https://storyset.com |

### Yöntem 3: Kendiniz Çizin

#### 🖌️ Çizim Araçları

**Başlangıç Seviyesi:**
- **Canva** (Web) - Ücretsiz, kolay
- **Paint.NET** (Windows) - Ücretsiz
- **Krita** (Çapraz platform) - Ücretsiz, profesyonel

**İleri Seviye:**
- **Procreate** (iPad) - $10, profesyonel
- **Adobe Illustrator** - Ücretli, vektör
- **Affinity Designer** - Bir kez ücret

**Basit Çizim İpuçları:**
1. Büyük boyutta çizin (1000x1000px)
2. Basit şekiller kullanın
3. Canlı renkler seçin
4. Beyaz/şeffaf arka plan
5. PNG olarak kaydedin

---

## 🔧 Görsel Optimizasyonu (Önemli!)

### Neden Optimize Etmeli?

- ⚡ Hızlı yükleme
- 💾 Az yer kaplar
- 📱 Mobil dostu
- 🌐 Az internet tüketir

### Online Araçlar (Ücretsiz)

| Araç | Özellik | Link |
|------|---------|------|
| **TinyPNG** | PNG sıkıştırma | https://tinypng.com |
| **Squoosh** | Çoklu format | https://squoosh.app |
| **Compressor.io** | Hızlı sıkıştırma | https://compressor.io |
| **ImageOptim** | Mac için | https://imageoptim.com |

### Manuel Optimizasyon

**Hedef:**
- PNG: < 50KB
- JPG: < 30KB
- 500x500px boyut

**Adımlar:**
1. Görseli aç (Photoshop/GIMP)
2. Resize: 500x500px
3. Kaliteyi ayarla: %80-85
4. Save for Web olarak kaydet
5. Optimize araçlardan geçir

---

## 💡 Karma Kullanım (En İyi Yöntem)

Bazı kelimeler için emoji, bazıları için gerçek görsel!

```javascript
words: [
    {
        english: "happy",
        turkish: "mutlu",
        image: "😊"  // ← Emoji (duygular için ideal)
    },
    {
        english: "computer",
        turkish: "bilgisayar",
        image: "images/computer.png"  // ← Gerçek görsel
    },
    {
        english: "apple",
        turkish: "elma",
        image: "images/apple.png"  // ← Gerçek görsel
    },
    {
        english: "sad",
        turkish: "üzgün",
        image: "😢"  // ← Emoji
    }
]
```

**Ne Zaman Emoji:**
- ✅ Duygular (😊😢😠)
- ✅ Temel aktiviteler (⚽🎮📚)
- ✅ Basit nesneler (🍎🏠☀️)

**Ne Zaman Gerçek Görsel:**
- ✅ Meslekler (profesyonel görünüm)
- ✅ Karmaşık nesneler (bilgisayar, telefon)
- ✅ Özel konseptler (emoji yok)
- ✅ Marka kimliği istiyorsanız

---

## 📋 Tam Örnek: Görselli Kelime Ekleme

### Senaryo: "computer" kelimesini görselli ekleyelim

#### 1️⃣ Görseli Hazırla

**AI Prompt (DALL-E):**
```
Simple, flat design illustration of a laptop computer 
for children's education. Bright colors, cute style, 
white background, front view, 1:1 ratio.
```

**Veya Unsplash'dan indir:**
```
https://unsplash.com/s/photos/laptop
→ Uygun görseli seç
→ İndir (küçük boyut)
```

#### 2️⃣ Görseli Optimize Et

```
1. TinyPNG'ye yükle
2. Optimize edilmiş halini indir
3. İsimlendir: computer.png
```

#### 3️⃣ images/ Klasörüne Ekle

```
FukoLingo/images/computer.png
```

#### 4️⃣ data.js'ye Ekle

```javascript
{
    english: "computer",
    turkish: "bilgisayar",
    pronunciation: "/kəmˈpjuːtər/",
    example: "I use my computer every day.",
    exampleTr: "Her gün bilgisayarımı kullanırım.",
    image: "images/computer.png"  // ← Görsel yolu
}
```

#### 5️⃣ Test Et

```
1. Kaydet (Ctrl+S)
2. Tarayıcıda yenile (F5)
3. Görselin yüklendiğini kontrol et
```

---

## 🎯 AI Prompt Şablonları

### Basit Nesne

```
Simple educational illustration of [KELIME] for children.
Flat design, bright colors, cute style, white background, 
no text, centered, high quality.
```

### Hayvan

```
Cute cartoon [HAYVAN], educational children's book style,
friendly and simple, colorful, white background, 
flat design illustration.
```

### Meslek

```
Professional illustration of a [MESLEK] for children's 
education. Simple, friendly, diverse representation,
colorful uniform, white background, flat design.
```

### Yiyecek

```
Appetizing illustration of [YİYECEK] for kids learning.
Colorful, simple cartoon style, white background,
close-up view, educational quality.
```

### Duygu/Aktivite

```
Simple icon illustration showing [AKTİVİTE], 
educational style for children, bright colors,
minimalist, white background, clear and obvious.
```

---

## 🖼️ CSS Güncellemesi (Gerekirse)

Eğer görseller düzgün görünmüyorsa, `css/style.css` dosyasını güncelleyin:

```css
.flashcard-image {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
    border-radius: 15px;
    object-fit: cover;  /* ← Görseli kırpmadan sığdır */
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
}

/* Gerçek görsel için */
.flashcard-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;  /* ← Tüm görseli göster */
    border-radius: 15px;
}

/* Quiz görselleri için */
.quiz-image {
    width: 200px;
    height: 200px;
    margin: 0 auto 20px;
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8rem;
    background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
    overflow: hidden;  /* ← Taşmayı önle */
}

.quiz-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
```

**Ancak mevcut kodunuz zaten destekliyor!** Sadece `image: "images/dosya.png"` yazmanız yeterli.

---

## 🔄 JavaScript Güncellemesi (Opsiyonel)

Eğer emoji ve gerçek görseli ayırt etmek isterseniz, `js/flashcards.js` dosyasını güncelleyebilirsiniz:

```javascript
// Mevcut kod
.flashcard-image">${word.image}</div>

// Güncellenmiş kod (emoji vs görsel kontrolü)
function renderImage(imageSource) {
    // Eğer görsel yolu ise (images/ ile başlıyorsa)
    if (imageSource.startsWith('images/')) {
        return `<img src="${imageSource}" alt="word image">`;
    } else {
        // Emoji ise direkt göster
        return imageSource;
    }
}

// Kullanım
.flashcard-image">${renderImage(word.image)}</div>
```

**Not:** Mevcut sistem zaten çalışıyor, bu sadece iyileştirme!

---

## 📦 Toplu Görsel İndirme

### Tüm Ünite İçin Görsel Hazırlama

**Örnek: Unit 1 - Life**

**Kelimeler:**
1. life → images/life.png
2. music → images/music.png
3. sport → images/sport.png
4. book → images/book.png
5. friend → images/friend.png
6. family → images/family.png
7. hobby → images/hobby.png
8. weekend → images/weekend.png

**AI'dan Toplu İstek:**

1. DALL-E'de her biri için prompt:
```
"Simple educational illustration of [life/music/sport...] 
for children, flat design, white background"
```

2. 8 görseli indir
3. İsimlendir: life.png, music.png, ...
4. TinyPNG'den geçir
5. images/ klasörüne at
6. data.js'de güncelle

**Zaman:** ~30 dakika / ünite

---

## ⚠️ Lisans ve Telif Hakları

### Ücretsiz Kullanım İçin

**✅ Güvenli Kaynaklar:**
- AI oluşturduğunuz görseller (DALL-E, Midjourney, Stable Diffusion)
- CC0 lisanslı görseller (Unsplash, Pexels, Pixabay)
- Kendiniz çizdiğiniz görseller
- Public domain görseller

**⚠️ Dikkat:**
- Freepik → Attribution gerekebilir
- Google Images → Lisans kontrol edin
- Pinterest → Kaynak kontrol edin

**🎓 Eğitim Amaçlı Kullanım:**
- Ticari olmayan eğitim projeleri genelde güvenli
- Ancak kamuya açık yayınlıyorsanız lisansa dikkat

### Attribution (Kaynak Gösterme)

Eğer gerekiyorsa, `README.md` dosyasına ekleyin:

```markdown
## 📷 Görsel Kaynakları

- Apple icon by [Freepik](https://www.freepik.com)
- Computer illustration from [unDraw](https://undraw.co)
- Photos from [Unsplash](https://unsplash.com)
```

---

## 🧪 Test Etme

### Görsel Kontrol Listesi

- [ ] Görsel yükleniyor mu?
- [ ] Boyut uygun mu? (çok büyük/küçük değil)
- [ ] Arka plan şeffaf/beyaz mı?
- [ ] Mobilde de düzgün görünüyor mu?
- [ ] Tüm tarayıcılarda çalışıyor mu?
- [ ] Yükleme hızı iyi mi?

### Hata Çözümü

**"Görsel görünmüyor"**
```
✓ Dosya yolu doğru mu? (images/apple.png)
✓ Dosya adı aynı mı? (büyük/küçük harf)
✓ Dosya gerçekten images/ klasöründe mi?
✓ F12 → Console → Hata var mı?
```

**"Görsel bozuk görünüyor"**
```
✓ Boyut çok büyük mü? (optimize edin)
✓ Format uygun mu? (PNG/JPG kullanın)
✓ CSS object-fit ayarı doğru mu?
```

---

## 📊 Karşılaştırma Tablosu

| Özellik | Emoji | AI Görsel | Ücretsiz Stok | Kendi Çizim |
|---------|-------|-----------|---------------|-------------|
| **Maliyet** | Ücretsiz | $20/ay | Ücretsiz | Zaman |
| **Kalite** | Orta | Yüksek | Yüksek | Değişken |
| **Hız** | Anında | 30sn | 5dk | 1-2 saat |
| **Kontrol** | Düşük | Yüksek | Orta | Tam |
| **Tutarlılık** | Orta | Yüksek | Düşük | Yüksek |
| **Lisans** | Problem yok | Problem yok | Kontrol gerek | Problem yok |

---

## 🎯 Önerilen Yaklaşım

### Başlangıç (İlk Hafta)

```
100% Emoji kullanın
→ Hızlı başlangıç
→ Test edin, geri bildirim alın
```

### Orta Vade (2-4 Hafta)

```
Karma yaklaşım
→ Önemli kelimeler için görsel
→ Basit kelimeler emoji
→ 50/50 karışım
```

### Uzun Vade (1+ Ay)

```
Profesyonel görünüm
→ Tüm görseller AI/özel tasarım
→ Tutarlı stil
→ Marka kimliği
```

---

## 💼 Pratik Örnek: Unit 1 Güncelleme

**Eski (Emoji):**
```javascript
{
    english: "computer",
    image: "💻"
}
```

**Yeni (Görsel):**
```javascript
{
    english: "computer",
    image: "images/computer.png"
}
```

**Dosya Yapısı:**
```
images/
├── computer.png (optimize, 500x500px, <50KB)
├── music.png
└── sport.png
```

---

## 🆘 Sık Sorulan Sorular

**S: Emoji ve görsel karışık kullanabilir miyim?**
C: Evet! Aynı ünitede bile kullanabilirsiniz.

**S: Görsel boyutu ne olmalı?**
C: 500x500px ideal. Minimum 300x300px, maksimum 1000x1000px.

**S: Hangi format daha iyi?**
C: PNG (şeffaf arka plan) veya JPG (daha küçük boyut).

**S: AI görselleri ücretsiz mi?**
C: DALL-E ücretli, Bing Image Creator ücretsiz, Stable Diffusion tamamen ücretsiz.

**S: Tüm kelimeleri değiştirmem gerekir mi?**
C: Hayır! İstediğinizi değiştirin, karma kullanım yapabilirsiniz.

---

## 🚀 Hızlı Başlangıç

1. **Bing Image Creator**'a git: https://bing.com/create
2. Prompt yaz: "simple illustration of apple for kids"
3. Görseli indir
4. TinyPNG'den geçir
5. `images/apple.png` olarak kaydet
6. `data.js`'de `image: "images/apple.png"` yap
7. Test et!

---

Artık görsel konusunda tam donanımlısınız! 🎨✨

**İsterseniz bir örnek üzerinde beraber yapalım?** 😊
