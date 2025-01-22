import React from 'react'
import Image from "next/image"

const blog = () => {
  return (
         <div>
         <div className="text-center mt-24">
            <p className="font-bold text-blue-500">Practice Advice</p>
            <h1 className="font-bold text-[32px]">Featured Posts</h1>
            <p>Problem trying to resolve the conflict between <br/>the two major realms of classical physics: Newtonian Mechanics</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {/* Post 1 */}
            <div className="w-[348px]">
              <Image
                src="/images/one 1.png"
                alt="Post 1"
                objectFit="cover"
                className="rounded-lg"
                width={348}
                height={300}
                layout="fixed"
              />
              <div className="px-5 py-4">
                <div className="flex justify-center gap-4 text-center">
                  <button className="hover:text-blue-400">Google</button>
                  <button className="hover:text-blue-400">Trending</button>
                  <button className="hover:text-blue-400">New</button>
                </div>
                <h1 className="text-[30px]">Lorem ipsum dolor sit amet, consectetur</h1>
                <p>We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
                <div className="flex gap-14 mt-6 justify-center">
                  <p>22 April 2021</p>
                  <p>10 Comments</p>
                </div>
                <p className="font-bold mt-6 text-[15px]">Learn More</p>
              </div>
            </div>
    
            {/* Post 2 */}
            <div className="w-[348px]">
              <Image
                src="/images/two 1.png"
                alt="Post 2"
                objectFit="cover"
                className="rounded-lg"
                width={348}
                height={300}
                layout="fixed"
              />
              <div className="px-5 py-4">
                <div className="flex justify-center gap-4 text-center">
                  <button className="hover:text-blue-400">Google</button>
                  <button className="hover:text-blue-400">Trending</button>
                  <button className="hover:text-blue-400">New</button>
                </div>
                <h1 className="text-[30px]">Lorem ipsum dolor sit amet, consectetur</h1>
                <p>We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
                <div className="flex gap-14 mt-6 justify-center">
                  <p>22 April 2021</p>
                  <p>10 Comments</p>
                </div>
                <p className="font-bold mt-6 text-[15px]">Learn More</p>
              </div>
            </div>
    
            {/* Post 3 */}
            <div className="w-[348px]">
              <Image
                src="/images/three 1.png"
                alt="Post 3"
                objectFit="cover"
                className="rounded-lg"
                width={348}
                height={300}
                layout="fixed"
              />
              <div className="px-5 py-4">
                <div className="flex justify-center gap-4 text-center">
                  <button className="hover:text-blue-400">Google</button>
                  <button className="hover:text-blue-400">Trending</button>
                  <button className="hover:text-blue-400">New</button>
                </div>
                <h1 className="text-[30px]">Lorem ipsum dolor sit amet, consectetur</h1>
                <p>We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
                <div className="flex gap-14 mt-6 justify-center">
                  <p>22 April 2021</p>
                  <p>10 Comments</p>
                </div>
                <p className="font-bold mt-6 text-[15px]">Learn More</p>
              </div>
            </div>
          </div>
          </div>
  )
}

export default blog