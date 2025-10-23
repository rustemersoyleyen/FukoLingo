// FukoLingo - Kelime Veritabanı
// 6. Sınıf İngilizce Kelimeleri - Ünitelere Göre Düzenlenmiş

const vocabularyData = {
    units: [
        {
            id: 1,
            title: "Unit 1 - Life",
            icon: "🌍",
            description: "Yaşam, hobiler ve günlük aktiviteler",
            words:[
                {"english": "to take a nap",    "turkish": "kestirmek",    "pronunciation": "tu teyk e nep",    "example": "My grandfather likes to take a nap after lunch.",    "exampleTr": "Büyükbabam öğle yemeğinden sonra kestirmeyi sever.",    "image": "😴"},
                {"english": "to help mom",    "turkish": "anneye yardım etmek",    "pronunciation": "tu help mam",    "example": "I help my mom in the kitchen on weekends.",    "exampleTr": "Hafta sonları mutfakta anneme yardım ederim.",    "image": "👩‍👧‍👦"},
                {"english": "to take care of the dog",    "turkish": "köpekle ilgilenmek",    "pronunciation": "tu teyk ker of dı dog",    "example": "You must take care of the dog every day.",    "exampleTr": "Köpekle her gün ilgilenmelisin.",    "image": "🐶"},
                {"english": "to get dressed",    "turkish": "giyinmek",    "pronunciation": "tu get drest",    "example": "I wake up and get dressed for school.",    "exampleTr": "Uyanırım ve okul için giyinirim.",    "image": "👕"},
                {"english": "to wake up",    "turkish": "uyanmak",    "pronunciation": "tu weyk ap",    "example": "I wake up at seven o'clock every morning.",    "exampleTr": "Her sabah saat yedide uyanırım.",    "image": "⏰"},
                {"english": "to go to school",    "turkish": "okula gitmek",    "pronunciation": "tu go tu skul",    "example": "We go to school from Monday to Friday.",    "exampleTr": "Pazartesiden Cumaya okula gideriz.",    "image": "🏫"},
                {"english": "to watch tv",    "turkish": "televizyon izlemek",    "pronunciation": "tu woç tivi",    "example": "My little brother likes to watch TV in the evening.",    "exampleTr": "Küçük erkek kardeşim akşamları televizyon izlemeyi sever.",    "image": "📺"},
                {"english": "to arrive home",    "turkish": "eve varmak",    "pronunciation": "tu erayv hom",    "example": "I usually arrive home at 4 p.m.",    "exampleTr": "Genellikle öğleden sonra saat 4'te eve varırım.",    "image": "🏡"},
                {"english": "to arrive at school",    "turkish": "okula varmak",    "pronunciation": "tu erayv et skul",    "example": "The bus arrives at school at 8:30 a.m.",    "exampleTr": "Otobüs okula sabah 8:30'da varır.",    "image": "🏫"},
                {"english": "to rest",    "turkish": "dinlenmek",    "pronunciation": "tu rest",    "example": "I feel tired. I need to rest.",    "exampleTr": "Yorgun hissediyorum. Dinlenmeye ihtiyacım var.",    "image": "🧘"},
                {"english": "to visit grandparents",    "turkish": "büyük ebeveynleri ziyaret etmek",    "pronunciation": "tu vizit grendperınts",    "example": "We visit our grandparents every Sunday.",    "exampleTr": "Her Pazar büyük ebeveynlerimizi ziyaret ederiz.",    "image": "👵👴"},
                {"english": "to go to bed",    "turkish": "yatağa gitmek",    "pronunciation": "tu go tu bed",    "example": "Children should go to bed early.",    "exampleTr": "Çocuklar yatağa erken gitmeli.",    "image": "🛌"},
                {"english": "to finish homework",    "turkish": "ödevi bitirmek",    "pronunciation": "tu finiş homvörk",    "example": "I always finish my homework before dinner.",    "exampleTr": "Ödevimi her zaman akşam yemeğinden önce bitiririm.",    "image": "✅"},
                {"english": "to have breakfast",    "turkish": "kahvaltı yapmak",    "pronunciation": "tu hev brekfıst",    "example": "We have breakfast at 7:30 a.m.",    "exampleTr": "Sabah 7:30'da kahvaltı yaparız.",    "image": "🥞"},
                {"english": "to take the school bus",    "turkish": "okul otobüsüne binmek",    "pronunciation": "tu teyk dı skul bas",    "example": "My friend doesn't walk; she takes the school bus.",    "exampleTr": "Arkadaşım yürümez; o okul otobüsüne biner.",    "image": "🚌"},
                {"english": "to meet friends",    "turkish": "arkadaşlarla buluşmak",    "pronunciation": "tu miit frendz",    "example": "I like to meet my friends at the park.",    "exampleTr": "Arkadaşlarımla parkta buluşmayı severim.",    "image": "👋"},
                {"english": "to take a shower",    "turkish": "duş almak",    "pronunciation": "tu teyk e şavır",    "example": "He takes a shower every morning.",    "exampleTr": "O (erkek) her sabah duş alır.",    "image": "🚿"},
                {"english": "to read a magazine",    "turkish": "dergi okumak",    "pronunciation": "tu riid e megeziin",    "example": "My mother is reading a magazine now.",    "exampleTr": "Annem şu anda bir dergi okuyor.",    "image": "📰"},
                {"english": "to listen to the teacher",    "turkish": "öğretmeni dinlemek",    "pronunciation": "tu lisın tu dı tiçır",    "example": "Please be quiet and listen to the teacher.",    "exampleTr": "Lütfen sessiz olun ve öğretmeni dinleyin.",    "image": "👩‍🏫"},
                {"english": "to attend a course",    "turkish": "kursa katılmak",    "pronunciation": "tu etend e kors",    "example": "She wants to attend a guitar course.",    "exampleTr": "O (kız) bir gitar kursuna katılmak istiyor.",    "image": "🎓"},
                {"english": "to read a book",    "turkish": "kitap okumak",    "pronunciation": "tu riid e buk",    "example": "I read a book before I sleep.",    "exampleTr": "Uyumadan önce bir kitap okurum.",    "image": "📚"},
                {"english": "to walk to school",    "turkish": "okula yürümek",    "pronunciation": "tu volk tu skul",    "example": "My house is near. I walk to school.",    "exampleTr": "Evim yakın. Okula yürürüm.",    "image": "🚶‍♀️"},
                {"english": "to play computer games",    "turkish": "bilgisayar oyunları oynamak",    "pronunciation": "tu pley kompyutır geymz",    "example": "Don't play computer games all day!",    "exampleTr": "Bütün gün bilgisayar oyunları oynama!",    "image": "🎮"},
                {"english": "to do sports",    "turkish": "spor yapmak",    "pronunciation": "tu du sports",    "example": "It is healthy to do sports.",    "exampleTr": "Spor yapmak sağlıklıdır.",    "image": "🤸‍♂️"},
                {"english": "go",    "turkish": "gitmek",    "pronunciation": "go",    "example": "Let's go to the cinema.",    "exampleTr": "Haydi sinemaya gidelim.",    "image": "➡️"},
                {"english": "swim",    "turkish": "yüzmek",    "pronunciation": "svim",    "example": "I can swim very well in the summer.",    "exampleTr": "Yazın çok iyi yüzebilirim.",    "image": "🏊"},
                {"english": "dance",    "turkish": "dans etmek",    "pronunciation": "dens",    "example": "Can you dance salsa?",    "exampleTr": "Salsa dansı yapabilir misin?",    "image": "💃"},
                {"english": "read",    "turkish": "okumak",    "pronunciation": "riid",    "example": "What are you reading?",    "exampleTr": "Ne okuyorsun?",    "image": "📖"},
                {"english": "listen",    "turkish": "dinlemek",    "pronunciation": "lisın",    "example": "I listen to pop music.",    "exampleTr": "Pop müzik dinlerim.",    "image": "🎧"},
                {"english": "study",    "turkish": "ders çalışmak",    "pronunciation": "stadi",    "example": "You need to study for the English exam.",    "exampleTr": "İngilizce sınavı için ders çalışman gerekiyor.",    "image": "🧑‍💻"},
                {"english": "go to the library",    "turkish": "kütüphaneye gitmek",    "pronunciation": "go tu dı laybreri",    "example": "Students go to the library to read books.",    "exampleTr": "Öğrenciler kitap okumak için kütüphaneye gider.",    "image": "🏛️"},
                {"english": "wash their faces",    "turkish": "yüzlerini yıkamak",    "pronunciation": "woş deyr feysız",    "example": "They wake up and wash their faces.",    "exampleTr": "Uyanırlar ve yüzlerini yıkarlar.",    "image": "🧼"},
                {"english": "reads newspaper",    "turkish": "gazete okumak",    "pronunciation": "riidz nüspeypır",    "example": "My father reads the newspaper every morning.",    "exampleTr": "Babam her sabah gazete okur.",    "image": "🗞️"},
                {"english": "Stays at home",    "turkish": "evde kalmak",    "pronunciation": "steyz et hom",    "example": "It is raining. I am staying at home today.",    "exampleTr": "Yağmur yağıyor. Bugün evde kalıyorum.",    "image": "🏠"},
                {"english": "listen to music",    "turkish": "müzik dinlemek",    "pronunciation": "lisın tu müzik",    "example": "She is listening to music in her room.",    "exampleTr": "O (kız) odasında müzik dinliyor.",    "image": "🎶"},
                {"english": "takes the bus",    "turkish": "otobüse binmek",    "pronunciation": "teyks dı bas",    "example": "Ali takes the bus to school.",    "exampleTr": "Ali okula otobüsle gider (otobüse biner).",    "image": "🚌"},
                {"english": "attend the chess club",    "turkish": "satranç kulübüne katılmak",    "pronunciation": "etend dı çes klab",    "example": "I attend the chess club on Fridays.",    "exampleTr": "Cuma günleri satranç kulübüne katılırım.",    "image": "♟️"},
                {"english": "Studies his lessons",    "turkish": "derslerine çalışmak",    "pronunciation": "stadiz hiz lesınz",    "example": "He is a good student. He studies his lessons regularly.",    "exampleTr": "O iyi bir öğrencidir. Derslerine düzenli çalışır.",    "image": "📚"},
                {"english": "takes care of the plants",    "turkish": "bitkilerle ilgilenmek",    "pronunciation": "teyks ker of dı plants",    "example": "My grandmother takes care of the plants in the garden.",    "exampleTr": "Büyükannem bahçedeki bitkilerle ilgilenir.",    "image": "🪴"},
                {"english": "goes online",    "turkish": "internete girmek",    "pronunciation": "goz onlayn",    "example": "He goes online to play games.",    "exampleTr": "O (erkek) oyun oynamak için internete girer.",    "image": "💻"},
                {"english": "drinks a cup of coffee",    "turkish": "bir fincan kahve içmek",    "pronunciation": "drinks e kap of kofi",    "example": "The teacher drinks a cup of coffee in the morning.",    "exampleTr": "Öğretmen sabah bir fincan kahve içer.",    "image": "☕"},
                {"english": "to go on a holiday",    "turkish": "tatile gitmek",    "pronunciation": "tu go on e holidey",    "example": "We will go on a holiday in the summer.",    "exampleTr": "Yazın tatile gideceğiz.",    "image": "✈️"},
                {"english": "to start school",    "turkish": "okula başlamak",    "pronunciation": "tu start skul",    "example": "Children start school in September.",    "exampleTr": "Çocuklar Eylül ayında okula başlar.",    "image": "🎒"},
                {"english": "to celebrate the Children's Day",    "turkish": "Çocuk Bayramı'nı kutlamak",    "pronunciation": "tu selıbreyt dı çildrınz dey",    "example": "We celebrate Children's Day on April 23rd.",    "exampleTr": "23 Nisan'da Çocuk Bayramı'nı kutlarız.",    "image": "🎉"},
                {"english": "to come back",    "turkish": "geri gelmek/dönmek",    "pronunciation": "tu kam bek",    "example": "What time do you come back home from school?",    "exampleTr": "Okuldan eve saat kaçta geri dönersin?",    "image": "↩️"},
                {"english": "to do the ironing",    "turkish": "ütü yapmak",    "pronunciation": "tu du dı ayırning",    "example": "My father is doing the ironing now.",    "exampleTr": "Babam şimdi ütü yapıyor.",    "image": "👔"},
                {"english": "to play with friends",    "turkish": "arkadaşlarla oynamak",    "pronunciation": "tu pley vit frendz",    "example": "After school, I play with my friends.",    "exampleTr": "Okuldan sonra arkadaşlarımla oynarım.",    "image": "🧑‍🤝‍🧑"},
                {"english": "to leave home",    "turkish": "evden ayrılmak",    "pronunciation": "tu liiv hom",    "example": "I leave home at 8:00 a.m. every day.",    "exampleTr": "Her gün sabah 8:00'de evden ayrılırım.",    "image": "🚪"},
                {"english": "go out",    "turkish": "dışarı çıkmak",    "pronunciation": "go aut",    "example": "Let's go out this weekend.",    "exampleTr": "Bu hafta sonu dışarı çıkalım.",    "image": "🌇"},
                {"english": "have dinner",    "turkish": "akşam yemeği yemek",    "pronunciation": "hev dinır",    "example": "My family has dinner together at 7 p.m.",    "exampleTr": "Ailem akşam 7'de birlikte akşam yemeği yer.",    "image": "🍽️"},
                {"english": "leave School",    "turkish": "okuldan ayrılmak",    "pronunciation": "liiv skul",    "example": "Students leave school at 3:30 p.m.",    "exampleTr": "Öğrenciler öğleden sonra 3:30'da okuldan ayrılır.",    "image": "🚸"},
                {"english": "Spring",    "turkish": "İlkbahar",    "pronunciation": "spring",    "example": "The flowers open in Spring.",    "exampleTr": "Çiçekler İlkbaharda açar.",    "image": "🌸"},
                {"english": "Summer",    "turkish": "Yaz",    "pronunciation": "samır",    "example": "Summer is my favorite season because it's hot.",    "exampleTr": "Yaz benim favori mevsimim çünkü hava sıcak.",    "image": "☀️"},
                {"english": "Autumn / Fall",    "turkish": "Sonbahar",    "pronunciation": "otım / fol",    "example": "The leaves fall from the trees in Autumn.",    "exampleTr": "Sonbaharda yapraklar ağaçlardan düşer.",    "image": "🍂"},
                {"english": "Winter",    "turkish": "Kış",    "pronunciation": "vintır",    "example": "It snows in Winter in Bursa.",    "exampleTr": "Kışın Bursa'da kar yağar.",    "image": "❄️"},
                {"english": "March",    "turkish": "Mart",    "pronunciation": "març",    "example": "March is the first month of Spring.",    "exampleTr": "Mart, İlkbaharın ilk ayıdır.",    "image": "🍀"},
                {"english": "April",    "turkish": "Nisan",    "pronunciation": "eyprıl",    "example": "April 23rd is Children's Day in Turkey.",    "exampleTr": "23 Nisan Türkiye'de Çocuk Bayramı'dır.",    "image": "🌷"},
                {"english": "May",    "turkish": "Mayıs",    "pronunciation": "mey",    "example": "My birthday is in May.",    "exampleTr": "Benim doğum günüm Mayıs ayında.",    "image": "🌼"},
                {"english": "June",    "turkish": "Haziran",    "pronunciation": "cuun",    "example": "Schools close in June.",    "exampleTr": "Okullar Haziran'da kapanır.",    "image": "🌊"},
                {"english": "July",    "turkish": "Temmuz",    "pronunciation": "culay",    "example": "We go to the beach in July.",    "exampleTr": "Temmuz'da sahile gideriz.",    "image": "🏖️"},
                {"english": "August",    "turkish": "Ağustos",    "pronunciation": "ogıst",    "example": "August is a very hot month.",    "exampleTr": "Ağustos çok sıcak bir aydır.",    "image": "🌻"},
                {"english": "September",    "turkish": "Eylül",    "pronunciation": "septembır",    "example": "We go back to school in September.",    "exampleTr": "Eylül'de okula geri döneriz.",    "image": "🎒"},
                {"english": "October",    "turkish": "Ekim",    "pronunciation": "oktobır",    "example": "October is an Autumn month.",    "exampleTr": "Ekim bir sonbahar ayıdır.",    "image": "🎃"},
                {"english": "November",    "turkish": "Kasım",    "pronunciation": "novembır",    "example": "It rains a lot in November.",    "exampleTr": "Kasım'da çok yağmur yağar.",    "image": "🍁"},
                {"english": "December",    "turkish": "Aralık",    "pronunciation": "disembır",    "example": "December is the last month of the year.",    "exampleTr": "Aralık yılın son ayıdır.",    "image": "🎄"},
                {"english": "January",    "turkish": "Ocak",    "pronunciation": "cenyueri",    "example": "January is a cold winter month.",    "exampleTr": "Ocak soğuk bir kış ayıdır.",    "image": "☃️"},
                {"english": "February",    "turkish": "Şubat",    "pronunciation": "februari",    "example": "February is the shortest month.",    "exampleTr": "Şubat en kısa aydır.",    "image": "❤️"},
                {"english": "on Monday",    "turkish": "Pazartesi günü",    "pronunciation": "on mandey",    "example": "We have a Maths exam on Monday.",    "exampleTr": "Pazartesi günü Matematik sınavımız var.",    "image": "📅"},
                {"english": "on Tuesday",    "turkish": "Salı günü",    "pronunciation": "on tuuzdey",    "example": "I go to the gym on Tuesday.",    "exampleTr": "Salı günü spor salonuna giderim.",    "image": "📅"},
                {"english": "on Wednesday",    "turkish": "Çarşamba günü",    "pronunciation": "on venzdey",    "example": "Do you have an English class on Wednesday?",    "exampleTr": "Çarşamba günü İngilizce dersin var mı?",    "image": "📅"},
                {"english": "on Thursday",    "turkish": "Perşembe günü",    "pronunciation": "on törzdey",    "example": "We play basketball on Thursday.",    "exampleTr": "Perşembe günü basketbol oynarız.",    "image": "📅"},
                {"english": "on Friday",    "turkish": "Cuma günü",    "pronunciation": "on fraydey",    "example": "Friday is the last day of the school week.",    "exampleTr": "Cuma okul haftasının son günüdür.",    "image": "📅"},
                {"english": "on Saturday",    "turkish": "Cumartesi günü",    "pronunciation": "on setırdey",    "example": "I sleep late on Saturday.",    "exampleTr": "Cumartesi günü geç uyurum.",    "image": "📅"},
                {"english": "on Sunday",    "turkish": "Pazar günü",    "pronunciation": "on sandey",    "example": "We have a big breakfast on Sunday.",    "exampleTr": "Pazar günü büyük bir kahvaltı yaparız.",    "image": "📅"},
                {"english": "in the morning",    "turkish": "sabahleyin",    "pronunciation": "in dı morning",    "example": "I brush my teeth in the morning.",    "exampleTr": "Sabahleyin dişlerimi fırçalarım.",    "image": "🌅"},
                {"english": "at noon",    "turkish": "öğlen",    "pronunciation": "et nuun",    "example": "We have lunch at noon.",    "exampleTr": "Öğlen (vakti) öğle yemeği yeriz.",    "image": "☀️"},
                {"english": "in the afternoon",    "turkish": "öğleden sonra",    "pronunciation": "in dı aftırnuun",    "example": "I do my homework in the afternoon.",    "exampleTr": "Öğleden sonra ödevimi yaparım.",    "image": "🌇"},
                {"english": "in the evening",    "turkish": "akşamleyin",    "pronunciation": "in dı ivning",    "example": "My family watches TV in the evening.",    "exampleTr": "Ailem akşamleyin televizyon izler.",    "image": "🌃"},
                {"english": "at night",    "turkish": "geceleyin",    "pronunciation": "et nayt",    "example": "The stars are in the sky at night.",    "exampleTr": "Geceleyin yıldızlar gökyüzündedir.",    "image": "🌙"},
                {"english": "on weekdays",    "turkish": "hafta içi",    "pronunciation": "on viikdeyz",    "example": "I go to school on weekdays.",    "exampleTr": "Hafta içi okula giderim.",    "image": "🗓️"},
                {"english": "at the weekend",    "turkish": "hafta sonu",    "pronunciation": "et dı viikend",    "example": "What do you do at the weekend?",    "exampleTr": "Hafta sonu ne yaparsın?",    "image": "🎉"},
                {"english": "after school",    "turkish": "okuldan sonra",    "pronunciation": "aftır skul",    "example": "I play football after school.",    "exampleTr": "Okuldan sonra futbol oynarım.",    "image": "🕒"},
                {"english": "before breakfast",    "turkish": "kahvaltıdan önce",    "pronunciation": "bifor brekfıst",    "example": "I wash my face before breakfast.",    "exampleTr": "Kahvaltıdan önce yüzümü yıkarım.",    "image": "🕒"},
                {"english": "after breakfast",    "turkish": "kahvaltıdan sonra",    "pronunciation": "aftır brekfıst",    "example": "I go to school after breakfast.",    "exampleTr": "Kahvaltıdan sonra okula giderim.",    "image": "🕒"},
                {"english": "before lunch",    "turkish": "öğle yemeğinden önce",    "pronunciation": "bifor lanç",    "example": "We have two classes before lunch.",    "exampleTr": "Öğle yemeğinden önce iki dersimiz var.",    "image": "🕒"},
                {"english": "after lunch",    "turkish": "öğle yemeğinden sonra",    "pronunciation": "aftır lanç",    "example": "We play in the garden after lunch.",    "exampleTr": "Öğle yemeğinden sonra bahçede oynarız.",    "image": "🕒"},
                {"english": "before dinner",    "turkish": "akşam yemeğinden önce",    "pronunciation": "bifor dinır",    "example": "Can you help me set the table before dinner?",    "exampleTr": "Akşam yemeğinden önce masayı kurmama yardım edebilir misin?",    "image": "🕒"},
                {"english": "after dinner",    "turkish": "akşam yemeğinden sonra",    "pronunciation": "aftır dinır",    "example": "I watch a cartoon after dinner.",    "exampleTr": "Akşam yemeğinden sonra bir çizgi film izlerim.",    "image": "🕒"},
                {"english": "before going to bed",    "turkish": "yatmadan önce",    "pronunciation": "bifor going tu bed",    "example": "I read a story before going to bed.",    "exampleTr": "Yatmadan önce bir hikaye okurum.",    "image": "🕒"},
                {"english": "attend the maths course",    "turkish": "matematik kursuna katılmak",    "pronunciation": "etend dı meths kors",    "example": "He attends the maths course on Saturdays.",    "exampleTr": "O (erkek) Cumartesi günleri matematik kursuna katılır.",    "image": "🧮"},
                {"english": "It's ten o'clock.",    "turkish": "Saat 10.",    "pronunciation": "its ten oklok",    "example": "Hurry up! It's ten o'clock. The bus is leaving.",    "exampleTr": "Acele et! Saat 10. Otobüs kalkıyor.",    "image": "🕙"},
                {"english": "It's quarter past ten.",    "turkish": "Saat 10'u çeyrek geçiyor.",    "pronunciation": "its kuortır past ten",    "example": "The break starts at quarter past ten.",    "exampleTr": "Teneffüs 10'u çeyrek geçe başlıyor.",    "image": "🕙"},
                {"english": "It's quarter to ten.",    "turkish": "Saat 10'a çeyrek var.",    "pronunciation": "its kuortır tu ten",    "example": "The exam is at quarter to ten.",    "exampleTr": "Sınav 10'a çeyrek var.",    "image": "🕙"},
                {"english": "It's half past ten.",    "turkish": "Saat 10 buçuk.",    "pronunciation": "its half past ten",    "example": "We sleep at half past ten.",    "exampleTr": "Saat 10 buçukta uyuruz.",    "image": "🕥"},
                {"english": "a.m.",    "turkish": "Öğleden önce",    "pronunciation": "ey em",    "example": "School starts at 8:00 a.m.",    "exampleTr": "Okul sabah 8:00'de başlar.",    "image": "AM"},
                {"english": "p.m.",    "turkish": "Öğleden sonra",    "pronunciation": "pi em",    "example": "I come home at 4:00 p.m.",    "exampleTr": "Öğleden sonra 4:00'te eve gelirim.",    "image": "PM"},
                {"english": "before",    "turkish": "önce",    "pronunciation": "bifor",    "example": "Wash your hands before you eat.",    "exampleTr": "Yemeden önce ellerini yıka.",    "image": "⏪"},
                {"english": "after",    "turkish": "sonra",    "pronunciation": "aftır",    "example": "We can play after homework.",    "exampleTr": "Ödevden sonra oynayabiliriz.",    "image": "⏩"},
                {"english": "take care of the pet",    "turkish": "evcil hayvanla ilgilenmek",    "pronunciation": "teyk ker of dı pet",    "example": "Ayşe takes care of her pet cat.",    "exampleTr": "Ayşe evcil hayvanı kedisiyle ilgilenir.",    "image": "🐾"},
                {"english": "wake up / get up",    "turkish": "uyanmak / kalkmak",    "pronunciation": "weyk ap / get ap",    "example": "I wake up at 7:00, but I get up at 7:05.",    "exampleTr": "7:00'de uyanırım ama 7:05'te kalkarım.",    "image": "⏰"},
                {"english": "watch cartoon",    "turkish": "çizgi film izlemek",    "pronunciation": "woç kartuun",    "example": "My brother loves watching cartoons on Sunday morning.",    "exampleTr": "Erkek kardeşim Pazar sabahı çizgi film izlemeyi çok sever.",    "image": "📺"},
                {"english": "visit grandmother",    "turkish": "büyük anneyi ziyaret etmek",    "pronunciation": "vizit grendmadır",    "example": "We visit our grandmother at the weekend.",    "exampleTr": "Hafta sonu büyükannemizi ziyaret ederiz.",    "image": "👵"},
                {"english": "do / finish homework",    "turkish": "ödevini yapmak / bitirmek",    "pronunciation": "du / finiş homvörk",    "example": "You must do your homework every day.",    "exampleTr": "Ödevini her gün yapmalısın.",    "image": "✍️"},
                {"english": "comb hair",    "turkish": "saçını taramak",    "pronunciation": "kom heyr",    "example": "She combs her long hair every morning.",    "exampleTr": "O (kız) her sabah uzun saçını tarar.",    "image": "👩‍🦱"},
                {"english": "brush teeth",    "turkish": "dişlerini fırçalamak",    "pronunciation": "braş tiith",    "example": "Don't forget to brush your teeth before bed.",    "exampleTr": "Yatmadan önce dişlerini fırçalamayı unutma.",    "image": "🪥"},
                {"english": "attend a club / class",    "turkish": "kulübe / derse katılmak",    "pronunciation": "etend e klab / klas",    "example": "I attend the drama club after school.",    "exampleTr": "Okuldan sonra drama kulübüne katılırım.",    "image": "🏫"},
                {"english": "break time",    "turkish": "teneffüs",    "pronunciation": "breyk taym",    "example": "The students are playing in the garden at break time.",    "exampleTr": "Öğrenciler teneffüste bahçede oynuyorlar.",    "image": "🔔"},
                {"english": "go / do shopping",    "turkish": "alışverişe gitmek / yapmak",    "pronunciation": "go / du şoping",    "example": "My mother goes shopping on Saturdays.",    "exampleTr": "Annem Cumartesi günleri alışverişe gider.",    "image": "🛍️"},
                {"english": "hang around",    "turkish": "gezinmek, takılmak",    "pronunciation": "heng eraund",    "example": "Teenagers like to hang around at the mall.",    "exampleTr": "Gençler alışveriş merkezinde takılmayı sever.",    "image": "🚶‍♂️"},
                {"english": "have a picnic",    "turkish": "piknik yapmak",    "pronunciation": "hev e piknik",    "example": "If the weather is nice, let's have a picnic.",    "exampleTr": "Eğer hava güzelse, haydi piknik yapalım.",    "image": "🧺"},
                {"english": "have lunch / dinner",    "turkish": "öğle / akşam yemeği yemek",    "pronunciation": "hev lanç / dinır",    "example": "We have lunch at the school cafeteria.",    "exampleTr": "Öğle yemeğini okul kantininde yeriz.",    "image": "🍲"},
                {"english": "horse riding",    "turkish": "ata binme",    "pronunciation": "hors rayding",    "example": "Horse riding is a popular sport.",    "exampleTr": "Ata binme popüler bir spordur.",    "image": "🐎"},
                {"english": "learn (new things)",    "turkish": "(yeni şeyler) öğrenmek",    "pronunciation": "lörn (nüu tingz)",    "example": "I want to learn new things every day.",    "exampleTr": "Her gün yeni şeyler öğrenmek istiyorum.",    "image": "🧠"},
                {"english": "on foot",    "turkish": "yürüyerek gitmek",    "pronunciation": "on fut",    "example": "My school is close. I go on foot.",    "exampleTr": "Okulum yakın. Yürüyerek giderim.",    "image": "👣"},
                {"english": "play chess",    "turkish": "satranç oynamak",    "pronunciation": "pley çes",    "example": "My father taught me how to play chess.",    "exampleTr": "Babam bana satranç oynamayı öğretti.",    "image": "♟️"},
                {"english": "play the violin / guitar",    "turkish": "keman / gitar çalmak",    "pronunciation": "pley dı vayınlın / gitar",    "example": "Can you play the guitar?",    "exampleTr": "Gitar çalabilir misin?",    "image": "🎻"},
                {"english": "play volleyball / football",    "turkish": "voleybol / futbol oynamak",    "pronunciation": "pley volibol / futbıl",    "example": "They are playing football in the garden.",    "exampleTr": "Bahçede futbol oynuyorlar.",    "image": "🏐"},
                {"english": "read books",    "turkish": "kitap okumak",    "pronunciation": "riid buks",    "example": "Reading books is my favorite hobby.",    "exampleTr": "Kitap okumak benim favori hobimdir.",    "image": "📚"},
                {"english": "run errands",    "turkish": "gerekli işleri yapmak",    "pronunciation": "ran erındz",    "example": "My mom asks me to run errands, like going to the market.",    "exampleTr": "Annem markete gitmek gibi gerekli işleri yapmamı ister.",    "image": "📋"},
                {"english": "surf the Internet",    "turkish": "İnternette gezinmek",    "pronunciation": "sörf dı intırnet",    "example": "I surf the Internet to find information for my homework.",    "exampleTr": "Ödevim için bilgi bulmak amacıyla İnternette gezinirim.",    "image": "💻"},
                {"english": "swimming course",    "turkish": "yüzme kursu",    "pronunciation": "sviming kors",    "example": "I am attending a swimming course this summer.",    "exampleTr": "Bu yaz bir yüzme kursuna katılıyorum.",    "image": "🏊‍♀️"},
                {"english": "take English courses",    "turkish": "İngilizce kursu almak",    "pronunciation": "teyk ingliş korsız",    "example": "My sister is taking English courses.",    "exampleTr": "Kız kardeşim İngilizce kursları alıyor.",    "image": "🇬🇧"},
                {"english": "traditional",    "turkish": "geleneksel",    "pronunciation": "tıredişınıl",    "example": "Baklava is a traditional Turkish dessert.",    "exampleTr": "Baklava geleneksel bir Türk tatlısıdır.",    "image": "🎎"},
                {"english": "train hard",    "turkish": "sıkı çalışmak",    "pronunciation": "treyn hard",    "example": "The football team must train hard for the match.",    "exampleTr": "Futbol takımı maç için sıkı çalışmalı.",    "image": "🏋️‍♀️"},
                {"english": "walk the dog",    "turkish": "köpeği gezdirmek",    "pronunciation": "volk dı dog",    "example": "I walk the dog in the park every evening.",    "exampleTr": "Her akşam parkta köpeği gezdiririm.",    "image": "🐕‍🦺"},
                {"english": "write / keep (a) diary",    "turkish": "günlük tutmak",    "pronunciation": "rayt / kiip e dayıri",    "example": "She writes in her diary every night.",    "exampleTr": "O (kız) her gece günlüğüne yazar (günlük tutar).",    "image": "📔"}
                ]
        },
        {
            id: 2,
            title: "Unit 2 - Yummy Breakfast",
            icon: "🍳",
            description: "Kahvaltı ve yiyecekler",
            words: [
                {"english": "milk", "turkish": "süt", "pronunciation": "/mɪlk/", "example": "I drink milk every morning.", "exampleTr": "Her sabah süt içerim.", "image": "🥛"},
                {"english": "cheese", "turkish": "peynir", "pronunciation": "/tʃiːz/", "example": "I like eating cheese at breakfast.", "exampleTr": "Kahvaltıda peynir yemeyi severim.", "image": "🧀"},
                {"english": "honey", "turkish": "bal", "pronunciation": "/ˈhʌni/", "example": "Bees make honey.", "exampleTr": "Arılar bal yapar.", "image": "🍯"},
                {"english": "egg", "turkish": "yumurta", "pronunciation": "/eɡ/", "example": "She cooks an egg for breakfast.", "exampleTr": "Kahvaltı için yumurta pişirir.", "image": "🥚"},
                {"english": "jam", "turkish": "reçel", "pronunciation": "/dʒæm/", "example": "I love strawberry jam.", "exampleTr": "Çilek reçelini severim.", "image": "🍓"},
                {"english": "butter", "turkish": "tereyağı", "pronunciation": "/ˈbʌtə/", "example": "He spreads butter on the toast.", "exampleTr": "Tostun üzerine tereyağı sürer.", "image": "🧈"},
                {"english": "bagel", "turkish": "simit", "pronunciation": "/ˈbeɪɡl/", "example": "I eat a bagel with cream cheese.", "exampleTr": "Simitimi krem peynirle yerim.", "image": "🥯"},
                {"english": "cereal", "turkish": "mısır gevreği", "pronunciation": "/ˈsɪəriəl/", "example": "I have cereal and milk for breakfast.", "exampleTr": "Kahvaltıda süt ve mısır gevreği yerim.", "image": "🥣"},
                {"english": "olive", "turkish": "zeytin", "pronunciation": "/ˈɒlɪv/", "example": "I like black olives.", "exampleTr": "Siyah zeytinleri severim.", "image": "🫒"},
                {"english": "salami", "turkish": "salam", "pronunciation": "/səˈlɑːmi/", "example": "Salami is a kind of meat.", "exampleTr": "Salam bir çeşit ettir.", "image": "🥩"},
                {"english": "fruit juice", "turkish": "meyve suyu", "pronunciation": "/fruːt dʒuːs/", "example": "He drinks orange juice every morning.", "exampleTr": "Her sabah portakal suyu içer.", "image": "🧃"},
                {"english": "croissant", "turkish": "kruvasan", "pronunciation": "/krwɑːˈsɒ̃/", "example": "I eat a croissant with coffee.", "exampleTr": "Kahveyle kruvasan yerim.", "image": "🥐"},
                {"english": "sausage", "turkish": "sosis", "pronunciation": "/ˈsɒsɪdʒ/", "example": "We had eggs and sausages for breakfast.", "exampleTr": "Kahvaltıda yumurta ve sosis yedik.", "image": "🌭"},
                {"english": "muffin", "turkish": "küçük kek", "pronunciation": "/ˈmʌfɪn/", "example": "She baked chocolate muffins.", "exampleTr": "Çikolatalı mufinler yaptı.", "image": "🧁"},
                {"english": "pancake", "turkish": "krep", "pronunciation": "/ˈpænkeɪk/", "example": "We made pancakes for breakfast.", "exampleTr": "Kahvaltı için krep yaptık.", "image": "🥞"},
                {"english": "chips", "turkish": "patates cipsi", "pronunciation": "/tʃɪps/", "example": "He eats too many chips.", "exampleTr": "Çok fazla cips yer.", "image": "🍟"},
                {"english": "cucumber", "turkish": "salatalık", "pronunciation": "/ˈkjuːkʌmbə/", "example": "Cucumber is fresh and green.", "exampleTr": "Salatalık taze ve yeşildir.", "image": "🥒"},
                {"english": "mushroom", "turkish": "mantar", "pronunciation": "/ˈmʌʃruːm/", "example": "I like mushroom soup.", "exampleTr": "Mantar çorbasını severim.", "image": "🍄"},
                {"english": "bread", "turkish": "ekmek", "pronunciation": "/bred/", "example": "We buy fresh bread every day.", "exampleTr": "Her gün taze ekmek alırız.", "image": "🍞"},
                {"english": "coffee", "turkish": "kahve", "pronunciation": "/ˈkɒfi/", "example": "Would you like some coffee?", "exampleTr": "Biraz kahve ister misin?", "image": "☕"},
                {"english": "tea", "turkish": "çay", "pronunciation": "/tiː/", "example": "She drinks green tea.", "exampleTr": "Yeşil çay içer.", "image": "🍵"},
                {"english": "fried egg", "turkish": "sahanda yumurta", "pronunciation": "/fraɪd eɡ/", "example": "He cooked a fried egg.", "exampleTr": "Sahanda yumurta pişirdi.", "image": "🍳"},
                {"english": "meat", "turkish": "et", "pronunciation": "/miːt/", "example": "They eat meat for dinner.", "exampleTr": "Akşam yemeğinde et yerler.", "image": "🥩"},
                {"english": "fish", "turkish": "balık", "pronunciation": "/fɪʃ/", "example": "Fish is healthy food.", "exampleTr": "Balık sağlıklı bir yiyecektir.", "image": "🐟"},
                {"english": "cookie", "turkish": "kurabiye", "pronunciation": "/ˈkʊki/", "example": "I baked chocolate cookies.", "exampleTr": "Çikolatalı kurabiye yaptım.", "image": "🍪"},
                {"english": "toast", "turkish": "tost", "pronunciation": "/təʊst/", "example": "He eats cheese toast for breakfast.", "exampleTr": "Kahvaltıda peynirli tost yer.", "image": "🍞"},
                {"english": "hamburger", "turkish": "hamburger", "pronunciation": "/ˈhæmbɜːɡə/", "example": "We had hamburgers for lunch.", "exampleTr": "Öğle yemeğinde hamburger yedik.", "image": "🍔"},
                {"english": "junk food", "turkish": "abur cubur", "pronunciation": "/ˈdʒʌŋk fuːd/", "example": "Junk food is unhealthy.", "exampleTr": "Abur cubur sağlıksızdır.", "image": "🍟"},
                {"english": "food", "turkish": "yiyecek", "pronunciation": "/fuːd/", "example": "We need food and water.", "exampleTr": "Yiyeceğe ve suya ihtiyacımız var.", "image": "🍽️"},
                {"english": "drink", "turkish": "içecek", "pronunciation": "/drɪŋk/", "example": "She wants a cold drink.", "exampleTr": "Soğuk bir içecek istiyor.", "image": "🥤"},
                {"english": "fruit", "turkish": "meyve", "pronunciation": "/fruːt/", "example": "I eat fresh fruit every day.", "exampleTr": "Her gün taze meyve yerim.", "image": "🍎"},
                {"english": "vegetable", "turkish": "sebze", "pronunciation": "/ˈvedʒtəbl/", "example": "Eat more vegetables to stay healthy.", "exampleTr": "Sağlıklı kalmak için daha çok sebze ye.", "image": "🥦"},
                {"english": "blueberry", "turkish": "yaban mersini", "pronunciation": "/ˈbluːbəri/", "example": "Blueberries are sweet and healthy.", "exampleTr": "Yaban mersinleri tatlı ve sağlıklıdır.", "image": "🫐"},
                {"english": "peanut", "turkish": "yer fıstığı", "pronunciation": "/ˈpiːnʌt/", "example": "Peanuts are my favourite snack.", "exampleTr": "Yer fıstığı en sevdiğim atıştırmalıktır.", "image": "🥜"},
                {"english": "baked beans", "turkish": "pişmiş fasulye", "pronunciation": "/beɪkt biːnz/", "example": "He eats baked beans on toast.", "exampleTr": "Tostun üzerinde pişmiş fasulye yer.", "image": "🫘"},
                {"english": "fizzy drink", "turkish": "gazlı içecek", "pronunciation": "/ˈfɪzi drɪŋk/", "example": "Fizzy drinks have too much sugar.", "exampleTr": "Gazlı içeceklerde çok fazla şeker vardır.", "image": "🥤"},
                {"english": "healthy", "turkish": "sağlıklı", "pronunciation": "/ˈhelθi/", "example": "Fruit is healthy.", "exampleTr": "Meyve sağlıklıdır.", "image": "💪"},
                {"english": "unhealthy", "turkish": "sağlıksız", "pronunciation": "/ʌnˈhelθi/", "example": "Junk food is unhealthy.", "exampleTr": "Abur cubur sağlıksızdır.", "image": "🚫"},
                {"english": "yummy", "turkish": "lezzetli", "pronunciation": "/ˈjʌmi/", "example": "This cake is yummy!", "exampleTr": "Bu kek çok lezzetli!", "image": "😋"},
                {"english": "delicious", "turkish": "çok lezzetli", "pronunciation": "/dɪˈlɪʃəs/", "example": "The soup tastes delicious.", "exampleTr": "Çorba çok lezzetli.", "image": "🤤"},
                {"english": "favourite", "turkish": "en sevilen", "pronunciation": "/ˈfeɪvərɪt/", "example": "Pizza is my favourite food.", "exampleTr": "Pizza benim en sevdiğim yiyecektir.", "image": "⭐"},
                {"english": "nutritious", "turkish": "besleyici", "pronunciation": "/njuːˈtrɪʃəs/", "example": "Milk is nutritious.", "exampleTr": "Süt besleyicidir.", "image": "🥛"},
                {"english": "hungry", "turkish": "aç", "pronunciation": "/ˈhʌŋɡri/", "example": "I am hungry.", "exampleTr": "Açım.", "image": "🍽️"},
                {"english": "thirsty", "turkish": "susamış", "pronunciation": "/ˈθɜːsti/", "example": "He is thirsty after running.", "exampleTr": "Koşudan sonra susadı.", "image": "🥤"},
                {"english": "big", "turkish": "büyük", "pronunciation": "/bɪɡ/", "example": "This is a big breakfast.", "exampleTr": "Bu büyük bir kahvaltı.", "image": "🍳"},
                {"english": "traditional", "turkish": "geleneksel", "pronunciation": "/trəˈdɪʃənl/", "example": "Turkish breakfast is traditional.", "exampleTr": "Türk kahvaltısı gelenekseldir.", "image": "🇹🇷"},
                {"english": "oily", "turkish": "yağlı", "pronunciation": "/ˈɔɪli/", "example": "Fried food is oily.", "exampleTr": "Kızartılmış yiyecekler yağlıdır.", "image": "🍟"},
                {"english": "similar", "turkish": "benzer", "pronunciation": "/ˈsɪmɪlə/", "example": "These dishes are similar.", "exampleTr": "Bu yemekler birbirine benzer.", "image": "🔁"},
                {"english": "special", "turkish": "özel", "pronunciation": "/ˈspeʃl/", "example": "This is a special recipe.", "exampleTr": "Bu özel bir tariftir.", "image": "🎉"},
                {"english": "prefer", "turkish": "tercih etmek", "pronunciation": "/prɪˈfɜː/", "example": "I prefer tea to coffee.", "exampleTr": "Kahveye çayı tercih ederim.", "image": "☕"},
                {"english": "want", "turkish": "istemek", "pronunciation": "/wɒnt/", "example": "I want some juice.", "exampleTr": "Biraz meyve suyu istiyorum.", "image": "🧃"},
                {"english": "prepare", "turkish": "hazırlamak", "pronunciation": "/prɪˈpeə/", "example": "She prepares breakfast every morning.", "exampleTr": "Her sabah kahvaltı hazırlar.", "image": "🍳"},
                {"english": "hate", "turkish": "nefret etmek", "pronunciation": "/heɪt/", "example": "I hate cold coffee.", "exampleTr": "Soğuk kahveden nefret ederim.", "image": "😖"},
                {"english": "accept", "turkish": "kabul etmek", "pronunciation": "/əkˈsept/", "example": "He accepted the meal.", "exampleTr": "Yemeği kabul etti.", "image": "👍"},
                {"english": "refuse", "turkish": "reddetmek", "pronunciation": "/rɪˈfjuːz/", "example": "She refused to eat fast food.", "exampleTr": "Fast food yemeyi reddetti.", "image": "🙅‍♀️"},
                {"english": "serve", "turkish": "servis etmek", "pronunciation": "/sɜːv/", "example": "They serve breakfast at 8 a.m.", "exampleTr": "Kahvaltıyı sabah 8'de servis ederler.", "image": "🍽️"},
                {"english": "store", "turkish": "saklamak", "pronunciation": "/stɔː/", "example": "Store the food in the fridge.", "exampleTr": "Yemeği buzdolabında sakla.", "image": "🧊"},
                {"english": "give", "turkish": "vermek", "pronunciation": "/ɡɪv/", "example": "Give me some bread, please.", "exampleTr": "Bana biraz ekmek verir misin?", "image": "🤲"},
                {"english": "keep away", "turkish": "uzak durmak", "pronunciation": "/kiːp əˈweɪ/", "example": "Keep away from junk food.", "exampleTr": "Abur cuburdan uzak dur.", "image": "🚷"},
                {"english": "make a cake", "turkish": "kek yapmak", "pronunciation": "/meɪk ə keɪk/", "example": "Let's make a cake together.", "exampleTr": "Hadi birlikte kek yapalım.", "image": "🎂"},
                {"english": "belong", "turkish": "ait olmak", "pronunciation": "/bɪˈlɒŋ/", "example": "This spoon belongs to me.", "exampleTr": "Bu kaşık bana ait.", "image": "🥄"},
                {"english": "guess", "turkish": "tahmin etmek", "pronunciation": "/ɡes/", "example": "Can you guess my favourite food?", "exampleTr": "En sevdiğim yiyeceği tahmin edebilir misin?", "image": "❓"},
                {"english": "need", "turkish": "ihtiyaç duymak", "pronunciation": "/niːd/", "example": "We need more eggs.", "exampleTr": "Daha fazla yumurtaya ihtiyacımız var.", "image": "🛒"},
                {"english": "Enjoy it!", "turkish": "Afiyet olsun!", "pronunciation": "/ɪnˈdʒɔɪ ɪt/", "example": "Here is your breakfast, enjoy it!", "exampleTr": "İşte kahvaltınız, afiyet olsun!", "image": "😋"},
                {"english": "It’s all gone", "turkish": "Hepsi bitti", "pronunciation": "/ɪts ɔːl ɡɒn/", "example": "Sorry, it’s all gone.", "exampleTr": "Üzgünüm, hepsi bitti.", "image": "🚫"},
                {"english": "label", "turkish": "etiket", "pronunciation": "/ˈleɪbl/", "example": "Read the label before you buy.", "exampleTr": "Satın almadan önce etiketi oku.", "image": "🏷️"},
                {"english": "ingredients", "turkish": "malzemeler", "pronunciation": "/ɪnˈɡriːdiənts/", "example": "We need ingredients for the cake.", "exampleTr": "Kek için malzemelere ihtiyacımız var.", "image": "🥣"},
                {"english": "nationality", "turkish": "milliyet", "pronunciation": "/ˌnæʃəˈnæləti/", "example": "What is your nationality?", "exampleTr": "Milliyetin nedir?", "image": "🌍"}
              ]
              
        },
        {
            id: 3,
            title: "Unit 3 - Downtown",
            icon: "🏙️",
            description: "Şehir merkezi ve mekanlar",
            words: [
                {
                    english: "downtown",
                    turkish: "şehir merkezi",
                    pronunciation: "/ˌdaʊnˈtaʊn/",
                    example: "We go downtown on Saturdays.",
                    exampleTr: "Cumartesi günleri şehir merkezine gideriz.",
                    image: "🏙️"
                },
                {
                    english: "library",
                    turkish: "kütüphane",
                    pronunciation: "/ˈlaɪbreri/",
                    example: "I study in the library.",
                    exampleTr: "Kütüphanede ders çalışırım.",
                    image: "📚"
                },
                {
                    english: "museum",
                    turkish: "müze",
                    pronunciation: "/mjuːˈziːəm/",
                    example: "Let's go to the museum.",
                    exampleTr: "Hadi müzeye gidelim.",
                    image: "🏛️"
                },
                {
                    english: "park",
                    turkish: "park",
                    pronunciation: "/pɑːrk/",
                    example: "Children play in the park.",
                    exampleTr: "Çocuklar parkta oynar.",
                    image: "🌳"
                },
                {
                    english: "cinema",
                    turkish: "sinema",
                    pronunciation: "/ˈsɪnəmə/",
                    example: "We watch movies at the cinema.",
                    exampleTr: "Sinemada film izleriz.",
                    image: "🎬"
                },
                {
                    english: "restaurant",
                    turkish: "restoran",
                    pronunciation: "/ˈrestrɒnt/",
                    example: "This restaurant is very good.",
                    exampleTr: "Bu restoran çok iyi.",
                    image: "🍽️"
                },
                {
                    english: "hospital",
                    turkish: "hastane",
                    pronunciation: "/ˈhɒspɪtl/",
                    example: "The hospital is near here.",
                    exampleTr: "Hastane buraya yakın.",
                    image: "🏥"
                },
                {
                    english: "school",
                    turkish: "okul",
                    pronunciation: "/skuːl/",
                    example: "I go to school every day.",
                    exampleTr: "Her gün okula giderim.",
                    image: "🏫"
                }
            ]
        },
        {
            id: 4,
            title: "Unit 4 - Weather and Emotions",
            icon: "☀️",
            description: "Hava durumu ve duygular",
            words: [
                {
                    english: "weather",
                    turkish: "hava durumu",
                    pronunciation: "/ˈweðər/",
                    example: "The weather is nice today.",
                    exampleTr: "Bugün hava güzel.",
                    image: "🌤️"
                },
                {
                    english: "sunny",
                    turkish: "güneşli",
                    pronunciation: "/ˈsʌni/",
                    example: "It is sunny and warm.",
                    exampleTr: "Güneşli ve sıcak.",
                    image: "☀️"
                },
                {
                    english: "rainy",
                    turkish: "yağmurlu",
                    pronunciation: "/ˈreɪni/",
                    example: "It is rainy and cold.",
                    exampleTr: "Yağmurlu ve soğuk.",
                    image: "🌧️"
                },
                {
                    english: "happy",
                    turkish: "mutlu",
                    pronunciation: "/ˈhæpi/",
                    example: "I am very happy today.",
                    exampleTr: "Bugün çok mutluyum.",
                    image: "😊"
                },
                {
                    english: "sad",
                    turkish: "üzgün",
                    pronunciation: "/sæd/",
                    example: "Why are you sad?",
                    exampleTr: "Neden üzgünsün?",
                    image: "😢"
                },
                {
                    english: "angry",
                    turkish: "kızgın",
                    pronunciation: "/ˈæŋɡri/",
                    example: "Don't be angry!",
                    exampleTr: "Kızma!",
                    image: "😠"
                },
                {
                    english: "tired",
                    turkish: "yorgun",
                    pronunciation: "/ˈtaɪərd/",
                    example: "I am very tired.",
                    exampleTr: "Çok yorgunum.",
                    image: "😴"
                },
                {
                    english: "excited",
                    turkish: "heyecanlı",
                    pronunciation: "/ɪkˈsaɪtɪd/",
                    example: "I am excited about the party.",
                    exampleTr: "Parti için heyecanlıyım.",
                    image: "🤩"
                }
            ]
        },
        {
            id: 5,
            title: "Unit 5 - At the Fair",
            icon: "🎡",
            description: "Panayır ve eğlence",
            words: [
                {
                    english: "fair",
                    turkish: "panayır, lunapark",
                    pronunciation: "/feər/",
                    example: "Let's go to the fair!",
                    exampleTr: "Hadi panayıra gidelim!",
                    image: "🎡"
                },
                {
                    english: "carousel",
                    turkish: "atlıkarınca",
                    pronunciation: "/ˌkærəˈsel/",
                    example: "The carousel is fun.",
                    exampleTr: "Atlıkarınca eğlenceli.",
                    image: "🎠"
                },
                {
                    english: "ferris wheel",
                    turkish: "dönme dolap",
                    pronunciation: "/ˈferɪs wiːl/",
                    example: "I love the ferris wheel!",
                    exampleTr: "Dönme dolabı çok severim!",
                    image: "🎡"
                },
                {
                    english: "ticket",
                    turkish: "bilet",
                    pronunciation: "/ˈtɪkɪt/",
                    example: "Can I buy a ticket?",
                    exampleTr: "Bir bilet alabilir miyim?",
                    image: "🎫"
                },
                {
                    english: "candy",
                    turkish: "şeker",
                    pronunciation: "/ˈkændi/",
                    example: "I want some candy.",
                    exampleTr: "Biraz şeker istiyorum.",
                    image: "🍬"
                },
                {
                    english: "balloon",
                    turkish: "balon",
                    pronunciation: "/bəˈluːn/",
                    example: "I have a red balloon.",
                    exampleTr: "Kırmızı bir balonum var.",
                    image: "🎈"
                },
                {
                    english: "game",
                    turkish: "oyun",
                    pronunciation: "/ɡeɪm/",
                    example: "Let's play a game!",
                    exampleTr: "Hadi oyun oynayalım!",
                    image: "🎮"
                },
                {
                    english: "prize",
                    turkish: "ödül",
                    pronunciation: "/praɪz/",
                    example: "I won a prize!",
                    exampleTr: "Bir ödül kazandım!",
                    image: "🏆"
                }
            ]
        },
        {
            id: 6,
            title: "Unit 6 - Occupations",
            icon: "👨‍⚕️",
            description: "Meslekler",
            words: [
                {
                    english: "teacher",
                    turkish: "öğretmen",
                    pronunciation: "/ˈtiːtʃər/",
                    example: "My mother is a teacher.",
                    exampleTr: "Annem öğretmendir.",
                    image: "👩‍🏫"
                },
                {
                    english: "doctor",
                    turkish: "doktor",
                    pronunciation: "/ˈdɒktər/",
                    example: "The doctor helps sick people.",
                    exampleTr: "Doktor hasta insanlara yardım eder.",
                    image: "👨‍⚕️"
                },
                {
                    english: "nurse",
                    turkish: "hemşire",
                    pronunciation: "/nɜːrs/",
                    example: "The nurse is very kind.",
                    exampleTr: "Hemşire çok nazik.",
                    image: "👩‍⚕️"
                },
                {
                    english: "engineer",
                    turkish: "mühendis",
                    pronunciation: "/ˌendʒɪˈnɪər/",
                    example: "My father is an engineer.",
                    exampleTr: "Babam mühendistir.",
                    image: "👨‍💻"
                },
                {
                    english: "police officer",
                    turkish: "polis",
                    pronunciation: "/pəˈliːs ˈɒfɪsər/",
                    example: "The police officer keeps us safe.",
                    exampleTr: "Polis bizi güvende tutar.",
                    image: "👮"
                },
                {
                    english: "firefighter",
                    turkish: "itfaiyeci",
                    pronunciation: "/ˈfaɪərfaɪtər/",
                    example: "Firefighters are very brave.",
                    exampleTr: "İtfaiyeciler çok cesurdur.",
                    image: "👨‍🚒"
                },
                {
                    english: "chef",
                    turkish: "aşçı",
                    pronunciation: "/ʃef/",
                    example: "The chef cooks delicious food.",
                    exampleTr: "Aşçı lezzetli yemekler pişirir.",
                    image: "👨‍🍳"
                },
                {
                    english: "pilot",
                    turkish: "pilot",
                    pronunciation: "/ˈpaɪlət/",
                    example: "I want to be a pilot.",
                    exampleTr: "Pilot olmak istiyorum.",
                    image: "👨‍✈️"
                }
            ]
        }
    ]
};

