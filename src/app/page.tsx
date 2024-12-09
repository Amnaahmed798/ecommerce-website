import Image from "next/image";
import { Button } from "@/components/ui/button";

const ImageWithText = () => {
  return (
    <div>
      {/* Main Image Section */}
      <div className="relative w-full h-[700px]">
        <Image
          src="/images/main.jpg"
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          className="object-left"
        />

        {/* Text overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold md:left-[30%] sm:left-[50%] ">
          <p className="mb-12">SUMMER 2020</p>
          <h1 className="text-[50px] mb-12 md:text-[30px] sm:text-[30px]">NEW COLLECTION</h1>
          <p className="mb-8 text-sm md:text-base">We know how large objects will act,<br/> but things on a small scale.</p>
          <Button variant="outline" className="bg-green-500 font-bold border-none rounded-none">SHOP NOW</Button>
        </div>
      </div>

      {/* Editor's Pick Section */}
      <div className="w-full py-12">
        <div className="text-center mb-12">
          <h1 className="font-bold text-[40px]">EDITOR&apos;S PICK</h1>
          <p className="text-sm md:text-base">Problems trying to resolve the conflict between</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Image 1 */}
          <div className="relative flex justify-center w-full sm:w-[300px] md:w-[510px]">
            <Image src="/images/img1.jpg" alt="Image 1" className=" relative w-full h-[500px] object-cover shadow-lg" width={400} height={400} />
            <Button variant="outline" className=" absolute bottom-0 left-[30%] transform -translate-x-1/2 bg-white text-black font-bold border-none rounded-none mb-4 px-8 hover:bg-gray-200 hover:text-gray-700">MEN</Button>
        
          </div>

          {/* Image 2 */}
          <div className="relative flex justify-center w-full sm:w-[240px] md:w-[240px]">
            <Image src="/images/img2.jpg" alt="Image 2" className="relative w-full h-[500px] object-cover shadow-lg" width={400} height={400} />
            <Button variant="outline" className="absolute bottom-0 left-[30%] transform -translate-x-1/2 bg-white text-black font-bold border-none rounded-none px-8 py-2  mb-4 hover:bg-gray-200 hover:text-gray-700">WOMEN</Button>
        
          </div>

          {/* Image 3 */}
   <div className="flex flex-col justify-center w-full sm:w-[240px] md:w-[240px] space-y-4">
  {/* Image 3 */}
  <div className="relative flex justify-center">
    <Image 
      src="/images/img3.jpg" 
      alt="Image 3" 
      className="w-full h-[225px] object-cover object-top shadow-lg" 
      width={400} 
      height={400} 
    />
    <Button 
      variant="outline" 
      className="absolute bg-white text-black font-bold border-none rounded-none hover:bg-gray-200 hover:text-gray-700 bottom-4 left-4"
    >
      ACCESSORIES
    </Button>
  </div>

  {/* Image 4 */}
  <div className="relative flex justify-center">
    <Image 
      src="/images/img4.jpg" 
      alt="Image 4" 
      className="w-full h-[225px] object-cover object-top shadow-lg" 
      width={240} 
      height={500} 
    />
    <Button 
      variant="outline" 
      className="absolute bg-white text-black font-bold border-none rounded-none hover:bg-gray-200 hover:text-gray-700 bottom-4 left-4"
    >
      KIDS
    </Button>
  </div>
</div>

        </div>
      </div>

      {/* Featured Products Section */}
      <div className="min-h-screen flex flex-col items-center justify-center space-y-8 mt-24 mb-12">
        <div className="gap-[20px] text-center">
          <p>Featured Products</p>
          <h1 className="font-bold text-[32px]">BESTSELLER PRODUCTS</h1>
          <p>Problem trying to solve the conflict between</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Product 1 */}
          <div className="w-[239px] h-[427px] relative">
            <Image src="/images/e1.jpg" alt="Image 1" objectFit="cover" className="rounded-lg shadow-lg" width={239} height={427} />
            <div className="text-center mt-4">
              <p className="text-lg font-semibold">Graphic Design</p>
              <p className="text-sm text-gray-500">English Department</p>
              <span className="block text-xl font-bold">$16.48</span>
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-[239px] h-[427px] relative">
            <Image src="/images/e2.jpg" alt="Image 2" objectFit="cover" className="rounded-lg shadow-lg" width={239} height={427} />
            <div className="text-center mt-4">
              <p className="text-lg font-semibold">Graphic Design</p>
              <p className="text-sm text-gray-500">English Department</p>
              <span className="block text-xl font-bold">$16.48</span>
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-[239px] h-[427px] relative">
            <Image src="/images/e3.jpg" alt="Image 3" objectFit="cover" className="rounded-lg shadow-lg" width={239} height={427} />
            <div className="text-center mt-4">
              <p className="text-lg font-semibold">Graphic Design</p>
              <p className="text-sm text-gray-500">English Department</p>
              <span className="block text-xl font-bold">$16.48</span>
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-[239px] h-[427px] relative">
            <Image src="/images/e4.jpg" alt="Image 4" objectFit="cover" className="rounded-lg shadow-lg" width={239} height={427} />
            <div className="text-center mt-4">
              <p className="text-lg font-semibold">Graphic Design</p>
              <p className="text-sm text-gray-500">English Department</p>
              <span className="block text-xl font-bold">$16.48</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Product 5 */}
          <div className="w-[239px] h-[427px] relative">
            <Image src="/images/e5.jpg" alt="Image 5" objectFit="cover" className="rounded-lg shadow-lg" width={239} height={427} />
            <div className="text-center mt-4">
              <p className="text-lg font-semibold">Graphic Design</p>
              <p className="text-sm text-gray-500">English Department</p>
              <span className="block text-xl font-bold">$16.48</span>
            </div>
          </div>

          {/* Product 6 */}
          <div className="w-[239px] h-[427px] relative">
            <Image src="/images/e6.jpg" alt="Image 6" objectFit="cover" className="rounded-lg shadow-lg" width={239} height={427} />
            <div className="text-center mt-4">
              <p className="text-lg font-semibold">Graphic Design</p>
              <p className="text-sm text-gray-500">English Department</p>
              <span className="block text-xl font-bold">$16.48</span>
            </div>
          </div>

          {/* Product 7 */}
          <div className="w-[239px] h-[427px] relative">
            <Image src="/images/e7.jpg" alt="Image 7" objectFit="cover" className="rounded-lg shadow-lg" width={239} height={427} />
            <div className="text-center mt-4">
              <p className="text-lg font-semibold">Graphic Design</p>
              <p className="text-sm text-gray-500">English Department</p>
              <span className="block text-xl font-bold">$16.48</span>
            </div>
          </div>

          {/* Product 8 */}
          <div className="w-[239px] h-[427px] relative">
            <Image src="/images/e8.jpg" alt="Image 8" objectFit="cover" className="rounded-lg shadow-lg" width={239} height={427} />
            <div className="text-center mt-4">
              <p className="text-lg font-semibold">Graphic Design</p>
              <p className="text-sm text-gray-500">English Department</p>
              <span className="block text-xl font-bold">$16.48</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="relative w-full h-[700px] bg-green-300">
        <Image
          src="/images/main.2.png"
          alt="Description of the image"
          objectFit="cover"
          className="rounded-lg absolute top-0 right-0"
          width={443}
          height={685}
        />
        <div className="absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
          <p className="mb-12">SUMMER 2020</p>
          <h1 className="text-[50px] mb-12">Vita Classic <br /> <br /> Product</h1>
          <p className="mb-8">We know how large objects will act, We know how our object will act.</p>
          <div className="flex gap-6">
            <p>$16.48</p>
            <Button variant="outline" className="bg-green-500 font-bold border-none rounded-none">ADD TO CART</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
