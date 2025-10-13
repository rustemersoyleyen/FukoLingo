@echo off
chcp 65001 >nul
echo ========================================
echo   FukoLingo - İlk GitHub Kurulumu
echo ========================================
echo.

:: Git kontrolü
echo [1/6] Git kurulu mu kontrol ediliyor...
git --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [91mHATA: Git bulunamadı![0m
    echo.
    echo Lütfen Git'i indirip kurun:
    echo https://git-scm.com/downloads
    echo.
    pause
    exit /b
)
echo [92m✓ Git kurulu[0m
echo.

:: GitHub kullanıcı adı al
echo [2/6] GitHub kullanıcı bilgilerinizi girin:
set /p github_user="GitHub kullanıcı adınız: "
if "%github_user%"=="" (
    echo [91mKullanıcı adı boş olamaz![0m
    pause
    exit /b
)

set /p github_email="GitHub e-posta adresiniz: "
if "%github_email%"=="" (
    echo [91mE-posta adresi boş olamaz![0m
    pause
    exit /b
)

echo.

:: Git config ayarla
echo [3/6] Git yapılandırılıyor...
git config --global user.name "%github_user%"
git config --global user.email "%github_email%"
echo [92m✓ Git yapılandırıldı[0m
echo.

:: Git init kontrolü
if exist .git (
    echo [4/6] Git repository zaten var, atlanıyor...
) else (
    echo [4/6] Git repository başlatılıyor...
    git init
    git branch -M main
    echo [92m✓ Git repository başlatıldı[0m
)
echo.

:: Repository adı al
set /p repo_name="GitHub repository adı (varsayılan: FukoLingo): "
if "%repo_name%"=="" (
    set repo_name=FukoLingo
)

:: Remote ekle veya güncelle
echo [5/6] GitHub repository'si bağlanıyor...
git remote remove origin >nul 2>&1
git remote add origin https://github.com/%github_user%/%repo_name%.git
echo [92m✓ Repository bağlandı[0m
echo.

:: İlk commit ve push için hazırlık
echo [6/6] İlk commit hazırlanıyor...
echo.
echo ÖNEMLİ NOT:
echo ===========
echo 1. Önce GitHub'da repository oluşturun:
echo    https://github.com/new
echo.
echo 2. Repository adı: %repo_name%
echo 3. Public seçin
echo 4. "Initialize with README" SEÇMEYİN!
echo.

set /p devam="Repository'yi oluşturdunuz mu? (E/H): "
if /i not "%devam%"=="E" (
    echo.
    echo Repository oluşturduktan sonra bu scripti tekrar çalıştırın.
    pause
    exit /b
)

:: Commit ve push
echo.
echo Dosyalar ekleniyor...
git add .
git commit -m "İlk commit: FukoLingo projesi başlatıldı"

echo.
echo GitHub'a yükleniyor...
echo.
echo [93mNOT: GitHub Token isteyebilir![0m
echo Kullanıcı adı: %github_user%
echo Şifre: GitHub Token (şifre değil!)
echo.

git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [92m========================================[0m
    echo [92m  BAŞARIYLA KURULDU![0m
    echo [92m========================================[0m
    echo.
    echo Şimdi GitHub Pages'i aktif edin:
    echo.
    echo 1. https://github.com/%github_user%/%repo_name%/settings/pages
    echo 2. Source: Branch "main" seçin
    echo 3. Folder: "/ (root)" seçin
    echo 4. Save'e tıklayın
    echo.
    echo Siteniz 1-2 dakika içinde şu adreste canlı olacak:
    echo https://%github_user%.github.io/%repo_name%/
    echo.
    echo README.md dosyasında URL'yi güncelleyin!
    echo.
) else (
    echo.
    echo [91m========================================[0m
    echo [91m  HATA OLUŞTU![0m
    echo [91m========================================[0m
    echo.
    echo Olası nedenler:
    echo 1. Repository henüz oluşturulmadı
    echo 2. Token gerekiyor (şifre ile giremezsiniz)
    echo 3. İnternet bağlantısı sorunu
    echo.
    echo Detaylı rehber: GITHUB_YUKLEME_REHBERI.md
    echo.
)

pause

