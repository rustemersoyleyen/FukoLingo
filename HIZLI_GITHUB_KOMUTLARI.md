# ⚡ Hızlı GitHub Komutları Referansı

FukoLingo projesi için en çok kullanacağınız Git komutları.

## 📋 İlk Kurulum (Bir Kez)

```powershell
# Proje klasörüne git
cd D:\FukoLingo

# Git başlat
git init

# Dosyaları ekle
git add .

# İlk commit
git commit -m "İlk commit: FukoLingo projesi başlatıldı"

# Ana branch'i main yap
git branch -M main

# GitHub repository'ye bağlan (KULLANICI_ADINIZI değiştirin!)
git remote add origin https://github.com/KULLANICI_ADINIZ/FukoLingo.git

# Push et
git push -u origin main
```

---

## 🔄 Günlük Kullanım Komutları

### Değişiklikleri GitHub'a Yükleme

```powershell
# Durum kontrolü
git status

# Tüm değişiklikleri ekle
git add .

# Veya sadece belirli dosyaları ekle
git add js/data.js
git add css/style.css

# Commit yap (açıklayıcı mesaj yazın)
git commit -m "Yeni kelimeler eklendi"

# GitHub'a gönder
git push origin main
```

### Tek Komutla Yükleme

```powershell
git add . && git commit -m "Güncelleme mesajınız" && git push origin main
```

---

## 📥 GitHub'dan Çekme

```powershell
# En son değişiklikleri al
git pull origin main

# Sadece kontrol et (indirme)
git fetch origin
```

---

## 🔍 Durum Kontrolü

```powershell
# Değişen dosyaları gör
git status

# Değişiklik detaylarını gör
git diff

# Commit geçmişini gör
git log --oneline

# Son 5 commit'i gör
git log --oneline -5

# Grafik halinde göster
git log --oneline --graph --all
```

---

## ↩️ Geri Alma İşlemleri

### Henüz Commit Edilmemiş Değişiklikleri Geri Al

```powershell
# Tek dosyayı geri al
git checkout -- js/data.js

# Tüm değişiklikleri geri al (DİKKATLİ!)
git reset --hard
```

### Son Commit'i Geri Al

```powershell
# Commit'i geri al, değişiklikleri koru
git reset --soft HEAD~1

# Commit'i geri al, değişiklikleri sil (DİKKATLİ!)
git reset --hard HEAD~1
```

### Yanlış Commit Mesajını Düzelt

```powershell
# Son commit mesajını düzelt
git commit --amend -m "Düzeltilmiş mesaj"
```

---

## 🌿 Branch Kullanımı

```powershell
# Yeni branch oluştur
git branch yeni-ozellik

# Branch'e geç
git checkout yeni-ozellik

# Oluştur ve geç (tek komut)
git checkout -b yeni-ozellik

# Branch'leri listele
git branch

# Ana branch'e dön
git checkout main

# Branch'i birleştir
git merge yeni-ozellik

# Branch'i sil
git branch -d yeni-ozellik
```

---

## 🔐 GitHub Token ile Giriş

GitHub artık şifre ile push izin vermiyor. Token kullanın:

### Windows'ta Token Kaydetme

```powershell
# İlk push'ta kullanıcı adı ve TOKEN girin
git push origin main

# Kullanıcı adı: GitHubKullaniciAdiniz
# Şifre: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxx (token)

# Windows bu bilgiyi Credential Manager'a kaydedecek
```

### Token'ı Güncelleme

```powershell
# Windows Credential Manager'ı aç
control /name Microsoft.CredentialManager

# "git:https://github.com" girişini bulup düzenleyin
```

---

## 🚨 Acil Durum Komutları

### GitHub'daki Değişikliklerle Çakışma

```powershell
# Önce GitHub'dan çek
git pull origin main --rebase

# Çakışmaları çöz (dosyaları düzenle)
# Sonra ekle ve devam et
git add .
git rebase --continue

# Push et
git push origin main
```

### Yanlışlıkla Çok Şey Sildiniz

```powershell
# Tüm değişiklikleri geri al (DİKKATLİ!)
git reset --hard HEAD

# Veya son stabil commit'e dön
git reset --hard origin/main
```

### Git Geçmişini Tamamen Sıfırlama (Son Çare!)

