@echo off
echo ========================================
echo   FukoLingo - GitHub Yukleme Scripti
echo ========================================
echo.

:: Renk kodları için ANSI aktif et
echo [92m1. Git durumu kontrol ediliyor...[0m
git status
echo.

:: Kullanıcıdan onay al
echo [93m2. Tum degisiklikler GitHub'a yuklenecek.[0m
set /p onay="Devam etmek istiyor musunuz? (E/H): "
if /i not "%onay%"=="E" (
    echo [91mIptal edildi.[0m
    pause
    exit /b
)

:: Değişiklikleri ekle
echo.
echo [92m3. Degisiklikler ekleniyor...[0m
git add .

:: Commit mesajı al
echo.
echo [93m4. Commit mesajinizi yazin:[0m
set /p commit_msg="Mesaj: "

if "%commit_msg%"=="" (
    set commit_msg=Proje guncellendi
)

git commit -m "%commit_msg%"

:: Push yap
echo.
echo [92m5. GitHub'a yukleniyor...[0m
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [92m========================================[0m
    echo [92m  BASARIYLA YUKLENDI![0m
    echo [92m========================================[0m
    echo.
    echo GitHub Pages 1-2 dakika icinde guncellenecek.
    echo Sitenizi kontrol edin:
    echo https://KULLANICI_ADINIZ.github.io/FukoLingo/
    echo.
) else (
    echo.
    echo [91m========================================[0m
    echo [91m  HATA OLUSTU![0m
    echo [91m========================================[0m
    echo.
    echo Hata mesajini okuyun ve GITHUB_YUKLEME_REHBERI.md
    echo dosyasindaki sorun giderme bolumune bakin.
    echo.
)

pause

