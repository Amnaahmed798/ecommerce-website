import React from 'react'
import Image from "next/image";
import {Button} from "@/components/ui/button"

const categories = () => {
  return (
  
        <div className="w-full py-12">
        <div className="text-center mb-12">
          <h1 className="font-bold text-[40px]">EDITOR&apos;S PICK</h1>
          <p className="text-sm md:text-base">Problems trying to resolve the conflict between</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Image 1 */}
          <div className="relative w-full sm:w-[300px] md:w-[510px]">
            <Image src="/images/img1.jpg" alt="Image 1" className="w-full h-[500px] object-cover shadow-lg" width={400} height={400} />
            <Button variant="outline" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold border-none rounded-none mb-4 px-8 hover:bg-gray-200 hover:text-gray-700">MEN</Button>
          </div>

          {/* Image 2 */}
          <div className="relative w-full sm:w-[240px] md:w-[240px]">
            <Image src="/images/img2.jpg" alt="Image 2" className="w-full h-[500px] object-cover shadow-lg" width={400} height={400} />
            <Button variant="outline" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold border-none rounded-none px-8 py-2 mb-4 hover:bg-gray-200 hover:text-gray-700">WOMEN</Button>
          </div>

          <div className="flex flex-row lg:flex-col gap-6 justify-center ">
  {/* Image 3 */}
  <div className="relative w-full sm:w-[240px] md:w-[240px] lg:w-[240px]">
    <Image
      src="/images/img3.jpg"
      alt="Image 3"
      className="w-full h-[225px] object-cover object-top shadow-lg"
      width={400}
      height={400}
    />
    <Button
      variant="outline"
      className="absolute bottom-0 left-4 bg-white text-black font-bold border-none rounded-none hover:bg-gray-200 hover:text-gray-700 mb-4"
    >
      ACCESSORIES
    </Button>
  </div>

  {/* Image 4 */}
  <div className="relative w-full sm:w-[240px] md:w-[240px] lg:w-[240px]">
    <Image
      src="/images/img4.jpg"
      alt="Image 4"
      className="w-full h-[225px] object-cover object-top shadow-lg"
      width={240}
      height={500}
    />
    <Button
      variant="outline"
      className="absolute bottom-0 left-4 bg-white text-black font-bold border-none rounded-none hover:bg-gray-200 hover:text-gray-700 mb-4"
    >
      KIDS
    </Button>
  </div>
</div>
    </div>
    </div>
  )
}

export default categories;