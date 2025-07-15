"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const stats = [
  {
    value: "3X",
    title: "Tool Consolidation",
    description: "One AI-native workspace replaces your Jira, Notion, Slack, and docs.",
    dark: false,
  },
  {
    value: "5X",
    title: "Faster Execution",
    description: "From ideas to sprint-ready tasks and code — all in minutes.",
    dark: true,
  },
  {
    value: "30%",
    title: "Lower Project Cost",
    description: "AI-driven execution reduces waste, delays, and team bloat.",
    dark: false,
  },
];

export default function DropTheChaos() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardWrapperRef = useRef<HTMLDivElement>(null); // <-- parent div of mapped cards

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // Text animation
      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // Animate the entire card wrapper (your suggestion)
      gsap.from(cardWrapperRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardWrapperRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center min-h-screen px-6 md:px-20"
    >
      <div ref={imageRef}>
        <Image
          src="/LandingPage/score.svg"
          alt="Krivisio logo"
          width={652}
          height={124}
        />
      </div>

      <div ref={textRef} className="text-center mt-10 max-w-6xl">
        <p className="text-black text-[24px] font-semibold">
          Messy whiteboards. Dozens of tools. Manual follow-ups. That’s not execution — that’s chaos.
          Krivisio replaces it with AI that plans, assigns, and executes — from day zero.
        </p>
      </div>

      {/* ✅ Parent of all cards */}
      <div
        ref={cardWrapperRef}
        className="flex flex-wrap justify-center gap-10 py-10 mt-10"
      >
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-[16px] p-[32px] w-[280px] text-center shadow-xl border transition-all mx-5 ${
              item.dark
                ? "bg-[#161C28] text-white border-orange-500"
                : "bg-white text-black border border-orange-100"
            }`}
          >
            <div className="text-[56px] font-semibold text-orange-500">{item.value}</div>
            <div className="text-lg font-semibold mt-2">{item.title}</div>
            <p className={`mt-2 text-sm ${item.dark ? "text-gray-300" : "text-gray-600"}`}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
