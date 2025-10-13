# 🤖 FukoLingo - Gemini AI Entegrasyonu Kurulum Rehberi

## 🎯 Genel Bakış

Gemini AI entegrasyonu sayesinde cümle kurma modülü **çok daha güçlü** hale gelir:

### ✨ Yeni Özellikler

**AI Destekli Değerlendirme:**
- ✅ **Gramer kontrolü** - AI cümlenin gramerine bakar
- ✅ **Anlam analizi** - Cümle anlamlı mı kontrol eder
- ✅ **Doğal kullanım** - Kelimenin doğru bağlamda kullanılıp kullanılmadığını değerlendirir
- ✅ **Türkçe çeviri** - AI kullanıcının cümlesini Türkçe'ye çevirir
- ✅ **Detaylı geri bildirim** - Neyi yanlış yaptığını açıklar
- ✅ **İyileştirme önerileri** - Nasıl daha iyi yapabileceğini söyler
- ✅ **Düzeltilmiş cümle** - Hata varsa doğru versiyonunu gösterir
- ✅ **Örnek cümleler** - AI'dan yeni örnek cümleler isteyebilir

### 🆚 Karşılaştırma

| Özellik | Basit Mod | AI Modu |
|---------|-----------|---------|
| **Kelime kullanımı kontrolü** | ✅ | ✅ |
| **Uzunluk kontrolü** | ✅ | ✅ |
| **Gramer kontrolü** | ❌ | ✅ |
| **Anlam analizi** | ❌ | ✅ |
| **Türkçe çeviri** | ❌ | ✅ |
| **Detaylı geri bildirim** | ❌ | ✅ |
| **İyileştirme önerileri** | Basit | Detaylı |
| **Örnek cümleler** | ❌ | ✅ |
| **Doğallık kontrolü** | ❌ | ✅ |

---

## 🚀 Kurulum (5 Dakika)

### Adım 1: Google AI Studio'dan API Key Alın

1. **Google AI Studio**'ya gidin: https://makersuite.google.com/app/apikey

2. **Google hesabınızla giriş yapın**

3. **"Create API Key"** butonuna tıklayın

4. API Key'inizi **kopyalayın** (örnek: `AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)

5. **⚠️ Önemli:** API key'i güvende tutun, kimseyle paylaşmayın!

### Adım 2: API Key'i Projeye Ekleyin

1. **`js/gemini-config.js`** dosyasını açın

2. **3. satırda** şu kısmı bulun:
```javascript
apiKey: 'BURAYA_API_KEY_YAZIN',
```

3. **Kendi API key'inizle değiştirin:**
```javascript
apiKey: 'AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Sizin API key'iniz
```

4. **Kaydedin** (Ctrl+S)

### Adım 3: index.html'i Güncelleyin

**ÖNCEKİ (`index.html` - satır ~54):**
```html
<script src="js/sentence.js"></script>
```

**YENİ:**
```html
<script src="js/gemini-config.js"></script>
<script src="js/sentence-advanced.js"></script>
```

**Tam güncelleme:**

1. `index.html` dosyasını açın
2. En alttaki `<script>` etiketlerini bulun
3. Şu satırları ekleyin/değiştirin:

```html
<!-- JavaScript Dosyaları -->
<script src="js/data.js"></script>
<script src="js/app.js"></script>
<script src="js/flashcards.js"></script>
<script src="js/matching.js"></script>
<script src="js/quiz.js"></script>
<script src="js/gemini-config.js"></script>        <!-- YENİ -->
<script src="js/sentence-advanced.js"></script>   <!-- GÜNCEL -->
```

### Adım 4: Test Edin

1. **Kaydedin** (Ctrl+S)
2. **Tarayıcıda yenileyin** (F5)
3. Bir ünite açın
4. **Cümle Kurma** modunu seçin
5. Sağ üstte **"🤖 AI Aktif"** yazısını görmelisiniz!
6. Bir cümle yazın ve test edin

---

## ✅ Kontrol Listesi

