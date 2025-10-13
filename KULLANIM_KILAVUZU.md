# 📚 FukoLingo Kullanım Kılavuzu

## 🎯 Öğrenciler İçin

### Başlarken

1. **Ana Sayfa**: FukoLingo'yu açtığınızda 6 farklı ünite göreceksiniz
2. **Ünite Seçimi**: Öğrenmek istediğiniz üniteye tıklayın
3. **Mod Seçimi**: 4 farklı öğrenme modu arasından birini seçin

### 🎴 Flash Kartlar

**Ne işe yarar?**
- Kelimeleri görsel ve sesli olarak öğrenirsin
- Her kartta kelime, telaffuz, anlamı ve örnek cümle var

**Nasıl kullanılır?**
1. Karta tıklayarak ön-arka yüzünü gör
2. 🔊 Dinle butonuna basarak telaffuzu öğren
3. ⬅️➡️ butonları ile kartlar arasında geç

**İpuçları:**
- Her kelimeyi birkaç kez tekrarla
- Telaffuzu dinleyerek tekrar et
- Örnek cümlelere dikkat et

### 🎯 Eşleştirme Oyunu

**Ne işe yarar?**
- İngilizce kelimeleri Türkçe anlamlarıyla eşleştirerek pratik yaparsın
- Hafızanı güçlendirir

**Nasıl oynanır?**
1. Kartlara tıklayarak aç
2. İngilizce kelime ve Türkçe anlamını bul
3. Tüm çiftleri eşleştir

**İpuçları:**
- Az hamlede bitirmeye çalış (daha fazla puan!)
- Açtığın kartları hatırla
- Sabırlı ol, pratik yaparak gelişeceksin

### 📝 Kelime Testi

**Ne işe yarar?**
- Öğrendiğin kelimeleri test edersin
- Nereleri geliştirmen gerektiğini anlarsın

**Nasıl yapılır?**
1. Görseli ve İngilizce kelimeyi gör
2. 4 seçenekten doğru Türkçe anlamı seç
3. Puanını artır

**İpuçları:**
- Her doğru cevap +10 puan
- Yanlış bilsen bile öğrenmiş olursun
- Sonunda başarı oranını görürsün

### 💬 Cümle Kurma

**Ne işe yarar?**
- Öğrendiğin kelimeleri cümle içinde kullanırsın
- Gerçek İngilizce yazmayı öğrenirsin

**Nasıl yapılır?**
1. Verilen kelimeyi kullanarak bir cümle yaz
2. Kelime bankasından yardım alabilirsin
3. Cümleni kontrol et

**İpuçları:**
- Örnek cümleye bak
- Basit cümleler kur (En az 3 kelime)
- Kelime bankasını kullan
- Her başarılı cümle +15 puan

### ⭐ Puan Sistemi

| Aktivite | Puan |
|----------|------|
| Flash kart tamamlama | +50 puan |
| Eşleştirme (her çift) | +10 puan |
| Eşleştirme bonusu | +50-100 puan |
| Quiz (her doğru) | +10 puan |
| Quiz bitirme bonusu | Başarı oranına göre |
| Cümle kurma | +15 puan |
| Cümle kurma bonusu | +25-50 puan |

## 👨‍🏫 Öğretmenler İçin

### Sınıfta Kullanım

**Bireysel Çalışma:**
- Öğrenciler kendi hızlarında ilerler
- İlerlemeyi takip edebilirsiniz

**Grup Çalışması:**
- Eşleştirme oyununu ekranda göstererek yarışma yapın
- Quiz'i sınıf aktivitesi olarak kullanın

**Ödev:**
- Belirli üniteleri tamamlamalarını isteyin
- Cümle kurma aktivitesini yazılı ödev olarak verin

### Kelime Ekleme

#### 1. Mevcut Üniteye Kelime Ekleme

`js/data.js` dosyasını açın ve ilgili ünitenin `words` dizisine ekleyin:

```javascript
{
    english: "happy",
    turkish: "mutlu",
    pronunciation: "/ˈhæpi/",
    example: "I am happy today.",
    exampleTr: "Bugün mutluyum.",
    image: "😊"
}
```

#### 2. Yeni Ünite Ekleme

```javascript
{
    id: 7,
    title: "Unit 7 - Animals",
    icon: "🐾",
    description: "Hayvanlar ve özellikleri",
    words: [
        {
            english: "cat",
            turkish: "kedi",
            pronunciation: "/kæt/",
            example: "I have a cat.",
            exampleTr: "Bir kedim var.",
            image: "🐱"
        },
        // Diğer kelimeler...
    ]
}
```

