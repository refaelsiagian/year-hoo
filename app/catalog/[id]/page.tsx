import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/products";
import ProductDetailClient from "./ProductDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | Year!hoo",
      description: "Halaman detail produk tidak ditemukan di Year!hoo.",
    };
  }

  return {
    title: `${product.name} | Year!hoo`,
    description: `${product.name} - ${product.tagline}. Pesan produk alat tulis dan jurnal karakter eksklusif di Year!hoo.`,
  };
}

export async function generateStaticParams() {
  return products.map(product => ({
    id: product.id.toString(),
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
