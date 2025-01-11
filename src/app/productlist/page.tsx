
// pages/index.tsx
import Link from 'next/link';
import Image from 'next/image';

// Define a type for the product
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  slug: string;
}

// Example data for products
const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'this product contain pure cotton fiber. comfy and avaliable in all sizes and colour',
    price: '$100',
    image: '/images/e3.jpg', // Replace with your image path
    slug: 'product-1',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'this product contain pure cotton fiber. comfy and avaliable in all sizes and colour',
    price: '$150',
    image: '/images/e2.jpg', // Replace with your image path
    slug: 'product-2',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'this product contain pure cotton fiber. comfy and avaliable in all sizes and colour',
    price: '$150',
    image: '/images/e1.jpg', // Replace with your image path
    slug: 'product-3',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'this product contain pure cotton fiber. comfy and avaliable in all sizes and colour',
    price: '$150',
    image: '/images/e1.jpg', // Replace with your image path
    slug: 'product-4',
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'this product contain pure cotton fiber. comfy and avaliable in all sizes and colour',
    price: '$150',
    image: '/images/e5.jpg', // Replace with your image path
    slug: 'product-5',
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'this product contain pure cotton fiber. comfy and avaliable in all sizes and colour',
    price: '$150',
    image: '/images/e6.jpg', // Replace with your image path
    slug: 'product-6',
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'this product contain pure cotton fiber. comfy and avaliable in all sizes and colour',
    price: '$150',
    image: '/images/e7.jpg', // Replace with your image path
    slug: 'product-7',
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'this product contain pure cotton fiber. comfy and avaliable in all sizes and colour',
    price: '$150',
    image: '/images/e8.jpg', // Replace with your image path
    slug: 'product-8',
  },
];

const ProductList: React.FC = () => {
  return (
    <div>
  <h1 className='font-bold text-4xl px-6 mt-10'>Explore Our Products</h1>
  <p className='font-italic px-6'>The quality you want The Quality Experts.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-60 object-cover rounded-md"
          />
          <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-bold">{product.price}</p>
          <Link href={`/product/${product.slug}`} className="mt-4 inline-block text-blue-500">
            View Details
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductList;
