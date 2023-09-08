// type QuestionTypeObject = {
//   [key: string]: {
//     [key: string]: string[];
//   };
// };

// const getSubjectData = (subject: string): QuestionTypeObject => {
//   switch (subject) {
//     case "matematik":
//       return matematik;
//     case "fizik":
//       return fizik;
//     case "kimya":
//       return kimya;
//     case "biyoloji":
//       return biyoloji;
//     default:
//       return {};
//   }
// };

export const lessons = ["matematik", "fizik", "kimya", "biyoloji"];
export const gameTypes = [
  "Yılan",
  "Adam Asmaca",
  "İskambil",
  "Labirent",
  "İstila",
];
export const competitionTypes = [
  "Bomba",
  "İstila",
  "Maraton",
  "Labirent",
  "Fetih",
];
export const choiceType = ["Rastgele", "Özel"];
export const comType = ["Video", "Message"];
export const orderType = ["Başlat", "Geri Dön"];
export const difficulty = ["1-Kolay", "2-Orta", "3-Zor"];
export const choices = ["A", "B", "C", "D", "E"];
export const classes = ["9", "10", "11", "12"];
export const sayisal = ["Matematik", "Fizik", "Kimya", "Biyoloji"];
export const months = [
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
];
export const profilSections = [
  "İstatistikler",
  "Bölge",
  "Ders",
  "Yarışma",
  "Deneme",
  "Mini Deneme",
];

export const CANVAS_SIZE = [730, 640];
export const SNAKE_START = [
  [8, 6.5],
  [8, 7],
  [8, 7.5],
  [8, 8],
];
export const APPLE_START = [8, 3];
export const SCALE = 40;
export const SPEED = 100;
export const DIRECTIONS = {
  ArrowUp: [0, -0.5],
  ArrowDown: [0, 0.5],
  ArrowLeft: [-0.5, 0],
  ArrowRight: [0.5, 0],
};

export const matematikSubjects: string[] = [
  "9-1-Sayılar ve Cebir",
  "9-2-Denklemler ve Eşitsizlikler",
  "9-3-Üçgenler",
  "9-4-Veri",
  "10-1-Sayma ve Olasılık",
  "10-2-Fonksiyonlar",
  "10-3-Polinomlar",
  "10-4-2.Dereceden Denklemler",
  "10-5-Dörtgen ve Çokgenler",
  "10-6-Uzay Geometri",
  "11-1-Trigonometri",
  "11-2-Analitik Geometri",
  "11-3-Fonksiyonlarda Uygulamalar",
  "11-4-Denklem ve Eşitsizlik Sistemleri",
  "11-5-Çember ve Daire",
  "11-6-Uzay Geometri",
  "11-7-Olasılık",
  "12-1-Üstel ve Logaritmik Fonksiyonlar",
  "12-2-Diziler",
  "12-3-Trigonometri",
  "12-4-Dönüşümler",
  "12-5-Türev",
  "12-6-İntegral",
  "12-7-Analitik Geometri",
];

export const fizikSubjects: string[] = [
  "9-1-Fizik Bilimine Giriş",
  "9-2-Madde ve Özellikleri",
  "9-3-Hareket Ve Kuvvet",
  "9-4-Enerji",
  "9-5-Isı ve Sıcaklık",
  "9-6-Elektrostatik",
  "10-1-Elektrik ve Manyetizma",
  "10-2-Basınç ve Kaldırma Kuvveti",
  "10-3-Dalgalar",
  "10-4-Optik",
  "11-1-Kuvvet ve Hareket",
  "11-2-Elektrik ve Manyetizma",
  "12-1-Çembersel Hareket",
  "12-2-Basit Harmonik Hareket",
  "12-3-Dalga Mekaniği",
  "12-4-Atom Fiziğine Giriş ve Radyoaktivite",
  "12-5-Modern Fizik",
  "12-6-Modern Fiziğin Teknolojideki Uygulamaları",
];
export const kimyaSubjects: string[] = [
  "9-1-Kimya Bilimi",
  "9-2-Atom ve Periyodik Sistem",
  "9-3-Kimyasal Türler Arası Etkileşimler",
  "9-4-Maddenin Halleri",
  "9-5-Doğa ve Kimya",
  "10-1-Kimyanın Temel Kanunları ve Kimyasal Hesaplamalar",
  "10-2-Karışımlar",
  "10-3-Asitler Bazlar ve Tuzlar",
  "10-4-Kimya Her Yerde",
  "11-1-Modern Atom Teorisi",
  "11-2-Gazlar",
  "11-3-Sıvı Çözeltiler ve Çözünürlük",
  "11-4-Kimyasal Tepkimlerde Enerji",
  "11-5-Kimyasal Tepkimlerde Hız",
  "11-6-Kimyasal Tepkimlerde Denge",
  "12-1-Kimya ve Elektrik",
  "12-2-Karbon Kimyasına Giriş",
  "12-3-Organik Bileşikler",
  "12-4-Enerji Kaynakları ve Bilimsel Gelişmeler",
];
export const biyolojiSubjects: string[] = [
  "9-1-Yaşam Bilimi Biyoloji",
  "9-2-Hücre",
  "9-3-Canlılar Dünyası",
  "10-1-Hücre Bölünmeleri",
  "10-2-Kalıtımın Genel İlkeleri",
  "10-3-Ekosistem Ekolojisi ve Güncel Çevre Sorunları",
  "11-1-İnsan Fizyolojisi",
  "11-2-Komünite ve Popülasyon Ekolojisi",
  "12-1-Genden Proteine",
  "12-2-Canlılarda Enerji Dönüşümleri",
  "12-3-Bitki Biyolojisi",
  "12-4-Canlılar ve Çevre",
];

