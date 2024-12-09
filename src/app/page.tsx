import Image from "next/image";
import { Button } from "@/components/ui/button"




const ImageWithText = () => {
  return (
    <div>
    <div className="relative w-full h-[700px]"> {/* Wrapper with relative position */}
      {/* Image */}
      <Image 
        src="/images/main.img" 
        alt="Description of the image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      
      {/* Text overlay */}
      <div className="absolute top-1/2 left-[400px] transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
        <p className="mb-12">SUMMER 2020</p>
        <h1 className="text-[50px] mb-12">NEW COLLECTION</h1>
        <p className="mb-8">We know how large objects will act ,<br /> but things on a small scale.</p>
        <Button variant="outline" className="bg-green-500 font-bold border-none rounded-none">SHOP NOW</Button>
      </div>
    </div>
    <div className="w-1440 h-770 ">
      <div className="item-center content-center text-center mt-12 mb-12">
      <h1 className="font-bold text-[40px]">EDITOR&apos;S PICK</h1>
      <p>Problems trying to resolve the conflict between</p>
      </div>
    <div className="flex p-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="flex justify-center">
            <Image src="/images/img1.jpg" alt="Image 1" className="w-[510px] h-[500px] object-cover shadow-lg" width={400} height={400}/>
        </div>

     
        <div className="flex justify-center">
            <Image src="/images/img2.jpg" alt="Image 2" className="w-[240px] h-[500px] object-cover shadow-lg" width={400} height={400}/>
        </div>

        
        <div className="gap-x-8 justify-center">
            <div className="w-[240px] h-[225px] mb-10">
                <Image src="/images/img3.jpg" alt="Image 3" className="w-full h-full object-cover object-top shadow-lg"width={400} height={400}/>
            </div>
            <div className="w-[240px] h-[225px]">
                <Image src="/images/img4.jpg" alt="Image 4" className="w-full h-full  object-top object-cover " width={240} height={500}/>
            </div>
        </div>
    </div>
</div>

 

    <div className="min-h-screen flex flex-col items-center justify-center space-y-8 mt-24 mb-12">
      <div className="gap-[20px] text-center">
        <p>Featured Products</p>
        <h1 className="font-bold text-[32px]">BESTSELLER PRODUCTS</h1>
        <p>Problem trying to solve the conflict between</p>
      </div>
      <div className="flex space-x-8">
        <div className="w-[239px] h-[427px] relative">
          <Image 
            src="/images/e1.jpg" // Replace with your image path
            alt="Image 1"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={239}
            height={427}
          />
           <div className="text-center mt-4">
            <p className="text-lg font-semibold">Graphic Design</p>
            <p className="text-sm text-gray-500">English Department</p>
            <span className="block text-xl font-bold">$16.48</span>
          </div>
        </div>
        <div className="w-[239px] h-[427px] relative">
          <Image 
            src="/images/e2.jpg" // Replace with your image path
            alt="Image 2"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={239}
            height={427}
          />
           <div className="text-center mt-4">
            <p className="text-lg font-semibold">Graphic Design</p>
            <p className="text-sm text-gray-500">English Department</p>
            <span className="block text-xl font-bold">$16.48</span>
          </div>
        </div>
        <div className="w-[239px] h-[427px] relative">
          <Image 
            src="/images/e3.jpg" // Replace with your image path
            alt="Image 3"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={239}
            height={427}
          />
           <div className="text-center mt-4">
            <p className="text-lg font-semibold">Graphic Design</p>
            <p className="text-sm text-gray-500">English Department</p>
            <span className="block text-xl font-bold">$16.48</span>
          </div>
        </div>
        <div className="w-[239px] h-[427px] relative">
          <Image 
            src="/images/e4.jpg" // Replace with your image path
            alt="Image 4"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={239}
            height={427}
          />
           <div className="text-center mt-4">
            <p className="text-lg font-semibold">Graphic Design</p>
            <p className="text-sm text-gray-500">English Department</p>
            <span className="block text-xl font-bold">$16.48</span>
          </div>
        </div>
        </div>
      <div className="flex space-x-8">
        <div className="w-[239px] h-[427px] relative">
          <Image 
            src="/images/e5.jpg" // Replace with your image path
            alt="Image 5"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={239}
            height={427}
          />
           <div className="text-center mt-4">
            <p className="text-lg font-semibold">Graphic Design</p>
            <p className="text-sm text-gray-500">English Department</p>
            <span className="block text-xl font-bold">$16.48</span>
          </div>
          </div>
        <div className="w-[239px] h-[427px] relative">
          <Image 
            src="/images/e6.jpg" // Replace with your image path
            alt="Image 6"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={239}
            height={427}
          />
           <div className="text-center mt-4">
            <p className="text-lg font-semibold">Graphic Design</p>
            <p className="text-sm text-gray-500">English Department</p>
            <span className="block text-xl font-bold">$16.48</span>
          </div>
        </div>
        <div className="w-[239px] h-[427px] relative">
          <Image 
            src="/images/e7.jpg" // Replace with your image path
            alt="Image 7"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={239}
            height={427}
          />
           <div className="text-center mt-4">
            <p className="text-lg font-semibold">Graphic Design</p>
            <p className="text-sm text-gray-500">English Department</p>
            <span className="block text-xl font-bold">$16.48</span>
          </div>
        </div>
        <div className="w-[239px] h-[427px] relative">
          <Image 
            src="/images/e8.jpg" // Replace with your image path
            alt="Image 8"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            width={239}
            height={427}
          />
          <div className="text-center mt-4">
            <p className="text-lg font-semibold">Graphic Design</p>
            <p className="text-sm text-gray-500">English Department</p>
            <span className="block text-xl font-bold">$16.48</span>
          </div>
          </div>
      </div>
    </div>


    <div>
    <div className="relative  w-full h-[700px] bg-green-300"> {/* Wrapper with relative position */}
      {/* Image */}
      <Image 
        src="/images/main.2.png" 
        alt="Description of the image"
        objectFit="cover"
        className="rounded-lg absolute top-0 right-0"
        width={443}
        height={685}
      />
      
      {/* Text overlay */}
      <div className="absolute top-1/2 left-[400px] transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold">
        <p className="mb-12">SUMMER 2020</p>
        <h1 className="text-[50px] mb-12 ">Vita Classic <br /> <br /> Product</h1>
        <p className="mb-8">We know how largr objects will act, We know<br />how our object will act. we know</p>
        <div className="flex gap-6 ">
         <p>$16.48</p><Button variant="outline" className="bg-green-500 font-bold border-none rounded-none">ADD TO CART</Button>
      
        </div>
        </div>
    </div>
    </div>
    </div>

    </div>

  )
}

export default ImageWithText;
