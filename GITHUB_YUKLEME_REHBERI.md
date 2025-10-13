# 🚀 GitHub'a Yükleme ve GitHub Pages Kurulum Rehberi

Bu rehber, FukoLingo projenizi GitHub'a yüklemeniz ve GitHub Pages ile canlıya almanız için adım adım talimatlar içerir.

## 📋 İçindekiler

1. [GitHub'a İlk Yükleme](#1-githuba-ilk-yükleme)
2. [GitHub Pages Kurulumu](#2-github-pages-kurulumu)
3. [Gemini API Ayarları](#3-gemini-api-ayarları)
4. [Güncelleme ve Bakım](#4-güncelleme-ve-bakım)
5. [Sorun Giderme](#5-sorun-giderme)

---

## 1. GitHub'a İlk Yükleme

### Adım 1.1: GitHub Repository Oluşturma

1. **GitHub'da oturum açın**: [github.com](https://github.com)
2. Sağ üst köşedeki **"+"** işaretine tıklayın
3. **"New repository"** seçeneğini seçin
4. Repository bilgilerini doldurun:
   - **Repository name**: `FukoLingo` (veya istediğiniz isim)
   - **Description**: "6. sınıf İngilizce kelime öğrenme platformu"
   - **Public** seçeneğini işaretleyin (GitHub Pages için gerekli)
   - **ÖNEMLÍ**: "Initialize this repository with a README" seçeneğini **IŞARETLEMEYIN**
5. **"Create repository"** butonuna tıklayın

### Adım 1.2: Yerel Git Kurulumu

Bilgisayarınızda Git'in kurulu olduğundan emin olun. Kontrol etmek için:

```bash
git --version
```

Git kurulu değilse: [git-scm.com/downloads](https://git-scm.com/downloads)

### Adım 1.3: Proje Klasöründe Git Başlatma

PowerShell veya Terminal'de proje klasörünüze gidin:

```powershell
# Proje klasörüne git
cd D:\FukoLingo

# Git repository'yi başlat
git init

# README'deki GitHub kullanıcı adını güncelleyin (opsiyonel)
# Dosyayı not defteri ile düzenleyin ve "kullaniciadi" yazan yeri kendi kullanıcı adınızla değiştirin

# Dosyaları stage'e ekle
git add .

# İlk commit'i yap
git commit -m "İlk commit: FukoLingo projesi başlatıldı"

# Ana branch'i main olarak ayarla (eğer master ise)
git branch -M main
```

### Adım 1.4: GitHub'a Bağlama ve Yükleme

```powershell
# GitHub repository'nizi bağlayın (KULLANICI_ADINIZI değiştirin)
git remote add origin https://github.com/KULLANICI_ADINIZ/FukoLingo.git

# Projeyi GitHub'a push edin
git push -u origin main
```

**NOT**: İlk push sırasında GitHub kullanıcı adı ve şifrenizi girmeniz istenebilir. Veya GitHub Personal Access Token kullanmanız gerekebilir.

### Adım 1.5: GitHub Token Oluşturma (Gerekirse)

Eğer şifre ile push edemiyorsanız:

1. GitHub'da: **Settings** > **Developer settings** > **Personal access tokens** > **Tokens (classic)**
2. **"Generate new token"** > **"Generate new token (classic)"**
3. Token'a bir isim verin: örn. "FukoLingo-Push"
4. **Permissions**: `repo` seçeneğini işaretleyin
5. **"Generate token"** butonuna tıklayın
6. Token'ı kopyalayın (bir daha gösterilmeyecek!)
7. Push yaparken şifre yerine bu token'ı kullanın

---

## 2. GitHub Pages Kurulumu

### Adım 2.1: Repository Settings

1. GitHub'da repository sayfanıza gidin: `https://github.com/KULLANICI_ADINIZ/FukoLingo`
2. **Settings** (⚙️ Ayarlar) sekmesine tıklayın
3. Sol menüden **"Pages"** seçeneğine tıklayın

### Adım 2.2: Source Ayarları

1. **Source** bölümünde:
   - **Branch**: `main` seçin
   - **Folder**: `/ (root)` seçin
2. **"Save"** butonuna tıklayın

### Adım 2.3: Yayınlanma

GitHub Pages sitenizi otomatik olarak oluşturacak (1-2 dakika sürebilir).

Site URL'iniz şu formatta olacak:
```
https://KULLANICI_ADINIZ.github.io/FukoLingo/
```

### Adım 2.4: URL'yi Kontrol Etme

1. **Pages** sayfasında yeşil bir onay işareti ve URL göreceksiniz
2. URL'ye tıklayarak sitenizi test edin
3. URL'yi README.md dosyanıza ekleyin:

```markdown
## 🚀 Canlı Demo

Siteyi şu adresten deneyebilirsiniz: https://KULLANICI_ADINIZ.github.io/FukoLingo/
```

---

## 3. Gemini API Ayarları

⚠️ **ÖNEMLİ GÜVENLİK UYARISI**: `gemini-config.js` dosyası `.gitignore` ile GitHub'a yüklenmeden engellenmiştir. Bu dosya API anahtarınızı içerir ve GİZLİ kalmalıdır!

### Seçenek 1: GitHub'da API Anahtarsız Kullanım (Önerilen)

GitHub Pages'te API anahtarı **KULLANMAYIN**. Bunun yerine:

1. `js/gemini-config.js` dosyasını `.gitignore`'da bırakın
2. Canlı sitede AI özellikleri kapalı olacak (basit mod)
3. Kullanıcılar kendi bilgisayarlarında yerel olarak AI özelliğini aktif edebilir

### Seçenek 2: Sunucu Taraflı API Kullanımı (İleri Düzey)

API anahtarlarını güvenli kullanmak için backend gereklidir:

1. **Netlify Functions** kullanın
2. **Vercel Serverless Functions** kullanın
3. Kendi backend API'nizi oluşturun (Node.js/Python)

Bu konuda detaylı bilgi: `GEMINI_KURULUM.md`

### Yerel Kullanım İçin API Kurulumu

Yerel bilgisayarınızda çalıştırırken:

1. `js/gemini-config.template.js` dosyasını kopyalayın
2. `js/gemini-config.js` olarak kaydedin
3. Kendi API anahtarınızı yazın
4. **ASLA** bu dosyayı GitHub'a yüklemeyin!

---

## 4. Güncelleme ve Bakım

### Yeni Değişiklikleri GitHub'a Yükleme

```powershell
# Proje klasörüne git
cd D:\FukoLingo

# Değişiklikleri kontrol et
git status

# Değişiklikleri stage'e ekle
git add .

# Commit yap (açıklayıcı mesaj yazın)
git commit -m "Yeni kelimeler ve oyunlar eklendi"

# GitHub'a push et
git push origin main
```

Push yaptıktan sonra 1-2 dakika içinde GitHub Pages otomatik güncellenecek.

### Branch ile Çalışma (İleri Düzey)

```powershell
# Yeni özellik geliştirirken branch oluşturun
git checkout -b yeni-ozellik

# Değişikliklerinizi yapın...
git add .
git commit -m "Yeni özellik: XYZ"

# Ana branch'e geri dön
git checkout main

# Branch'i birleştir
git merge yeni-ozellik

# GitHub'a push et
git push origin main
```

---

## 5. Sorun Giderme

### Site Yüklenmiyor / 404 Hatası

**Çözüm 1**: GitHub Pages'in aktif olduğundan emin olun
- Settings > Pages > Branch: `main` ve folder: `/ (root)` olmalı

**Çözüm 2**: URL'yi kontrol edin
- Doğru format: `https://KULLANICI_ADINIZ.github.io/REPO_ADI/`
- Büyük/küçük harf duyarlı!

**Çözüm 3**: Cache temizleyin
- Tarayıcıda Ctrl+F5 (Hard Refresh)
- Gizli pencerede (Incognito) deneyin

### CSS/JS Dosyaları Yüklenmiyor

**Sorun**: Dosya yolları yanlış olabilir

**Çözüm**: `index.html` içindeki yolları kontrol edin:

```html
<!-- ✅ DOĞRU (relative path) -->
<link rel="stylesheet" href="css/style.css">
<script src="js/app.js"></script>

<!-- ❌ YANLIŞ (absolute path) -->
<link rel="stylesheet" href="/css/style.css">
<script src="/js/app.js"></script>
```

### Git Push Hataları

**Hata**: "Permission denied"

**Çözüm**: 
1. GitHub Token kullanın (Adım 1.5'e bakın)
2. Veya SSH key kurulumu yapın

**Hata**: "Your branch is behind"

**Çözüm**:
```powershell
git pull origin main --rebase
git push origin main
```

### API Key GitHub'a Yüklendi (Acil Durum!)

**Eğer yanlışlıkla API key GitHub'a yüklediyseniz**:

1. **HEMEN** API key'inizi yenileyin: [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Eski key'i iptal edin
3. Git history'den kaldırın:

```powershell
# Dosyayı history'den sil
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch js/gemini-config.js" \
  --prune-empty --tag-name-filter cat -- --all

# Force push (DİKKATLİ!)
git push origin --force --all
```

---

## 📚 Ek Kaynaklar

- **GitHub Pages Dokümantasyonu**: [docs.github.com/pages](https://docs.github.com/pages)
- **Git Öğrenme**: [learngitbranching.js.org](https://learngitbranching.js.org/)
- **Markdown Rehberi**: [markdownguide.org](https://www.markdownguide.org/)

---

## ✅ Kontrol Listesi

Push yapmadan önce kontrol edin:

- [ ] `.gitignore` dosyası var mı?
- [ ] `gemini-config.js` gitignore'da mı?
- [ ] API anahtarları güvende mi?
- [ ] Test dosyaları (`test-*.html`) kaldırıldı mı? (veya gitignore'da)
- [ ] README güncel mi?
- [ ] Tüm dosya yolları relative mi?

---

## 🎉 Tebrikler!

Projeniz artık GitHub'da ve dünya çapında erişilebilir! 🚀

URL'nizi arkadaşlarınız ve öğrencilerinizle paylaşabilirsiniz.

---

**FukoLingo ile İngilizce öğrenmek çok eğlenceli! 🦊📚✨**

