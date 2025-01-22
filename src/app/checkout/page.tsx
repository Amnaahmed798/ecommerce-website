"use client";

"use client";

import React, { useState } from "react";

const CheckoutPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "creditCard",
    additionalDetails: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission logic here
    alert("Order placed successfully!");
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800">Checkout</h2>
      
      {/* Checkout Form Card */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Billing Details Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Billing Details</h3>

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-lg font-medium text-gray-700">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Email Address */}
          <div className="mt-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mt-4">
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Address */}
          <div className="mt-4">
            <label htmlFor="address" className="block text-lg font-medium text-gray-700">Shipping Address</label>
            <textarea
              id="address"
              name="address"
              placeholder="Enter your shipping address"
              value={formData.address}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        {/* Payment Method Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Payment Method</h3>

          <div>
            <label htmlFor="paymentMethod" className="block text-lg font-medium text-gray-700">Select Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md"
              required
            >
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </div>
        </div>

        {/* Additional Details Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Additional Details (Optional)</h3>

          <div>
            <textarea
              id="additionalDetails"
              name="additionalDetails"
              placeholder="Any additional notes or requests"
              value={formData.additionalDetails}
              onChange={handleChange}
              rows={3}
              className="mt-2 w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Place Order Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
