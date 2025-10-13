# 🖼️ Görseller Klasörü

Bu klasör, kelime görsellerini saklamak için kullanılır.

## 📁 Kullanım

### Emoji Kullanımı (Varsayılan)
Şu anda projede emojiler kullanılmaktadır. Herhangi bir dosya eklemenize gerek yoktur.

### Kendi Görsellerinizi Eklemek

1. Görsellerinizi bu klasöre ekleyin
2. Dosya isimlendirme önerisi: `kelime-adi.png` veya `kelime-adi.jpg`
3. `js/data.js` dosyasında ilgili kelimenin `image` alanını güncelleyin

Örnek:
```javascript
{
    english: "apple",
    turkish: "elma",
    image: "images/apple.png"  // Emoji yerine
}
```

## 🎨 AI ile Görsel Oluşturma

### DALL-E 3 ile Görsel Oluşturma
```
Prompt: "Simple, flat design illustration of a [KELIME] 
for children's English learning, colorful, white background, 
educational style, cute and friendly"
```

### Midjourney ile Görsel Oluşturma
```
/imagine simple children's illustration of [KELIME] 
--style cute --ar 1:1 --v 5
```

### Stable Diffusion ile Görsel Oluşturma
```
Prompt: "children's educational illustration, [KELIME], 
simple, colorful, flat design, white background"
Negative: "complex, realistic, dark, scary"
```

## 📐 Görsel Özellikleri

- **Format**: PNG (şeffaf arka plan) veya JPG
- **Boyut**: 500x500px veya 1000x1000px (kare)
- **Stil**: Basit, renkli, çocuk dostu
- **Arka plan**: Tercihen beyaz veya şeffaf

## 🌐 Ücretsiz Görsel Kaynakları

1. **Unsplash**: https://unsplash.com
2. **Pexels**: https://pexels.com
3. **Pixabay**: https://pixabay.com
4. **Flaticon**: https://flaticon.com (ikonlar)
5. **FreePik**: https://freepik.com

## ⚖️ Lisans Uyarısı

Görselleri kullanırken lisans şartlarına dikkat edin. Eğitim amaçlı kullanım için:
- Creative Commons lisanslı görseller kullanın
- Kendi oluşturduğunuz görselleri kullanın
- AI ile oluşturduğunuz görselleri kullanın (kullanım şartlarını kontrol edin)
