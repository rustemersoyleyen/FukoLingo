// FukoLingo - Gelişmiş Cümle Kurma Modülü (Gemini AI Destekli)

let sentenceData = {
    words: [],
    currentWord: 0,
    userAnswers: [],
    aiEnabled: false,
    isEvaluating: false
};

// Cümle kurma modülünü yükle
function loadSentenceBuilder(unit) {
    sentenceData.words = shuffleArray([...unit.words]);
    sentenceData.currentWord = 0;
    sentenceData.userAnswers = [];
    sentenceData.aiEnabled = GeminiConfig.isConfigured();
    
    const activityArea = document.getElementById('activityArea');
    activityArea.innerHTML = `
        <div class="sentence-builder">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="margin: 0; color: var(--text-dark);">
                    Cümle Kurma - ${unit.title}
                </h2>
                <div style="display: flex; align-items: center; gap: 10px;">
                    ${sentenceData.aiEnabled ? 
                        '<span style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 8px 15px; border-radius: 20px; font-size: 0.9rem; font-weight: 600;">🤖 AI Aktif</span>' : 
                        '<span style="background: #fbbf24; color: white; padding: 8px 15px; border-radius: 20px; font-size: 0.9rem; font-weight: 600;">⚡ Basit Mod</span>'
                    }
                </div>
            </div>
            
            <p style="text-align: center; color: var(--text-light); margin-bottom: 20px;">
                💬 ${sentenceData.aiEnabled ? 'AI ile cümleni değerlendir! Gramer, anlam ve kullanım kontrol edilir.' : 'Kelimeyi kullanarak anlamlı bir cümle kur!'}
            </p>
            
            <div style="text-align: center; margin-bottom: 25px;">
                <span style="font-size: 1.2rem; color: var(--text-dark); font-weight: 600;">
                    Kelime: <span id="sentenceNumber">1</span> / ${sentenceData.words.length}
                </span>
            </div>
            
            <div id="sentenceContent">
                <!-- Cümle içeriği JavaScript ile doldurulacak -->
            </div>
        </div>
    `;
    
    displaySentenceTask();
}

