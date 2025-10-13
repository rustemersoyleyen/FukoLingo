# 🚀 FukoLingo - GitHub'a Yükleme Başlangıç Rehberi

## ⚡ Hızlı Başlangıç (3 Adım)

### ✅ Ön Hazırlık

1. **Git kurulu mu?** Kontrol edin:
   ```powershell
   git --version
   ```
   Değilse: https://git-scm.com/downloads

2. **GitHub hesabınız var mı?** Yoksa oluşturun: https://github.com/signup

---

## 🎯 Yöntem 1: Otomatik Kurulum (Önerilen - Kolay)

Windows kullanıcıları için hazır script:

1. **`ilk-kurulum.bat`** dosyasını çift tıklayın
2. Sorulan bilgileri girin (GitHub kullanıcı adı, email)
3. GitHub'da repository oluşturun (script söyleyecek)
4. Script otomatik yükleyecek!

---

## 🎯 Yöntem 2: Manuel Kurulum (Adım Adım)

### Adım 1: GitHub'da Repository Oluştur

1. https://github.com/new adresine git
2. Repository name: `FukoLingo`
3. Public seç
4. **"Initialize with README" SEÇME!**
5. "Create repository" tıkla

### Adım 2: Yerel Projeyi Hazırla

PowerShell veya CMD'yi aç ve proje klasörüne git:

```powershell
cd D:\FukoLingo
```

### Adım 3: Git Yapılandır (İlk Kez İçin)

```powershell
git config --global user.name "Adınız Soyadınız"
git config --global user.email "github@email.com"
```

### Adım 4: Git Başlat ve Yükle

```powershell
# Git başlat
git init

# Dosyaları ekle
git add .

# İlk commit
git commit -m "İlk commit: FukoLingo projesi başlatıldı"

# Ana branch'i main yap
git branch -M main

# GitHub'a bağlan (KULLANICI_ADINIZI değiştirin!)
git remote add origin https://github.com/KULLANICI_ADINIZ/FukoLingo.git

# Yükle
git push -u origin main
```

⚠️ **Not**: Push sırasında kullanıcı adı ve şifre isteyecek:
- **Kullanıcı Adı**: GitHub kullanıcı adınız
- **Şifre**: GitHub Personal Access Token (şifre değil!)

### Token Nasıl Alınır?

1. GitHub'da: Settings > Developer settings > Personal access tokens > Tokens (classic)
2. "Generate new token (classic)" tıklayın
3. İsim: `FukoLingo-Push`
4. Permission: `repo` seçin (checkbox işaretle)
5. "Generate token" tıklayın
6. Token'ı kopyalayın (BİR KEZ gösterilir!)
7. Push yaparken şifre yerine bu token'ı yapıştırın

---

## 🌐 GitHub Pages Aktif Etme

1. GitHub'da repository sayfanıza gidin
2. **Settings** > **Pages** menüsüne tıklayın
3. **Source** kısmında:
   - Branch: `main` seçin
   - Folder: `/ (root)` seçin
4. **Save** butonuna tıklayın
5. 1-2 dakika bekleyin

Site URL'iniz:
```
https://KULLANICI_ADINIZ.github.io/FukoLingo/
```

---

## 🔄 Güncellemeleri Yükleme

### Otomatik (Script ile)

`github-yukle.bat` dosyasını çift tıklayın!

### Manuel (Komut ile)

```powershell
cd D:\FukoLingo
git add .
git commit -m "Güncelleme açıklaması"
git push origin main
```

---

## 📚 Detaylı Rehberler

Daha fazla bilgi için:

- 📖 **[GitHub Yükleme Rehberi](GITHUB_YUKLEME_REHBERI.md)** - Detaylı adımlar ve sorun giderme
- ⚡ **[Hızlı Komutlar](HIZLI_GITHUB_KOMUTLARI.md)** - Git komutları referansı
- 🔧 **README.md** - Proje hakkında genel bilgi

---

## ✅ Başarı Kontrol Listesi

- [ ] Git kuruldu
- [ ] GitHub hesabı var
- [ ] Repository oluşturuldu
- [ ] Proje GitHub'a yüklendi
- [ ] GitHub Pages aktif edildi
- [ ] Site URL'si çalışıyor
- [ ] README.md'de URL güncellendi

---

## 🆘 Yardım Lazım?

### Sık Karşılaşılan Sorunlar

**Sorun 1**: "Git is not recognized"
- **Çözüm**: Git'i kurun: https://git-scm.com/downloads

**Sorun 2**: Push yaparken "Permission denied"
- **Çözüm**: Token kullanın (yukarıda anlatıldı)

**Sorun 3**: "Repository not found"
- **Çözüm**: Kullanıcı adını ve repository adını kontrol edin

**Sorun 4**: Site 404 hatası veriyor
- **Çözüm**: GitHub Pages'te Branch: `main` seçili mi kontrol edin

### Daha Fazla Yardım

- **[GitHub Yükleme Rehberi](GITHUB_YUKLEME_REHBERI.md)** - Sorun Giderme bölümüne bakın
- **GitHub Issues** - Repository'nizde issue açın
- **Git Dokümantasyonu**: https://git-scm.com/doc

---

## 🎉 Tebrikler!

Projeniz artık GitHub'da ve dünya çapında erişilebilir! 

URL'nizi öğrencileriniz, arkadaşlarınız ve ailenizle paylaşabilirsiniz! 🌍

---

**🦊 FukoLingo ile İngilizce öğrenmek artık her yerde! 📚✨**

