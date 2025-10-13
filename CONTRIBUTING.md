# 🤝 FukoLingo'ya Katkıda Bulunma

FukoLingo açık kaynak bir projedir ve katkılarınızı bekliyoruz! Bu rehber, projeye nasıl katkıda bulunabileceğinizi açıklar.

## 🌟 Katkı Türleri

### 1. Kelime ve İçerik Katkıları

**Yeni Kelime Ekleme:**
- Mevcut ünitelere kelime ekleyin
- Yeni üniteler oluşturun
- Örnek cümleleri iyileştirin

**Gereksinimler:**
- Kelime 6. sınıf seviyesine uygun olmalı
- Telaffuz (IPA) doğru olmalı
- Örnek cümle anlaşılır olmalı

### 2. Kod Katkıları

**Yeni Özellikler:**
- Yeni oyun modları
- Animasyonlar
- Kullanıcı arayüzü iyileştirmeleri

**Hata Düzeltmeleri:**
- Bug fix'ler
- Performans iyileştirmeleri
- Responsive sorunları

### 3. Tasarım Katkıları

- UI/UX iyileştirmeleri
- Görsel tasarımlar
- İkon ve emoji önerileri

### 4. Dokümantasyon

- Türkçe/İngilizce döküman yazma
- Öğretici içerik oluşturma
- Video tutorial hazırlama

## 🚀 Başlangıç

### 1. Repository'yi Fork Edin

```bash
# GitHub'da "Fork" butonuna tıklayın
# Ardından kendi fork'unuzu klonlayın:
git clone https://github.com/KULLANICI_ADINIZ/FukoLingo.git
cd FukoLingo
```

### 2. Branch Oluşturun

```bash
# Özellik için
git checkout -b feature/yeni-ozellik

# Hata düzeltmesi için
git checkout -b fix/hata-aciklamasi

# Döküman için
git checkout -b docs/dokuman-aciklamasi
```

### 3. Değişikliklerinizi Yapın

**Kod Stili:**
- Anlamlı değişken isimleri
- Türkçe yorumlar
- Temiz ve okunabilir kod

**Test Edin:**
- Tüm modülleri test edin
- Farklı tarayıcılarda deneyin
- Mobil uyumluluğu kontrol edin

### 4. Commit Yapın

```bash
git add .
git commit -m "feat: yeni özellik eklendi"
```

**Commit Mesajı Formatı:**
```
<tip>: <açıklama>

[isteğe bağlı detaylı açıklama]
```

**Tip örnekleri:**
- `feat`: Yeni özellik
- `fix`: Hata düzeltmesi
- `docs`: Dokümantasyon
- `style`: Kod formatı
- `refactor`: Kod iyileştirme
- `test`: Test ekleme
- `chore`: Bakım işleri

**Örnekler:**
```
feat: eşleştirme oyununa ses efekti eklendi
fix: mobilde flash kart animasyon hatası düzeltildi
docs: kullanım kılavuzu güncellendi
```

### 5. Push Edin

```bash
git push origin feature/yeni-ozellik
```

### 6. Pull Request Açın

1. GitHub'da repository'nize gidin
2. "Pull Request" butonuna tıklayın
3. Değişikliklerinizi açıklayın
4. Ekran görüntüleri ekleyin (UI değişiklikleri için)

## 📋 Pull Request Kontrol Listesi

Çekilme isteği (PR) göndermeden önce kontrol edin:

- [ ] Kod temiz ve yorumlanmış
- [ ] Tüm modüller test edildi
- [ ] Mobil uyumlu
- [ ] CHANGELOG.md güncellendi (önemli değişiklikler için)
- [ ] Dokümantasyon güncellendi (gerekiyorsa)
- [ ] Console'da hata yok
- [ ] Anlamlı commit mesajları

## 🎨 Tasarım Kuralları

### CSS

```css
/* Mevcut CSS değişkenlerini kullanın */
.yeni-class {
    color: var(--primary-color);
    border-radius: var(--border-radius);
}

/* Yeni renkler için :root'a ekleyin */
:root {
    --yeni-renk: #123456;
}
```