// Cümle görevini göster
function displaySentenceTask() {
    const word = sentenceData.words[sentenceData.currentWord];
    
    // Gelişmiş kelime bankası
    const subjects = ['I', 'You', 'He', 'She', 'We', 'They', 'My friend', 'My family'];
    const verbs = ['am', 'is', 'are', 'have', 'has', 'like', 'love', 'want', 'need', 'can', 'do', 'does'];
    const adjectives = ['very', 'really', 'so', 'too', 'quite'];
    const prepositions = ['in', 'on', 'at', 'with', 'to', 'for', 'from'];
    const others = ['the', 'a', 'an', 'my', 'your', 'every', 'day', 'today'];
    
    // Tüm kelimeleri birleştir ve karıştır
    const allWords = [word.english, ...subjects, ...verbs, ...adjectives, ...prepositions, ...others];
    const selectedWords = shuffleArray(allWords).slice(0, 16);
    
    const sentenceContent = document.getElementById('sentenceContent');
    sentenceContent.innerHTML = `
        <div class="sentence-task">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                        color: white; padding: 30px; border-radius: 15px; margin-bottom: 25px; position: relative;">
                <div style="font-size: 4rem; margin-bottom: 15px;">${word.image}</div>
                <h3 style="color: white; margin-bottom: 10px; font-size: 1.8rem;">${word.english}</h3>
                <p style="opacity: 0.9; font-size: 1.2rem; margin-bottom: 5px;">${word.pronunciation}</p>
                <p style="opacity: 0.95; font-size: 1.1rem;">${word.turkish}</p>
                <button class="btn" onclick="speak('${word.english}')" 
                        style="background: rgba(255,255,255,0.2); color: white; margin-top: 15px; border: 2px solid white;">
                    🔊 Dinle
                </button>
            </div>
            
            <div class="target-sentence" style="background: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
                <p style="font-size: 1rem; margin-bottom: 10px; color: var(--text-light); font-weight: 600;">📌 Örnek Cümle:</p>
                <p style="font-size: 1.3rem; font-weight: 600; color: var(--text-dark); margin-bottom: 8px;">"${word.example}"</p>
                <p style="font-size: 1.05rem; color: var(--text-light); font-style: italic;">"${word.exampleTr}"</p>
                <button class="btn btn-secondary" onclick="speak('${word.example}')" style="margin-top: 12px; font-size: 0.9rem;">
                    🔊 Örnek Cümleyi Dinle
                </button>
            </div>
        </div>
        
        <div class="word-bank" style="margin-bottom: 25px;">
            <h4 style="color: var(--text-dark); margin-bottom: 15px; font-size: 1.1rem;">💡 Kelime Bankası (Tıklayarak kullan):</h4>
            <div class="word-chips" style="display: flex; flex-wrap: wrap; gap: 10px;">
                ${selectedWords.map(w => 
                    `<span class="word-chip" onclick="addWordToSentence('${w}')" 
                           style="cursor: pointer; transition: transform 0.2s;">
                        ${w}
                    </span>`
                ).join('')}
            </div>
        </div>
        
        <div class="sentence-input">
            <label style="display: block; margin-bottom: 10px; color: var(--text-dark); font-weight: 600; font-size: 1.1rem;">
                ✍️ Cümleni Yaz:
            </label>
            <textarea id="userSentence" 
                      placeholder="Örnek: I ${word.english === 'computer' ? 'use my computer' : word.english === 'happy' ? 'am very happy' : 'love ' + word.english} every day."
                      style="font-size: 1.1rem; min-height: 100px;"></textarea>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; color: var(--text-light); font-size: 0.9rem;">
                <span id="wordCount">0 kelime</span>
                <span>💡 İpucu: En az 4 kelime kullan</span>
            </div>
        </div>
        
        <div style="text-align: center; display: flex; gap: 15px; justify-content: center; margin: 25px 0; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="checkSentenceAdvanced()" id="checkBtn">
                ${sentenceData.aiEnabled ? '🤖 AI ile Değerlendir' : '✅ Kontrol Et'}
            </button>
            <button class="btn btn-secondary" onclick="clearSentence()">
                🗑️ Temizle
            </button>
            ${sentenceData.aiEnabled ? 
                `<button class="btn" onclick="getAISuggestion()" style="background: linear-gradient(135deg, #f093fb, #f5576c); color: white;">
                    💡 AI'dan Öneri Al
                </button>` : ''
            }
        </div>
        
        <div id="sentenceFeedback"></div>
        
        <div style="text-align: center; margin-top: 25px;">
            <button class="btn btn-secondary" onclick="goBackToModeSelection()">
                ⬅️ Geri Dön
            </button>
        </div>
    `;
    
    // Kelime sayacını güncelle
    const textarea = document.getElementById('userSentence');
    textarea.addEventListener('input', function() {
        const words = this.value.trim().split(/\s+/).filter(w => w.length > 0);
        document.getElementById('wordCount').textContent = `${words.length} kelime`;
    });
    
    // Kelime numarasını güncelle
    document.getElementById('sentenceNumber').textContent = sentenceData.currentWord + 1;
}

// Kelimeyi cümleye ekle
function addWordToSentence(word) {
    const textarea = document.getElementById('userSentence');
    const currentText = textarea.value.trim();
    
    if (currentText && !currentText.endsWith(' ')) {
        textarea.value = currentText + ' ' + word + ' ';
    } else {
        textarea.value = currentText + word + ' ';
    }
    
    // Kelime sayacını güncelle
    const words = textarea.value.trim().split(/\s+/).filter(w => w.length > 0);
    document.getElementById('wordCount').textContent = `${words.length} kelime`;
    
    textarea.focus();
}

// Cümleyi temizle
function clearSentence() {
    document.getElementById('userSentence').value = '';
    document.getElementById('wordCount').textContent = '0 kelime';
    document.getElementById('sentenceFeedback').innerHTML = '';
}

