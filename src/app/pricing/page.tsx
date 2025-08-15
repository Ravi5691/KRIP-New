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
import { Check } from "lucide-react"

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
                className="w-full px-5 md:px-20 lg:py-30 py-20 min-h-screen bg-[#FBFAF9]"
            >
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="flex justify-center items-center">
                        <Image
                            src="/LandingPage/pricing.svg"
                            alt="Krivisio logo"
                            width={327}
                            height={124}
                            className="w-[150px] h-[50px] lg:w-[327px] lg:h-[124px]"
                        />
                    </div>
                    <p className="text-black mx-auto lg:text-[20px] text-base font-semibold text-center mt-10">
                        Smarter execution starts here — faster, leaner, all-in-one. Replace 5 tools. Cut costs by 3×. <br className="lg:block hidden" /> Move from brief to execution — all in one intelligent workspace.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="lg:max-w-7xl mx-auto lg:px-10 lg:mb-45 mb-25">
                    <div className="grid md:grid-cols-2">
                        {/* Traditional Stack */}
                        <div className=" overflow-hidden lg:block hidden lg:my-8 lg:px-10 order-2 lg:order-1 lg:border-r">
                            <div className="flex justify-center mb-20 mt-10"><Image src="/svg/otherpricing.svg" alt="Krivisio logo" width={418} height={124} /></div>
                            <h3 className="lg:text-2xl text-[20px] font-bold text-center mt-5 text-gray-900">Traditional Stack</h3>
                            <Table className="lg:mt-10 mt-5 overflow-x-hidden  lg:text-base text-[10px]">
                                <TableBody>
                                    {stackData.map((item) => (
                                        <TableRow key={item.name}>
                                            <TableCell className="flex items-center pl-5">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.name}
                                                    width={24}
                                                    height={24}
                                                    className="rounded w-[10px] h-[10px] lg:w-[24px] lg:h-[24px]"
                                                />
                                            </TableCell>
                                            <TableCell className="lg:py-4 py-2 pl-10">
                                                <span className="text-gray-900 font-medium">{item.name}</span>
                                            </TableCell>
                                            <TableCell className="text-left lg:pl-15 pl-5 lg:py-4 py-2 font-semibold text-gray-900">
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
                        <Card className="bg-transparent text-white order-1 lg:order-2 border-none shadow-none">
                            <CardContent className="lg:p-8 lg:px-0 px-2 h-full flex flex-col">
                                <div className="flex justify-center lg:mb-20 mb-10">
                                    <Image src="/svg/krippricing.svg" alt="Krivisio logo" width={418} height={124} />
                                </div>
                                <div className="text-center mb-6 mt-5">
                                    <h3 className="lg:text-2xl text-[16px] font-bold mb-2 text-black">
                                        <span className="text-[#FB5711]">Krivisio</span> — All-in-One AI Execution Platform
                                    </h3>
                                    {/* <div className="mt-15">
                                        <p className="text-sm text-gray-300">Our Krivisio Price</p>
                                        <div className="text-[40px] font-bold text-[#FB5711]">
                                            $150<span className="text-base text-white font-normal">/team/month</span>
                                        </div>
                                        <p className="text-[10px] text-gray-300">Cut costs by 3x. Move 5× faster.</p>
                                    </div> */}
                                    <div className="space-y-3 text-sm text-black dark:text-white mt-6 lg:ml-10 ml-3">
                                        <div className="flex items-start gap-2">
                                            <Check className="text-green-600 w-4 h-4 mt-0.5" />
                                            <p>
                                                Cut costs by <span className="text-[#FB5711]">30%</span>.
                                            </p>
                                        </div>

                                        <div className="flex items-start gap-2">
                                            <Check className="text-green-600 w-4 h-4 mt-0.5" />
                                            <p>
                                                Achieve <span className="text-[#FB5711]">30%</span> more with the same team
                                            </p>
                                        </div>

                                        <div className="flex items-start gap-2">
                                            <Check className="text-green-600 w-4 h-4 mt-0.5" />
                                            <p>
                                                Reduce <span className="text-[#FB5711]">90%</span> of manual task management
                                            </p>
                                        </div>

                                        <div className="flex items-start gap-2">
                                            <Check className="text-green-600 w-4 h-4 mt-0.5" />
                                            <p>
                                                Deliver <span className="text-[#FB5711]">5x</span> faster than traditional workflows
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 px-5 lg:mt-6 mt-3 lg:ml-4 text-black">
                                    <h4 className="font-semibold mb-4 text-center">Includes</h4>
                                    <div className="grid grid-cols-2 lg:gap-3 gap-2 lg:gap-x-8 gap-x-5 text-sm">
                                        {[
                                            "Planning + Tasking",
                                            "Sprint + Timeline creation",
                                            "AI-based ownership",
                                            "Docs, notes, MoMs",
                                            "AI-powered base code generation",
                                            "Internal compliance & more",
                                        ].map((text, i) => (
                                            <div key={i} className="flex items-center lg:text-base text-[10px] lg:gap-2 gap-1">
                                                <div className="lg:w-1.5 lg:h-1.5 w-1 h-1 bg-black rounded-full"></div>
                                                <span>{text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <span className="text-black lg:text-base text-sm text-center lg:mt-10 mt-5">Krivisio does it all in one fraction of the cost</span>

                                <div className="mt-6 text-center">
                                    <Button className="bg-[#FB5711] hover:bg-orange-600 text-white px-6 py-4 font-semibold rounded-sm">
                                        Join the Waitlist
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