export const matematik = {
  "9": {
    "1-Sayılar ve Cebir": ["1-Mantık", "2-Kümeler"],
    "2-Denklemler ve Eşitsizlikler": [
      "1-Sayı Kümeleri",
      "2-Bölünebilme Kuralları",
      "3-Birinci Dereceden Denklem ve Eşitsizlikler",
      "4-Üslü İfadeler ve Denklemler",
      "5-Denklemler ve Eşitsizlikler ilgili Uygulamalar",
    ],
    "3-Üçgenler": [
      "1-Üçgenlerde Temel Kavramlar",
      "2-Üçgenlerde Eşlik ve Benzerlik",
      "3-Üçgenin Yardımcı Elemanları",
      "4-Dik üçgen ve Trigonometri",
      "5-Üçgenin Alanı",
    ],
    "4-Veri": [
      "1-Merkezi Eğilim ve Yayılım Ölçüleri",
      "2-Verilerin Grafikle Gösterilmesi",
    ],
  },
  "10": {
    "1-Sayma ve Olasılık": ["1-Sıralama ve Seçme", "2-Basit Olayların Olasılıkları"],
    "2-Fonksiyonlar": [
      "1-Fonksiyon Kavramı ve Gösterimi",
      "2-İki Fonksiyonun Bileşkesi ve Bir Fonksiyonun Tersi",
    ],
    "3-Polinomlar": [
      "1-Polinom Kavramı ve Polinomlarla İşlemler",
      "2-Polinomların Çarpanlara Ayrılması",
    ],
    "4-2.Dereceden Denklemler": ["1-2.Dereceden Bir Bilinmeyenli Denklemler"],
    "5-Dörtgen ve Çokgenler": [
      "1-Çokgenler",
      "2-Dörtgen ve Özellikleri",
      "3-Özel Dörtgenler",
    ],
    "6-Uzay Geometri": ["1-Katı Cisimler"],
  },
  "11": {
    "1-Trigonometri": ["1-Yönlü Açılar", "2-Trigonotmerik Fonksiyonlar"],
    "2-Analitik Geometri": ["1-Doğrunun Analitik İncelenmesi"],
    "3-Fonksiyonlarda Uygulamalar": [
      "1-Fonksiyonlarla İlgili Uygulamalar",
      "2-İkinci Dereceden Fonksiyonlar ve Grafikleri",
      "3-Fonksiyonların Dönüşümleri",
    ],
    "4-Denklem ve Eşitsizlik Sistemleri": [
      "1-2.Dereceden İki Bilinmeyenli Denklem Sistemleri",
      "2-2.Dereceden Bir Bilinmeyenli Eşitsizlikler ve Eşitsizlikler Sistemleri",
    ],
    "5-Çember ve Daire": [
      "1-Çemberin Temel Elemanları",
      "2-Çemberde Açılar",
      "3-Çemberde Teğet",
      "4-Dairenin Çevresi ve Alanı",
    ],
    "6-Uzay Geometri": ["1-Katı Cisimler"],
    "7-Olasılık": ["1-Koşullu Olasılık", "2-Deneysel ve Teorik Olasılık"],
  },
  "12": {
    "1-Üstel ve Logaritmik Fonksiyonlar": [
      "1-Üstel Fonksiyon",
      "2-Logaritma Fonksiyonu",
      "3-Üstel,Logaritmik Denklemler ve Eşitsizlikler",
    ],
    "2-Diziler": ["1-Gerçek Sayı Dizileri"],
    "3-Trigonometri": [
      "1-Toplam-Fark ve İki Kat Açı Formülleri",
      "2-Trigonometrik Denklemler",
    ],
    "4-Dönüşümler": ["1-Analitik Düzlemde Temel Dönüşümler"],
    "5-Türev": [
      "1-Limit ve Süreklilik",
      "2-Anlık Değişim Oranı ve Türev",
      "3-Türevin Uygulamaları",
      "4-Dairenin Çevresi ve Alanı",
    ],
    "6-İntegral": ["1-Belirsiz İntegral", "2-Belirli İntegral ve Uygulamaları"],
    "7-Analitik Geometri": [
      "1-Çemberin Analitik İncelenmesi",
      "2-Deneysel ve Teorik Olasılık",
    ],
  },
};
export const fizik = {
  "9": {
    "1-Fizik Bilimine Giriş": [
      "1-Fizik Biliminin Önemi",
      "2-Fiziğin Uygulama Alanları",
      "3-Fiziksel Niceliklerin Sınıflandırılması",
      "4-Bilim Araştırma Merkezleri",
    ],
    "2-Madde ve Özellikleri": [
      "1-Madde ve Özkütle",
      "2-Dayanıklılık",
      "3-Yapışma ve Birbirini Tutma",
    ],
    "3-Hareket Ve Kuvvet": [
      "1-Hareket",
      "2-Kuvvet",
      "3-Newtonun Hareket Yasaları",
      "4-Sürtünme Kuvveti",
    ],
    "4-Enerji": [
      "1-İş Enerji ve Güç",
      "2-Mekanik Enerji",
      "3-Enerjinin Korunumu ve Enerji Dönüşümleri",
      "4-Verim",
      "5-Enerji Kaynakları",
    ],
    "5-Isı ve Sıcaklık": [
      "1-Isı ve Sıcaklık",
      "2-Hal Değişimi",
      "3-Isıl Denge",
      "4-Enerji İletim Yolları ve Enerji İletim Hızı",
      "4-Genleşme",
    ],
    "6-Elektrostatik": ["1-Elektrik Yükleri"],
  },
  "10": {
    "1-Elektrik ve Manyetizma": [
      "1-Elektrik Akımı,Potansiyel Farkı ve Direnç",
      "2-Elektrik Devreleri",
      "3-Mıknatıs ve Manyetik Alan",
      "4-Akım ve Manyetik Alan",
    ],
    "2-Basınç ve Kaldırma Kuvveti": ["1-Basınç", "2-Kaldırma Kuvveti"],
    "3-Dalgalar": [
      "1-Dalgalar",
      "2-Yay Dalgası",
      "3-Su Dalgası",
      "4-Ses Dalgası",
      "5-Deprem Dalgası",
    ],
    "4-Optik": [
      "1-Aydınlanma",
      "2-Gölge",
      "3-Yansıma",
      "4-Düzlem Ayna",
      "5-Küresel Aynalar",
      "6-Kırılma",
      "7-Mercekler",
      "8-Prizmalar",
      "9-Renk",
    ],
  },
  "11": {
    "1-Kuvvet ve Hareket": [
      "1-Vektörler",
      "2-Bağıl Hareket",
      "3-Newtonun Hareket Yasaları",
      "4-Bir Boyutta Sabit İvmeli Hareket",
      "5-İki Boyutta Hareket",
      "6-Enerji ve Hareket",
      "7-İtme ve Çizisel Momentum",
      "8-Tork",
      "9-Basit Makineler",
    ],
    "2-Elektrik ve Manyetizma": [
      "1-Elektriksel Kuvvet ve Elektriksel Alan",
      "2-Elektriksel Potansiyel",
      "3-Düzgün Elektriksel Alan ve Sığa",
      "4-Manyetizma ve Elektromanyetik İndüklenme",
      "5-Alternatif Akım",
      "6-Transformatörler",
    ],
  },
  "12": {
    "1-Çembersel Hareket": [
      "1-Düzgün Çembersel Hareket",
      "2-Dönerek Öteleme Hareketi",
      "3-Açısal Momentum",
      "4-Kütle Çekim Kuvveti",
      "5-Kepler Kanunları",
    ],
    "2-Basit Harmonik Hareket": ["1-Basit Harmonik Hareket"],
    "3-Dalga Mekaniği": [
      "1-Dalgalarda Kırınım,Girişim ve Doppler Olayı",
      "2-Elektromanyetik Dalgalar",
    ],
    "4-Atom Fiziğine Giriş ve Radyoaktivite": [
      "1-Atom Kavramının Tarihsel Gelişimi",
      "2-Büyük Patlama ve Evrenin Oluşumu",
      "3-Radyoaktivite",
    ],
    "5-Modern Fizik": [
      "1-Özel Görelilik",
      "2-Kuantum Fiziğine Giriş",
      "3-FotoElektrik Olayı",
      "4-Compton Saçılması ve De Broglie Dalga Boyu",
    ],
    "6-Modern Fiziğin Teknolojideki Uygulamaları": [
      "1-Görüntüleme Teknolojileri",
      "2-Yarı İletken Teknolojisi",
      "3-Süper İletkenler",
      "4-Nanoteknolojiler",
      "5-Laser Işınları",
    ],
  },
};
export const kimya = {
  "9": {
    "1-Kimya Bilimi": [
      "1-Simyadan Kimyaya",
      "2-Kimya Disiplinleri ve Kimyacıların Çalışma Alanları",
      "3-Kimyanın Sembolük Dili",
      "4-Kimya Uygulamasında İş Sağlığı ve Güvenliği",
    ],
    "2-Atom ve Periyodik Sistem": [
      "1-Atom Modelleri",
      "2-Atomun Yapısı",
      "3-Periyodik Sistem",
    ],
    "3-Kimyasal Türler Arası Etkileşimler": [
      "1-Kimyasal Tür",
      "2-Kimyasal Türler Arası Etkileşimlerin Sınıflandırılması",
      "3-Güçlü Etkileşimler",
      "4-Zayıf Etkileşimler",
      "5-Fiziksel ve Kimyasal Değişimler",
    ],
    "4-Maddenin Halleri": [
      "1-Maddenin Fiziksel Halleri",
      "2-Katılar",
      "3-Sıvılar",
      "4-Gazlar",
      "5-Plazma",
    ],
    "5-Doğa ve Kimya": ["1-Su ve Hayat", "2-Çevre Kimyası"],
  },
  "10": {
    "1-Kimyanın Temel Kanunları ve Kimyasal Hesaplamalar": [
      "1-Kimyanın Temel Kanunları",
      "2-Mol Kavramı",
      "3-Kimyasal Tepkimeler ve Denklemler ",
      "4-Kimyasal Tepkimlerde Hesaplamalar",
    ],
    "2-Karışımlar": [
      "1-Homojen ve Heterojen Karışımlar",
      "2-Ayırma ve Saflaştırma Teknikleri",
    ],
    "3-Asitler Bazlar ve Tuzlar": [
      "1-Asitler ve Bazlar",
      "2-Asitlerin ve Bazların Tepkimeleri",
      "3-Hayatımızda Asitler ve Bazlar",
      "4-Tuzlar",
    ],
    "4-Kimya Her Yerde": ["1-Yaygın Günlük Hayat Kimyasalları", "2-Gıdalar"],
  },
  "11": {
    "1-Modern Atom Teorisi": [
      "1-Atomun Kuantum Modeli",
      "2-Periyodik Sistem ve Elektron Dizilimleri",
      "3-Periyodik Özellikler",
      "4-Elementleri Tanıyalım",
      "5-Yükseltgenme Basamakları",
    ],
    "2-Gazlar": [
      "1-Gazların Özellikleri ve Gaz Yasaları",
      "2-İdeal Gaz Yasası",
      "3-Gazlarda Kinetik Teori",
      "4-Gaz Karışımları",
      "5-Gerçek Gazlar",
    ],
    "3-Sıvı Çözeltiler ve Çözünürlük": [
      "1-Çözücü Çözünen Etkileşimleri",
      "2-Derişim Birimleri",
      "3-Koligaitf Özellikler",
      "4-Çözünürlük",
      "5-Çözünürlüğe Etki Eden Faktörler",
    ],
    "4-Kimyasal Tepkimlerde Enerji": [
      "1-Tepkimlerde Isı Değişimi",
      "2-Oluşum Entalpisi",
      "3-Bağ Enerjileri",
      "4-Tepkime Isılarının Toplanabilirliği",
    ],
    "5-Kimyasal Tepkimlerde Hız": [
      "1-Tepkime Hızları",
      "2-Tepkime Hızını Etkileyen Faktörler",
    ],
    "6-Kimyasal Tepkimlerde Denge": [
      "1-Kimyasal Denge",
      "2-Dengeyi Etkileyen Faktörler",
      "3-Sulu Çözelti Dengeleri",
    ],
  },
  "12": {
    "1-Kimya ve Elektrik": [
      "1-İndirgenme-Yükseltgenme Tepkimelerinde Elektrik Akımı ",
      "2-Elektrotlar ve Elektrokimyasal Hücreler",
      "3-Elektrot Potansiyelleri",
      "4-Kimyasallardan Elektrik Üretimi",
      "5-Elektroliz",
      "6-Korozyon",
    ],
    "2-Karbon Kimyasına Giriş": [
      "1-Anorganik ve Organik Bileşikler",
      "2-Basit Formül ve Molekül Formülü",
      "3-Doğada Karbon",
      "4-Lewis Formülleri",
      "5-Hibritleşme-Molekül Geometrileri",
    ],
    "3-Organik Bileşikler": [
      "1-Hidrokarbonlar",
      "2-Fonksiyonel Gruplar",
      "3-Alkoller",
      "4-Eterler",
      "5-Karbonil Bileşikleri",
      "6-Karboksilik Asitler",
      "7-Esterler",
    ],
    "4-Enerji Kaynakları ve Bilimsel Gelişmeler": [
      "1-Fosil Yakıtlar",
      "2-Alternatif Eenrji Kaynakları",
      "3-Sürdürülebilirlik",
      "4-NanoTeknoloji",
    ],
  },
};

