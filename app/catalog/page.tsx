"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const products = [
  { id: 1, name: "Sakura Chibi Yearly Planner", category: "Yearly Book", price: 149000 },
  { id: 2, name: "Midnight Owl Journal", category: "Journal", price: 89000 },
  { id: 3, name: "Cute Mascot Sticker Pack", category: "Sticker", price: 15000 },
  { id: 4, name: "Summer Vibes Planner 2027", category: "Yearly Book", price: 159000 },
  { id: 5, name: "Minimalist Anime Notes", category: "Journal", price: 79000 },
  { id: 6, name: "Holo Chibi Face Stickers", category: "Sticker", price: 20000 },
];

export default function Catalog() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen text-gray-800">
      {/* Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-md backdrop-blur-md border-b border-gray-200 py-3" : "glass border-b border-white/20 py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-2.svg" alt="Year!hoo Icon" width={40} height={40} className="object-contain" style={{ width: 'auto', height: '40px' }} />
            <Image src="/logo-1.svg" alt="Year!hoo Text" width={120} height={40} className="object-contain hidden sm:block" style={{ width: 'auto', height: '32px' }} />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/catalog" className="text-primary transition-colors">Katalog</Link>
            <Link href="/#how-it-works" className="hover:text-primary transition-colors">Cara Pesan</Link>
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
            <Link href="/catalog" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-primary">Katalog</Link>
            <Link href="/#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="py-2 hover:text-primary">Cara Pesan</Link>
          </div>
        )}
      </header>

      <main className="flex-grow pt-28 sm:pt-32 pb-12 px-4 sm:px-8 max-w-full mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">Katalog Produk</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Temukan buku harian, planner, dan stiker dengan desain karakter kekinian yang siap menemani harimu.</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4">
          {["All", "Yearly Book", "Journal", "Sticker"].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-md' : 'glass text-gray-600 hover:bg-white/60'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="w-full px-2 sm:px-12 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 w-full">
            {filteredProducts.map(product => (
              <div key={product.id} className="glass p-6 rounded-3xl flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300 shadow-md w-full">
                <div className="w-full aspect-square bg-white/50 rounded-2xl flex items-center justify-center p-8">
                   <Image src="/logo-2.svg" alt={product.name} width={80} height={80} className="opacity-70 object-contain" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <div className="w-full text-left space-y-1">
                  <div className="text-xs font-bold text-primary uppercase tracking-wider">{product.category}</div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
                  <div className="text-xl font-extrabold text-gray-800 pt-2">Rp {product.price.toLocaleString('id-ID')}</div>
                </div>
                <button className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-dark transition-colors shadow-sm mt-auto">
                  Lihat Detail
                </button>
              </div>
            ))}
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
