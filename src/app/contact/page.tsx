import { BiPhone } from "react-icons/bi";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaLocationDot } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24">
        
        {/* Contact Information */}
        <div className="w-full max-w-[500px] text-center lg:text-left">
          <p className="font-bold text-lg text-gray-800">CONTACT US</p>
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">Get in touch today!</h1>
          <p className="mb-6 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium rem ducimus dolorum?
          </p>
          <p className="font-bold text-gray-700 mb-4">Phone: +452 653 637</p>
          <p className="font-bold text-gray-700 mb-6">Fax: +453 736 267</p>

          {/* Social Media Links */}
          <div>
            <span className="flex gap-4 justify-center lg:justify-start">
              <a href="https://twitter.com" className="text-black">
                <BiPhone size={24} />
              </a>
              <a href="https://facebook.com" className="text-black">
                <FaLocationDot size={24} />
              </a>
              <a href="https://instagram.com" className="text-black">
                <BsEnvelopeFill size={24} />
              </a>
            </span>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-[600px]">
          <Image
            src="/images/contact.png"
            alt="Description of the image"
            layout="responsive"
            className="rounded-lg"
            width={603}
            height={500}
          />
        </div>
      </div>

             <div className="py-12 px-4">
  <div className="text-center mb-12">
    <h2 className="font-bold text-lg">Visit Our Office</h2>
    <h1 className="font-bold text-[44px]">
      We help small businesses <br /> with big ideas
    </h1>
  </div>

  <div className="flex justify-center items-center gap-[30px] text-center flex-wrap">
    <div className="w-[327px] h-[343px] space-y-4  hover:bg-blue-900 hover:text-white content-center">
      <BiPhone className="text-5xl mx-auto" />
      <p>googleyoung@gmail.com</p>
      <p>googleyoung@ple.com</p>
      <p className="text-[20px]">Get Support</p>
      <Button variant="outline" className="bg-blue-500 text-white hover:bg-gray-300 hover:text-blue-500 hover:bg-white font-bold border-2 border-blue-500 rounded-full">
        Submit Request
      </Button>
    </div>

    <div className="w-[327px] h-[343px] space-y-4 hover:bg-blue-900 hover:text-white content-center">
      <FaLocationDot className="text-5xl mx-auto" />
      <p>googleyoung@gmail.com</p>
      <p>googleyoung@ple.com</p>
      <p className="text-[20px]">Get Support</p>
      <Button variant="outline" className="bg-blue-500 text-white hover:bg-gray-300 hover:text-blue-500 hover:bg-white font-bold border-2 border-blue-500 rounded-full">
        Submit Request
      </Button>
    </div>

    <div className="w-[327px] h-[343px] space-y-4  hover:bg-blue-900 hover:text-white content-center">
      <BsEnvelopeFill className="text-5xl mx-auto" />
      <p>googleyoung@gmail.com</p>
      <p>googleyoung@ple.com</p>
      <p className="text-[20px]">Get Support</p>
      <Button variant="outline" className="bg-blue-500 text-white hover:bg-gray-300 hover:text-blue-500 hover:bg-white font-bold border-2 border-blue-500 rounded-full">
        Submit Request
      </Button>
    </div>
  </div>

  <div className="h-auto w-full flex flex-col justify-center items-center text-center font-bold mt-12">
    <p className="text-xl">WE CAN&rsquo;T WAIT TO MEET YOU</p>
    <h1 className="text-[64px]">Let&rsquo;s Talk</h1>
    <Button variant="outline" className="bg-blue-500 text-white hover:bg-gray-300 hover:text-blue-500 hover:bg-white font-bold border-2 border-blue-500 rounded-none mt-6">
      Try it free now
    </Button>
  </div>
</div>

           </div>
    )
}