export const biyoloji = {
  "9": {
    "1-Yaşam Bilimi Biyoloji": [
      "1-Biyoloji ve CAnlıların Ortak Özellikleri",
      "2-Canlıların Yapısında Bulunan Temel Bileşikler",
    ],
    "2-Hücre": ["1-Hücre"],
    "3-Canlılar Dünyası": [
      "1-Canlıların Çeşitliliği ve Sınıflandırılması",
      "2-Canlı Alemler ve Özellikleri",
    ],
  },
  "10": {
    "1-Hücre Bölünmeleri": ["1-Mitoz ve Eşeysiz Üreme", "2-Mayoz ve Eşeyli Üreme"],
    "2-Kalıtımın Genel İlkeleri": ["1-Kalıtım ve Biyolojik Çeşitlilik"],
    "3-Ekosistem Ekolojisi ve Güncel Çevre Sorunları": [
      "1-Ekosistem Ekolojisi",
      "2-Güncel Çevre Sorunları ve İnsan",
      "3-Doğal Kaynaklar ve Biyolojik Çeşitliliğin Korunması",
    ],
  },
  "11": {
    "1-İnsan Fizyolojisi": [
      "1-Denetleyici ve Düzenleyici Sistem, Duyu Organları",
      "2-Destek ve Hareket Sistemi",
      "3-Sindirim Sistemi",
      "4-Dolaşım Sistemleri",
      "5-Solunum Sistemi",
      "6-Üriner Sistem",
      "7-Üreme Sistemi ve Embriyonik Gelişim",
    ],
    "2-Komünite ve Popülasyon Ekolojisi": [
      "1-Komunüite Ekolojisi",
      "2-Popülasyon Ekolojisi",
    ],
  },
  "12": {
    "1-Genden Proteine": [
      "1-Nükleik Asitlerin Keşfi ve Önemi",
      "2-Genetik Şifre ve Protein Sentezi",
    ],
    "2-Canlılarda Enerji Dönüşümleri": [
      "1-Canlılık ve Enerji",
      "2-Fotosentez",
      "3-Kemosentez",
      "4-Hücresel Solunum",
    ],
    "3-Bitki Biyolojisi": [
      "1-Bitkilerin Yapısı",
      "2-Bitkilerde Madde Taşınması",
      "3-Bitkilerde Eşeyli Üreme",
    ],
    "4-Canlılar ve Çevre": ["1-Canlılar ve Çevre"],
  },
};
