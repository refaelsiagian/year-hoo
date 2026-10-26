export interface Product {
  id: number;
  name: string;
  category: "Yearly Book" | "Journal" | "Kalender" | "Sticker";
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  sold: number;
  icon: string;
  badge?: string;
  isAvailable?: boolean;
  tagline: string;
  description: string;
  specs: Record<string, string>;
  highlights: string[];
  image?: string;
  gallery?: string[];
}

export const products: Product[] = [
  {
    id: 9,
    name: "Sanrio Characters Calendar 2026",
    category: "Kalender",
    price: 69000,
    originalPrice: 85000,
    rating: 5.0,
    reviews: 128,
    sold: 620,
    icon: "🎀",
    badge: "Special Edition",
    isAvailable: true,
    image: "/products/sanrio-calendar-cover.png",
    gallery: [
      "/products/sanrio-calendar-cover.png",
      "/products/sanrio-calendar-jan.png",
      "/products/sanrio-calendar-feb.png",
    ],
    tagline: "File kalender meja digital Sanrio 2026 (PDF Print-Ready 300 DPI) bertema dessert manis. Siap unduh & cetak mandiri!",
    description: "File digital kalender meja edisi spesial Sanrio Characters 2026 dengan ilustrasi beresolusi tinggi (300 DPI siap cetak). Menghadirkan karakter favorit seperti Kuromi, My Melody, Pochacco, dan teman-teman dengan tema kue dan camilan manis di setiap bulan. Dilengkapi penanggalan rapi, penanda libur nasional, dan kotak 'NOTE' bulanan. Kamu bisa langsung mengunduh filenya untuk dicetak mandiri di percetakan terdekat atau dijadikan wallpaper kalender tablet!",
    specs: {
      "Format File": "Digital PDF High-Resolution (300 DPI, Print-Ready)",
      "Saran Ukuran Cetak": "A5 Landscape / 15 x 21 cm (Ukuran Kalender Meja Duduk)",
      "Saran Kertas Cetak": "Art Carton 230 - 260gsm atau Matte Paper tebal",
      "Saran Jilid": "Spiral kawat ganda di percetakan / fotokopi terdekat",
      "Metode Pengiriman": "Instant Download (Link Google Drive via WhatsApp)",
      "Lisensi": "Penggunaan Pribadi (Bebas dicetak berulang untuk diri sendiri)"
    },
    highlights: [
      "File digital 300 DPI resolusi tinggi standar percetakan (tidak pecah)",
      "Langsung unduh tanpa menunggu kurir ekspedisi (100% bebas ongkir)",
      "Bebas dicetak sendiri di rumah atau percetakan lokal pilihanmu",
      "Bisa juga dijadikan kalender digital pada tablet, iPad, atau desktop PC"
    ]
  },
  {
    id: 1,
    name: "Sakura Chibi Yearly Planner",
    category: "Yearly Book",
    price: 149000,
    originalPrice: 179000,
    rating: 4.9,
    reviews: 142,
    sold: 380,
    icon: "🌸",
    badge: "Best Seller",
    isAvailable: false,
    tagline: "Template planner tahunan digital format PDF High-Res siap cetak mandiri atau diimpor ke GoodNotes & Notability!",
    description: "File digital agenda tahunan premium edisi Sakura Chibi yang dirancang untuk membantumu merencanakan tahun secara lebih terstruktur dan menyenangkan. File PDF interaktif dan siap cetak (printable) lengkap dengan kalender tahunan, monthly spread, weekly planner, habit tracker, hingga budget sheet. Siap diimpor ke aplikasi tablet atau dicetak sendiri.",
    specs: {
      "Format File": "Digital PDF High-Resolution (300 DPI Print-Ready)",
      "Saran Ukuran Cetak": "A5 (14.8 x 21 cm)",
      "Saran Kertas Cetak": "Bookpaper Cream atau HVS 100gsm (ramah pena & highlighter)",
      "Saran Jilid": "Jahit benang, jilid lem panas, atau loose-leaf binder A5",
      "Kompatibilitas Digital": "GoodNotes, Notability, Samsung Notes, CollaNote, PDF Reader",
      "Lisensi": "Penggunaan Pribadi (Personal Use Only)"
    },
    highlights: [
      "Format PDF siap cetak mandiri atau langsung dipakai di tablet/iPad",
      "Layout rapi 12 bulan lengkap dengan habit tracker dan weekly spread",
      "Bebas mencetak ulang lembar halaman mana saja yang kamu perlukan",
      "Tanpa biaya ongkir, hemat waktu, dan ramah lingkungan"
    ]
  },
  {
    id: 2,
    name: "Midnight Owl Journal",
    category: "Journal",
    price: 89000,
    originalPrice: 109000,
    rating: 4.8,
    reviews: 95,
    sold: 210,
    icon: "🦉",
    badge: "Staff Pick",
    isAvailable: false,
    tagline: "File jurnal digital undated bernuansa malam estetis untuk bullet journaling di tablet atau dicetak mandiri.",
    description: "File digital jurnal tanpa tanggal (undated) bertema Midnight Owl dengan kombinasi dot grid dan ruled format PDF. Sangat fleksibel untuk menuangkan refleksi harian, coretan ide, atau diary pribadi. Bisa dipakai langsung di aplikasi iPad/tablet atau dicetak di percetakan terdekat.",
    specs: {
      "Format File": "Digital PDF High-Res (Dot Grid 5mm & Ruled)",
      "Saran Ukuran Cetak": "A5 (14.8 x 21 cm)",
      "Saran Kertas Cetak": "HVS Cream atau Bookpaper 90-100gsm lembut di mata",
      "Saran Jilid": "Spiral kawat atau jilid jahit benang",
      "Kompatibilitas Digital": "GoodNotes, Notability, Xodo, Samsung Notes",
      "Lisensi": "Penggunaan Pribadi (Personal Use Only)"
    },
    highlights: [
      "Format Undated: bebas diisi kapan saja tanpa halaman terbuang",
      "Kombinasi dot grid dan bergaris untuk fleksibilitas menulis & menggambar",
      "Desain estetis deep midnight blue resolusi tinggi",
      "Unduh instan tanpa pengiriman fisik dan tanpa ongkos kirim"
    ]
  },
  {
    id: 7,
    name: "Chibi Seasons Desk Calendar 2027",
    category: "Kalender",
    price: 65000,
    originalPrice: 79000,
    rating: 5.0,
    reviews: 88,
    sold: 450,
    icon: "🗓️",
    badge: "Favorit Meja Kerja",
    isAvailable: false,
    tagline: "File kalender meja digital 2027 tema 4 musim format PDF resolusi tinggi siap cetak mandiri!",
    description: "File digital kalender meja Year!hoo edisi 2027 berisi 12 ilustrasi karakter chibi eksklusif bertema 4 musim. Format PDF siap cetak dilengkapi penanggalan nasional dan kolom memo/to-do bulanan. Cukup bawa file ke percetakan lokal untuk dicetak menjadi kalender meja duduk spiral yang cantik.",
    specs: {
      "Format File": "Digital PDF High-Res 300 DPI (CMYK Print-Ready)",
      "Saran Ukuran Cetak": "A5 Landscape (15 x 21 cm)",
      "Saran Kertas Cetak": "Art Carton 230 - 260gsm tebal",
      "Saran Dudukan": "Dudukan hardboard linen + spiral kawat meja",
      "Pengiriman": "Instant Download (Link Google Drive)",
      "Lisensi": "Penggunaan Pribadi (Personal Use Only)"
    },
    highlights: [
      "12 artwork chibi original full-color resolusi cetak tajam",
      "Penanda hari libur nasional akurat dengan area to-do list",
      "File siap serah ke percetakan tanpa perlu setting ulang",
      "Bisa juga dijadikan background kalender bulanan di laptop"
    ]
  },
  {
    id: 3,
    name: "Cute Mascot Sticker Pack",
    category: "Sticker",
    price: 15000,
    originalPrice: 20000,
    rating: 4.9,
    reviews: 320,
    sold: 1200,
    icon: "⭐",
    badge: "Top Seller",
    isAvailable: false,
    tagline: "Paket stiker digital PNG transparan & lembar printable PDF siap cetak stiker sendiri!",
    description: "Koleksi stiker maskot imut Year!hoo dalam format file digital. Dilengkapi file PNG transparan individual untuk aplikasi catatan digital (GoodNotes elements) serta lembar PDF A6 siap cetak di kertas stiker vinyl/matte sendiri di rumah.",
    specs: {
      "Format File": "ZIP berisi PNG Transparan Individual + PDF Sheet A6",
      "Saran Ukuran Cetak": "A6 (10.5 x 14.8 cm)",
      "Saran Kertas Cetak": "Kertas Stiker Vinyl Matte / Glossy atau HVS Stiker",
      "Kompatibilitas Digital": "GoodNotes Elements, Notability, WhatsApp Sticker",
      "Pengiriman": "Instant Download (File Digital via Link)",
      "Lisensi": "Penggunaan Pribadi (Personal Use Only)"
    },
    highlights: [
      "Format PNG transparan beresolusi tinggi siap pakai di tablet",
      "Lembar PDF rapi memudahkan cetak dan potong kiss-cut/die-cut",
      "Bebas dicetak berulang kali kapan pun kamu butuh stiker baru",
      "Instan unduh tanpa menunggu paket kurir"
    ]
  },
  {
    id: 4,
    name: "Summer Vibes Planner 2027",
    category: "Yearly Book",
    price: 159000,
    originalPrice: 189000,
    rating: 4.8,
    reviews: 74,
    sold: 180,
    icon: "☀️",
    badge: "Edisi Terbatas",
    isAvailable: false,
    tagline: "Planner tahunan digital bertema liburan pantai cerah untuk tablet atau dicetak sendiri.",
    description: "File digital planner tahunan edisi Summer Vibes berformat PDF resolusi tinggi. Dilengkapi vision board, monthly and weekly spread, habit tracker, dan cover bertema tropis. Siap diimpor ke aplikasi tablet atau dicetak mandiri.",
    specs: {
      "Format File": "Digital PDF High-Resolution (300 DPI)",
      "Saran Ukuran Cetak": "A5 (14.8 x 21 cm)",
      "Saran Kertas Cetak": "Bookpaper atau HVS 100gsm",
      "Saran Jilid": "Hardcover jilid lem panas atau binder ring A5",
      "Pengiriman": "Instant Download (File Digital)",
      "Kompatibilitas Digital": "GoodNotes, Notability, Samsung Notes"
    },
    highlights: [
      "Layout produktivitas lengkap: vision board, quarterly, monthly, weekly",
      "Desain ceria penuh warna dengan kualitas cetak tajam",
      "File digital ramah lingkungan tanpa limbah sisa",
      "Langsung unduh setelah pembelian"
    ]
  },
  {
    id: 5,
    name: "Minimalist Anime Notes",
    category: "Journal",
    price: 79000,
    originalPrice: 95000,
    rating: 4.7,
    reviews: 62,
    sold: 150,
    icon: "📝",
    badge: "Minimalis",
    isAvailable: false,
    tagline: "File catatan digital minimalis format PDF B6 bernuansa bersih dengan aksen lineart anime.",
    description: "File digital buku catatan bergaris simpel dengan sentuhan lineart karakter anime. Format PDF siap pakai untuk aplikasi catatan digital atau dicetak mandiri menjadi buku saku B6 praktis.",
    specs: {
      "Format File": "Digital PDF Print-Ready (Ruled 7mm)",
      "Saran Ukuran Cetak": "B6 (12.5 x 17.6 cm) atau A5",
      "Saran Kertas Cetak": "HVS 80-90gsm Soft White",
      "Saran Jilid": "Stitch binding jahit samping atau staples",
      "Pengiriman": "Instant Download",
      "Kompatibilitas Digital": "GoodNotes, Notability, PDF Readers"
    },
    highlights: [
      "Desain bersih minimalis dengan ruang tulis lapang",
      "Nyaman dipakai untuk kuliah, kerja, atau bullet journaling",
      "Bebas dicetak mandiri sebanyak halaman yang diinginkan",
      "Praktis dan hemat biaya"
    ]
  },
  {
    id: 8,
    name: "Aesthetic Fantasy Wall Calendar",
    category: "Kalender",
    price: 75000,
    originalPrice: 90000,
    rating: 4.9,
    reviews: 53,
    sold: 190,
    icon: "🌌",
    badge: "Dekoratif",
    isAvailable: false,
    tagline: "File kalender dinding digital format PDF resolusi tinggi sekelas poster art siap cetak mandiri.",
    description: "File digital kalender dinding beresolusi super tajam (300 DPI) menampilkan karya ilustrasi pemandangan langit fantasi magis. Format PDF siap dibawa ke percetakan lokal untuk dicetak dalam ukuran besar A3/A4 sebagai kalender dinding sekaligus poster seni dekorasi kamar.",
    specs: {
      "Format File": "Digital PDF High-Resolution (300 DPI)",
      "Saran Ukuran Cetak": "A3 (29.7 x 42 cm) atau A4",
      "Saran Kertas Cetak": "Art Carton 210 - 260gsm atau Luster Paper",
      "Saran Gantungan": "Klem seng kalender atau gantungan spiral dinding",
      "Pengiriman": "Instant Download",
      "Lisensi": "Penggunaan Pribadi (Personal Use Only)"
    },
    highlights: [
      "Definisi tinggi standar poster seni galeri (tidak buram)",
      "Hemat biaya cetak dengan mencetak sendiri di percetakan lokal",
      "Bisa juga digunakan sebagai wallpaper desktop/laptop",
      "Akses unduhan instan tanpa ongkir"
    ]
  },
  {
    id: 6,
    name: "Holo Chibi Face Stickers",
    category: "Sticker",
    price: 20000,
    originalPrice: 25000,
    rating: 5.0,
    reviews: 195,
    sold: 890,
    icon: "✨",
    badge: "Holographic",
    isAvailable: false,
    tagline: "Paket stiker ekspresi chibi digital (PNG transparan) & printable sheet untuk stiker holografik.",
    description: "File digital stiker ekspresi wajah chibi imut. Format PNG transparan untuk stiker digital dan PDF siap cetak. Sangat cocok jika ingin dicetak mandiri di atas kertas stiker rainbow holographic di percetakan stiker lokal.",
    specs: {
      "Format File": "PNG Transparan High-Res + PDF Printable Sheet",
      "Saran Ukuran Cetak": "A6 (10.5 x 14.8 cm)",
      "Saran Kertas Cetak": "Kertas Stiker Rainbow Holographic Vinyl",
      "Kompatibilitas Digital": "GoodNotes Elements, Notability, WhatsApp Stickers",
      "Pengiriman": "Instant Download",
      "Lisensi": "Penggunaan Pribadi (Personal Use Only)"
    },
    highlights: [
      "Resolusi tinggi siap diaplikasikan pada digital planner",
      "Template siap cetak mandiri di kertas stiker pilihanmu",
      "Cocok untuk mood tracker harian",
      "Akses instan tanpa kurir pengiriman"
    ]
  }
];

export function getProductById(id: number | string): Product | undefined {
  const numericId = typeof id === "string" ? parseInt(id, 10) : id;
  return products.find(p => p.id === numericId);
}

export function getRelatedProducts(currentId: number, category: string, limit = 3): Product[] {
  const sameCategory = products.filter(p => p.id !== currentId && p.category === category);
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const others = products.filter(p => p.id !== currentId && p.category !== category);
  return [...sameCategory, ...others].slice(0, limit);
}
