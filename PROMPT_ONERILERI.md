# 🎯 Gemini AI Prompt İyileştirmeleri

## ✅ GÜNCELLEME YAPILDI! (Son versiyon)

### Mevcut Sorun (Çözüldü)

Cümle: "I ussualy am life my family"
→ ESKİ Sistem: "Harika! +17 puan" ❌

**Hatalar:**
- Yazım: "ussualy" → "usually"
- Zaman uyumu: "am life" → anlamsız (am + base verb yanlış)
- Gramer: "am life" anlamsız
- Yapı: Cümle mantıklı değil

### Yeni Prompt Özellikleri

✅ **Zaman uyumu kontrolü eklendi:**
- Present Simple vs Present Continuous
- be + base verb hataları
- 3. tekil şahıs -s/-es takısı
- Yardımcı fiil eksikliği

✅ **Detaylı örnekler:**
- ❌ "I am use" → YANLIŞ
- ✅ "I use" veya "I am using" → DOĞRU

✅ **Basit mod da güçlendirildi:**
- Zaman hatası regex'leri
- Özne-fiil uyumu kontrolü
- 3. tekil şahıs kontrolü

---

## 🔧 Geliştirilmiş Prompt v2

### Seçenek 1: Çok Katı Prompt (Önerilen)

```javascript
const prompt = `Sen çok deneyimli ve AŞIRI TİTİZ bir İngilizce öğretmenisin. 6. sınıf öğrencisinin cümlesini değerlendiriyorsun.

HEDEF KELİME: "${targetWord}"
ÖĞRENCİ CÜMLESİ: "${sentence}"
ÖRNEK CÜMLE: "${exampleSentence}"

⚠️ KRİTİK KURAL: Cümle MÜKEMMEL olmalı! En ufak hata bile varsa isCorrect=false!

JSON FORMAT (SADECE JSON, başka hiçbir şey yazma):
{
  "isCorrect": true/false,
  "score": 0-100,
  "grammarCorrect": true/false,
  "meaningCorrect": true/false,
  "usesTargetWord": true/false,
  "turkishTranslation": "Türkçe çeviri",
  "feedback": "Geri bildirim",
  "improvements": ["öneri 1", "öneri 2", "öneri 3"],
  "correctedSentence": "Düzeltilmiş cümle"
}

🔍 DETAYLI KONTROL LİSTESİ:

1. YAZIM KONTROLÜ:
   - Tüm kelimeler doğru yazılmış mı?
   - "ussualy" gibi yazım hataları var mı?
   - Büyük/küçük harf kullanımı doğru mu?

2. GRAMER KONTROLÜ:
   - Özne + fiil uyumu doğru mu?
   - Fiil çekimi doğru mu?
   - Yardımcı fiil kullanımı doğru mu?
   - "am life", "is have" gibi yanlış kombinasyonlar var mı?

3. KELİME SIRASI:
   - İngilizce kelime sırası doğru mu?
   - "really am ... love" gibi yanlış sıralar var mı?

4. ANLAM KONTROLÜ:
   - Cümle mantıklı mı?
   - Kelimeler anlamlı bir şekilde bir arada mı?
   - "I am life my family" gibi anlamsız yapılar yok mu?

5. HEDEF KELİME:
   - "${targetWord}" kelimesi kullanılmış mı?
   - Doğru bağlamda mı kullanılmış?

6. NOKTALAMA:
   - Cümle büyük harfle başlıyor mu?
   - Cümle noktalama işaretiyle bitiyor mu? (. ! ?)

❌ YANLIŞ ÖRNEKLER (isCorrect=false):
- "I ussualy am life my family" → Yazım hatası + anlamsız gramer
- "I really am ingredients love" → Kelime sırası yanlış + anlamsız
- "I am use computer" → "am use" yanlış kombinasyon
- "computer computer computer" → Anlamsız tekrar
- "I love computer" → Nokta yok (büyük harf + nokta şart!)

✅ DOĞRU ÖRNEKLER (isCorrect=true):
- "I love my computer." → Mükemmel!
- "I use my computer every day." → Mükemmel!
- "My family is very important to me." → Mükemmel!

🎯 PUANLAMA:
- 90-100: Mükemmel (gramer, yazım, anlam, noktalama hepsi doğru)
- 70-89: İyi (1-2 küçük hata)
- 50-69: Orta (birkaç hata)
- 0-49: Zayıf (çok hata var)

⚠️ ÖNEMLI: 
- isCorrect=true SADECE score >= 85 ve SIFIR GRAMER HATASI varsa!
- Yazım hatası varsa: isCorrect=false
- Anlamsız cümle: isCorrect=false
- Kelime sırası yanlış: isCorrect=false
- Noktalama eksik: score -10

SADECE JSON yanıtı ver, başka hiçbir şey yazma!`;
```

---

### Seçenek 2: Örneklerle Öğreten Prompt

```javascript
const prompt = `Sen bir İngilizce öğretmenisin. Öğrenci cümlesini değerlendir.

ÖĞRENCİ: "${sentence}"
HEDEF: "${targetWord}"
ÖRNEK: "${exampleSentence}"

SADECE JSON yanıtı ver:

