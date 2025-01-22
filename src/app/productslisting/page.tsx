
"use client"; 

import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import Link from "next/link"; 

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

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "products"] {
          _id,
          name,
          price,
          description,
          discountPercent,
          "imgUrl": image.asset->url,
          colors,
          sizes,
          tags
        }
      `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (product: Product) => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    savedCart.push(product);
    localStorage.setItem("cart", JSON.stringify(savedCart));
    alert(`${product.name} has been added to the cart!`);
  };

  const truncateDescription = (text: string, length = 100) => {
    return text.length > length ? `${text.substring(0, length)}... ` : text;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">
        Products From API Data
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md p-4">
            <Link href={`/product/${product._id}`}>
              <Image
                src={product.imgUrl}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
            </Link>
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-slate-800 mt-2 text-sm">
                {truncateDescription(product.description)}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-slate-600 font-bold">${product.price}</p>
                  {product.discountPercent > 0 && (
                    <p className="text-red-500 font-semibold text-sm">
                      {product.discountPercent}% Off
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {(product.tags || []).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-slate-400 text-black rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link href="/cart">
        <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
          Go to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductCards;