- [ ] Google AI Studio'dan API key aldım
- [ ] `gemini-config.js` dosyasına API key'i ekledim
- [ ] `index.html` dosyasını güncelledim
- [ ] Tarayıcıda test ettim
- [ ] "🤖 AI Aktif" yazısını görüyorum

---

## 🎮 Kullanım

### AI Modu Aktif

**Gösterge:**
```
🤖 AI Aktif
```

**Özellikler:**
1. Cümle yaz
2. "🤖 AI ile Değerlendir" butonuna tıkla
3. AI cümleni analiz eder (2-3 saniye)
4. Detaylı geri bildirim alırsın:
   - ✅ Gramer doğru mu?
   - ✅ Anlam uygun mu?
   - 🇹🇷 Türkçe çevirisi
   - 💡 İyileştirme önerileri
   - ✏️ Düzeltilmiş versiyon

5. **"💡 AI'dan Öneri Al"** butonu ile örnek cümleler isteyebilirsin

### Basit Mod (API Key Yoksa)

**Gösterge:**
```
⚡ Basit Mod
```

**Özellikler:**
1. Kelime kullanımı kontrolü
2. Uzunluk kontrolü
3. Temel gramer (büyük harf, noktalama)
4. Basit geri bildirim

---

## 🌐 API Key Hakkında

### Ücretsiz Kullanım

Google Gemini API **ücretsiz** kullanım sunar:

| Özellik | Ücretsiz Plan |
|---------|---------------|
| **Aylık İstek** | 60 istek/dakika |
| **Günlük Limit** | Yüksek (normal kullanım için yeterli) |
| **Maliyet** | $0 (Ücretsiz) |

**Yeterli mi?**
- ✅ Bireysel kullanım: Kesinlikle yeterli
- ✅ Sınıf kullanımı (30 öğrenci): Yeterli
- ⚠️ Yoğun kullanım: Ücretli plana geçiş gerekebilir

### Güvenlik

**API Key'i Güvende Tutma:**
- ⚠️ GitHub'a yüklemeden önce API key'i kaldırın
- ⚠️ Public repository ise `.gitignore`'a ekleyin
- ✅ Her kullanıcı kendi API key'ini alsın

**`.gitignore` Ekleme:**
```
# API Keys
js/gemini-config.js
```

**Alternatif:** Template dosyası oluşturun:
```javascript
// js/gemini-config.template.js
apiKey: 'BURAYA_API_KEY_YAZIN',
```

Kullanıcılar bu dosyayı kopyalayıp `gemini-config.js` olarak kaydeder.

---

## 🔧 Özelleştirme

### Değerlendirme Prompt'unu Değiştirme

`js/gemini-config.js` dosyasında `evaluateSentenceWithAI` fonksiyonundaki prompt'u düzenleyebilirsiniz:

```javascript
const prompt = `Sen bir İngilizce öğretmenisin...`;
```

**Örnek özelleştirmeler:**
- Daha katı/yumuşak değerlendirme
- Farklı seviye (5. sınıf, 7. sınıf)
- Ek kriterler (kelime zenginliği, yaratıcılık)

### Timeout Ayarları

AI yanıt süresi uzunsa, timeout ekleyin:

```javascript
const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 10000); // 10 saniye

const response = await fetch(url, {
    ...options,
    signal: controller.signal
});
```

---

## 🐛 Sorun Giderme

### "⚡ Basit Mod" Görünüyor

**Sebep:** API key yapılandırılmamış

**Çözüm:**
1. `gemini-config.js` dosyasını kontrol edin
2. API key doğru mu?
3. Tarayıcıda F5 ile yenileyin

### "API Error" Mesajı

**Sebep:** API key geçersiz veya kotayı aştınız

**Çözüm:**
1. API key'i kontrol edin (doğru kopyalandı mı?)
2. Google AI Studio'da kotayı kontrol edin
3. İnternet bağlantınızı kontrol edin

### AI Yanıt Vermiyor

**Sebep:** İnternet yok veya API yavaş

