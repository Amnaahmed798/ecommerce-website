import React from "react";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-white ">

<div className=" mx-auto w-full flex p-5 flex-col md:flex-row items-center bg-black text-white gap-32">
  
  <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 w-full md:w-auto">
    <div className="flex gap-4 w-full md:w-auto"> 
    <p className="flex item-center"><FiPhone 
    className="flex mt-1"/>(225) 555-0118</p>
        <p className="flex"><BsEnvelope
        className="flex mt-1" />michelle.rivera@example.com</p>
    </div>
  </div>


  <div className="flex flex-col items-center text-center md:text-left w-full md:w-auto">
    <p className="text-lg font-medium">Follow Us and get a chance to win 80% off</p>
  </div>

  
  <div className="flex flex-col items-center text-center md:text-left w-full md:w-auto">
    <p className="flex font-medium">Follow Us:
    <span className="flex inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
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
      </p>
  </div>
</div>




      <div className="flex m-10 gap-[90px] ">
        <div className="font-bold text-3xl ">Bandage</div>
        <div className="content-center">
          <ul className="flex space-x-10 text-2xl ">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
             <select name="Shop" id="Shop">
              <option value="Shop">Shop</option>
             </select>
            </li>
            <li>
              <a href="About"></a>
            </li>
            <li>
              <a href="Blog">Blog</a>
            </li>
            <li>
              <a href="Contact">Contact</a>
            </li>
            <li>
              <a href="Pages">Pages</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <div className="flex items-center text-blue-400  ">
          <span className="blue-400 flex">
            <div className="flex">
            <CgProfile 
            className="flex  w-5 h-5"/>
            <a href="Login"><b>Login / </b></a>
            <a href="Register"><b>Regester</b></a>
            </div>
            </span>
           
          </div>
          <div className="flex items-center gap-5 text-blue-400">
             <CiSearch className=" w-7 h-7 "/>
            <CiHeart className=" blue-400 w-7 h-7" />
            <IoCartOutline className="blue-400 w-7 h-7" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;