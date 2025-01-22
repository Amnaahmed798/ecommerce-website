"use client"; // Ensure this is set for client-side rendering

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Import from next/navigation
import sanityClient from "@sanity/client";
import Image from "next/image";

// Initialize Sanity client
const sanity = sanityClient({
  projectId: '2fyyyoq0',
  dataset: 'production',
  useCdn: true,
  token: 'skvNXFnfx1n8aM1uRaxcJJ3LsXW5FSWsUvWuoFn1qFaagiJNJ0rUmzw5BVcKZJsHaUNKug9Mji1joP1o2bMOzzuBeHPdnTPs2p3jz87yQsISgEzstkDPQ6yFAukLlgJKxjd6Ste9f2EZtUV7YtQZmkRutXfV8gnuG1J5ZA1mtl6jFzuXtOJl',
});

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercent: number;
  imgUrl: string;
  colors?: string[];
  sizes?: string[];
  tags?: string[];
}

const ProductDetail: React.FC = () => {
  const pathname = usePathname(); // Get the full pathname
  const productId = pathname.split("/")[2]; // Extract the product ID from the URL

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return; // If there's no product ID, don't fetch

    const fetchProduct = async () => {
      try {
        const query = `*[_type == "products" && _id == $id][0] {
          _id,
          name,
          price,
          description,
          discountPercent,
          "imgUrl": image.asset->url,
          colors,
          sizes,
          tags
        }`;

        const data = await sanity.fetch(query, { id: productId });
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false); // Set loading to false once the fetch is done
      }
    };

    fetchProduct();
  }, [productId]); // Re-fetch when the productId changes

  if (loading) {
    return <div>Loading...</div>; // Show loading message
  }

  if (!product) {
    return <div>Product not found</div>; // Handle case when product is not found
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <Image
            src={product.imgUrl}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover rounded-md shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
          <p className="text-lg text-gray-500 mt-2">{product.description}</p>
          <p className="text-xl font-bold text-gray-900 mt-4">${product.price}</p>
          {product.discountPercent > 0 && (
            <p className="text-red-500 text-sm mt-2">
              {product.discountPercent}% Off
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