#### 3. Telaffuz Sembolleri

IPA (International Phonetic Alphabet) kullanın:
- https://tophonetics.com/ - Otomatik çevirici
- https://en.wiktionary.org/ - Kelime sözlüğü

### Görsel Yönetimi

#### Emoji Kullanımı (Kolay)
- Varsayılan olarak emoji kullanılıyor
- Hızlı ve pratik
- Tüm platformlarda çalışır

#### Gerçek Görseller (Profesyonel)

1. **AI ile Oluşturma:**
```
DALL-E prompt: "Simple, flat design educational illustration 
of [KELIME] for children, colorful, white background"
```

2. **Görseli ekleme:**
- Görseli `images/` klasörüne kaydet
- `data.js` içinde `image: "images/kelime.png"` şeklinde güncelle

### Müfredata Uyarlama

**6. Sınıf MEB Müfredatı:**
- Unit 1: Life (Hayat)
- Unit 2: Yummy Breakfast (Kahvaltı)
- Unit 3: Downtown (Şehir Merkezi)
- Unit 4: Weather and Emotions (Hava ve Duygular)
- Unit 5: At the Fair (Panayır)
- Unit 6: Occupations (Meslekler)

**Diğer sınıflar için:**
- Kelimeleri değiştirerek adapte edebilirsiniz
- Zorluk seviyesini ayarlayın

## 🔧 Teknik Destek

### Yaygın Sorunlar

**Ses çalışmıyor:**
- Tarayıcınızın ses ayarlarını kontrol edin
- Chrome veya Edge kullanın (en iyi destek)

**İlerleme kayboldu:**
- Tarayıcı geçmişini/çerezlerini silmediyseniz kayıtlıdır
- LocalStorage kullanıldığı için aynı tarayıcıda açın

**Mobilde görünüm bozuk:**
- Tarayıcınızı güncelleyin
- Yatay modu deneyin

### Özelleştirme

**Renkleri değiştirme:**
`css/style.css` dosyasında `:root` bölümünü düzenleyin:

```css
:root {
    --primary-color: #6366f1;  /* Ana renk */
    --secondary-color: #8b5cf6; /* İkincil renk */
    --accent-color: #ec4899;    /* Vurgu rengi */
}
```

**Puan değerlerini değiştirme:**
İlgili JS dosyalarında `addPointsWithAnimation()` fonksiyonundaki değerleri düzenleyin.

## 📱 Mobil Kullanım

FukoLingo tüm cihazlarda çalışır:
- **Mobil tarayıcı**: Direkt erişim
- **Ana ekrana ekleme**: "Ana ekrana ekle" ile uygulama gibi kullanın
- **Offline**: Bir kez yükledikten sonra internet olmadan da çalışır

## 🎓 Pedagojik Yaklaşım

FukoLingo, araştırmalarla kanıtlanmış öğrenme yöntemlerini kullanır:

1. **Multimodal Öğrenme**: Görsel + İşitsel + Kinesthetic
2. **Active Learning**: Pasif okuma yerine aktif katılım
3. **Immediate Feedback**: Anlık geri bildirim
4. **Gamification**: Oyunlaştırma ile motivasyon
5. **Spaced Repetition**: Farklı modlarla tekrar

## 📊 İlerleme Takibi

**Öğrenci için görünen:**
- Toplam puan (⭐)
- Öğrenilen kelime sayısı (🏆)
- Ünite tamamlanma yüzdesi

**Gelecek güncellemeler:**
- Detaylı istatistikler
- Haftalık ilerleme grafiği
- Başarı rozetleri

## 💡 İpuçları

### Öğrenciler için:
- ✅ Her gün 10-15 dakika çalış
- ✅ Farklı modları kullan
- ✅ Yanlış yaptığın kelimeleri not al
- ✅ Telaffuzu dinle ve tekrar et
- ✅ Arkadaşlarınla yarış!

### Öğretmenler için:
- ✅ Haftada 1-2 ünite hedefleyin
- ✅ Sınıfta interaktif kullanın
- ✅ Ödev olarak belirli modları atayın
- ✅ Puan sistemini motivasyon için kullanın
- ✅ Kendi kelimelerinizi ekleyin

## 🆘 Yardım

Sorun yaşarsanız:
1. Bu kılavuzu okuyun
2. README.md dosyasına bakın
3. GitHub'da issue açın

---

**Keyifli öğrenmeler! 🦊📚**
