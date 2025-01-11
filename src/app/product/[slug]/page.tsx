import Image from "next/image";

import { FC } from "react";
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


// Define the product data
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  slug: string;
  reviews: {
    rating: number;
    comment: string;
    user: string;
  }[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    description: "This product is a perfect blend of comfort and style. Made with high-quality fabric, it’s perfect for any occasion, whether you’re lounging at home or heading out for a casual outing",
    price:"$100",
    image: "/images/e3.jpg",
    slug: "product-1",
    reviews: [
      {
        rating: 5,
        comment: "Excellent product, highly recommend!",
        user: "John Doe",
      },
      {
        rating: 4,
        comment: "Very good, but could be improved in some areas.",
        user: "Jane Smith",
      },
    ],
  },
  {
    id: 2,
    name: "Product 2",
    description: "This product is a perfect blend of comfort and style. Made with high-quality fabric, it’s perfect for any occasion, whether you’re lounging at home or heading out for a casual outing",
    price: "$150",
    image: "/images/e2.jpg",
    slug: "product-2",
    reviews: [
      {
        rating: 4,
        comment: "Great value for the price.",
        user: "Tom Harris",
      },
      {
        rating: 3,
        comment: "It's okay, but there are better options.",
        user: "Sarah Lee",
      },
    ],
  },
  {
    id: 3,
    name: "Product 3",
    description: "This product is a perfect blend of comfort and style. Made with high-quality fabric, it’s perfect for any occasion, whether you’re lounging at home or heading out for a casual outing",
    price: "$150",
    image: "/images/e1.jpg",
    slug: "product-3",
    reviews: [
      {
        rating: 4,
        comment: "Great value for the price.",
        user: "Tom Harris",
      },
      {
        rating: 3,
        comment: "It's okay, but there are better options.",
        user: "Sarah Lee",
      },
    ],
  },
  {
    id: 4,
    name: "Product 4",
    description: "This product is a perfect blend of comfort and style. Made with high-quality fabric, it’s perfect for any occasion, whether you’re lounging at home or heading out for a casual outing",
    price:"$100",
    image: "/images/e4.jpg",
    slug: "product-4",
    reviews: [
      {
        rating: 5,
        comment: "Excellent product, highly recommend!",
        user: "John Doe",
      },
      {
        rating: 4,
        comment: "Very good, but could be improved in some areas.",
        user: "Jane Smith",
      },
    ],
  },
  {
    id: 5,
    name: "Product 5",
    description: "This product is a perfect blend of comfort and style. Made with high-quality fabric, it’s perfect for any occasion, whether you’re lounging at home or heading out for a casual outing",
    price: "$150",
    image: "/images/e5.jpg",
    slug: "product-5",
    reviews: [
      {
        rating: 4,
        comment: "Great value for the price.",
        user: "Tom Harris",
      },
      {
        rating: 3,
        comment: "It's okay, but there are better options.",
        user: "Sarah Lee",
      },
    ],
  },
  {
    id: 6,
    name: "Product 6",
    description: "This product is a perfect blend of comfort and style. Made with high-quality fabric, it’s perfect for any occasion, whether you’re lounging at home or heading out for a casual outing",
    price:"$100",
    image: "/images/e6.jpg",
    slug: "product-6",
    reviews: [
      {
        rating: 5,
        comment: "Excellent product, highly recommend!",
        user: "John Doe",
      },
      {
        rating: 4,
        comment: "Very good, but could be improved in some areas.",
        user: "Jane Smith",
      },
    ],
  },
  {
    id: 7,
    name: "Product 7",
    description: "This product is a perfect blend of comfort and style. Made with high-quality fabric, it’s perfect for any occasion, whether you’re lounging at home or heading out for a casual outing",
    price: "$150",
    image: "/images/e7.jpg",
    slug: "product-7",
    reviews: [
      {
        rating: 4,
        comment: "Great value for the price.",
        user: "Tom Harris",
      },
      {
        rating: 3,
        comment: "It's okay, but there are better options.",
        user: "Sarah Lee",
      },
    ],
  },
  {
    id: 8,
    name: "Product 8",
    description: "This product is a perfect blend of comfort and style. Made with high-quality fabric, it’s perfect for any occasion, whether you’re lounging at home or heading out for a casual outing",
    price:"$100",
    image: "/images/e8.jpg",
    slug: "product-8",
    reviews: [
      {
        rating: 5,
        comment: "Excellent product, highly recommend!",
        user: "John Doe",
      },
      {
        rating: 4,
        comment: "Very good, but could be improved in some areas.",
        user: "Jane Smith",
      },
    ],
  },
];

