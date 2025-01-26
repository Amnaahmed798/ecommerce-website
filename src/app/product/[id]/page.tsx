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
  category?: string;
  reviews?: { rating: number; comment: string; author: string }[];
}

const ProductDetail: React.FC = () => {
  const pathname = usePathname(); // Get the full pathname
  const productId = pathname.split("/")[2]; // Extract the product ID from the URL

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [newReview, setNewReview] = useState({ rating: 0, comment: "", author: "" });
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
          tags,
          category,
          reviews
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

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newReview.comment || newReview.rating === 0 || !newReview.author) {
      return alert("Please fill in all fields for the review.");
    }

    const review = {
      rating: newReview.rating,
      comment: newReview.comment,
      author: newReview.author,
    };

    try {
      const res = await fetch("/api/submitReview", {
        method: "POST",
        body: JSON.stringify({ productId, review }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        alert("Thank you for your review!");
        setNewReview({ rating: 0, comment: "", author: "" }); // Reset review form
      } else {
        alert("Error submitting review. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

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

          {/* Category */}
          {product.category && (
            <p className="text-md text-gray-700 mt-4">Category: {product.category}</p>
          )}

          {/* Color Selection */}
          {product.colors && (
            <div className="mt-4">
              <h3 className="font-semibold">Select Color:</h3>
              <div className="flex space-x-4">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full ${selectedColor === color ? "border-2 border-black" : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && (
            <div className="mt-4">
              <h3 className="font-semibold">Select Size:</h3>
              <select
                className="border p-2 rounded-md"
                value={selectedSize || ""}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Select Size</option>
                {product.sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Review Form */}
          <div className="mt-6">
            <h3 className="font-semibold">Leave a Review</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label>Rating (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: +e.target.value })}
                  required
                />
              </div>
              <div>
                <label>Comment</label>
                <textarea
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  required
                />
              </div>
              <div>
                <label>Your Name</label>
                <input
                  type="text"
                  value={newReview.author}
                  onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                Submit Review
              </button>
            </form>
          </div>

          {/* Display Reviews */}
          {product.reviews && product.reviews.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold">Reviews</h3>
              {product.reviews.map((review, index) => (
                <div key={index} className="mt-4 border-t pt-4">
                  <p className="font-semibold">{review.author} - Rating: {review.rating}</p>
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
