'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Intro() {
  const ellipseRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1, delay: 0.1 } });

    tl.fromTo(
      ellipseRef.current,
      { opacity: 0, y: -50, x: 100 },
      { opacity: 1, y: 0, x: 0 }
    )
      .fromTo(
        imageRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0 },
        '-=0.5' // overlaps slightly with previous
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0 },
        '-=0.4'
      );
  }, []);

  return (
    <div className="lg:min-h-screen relative lg:px-20 px-5 lg:py-40 py-30">
      {/* Dotted background */}
      <div className="absolute dot-background h-[80%] top-[20px] left-0 w-full"></div>

      {/* Ellipse */}
      <div
        ref={ellipseRef}
        className="absolute lg:block hidden top-[-60px] left-[1170px]"
      >
        <Image
          src="/LandingPage/Ellipse.svg"
          alt="Krivisio logo"
          width={500}
          height={500}
        />
      </div>

      {/* Main content */}
      <div>
        <div ref={imageRef} className='lg:block hidden'>
          <Image
            src="/LandingPage/intro.svg"
            alt="Krivisio logo"
            width={792}
            height={520}
          />
        </div>
        <div ref={imageRef} className='lg:hidden'>
          <Image
            src="/LandingPage/intro.svg"
            alt="Krivisio logo"
            width={326}
            height={237}
          />
        </div>

        {/* Text + buttons */}
        <div className="flex lg:justify-end lg:mt-10 mt-25">
          <div
            ref={textRef}
            className="flex flex-col gap-8 lg:w-[35%] lg:bg-[#fbfaf9d2] z-40"
          >
            <p className="lg:text-lg text-[14px] font-medium max-w-xl text-black">
              It eliminates the manual work behind planning, communication, and coordination, making execution 3x faster and 40% cheaper.
            </p>

            <div className="flex gap-8">
              <button className="bg-[#F4511E] text-[14px] lg:text-base text-white font-semibold py-2 px-6 rounded-sm hover:bg-[#d84315] transition">
                Get Started
              </button>
              <button className="border border-black bg-[#fbfaf9d2] text-[14px] lg:text-base text-black font-semibold py-2 px-6 rounded-sm hover:bg-black hover:text-white transition">
                Get Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
