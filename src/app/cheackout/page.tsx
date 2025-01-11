// pages/checkout.jsx
"use client"
import { useState } from 'react';

export default function Checkout() {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [totalPrice] = useState(250); // Placeholder total price

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    alert('Order placed successfully!');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">Checkout</h1>

      <div className="mt-6">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={customerDetails.name}
          onChange={handleChange}
          className="mt-2 w-full p-2 border rounded"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={customerDetails.email}
          onChange={handleChange}
          className="mt-2 w-full p-2 border rounded"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Address</label>
        <textarea
          name="address"
          value={customerDetails.address}
          onChange={handleChange}
          className="mt-2 w-full p-2 border rounded"
        />
      </div>

      <div className="mt-6 flex justify-between">
        <span className="font-bold">Total: ${totalPrice}</span>
        <button onClick={handleSubmit} className="bg-green-500 text-white px-6 py-2 rounded">
          Place Order
        </button>
      </div>
    </div>
  );
}

