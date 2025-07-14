'use client';

import Image from 'next/image';
import { Sacramento } from 'next/font/google';
import { Inter } from 'next/font/google';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const sacramento = Sacramento({ weight: '400', subsets: ['latin'] });
const inter = Inter({ weight: '400', subsets: ['latin'] });

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%', // when section enters viewport
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // clean up on unmount
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col place-items-center justify-center min-h-screen px-20 py-10"
    >
      <Image
        ref={imageRef}
        src="/LandingPage/aboutus.svg"
        alt="Krivisio logo"
        width={418}
        height={124}
      />
      <div
        ref={textRef}
        className={`text-center ${inter.className} text-[56px] mt-25`}
      >
        Krip is an{' '}
        <span className={`${sacramento.className} text-[#FB5711]`}>
          AI-powered execution engine
        </span>{' '}
        that helps tech teams, freelancers, and agencies go from project input
        (brief, SRS, client call, or task dump) to execution (roadmap, task
        assignment, and code delivery) — automatically.
      </div>
    </div>
  );
}
