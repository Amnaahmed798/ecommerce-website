// "use client";


// import React, { useState, FormEvent } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"; // Adjust the import path if necessary

// // Define the LoginCardProps type
// interface LoginCardProps {
//   onLogin: (email: string, password: string) => void;
// }

// const LoginCard: React.FC<LoginCardProps> = ({ onLogin }) => {
//   // State to manage form input values
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");

//   // Handle form submission
//   const handleLogin = (e: FormEvent) => {
//     e.preventDefault();
//     onLogin(email, password); // Call the login handler passed as a prop
//   };

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Login</CardTitle>
//         <CardDescription>Please enter your credentials to log in.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleLogin}>
//           {/* Email input */}
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Password input */}
//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             Log In
//           </button>
//         </form>
//       </CardContent>
//       <CardFooter>
//         <p className="text-center text-sm text-gray-600">
//           Don&apos;t have an account?{" "}
//           <a href="/register" className="text-blue-500 hover:underline">
//             Sign up
//           </a>
//         </p>
//       </CardFooter>
//     </Card>
//   );
// };

// export default LoginCard;



import React from 'react'

const login = () => {
  return (
    <div>login</div>
  )
}

export default login
