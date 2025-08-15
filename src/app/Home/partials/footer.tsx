"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0E121A] text-white px-6 md:px-20 py-12">
      <div className="flex flex-col-reverse md:flex-row justify-between gap-12">

        {/* Left Column */}
        <div className="flex flex-col gap-6 max-w-md">
          <Image src="/svg/logo.svg" alt="Logo" width={56} height={56} />
          <p className="text-white font-medium text-base leading-relaxed">
            Get early AI drops, execution hacks, and Krivisio updates — no spam.
          </p>

          <div className="relative">
            <input
              type="text"
              placeholder="Send your question"
              className="bg-[#1F232B] text-white placeholder:text-gray-400 px-5 py-3 pr-12 rounded-md w-full outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FB5711] hover:bg-[#e74e16] text-white p-1 rounded-[4px]">
              <Mail />
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between gap-6 lg:max-w-md lg:border-none lg:pb-0 pb-8 border-b border-gray-700">
          <h2 className="text-[16px] md:text-[28px] lg:font-bold font-semibold leading-snug text-white lg:text-right">
            Ready to stop planning and <br className="lg:block hidden" /> start executing?
          </h2>
          <div className="flex gap-4 ">
            <Button className="bg-[#FF5A1F] hover:bg-[#e74e16] text-white px-6 rounded-[4px]">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-white  text-white px-6 bg-transparent rounded-[4px]"
            >
              Get Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t lg:block hidden border-gray-700" />

      {/* Bottom Bar */}
      <div className="flex flex-row justify-between items-center lg:text-sm text-[10px] text-gray-400 gap-4 lg:mt-0 mt-20">
        <p>© 2025 krivisio. All rights reserved.</p>
        <div className="flex lg:gap-6 gap-3">
          <FaInstagram className="w-5 h-5 hover:text-white cursor-pointer" />
          <BsTwitterX className="w-5 h-5 hover:text-white cursor-pointer" />
          <FaLinkedin className="w-5 h-5 hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