// Yerel depolama yönetimi
const StorageManager = {
    // Kullanıcı ilerlemesini kaydet
    saveProgress: function(unitId, score) {
        const progress = this.getProgress();
        if (!progress[unitId]) {
            progress[unitId] = {
                completed: 0,
                total: 0,
                lastScore: 0
            };
        }
        progress[unitId].completed += 1;
        progress[unitId].lastScore = score;
        localStorage.setItem('fukoLingo_progress', JSON.stringify(progress));
    },

    // İlerlemeyi getir
    getProgress: function() {
        const data = localStorage.getItem('fukoLingo_progress');
        return data ? JSON.parse(data) : {};
    },

    // Toplam puan
    getTotalPoints: function() {
        const data = localStorage.getItem('fukoLingo_points');
        return data ? parseInt(data) : 0;
    },

    // Puan ekle
    addPoints: function(points) {
        const current = this.getTotalPoints();
        const newTotal = current + points;
        localStorage.setItem('fukoLingo_points', newTotal.toString());
        return newTotal;
    },

    // Öğrenilen kelime sayısı
    getLearnedWordsCount: function() {
        const data = localStorage.getItem('fukoLingo_learned');
        return data ? JSON.parse(data).length : 0;
    },

    // Kelimeyi öğrenildi olarak işaretle
    markWordLearned: function(unitId, wordIndex) {
        const learned = this.getLearnedWords();
        const key = `${unitId}-${wordIndex}`;
        if (!learned.includes(key)) {
            learned.push(key);
            localStorage.setItem('fukoLingo_learned', JSON.stringify(learned));
        }
    },

    // Öğrenilen kelimeleri getir
    getLearnedWords: function() {
        const data = localStorage.getItem('fukoLingo_learned');
        return data ? JSON.parse(data) : [];
    }
};
