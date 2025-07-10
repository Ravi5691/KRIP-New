"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface ProjectData {
    id: number
    title: string
    description: string
    image: string
}

const projectData: ProjectData[] = [
    {
        id: 1,
        title: "Market Research & Analysis",
        description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 2,
        title: "Strategic Planning",
        description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 3,
        title: "Design & Development",
        description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 4,
        title: "Testing & Quality Assurance",
        description:
            "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 5,
        title: "Implementation & Deployment",
        description:
            "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 6,
        title: "Monitoring & Optimization",
        description:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
        image: "/placeholder.svg?height=400&width=600",
    },
]

export default function ProjectAnalysis() {
    const [activeProject, setActiveProject] = useState<number>(1)

    const currentProject = projectData.find((project) => project.id === activeProject) || projectData[0]

    return (
        <div className=" mx-auto px-20 min-h-screen flex flex-col justify-center items-center">

            <Image
                src="/LandingPage/ourService.svg" // Path to your logo image
                alt="Krivisio logo"
                width={552}
                height={124}
            />

            <div className="grid lg:grid-cols-2 gap-8 items-start mt-20 bg-white p-10 rounded-sm">
                {/* Left Side - Title and Project Cards */}
                <div className="space-y-6 px-5 ">
                    <div>
                        <h2 className="text-2xl text-center md:text-3xl font-bold text-gray-900 leading-tight">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        </h2>
                    </div>

                    {/* Project Analysis Grid */}
                    <div className="grid grid-cols-2 gap-5">
                        {projectData.map((project) => (
                            <Card
                                key={project.id}
                                className={`cursor-pointer transition-all duration-300 hover:shadow-md ${activeProject === project.id
                                        ? "bg-gradient-to-b from-[#F9A629] to-[#f9a6298d] text-white shadow-lg"
                                        : "bg-white border-gray-200 hover:border-gray-300"
                                    }`}
                                onClick={() => setActiveProject(project.id)}
                            >
                                <CardContent className="p-6 text-center">
                                    <div
                                        className={`text-2xl font-bold mb-2 ${activeProject === project.id ? "text-white" : "text-gray-400"
                                            }`}
                                    >
                                        {project.id.toString().padStart(2, "0")}
                                    </div>
                                    <div
                                        className={`text-sm font-medium ${activeProject === project.id ? "text-white" : "text-gray-700"}`}
                                    >
                                        Project Analysis
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Right Side - Image and Description */}
                <div className="space-y-6">
                    {/* Image Container */}
                    <div className="bg-orange-100 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                        <Image
                            src={currentProject.image || "/placeholder.svg"}
                            alt={currentProject.title}
                            width={600}
                            height={400}
                            className="rounded-lg object-cover max-w-full h-auto"
                        />
                    </div>

                    {/* Description */}
                    <div className="bg-orange-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{currentProject.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{currentProject.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
