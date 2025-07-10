// components/Footer.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, X } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111620] text-white px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo + Footer Links */}
        <div className="space-y-6">
          {/* Logo (replace with your Image or SVG) */}
          <div>
            <Image src="/logo.svg" alt="Logo" width={40} height={40} />
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-300">
            <div className="space-y-2">
              <p className="hover:text-white cursor-pointer">Footer Link</p>
              <p className="hover:text-white cursor-pointer">Footer Link</p>
            </div>
            <div className="space-y-2">
              <p className="hover:text-white cursor-pointer">Footer Link</p>
              <p className="hover:text-white cursor-pointer">Footer Link</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="md:col-span-2 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-6 md:mb-0 max-w-md text-lg font-medium">
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-[#FF5A1F] hover:bg-[#e74e16] text-white">
              Get Started
            </Button>
            <Button variant="outline" className="border-white text-white">
              Get Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 krivisio. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
          <X className="w-5 h-5 hover:text-white cursor-pointer" />
          <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
