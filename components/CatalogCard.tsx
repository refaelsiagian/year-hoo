import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";

interface CatalogCardProps {
  product: Product;
}

export default function CatalogCard({ product }: CatalogCardProps) {
  return (
    <div className="glass p-6 rounded-3xl flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300 shadow-md h-full relative group">
      <Link href={`/catalog/${product.id}`} className="w-full aspect-square bg-white/50 rounded-2xl flex items-center justify-center p-4 relative overflow-hidden group-hover:bg-white/80 transition-colors">
        {product.isAvailable === false && (
          <span className="absolute top-3 right-3 z-10 text-[11px] font-bold px-3 py-1 rounded-full bg-rose-50/95 text-rose-600 border border-rose-200 shadow-sm backdrop-blur-md">
            Tidak Tersedia
          </span>
        )}
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={320}
            height={220}
            className="w-full h-full object-contain rounded-xl drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <Image
            src="/logo-2.svg"
            alt={product.name}
            width={80}
            height={80}
            className="opacity-70 object-contain group-hover:scale-110 transition-transform duration-300"
          />
        )}
      </Link>

      <div className="w-full text-left space-y-1.5 flex-grow">
        <div>
          <span className="text-xs font-bold text-primary uppercase tracking-wider">{product.category}</span>
        </div>

        <Link href={`/catalog/${product.id}`}>
          <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
          {product.tagline}
        </p>

        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-lg font-extrabold text-gray-900">
            Rp {product.price.toLocaleString('id-ID')}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              Rp {product.originalPrice.toLocaleString('id-ID')}
            </span>
          )}
        </div>
      </div>

      <Link
        href={`/catalog/${product.id}`}
        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-xl transition-all shadow-sm hover:shadow-md mt-auto text-sm text-center block"
      >
        Lihat Detail
      </Link>
    </div>
  );
}
