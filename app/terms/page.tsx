"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Terms() {
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
            <Link href="/how-it-works" className="hover:text-primary transition-colors">Cara Pesan</Link>
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
            <Link href="/how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Cara Pesan</Link>
          </div>
        )}
      </header>

      <main className="flex-grow pt-28 sm:pt-32 pb-12 px-4 sm:px-6 w-full max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-block glass px-6 py-2 rounded-full text-primary font-bold text-sm mb-2 border-primary/20">
            📜 Aturan Main
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">Syarat & Ketentuan</h1>
          <p className="text-gray-600 px-4">Harap membaca syarat dan ketentuan ini dengan saksama sebelum melakukan pemesanan di Year!hoo. Dengan memesan, Anda dianggap telah menyetujui seluruh kebijakan kami.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="glass p-8 sm:p-10 rounded-[2rem] space-y-6 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2 z-[-1]"></div>
            
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-lg">🎨</span>
                Kebijakan Pemesanan Custom Digital
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed text-sm sm:text-base">
                <li><strong>Hak Menolak:</strong> Year!hoo berhak menolak pesanan custom apabila referensi yang diberikan mengandung unsur yang tidak pantas (SARA, NSFW, dll) atau dirasa di luar batas kemampuan/art style ilustrator kami.</li>
                <li><strong>Batas Revisi:</strong> Pemesan berhak mendapatkan maksimal <strong>2 kali revisi minor</strong> (perbaikan kecil) hanya pada tahap sketsa awal sebelum proses pewarnaan (coloring).</li>
                <li><strong>Revisi Tambahan:</strong> Permintaan revisi major (rombak total) atau revisi setelah masuk tahap pewarnaan digital final akan dikenakan biaya tambahan.</li>
              </ul>
            </section>
            
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center text-lg">💳</span>
                Pembayaran & Kebijakan No Refund
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed text-sm sm:text-base">
                <li><strong>Sistem Pembayaran:</strong> Link unduhan file digital katalog atau pengerjaan pesanan custom akan diproses setelah pembayaran diterima secara lunas sesuai nominal yang disepakati bersama admin.</li>
                <li><strong>Tidak Ada Pengembalian Dana (No Refund):</strong> Karena seluruh produk berbentuk file digital yang langsung dapat diakses dan diunduh, seluruh transaksi yang telah selesai <strong>bersifat final dan tidak dapat dibatalkan atau dikembalikan dana</strong> dengan alasan apa pun.</li>
              </ul>
            </section>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center text-lg">📥</span>
                Pengiriman Digital & Cetak Mandiri
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed text-sm sm:text-base">
                <li><strong>100% Produk Digital:</strong> Seluruh produk Year!hoo berupa file digital (PDF High-Res, PNG). Year!hoo <strong>tidak menjual produk dalam bentuk fisik dan tidak melakukan pengiriman barang fisik via kurir/ekspedisi</strong>.</li>
                <li><strong>Metode Pengiriman File:</strong> Link akses unduhan file digital resmi akan dikirimkan melalui WhatsApp atau email pembeli setelah bukti pembayaran terverifikasi.</li>
                <li><strong>Hak Cetak Mandiri (Self-Printing):</strong> Pembeli memiliki hak penuh untuk mencetak file digital yang telah dibeli secara mandiri (menggunakan printer pribadi di rumah atau melalui jasa percetakan pihak ketiga) untuk keperluan pemakaian pribadi.</li>
                <li><strong>Garansi File Rusak:</strong> Jika pembeli mengalami kendala link kedaluwarsa, file corrupt, atau file tidak dapat dibuka, admin Year!hoo siap mengirimkan ulang link unduhan file yang valid tanpa biaya tambahan dalam kurun waktu 30 hari sejak transaksi.</li>
              </ul>
            </section>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-600 flex items-center justify-center text-lg">©️</span>
                Hak Cipta & Lisensi Penggunaan
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 leading-relaxed text-sm sm:text-base">
                <li><strong>Penggunaan Pribadi (Personal Use Only):</strong> Seluruh karya ilustrasi dan file digital Year!hoo hanya dilisensikan untuk pemakaian pribadi pembeli. Pembeli <strong>dilarang keras</strong> menjual kembali file digital, membagikan link unduhan ke publik/pihak lain, atau mencetak dalam skala massal untuk tujuan komersial tanpa izin tertulis dari Year!hoo.</li>
                <li><strong>Hak Portofolio:</strong> Kami berhak menggunakan dan mempublikasikan hasil karya ilustrasi custom di media sosial, website, atau katalog Year!hoo sebagai portofolio (kecuali klien secara eksplisit meminta hasil karyanya untuk dirahasiakan).</li>
              </ul>
            </section>

          </div>

        </div>
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