// Gelişmiş cümle kontrolü (AI veya Basit)
async function checkSentenceAdvanced() {
    if (sentenceData.isEvaluating) {
        return; // Zaten değerlendirme yapılıyor
    }
    
    const userSentence = document.getElementById('userSentence').value.trim();
    const word = sentenceData.words[sentenceData.currentWord];
    const feedback = document.getElementById('sentenceFeedback');
    const checkBtn = document.getElementById('checkBtn');
    
    if (!userSentence) {
        feedback.className = 'quiz-feedback incorrect';
        feedback.innerHTML = '❌ Lütfen önce bir cümle yaz!';
        return;
    }
    
    // Buton durumunu değiştir
    sentenceData.isEvaluating = true;
    checkBtn.disabled = true;
    checkBtn.textContent = '⏳ Değerlendiriliyor...';
    
    feedback.className = 'quiz-feedback';
    feedback.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 2rem; margin-bottom: 10px;">⏳</div>
            <p>Cümlen ${sentenceData.aiEnabled ? 'AI tarafından' : ''} değerlendiriliyor...</p>
        </div>
    `;
    
    try {
        let evaluation;
        
        if (sentenceData.aiEnabled) {
            // AI ile değerlendir
            evaluation = await evaluateSentenceWithAI(userSentence, word.english, word.example);
            
            if (!evaluation) {
                // AI başarısız, basit kontrole geç
                evaluation = simpleEvaluation(userSentence, word);
                showFeedback(evaluation, userSentence, word, false);
            } else {
                showFeedback(evaluation, userSentence, word, true);
            }
        } else {
            // Basit değerlendirme
            evaluation = simpleEvaluation(userSentence, word);
            showFeedback(evaluation, userSentence, word, false);
        }
        
    } catch (error) {
        console.error('Evaluation error:', error);
        const evaluation = simpleEvaluation(userSentence, word);
        showFeedback(evaluation, userSentence, word, false);
    } finally {
        // Butonu eski haline getir
        sentenceData.isEvaluating = false;
        checkBtn.disabled = false;
        checkBtn.textContent = sentenceData.aiEnabled ? '🤖 AI ile Değerlendir' : '✅ Kontrol Et';
    }
}

// Basit değerlendirme (AI olmadan)
function simpleEvaluation(sentence, word) {
    const sentenceLower = sentence.toLowerCase();
    const wordUsed = sentenceLower.includes(word.english.toLowerCase());
    const words = sentence.split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;
    const isLongEnough = wordCount >= 4;
    const startsWithCapital = /^[A-Z]/.test(sentence);
    const endsWithPunctuation = /[.!?]$/.test(sentence);
    
    let score = 0;
    let feedback = '';
    let improvements = [];
    let hasGrammarError = false;
    
    // Yaygın gramer hatalarını kontrol et
    const commonErrors = [
        // Zaman uyumu hataları (Tense errors)
        { pattern: /\b(am|is|are)\s+(use|have|want|need|go|like|love|eat|drink|play|read|write|work|study)\b/i, error: 'ZAMAN HATASI: be + ana fiil yanlış (örn: "am use" → "use" veya "am using" olmalı)' },
        { pattern: /\b(I|you|we|they)\s+(using|going|playing|reading|working)\b/i, error: 'ZAMAN HATASI: yardımcı fiil eksik (örn: "I using" → "I am using" olmalı)' },
        { pattern: /\b(he|she|it)\s+(use|have|go|like|love|want|need|eat|play)\s/i, error: 'ZAMAN HATASI: 3. tekil şahıs -s/-es takısı eksik (örn: "he use" → "he uses")' },
        
        // Özne-yardımcı fiil uyumsuzluğu
        { pattern: /\b(I|you|we|they)\s+is\b/i, error: '"is" sadece he/she/it ile kullanılır (I am, you are, they are)' },
        { pattern: /\b(he|she|it)\s+(am|are)\b/i, error: 'he/she/it ile "is" kullanılmalı (he is, she is, it is)' },
        { pattern: /\b(I)\s+(is|are)\b/i, error: 'I öznesinde "am" kullanılır (I am)' },
        
        // Yardımcı fiil sırası
        { pattern: /\b(have|has)\s+(am|is|are)\b/i, error: 'Yardımcı fiil sırası yanlış' },
        
        // Kelime sırası hataları
        { pattern: /\breally\s+(am|is|are)\s+\w+\s+(love|like|want)/i, error: 'Kelime sırası yanlış (örn: "really am ... love" → "really love")' },
        { pattern: /\b(am|is|are)\s+\w+\s+(love|like|want|use|need)\b/i, error: 'Kelime sırası veya fiil kullanımı yanlış' }
    ];
    
    for (const errorCheck of commonErrors) {
        if (errorCheck.pattern.test(sentence)) {
            hasGrammarError = true;
            improvements.push(errorCheck.error);
            score -= 20;
            break;
        }
    }
    
    // Kelime tekrarı kontrolü (aynı kelime 3+ kez)
    const wordCounts = {};
    words.forEach(w => {
        const lower = w.toLowerCase();
        wordCounts[lower] = (wordCounts[lower] || 0) + 1;
    });
    for (const [w, count] of Object.entries(wordCounts)) {
        if (count >= 3 && w.length > 2) {
            hasGrammarError = true;
            improvements.push(`"${w}" kelimesi çok tekrar ediyor`);
            score -= 15;
        }
    }
    
    // Temel İngilizce kelime kontrolü (çok fazla anlamsız karakter dizisi var mı)
    const suspiciousWords = words.filter(w => {
        return w.length > 2 && !/^[a-z]+$/i.test(w) && !/^[0-9]+$/.test(w) && !/[.!?,;:]/.test(w);
    });
    if (suspiciousWords.length > wordCount * 0.3) {
        hasGrammarError = true;
        improvements.push('Bazı kelimeler İngilizce değil gibi görünüyor');
        score -= 20;
    }
    
    // Puan hesaplama
    if (wordUsed && !hasGrammarError) score += 40;
    if (isLongEnough) score += 25;
    if (startsWithCapital) score += 10;
    if (endsWithPunctuation) score += 10;
    if (!hasGrammarError && wordUsed && isLongEnough) score += 15; // Bonus
    
    // Geri bildirim
    if (!wordUsed) {
        feedback = `"${word.english}" kelimesini kullanmayı unutma!`;
        improvements.push(`Cümlende "${word.english}" kelimesini kullan`);
    } else if (hasGrammarError) {
        feedback = 'Cümlende gramer hatası var. Yukarıdaki önerilere bak.';
    } else if (!isLongEnough) {
        feedback = 'Cümlen biraz daha uzun olmalı. En az 4 kelime kullan.';
        improvements.push('Daha uzun bir cümle kur');
    } else {
        feedback = 'Güzel! Cümlen temel kurallara uygun görünüyor.';
    }
    
    if (!startsWithCapital) {
        improvements.push('Cümleye büyük harfle başla');
        score -= 5;
    }
    if (!endsWithPunctuation) {
        improvements.push('Cümleyi noktalama işaretiyle bitir (. ! ?)');
        score -= 5;
    }
    
    // Minimum 0, maksimum 100
    score = Math.max(0, Math.min(100, score));
    
    return {
        isCorrect: score >= 75 && !hasGrammarError,
        score: score,
        grammarCorrect: !hasGrammarError && startsWithCapital && endsWithPunctuation,
        usesTargetWord: wordUsed,
        turkishTranslation: '', // Basit modda çeviri yok
        feedback: feedback,
        improvements: improvements,
        correctedSentence: ''
    };
}

// Geri bildirimi göster
function showFeedback(evaluation, userSentence, word, isAI) {
    const feedback = document.getElementById('sentenceFeedback');
    
    if (evaluation.isCorrect) {
        // Başarılı!
        feedback.className = 'quiz-feedback correct';
        feedback.innerHTML = `
            <div style="padding: 25px;">
                <div style="font-size: 3rem; margin-bottom: 15px;">
                    ${evaluation.score >= 90 ? '🌟' : evaluation.score >= 80 ? '⭐' : '✅'}
                </div>
                <h3 style="color: var(--success-color); margin-bottom: 15px; font-size: 1.5rem;">
                    ${evaluation.score >= 90 ? 'Mükemmel!' : evaluation.score >= 80 ? 'Harika!' : 'Çok İyi!'}
                </h3>
                <p style="font-size: 1.1rem; margin-bottom: 15px; color: var(--text-dark);">
                    ${evaluation.feedback}
                </p>
                
                <div style="background: white; padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid var(--success-color);">
                    <p style="font-weight: 600; color: var(--primary-color); margin-bottom: 8px; font-size: 1rem;">
                        🇬🇧 Cümlen:
                    </p>
                    <p style="font-size: 1.2rem; margin-bottom: ${isAI && evaluation.turkishTranslation ? '15px' : '0'};">
                        "${userSentence}"
                    </p>
                    ${isAI && evaluation.turkishTranslation ? `
                        <p style="font-weight: 600; color: var(--secondary-color); margin-bottom: 8px; font-size: 1rem;">
                            🇹🇷 Türkçe Çeviri:
                        </p>
                        <p style="font-size: 1.1rem; color: var(--text-light); font-style: italic;">
                            "${evaluation.turkishTranslation}"
                        </p>
                    ` : ''}
                </div>
                
                ${evaluation.correctedSentence && evaluation.correctedSentence !== userSentence ? `
                    <div style="background: #fff3cd; padding: 15px; border-radius: 10px; margin: 15px 0; border-left: 4px solid #ffc107;">
                        <p style="font-weight: 600; margin-bottom: 8px;">💡 Daha İyi Versiyon:</p>
                        <p style="font-size: 1.05rem;">"${evaluation.correctedSentence}"</p>
                    </div>
                ` : ''}
                
                <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-top: 20px;">
                    <button class="btn btn-primary" onclick="speak('${userSentence.replace(/'/g, "\\'")}')" style="font-size: 1rem;">
                        🔊 Cümleni Dinle
                    </button>
                    <button class="btn btn-secondary" onclick="nextSentence()" style="font-size: 1rem;">
                        ${sentenceData.currentWord < sentenceData.words.length - 1 ? 'Sonraki Kelime ➡️' : 'Tamamla 🎉'}
                    </button>
                </div>
                
                <p style="margin-top: 20px; color: var(--success-color); font-weight: 600; font-size: 1.1rem;">
                    +${Math.round(evaluation.score / 5)} puan kazandın! 🎉
                </p>
            </div>
        `;
        
        // Puanı kaydet
        addPointsWithAnimation(Math.round(evaluation.score / 5));
        sentenceData.userAnswers.push({
            word: word.english,
            sentence: userSentence,
            translation: evaluation.turkishTranslation || '',
            score: evaluation.score
        });
        
        // Kelimeyi öğrenildi say
        StorageManager.markWordLearned(currentUnit.id, sentenceData.currentWord);
        updateStats();
        
    } else {
        // Hata var
        feedback.className = 'quiz-feedback incorrect';
        feedback.innerHTML = `
            <div style="padding: 25px;">
                <div style="font-size: 3rem; margin-bottom: 15px;">💭</div>
                <h3 style="color: var(--warning-color); margin-bottom: 15px; font-size: 1.5rem;">
                    Tekrar Dene!
                </h3>
                <p style="font-size: 1.1rem; margin-bottom: 20px;">
                    ${evaluation.feedback}
                </p>
                
                ${evaluation.improvements && evaluation.improvements.length > 0 ? `
                    <div style="background: #fff3cd; padding: 20px; border-radius: 12px; margin: 20px 0; text-align: left;">
                        <p style="font-weight: 600; margin-bottom: 12px; font-size: 1.1rem;">💡 İyileştirme Önerileri:</p>
                        <ul style="margin-left: 20px; line-height: 2;">
                            ${evaluation.improvements.map(imp => `<li>${imp}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${evaluation.correctedSentence ? `
                    <div style="background: #d4edda; padding: 20px; border-radius: 12px; margin: 20px 0; border-left: 4px solid var(--success-color);">
                        <p style="font-weight: 600; margin-bottom: 10px; font-size: 1.1rem;">✅ Doğru Örnek:</p>
                        <p style="font-size: 1.15rem;">"${evaluation.correctedSentence}"</p>
                    </div>
                ` : ''}
                
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary" onclick="document.getElementById('userSentence').focus()">
                        ✍️ Tekrar Dene
                    </button>
                </div>
            </div>
        `;
    }
}

// AI'dan öneri al
async function getAISuggestion() {
    const word = sentenceData.words[sentenceData.currentWord];
    const feedback = document.getElementById('sentenceFeedback');
    
    feedback.className = 'quiz-feedback';
    feedback.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="font-size: 2rem; margin-bottom: 10px;">🤖</div>
            <p>AI'dan örnek cümleler getiriliyor...</p>
        </div>
    `;
    
    const examples = await generateExampleSentences(word.english, 3);
    
    if (examples.length > 0) {
        feedback.className = 'quiz-feedback';
        feedback.innerHTML = `
            <div style="padding: 25px;">
                <h3 style="color: var(--primary-color); margin-bottom: 20px;">
                    💡 AI'dan Örnek Cümleler
                </h3>
                ${examples.map((ex, i) => `
                    <div style="background: white; padding: 18px; border-radius: 12px; margin-bottom: 15px; border-left: 4px solid var(--primary-color);">
                        <p style="font-weight: 600; margin-bottom: 8px;">Örnek ${i + 1}:</p>
                        <p style="font-size: 1.1rem; margin-bottom: 8px;">"${ex.english}"</p>
                        <p style="color: var(--text-light); font-style: italic;">"${ex.turkish}"</p>
                        <button class="btn btn-secondary" onclick="speak('${ex.english.replace(/'/g, "\\'")}')" style="margin-top: 10px; font-size: 0.85rem;">
                            🔊 Dinle
                        </button>
                    </div>
                `).join('')}
                <p style="margin-top: 15px; color: var(--text-light); font-size: 0.95rem;">
                    💡 Bu örneklerden ilham alarak kendi cümleni kurabilirsin!
                </p>
            </div>
        `;
    } else {
        feedback.className = 'quiz-feedback incorrect';
        feedback.innerHTML = `
            <div style="padding: 20px;">
                <p>❌ Şu anda AI önerisi alınamıyor. Lütfen tekrar dene.</p>
            </div>
        `;
    }
}

