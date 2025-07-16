"use client";

import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail, X } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0E121A] text-white px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-12">

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
             <Mail/>
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between gap-6 max-w-md">
          <h2 className="text-2xl md:text-[28px] font-bold leading-snug text-white text-right">
            Ready to stop planning and <br /> start executing?
          </h2>
          <div className="flex gap-4 justify-end">
            <Button className="bg-[#FF5A1F] hover:bg-[#e74e16] text-white px-6">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-white  text-white px-6 bg-transparent"
            >
              Get Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-700" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
        <p>© 2025 krivisio. All rights reserved.</p>
        <div className="flex gap-6">
          <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
          <X className="w-5 h-5 hover:text-white cursor-pointer" />
          <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
