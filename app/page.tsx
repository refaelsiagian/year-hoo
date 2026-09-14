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
            <Image src="/logo-2.svg" alt="Year!hoo Icon" width={40} height={40} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
            <Image src="/logo-1.svg" alt="Year!hoo Text" width={120} height={40} className="object-contain hidden sm:block" style={{ width: 'auto', height: 'auto' }} />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className="text-primary transition-colors">Home</Link>
            <Link href="/catalog" className="hover:text-primary transition-colors">Katalog</Link>
            <Link href="#how-it-works" className="hover:text-primary transition-colors">Cara Pesan</Link>
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
            <Link href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Cara Pesan</Link>
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
              ✨ Koleksi Buku Harian & Planner Kekinian
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Temukan Jurnal <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Favoritmu!
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Jelajahi berbagai pilihan buku harian, planner tahunan, dan stiker dengan desain karakter anime/chibi super imut yang siap mewarnai hari-harimu.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/catalog" className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
                Jelajahi Katalog
              </Link>
              <Link href="#how-it-works" className="glass px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg text-gray-700 hover:bg-white/60 transition-all text-center">
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
              <span className="text-4xl">📚</span>
            </div>
            <div className="hidden sm:flex absolute -bottom-10 -right-4 glass w-36 h-16 rounded-2xl items-center justify-center shadow-lg z-20">
              <span className="font-bold text-primary">Koleksi Terbaru!</span>
            </div>
          </div>
        </section>

        {/* Highlight Catalog Section */}
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {[
              { id: 1, name: "Sakura Chibi Yearly Planner", category: "Yearly Book", price: 149000 },
              { id: 2, name: "Midnight Owl Journal", category: "Journal", price: 89000 },
              { id: 3, name: "Cute Mascot Sticker Pack", category: "Sticker", price: 15000 },
            ].map(product => (
              <div key={product.id} className="glass p-6 rounded-3xl flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300 shadow-md">
                <div className="w-full aspect-square bg-white/50 rounded-2xl flex items-center justify-center p-8">
                  <Image src="/logo-2.svg" alt={product.name} width={80} height={80} className="opacity-70 object-contain" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <div className="w-full text-left space-y-1">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider">{product.category}</div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
                  <div className="text-xl font-extrabold text-gray-800 pt-2">Rp {product.price.toLocaleString('id-ID')}</div>
                </div>
              </div>
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
              <span className="text-primary italic">Yok custom aja hhihihihihihihihihadihdih 🤭</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
              Tim ilustrator kami siap menggambar karakter impianmu secara eksklusif untuk dicetak di sampul buku harianmu!
            </p>
            <div className="pt-4">
              <Link href="#how-it-works" className="inline-block bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Tanya Harga Custom
              </Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="space-y-12">
          <div className="text-center space-y-4 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Cara Memesan (Katalog & Custom)</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Hanya dengan beberapa langkah mudah untuk mendapatkan jurnal impianmu.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2 sm:px-0 mt-8">
            {[
              { step: "1", title: "Pilih / Custom", desc: "Pilih dari katalog, ATAU siapkan referensi karakter untuk custom.", icon: "📓" },
              { step: "2", title: "Hubungi Admin", desc: "Chat admin kami via WhatsApp atau DM Instagram.", icon: "💬" },
              { step: "3", title: "Konfirmasi & Bayar", desc: "Admin akan mengkonfirmasi total pesanan dan metode pembayaran.", icon: "💳" },
              { step: "4", title: "Proses & Kirim", desc: "Buku segera diproses, dicetak premium, dan dikirim ke alamatmu.", icon: "📦" }
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 sm:p-8 rounded-3xl relative flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300 mt-6 sm:mt-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center absolute -top-5 sm:-top-6 text-lg sm:text-xl shadow-lg">
                  {item.step}
                </div>
                <div className="text-4xl sm:text-5xl pt-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="glass border-t border-white/20 mt-16 sm:mt-24 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <Image src="/logo-1.svg" alt="Year!hoo Text" width={150} height={50} style={{ width: '150px', height: 'auto' }} />
            <p className="text-sm sm:text-base text-gray-600 max-w-xs">Bikin hari-harimu makin berwarna dengan jurnal karakter eksklusif dari Year!hoo.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Tautan</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li><Link href="/catalog" className="hover:text-primary">Katalog Produk</Link></li>
              <li><Link href="#how-it-works" className="hover:text-primary">Cara Pesan</Link></li>
              <li><Link href="#" className="hover:text-primary">Syarat & Ketentuan</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Ikuti Kami</h4>
            <div className="flex gap-4 justify-center sm:justify-start">
              <span className="w-10 h-10 glass rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-primary hover:text-white transition-colors">📱</span>
              <span className="w-10 h-10 glass rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-primary hover:text-white transition-colors">📸</span>
              <span className="w-10 h-10 glass rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-primary hover:text-white transition-colors">🎵</span>
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
