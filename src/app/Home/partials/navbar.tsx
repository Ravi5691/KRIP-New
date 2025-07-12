'use client';
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-full h-[80px] flex items-center justify-between">
      {/* Left: Logo */}
      <div className="text-2xl font-bold text-black">
        {/* Replace with image if needed */}
        <span>KRIP.com</span>
      </div>

      {/* Center: Nav Links */}
      <div className="flex place-items-center gap-10 text-sm font-medium text-black">
        <Link
          href="#"
          className="bg-[#F9A62980]  text-[#1E1E1E] px-[16px] py-2 rounded-sm font-bold"
        >
          Home
        </Link>
        <Link href="#" className="hover:text-black/80">
          Documentation
        </Link>
        <Link href="#" className="hover:text-black/80">
          Pricing
        </Link>
      </div>

      {/* Right: Login Button */}
      <div>
        <button className="bg-[#FB5711] text-white text-sm font-semibold px-5 py-2 rounded-sm hover:bg-orange-600 transition">
          Login
        </button>
      </div>
    </div>
  );
}