### JavaScript

```javascript
// Fonksiyon isimleri Türkçe veya İngilizce olabilir (tutarlı olun)
function kelimeEkle(word) {
    // Yorumlar Türkçe
    // Kod temiz ve anlaşılır
}
```

### HTML

```html
<!-- Anlamsal HTML kullanın -->
<section class="activity-area">
    <h2>Başlık</h2>
    <p>Açıklama</p>
</section>
```

## 📝 Kelime Ekleme Kılavuzu

### Format

```javascript
{
    english: "kelime",           // Küçük harf
    turkish: "türkçe",          // Açıklayıcı
    pronunciation: "/ˈwɜːrd/",  // IPA formatı
    example: "Example sentence.", // Basit ve açık
    exampleTr: "Örnek cümle.",  // Doğru çeviri
    image: "🔤"                  // İlgili emoji/görsel
}
```

### Kelime Seçim Kriterleri

✅ **Uygun:**
- 6. sınıf müfredatına uygun
- Günlük hayatta kullanılan
- Temel kelimeler
- Somut kavramlar

❌ **Uygun Değil:**
- Çok ileri seviye
- Argo/slang
- Teknik jargon
- Nadir kullanılan

### Telaffuz Kaynakları

- [ToPhonetics](https://tophonetics.com/) - Otomatik IPA
- [Cambridge Dictionary](https://dictionary.cambridge.org/)
- [Merriam-Webster](https://www.merriam-webster.com/)

## 🐛 Hata Bildirimi

### Issue Açma

1. Önce mevcut issue'lara bakın
2. Yeni issue açın
3. Şablonu doldurun:

```markdown
**Hata Açıklaması:**
[Hatayı açıklayın]

**Tekrar Etme Adımları:**
1. ...
2. ...
3. ...

**Beklenen Davranış:**
[Ne olması gerekiyordu]

**Ekran Görüntüleri:**
[Varsa ekleyin]

**Ortam:**
- Tarayıcı: [Chrome, Firefox, vs.]
- Cihaz: [Masaüstü, Mobil]
- İşletim Sistemi: [Windows, Mac, vs.]
```

### Özellik İsteği

```markdown
**Özellik Açıklaması:**
[Özelliği açıklayın]

**Neden Gerekli:**
[Faydalarını açıklayın]

**Alternatif Çözümler:**
[Varsa diğer yaklaşımlar]

**Ekstra Bilgi:**
[İlgili linkler, örnekler]
```

## 🎓 Kodlama Standartları

### JavaScript Standartları

```javascript
// ✅ İyi
function calculateScore(answers) {
    let score = 0;
    answers.forEach(answer => {
        if (answer.correct) score += 10;
    });
    return score;
}

// ❌ Kötü
function calc(a) {
    let s = 0;
    for(let i=0;i<a.length;i++){if(a[i].c)s+=10;}
    return s;
}
```

### CSS Standartları

```css
/* ✅ İyi */
.flashcard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

/* ❌ Kötü */
.fc{display:flex;flex-direction:column;align-items:center;gap:30px}
```

## 🌍 Yerelleştirme (i18n)

Şu anda proje Türkçe dilinde. Farklı dillere çeviri katkıları:

1. `js/lang/` klasörü oluşturun
2. `tr.js`, `en.js` gibi dil dosyaları ekleyin
3. Çeviri sistemi önerin

## 📞 İletişim

- **GitHub Issues:** Hata bildirimi ve özellik isteği
- **GitHub Discussions:** Genel tartışmalar
- **Pull Requests:** Kod katkıları

## 📜 Lisans

Katkılarınız MIT lisansı altında yayınlanacaktır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙏 Teşekkürler

Her türlü katkıdan mutluluk duyarız! Küçük de olsa her katkı projeyi iyileştirir.

**Katkıda bulunanlar:**
- [Contributors listesi GitHub'da görüntülenebilir]

---

**Mutlu kodlamalar! 🦊💻✨**

*Sorularınız için issue açabilirsiniz.*
