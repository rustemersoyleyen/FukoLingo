// FukoLingo - Gemini API Yapılandırması
// KULLANIM: Bu dosyayı kopyalayıp gemini-config.js olarak kaydedin ve kendi API key'inizi yazın

const GeminiConfig = {
    // API Key'inizi buraya yazın
    // Nasıl alınır: https://makersuite.google.com/app/apikey
    apiKey: 'BURAYA_API_KEY_YAZIN', // API key'inizi buraya yazın
    
    // API Endpoint
    apiEndpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
    
    // API kullanılabilir mi kontrol et
    isConfigured: function() {
        return this.apiKey !== 'BURAYA_API_KEY_YAZIN' && this.apiKey.length > 20;
    },
    
    // Hata mesajları
    messages: {
        noApiKey: '⚠️ Gemini API key yapılandırılmamış. Basit mod çalışıyor.',
        apiError: '❌ API bağlantı hatası. Basit mod aktif.',
        networkError: '🌐 İnternet bağlantısı gerekli.'
    }
};

// Gemini API'ye istek gönder
async function callGeminiAPI(prompt) {
    // API key kontrolü
    if (!GeminiConfig.isConfigured()) {
        console.warn('Gemini API key yapılandırılmamış. Basit kontrol kullanılıyor.');
        return null;
    }
    
    try {
        const response = await fetch(
            `${GeminiConfig.apiEndpoint}?key=${GeminiConfig.apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: prompt
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 1024,
                    }
                })
            }
        );
        
        const data = await response.json();
        
        // Debug: API yanıtını console'a yazdır
        console.log('Gemini API Response:', data);
        
        if (!response.ok) {
            console.error('API Error Response:', data);
            throw new Error(`API Error: ${response.status} - ${JSON.stringify(data)}`);
        }
        
        // Farklı yanıt formatlarını kontrol et
        if (data.candidates && data.candidates.length > 0) {
            // Format 1: candidates[0].content.parts[0].text
            if (data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
                const text = data.candidates[0].content.parts[0].text;
                return text.trim();
            }
            // Format 2: candidates[0].text (bazı modellerde)
            if (data.candidates[0].text) {
                return data.candidates[0].text.trim();
            }
        }
        
        // Format 3: Direkt text alanı (eski API)
        if (data.text) {
            return data.text.trim();
        }
        
        // Yanıt formatı tanınmadı
        console.error('Unexpected API response format:', data);
        return null;
        
    } catch (error) {
        console.error('Gemini API Error:', error);
        console.error('Error details:', error.message);
        return null;
    }
}

// Cümleyi Gemini ile değerlendir
async function evaluateSentenceWithAI(sentence, targetWord, exampleSentence) {
    const prompt = `Sen çok sıkı ve titiz bir İngilizce öğretmenisin. 6. sınıf öğrencisinin yazdığı cümleyi ÇOK DİKKATLİ değerlendir.

Hedef Kelime: "${targetWord}"
Öğrencinin Cümlesi: "${sentence}"
Örnek Cümle: "${exampleSentence}"

ÖNEMLİ: Cümle gramer açısından TAMAMEN DOĞRU olmalı. Küçük bir hata bile varsa isCorrect=false olmalı!

Lütfen aşağıdaki formatta JSON yanıtı ver:

{
  "isCorrect": true/false,
  "score": 0-100 (puan),
  "grammarCorrect": true/false,
  "meaningCorrect": true/false,
  "usesTargetWord": true/false,
  "turkishTranslation": "Türkçe çeviri",
  "feedback": "Geri bildirim mesajı",
  "improvements": ["iyileştirme önerisi 1", "iyileştirme önerisi 2"],
  "correctedSentence": "Düzeltilmiş cümle (eğer hata varsa)"
}

KATÍ DEĞERLENDİRME KRİTERLERİ:
1. GRAMER: Özne-yüklem uyumu doğru mu? Fiil çekimi doğru mu? Kelime sırası doğru mu?
2. ZAMAN UYUMU (TENSE): Fiil zamanı doğru kullanılmış mı?
   - Present Simple: I use, he uses (düzenli eylemler)
   - Present Continuous: I am using, he is using (şu an devam eden)
   - "I am use" → YANLIŞ! (am + base verb kullanılmaz)
   - "I using" → YANLIŞ! (am/is/are eksik)
3. HEDEF KELİME: "${targetWord}" kelimesi cümlede doğru kullanılmış mı?
4. ANLAM: Cümle mantıklı ve anlamlı mı? Saçma kelimeler bir arada mı?
5. YAZIM: Büyük harf, noktalama doğru mu?

ZAMAN UYUMU ÖRNEKLERİ:
✅ DOĞRU:
- "I use my computer." (Present Simple)
- "I am using my computer." (Present Continuous)  
- "He uses his computer." (3. tekil şahıs -s takısı)
- "She is using her computer." (is + verb+ing)

❌ YANLIŞ:
- "I am use computer" → YANLIŞ (am + use birlikte olmaz, "I use" veya "I am using" olmalı)
- "I using computer" → YANLIŞ (am eksik, "I am using" olmalı)
- "He use computer" → YANLIŞ (-s takısı eksik, "He uses" olmalı)
- "She are using" → YANLIŞ (özne-yardımcı fiil uyumsuz, "She is using" olmalı)

DİĞER GRAMER ÖRNEKLERİ:
- "I really am ingredients love" → YANLIŞ (Kelime sırası tamamen yanlış, anlamsız)
- "I love my computer." → DOĞRU (Gramer ve anlam doğru)

isCorrect=true SADECE ve SADECE gramer, anlam ve yazım TAMAMEN DOĞRUYSA!
Küçük bir hata bile varsa isCorrect=false yap!

Sadece JSON yanıtı ver, başka açıklama ekleme.`;

    const response = await callGeminiAPI(prompt);
    
    if (!response) {
        return null;
    }
    
    try {
        // JSON'u parse et
        const jsonMatch = response.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            const evaluation = JSON.parse(jsonMatch[0]);
            return evaluation;
        }
        return null;
    } catch (error) {
        console.error('JSON Parse Error:', error);
        return null;
    }
}

// Kelime için örnek cümleler oluştur (AI destekli)
async function generateExampleSentences(word, count = 3) {
    const prompt = `"${word}" kelimesi için 6. sınıf seviyesinde ${count} farklı örnek cümle oluştur.

Format:
1. [İngilizce cümle] | [Türkçe çeviri]
2. [İngilizce cümle] | [Türkçe çeviri]
3. [İngilizce cümle] | [Türkçe çeviri]

Kurallar:
- Basit ve anlaşılır cümleler
- Günlük hayattan örnekler
- Her cümle farklı bağlamda olsun
- Gramer doğru olsun`;

    const response = await callGeminiAPI(prompt);
    
    if (!response) {
        return [];
    }
    
    // Cümleleri parse et
    const lines = response.split('\n').filter(line => line.trim());
    const sentences = [];
    
    for (const line of lines) {
        const match = line.match(/\d+\.\s*(.+?)\s*\|\s*(.+)/);
        if (match) {
            sentences.push({
                english: match[1].trim(),
                turkish: match[2].trim()
            });
        }
    }
    
    return sentences;
}
