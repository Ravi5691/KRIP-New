"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import DropTheChaos from "../Home/partials/droptheChaos"
import SmoothScrollWrapper from "../(components)/smoothScroll"


export default function Pricing() {
    const sectionRef = useRef(null)

    const stackData = [
        { icon: "/icons/1.svg", name: "Task Management", price: "$77/user/month" },
        { icon: "/icons/2.svg", name: "Project Planning", price: "$80/user/month" },
        { icon: "/icons/3.svg", name: "Team Communication", price: "$75/user/month" },
        { icon: "/icons/4.svg", name: "Planning + Tracking", price: "$100/user/month" },
        { icon: "/icons/5.svg", name: "Meeting Summaries", price: "$50/user/month" },
        { icon: "/icons/6.svg", name: "PM Assistant", price: "$150/user/month" },
    ]

    useEffect(() => {
        if (sectionRef.current) {
            gsap.fromTo(
                sectionRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            )
        }
    }, [])

    return (
        <div>
            <SmoothScrollWrapper />
            <section
                ref={sectionRef}
                className="w-full px-6 md:px-20 py-30 min-h-screen bg-[#FBFAF9]"
            >
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="flex justify-center items-center">
                        <Image
                            src="/LandingPage/pricing.svg"
                            alt="Krivisio logo"
                            width={327}
                            height={124}
                        />
                    </div>
                    <p className="text-black mx-auto text-[20px] font-semibold text-center mt-10">
                        Smarter execution starts here — faster, leaner, all-in-one. Replace 5 tools. Cut costs by 3×. <br/> Move from brief to execution — all in one intelligent workspace.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="max-w-7xl mx-auto px-10 mb-45">
                    <div className="grid md:grid-cols-2">
                        {/* Traditional Stack */}
                        <div className="rounded-lg rounded-r-none border overflow-hidden my-8 px-10">
                            <h3 className="text-2xl font-bold text-center mt-5 text-gray-900">Traditional Stack</h3>
                            <Table className="mt-10 overflow-x-hidden">
                                <TableBody>
                                    {stackData.map((item) => (
                                        <TableRow key={item.name}>
                                            <TableCell className="flex items-center pl-5">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.name}
                                                    width={24}
                                                    height={24}
                                                    className="rounded"
                                                />
                                            </TableCell>
                                            <TableCell className="py-4 pl-10">
                                                <span className="text-gray-900 font-medium">{item.name}</span>
                                            </TableCell>
                                            <TableCell className="text-left pl-15 py-4 font-semibold text-gray-900">
                                                {item.price}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell className="pl-8 pt-6 font-bold text-sm border-t">Total Estimated Price</TableCell>
                                        <TableCell className="text-right pr-6 pt-6 text-[18px] font-bold text-[#FF3131] border-t">
                                            $460 - $500/user/mon
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>

                        {/* Krivisio Offer */}
                        <Card className="bg-[#161C28] text-white">
                            <CardContent className="p-8 h-full flex flex-col">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold mb-2">
                                        <span className="text-[#FB5711]">Krivisio</span> — All-in-One AI Execution Platform
                                    </h3>
                                    <div className="mt-15">
                                        <p className="text-sm text-gray-300">Our Krivisio Price</p>
                                        <div className="text-[40px] font-bold text-[#FB5711]">
                                            $150<span className="text-base text-white font-normal">/team/month</span>
                                        </div>
                                        <p className="text-[10px] text-gray-300">Cut costs by 3x. Move 5× faster.</p>
                                    </div>
                                </div>

                                <div className="flex-1 px-5 mt-5">
                                    <h4 className="font-semibold mb-4 text-center">Includes</h4>
                                    <div className="grid grid-cols-2 gap-3 gap-x-10 text-sm">
                                        {[
                                            "Planning + Tasking",
                                            "Sprint + Timeline creation",
                                            "AI-based ownership",
                                            "Docs, notes, MoMs",
                                            "AI-powered base code generation",
                                            "Internal compliance & more",
                                        ].map((text, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                                <span>{text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <Button className="bg-[#FB5711] hover:bg-orange-600 text-white px-6 py-4 font-semibold rounded-sm">
                                        Start your trial
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <DropTheChaos />
            </section>
        </div>

    )
}