// Sonraki kelime
function nextSentence() {
    if (sentenceData.currentWord < sentenceData.words.length - 1) {
        sentenceData.currentWord++;
        displaySentenceTask();
    } else {
        // Tamamlandı
        finishSentenceBuilder();
    }
}

// Cümle kurma modülünü bitir
function finishSentenceBuilder() {
    const totalScore = sentenceData.userAnswers.reduce((sum, ans) => sum + (ans.score || 80), 0);
    const avgScore = Math.round(totalScore / sentenceData.userAnswers.length);
    const bonusPoints = Math.round(avgScore / 5);
    
    addPointsWithAnimation(bonusPoints);
    StorageManager.saveProgress(currentUnit.id, sentenceData.userAnswers.length);
    
    const sentenceContent = document.getElementById('sentenceContent');
    sentenceContent.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div style="font-size: 5rem; margin-bottom: 20px;">🎉</div>
            <h2 style="color: var(--primary-color); margin-bottom: 20px;">
                Muhteşem! Tüm Kelimeleri Tamamladın!
            </h2>
            <div style="font-size: 1.3rem; color: var(--text-dark); margin-bottom: 30px;">
                <p><strong>${sentenceData.userAnswers.length}</strong> cümle kurdun!</p>
                <p style="color: var(--success-color); font-weight: 600;">
                    Ortalama Puan: ${avgScore}/100
                </p>
                <p style="color: var(--accent-color); font-weight: 600;">
                    +${bonusPoints} bonus puan kazandın!
                </p>
            </div>
            
            <div style="background: #f8fafc; padding: 25px; border-radius: 15px; margin-bottom: 30px; text-align: left; max-height: 400px; overflow-y: auto;">
                <h3 style="margin-bottom: 15px; color: var(--text-dark);">📝 Kurduğun Cümleler:</h3>
                ${sentenceData.userAnswers.map((answer, index) => `
                    <div style="padding: 20px; background: white; border-radius: 10px; margin-bottom: 15px; box-shadow: var(--shadow);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                            <p style="font-weight: 600; color: var(--primary-color);">
                                ${index + 1}. ${answer.word}
                            </p>
                            ${answer.score ? `
                                <span style="background: ${answer.score >= 90 ? '#10b981' : answer.score >= 70 ? '#fbbf24' : '#f59e0b'}; 
                                             color: white; padding: 5px 12px; border-radius: 15px; font-size: 0.85rem; font-weight: 600;">
                                    ${answer.score}/100
                                </span>
                            ` : ''}
                        </div>
                        <p style="font-size: 1.05rem; margin-bottom: ${answer.translation ? '10px' : '0'};">
                            🇬🇧 "${answer.sentence}"
                        </p>
                        ${answer.translation ? `
                            <p style="font-size: 0.95rem; color: var(--text-light); font-style: italic;">
                                🇹🇷 "${answer.translation}"
                            </p>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
            
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button class="btn btn-primary" onclick="loadSentenceBuilder(currentUnit)">
                    🔄 Tekrar Dene
                </button>
                <button class="btn btn-secondary" onclick="goBackToModeSelection()">
                    ⬅️ Geri Dön
                </button>
            </div>
        </div>
    `;
}
