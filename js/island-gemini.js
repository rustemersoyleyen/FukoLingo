// FukoLingo - Kelime Adası Macerası - Gemini AI Entegrasyonu

const IslandGemini = {
    // Kelime için ipucu üret
    async generateHint(word, context = 'general') {
        if (!GeminiConfig.isConfigured()) {
            // AI olmadan basit ipuçları
            return this.getFallbackHint(word);
        }
        
        const prompt = `Sen 6. sınıf İngilizce öğretmenisin. 

Kelime: "${word}"
Kategori: ${context}

Lütfen bu kelime için:
1. Kısa ve eğlenceli bir ipucu (1 cümle, Türkçe)
2. Basit bir örnek cümle (İngilizce)
3. Türkçe çeviri

JSON formatında yanıt ver:
{
  "hint": "ipucu metni",
  "example": "örnek cümle",
  "translation": "türkçe çeviri"
}

Sadece JSON yanıtı ver, başka açıklama ekleme.`;

        try {
            const response = await callGeminiAPI(prompt);
            if (response) {
                // JSON parse et
                const jsonMatch = response.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    return JSON.parse(jsonMatch[0]);
                }
            }
        } catch (error) {
            console.error('Hint generation error:', error);
        }
        
        return this.getFallbackHint(word);
    },
    
    // AI olmadan basit ipuçları
    getFallbackHint(word) {
        const hints = {
            // UNIT 1 - LIFE
            'life': { hint: 'Hayat, yaşam - sen de yaşıyorsun!', example: 'I love my life.', translation: 'hayat' },
            'music': { hint: 'Sevdiğin şarkılar ve melodiler', example: 'I love listening to music.', translation: 'müzik' },
            'sport': { hint: 'Futbol, basketbol gibi fiziksel aktiviteler', example: 'My favorite sport is football.', translation: 'spor' },
            'book': { hint: 'Okumayı seviyorsan bu senin için', example: 'I read a book every night.', translation: 'kitap' },
            'hobby': { hint: 'Boş zamanında yaptığın eğlenceli şeyler', example: 'My hobby is drawing.', translation: 'hobi' },
            'game': { hint: 'Arkadaşlarınla oynayabileceğin aktiviteler', example: 'We play games together.', translation: 'oyun' },
            'family': { hint: 'Annen, baban, kardeşlerin - seninle yaşayanlar', example: 'I love my family.', translation: 'aile' },
            'friend': { hint: 'Seninle oynayan, konuşan arkadaşların', example: 'She is my best friend.', translation: 'arkadaş' },
            'mother': { hint: 'Seni dünyaya getiren, seni seven kadın', example: 'My mother is very kind.', translation: 'anne' },
            'father': { hint: 'Ailenin babası, seni koruyan', example: 'My father works hard.', translation: 'baba' },
            'sister': { hint: 'Kız kardeşin', example: 'I have one sister.', translation: 'kız kardeş' },
            'home': { hint: 'Yaşadığın, uyuduğun yer - ev', example: 'I am at home now.', translation: 'ev' },
            'house': { hint: 'Ailenin yaşadığı bina', example: 'We have a big house.', translation: 'ev' },
            'room': { hint: 'Evdeki yatak odası, oturma odası gibi bölümler', example: 'My room is clean.', translation: 'oda' },
            'garden': { hint: 'Evin dışında, çiçeklerin olduğu yer', example: 'We have a beautiful garden.', translation: 'bahçe' },
            'kitchen': { hint: 'Yemek pişirilen yer', example: 'Mom is cooking in the kitchen.', translation: 'mutfak' },
            'wake up': { hint: 'Sabah uykudan kalkmak', example: 'I wake up at 7 o\'clock.', translation: 'uyanmak' },
            'breakfast': { hint: 'Sabah yenen ilk öğün', example: 'I eat breakfast every morning.', translation: 'kahvaltı' },
            'study': { hint: 'Ders çalışmak, öğrenmek', example: 'I study English every day.', translation: 'çalışmak' },
            'sleep': { hint: 'Gece yatağa gidip uyumak', example: 'I sleep 8 hours every night.', translation: 'uyumak' },
            'watch': { hint: 'TV, film izlemek', example: 'I watch cartoons.', translation: 'izlemek' },
            
            // UNIT 2 - YUMMY BREAKFAST
            'milk': { hint: 'Beyaz bir içecek, inek verir', example: 'I drink milk every morning.', translation: 'süt' },
            'cheese': { hint: 'Sarı veya beyaz, sütten yapılır', example: 'I like eating cheese at breakfast.', translation: 'peynir' },
            'honey': { hint: 'Arıların yaptığı tatlı', example: 'Bees make honey.', translation: 'bal' },
            'egg': { hint: 'Tavukların verdiği, pişirip yiyoruz', example: 'She cooks an egg for breakfast.', translation: 'yumurta' },
            'butter': { hint: 'Ekmeğe sürülen sarı yağ', example: 'He spreads butter on the toast.', translation: 'tereyağı' },
            'bread': { hint: 'Ekmeği her gün yeriz', example: 'We buy fresh bread every day.', translation: 'ekmek' },
            'croissant': { hint: 'Fransız böreği, üçgen şeklinde', example: 'I eat a croissant with coffee.', translation: 'kruvasan' },
            'muffin': { hint: 'Küçük, yumuşak kek', example: 'She baked chocolate muffins.', translation: 'muffin' },
            'pancake': { hint: 'Yuvarlak, tatlı krep', example: 'We made pancakes for breakfast.', translation: 'pankek' },
            'bagel': { hint: 'Yuvarlak, ortası delik simit', example: 'I eat a bagel with cream cheese.', translation: 'simit' },
            'fruit': { hint: 'Elma, muz, portakal gibi meyveler', example: 'I eat fresh fruit every day.', translation: 'meyve' },
            'vegetable': { hint: 'Havuç, domates gibi sebzeler', example: 'Eat more vegetables to stay healthy.', translation: 'sebze' },
            'healthy': { hint: 'Sağlıklı, güçlü demek', example: 'Fruit is healthy.', translation: 'sağlıklı' },
            'nutritious': { hint: 'Besleyici, güç veren', example: 'Milk is nutritious.', translation: 'besleyici' },
            'yummy': { hint: 'Çok lezzetli demek', example: 'This cake is yummy!', translation: 'lezzetli' },
            'coffee': { hint: 'Kahve, kahverengi sıcak içecek', example: 'Would you like some coffee?', translation: 'kahve' },
            'tea': { hint: 'Çay, Türkiye\'de çok içilir', example: 'She drinks green tea.', translation: 'çay' },
            'fruit juice': { hint: 'Meyve suyu - portakal, elma', example: 'He drinks orange juice every morning.', translation: 'meyve suyu' },
            'drink': { hint: 'İçecek - su, süt, çay...', example: 'She wants a cold drink.', translation: 'içecek' },
            'jam': { hint: 'Meyve reçeli, ekmeğe sürülür', example: 'I love strawberry jam.', translation: 'reçel' },
            'olive': { hint: 'Zeytin, kahvaltıda yersin', example: 'I like black olives.', translation: 'zeytin' },
            'toast': { hint: 'Kızarmış ekmek', example: 'He eats cheese toast for breakfast.', translation: 'tost' },
            'cookie': { hint: 'Kurabiye, tatlı atıştırmalık', example: 'I baked chocolate cookies.', translation: 'kurabiye' },
            'cereal': { hint: 'Mısır gevreği, sütle yenir', example: 'I have cereal and milk for breakfast.', translation: 'mısır gevreği' },
            
            // UNIT 3 - DOWNTOWN
            'library': { hint: 'Kitapların olduğu, sessizce okuma yeri', example: 'I study in the library.', translation: 'kütüphane' },
            'museum': { hint: 'Eski eşyaların, sanat eserlerinin olduğu yer', example: 'We visit the museum on weekends.', translation: 'müze' },
            'hospital': { hint: 'Hastaların tedavi edildiği yer', example: 'The hospital is near here.', translation: 'hastane' },
            'school': { hint: 'Öğrencilerin ders çalıştığı yer', example: 'I go to school every day.', translation: 'okul' },
            'bank': { hint: 'Para yatırılan, çekilen yer', example: 'My mom goes to the bank.', translation: 'banka' },
            'store': { hint: 'Alışveriş yapılan dükkân', example: 'We buy food at the store.', translation: 'dükkân' },
            'shop': { hint: 'Alışveriş yeri, mağaza', example: 'She shops at this store.', translation: 'mağaza' },
            'market': { hint: 'Meyve, sebze satılan pazar', example: 'We go to the market on Sundays.', translation: 'pazar' },
            'mall': { hint: 'Büyük alışveriş merkezi', example: 'The mall has many stores.', translation: 'AVM' },
            'bookstore': { hint: 'Kitap satılan dükkân', example: 'I love going to the bookstore.', translation: 'kitapçı' },
            'restaurant': { hint: 'Yemek yenen yer', example: 'This restaurant is very good.', translation: 'restoran' },
            'cafe': { hint: 'Kahve içilen küçük yer', example: 'Let\'s meet at the cafe.', translation: 'kafe' },
            'bakery': { hint: 'Ekmek, pasta yapılan yer', example: 'The bakery smells good.', translation: 'fırın' },
            'pizza place': { hint: 'Pizza yapılan restoran', example: 'We order from the pizza place.', translation: 'pizzacı' },
            'food court': { hint: 'AVM\'de yemek yerleri', example: 'The food court is crowded.', translation: 'yemek alanı' },
            'cinema': { hint: 'Film izlenen yer', example: 'We go to the cinema on weekends.', translation: 'sinema' },
            'park': { hint: 'Oyun oynanan yeşil alan', example: 'Children play in the park.', translation: 'park' },
            'playground': { hint: 'Çocuklar için oyun alanı', example: 'The playground has swings.', translation: 'oyun alanı' },
            'zoo': { hint: 'Hayvanların yaşadığı yer', example: 'We saw lions at the zoo.', translation: 'hayvanat bahçesi' },
            'theatre': { hint: 'Tiyatro oyunu izlenen yer', example: 'We watch plays at the theatre.', translation: 'tiyatro' },
            
            // UNIT 4 - WEATHER AND EMOTIONS
            'sunny': { hint: 'Güneşli, parlak hava', example: 'It is sunny and warm.', translation: 'güneşli' },
            'rainy': { hint: 'Yağmurlu hava', example: 'Take an umbrella, it\'s rainy.', translation: 'yağmurlu' },
            'cloudy': { hint: 'Bulutlu hava', example: 'The sky is cloudy today.', translation: 'bulutlu' },
            'snowy': { hint: 'Karlı hava', example: 'It\'s snowy in winter.', translation: 'karlı' },
            'windy': { hint: 'Rüzgarlı hava', example: 'It\'s very windy today.', translation: 'rüzgarlı' },
            'happy': { hint: 'Mutlu, neşeli', example: 'I am happy today!', translation: 'mutlu' },
            'excited': { hint: 'Heyecanlı, coşkulu', example: 'I\'m excited about the trip.', translation: 'heyecanlı' },
            'cheerful': { hint: 'Neşeli, keyifli', example: 'She is always cheerful.', translation: 'neşeli' },
            'joyful': { hint: 'Sevinçli, mutlu', example: 'It was a joyful day.', translation: 'sevinçli' },
            'glad': { hint: 'Memnun, mutlu', example: 'I\'m glad to see you.', translation: 'memnun' },
            'sad': { hint: 'Üzgün, kederli', example: 'Why are you sad?', translation: 'üzgün' },
            'angry': { hint: 'Kızgın, sinirli', example: 'Don\'t be angry!', translation: 'kızgın' },
            'worried': { hint: 'Endişeli, kaygılı', example: 'I\'m worried about the test.', translation: 'endişeli' },
            'scared': { hint: 'Korkmuş, ürkmüş', example: 'I\'m scared of spiders.', translation: 'korkmuş' },
            'tired': { hint: 'Yorgun, bitkin', example: 'I\'m tired after school.', translation: 'yorgun' },
            'hot': { hint: 'Sıcak', example: 'It\'s hot in summer.', translation: 'sıcak' },
            'cold': { hint: 'Soğuk', example: 'It\'s cold in winter.', translation: 'soğuk' },
            'warm': { hint: 'Ilık, sıcak', example: 'The weather is warm.', translation: 'ılık' },
            'cool': { hint: 'Serin, hafif soğuk', example: 'It\'s cool in the evening.', translation: 'serin' },
            'temperature': { hint: 'Sıcaklık derecesi', example: 'What\'s the temperature today?', translation: 'sıcaklık' },
            
            // UNIT 5 - AT THE FAIR
            'fair': { hint: 'Panayır, lunapark', example: 'We go to the fair every year.', translation: 'panayır' },
            'carousel': { hint: 'Atlıkarınca', example: 'I love riding the carousel.', translation: 'atlıkarınca' },
            'ferris wheel': { hint: 'Dönme dolap', example: 'The ferris wheel is very high.', translation: 'dönme dolap' },
            'roller coaster': { hint: 'Hız treni', example: 'The roller coaster is exciting!', translation: 'hız treni' },
            'bumper cars': { hint: 'Çarpışan arabalar', example: 'Bumper cars are fun!', translation: 'çarpışan arabalar' },
            'prize': { hint: 'Ödül, hediye', example: 'I won a prize at the fair.', translation: 'ödül' },
            'ticket': { hint: 'Bilet', example: 'Buy tickets for the rides.', translation: 'bilet' },
            'win': { hint: 'Kazanmak', example: 'I want to win a prize.', translation: 'kazanmak' },
            'try': { hint: 'Denemek', example: 'Let\'s try this game.', translation: 'denemek' },
            'popcorn': { hint: 'Patlamış mısır', example: 'I love eating popcorn.', translation: 'patlamış mısır' },
            'cotton candy': { hint: 'Pamuk şeker', example: 'Cotton candy is sweet.', translation: 'pamuk şeker' },
            'ice cream': { hint: 'Dondurma', example: 'I want vanilla ice cream.', translation: 'dondurma' },
            'hot dog': { hint: 'Sosisli sandviç', example: 'Hot dogs are delicious.', translation: 'sosisli' },
            'candy': { hint: 'Şeker, bonbon', example: 'Don\'t eat too much candy.', translation: 'şeker' },
            'fun': { hint: 'Eğlenceli', example: 'This is so much fun!', translation: 'eğlenceli' },
            'exciting': { hint: 'Heyecan verici', example: 'The rides are exciting.', translation: 'heyecan verici' },
            'enjoy': { hint: 'Eğlenmek, zevk almak', example: 'I enjoy the fair.', translation: 'eğlenmek' },
            'laugh': { hint: 'Gülmek', example: 'We laugh a lot.', translation: 'gülmek' },
            'smile': { hint: 'Gülümsemek', example: 'Smile for the camera!', translation: 'gülümsemek' },
            
            // UNIT 6 - OCCUPATIONS
            'doctor': { hint: 'Doktor, hastaları tedavi eden', example: 'The doctor helps sick people.', translation: 'doktor' },
            'nurse': { hint: 'Hemşire, hastanede çalışan', example: 'The nurse is very kind.', translation: 'hemşire' },
            'dentist': { hint: 'Diş doktoru', example: 'I visit the dentist twice a year.', translation: 'diş doktoru' },
            'pharmacist': { hint: 'Eczacı, ilaç satan', example: 'The pharmacist gives medicine.', translation: 'eczacı' },
            'vet': { hint: 'Veteriner, hayvan doktoru', example: 'The vet helps animals.', translation: 'veteriner' },
            'teacher': { hint: 'Öğretmen, ders veren', example: 'My mother is a teacher.', translation: 'öğretmen' },
            'professor': { hint: 'Profesör, üniversite öğretmeni', example: 'He is a university professor.', translation: 'profesör' },
            'student': { hint: 'Öğrenci, okula giden', example: 'I am a student.', translation: 'öğrenci' },
            'principal': { hint: 'Müdür, okul müdürü', example: 'The principal is very nice.', translation: 'müdür' },
            'tutor': { hint: 'Özel öğretmen', example: 'My tutor helps me with math.', translation: 'özel öğretmen' },
            'engineer': { hint: 'Mühendis, tasarım yapan', example: 'My father is an engineer.', translation: 'mühendis' },
            'architect': { hint: 'Mimar, bina tasarlayan', example: 'The architect designs buildings.', translation: 'mimar' },
            'lawyer': { hint: 'Avukat, hukuk uzmanı', example: 'She is a lawyer.', translation: 'avukat' },
            'accountant': { hint: 'Muhasebeci, para hesabı yapan', example: 'The accountant works with numbers.', translation: 'muhasebeci' },
            'manager': { hint: 'Yönetici, yöneten kişi', example: 'He is the store manager.', translation: 'yönetici' },
            'chef': { hint: 'Aşçı, yemek yapan', example: 'The chef cooks delicious food.', translation: 'aşçı' },
            'waiter': { hint: 'Garson, restoranda servis yapan', example: 'The waiter brings our food.', translation: 'garson' },
            'pilot': { hint: 'Pilot, uçak kullanan', example: 'I want to be a pilot.', translation: 'pilot' },
            'driver': { hint: 'Şoför, araç kullanan', example: 'The bus driver is friendly.', translation: 'şoför' },
            'police officer': { hint: 'Polis, güvenliği sağlayan', example: 'The police officer helps people.', translation: 'polis' }
        };
        
        return hints[word.toLowerCase()] || { 
            hint: 'Bu kelimeyi öğren!', 
            example: `I know the word "${word}".`,
            translation: word 
        };
    },
    
    // Zorluğa göre görev üret
    async generateAdaptiveTasks(words, difficulty = 'medium') {
        if (!GeminiConfig.isConfigured()) {
            return null;
        }
        
        const prompt = `Sen 6. sınıf İngilizce öğretmenisin.

Kelimeler: ${words.join(', ')}
Zorluk: ${difficulty}

Bu kelimelerle ${words.length} adet eğlenceli görev oluştur.
Her görev için:
1. Görev tipi (match/fill/choose)
2. Soru metni
3. Doğru cevap
4. Yanlış seçenekler (eğer varsa)

JSON formatında yanıt ver.`;

        try {
            const response = await callGeminiAPI(prompt);
            if (response) {
                const jsonMatch = response.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    return JSON.parse(jsonMatch[0]);
                }
            }
        } catch (error) {
            console.error('Task generation error:', error);
        }
        
        return null;
    },
    
    // Teşvik mesajı üret
    async generateEncouragement(score, gateName) {
        if (!GeminiConfig.isConfigured()) {
            return this.getFallbackEncouragement(score);
        }
        
        const prompt = `Sen neşeli bir İngilizce öğretmenisin.

Öğrenci "${gateName}" görevini tamamladı.
Puan: ${score}/100

Kısa ve motive edici bir kutlama mesajı yaz (1-2 cümle, Türkçe).
Emoji kullan!`;

        try {
            const response = await callGeminiAPI(prompt);
            if (response) {
                return response.trim();
            }
        } catch (error) {
            console.error('Encouragement generation error:', error);
        }
        
        return this.getFallbackEncouragement(score);
    },
    
    // Basit teşvik mesajları
    getFallbackEncouragement(score) {
        if (score >= 90) {
            return '🌟 Harika! Mükemmel bir performans! Kelimelerde gerçek bir uzmansın!';
        } else if (score >= 70) {
            return '👏 Çok iyi! Kelimeler artık senin kontrolünde!';
        } else if (score >= 50) {
            return '💪 İyi gidiyorsun! Biraz daha pratikle mükemmel olacaksın!';
        } else {
            return '🌈 Güzel bir başlangıç! Tekrar denersen daha da iyi olacaksın!';
        }
    }
};
