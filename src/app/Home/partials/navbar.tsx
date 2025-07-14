'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { 
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
      }
    );
  }, []);

  return (
    <div
      ref={navbarRef}
      className="fixed top-0 w-full h-[80px] bg-[#FCFBFA80] backdrop-blur-xl flex items-center justify-between z-50 px-20"
    >
      <div className="w-full h-[80px] flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-black">
          <span>KRIP.com</span>
        </div>

        {/* Center: Nav Links */}
        <div className="flex place-items-center gap-10 text-sm font-medium text-black">
          <Link
            href="#"
            className="bg-[#F9A62980] text-[#1E1E1E] px-[16px] py-2 rounded-sm font-bold"
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
    </div>
  );
}
