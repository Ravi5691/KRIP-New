"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Outfit } from "next/font/google";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const outfit = Outfit({ subsets: ["latin"], weight: "700" });
gsap.registerPlugin(ScrollTrigger);

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  // Timer countdown logic
  useEffect(() => {
    const targetDate = new Date("2025-08-15T00:00:00Z").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Animation on scroll for entire section
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center overflow-hidden mt-20 mb-30"
    >
      {/* Coming Soon Background Text */}
      <div className="absolute top-7 inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <div className="text-[12rem] lg:text-[190px] font-bold text-black select-none whitespace-nowrap">
          COMING <span className="text-[#FB5711]">SOON</span>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="relative z-10 text-center">
        {/* Days, Hours, Minutes */}
        <div className="flex items-center justify-center gap-4 md:gap-5 mb-5">
          <div className="text-center">
            <div className="text-4xl md:text-6xl lg:text-[47px] font-bold text-black tabular-nums">
              {timeLeft.days.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-[20px] text-black mt-2">Days</div>
          </div>

          <div className="text-4xl md:text-6xl lg:text-[47px] font-bold text-black self-start mt-2">:</div>

          <div className="text-center">
            <div className="text-4xl md:text-6xl lg:text-[47px] font-bold text-black tabular-nums">
              {timeLeft.hours.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-[20px] text-black mt-2">Hour</div>
          </div>

          <div className="text-4xl md:text-6xl lg:text-[47px] font-bold text-black self-start mt-2">:</div>

          <div className="text-center">
            <div className="text-4xl md:text-6xl lg:text-[47px] font-bold text-black tabular-nums">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-sm md:text-[20px] text-black mt-2">Min</div>
          </div>
        </div>

        {/* Seconds - Flip-style */}
        <Card className="bg-transparent border-0 shadow-none mx-auto w-fit">
          <div className="flex items-center gap-2">
            {[...timeLeft.seconds.toString().padStart(2, "0")].map((digit, index) => (
              <div
                key={index}
                className={`${outfit.className} w-[90px] h-[120px] md:w-[125px] md:h-[180px] rounded-[8px] bg-[#161C28] text-[#FB5711] font-bold text-[64px] md:text-[150px] flex items-center justify-center relative`}
              >
                {digit}
              </div>
            ))}
          </div>
          <div className="text-center text-sm md:text-[20px] font-medium tracking-[0.4em]">
            S E C O N D S
          </div>
        </Card>
      </div>
    </div>
  );
}
