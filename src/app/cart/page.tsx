// pages/cart.js
"use client";
import { useState } from 'react';
import Link from "next/link";

// Sample cart data
const cartData = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 150,
    quantity: 2,
  },
];

export default function Cart() {
  const [cart, setCart] = useState(cartData);

  const removeFromCart = (id:number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">Shopping Cart</h1>
      <div className="mt-6">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b py-4">
                <span>{item.name} x {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4 flex justify-between">
        <span className="font-bold">Total: ${totalPrice}</span>
        <Link href="/cheackout" className="bg-blue-500 text-white px-6 py-2 rounded">
          Checkout
        </Link>
      </div>
    </div>
  );
}
