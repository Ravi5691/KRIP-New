'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // burger and close icon

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initial load animation for navbar
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

  // Mobile menu animation
  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
        pointerEvents: 'auto',
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        pointerEvents: 'none',
      });
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <div className=''>
      <div
        ref={navbarRef}
        className="fixed top-0 w-full bg-[#fcfbfa5b] backdrop-blur-2xl 
             flex flex-col z-50 lg:rounded-none"
      >

        {/* Top bar */}
        <div className="w-full lg:h-[80px] h-[60px] flex items-center justify-between px-5 md:px-20">
          {/* Left: Logo */}
          <div className="text-2xl  font-bold text-black">
            <Link href="/">
              <Image
                src="/svg/kripsioLogoDark.svg"
                alt="Krivisio logo"
                width={142}
                height={35}
                className='lg:w-[142px] lg:h-[35px] w-[89px] h-[22px]'
              />
            </Link>
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden md:flex place-items-center gap-10 text-sm font-medium text-black">
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

          {/* Right: Desktop Button */}
          <div className="hidden md:block">
            <button className="bg-[#FB5711] text-white text-sm font-semibold px-5 py-2 rounded-sm hover:bg-orange-600 transition">
              Follow Our Journey
            </button>
          </div>

          {/* Right: Mobile Burger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-sm hover:bg-black/5 transition"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden h-0 opacity-0 px-5"
        >
          <div className="flex flex-col gap-4 text-center py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 rounded-sm text-sm text-white font-semibold ${pathname === link.href
                  ? 'bg-[#F9A62980]'
                  : 'bg-[#F9A62980]'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <button className="bg-[#FB5711] text-white text-sm font-semibold px-5 py-2 rounded-sm hover:bg-orange-600 transition">
              Follow Our Journey
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
