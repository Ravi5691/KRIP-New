"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const oldSchoolProblems = [
  {
    title: "Scattered Planning",
    description:
      "Teams brainstorm in docs, whiteboards, or ChatGPT — then manually transfer that to tools like Jira or Trello.",
  },
  {
    title: "Manual Task Breakdown",
    description: "Project managers spend hours converting briefs into tasks, owners, and timelines.",
  },
  {
    title: "No Context For AI",
    description:
      "Generic AI tools don&apos;t remember what was planned, why it was planned, or how it connects across the stack. You start from scratch every time.",
  },
]

const krivisioFeatures = [
  {
    title: "One-Click Brief To Sprint",
    description: "Drop a project brief and get sprint-ready tasks, assignments, and timelines — instantly.",
  },
  {
    title: "AI-Powered Task Ownership",
    description: "Tasks are auto-assigned based on skill, load, and role — no spreadsheets, no back-and-forth.",
  },
  {
    title: "Context-Aware LLMs",
    description:
      "Krivisio remembers your project&apos;s history, goals, and team structure — powering smarter, more relevant tasking and planning with every new input.",
  },
]

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftCardRef = useRef<HTMLDivElement>(null)
  const rightCardRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<HTMLDivElement>(null)

  const [activeTab, setActiveTab] = useState<"others" | "krivisio">("krivisio")
  const highlightRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      })

      tl.from(svgRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        [leftCardRef.current, rightCardRef.current],
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.3"
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (highlightRef.current) {
      gsap.to(highlightRef.current, {
        x: activeTab === "krivisio" ? "0%" : "100%",
        duration: 0.4,
        ease: "power2.out",
      })
    }
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      )
    }
  }, [activeTab])

  const renderOthersCard = () => (
    <Card
      ref={leftCardRef}
      className="h-full bg-white border-[0.5px] border-[#00000033] lg:p-8 p-3 flex flex-col justify-between"
    >
      <div className="lg:mb-8 mb-2">
        <div className="flex justify-center mb-6">
          <Badge
            variant="secondary"
            className=" bg-transparent lg:block hidden text-gray-700 border-[0.5px] border-[#0000001A] text-[20px] px-[40px] py-[10px] rounded-full"
          >
            The Old School Stack For Teams
          </Badge>
        </div>
        <h2 className=" text-[18px] lg:md:text-3xl font-bold text-gray-900 mb-4">
          Still Building Projects Like It&apos;s 2015?
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Traditional tools trap teams in a loop - planning on Notion, assigning in Jira, coordinating on Slack, and
          losing clarity. You&apos;re operating plainly. No effort for 1x output.
        </p>
      </div>

      <div className="space-y-6">
        {oldSchoolProblems.map((problem, index) => (
          <div key={index} className="flex items-start gap-3 lg:px-5 px-2">
            <div className="flex-shrink-0 mt-1">
              <X className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <h3 className="font-semibold text-red-500 mb-1">{problem.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:mt-8 mt-2 p-4 bg-red-50 border-l-4 border-red-200 rounded-r-lg">
        <p className="lg:text-sm text-[12px] text-gray-700 italic mb-2">
          &quot;We&apos;d plan in Notion, assign in Jira, chat on Slack, then lose context while using claude and cursor — and
          still wonder why nothing was moving.&quot;
        </p>
        <p className="text-xs text-gray-500">— Frustrated Product Manager, Early-Stage SaaS</p>
      </div>
    </Card>
  )

  const renderKrivisioCard = () => (
    <Card
      ref={rightCardRef}
      className="h-full bg-gray-900 border-2 border-gray-700 lg:p-8 p-3 text-white flex flex-col justify-between lg:scale-102"
    >
      <div className="lg:mb-8 mb-2">
        <div className="lg:flex hidden justify-center mb-6">
          <Badge className="bg-[#FB5711] text-white text-[20px] px-[40px] py-[10px] rounded-full">KRIVISIO</Badge>
        </div>
        <h2 className="text-[18px] md:text-3xl font-bold mb-4">100x Execution Transformation</h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Krivisio is an AI-first execution engine – turning messy project inputs into structured action. From planning
          to ownership to code scaffolds — it&apos;s all automatic.
        </p>
      </div>

      <div className="space-y-6">
        {krivisioFeatures.map((feature, index) => (
          <div key={index} className="flex items-start gap-3 lg:px-5 px-2">
            <div className="flex-shrink-0 mt-1">
              <Check className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold lg:text-base text-[14px] text-green-400 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:mt-8 mt-2 p-4 bg-green-900/30 border-l-4 border-green-400 rounded-r-lg">
        <p className="lg:text-sm text-[12px] text-gray-200 italic mb-2">
          &quot;We dropped a rough brief, and Krivisio turned it into sprint tasks with owners automatically signed in 5
          minutes. We&apos;ve never shipped faster.&quot;
        </p>
        <p className="text-xs text-gray-400">— Founding Engineer, Series A Startup</p>
      </div>
    </Card>
  )

  return (
    <div ref={containerRef} className="px-4 md:px-20 mt-30 lg:mt-60 lg:mb-40 mb-30">
      {/* Desktop View */}
      <div className="hidden lg:block">
        <div ref={svgRef} className="flex justify-center">
          <Image src="/LandingPage/vs.svg" alt="Krivisio logo" width={794} height={124} className="mb-16" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl place-items-stretch mx-auto mt-10">
          <div className="h-full">{renderOthersCard()}</div>
          <div className="h-full">{renderKrivisioCard()}</div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden w-full max-w-lg mx-auto">

        <div className="flex justify-center">
          <Image src="/LandingPage/vs.svg" alt="Krivisio logo" width={309} height={50} className="mb-10" />
        </div>

        <div className="relative flex w-full bg-[#7878801F] rounded-lg overflow-hidden p-[2px]">
          <div
            ref={highlightRef}
            className="absolute top-0 left-0 w-1/2 h-full bg-[#161C28] rounded-lg border-4"
            style={{ zIndex: 0 }}
          ></div>

          <button
            className={`flex-1 py-3 text-[13px] font-semibold relative z-10 ${activeTab === "krivisio" ? "text-[#FB5711]" : "text-gray-700"}`}
            onClick={() => setActiveTab("krivisio")}
          >
            Krivisio
          </button>
          <button
            className={`flex-1 py-3 text-[13px] font-semibold relative z-10 ${activeTab === "others" ? "text-white" : "text-gray-700"}`}
            onClick={() => setActiveTab("others")}
          >
            Others
          </button>
        </div>

        <div ref={contentRef} className="mt-6">
          {activeTab === "krivisio" ? renderKrivisioCard() : renderOthersCard()}
        </div>
      </div>
    </div>
  )
}
