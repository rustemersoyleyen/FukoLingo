# 🦊 FukoLingo - İngilizce Kelime Öğrenme Platformu

6. sınıf öğrencileri için eğlenceli ve interaktif İngilizce kelime öğrenme platformu.

## 🌟 Özellikler

- 📚 **6 Farklı Ünite**: Life, Breakfast, Downtown, Weather & Emotions, Fair, Occupations
- 🎴 **Flash Kartlar**: Kelimeleri görsel ve sesli olarak öğren
- 🎯 **Eşleştirme Oyunu**: İngilizce-Türkçe eşleştirme ile pratik yap
- 📝 **Kelime Testleri**: Bilgini ölç, puanını arttır
- 💬 **Cümle Kurma**: Öğrendiğin kelimeleri cümle içinde kullan
- 🤖 **AI Destekli Değerlendirme (YENİ!)**: Gemini AI ile gerçek zamanlı gramer ve anlam kontrolü
- 🇹🇷 **Otomatik Türkçe Çeviri**: AI cümlelerini anında Türkçe'ye çevirir
- ⭐ **Puan Sistemi**: Her başarılı aktivitede puan kazan
- 🏆 **İlerleme Takibi**: Gelişimini takip et

## 🚀 Nasıl Kullanılır?

### 🌐 Online Kullanım (Önerilen)
GitHub Pages üzerinden direkt erişin:
👉 **[FukoLingo'yu Aç](https://KULLANICI_ADINIZ.github.io/FukoLingo/)** 

> **Not**: Yukarıdaki URL'de `KULLANICI_ADINIZ` yerine kendi GitHub kullanıcı adınızı yazın.

### 💻 Yerel Kullanım
1. Projeyi klonlayın veya indirin
2. `index.html` dosyasını tarayıcınızda açın
3. Öğrenmeye başlayın!

```bash
git clone https://github.com/KULLANICI_ADINIZ/FukoLingo.git
cd FukoLingo
# index.html'i tarayıcıda çift tıklayarak açın
```

## 📖 Kelime Ekleme

Kelimeler `js/data.js` dosyasında JSON formatında saklanmaktadır. Yeni kelime eklemek için:

```javascript
{
    english: "word",
    turkish: "kelime",
    pronunciation: "/wɜːrd/",
    example: "This is an example sentence.",
    exampleTr: "Bu bir örnek cümledir.",
    image: "🔤"
}
```

### Yeni Ünite Ekleme

```javascript
{
    id: 7,
    title: "Unit 7 - Yeni Ünite",
    icon: "🎨",
    description: "Ünite açıklaması",
    words: [
        // Kelimeler buraya
    ]
}
```

## 🎨 Görsel Yönetimi

### Emoji Kullanımı (Varsayılan)
Projede varsayılan olarak emojiler kullanılmaktadır. Bu sayede:
- ✅ Hızlı yükleme
- ✅ Ek dosya gerekmez
- ✅ Her platformda çalışır

### Kendi Görsellerinizi Eklemek

1. `images/` klasörü oluşturun
2. Kelime görsellerini bu klasöre ekleyin (örn: `apple.png`)
3. `data.js` içinde `image` alanını güncelleyin:

```javascript
image: "images/apple.png"  // Emoji yerine
```

### AI ile Görsel Oluşturma

Görselleri AI araçları ile oluşturabilirsiniz:
- **DALL-E**: OpenAI'ın görsel oluşturma aracı
- **Midjourney**: Yüksek kaliteli görsel üretimi
- **Stable Diffusion**: Açık kaynak alternatif

**Örnek prompt:**
```
"Simple, colorful illustration of [kelime] for children's education, 
flat design, white background, educational style"
```

## 🔧 Teknolojiler

- **HTML5**: Yapısal içerik
- **CSS3**: Modern ve responsive tasarım
- **Vanilla JavaScript**: Saf JavaScript (framework yok)
- **Web Speech API**: Sesli telaffuz
- **LocalStorage**: İlerleme kaydetme
- **Google Gemini AI**: Gelişmiş cümle değerlendirme (opsiyonel)

## 📱 Responsive Tasarım

Platform tüm cihazlarda sorunsuz çalışır:
- 💻 Masaüstü
- 📱 Tablet
- 📱 Mobil

## 🎓 Eğitsel Yaklaşım

FukoLingo, kanıtlanmış öğrenme yöntemlerini kullanır:

1. **Spaced Repetition**: Düzenli tekrar ile kalıcı öğrenme
2. **Visual Learning**: Görsel destekli hafıza güçlendirme
3. **Active Recall**: Aktif hatırlama ile pekiştirme
4. **Gamification**: Oyunlaştırma ile motivasyon
5. **Contextual Learning**: Cümle içinde kullanım

## 🌐 GitHub Pages'de Yayınlama

Projenizi GitHub'a yükleyip canlıya almak için detaylı rehber:

📚 **[GitHub Yükleme Rehberi'ni okuyun](GITHUB_YUKLEME_REHBERI.md)**

### Hızlı Başlangıç:

```powershell
# 1. Git başlat
git init
git add .
git commit -m "İlk commit: FukoLingo projesi"

# 2. GitHub'a yükle (önce GitHub'da repository oluşturun)
git remote add origin https://github.com/KULLANICI_ADINIZ/FukoLingo.git
git branch -M main
git push -u origin main

# 3. GitHub Settings > Pages > Branch: main > Save
```

⚠️ **Önemli**: Detaylı adımlar ve sorun giderme için mutlaka rehberi okuyun!

## 📝 Lisans

Bu proje eğitim amaçlıdır ve özgürce kullanılabilir.

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! 

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/YeniOzellik`)
3. Commit yapın (`git commit -m 'Yeni özellik eklendi'`)
4. Push edin (`git push origin feature/YeniOzellik`)
5. Pull Request açın

## 🤖 AI Entegrasyonu (Opsiyonel)

FukoLingo artık **Google Gemini AI** ile entegre çalışabilir! Cümle kurma modülünde:

- ✅ Gerçek zamanlı gramer kontrolü
- ✅ Anlam analizi
- ✅ Otomatik Türkçe çeviri
- ✅ Detaylı geri bildirim
- ✅ İyileştirme önerileri
- ✅ AI destekli örnek cümleler

**Kurulum:** 
- 📖 Detaylı rehber: `GEMINI_KURULUM.md`
- ⚡ Hızlı başlangıç: `GEMINI_HIZLI_BASLANGIC.md`
- 🆓 **Ücretsiz:** Google Gemini API ücretsiz limitli

**Not:** AI olmadan da tüm özellikler çalışır (basit mod).

## 💡 Gelecek Özellikler

- [x] AI destekli cümle değerlendirme ✨
- [x] Otomatik Türkçe çeviri ✨
- [ ] Ses kaydı ile telaffuz değerlendirme
- [ ] Daha fazla oyun tipi
- [ ] Başarı rozetleri sistemi
- [ ] Çoklu kullanıcı desteği
- [ ] Mobil uygulama versiyonu
- [ ] Öğretmen paneli

## 📞 İletişim

Sorularınız için issue açabilirsiniz.

## 🙏 Teşekkürler

Bu projeyi kullanan tüm öğrenci ve öğretmenlere teşekkürler! 🎉

---

**FukoLingo ile İngilizce öğrenmek çok eğlenceli! 🦊📚✨**
