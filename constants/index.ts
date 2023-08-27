export const lessons = [
  "matematik",
  "fizik",
  "kimya",
  "biyoloji",
];
export const difficulty = [
  "Kolay",
  "Orta",
  "Zor",
];
export const choices = [
  "A",
  "B",
  "C",
  "D",
  "E"
];
export const classes = [
  "9",
  "10",
  "11",
  "12"
];
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

export const CANVAS_SIZE = [770, 620];
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
export const matematik = {
  "9": {
    "Sayılar ve Cebir": ["Mantık", "Kümeler"],
    "Denklemler ve Eşitsizlikler": [
      "Sayı Kümeleri",
      "Bölünebilme Kuralları",
      "Birinci Dereceden Denklem ve Eşitsizlikler",
      "Üslü İfadeler ve Denklemler",
      "Denklemler ve Eşitsizlikler ilgili Uygulamalar",
    ],
    "Üçgenler": [
      "Üçgenlerde Temel Kavramlar",
      "Üçgenlerde Eşlik ve Benzerlik",
      "Üçgenin Yardımcı Elemanları",
      "Dik üçgen ve Trigonometri",
      "Üçgenin Alanı",
    ],
    "Veri": [
      "Merkezi Eğilim ve Yayılım Ölçüleri",
      "Verilerin Grafikle Gösterilmesi",
    ],
  },
  "10": {
    "Sayma ve Olasılık": ["Sıralama ve Seçme", "Basit Olayların Olasılıkları"],
    "Fonksiyonlar": [
      "Fonksiyon Kavramı ve Gösterimi",
      "İki Fonksiyonun Bileşkesi ve Bir Fonksiyonun Tersi",
    ],
    "Polinomlar": [
      "Polinom Kavramı ve Polinomlarla İşlemler",
      "Polinomların Çarpanlara Ayrılması",
    ],
    "2.Dereceden Denklemler": ["2.Dereceden Bir Bilinmeyenli Denklemler"],
    "Dörtgen ve Çokgenler": [
      "Çokgenler",
      "Dörtgen ve Özellikleri",
      "Özel Dörtgenler",
    ],
    "Uzay Geometri": ["Katı Cisimler"],
  },
  "11": {
    "Trigonometri": ["Yönlü Açılar", "Trigonotmerik Fonksiyonlar"],
    "Analitik Geometri": ["Doğrunun Analitik İncelenmesi"],
    "Fonksiyonlarda Uygulamalar": [
      "Fonksiyonlarla İlgili Uygulamalar",
      "İkinci Dereceden Fonksiyonlar ve Grafikleri",
      "Fonksiyonların Dönüşümleri",
    ],
    "Denklem ve Eşitsizlik Sistemleri": [
      "2.Dereceden İki Bilinmeyenli Denklem Sistemleri",
      "2.Dereceden Bir Bilinmeyenli Eşitsizlikler ve Eşitsizlikler Sistemleri",
    ],
    "Çember ve Daire": [
      "Çemberin Temel Elemanları",
      "Çemberde Açılar",
      "Çemberde Teğet",
      "Dairenin Çevresi ve Alanı",
    ],
    "Uzay Geometri": ["Katı Cisimler"],
    "Olasılık": ["Koşullu Olasılık", "Deneysel ve Teorik Olasılık"],
  },
  "12": {
    "Üstel ve Logaritmik Fonksiyonlar": [
      "Üstel Fonksiyon",
      "Logaritma Fonksiyonu",
      "Üstel,Logaritmik Denklemler ve Eşitsizlikler",
    ],
    "Diziler": ["Gerçek Sayı Dizileri"],
    "Trigonometri": [
      "Toplam-Fark ve İki Kat Açı Formülleri",
      "Trigonometrik Denklemler",
    ],
    "Dönüşümler": ["Analitik Düzlemde Temel Dönüşümler"],
    "Türev": [
      "Limit ve Süreklilik",
      "Anlık Değişim Oranı ve Türev",
      "Türevin Uygulamaları",
      "Dairenin Çevresi ve Alanı",
    ],
    "İntegral": ["Belirsiz İntegral", "Belirli İntegral ve Uygulamaları"],
    "Analitik Geometri": [
      "Çemberin Analitik İncelenmesi",
      "Deneysel ve Teorik Olasılık",
    ],
  },
};
export const fizik = {
  "9": {
    "Fizik Bilimine Giriş": [
      "Fizik Biliminin Önemi",
      "Fiziğin Uygulama Alanları",
      "Fiziksel Niceliklerin Sınıflandırılması",
      "Bilim Araştırma Merkezleri",
    ],
    "Madde ve Özellikleri": [
      "Madde ve Özkütle",
      "Dayanıklılık",
      "Yapışma ve Birbirini Tutma",
    ],
    "Hareket Ve Kuvvet": [
      "Hareket",
      "Kuvvet",
      "Newtonun Hareket Yasaları",
      "Sürtünme Kuvveti",
    ],
    "Enerji": [
      "İş Enerji ve Güç",
      "Mekanik Enerji",
      "Enerjinin Korunumu ve Enerji Dönüşümleri",
      "Verim",
      "Enerji Kaynakları",
    ],
    "Isı ve Sıcaklık": [
      "Isı ve Sıcaklık",
      "Hal Değişimi",
      "Isıl Denge",
      "Enerji İletim Yolları ve Enerji İletim Hızı",
      "Genleşme",
    ],
    "Elektrostatik": ["Elektrik Yükleri"],
  },
  "10": {
    "Elektrik ve Manyetizma": [
      "Elektrik Akımı,Potansiyel Farkı ve Direnç",
      "Elektrik Devreleri",
      "Mıknatıs ve Manyetik Alan",
      "Akım ve Manyetik Alan",
    ],
    "Basınç ve Kaldırma Kuvveti": ["Basınç", "Kaldırma Kuvveti"],
    "Dalgalar": [
      "Dalgalar",
      "Yay Dalgası",
      "Su Dalgası",
      "Ses Dalgası",
      "Deprem Dalgası",
    ],
    "Optik": [
      "Aydınlanma",
      "Gölge",
      "Yansıma",
      "Düzlem Ayna",
      "Küresel Aynalar",
      "Kırılma",
      "Mercekler",
      "Prizmalar",
      "Renk",
    ],
  },
  "11": {
    "Kuvvet ve Hareket": [
      "Vektörler",
      "Bağıl Hareket",
      "Newtonun Hareket Yasaları",
      "Bir Boyutta Sabit İvmeli Hareket",
      "İki Boyutta Hareket",
      "Enerji ve Hareket",
      "İtme ve Çizisel Momentum",
      "Tork",
      "Basit Makineler",
    ],
    "Elektrik ve Manyetizma": [
      "Elektriksel Kuvvet ve Elektriksel Alan",
      "Elektriksel Potansiyel",
      "Düzgün Elektriksel Alan ve Sığa",
      "Manyetizma ve Elektromanyetik İndüklenme",
      "Alternatif Akım",
      "Transformatörler",
    ],
  },
  "12": {
    "Çembersel Hareket": [
      "Düzgün Çembersel Hareket",
      "Dönerek Öteleme Hareketi",
      "Açısal Momentum",
      "Kütle Çekim Kuvveti",
      "Kepler Kanunları",
    ],
    "Basit Harmonik Hareket": ["Basit Harmonik Hareket"],
    "Dalga Mekaniği": [
      "Dalgalarda Kırınım,Girişim ve Doppler Olayı",
      "Elektromanyetik Dalgalar",
    ],
    "Atom Fiziğine Giriş ve Radyoaktivite": [
      "Atom Kavramının Tarihsel Gelişimi",
      "Büyük Patlama ve Evrenin Oluşumu",
      "Radyoaktivite",
    ],
    "Modern Fizik": [
      "Özel Görelilik",
      "Kuantum Fiziğine Giriş",
      "FotoElektrik Olayı",
      "Compton Saçılması ve De Broglie Dalga Boyu",
    ],
    "Modern Fiziğin Teknolojideki Uygulamaları": [
      "Görüntüleme Teknolojileri",
      "Yarı İletken Teknolojisi",
      "Süper İletkenler",
      "Nanoteknolojiler",
      "Laser Işınları",
    ],
  },
};
export const kimya = {
  "9": {
    "Kimya Bilimi": [
      "Simyadan Kimyaya",
      "Kimya Disiplinleri ve Kimyacıların Çalışma Alanları",
      "Kimyanın Sembolük Dili",
      "Kimya Uygulamasında İş Sağlığı ve Güvenliği",
    ],
    "Atom ve Periyodik Sistem": [
      "Atom Modelleri",
      "Atomun Yapısı",
      "Periyodik Sistem",
    ],
    "Kimyasal Türler Arası Etkileşimler": [
      "Kimyasal Tür",
      "Kimyasal Türler Arası Etkileşimlerin Sınıflandırılması",
      "Güçlü Etkileşimler",
      "Zayıf Etkileşimler",
      "Fiziksel ve Kimyasal Değişimler",
    ],
    "Maddenin Halleri": [
      "Maddenin Fiziksel Halleri",
      "Katılar",
      "Sıvılar",
      "Gazlar",
      "Plazma",
    ],
    "Doğa ve Kimya": ["Su ve Hayat", "Çevre Kimyası"],
  },
  "10": {
    "Kimyanın Temel Kanunları ve Kimyasal Hesaplamalar": [
      "Kimyanın Temel Kanunları",
      "Mol Kavramı",
      "Kimyasal Tepkimeler ve Denklemler ",
      "Kimyasal Tepkimlerde Hesaplamalar",
    ],
    "Karışımlar": [
      "Homojen ve Heterojen Karışımlar",
      "Ayırma ve Saflaştırma Teknikleri",
    ],
    "Asitler Bazlar ve Tuzlar": [
      "Asitler ve Bazlar",
      "Asitlerin ve Bazların Tepkimeleri",
      "Hayatımızda Asitler ve Bazlar",
      "Tuzlar",
    ],
    "Kimya Her Yerde": ["Yaygın Günlük Hayat Kimyasalları", "Gıdalar"],
  },
  "11": {
    "Modern Atom Teorisi": [
      "Atomun Kuantum Modeli",
      "Periyodik Sistem ve Elektron Dizilimleri",
      "Periyodik Özellikler",
      "Elementleri Tanıyalım",
      "Yükseltgenme Basamakları",
    ],
    "Gazlar": [
      "Gazların Özellikleri ve Gaz Yasaları",
      "İdeal Gaz Yasası",
      "Gazlarda Kinetik Teori",
      "Gaz Karışımları",
      "Gerçek Gazlar",
    ],
    "Sıvı Çözeltiler ve Çözünürlük": [
      "Çözücü Çözünen Etkileşimleri",
      "Derişim Birimleri",
      "Koligaitf Özellikler",
      "Çözünürlük",
      "Çözünürlüğe Etki Eden Faktörler",
    ],
    "Kimyasal Tepkimlerde Enerji": [
      "Tepkimlerde Isı Değişimi",
      "Oluşum Entalpisi",
      "Bağ Enerjileri",
      "Tepkime Isılarının Toplanabilirliği",
    ],
    "Kimyasal Tepkimlerde Hız": [
      "Tepkime Hızları",
      "Tepkime Hızını Etkileyen Faktörler",
    ],
    "Kimyasal Tepkimlerde Denge": [
      "Kimyasal Denge",
      "Dengeyi Etkileyen Faktörler",
      "Sulu Çözelti Dengeleri",
    ],
  },
  "12": {
    "Kimya ve Elektrik": [
      "İndirgenme-Yükseltgenme Tepkimelerinde Elektrik Akımı ",
      "Elektrotlar ve Elektrokimyasal Hücreler",
      "Elektrot Potansiyelleri",
      "Kimyasallardan Elektrik Üretimi",
      "Elektroliz",
      "Korozyon",
    ],
    "Karbon Kimyasına Giriş": [
      "Anorganik ve Organik Bileşikler",
      "Basit Formül ve Molekül Formülü",
      "Doğada Karbon",
      "Lewis Formülleri",
      "Hibritleşme-Molekül Geometrileri",
    ],
    "Organik Bileşikler": [
      "Hidrokarbonlar",
      "Fonksiyonel Gruplar",
      "Alkoller",
      "Eterler",
      "Karbonil Bileşikleri",
      "Karboksilik Asitler",
      "Esterler",
    ],
    "Enerji Kaynakları ve Bilimsel Gelişmeler": [
      "Fosil Yakıtlar",
      "Alternatif Eenrji Kaynakları",
      "Sürdürülebilirlik",
      "NanoTeknoloji",
    ],
  },
};

