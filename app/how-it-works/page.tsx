"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HowItWorks() {
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
    <div className="flex flex-col min-h-screen w-full text-gray-800">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-md backdrop-blur-md border-b border-gray-200 py-3" : "glass border-b border-white/20 py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-2.svg" alt="Year!hoo Icon" width={40} height={40} className="object-contain" />
            <Image src="/logo-1.svg" alt="Year!hoo Text" width={140} height={40} className="object-contain hidden sm:block" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/catalog" className="hover:text-primary transition-colors">Katalog</Link>
            <Link href="/how-it-works" className="text-primary transition-colors">Cara Pesan</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link href="/catalog" className="hidden sm:inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Pesan Sekarang
            </Link>
            
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

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg py-4 px-4 flex flex-col gap-4 font-medium text-center">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Home</Link>
            <Link href="/catalog" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Katalog</Link>
            <Link href="/how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-primary">Cara Pesan</Link>
          </div>
        )}
      </header>

      <main className="flex-grow pt-28 sm:pt-32 pb-12 px-4 sm:px-6 w-full max-w-7xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-4xl mx-auto px-4">
          <div className="inline-block glass px-6 py-2 rounded-full text-primary font-bold text-sm mb-2 border-primary/20">
            ✨ Wujudkan Karakter Impianmu
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
            Cara Pesan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Custom</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Tim ilustrator kami siap menyulap imajinasi atau karakter favoritmu menjadi ilustrasi super imut untuk dicetak eksklusif di jurnalmu!
          </p>
        </section>

        {/* Steps */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2 sm:px-0">
          {[
            { step: "1", title: "Siapkan Referensi", desc: "Siapkan deskripsi, gambar referensi, atau fanart karakter yang ingin diilustrasikan.", icon: "🎨" },
            { step: "2", title: "Chat Admin", desc: "Kirim referensimu via WhatsApp atau DM Instagram kami untuk berdiskusi soal gaya dan harga.", icon: "💬" },
            { step: "3", title: "Sketsa & Bayar", desc: "Kami akan membuat sketsa awal. Jika kamu suka, silakan konfirmasi pesanan dan lakukan pembayaran.", icon: "✏️" },
            { step: "4", title: "Cetak & Kirim", desc: "Ilustrasi diselesaikan, buku dicetak premium, lalu segera dikirim ke alamatmu!", icon: "🚀" }
          ].map((item, idx) => (
            <div key={idx} className="glass p-8 rounded-[2rem] relative flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-400 text-white font-bold flex items-center justify-center absolute -top-6 text-xl shadow-lg border-4 border-white/50">
                {item.step}
              </div>
              <div className="text-5xl pt-4 drop-shadow-sm">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 pt-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* FAQ Section */}
        <section id="faq" className="space-y-12 pt-8">
          <div className="text-center space-y-4 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Pertanyaan Seputar Custom</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Masih ragu? Temukan jawaban untuk pertanyaan paling populer tentang pesanan custom di sini.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4 px-2 sm:px-0 mt-8">
            {[
              { q: "Berapa lama proses pembuatan untuk desain custom?", a: "Biasanya memakan waktu 3-5 hari kerja untuk pembuatan sketsa, revisi, dan pencetakan, tergantung kerumitan desain." },
              { q: "Apakah saya bisa request karakter selain anime?", a: "Tentu! Kami bisa menggambar berbagai gaya karakter mulai dari chibi, maskot, hingga hewan peliharaan." },
              { q: "Bagaimana cara melakukan pembayaran?", a: "Pembayaran dapat dilakukan melalui transfer bank (BCA, Mandiri, BNI) atau e-wallet (GoPay, OVO, Dana) setelah pesanan dikonfirmasi oleh admin." },
              { q: "Apakah ada biaya tambahan untuk revisi sketsa?", a: "Setiap pesanan custom mendapatkan gratis 2 kali revisi minor pada tahap sketsa. Revisi lebih dari itu mungkin dikenakan biaya tambahan kecil." }
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 sm:p-8 rounded-3xl hover:bg-white/80 transition-colors shadow-sm text-left">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="px-2 sm:px-0 pt-8">
          <div className="glass bg-gradient-to-br from-white/60 to-primary/10 border-2 border-primary/20 rounded-[2rem] p-8 sm:p-12 text-center space-y-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2 z-[-1]"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-300/20 blur-[40px] rounded-full translate-y-1/2 -translate-x-1/2 z-[-1]"></div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-snug max-w-3xl mx-auto">
              Sudah punya ide karakter di kepalamu?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-lg">
              Jangan ragu untuk bertanya! Kami sangat ramah dan antusias untuk mendengarkan ide seru darimu. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a href="#" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat WhatsApp
              </a>
              <a href="#" className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] hover:opacity-90 text-white px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z"/></svg>
                DM Instagram
              </a>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="glass border-t border-white/20 mt-16 sm:mt-24 py-8 sm:py-12">
        <div className="text-center text-sm text-gray-500 pt-6 px-4">
          © {new Date().getFullYear()} Year!hoo. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
