
"use client";

import React, { useState, FormEvent } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"; // Adjust the import path if necessary
import { FaGoogle, FaApple, FaAndroid } from "react-icons/fa"; // Add react-icons for Google, Apple, and Android

// Define the LoginCardProps type
interface LoginCardProps {
  onLogin: (email: string, password: string) => void;
}

const LoginCard: React.FC<LoginCardProps> = ({ onLogin }) => {
  // State to manage form input values
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Handle form submission
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    onLogin(email, password); // Call the login handler passed as a prop
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <Card className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">Login</CardTitle>
          <CardDescription className="text-center text-sm text-gray-500">
            Please enter your credentials to log in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            {/* Email input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Log In
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-4 flex justify-center space-x-4">
            <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 focus:outline-none">
              <FaGoogle className="text-red-500" size={24} />
            </button>
            <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 focus:outline-none">
              <FaApple className="text-black" size={24} />
            </button>
            <button className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 focus:outline-none">
              <FaAndroid className="text-green-500" size={24} />
            </button>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginCard;