{
  "isCorrect": true/false,
  "score": 0-100,
  "grammarCorrect": true/false,
  "meaningCorrect": true/false,
  "usesTargetWord": true/false,
  "turkishTranslation": "çeviri",
  "feedback": "mesaj",
  "improvements": ["öneri1", "öneri2"],
  "correctedSentence": "düzeltilmiş"
}

İŞTE DOĞRU DEĞERLENDİRME ÖRNEKLERİ:

ÖRNEK 1:
Öğrenci: "I ussualy am life my family"
→ isCorrect: false
→ score: 25
→ grammarCorrect: false
→ meaningCorrect: false
→ feedback: "Cümlede birçok hata var"
→ improvements: ["ussualy → usually (yazım)", "am life anlamsız", "Doğru: I usually love my family"]
→ correctedSentence: "I usually love my family."

ÖRNEK 2:
Öğrenci: "I am use computer"
→ isCorrect: false
→ score: 40
→ grammarCorrect: false
→ feedback: "Gramer hatası"
→ improvements: ["am + use yanlış", "I use veya I am using olmalı"]
→ correctedSentence: "I use my computer."

ÖRNEK 3:
Öğrenci: "I love my family."
→ isCorrect: true
→ score: 100
→ grammarCorrect: true
→ meaningCorrect: true
→ feedback: "Mükemmel!"

ŞİMDİ BU ÖĞRENCİNİN CÜMLESİNİ DEĞERLENDİR:
"${sentence}"

SADECE JSON!`;
```

---

### Seçenek 3: Adım Adım Analiz Prompt

```javascript
const prompt = `İngilizce öğretmeni olarak cümleyi analiz et.

CÜMLE: "${sentence}"
HEDEF KELİME: "${targetWord}"

ADIM ADIM KONTROL ET:

1. YAZIM:
   - Her kelime doğru yazılmış mı?
   - Varsa yazım hatalarını listele

2. GRAMER:
   - Özne-fiil uyumu: Doğru mu?
   - Fiil kombinasyonları: Doğru mu?
   - Kelime sırası: Doğru mu?
   - Varsa hataları listele

3. ANLAM:
   - Cümle mantıklı mı?
   - Kelimeler anlamlı bir yapı oluşturuyor mu?

4. HEDEF KELİME:
   - "${targetWord}" kullanılmış mı?
   - Doğru kullanılmış mı?

5. NOKTALAMA:
   - Büyük harf: Var mı?
   - Nokta: Var mı?

SONUÇ:
- Tüm adımlar ✓ → isCorrect: true, score: 90-100
- 1-2 hata → isCorrect: false, score: 60-80
- 3+ hata → isCorrect: false, score: 0-50

JSON formatında yanıt ver:
{
  "isCorrect": true/false,
  "score": 0-100,
  "grammarCorrect": true/false,
  "meaningCorrect": true/false,
  "usesTargetWord": true/false,
  "turkishTranslation": "türkçe",
  "feedback": "açıklama",
  "improvements": ["hata1", "hata2"],
  "correctedSentence": "doğrusu"
}`;
```

---

## 🎯 Hangisini Kullanmalı?

| Prompt | Avantaj | Dezavantaj |
|--------|---------|------------|
| **Seçenek 1** | Çok detaylı, örnekli | Uzun (token kullanımı) |
| **Seçenek 2** | Örneklerle öğretir | Orta uzunluk |
| **Seçenek 3** | Adım adım mantık | Daha kısa |

**ÖNERİM: Seçenek 1** (En sıkı ve detaylı)

---

## 🔧 Basit Mod İyileştirmesi

Basit mod için de ekstra kontroller:

```javascript
// Yazım hatası kontrolü ekle
const commonMisspellings = {
    'ussualy': 'usually',
    'usualy': 'usually',
    'becouse': 'because',
    'thier': 'their',
    'recieve': 'receive'
};

for (const [wrong, correct] of Object.entries(commonMisspellings)) {
    if (sentenceLower.includes(wrong)) {
        hasGrammarError = true;
        improvements.push(`Yazım hatası: "${wrong}" → "${correct}"`);
        score -= 25;
    }
}

// Anlamsız kombinasyonlar
const meaninglessPatterns = [
    /\b(am|is|are)\s+(life|love|like)\s+(my|your|our)/i,
    /\blife\s+(my|your|his|her)/i,
    /\breally\s+(am|is|are)\s+\w+\s+(am|is|are)/i
];

for (const pattern of meaninglessPatterns) {
    if (pattern.test(sentence)) {
        hasGrammarError = true;
        improvements.push('Cümle yapısı mantıklı değil');
        score -= 30;
        break;
    }
}
```

---

## 🧪 Test Senaryoları

Güncelleme sonrası test edin:

```
❌ "I ussualy am life my family"
→ Beklenen: Yazım + gramer hatası, score < 30

❌ "I really am ingredients love"
→ Beklenen: Anlamsız yapı hatası, score < 30

❌ "I am use computer"
→ Beklenen: Gramer hatası, score < 40

✅ "I love my family."
→ Beklenen: Mükemmel, score 95-100
```

---

## 📝 Uygulama

Hangi prompt'u kullanmak istersiniz?

1. Ben **Seçenek 1**'i hemen uygulayayım
2. Siz başka bir prompt yazın, ben uygularım
3. Seçenek 2 veya 3'ü kullanmamı isterseniz söyleyin

Söyleyin, hemen güncelleyelim! 🚀
