// FukoLingo - Kelime Veritabanı
// 6. Sınıf İngilizce Kelimeleri - Ünitelere Göre Düzenlenmiş

const vocabularyData = {
    units: [
        {
            id: 1,
            title: "Unit 1 - Life",
            icon: "🌍",
            description: "Yaşam, hobiler ve günlük aktiviteler",
            words: [
                {
                    english: "life",
                    turkish: "hayat, yaşam",
                    pronunciation: "/laɪf/",
                    example: "I love my life.",
                    exampleTr: "Hayatımı seviyorum.",
                    image: "🌟"
                },
                {
                    english: "music",
                    turkish: "müzik",
                    pronunciation: "/ˈmjuːzɪk/",
                    example: "I listen to music every day.",
                    exampleTr: "Her gün müzik dinlerim.",
                    image: "🎵"
                },
                {
                    english: "sport",
                    turkish: "spor",
                    pronunciation: "/spɔːrt/",
                    example: "My favorite sport is football.",
                    exampleTr: "En sevdiğim spor futboldur.",
                    image: "⚽"
                },
                {
                    english: "book",
                    turkish: "kitap",
                    pronunciation: "/bʊk/",
                    example: "I read a book every week.",
                    exampleTr: "Her hafta bir kitap okurum.",
                    image: "📚"
                },
                {
                    english: "friend",
                    turkish: "arkadaş",
                    pronunciation: "/frend/",
                    example: "She is my best friend.",
                    exampleTr: "O benim en iyi arkadaşım.",
                    image: "👫"
                },
                {
                    english: "family",
                    turkish: "aile",
                    pronunciation: "/ˈfæməli/",
                    example: "I love my family.",
                    exampleTr: "Ailemi seviyorum.",
                    image: "👨‍👩‍👧‍👦"
                },
                {
                    english: "hobby",
                    turkish: "hobi",
                    pronunciation: "/ˈhɒbi/",
                    example: "Reading is my hobby.",
                    exampleTr: "Okumak benim hobimdir.",
                    image: "🎨"
                },
                {
                    english: "weekend",
                    turkish: "hafta sonu",
                    pronunciation: "/ˌwiːkˈend/",
                    example: "We play games on the weekend.",
                    exampleTr: "Hafta sonu oyun oynarız.",
                    image: "📅"
                }
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
