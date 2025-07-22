'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import Image from 'next/image';

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <div
      ref={navbarRef}
      className="fixed top-0 w-full h-[80px] bg-[#fcfbfa9d] backdrop-blur-xl flex items-center justify-between z-50 px-20"
    >
      <div className="w-full h-[80px] flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-black">
          <Link href="/">
            <Image
              src="/svg/kripsioLogoDark.svg"
              alt="Krivisio logo"
              width={142}
              height={35}
            />
          </Link>

        </div>

        {/* Center: Nav Links */}
        <div className="flex place-items-center gap-10 text-sm font-medium text-black">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-[16px] py-2 rounded-sm font-bold ${pathname === link.href
                  ? 'bg-[#F9A62980] text-[#1E1E1E]'
                  : 'hover:text-black/80'
                }`}
            >
              {link.name}
            </Link>
          ))}
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
