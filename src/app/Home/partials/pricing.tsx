"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
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

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(svgRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: svgRef.current,
                    start: "top 80%",
                },
            })

            gsap.from([leftCardRef.current, rightCardRef.current], {
                opacity: 0,
                y: 50,
                duration: 1.2,
                delay: 0.3,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            })

            const addHoverEffect = (el: HTMLElement | null) => {
                if (!el) return
                el.addEventListener("mouseenter", () => {
                    gsap.to(el, { scale: 1.02, duration: 0.3, ease: "power2.out" })
                })
                el.addEventListener("mouseleave", () => {
                    gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" })
                })
            }

            addHoverEffect(leftCardRef.current)
            addHoverEffect(rightCardRef.current)
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={containerRef}
            className="flex flex-col place-items-center justify-center min-h-screen px-4 md:px-20 mt-60 mb-45"
        >
            <div ref={svgRef}>
                <Image src="/LandingPage/vs.svg" alt="Krivisio logo" width={794} height={124} className="mb-16" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl place-items-stretch mx-auto mt-10">
                {/* Old School Stack Card */}
                <div className="h-full">
                    <Card
                        ref={leftCardRef}
                        className="h-full bg-white border-[0.5px] border-[#00000033] p-8 flex flex-col justify-between"
                    >
                        <div className="mb-8">
                            <div className="flex justify-center mb-6">
                                <Badge variant="secondary" className=" bg-transparent text-gray-700 border-[0.5px] border-[#0000001A] text-[24px] px-[64px] py-[12px] rounded-full">
                                    The Old School Stack For Teams
                                </Badge>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Still Building Projects Like It&apos;s 2015?
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Traditional tools trap teams in a loop - planning on Notion, assigning in Jira, coordinating on Slack, and
                                losing clarity. You&apos;re operating plainly. No effort for 1x output.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {oldSchoolProblems.map((problem, index) => (
                                <div key={index} className="flex items-start gap-3 px-5">
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

                        <div className="mt-8 p-4 bg-red-50 border-l-4 border-red-200 rounded-r-lg">
                            <p className="text-sm text-gray-700 italic mb-2">
                                &quot;We&apos;d plan in Notion, assign in Jira, chat on Slack, then lose context while using claude and cursor — and
                                still wonder why nothing was moving.&quot;
                            </p>
                            <p className="text-xs text-gray-500">— Frustrated Product Manager, Early-Stage SaaS</p>
                        </div>
                    </Card>
                </div>

                {/* Krivisio Card */}
                <div className="h-full">
                    <Card
                        ref={rightCardRef}
                        className="h-full bg-gray-900 border-2 border-gray-700 p-8 text-white flex flex-col justify-between"
                    >
                        <div className="mb-8">
                            <div className="flex justify-center mb-6">
                                <Badge className="bg-[#FB5711] text-white text-[24px] px-[64px] py-[12px] rounded-full">
                                    KRIVISIO
                                </Badge>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">100x Execution Transformation</h2>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Krivisio is an AI-first execution engine – turning messy project inputs into structured action.
                                From planning to ownership to code scaffolds — it&apos;s all automatic.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {krivisioFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3 px-5">
                                    <div className="flex-shrink-0 mt-1">
                                        <Check className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-green-400 mb-1">{feature.title}</h3>
                                        <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 p-4 bg-green-900/30 border-l-4 border-green-400 rounded-r-lg">
                            <p className="text-sm text-gray-200 italic mb-2">
                                &quot;We dropped a rough brief, and Krivisio turned it into sprint tasks with owners automatically signed in 5
                                minutes. We&apos;ve never shipped faster.&quot;
                            </p>
                            <p className="text-xs text-gray-400">— Founding Engineer, Series A Startup</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
