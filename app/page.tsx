"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-gray-800">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-md backdrop-blur-md border-b border-gray-200 py-3" : "glass border-b border-white/20 py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-2.svg" alt="Year!hoo Icon" width={40} height={40} className="object-contain" />
            <Image src="/logo-1.svg" alt="Year!hoo Text" width={140} height={40} className="object-contain hidden sm:block" />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className="text-primary transition-colors">Home</Link>
            <Link href="/catalog" className="hover:text-primary transition-colors">Katalog</Link>
            <Link href="/how-it-works" className="hover:text-primary transition-colors">Cara Pesan</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link href="/catalog" className="hidden sm:inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Lihat Katalog
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg py-4 px-4 flex flex-col gap-4 font-medium text-center">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-primary">Home</Link>
            <Link href="/catalog" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Katalog</Link>
            <Link href="/how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Cara Pesan</Link>
            <Link href="/catalog" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white px-6 py-3 rounded-full font-bold shadow-md w-full mt-2">
              Lihat Katalog
            </Link>
          </div>
        )}
      </header>

      <main className="flex-grow pt-28 sm:pt-32 pb-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-24 sm:space-y-32 overflow-hidden">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left mt-8 sm:mt-0">
          <div className="flex-1 space-y-6 max-w-2xl mx-auto lg:mx-0">
            <div className="inline-block glass px-4 py-2 rounded-full text-primary font-bold text-xs sm:text-sm mb-2 border-primary/20">
              ✨ Koleksi Planner & Jurnal Digital Siap Cetak (Printable)
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Temukan Planner & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Jurnal Digitalmu!
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Jelajahi berbagai pilihan planner tahunan, jurnal, kalender, dan stiker digital siap unduh (instant download) dengan desain karakter anime/chibi super imut. Gunakan langsung di tablet/iPad atau cetak sendiri di rumah!
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/catalog" className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
                Jelajahi Katalog
              </Link>
              <Link href="/how-it-works" className="glass px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg text-gray-700 hover:bg-white/60 transition-all text-center">
                Cara Pesan
              </Link>
            </div>
          </div>
          <div className="flex-1 relative w-full px-4 sm:px-0 mt-12 lg:mt-0">
            <div className="w-full max-w-[320px] sm:max-w-md mx-auto aspect-[4/5] glass rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center transform lg:rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-orange-300/10 z-0"></div>
              {/* Product Mockup */}
              <div className="relative z-10 w-full h-full bg-white/70 backdrop-blur-sm rounded-2xl border-2 border-primary/30 flex flex-col items-center justify-center text-center p-4 sm:p-8 space-y-4 shadow-inner">
                <Image src="/logo-2.svg" alt="Mascot" width={100} height={100} className="opacity-90" style={{ width: 'auto', height: 'auto', maxHeight: '100px' }} />
                <div className="space-y-1">
                  <p className="text-gray-800 font-bold text-lg sm:text-xl">Sakura Yearly Planner</p>
                  <p className="text-primary font-extrabold text-lg">Rp 149.000</p>
                </div>
              </div>
            </div>
            {/* Floating glass elements */}
            <div className="hidden sm:flex absolute -top-6 -left-6 glass w-24 h-24 rounded-full items-center justify-center shadow-lg animate-pulse z-20">
              <span className="text-4xl">📥</span>
            </div>
            <div className="hidden sm:flex absolute -bottom-10 -right-4 glass w-40 h-16 rounded-2xl items-center justify-center shadow-lg z-20 text-center px-2">
              <span className="font-bold text-primary text-xs sm:text-sm">Instant Download!</span>
            </div>
          </div>
        </section>

        {/* Categories Section - Berdampingan 4 Kategori */}
        <section className="space-y-10 relative px-2 sm:px-0">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-block glass px-4 py-1.5 rounded-full text-primary font-bold text-xs sm:text-sm border-primary/20">
              ✨ Koleksi Produk
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Pilihan Lini Produk Year!hoo
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Setiap produk dirancang khusus dengan ilustrasi karakter eksklusif untuk menemani berbagai aktivitasmu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Yearly Planner",
                tag: "Terstruktur",
                desc: "Template agenda tahunan format PDF high-res lengkap dengan goal tracker, monthly spread, dan kalender siap cetak sendiri.",
                icon: "📖",
                bgGradient: "from-amber-500/10 to-orange-500/10",
                badgeColor: "text-amber-700 bg-amber-100/80 border-amber-300/50",
                category: "Yearly Book",
              },
              {
                title: "Jurnal Digital",
                tag: "Berekspresi",
                desc: "Buku catatan digital undated aesthetic untuk GoodNotes, Notability, atau dicetak mandiri untuk diary dan bullet journal.",
                icon: "📓",
                bgGradient: "from-blue-500/10 to-indigo-500/10",
                badgeColor: "text-blue-700 bg-blue-100/80 border-blue-300/50",
                category: "Journal",
              },
              {
                title: "Kalender Printable",
                tag: "Hias Mejamu",
                desc: "File kalender meja & dinding 300 DPI siap cetak mandiri dengan ilustrasi full-color karakter lucu berganti tiap bulan.",
                icon: "🗓️",
                bgGradient: "from-primary/10 to-rose-500/10",
                badgeColor: "text-primary bg-primary/10 border-primary/20",
                category: "Kalender",
              },
              {
                title: "Stiker Digital & Print",
                tag: "Super Imut",
                desc: "Pack stiker PNG transparan untuk tablet dan lembar PDF siap cetak di kertas stiker vinyl/matte favoritmu.",
                icon: "✨",
                bgGradient: "from-emerald-500/10 to-teal-500/10",
                badgeColor: "text-emerald-700 bg-emerald-100/80 border-emerald-300/50",
                category: "Sticker",
              },
            ].map((cat, idx) => (
              <Link
                key={idx}
                href={`/catalog?category=${encodeURIComponent(cat.category)}`}
                className={`group glass p-6 rounded-3xl flex flex-col justify-between space-y-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-white/60 relative overflow-hidden bg-gradient-to-br ${cat.bgGradient}`}
              >
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {cat.icon}
                  </div>
                  <span className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full border ${cat.badgeColor}`}>
                    {cat.tag}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="pt-2 flex items-center text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                  Lihat Produk →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Highlight Catalog Section - 4 Produk Berdampingan */}
        <section className="space-y-12 relative px-2 sm:px-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-video bg-primary/10 blur-[60px] sm:blur-[100px] rounded-full z-[-1]"></div>
          
          <div className="flex flex-col sm:flex-row justify-between items-end gap-4 px-4 sm:px-0">
            <div className="space-y-2 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Koleksi Unggulan</h2>
              <p className="text-sm sm:text-base text-gray-600">Pilihan terfavorit dari Year!hoo minggu ini.</p>
            </div>
            <Link href="/catalog" className="glass hover:bg-white text-primary font-bold px-6 py-2 rounded-full transition-colors text-sm sm:text-base shrink-0">
              Lihat Selengkapnya →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
            {[
              { id: 9, name: "Sanrio Characters Calendar 2026", category: "Kalender", price: 69000, icon: "🎀", image: "/products/sanrio-calendar-cover.png", isAvailable: true },
              { id: 1, name: "Sakura Chibi Yearly Planner", category: "Yearly Book", price: 149000, icon: "🌸", isAvailable: false },
              { id: 2, name: "Midnight Owl Journal", category: "Journal", price: 89000, icon: "🦉", isAvailable: false },
              { id: 3, name: "Cute Mascot Sticker Pack", category: "Sticker", price: 15000, icon: "⭐", isAvailable: false },
            ].map(product => (
              <Link key={product.id} href={`/catalog/${product.id}`} className="glass p-6 rounded-3xl flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300 shadow-md group">
                <div className="w-full aspect-square bg-white/50 rounded-2xl flex items-center justify-center p-4 relative overflow-hidden group-hover:bg-white/80 transition-colors">
                  {product.isAvailable === false && (
                    <span className="absolute top-3 right-3 z-10 text-[11px] font-bold px-3 py-1 rounded-full bg-rose-50/95 text-rose-600 border border-rose-200 shadow-sm backdrop-blur-md">
                      Tidak Tersedia
                    </span>
                  )}
                  {product.image ? (
                    <Image src={product.image} alt={product.name} width={280} height={180} className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <Image src="/logo-2.svg" alt={product.name} width={80} height={80} className="opacity-70 object-contain group-hover:scale-110 transition-transform duration-300" />
                  )}
                </div>
                <div className="w-full text-left space-y-1">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider">{product.category}</div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                  <div className="text-xl font-extrabold text-gray-800 pt-2">Rp {product.price.toLocaleString('id-ID')}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Custom Banner Opsi Terakhir */}
        <section className="px-2 sm:px-0">
          <div className="glass bg-gradient-to-br from-white/60 to-primary/10 border-2 border-primary/20 rounded-[2rem] p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
            {/* Dekorasi blur di dalam banner */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2 z-[-1]"></div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-snug max-w-3xl mx-auto">
              Tidak menemukan karakter yang kamu mau? <br/>
              <span className="text-primary italic">Yok custom digital art aja 🤭</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
              Tim ilustrator kami siap menggambar karakter impianmu menjadi file digital resolusi tinggi (300 DPI) siap pakai di tablet atau siap kamu cetak sendiri!
            </p>
            <div className="pt-4">
              <Link href="/how-it-works" className="inline-block bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Lihat Cara Pesan Custom
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="space-y-12">
          <div className="text-center space-y-4 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Masih ragu? Temukan jawaban untuk pertanyaan paling populer di sini.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 px-2 sm:px-0 mt-8">
            {[
              { q: "Apa itu Year!hoo?", a: "Year!hoo adalah studio kreatif produk digital yang menghadirkan planner tahunan, jurnal, kalender, dan stiker karakter imut berformat digital siap unduh (instant download). Kamu bebas menggunakannya di tablet/gadget atau mencetaknya sendiri (printable) kapan saja." },
              { q: "Apakah Year!hoo menjual dan mengirimkan produk fisik?", a: "Tidak. Seluruh produk Year!hoo berbentuk file digital (PDF High-Res, PNG) yang langsung dapat diunduh setelah pembayaran. Kami tidak menjual produk cetak fisik dan tidak ada pengiriman kurir ekspedisi, sehingga 100% bebas biaya ongkir!" },
              { q: "Bagaimana cara jika saya ingin mencetaknya sendiri?", a: "Sangat mudah! Setiap file kami sediakan dalam resolusi tinggi standar percetakan (300 DPI siap cetak). Kamu bisa mencetaknya menggunakan printer di rumah atau membawanya ke percetakan lokal terdekat. Panduan saran jenis kertas dan ukuran cetak juga tersedia di setiap detail produk." },
              { q: "Aplikasi apa saja yang kompatibel dengan produk digital Year!hoo?", a: "File planner dan jurnal kami berformat PDF yang kompatibel dengan aplikasi catatan digital populer seperti GoodNotes, Notability, Samsung Notes, CollaNote, Kilonotes, maupun PDF viewer di laptop/PC." }
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 sm:p-8 rounded-3xl hover:bg-white/80 transition-colors shadow-sm text-left">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="glass border-t border-white/20 mt-16 sm:mt-24 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <Image src="/logo-1.svg" alt="Year!hoo Text" width={150} height={48} className="object-contain" />
            <p className="text-sm sm:text-base text-gray-600 max-w-xs">Bikin hari-harimu makin berwarna dengan planner dan jurnal digital karakter eksklusif siap unduh & cetak dari Year!hoo.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Tautan</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li><Link href="/catalog" className="hover:text-primary">Katalog Produk</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary">Cara Pesan</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Syarat & Ketentuan</Link></li>
              <li><a href="https://lynk.id/yearhoo" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Lynk.id</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Ikuti Kami</h4>
            <div className="flex gap-4 justify-center sm:justify-start">
              <a href="https://wa.me/6285380492753" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-700 hover:bg-[#25D366] hover:text-white transition-colors" title="WhatsApp (+62 853-8049-2753)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="https://x.com/yearhoo_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-900 hover:text-white transition-colors" title="X (Twitter)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/yearh.oo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-700 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-colors" title="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-black/5 px-4">
          © {new Date().getFullYear()} Year!hoo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
