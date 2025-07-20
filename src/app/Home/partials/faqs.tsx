"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const faqData = [
  {
    question: "What exactly does Krivisio do?",
    answer:
      "Krivisio is an AI-native execution platform that turns messy project briefs into sprint-ready tasks, assigns them intelligently, and even scaffolds code — all in one system.",
  },
  {
    question: "How is it different from tools like Jira or Notion?",
    answer:
      "Krivisio isn’t just a tool — it’s the layer before the tools. It doesn’t wait for tasks to be created — it creates them. Planning, assigning, and structuring execution is fully automated with AI. No copy-pasting between tools needed.",
  },
  {
    question: "Who is Krivisio built for?",
    answer:
      "For tech teams — product managers, developers, and startup teams who want faster planning, smarter delegation, and less tool fatigue. Agencies and remote-first teams love it too.",
  },
  {
    question: "Can it generate code?",
    answer:
      "Yes — Krivisio can generate base code scaffolds for engineering tasks using AI, based on the context of the project brief and task. It’s not a code finisher — but it’s a massive head start.",
  },
  {
    question: "How does task assignment work?",
    answer:
      "Krivisio’s AI considers each team member’s role, workload, and skill graph to automatically assign work — reducing bottlenecks and decision fatigue.",
  },
  // {
  //   question: "What tools does Krivisio replace?",
  //   answer:
  //     "Jira, Notion, Slack (for task coordination), whiteboards, and task assignment spreadsheets. It's designed to consolidate 4–5 tools into one intelligent workspace.",
  // },
  // {
  //   question: "Is my data secure?",
  //   answer:
  //     "Absolutely. We follow enterprise-grade security protocols and never train our models on your proprietary data.",
  // },
  // {
  //   question: "When is it launching?",
  //   answer:
  //     "We’re currently onboarding early teams for private beta. Join the waitlist to get early access before the public launch.",
  // },
  // {
  //   question: "What does Krivisio cost?",
  //   answer:
  //     "Krivisio varies with per user, simply put pay as you need — all features included. We’re also offering early access discounts for waitlist users.",
  // },
  // {
  //   question: "What’s the onboarding process like?",
  //   answer:
  //     "Super simple. Make your team, Make your project brief, and Krivisio will auto-generate your task plan, assign owners, and kick off execution. No complex setup. No long training sessions. Just plug in and start working.",
  // },
];

export default function FAQs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
        },
      });

      gsap.from(leftRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(rightRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col place-items-center justify-center min-h-screen px-6 md:px-20 pb-10"
    >
      {/* Image */}
      <div ref={imageRef}>
        <Image
          src="/LandingPage/faq.svg"
          alt="Krivisio logo"
          width={261}
          height={124}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-12 w-full mt-16">
        {/* Left: Question form */}
        <div ref={leftRef} className="flex flex-col">
          <span className="text-[28px] text-black">Got Question?</span>
          <div className="shadow-[0_0_10px_rgba(249,166,41,0.2)] flex w-4/5 mt-5 py-2 rounded-sm px-4 gap-5 bg-white">
            <input
              type="text"
              placeholder="Send your question"
              className="w-full text-sm outline-none bg-transparent"
            />
            <button className="bg-[#FB5711] text-white rounded-sm p-2">
              <ArrowRight className="size-[15px]" />
            </button>
          </div>
        </div>

        {/* Right: Accordion */}
        <div ref={rightRef}>
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-0"
          >
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-balance">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
