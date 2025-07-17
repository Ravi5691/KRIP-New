"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projectData: ProjectData[] = [
  {
    id: 1,
    title: " AI Project Strategist",
    description:
      "Drop a project brief, and our AI breaks it into structured milestones, timelines, and sprint-ready workstreams — instantly. No PM guesswork, just execution clarity.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: " AI Task Manager",
    description:
      "Smart task generation, auto-prioritization, and owner assignment based on team capacity, skillsets, and deadlines. Get the right work to the right person — every time.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: " Base Code Generation",
    description:
      "For engineering projects, Krivisio auto-generates base code structures and scaffolds from your functional briefs or tickets — so devs can skip boilerplate and start solving.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: " Code Compliance Assistant",
    description:
      "AI that reviews code for security, compliance, and internal standards — and flags issues proactively. Built-in sanity checks for scale, privacy, and peace of mind.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: " AI MoM (Minutes of Meeting)",
    description:
      "Upload a call, recording, or raw meeting notes — and get structured summaries, action items, and tagged owners. MoMs that actually move work forward.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: " AI Talent Matcher",
    description:
      "Krivisio matches tasks to available team members, freelancers, or external talent based on skill graphs, availability, and past performance. Like an AI-powered ops manager.",
    image: "/placeholder.svg?height=400&width=600",
  },
];


export default function ProjectAnalysis() {
  const [activeProject, setActiveProject] = useState<number>(1);

  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLImageElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const currentProject =
    projectData.find((project) => project.id === activeProject) || projectData[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate top SVG
      gsap.from(svgRef.current, {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // Animate main content block (left + right)
      gsap.from(mainContentRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mx-auto px-20 min-h-screen flex flex-col justify-center items-center mt-35 mb-30"
    >
      {/* Top SVG */}
      <Image
        ref={svgRef}
        src="/LandingPage/ourService.svg"
        alt="Krivisio logo"
        width={552}
        height={124}
      />

      {/* Main Content Section (left + right) */}
      <div
        ref={mainContentRef}
        className="flex gap-10 items-start mt-20 h-[711px] bg-white p-10 rounded-sm"
      >
        {/* Left Side */}
        <div className="px-5 py-5 gap-5 flex flex-col justify-between h-full">
          <h2 className="text-xl text-left md:text-2xl text-black">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </h2>

          <div className="grid grid-cols-2 gap-8">
            {projectData.map((project) => (
              <Card
                key={project.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                  activeProject === project.id
                    ? "bg-gradient-to-b from-[#F9A629] to-[#f9a6298d] text-white shadow-lg"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setActiveProject(project.id)}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`text-2xl font-bold mb-2 ${
                      activeProject === project.id
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                  >
                    {project.id.toString().padStart(2, "0")}
                  </div>
                  <div
                    className={`text-[12px] font-medium ${
                      activeProject === project.id
                        ? "text-white"
                        : "text-gray-700"
                    }`}
                  >
                    {project.title}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-3">
          <div className="bg-[#F9A62933] flex flex-col gap-10 h-[639px] py-[21px] w-[733px] rounded-lg items-center">
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              width={687}
              height={440}
              className="rounded-lg bg-white object-cover max-w-full h-auto"
            />
            <div className="rounded-lg px-6 flex flex-col w-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {currentProject.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {currentProject.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