export const biyoloji = {
  "9": {
    "Yaşam Bilimi Biyoloji": [
      "Biyoloji ve CAnlıların Ortak Özellikleri",
      "Canlıların Yapısında Bulunan Temel Bileşikler",
    ],
    "Hücre": ["Hücre"],
    "Canlılar Dünyası": [
      "Canlıların Çeşitliliği ve Sınıflandırılması",
      "Canlı Alemler ve Özellikleri",
    ],
  },
  "10": {
    "Hücre Bölünmeleri": ["Mitoz ve Eşeysiz Üreme", "Mayoz ve Eşeyli Üreme"],
    "Kalıtımın Genel İlkeleri": ["Kalıtım ve Biyolojik Çeşitlilik"],
    "Ekosistem Ekolojisi ve Güncel Çevre Sorunları": [
      "Ekosistem Ekolojisi",
      "Güncel Çevre Sorunları ve İnsan",
      "Doğal Kaynaklar ve Biyolojik Çeşitliliğin Korunması",
    ],
  },
  "11": {
    "İnsan Fizyolojisi": [
      "Denetleyici ve Düzenleyici Sistem, Duyu Organları",
      "Destek ve Hareket Sistemi",
      "Sindirim Sistemi",
      "Dolaşım Sistemleri",
      "Solunum Sistemi",
      "Üriner Sistem",
      "Üreme Sistemi ve Embriyonik Gelişim",
    ],
    "Komünite ve Popülasyon Ekolojisi": [
      "Komunüite Ekolojisi",
      "Popülasyon Ekolojisi",
    ],
  },
  "12": {
    "Genden Proteine": [
      "Nükleik Asitlerin Keşfi ve Önemi",
      "Genetik Şifre ve Protein Sentezi",
    ],
    "Canlılarda Enerji Dönüşümleri": [
      "Canlılık ve Enerji",
      "Fotosentez",
      "Kemosentez",
      "Hücresel Solunum",
    ],
    "Bitki Biyolojisi": [
      "Bitkilerin Yapısı",
      "Bitkilerde Madde Taşınması",
      "Bitkilerde Eşeyli Üreme",
    ],
    "Canlılar ve Çevre": ["Canlılar ve Çevre"],
  },
};