**Çözüm:**
1. İnternet bağlantısını kontrol edin
2. 30 saniye bekleyin
3. Tekrar deneyin
4. Basit mod otomatik devreye girer

### Console'da Hata

**F12 tuşuna basın** → Console sekmesi → Hata mesajını okuyun

**Yaygın hatalar:**
```
CORS Error: API key hatalı olabilir
Network Error: İnternet bağlantısı yok
JSON Parse Error: API yanıtı beklenmedik format
```

---

## 📊 Performans

### Yanıt Süreleri

| İşlem | Süre |
|-------|------|
| **Basit değerlendirme** | < 50ms |
| **AI değerlendirme** | 2-4 saniye |
| **Örnek cümle oluşturma** | 3-5 saniye |

**Optimizasyon İpuçları:**
- Kullanıcıya loading göstergesi gösterin ✅ (Zaten var)
- Cache mekanizması ekleyebilirsiniz (ileri seviye)

---

## 🎯 Örnek Kullanım Senaryoları

### Senaryo 1: Öğrenci Yanlış Cümle Yazar

**Öğrenci:** "I am use computer."

**AI Değerlendirme:**
```
❌ Tekrar Dene!

Gramer hatası var: "am use" doğru değil.

💡 İyileştirme Önerileri:
• "am" sonrası fiil -ing takısı alır veya "am" kaldırılmalı
• Doğru: "I am using" veya "I use"

✅ Doğru Örnek:
"I use my computer every day."
```

### Senaryo 2: Öğrenci Doğru Cümle Yazar

**Öğrenci:** "I love using my computer for homework."

**AI Değerlendirme:**
```
🌟 Mükemmel!

Harika bir cümle kurdun! Gramer, anlam ve kullanım mükemmel.

🇬🇧 Cümlen:
"I love using my computer for homework."

🇹🇷 Türkçe Çeviri:
"Ödevlerim için bilgisayarımı kullanmayı seviyorum."

+18 puan kazandın! 🎉
```

### Senaryo 3: Öğrenci AI'dan Öneri İster

**Öğrenci:** "💡 AI'dan Öneri Al" butonuna tıklar

**AI Yanıt:**
```
💡 AI'dan Örnek Cümleler

Örnek 1:
"I use my computer to play games."
"Oyun oynamak için bilgisayarımı kullanırım."

Örnek 2:
"My computer is very fast and new."
"Bilgisayarım çok hızlı ve yeni."

Örnek 3:
"I do my homework on the computer."
"Ödevlerimi bilgisayarda yaparım."
```

---

## 🔄 Geri Dönüş (AI'sız Moda)

API key kaldırmak isterseniz:

1. `gemini-config.js` dosyasında:
```javascript
apiKey: 'BURAYA_API_KEY_YAZIN', // Eski haline getirin
```

2. Veya tamamen eski versiyona dönün:
```html
<!-- index.html -->
<script src="js/sentence.js"></script>
<!-- sentence-advanced.js yerine -->
```

---

## 🆘 Destek

**Sorun mu yaşıyorsunuz?**

1. Bu rehberi baştan okuyun
2. Console'u kontrol edin (F12)
3. API key'i yeniden alın
4. GitHub Issues'da sorun bildirin

---

## 📚 Ek Kaynaklar

- **Google AI Studio:** https://makersuite.google.com
- **Gemini API Docs:** https://ai.google.dev/docs
- **Örnek Kullanım:** https://ai.google.dev/tutorials

---

## ✨ Sonuç

Gemini AI entegrasyonu ile FukoLingo **profesyonel bir eğitim platformu** haline gelir!

**Artık:**
- ✅ Öğrenciler gerçek geri bildirim alır
- ✅ Gramer hataları yakalanır
- ✅ Anlamlı cümle kurmayı öğrenirler
- ✅ Türkçe çeviri ile anlam pekişir
- ✅ AI önerileri ile yaratıcılık artar

**Başarılar! 🚀🦊📚**

---

**Son güncelleme:** 8 Ekim 2025  
**Versiyon:** 2.0 (AI Destekli)
