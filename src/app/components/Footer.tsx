import React from 'react'
import { ImQrcode } from "react-icons/im";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-600 body-font bottom-0">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4 justify-evenly">
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-bold text-[24px] text-white tracking-widest text-sm mb-3">
          Exclusive
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white text-[20px] hover:text-gray-600">Subscribe</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-600">Get 10% off you first order</a>
          </li>
          <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <label
            htmlFor="footer-field"
            className="leading-7 text-sm text-gray-600"
          >
    
          </label>
          <input
            type="text"
            id="footer-field"
            name="footer-field"
            className="w-44 bg-black bg-opacity-50 rounded border border-white focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder='Enter Your Email'
          />
        </div>
        </nav>
      
        
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font text-[19px] font-medium text-white tracking-widest text-sm mb-3">
        Support
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-600">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-600">exclusive@gmail.com</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-600">+88015-88888-9999</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font text-[19px] font-medium text-white tracking-widest text-sm mb-3">
          Account
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-600">My Account</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-600">Login/ Register</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-600">Cart</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-600">Wishlist</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-600">Shop</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font text-[19px]  font-medium text-white tracking-widest text-sm mb-3">
          Quick Link
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-white hover:text-gray-600">Privacy Policy</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-600">Term of Use</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-600">FAQ</a>
          </li>
          <li>
            <a className="text-white hover:text-gray-600">Contact</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font text-[19px] font-medium text-white tracking-widest text-sm mb-3">
          Download App
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400">Save $3 with App New User Only</a>
          </li>
          <li>
           <ImQrcode 
           className='bg-white text-black w-20 h-20 border border-white px-1 '/>
           <br />
          </li>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        <a className="text-white">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-white">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span> 
        </nav>
        </div>
  </div>
  
  <div className="border-t border-gray-200">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
          Copyright Rimel 2023.All right reserved
        </p>
      </div>
    </div>
  </div>
  </div>
</footer>
  )
}

export default Footer