// Server-side Product Detail Component (using params)
const ProductDetail: FC<{ params: { slug: string } }> = ({ params }) => {
  const { slug } = params; // Access slug directly from params

  // Find the product based on the slug
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Product Image and Information */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={250}
            height={250}
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-800">{product.name}</h1>
          <p className="text-lg text-gray-500 mt-2">{product.description}</p>
          <p className="text-xl font-bold text-gray-900 mt-4">{product.price}</p>
          <div className="mt-12 flex space-x-4">
 
            
               <AlertDialog>
     <AlertDialogTrigger >
     <Button className=" bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none transition duration-200">
              Add to Cart
            </Button>
     </AlertDialogTrigger>
     <AlertDialogContent className="bg-white text-black" >
       <AlertDialogHeader>
         <AlertDialogTitle>Dear Customer!</AlertDialogTitle>
         <AlertDialogDescription>
         Product added to Cart sucessfully. Please cheack your Cart. Thank you
         </AlertDialogDescription>
       </AlertDialogHeader>
       <AlertDialogFooter>
         <AlertDialogAction>Continue Shopping</AlertDialogAction>
       </AlertDialogFooter>
     </AlertDialogContent>
   </AlertDialog>
             <Button className="bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 focus:outline-none transition duration-200">
              Buy Now
            </Button>
          </div>

        </div>
      </div>

      {/* Reviews Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Customer Reviews</h2>
        {product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
              <div className="flex items-center space-x-2">
                <div className="text-yellow-500">{'★'.repeat(review.rating)}</div>
                <span className="text-sm font-medium text-gray-600">{review.user}</span>
              </div>
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>

      {/* Additional Information Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-6">
  <h3 className="text-2xl font-semibold text-gray-800">Additional Information</h3>
  
  <div className="space-y-4">
    
    <div className="flex justify-between text-lg text-gray-700">
      <span className="font-medium">Fabric Composition:</span>
      <span className="text-gray-500">95% Cotton, 5% Spandex</span>
    </div>


    <div className="flex justify-between text-lg text-gray-700">
      <span className="font-medium">Care Instructions:</span>
      <span className="text-gray-500">Machine wash cold, tumble dry low, do not bleach.</span>
    </div>

    
    <div className="flex justify-between text-lg text-gray-700">
      <span className="font-medium">Fit:</span>
      <span className="text-gray-500">Slim fit with a soft, stretchy feel.</span>
    </div>


    <div className="flex justify-between text-lg text-gray-700">
      <span className="font-medium">Size:</span>
      <span className="text-gray-500">Available in sizes S, M, L, and XL. Refer to our size chart for more details.</span>
    </div>

    <div className="flex justify-between text-lg text-gray-700">
      <span className="font-medium">Occasion:</span>
      <span className="text-gray-500">Perfect for casual outings, office wear, and date nights.</span>
    </div>

    <div className="flex justify-between text-lg text-gray-700">
      <span className="font-medium">Country of Origin:</span>
      <span className="text-gray-500">Made in Bangladesh</span>
    </div>


    <div className="flex justify-between text-lg text-gray-700">
      <span className="font-medium">Sustainability:</span>
      <span className="text-gray-500">This product is made using organic cotton and eco-friendly dyes.</span>
    </div>
  </div>
</div>
</div>
  );
};

export default ProductDetail;
