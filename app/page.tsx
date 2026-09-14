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
            <Image src="/logo-2.svg" alt="Year!hoo Icon" width={40} height={40} className="w-10 h-10 object-contain" />
            <Image src="/logo-1.svg" alt="Year!hoo Text" width={120} height={40} className="h-8 w-auto object-contain hidden sm:block" />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link href="#how-it-works" className="hover:text-primary transition-colors">Cara Pesan</Link>
            <Link href="#features" className="hover:text-primary transition-colors">Fitur</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Harga</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link href="#order" className="hidden sm:inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Pesan Sekarang
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
            <Link href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Cara Pesan</Link>
            <Link href="#features" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Fitur</Link>
            <Link href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Harga</Link>
            <Link href="#order" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white px-6 py-3 rounded-full font-bold shadow-md w-full mt-2">
              Pesan Sekarang
            </Link>
          </div>
        )}
      </header>

      <main className="flex-grow pt-28 sm:pt-32 pb-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-24 sm:space-y-32 overflow-hidden">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left mt-8 sm:mt-0">
          <div className="flex-1 space-y-6 max-w-2xl mx-auto lg:mx-0">
            <div className="inline-block glass px-4 py-2 rounded-full text-primary font-bold text-xs sm:text-sm mb-2 border-primary/20">
              ✨ Buku Harian Custom Spesial Untukmu
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Buku Harian <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Karakter Spesialmu!
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Ciptakan jurnal, planner, atau notes tahunan yang benar-benar *kamu*. Kami gambar karakter anime/chibi favoritmu eksklusif di setiap halamannya.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#order" className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
                Mulai Custom Sekarang
              </Link>
              <Link href="#gallery" className="glass px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg text-gray-700 hover:bg-white/60 transition-all text-center">
                Lihat Galeri
              </Link>
            </div>
          </div>
          <div className="flex-1 relative w-full px-4 sm:px-0 mt-12 lg:mt-0">
            <div className="w-full max-w-[320px] sm:max-w-md mx-auto aspect-[4/5] glass rounded-3xl p-4 sm:p-6 flex flex-col items-center justify-center transform lg:rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              {/* Placeholder for Product Image */}
              <div className="w-full h-full bg-white/50 rounded-2xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center text-center p-4 sm:p-8 space-y-4">
                <Image src="/logo-2.svg" alt="Mascot" width={80} height={80} className="opacity-80 sm:w-[100px] sm:h-[100px]" />
                <p className="text-gray-500 font-medium text-sm sm:text-base">Buku Harian Custom-mu akan tampil di sini!</p>
              </div>
            </div>
            {/* Floating glass elements - hidden on very small screens to avoid overflow */}
            <div className="hidden sm:flex absolute -top-6 -left-6 glass w-24 h-24 rounded-full items-center justify-center shadow-lg animate-pulse">
              <span className="text-4xl">🎨</span>
            </div>
            <div className="hidden sm:flex absolute -bottom-10 -right-4 glass w-32 h-16 rounded-2xl items-center justify-center shadow-lg">
              <span className="font-bold text-primary">100% Custom</span>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="space-y-12">
          <div className="text-center space-y-4 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Cara Memesan</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Hanya dengan 4 langkah mudah untuk mendapatkan jurnal impianmu.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2 sm:px-0 mt-8">
            {[
              { step: "1", title: "Pilih Tipe Buku", desc: "Pilih antara Jurnal, Planner Tahunan, atau Notes kosong.", icon: "📓" },
              { step: "2", title: "Kirim Karakter", desc: "Kirim referensi foto atau karakter anime yang ingin dijadikan desain.", icon: "🖼️" },
              { step: "3", title: "Proses Desain", desc: "Tim ilustrator kami akan menggambar karakter Chibi/Anime khusus untukmu.", icon: "✍️" },
              { step: "4", title: "Buku Dikirim", desc: "Kami cetak dengan kualitas premium dan kirim langsung ke rumahmu.", icon: "📦" }
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

        {/* Pricing Section (Glassmorphism Focus) */}
        <section id="pricing" className="space-y-12 relative px-2 sm:px-0">
          {/* A background blur circle to highlight pricing - made responsive */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-video bg-primary/20 blur-[60px] sm:blur-[100px] rounded-full z-[-1]"></div>
          
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Pilihan Paket Harga</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Pilih paket yang paling sesuai dengan kebutuhan tulisan dan ekspresimu.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center max-w-5xl mx-auto pt-6">
            {/* Basic Tier */}
            <div className="glass p-6 sm:p-8 rounded-3xl flex flex-col space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Basic Notes</h3>
                <p className="text-sm sm:text-base text-gray-500 mt-2">Buku catatan kosong dengan cover custom.</p>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-primary">Rp 99rb</div>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700 flex-grow">
                <li className="flex items-center gap-2"><span className="shrink-0">✅</span> Cover 1 Karakter Chibi</li>
                <li className="flex items-center gap-2"><span className="shrink-0">✅</span> 100 Halaman Blank/Ruled</li>
                <li className="flex items-center gap-2"><span className="shrink-0">✅</span> Softcover Premium</li>
                <li className="flex items-center gap-2 text-gray-400"><span className="shrink-0">❌</span> Custom Halaman Dalam</li>
              </ul>
              <button className="w-full glass bg-white/50 text-gray-800 font-bold py-3 rounded-xl hover:bg-white/80 transition-colors">
                Pilih Basic
              </button>
            </div>

            {/* Premium Tier (Highlighted) */}
            <div className="glass p-8 sm:p-10 rounded-3xl border-2 border-primary relative transform lg:-translate-y-4 flex flex-col space-y-6 shadow-2xl bg-white/60">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs sm:text-sm font-bold shadow-md whitespace-nowrap">
                PALING POPULER
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Annual Planner</h3>
                <p className="text-sm sm:text-base text-gray-500 mt-2">Jurnal lengkap untuk setahun penuh.</p>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-primary">Rp 249rb</div>
              <ul className="space-y-3 text-sm sm:text-base text-gray-800 flex-grow font-medium">
                <li className="flex items-center gap-2"><span className="shrink-0">✨</span> Cover 2 Karakter Anime/Chibi</li>
                <li className="flex items-center gap-2"><span className="shrink-0">✨</span> Layout Planner Bulanan & Mingguan</li>
                <li className="flex items-center gap-2"><span className="shrink-0">✨</span> Hardcover Eksklusif + Pita</li>
                <li className="flex items-center gap-2"><span className="shrink-0">✨</span> Gratis 2 Lembar Stiker</li>
              </ul>
              <button className="w-full bg-primary text-white font-bold py-3 sm:py-4 rounded-xl hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                Pesan Planner
              </button>
            </div>

            {/* Deluxe Tier */}
            <div className="glass p-6 sm:p-8 rounded-3xl flex flex-col space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Deluxe Journal</h3>
                <p className="text-sm sm:text-base text-gray-500 mt-2">Paket komplit untuk kolektor sejati.</p>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-primary">Rp 399rb</div>
              <ul className="space-y-3 text-sm sm:text-base text-gray-700 flex-grow">
                <li className="flex items-center gap-2"><span className="shrink-0">✅</span> Cover Full Ilustrasi Custom</li>
                <li className="flex items-center gap-2"><span className="shrink-0">✅</span> Custom Layout tiap halaman</li>
                <li className="flex items-center gap-2"><span className="shrink-0">✅</span> Hardcover Premium Kulit</li>
                <li className="flex items-center gap-2"><span className="shrink-0">✅</span> Box Eksklusif + Stiker Pack</li>
              </ul>
              <button className="w-full glass bg-white/50 text-gray-800 font-bold py-3 rounded-xl hover:bg-white/80 transition-colors">
                Pilih Deluxe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="glass border-t border-white/20 mt-16 sm:mt-24 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <Image src="/logo-1.svg" alt="Year!hoo Text" width={120} height={40} className="w-[120px] sm:w-[150px]" />
            <p className="text-sm sm:text-base text-gray-600 max-w-xs">Bikin hari-harimu makin berwarna dengan jurnal karakter custom eksklusif dari Year!hoo.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Tautan</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li><Link href="#" className="hover:text-primary">Cara Pesan</Link></li>
              <li><Link href="#" className="hover:text-primary">FAQ</Link></li>
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
