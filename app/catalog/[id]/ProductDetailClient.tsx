"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"deskripsi" | "spesifikasi" | "keunggulan">("deskripsi");
  const [selectedImage, setSelectedImage] = useState(product.image || "/logo-2.svg");
  const [copiedLink, setCopiedLink] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const handleLynkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setToastMessage("Segera Hadir");
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const totalPrice = product.price * quantity;
  const whatsappMessage = encodeURIComponent(
    `Halo Admin Year!hoo! 👋\n\nSaya ingin memesan file digital:\n• Produk: *${product.name}*\n• Kategori: ${product.category}\n• Format: File Digital (Printable)\n• Jumlah: *${quantity} lisensi*\n• Total Estimasi: *Rp ${totalPrice.toLocaleString("id-ID")}*\n\nMohon info pembayaran dan pengiriman link unduhan filenya ya. Terima kasih! ✨`
  );
  const whatsappUrl = `https://wa.me/6285380492753?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col min-h-screen w-full text-gray-800">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 shadow-md backdrop-blur-md border-b border-gray-200 py-3"
            : "glass border-b border-white/20 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-2.svg" alt="Year!hoo Icon" width={40} height={40} className="object-contain" />
            <Image src="/logo-1.svg" alt="Year!hoo Text" width={140} height={40} className="object-contain hidden sm:block" />
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/catalog" className="text-primary transition-colors">
              Katalog
            </Link>
            <Link href="/how-it-works" className="hover:text-primary transition-colors">
              Cara Pesan
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/catalog"
              className="hidden sm:inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Semua Produk
            </Link>

            <button
              className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
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
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">
              Home
            </Link>
            <Link href="/catalog" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-primary">
              Katalog
            </Link>
            <Link href="/how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">
              Cara Pesan
            </Link>
          </div>
        )}
      </header>

      <main className="flex-grow pt-28 sm:pt-32 pb-16 px-4 sm:px-6 w-full max-w-7xl mx-auto space-y-12">


        {/* Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="w-full aspect-[4/3] sm:aspect-square glass rounded-[2rem] p-8 sm:p-12 flex flex-col items-center justify-center relative overflow-hidden shadow-xl border-2 border-white/60">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-orange-300/10 to-amber-200/20 z-0"></div>
              
              {/* Main Illustration Showcase */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center space-y-4 text-center">
                {product.image ? (
                  <div className="w-full max-w-lg aspect-video relative flex items-center justify-center bg-white/80 backdrop-blur-md rounded-2xl p-2 shadow-inner border border-white overflow-hidden">
                    <Image
                      src={selectedImage}
                      alt={product.name}
                      fill
                      className="object-contain drop-shadow-sm rounded-xl transition-all duration-300"
                      priority
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 sm:w-44 sm:h-44 relative flex items-center justify-center bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-inner border border-white">
                    <Image
                      src="/logo-2.svg"
                      alt={product.name}
                      width={140}
                      height={140}
                      className="object-contain drop-shadow-md transition-transform duration-500 hover:scale-110"
                      priority
                    />
                  </div>
                )}
              </div>

              {/* Decorative blobs */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Gallery Thumbnails (if available) */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {product.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`aspect-video rounded-2xl p-1.5 transition-all overflow-hidden glass ${
                      selectedImage === imgUrl
                        ? "border-2 border-primary ring-2 ring-primary/20 shadow-md scale-[1.02] bg-white"
                        : "border border-white/60 hover:bg-white/60 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`Preview ${idx + 1}`}
                      width={160}
                      height={100}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Information & Order Action */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="glass px-3.5 py-1 rounded-full text-xs font-bold text-primary border border-primary/20">
                  {product.category}
                </span>
                {product.isAvailable === false && (
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-600 border border-rose-200 shadow-sm">
                    Tidak Tersedia
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
                {product.tagline}
              </p>
            </div>

            {/* Price Box */}
            <div className="glass p-5 rounded-3xl space-y-2 border border-white/70 shadow-sm">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Harga Spesial</div>
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-primary">
                  Rp {product.price.toLocaleString("id-ID")}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-gray-400 line-through">
                    Rp {product.originalPrice.toLocaleString("id-ID")}
                  </span>
                )}
              </div>
            </div>

            {/* Quantity Selector & Live Total */}
            <div className={`glass p-5 rounded-3xl space-y-4 border border-white/70 ${product.isAvailable === false ? "opacity-50 pointer-events-none select-none" : ""}`}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-gray-800">Jumlah Lisensi Unduhan:</span>
                <div className="flex items-center gap-3 bg-white/80 rounded-2xl p-1 shadow-inner border border-gray-200">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-gray-700 hover:bg-gray-100 transition-colors text-lg"
                    aria-label="Kurangi jumlah"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-extrabold text-gray-900 text-base">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-gray-700 hover:bg-gray-100 transition-colors text-lg"
                    aria-label="Tambah jumlah"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-black/5 text-sm">
                <span className="text-gray-600">Subtotal ({quantity} file digital):</span>
                <span className="text-xl font-extrabold text-gray-900">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </span>
              </div>
            </div>

            {/* CTA Order Buttons */}
            <div className="space-y-3 pt-2">
              {product.isAvailable !== false ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#1fb355] text-white py-4 px-6 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
                >
                  <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Pesan Sekarang via WhatsApp</span>
                </a>
              ) : (
                <div className="w-full bg-gray-100 text-gray-500 py-4 px-6 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2 cursor-not-allowed text-center select-none border border-gray-300">
                  <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <span>Saat ini produk tidak tersedia</span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleLynkClick}
                  className="glass bg-white/70 hover:bg-white text-gray-800 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-center transition-all border border-gray-200 hover:border-primary flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>🔗</span> Lynk.id Store
                </button>
                <button
                  onClick={handleCopyLink}
                  className="glass bg-white/70 hover:bg-white text-gray-800 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-center transition-all border border-gray-200 hover:border-primary flex items-center justify-center gap-2"
                >
                  <span>{copiedLink ? "✓" : "📋"}</span>
                  <span>{copiedLink ? "Tersalin!" : "Bagikan Link"}</span>
                </button>
              </div>
            </div>


          </div>
        </div>

        {/* Tabbed Information Section */}
        <section className="glass rounded-[2rem] p-6 sm:p-10 space-y-8 border-2 border-white/60 shadow-lg">
          <div className="flex flex-wrap gap-3 border-b border-black/5 pb-4">
            {[
              { id: "deskripsi", label: "Deskripsi Produk", icon: "📝" },
              { id: "spesifikasi", label: "Saran & Panduan Cetak", icon: "🖨️" },
              { id: "keunggulan", label: "Keunggulan Digital", icon: "⭐" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-md"
                    : "glass text-gray-600 hover:bg-white/80"
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab 1: Deskripsi */}
          {activeTab === "deskripsi" && (
            <div className="space-y-4 max-w-4xl text-gray-700 leading-relaxed text-sm sm:text-base">
              <h3 className="text-xl font-bold text-gray-900">Tentang {product.name}</h3>
              <p>{product.description}</p>
              <div className="glass bg-gradient-to-r from-primary/5 to-orange-100/30 p-5 rounded-2xl border border-primary/20 mt-4 space-y-2">
                <div className="font-bold text-primary text-sm flex items-center gap-2">
                  <span>💡</span> Ingin desain karakter khusus untuk plannermu?
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Kamu bisa memesan layanan custom ilustrasi agar karakter favorit atau persona impianmu digambar eksklusif oleh ilustrator kami dalam format digital resolusi tinggi siap pakai atau siap cetak.
                </p>
                <div className="pt-1">
                  <Link href="/how-it-works" className="text-primary font-bold text-xs hover:underline inline-flex items-center gap-1">
                    Pelajari Cara Pesan Custom →
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Spesifikasi / Panduan Cetak */}
          {activeTab === "spesifikasi" && (
            <div className="space-y-4 max-w-4xl">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-gray-900">Panduan & Rekomendasi Cetak Mandiri</h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Produk ini berbentuk <strong>file digital</strong>. Jika kamu berencana mencetaknya sendiri di rumah atau percetakan lokal, berikut rekomendasi spesifikasi dari kami:
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {Object.entries(product.specs).map(([key, val], idx) => (
                  <div key={idx} className="glass p-4 rounded-2xl space-y-1 border border-white/60">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{key}</span>
                    <p className="text-sm sm:text-base font-semibold text-gray-800">{val}</p>
                  </div>
                ))}
              </div>
              <div className="glass bg-amber-500/10 p-4 rounded-2xl border border-amber-500/20 text-xs sm:text-sm text-amber-900 flex items-start gap-3 mt-2">
                <span className="text-lg">💡</span>
                <div>
                  <strong>Informasi Penting:</strong> Year!hoo tidak menjual atau mengirimkan produk fisik dalam bentuk cetakan jadi. File digital resolusi tinggi akan langsung diberikan untuk kamu unduh dan cetak sendiri sesuai kebutuhanmu.
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Keunggulan */}
          {activeTab === "keunggulan" && (
            <div className="space-y-4 max-w-4xl">
              <h3 className="text-xl font-bold text-gray-900">Keunggulan Utama</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {product.highlights.map((point, idx) => (
                  <div key={idx} className="glass p-4 rounded-2xl flex items-start gap-3 border border-white/60">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

      </main>

      {/* Footer */}
      <footer className="glass border-t border-white/20 mt-16 sm:mt-24 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="space-y-4 flex flex-col items-center sm:items-start">
            <Image src="/logo-1.svg" alt="Year!hoo Text" width={150} height={48} className="object-contain" />
            <p className="text-sm sm:text-base text-gray-600 max-w-xs">
              Bikin hari-harimu makin berwarna dengan planner dan jurnal digital karakter eksklusif siap unduh & cetak dari Year!hoo.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Tautan</h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li>
                <Link href="/catalog" className="hover:text-primary">
                  Katalog Produk
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-primary">
                  Cara Pesan
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Syarat & Ketentuan
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleLynkClick}
                  className="hover:text-primary transition-colors text-left text-sm text-gray-600"
                >
                  Lynk.id
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Bantuan & Pemesanan</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Punya pertanyaan seputar produk atau pesanan custom? Hubungi admin via{" "}
              <a
                href="https://wa.me/6285380492753"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline inline-flex items-center gap-1"
              >
                WhatsApp
              </a>{" "}
              atau{" "}
              <a
                href="https://www.instagram.com/yearh.oo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
              >
                Instagram
              </a>{" "}
              kami setiap hari (09.00 - 21.00 WIB).
            </p>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-black/5 px-4">
          © {new Date().getFullYear()} Year!hoo. All rights reserved.
        </div>
      </footer>

      {/* Toast Notification */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 pointer-events-none ${
          toastMessage ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"
        }`}
      >
        <div className="bg-gray-900/95 text-white backdrop-blur-md px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 border border-white/10 text-sm font-bold tracking-wide">
          <span className="text-base">✨</span>
          <span>{toastMessage}</span>
        </div>
      </div>
    </div>
  );
}
