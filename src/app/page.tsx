import Image from "next/image";
import { Button } from "@/components/ui/button";

const ImageWithText = () => {
  return (
    <div>
      {/* Main Image Section */}
      <div className="relative w-full h-[60vh] sm:h-[700px]">
        <Image
          src="/images/main.jpg"
          alt="Description of the image"
          layout="fill"
          objectFit="cover"
          className="object-left"
        />

        {/* Text overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold text-center md:left-[30%] sm:left-[50%]">
          <p className="mb-12">SUMMER 2020</p>
          <h1 className="text-[50px] font-bold mb-12 md:text-[30px] sm:text-[30px]">NEW COLLECTION</h1>
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
      </div>

      {/* Additional Section */}
      <div className="relative w-full h-[60vh] sm:h-[700px] bg-green-300">
        <Image
          src="/images/main.2.png"
          alt="Description of the image"
          objectFit="cover"
          className="rounded-lg absolute top-0 right-0"
          width={443}
          height={685}
        />
        <div className="absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold ">
          <p className="mb-12">SUMMER 2020</p>
          <h1 className="text-[50px] mb-12">Vita Classic  Product</h1>
          <p className="mb-8">We know how large objects will act, We know how our object will act.</p>
          <div className="flex gap-6 ">
            <p>$16.48</p>
            <Button variant="outline" className="bg-green-500 font-bold border-none rounded-none">ADD TO CART</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
        <div>
          <Image
            src="/images/main3.png"
            alt="Description of the image"
            objectFit="cover"
            className="rounded-lg"
            width={775}
            height={724}
            layout="intrinsic"
          />
        </div>
        <div className="mt-32 text-center">
          <p className="mb-12">SUMMER 2020</p>
          <h1 className="text-[50px] mb-12">Part of the Neural<br /> Universe</h1>
          <p className="mb-8">We know how large objects will act, We know how our object will act.</p>
          <div className="flex gap-6 justify-center">
            <Button variant="outline" className="bg-white text-green-500 font-bold border-2 border-green-500 hover:bg-green-500 hover:text-white rounded-none">BUY NOW</Button>
            <Button variant="outline" className="bg-white text-green-500 border-2 border-green-500 font-bold hover:bg-green-500 hover:text-white rounded-none">READ MORE</Button>
          </div>
        </div>
      </div>

      {/* Featured Posts Section */}
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
  );
};

export default ImageWithText;
