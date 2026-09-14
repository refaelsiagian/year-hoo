import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

interface CatalogCardProps {
  product: Product;
}

export default function CatalogCard({ product }: CatalogCardProps) {
  return (
    <div className="glass p-6 rounded-3xl flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300 shadow-md h-full">
      <div className="w-full aspect-square bg-white/50 rounded-2xl flex items-center justify-center p-8">
        <Image src="/logo-2.svg" alt={product.name} width={80} height={80} className="opacity-70 object-contain" />
      </div>
      <div className="w-full text-left space-y-1 flex-grow">
        <div className="text-xs font-bold text-primary uppercase tracking-wider">{product.category}</div>
        <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
        <div className="text-xl font-extrabold text-gray-800 pt-2">Rp {product.price.toLocaleString('id-ID')}</div>
      </div>
      <button className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-dark transition-colors shadow-sm mt-auto text-sm">
        Lihat Detail
      </button>
    </div>
  );
}
