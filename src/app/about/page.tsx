import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {
  return (
    <div className="px-4 md:px-32">
      {/* About section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-12 gap-8">
        <div className="text-black text-xl mt-16 md:mt-32 md:max-w-lg">
          <p className="mb-6 font-bold text-xl">ABOUT COMPANY</p>
          <h1 className="text-3xl md:text-5xl mb-6 font-bold">ABOUT US</h1>
          <p className="mb-4">
            We know how large objects will act, <br /> We know how our object will act.
          </p>
          <Button variant="outline" className="bg-blue-500 text-white hover:bg-gray-300 hover:text-black font-bold border-none rounded-md">
            Get Quote Now
          </Button>
        </div>
        <div className="w-full md:w-auto">
          <Image
            src="/images/about.png"
            alt="Description of the image"
            objectFit="cover"
            className="rounded-lg"
            width={603}
            height={500}
          />
        </div>
      </div>

      {/* Problem Trying Section */}
      <div className="mt-12">
        <p className="text-red-600 font-bold text-xl">Problems trying</p>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <p className="text-2xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus earum facere fugiat.
          </p>
          <p className="text-lg">
            Problem trying to resolve the conflict between the two major realms of classical physics: Newtonian Mechanics.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-12 text-center mt-16 mb-12">
        <div>
          <p className="font-bold text-4xl">15K</p>
          <p>Happy Customers</p>
        </div>
        <div>
          <p className="font-bold text-4xl">150K</p>
          <p>Monthly Visitors</p>
        </div>
        <div>
          <p className="font-bold text-4xl">15</p>
          <p>Countries Worldwide</p>
        </div>
        <div>
          <p className="font-bold text-4xl">100+</p>
          <p>Top Partners</p>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="text-center mt-24 mb-12">
        <p className="text-4xl font-bold">Meet Our Team</p>
        <p className="mt-4">
          Problem trying to resolve the conflict between <br />
          the two major realms of classical physics: Newtonian Mechanics.
        </p>
      </div>
    
      <div className="flex flex-wrap justify-center gap-8 mb-6">
        {/* Team Member 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3">
          <Image
            src="/images/team1.jpg"
            alt="Team Member 1"
            objectFit="cover"
            className="rounded-lg"
            width={316}
            height={231}
          />
          <div className="text-center mt-4">
            <p>Username</p>
            <p>Profession</p>
            <div className="flex justify-center mt-6">
              <a className="text-black mr-3">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="text-black mr-3">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="text-black mr-3">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="text-black mr-3">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </div>
          </div>
         </div>
         </div>
        <div className="flex flex-wrap justify-center gap-8 mb-6">
        {/* Team Member 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3">
          <Image
            src="/images/team2.jpg"
            alt="Team Member 1"
            objectFit="cover"
            className="rounded-lg"
            width={316}
            height={231}
          />
          <div className="text-center mt-4">
            <p>Username</p>
            <p>Profession</p>
            <div className="flex justify-center mt-6">
              <a className="text-black mr-3">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="text-black mr-3">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="text-black mr-3">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="text-black mr-3">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-6">
        {/* Team Member 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3">
          <Image
            src="/images/team3.jpg"
            alt="Team Member 1"
            objectFit="cover"
            className="rounded-lg"
            width={316}
            height={231}
          />
          <div className="text-center mt-4">
            <p>Username</p>
            <p>Profession</p>
            <div className="flex justify-center mt-6">
              <a className="text-black mr-3">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="text-black mr-3">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="text-black mr-3">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="text-black mr-3">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Big Companies Section */}
      <div className="bg-gray-200 py-16 text-center">
        <p className="font-bold text-4xl">Big Companies Are Here</p>
        <p className="mt-4">
          Problem trying to resolve the conflict between <br /> the two major realms of classical physics: Newtonian Mechanics.
        </p>
        <div className="mt-12">
          <Image
            src="/images/row.png"
            alt="Big Companies Row"
            objectFit="cover"
            className="object-center"
            width={1040}
            height={175}
          />
        </div>
      </div>

      {/* New Collection Section */}
      <div className="flex bg-blue-600 justify-center items-center gap-16 py-16">
        <div className="text-white text-center">
          <p className="mb-6">SUMMER 2020</p>
          <h1 className="text-3xl md:text-5xl mb-6">NEW COLLECTION</h1>
          <p className="mb-8 text-sm md:text-base">
            We know how large objects will act, <br /> but things on a small scale.
          </p>
          <Button variant="outline" className="bg-green-500 font-bold border-none rounded-md">
            SHOP NOW
          </Button>
        </div>
        <div>
          <Image
            src="/images/pic1.png"
            alt="New Collection"
            objectFit="cover"
            className="object-left"
            width={505}
            height={331}
          />
        </div>
      </div>
    </div>
  );
}
