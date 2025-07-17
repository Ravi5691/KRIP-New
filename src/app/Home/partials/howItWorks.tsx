"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const inter = Inter({ weight: "400", subsets: ["latin"] });

const steps = [
  {
    id: 1,
    title: "User Signup & Role Assignment",
    content: "Content for User Signup & Role Assignment.",
  },
  {
    id: 2,
    title: "Project Creation & Spec Generation",
    content: "Content for Project Creation & Spec Generation.",
  },
  {
    id: 3,
    title: "Developer Task Intake & ML Agent Trigger",
    content: "Content for Developer Task Intake & ML Agent Trigger.",
  },
  {
    id: 4,
    title: "Compliance + Status Sync",
    content: "Content for Compliance + Status Sync.",
  },
  {
    id: 5,
    title: "Meetings & MOM Generation (Phase 3)",
    content: "Content for Meetings & MOM Generation (Phase 3).",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });

      gsap.from(stepsRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 85%",
        },
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#111620] min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20"
    >
      <div ref={imageRef}>
        <Image
          src="/LandingPage/howitworks.svg"
          alt="Krivisio logo"
          width={567}
          height={124}
        />
      </div>

      <h3
        ref={textRef}
        className={`${inter.className} text-center text-[16px] text-white mt-10`}
      >
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet
        consectetur adipiscing elit quisque faucibus.
      </h3>

      <div className="flex flex-col gap-6 p-6 mt-10 w-full">
        {/* Step Cards */}
        <div
          ref={stepsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full"
        >
          {steps.map((step) => (
            <Card
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={cn(
                "w-full cursor-pointer rounded-sm transition-all",
                activeStep === step.id
                  ? "bg-gradient-to-br from-[#F6C65C] to-[#F5955B] text-black"
                  : "bg-white text-black"
              )}
            >
              <CardContent className="p-4 text-center font-medium">
                <div className="text-xl font-bold">0{step.id}</div>
                <div className="text-sm mt-2">{step.title}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Area */}
        <div
          ref={contentRef}
          className=" h-[532px] bg-white/8 p-[8px] rounded-lg w-full"
        >
          <div className="bg-white dot-background h-full text-black rounded-md p-6">
            <p>{steps.find((s) => s.id === activeStep)?.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
