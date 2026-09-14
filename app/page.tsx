"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-md backdrop-blur-md border-b border-gray-200" : "glass border-b border-white/20"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-2.svg" alt="Year!hoo Icon" width={40} height={40} className="w-10 h-10 object-contain" />
            <Image src="/logo-1.svg" alt="Year!hoo Text" width={120} height={40} className="h-8 w-auto object-contain hidden sm:block" />
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link href="#how-it-works" className="hover:text-primary transition-colors">Cara Pesan</Link>
            <Link href="#features" className="hover:text-primary transition-colors">Fitur</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Harga</Link>
          </nav>
          <Link href="#order" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Pesan Sekarang
          </Link>
        </div>
      </header>

      <main className="flex-grow pt-32 pb-12 px-6 max-w-7xl mx-auto space-y-32">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="flex-1 space-y-6">
            <div className="inline-block glass px-4 py-2 rounded-full text-primary font-bold text-sm mb-2 border-primary/20">
              ✨ Buku Harian Custom Spesial Untukmu
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Buku Harian <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Karakter Spesialmu!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Ciptakan jurnal, planner, atau notes tahunan yang benar-benar *kamu*. Kami gambar karakter anime/chibi favoritmu eksklusif di setiap halamannya.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="#order" className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
                Mulai Custom Sekarang
              </Link>
              <Link href="#gallery" className="glass px-8 py-4 rounded-full font-bold text-lg text-gray-700 hover:bg-white/60 transition-all text-center">
                Lihat Galeri
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-full max-w-md mx-auto aspect-[4/5] glass rounded-3xl p-6 flex flex-col items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              {/* Placeholder for Product Image */}
              <div className="w-full h-full bg-white/50 rounded-2xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center text-center p-8 space-y-4">
                <Image src="/logo-2.svg" alt="Mascot" width={100} height={100} className="opacity-80" />
                <p className="text-gray-500 font-medium">Buku Harian Custom-mu akan tampil di sini!</p>
              </div>
            </div>
            {/* Floating glass elements */}
            <div className="absolute -top-6 -left-6 glass w-24 h-24 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-4xl">🎨</span>
            </div>
            <div className="absolute -bottom-10 -right-4 glass w-32 h-16 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="font-bold text-primary">100% Custom</span>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cara Memesan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hanya dengan 4 langkah mudah untuk mendapatkan jurnal impianmu.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Pilih Tipe Buku", desc: "Pilih antara Jurnal, Planner Tahunan, atau Notes kosong.", icon: "📓" },
              { step: "2", title: "Kirim Karakter", desc: "Kirim referensi foto atau karakter anime yang ingin dijadikan desain.", icon: "🖼️" },
              { step: "3", title: "Proses Desain", desc: "Tim ilustrator kami akan menggambar karakter Chibi/Anime khusus untukmu.", icon: "✍️" },
              { step: "4", title: "Buku Dikirim", desc: "Kami cetak dengan kualitas premium dan kirim langsung ke rumahmu.", icon: "📦" }
            ].map((item, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl relative flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center absolute -top-6 text-xl shadow-lg">
                  {item.step}
                </div>
                <div className="text-5xl pt-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section (Glassmorphism Focus) */}
        <section id="pricing" className="space-y-12 relative">
          {/* A background blur circle to highlight pricing */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[100px] rounded-full z-[-1]"></div>
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Pilihan Paket Harga</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Pilih paket yang paling sesuai dengan kebutuhan tulisan dan ekspresimu.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            {/* Basic Tier */}
            <div className="glass p-8 rounded-3xl flex flex-col space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Basic Notes</h3>
                <p className="text-gray-500 mt-2">Buku catatan kosong dengan cover custom.</p>
              </div>
              <div className="text-4xl font-extrabold text-primary">Rp 99rb</div>
              <ul className="space-y-3 text-gray-700 flex-grow">
                <li className="flex items-center gap-2"><span>✅</span> Cover 1 Karakter Chibi</li>
                <li className="flex items-center gap-2"><span>✅</span> 100 Halaman Blank/Ruled</li>
                <li className="flex items-center gap-2"><span>✅</span> Softcover Premium</li>
                <li className="flex items-center gap-2 text-gray-400"><span>❌</span> Custom Halaman Dalam</li>
              </ul>
              <button className="w-full glass bg-white/50 text-gray-800 font-bold py-3 rounded-xl hover:bg-white/80 transition-colors">
                Pilih Basic
              </button>
            </div>

            {/* Premium Tier (Highlighted) */}
            <div className="glass p-10 rounded-3xl border-2 border-primary relative transform md:-translate-y-4 flex flex-col space-y-6 shadow-2xl bg-white/60">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                PALING POPULER
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Annual Planner</h3>
                <p className="text-gray-500 mt-2">Jurnal lengkap untuk setahun penuh.</p>
              </div>
              <div className="text-5xl font-extrabold text-primary">Rp 249rb</div>
              <ul className="space-y-3 text-gray-800 flex-grow font-medium">
                <li className="flex items-center gap-2"><span>✨</span> Cover 2 Karakter Anime/Chibi</li>
                <li className="flex items-center gap-2"><span>✨</span> Layout Planner Bulanan & Mingguan</li>
                <li className="flex items-center gap-2"><span>✨</span> Hardcover Eksklusif + Pita Pembatas</li>
                <li className="flex items-center gap-2"><span>✨</span> Gratis 2 Lembar Stiker Custom</li>
              </ul>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                Pesan Planner
              </button>
            </div>

            {/* Deluxe Tier */}
            <div className="glass p-8 rounded-3xl flex flex-col space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Deluxe Journal</h3>
                <p className="text-gray-500 mt-2">Paket komplit untuk kolektor sejati.</p>
              </div>
              <div className="text-4xl font-extrabold text-primary">Rp 399rb</div>
              <ul className="space-y-3 text-gray-700 flex-grow">
                <li className="flex items-center gap-2"><span>✅</span> Cover Full Ilustrasi Custom</li>
                <li className="flex items-center gap-2"><span>✅</span> Custom Layout tiap halaman</li>
                <li className="flex items-center gap-2"><span>✅</span> Hardcover Premium Kulit Sintetis</li>
                <li className="flex items-center gap-2"><span>✅</span> Box Eksklusif + Stiker Pack</li>
              </ul>
              <button className="w-full glass bg-white/50 text-gray-800 font-bold py-3 rounded-xl hover:bg-white/80 transition-colors">
                Pilih Deluxe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="glass border-t border-white/20 mt-24 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Image src="/logo-1.svg" alt="Year!hoo Text" width={150} height={50} />
            <p className="text-gray-600">Bikin hari-harimu makin berwarna dengan jurnal karakter custom eksklusif dari Year!hoo.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Tautan</h4>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="#" className="hover:text-primary">Cara Pesan</Link></li>
              <li><Link href="#" className="hover:text-primary">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary">Syarat & Ketentuan</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <span className="w-10 h-10 glass rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-primary hover:text-white transition-colors">📱</span>
              <span className="w-10 h-10 glass rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-primary hover:text-white transition-colors">📸</span>
              <span className="w-10 h-10 glass rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-primary hover:text-white transition-colors">🎵</span>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-12 pt-8 border-t border-black/5">
          © {new Date().getFullYear()} Year!hoo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