```powershell
# Eski .git klasörünü sil
Remove-Item -Recurse -Force .git

# Yeniden başlat
git init
git add .
git commit -m "Proje yeniden başlatıldı"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/FukoLingo.git
git push -u origin main --force
```

---

## 📊 Kullanışlı Git Ayarları

### İlk Kurulum

```powershell
# Adınızı ayarlayın
git config --global user.name "Adınız Soyadınız"

# Email'inizi ayarlayın (GitHub email'i)
git config --global user.email "sizin@email.com"

# Varsayılan editör ayarla
git config --global core.editor "notepad"

# Renkli çıktı
git config --global color.ui true
```

### Ayarları Kontrol Et

```powershell
# Tüm ayarları göster
git config --list

# Sadece kullanıcı ayarlarını göster
git config user.name
git config user.email
```

---

## 🎯 Sık Kullanılan Senaryolar

### Senaryo 1: Yeni Kelimeler Ekledim

```powershell
cd D:\FukoLingo
git add js/data.js
git commit -m "Ünite 6'ya 10 yeni kelime eklendi"
git push origin main
```

### Senaryo 2: CSS Tasarımı Değiştirdim

```powershell
cd D:\FukoLingo
git add css/style.css
git commit -m "Flash card tasarımı güncellendi"
git push origin main
```

### Senaryo 3: Birden Fazla Dosya Değiştirdim

```powershell
cd D:\FukoLingo
git add .
git commit -m "Quiz sistemi yeniden tasarlandı - JS ve CSS güncellendi"
git push origin main
```

### Senaryo 4: Yeni Oyun Modu Ekledim

```powershell
cd D:\FukoLingo
git checkout -b kelime-bulma-oyunu
# Dosyaları oluştur ve düzenle...
git add .
git commit -m "Yeni oyun: Kelime Bulma Oyunu eklendi"
git checkout main
git merge kelime-bulma-oyunu
git push origin main
git branch -d kelime-bulma-oyunu
```

---

## 🛠️ Alias Oluşturma (Kısayollar)

Sık kullanılan komutlara kısayol:

```powershell
# Status kısayolu
git config --global alias.st status

# Commit kısayolu
git config --global alias.ci commit

# Push kısayolu
git config --global alias.ps push

# Güzel log kısayolu
git config --global alias.lg "log --oneline --graph --all"

# Kullanım:
git st      # git status yerine
git ci -m "mesaj"   # git commit -m "mesaj" yerine
git ps origin main  # git push origin main yerine
git lg      # güzel log göster
```

---

## 📖 Git Cheat Sheet

| Komut | Açıklama |
|-------|----------|
| `git status` | Durumu göster |
| `git add .` | Tüm değişiklikleri ekle |
| `git commit -m "mesaj"` | Commit yap |
| `git push origin main` | GitHub'a gönder |
| `git pull origin main` | GitHub'dan al |
| `git log --oneline` | Geçmişi göster |
| `git diff` | Değişiklikleri göster |
| `git branch` | Branch'leri listele |
| `git checkout -b isim` | Yeni branch oluştur |
| `git merge branch` | Branch'i birleştir |

---

## ❓ Yardım Alma

```powershell
# Genel yardım
git help

# Belirli komut için yardım
git help commit
git help push
git help branch
```

---

## 🎓 Git Öğrenme Kaynakları

- **İnteraktif Git Öğrenme**: [learngitbranching.js.org](https://learngitbranching.js.org/)
- **Git Dokümantasyonu (İngilizce)**: [git-scm.com/doc](https://git-scm.com/doc)
- **GitHub Guides**: [guides.github.com](https://guides.github.com/)

---

## ✅ Günlük Kontrol Listesi

Her gün projeyi güncellerken:

```powershell
# 1. Durum kontrolü
git status

# 2. Değişiklikleri ekle
git add .

# 3. Commit yap
git commit -m "Bugünün güncellemesi: [ne yaptığınızı yazın]"

# 4. Push et
git push origin main

# 5. GitHub Pages'i kontrol et (1-2 dk bekleyin)
# https://KULLANICI_ADINIZ.github.io/FukoLingo/
```

---

**⚡ Git komutlarını kullanırken dikkatli olun ve düzenli commit yapın!**

🦊 FukoLingo ile mutlu kodlamalar! 🚀

