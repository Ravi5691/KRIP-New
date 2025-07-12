import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"

export default function FAQs() {
    return (
        <div className="flex flex-col place-items-center justify-center min-h-screen px-20 pb-10 mt-10">
            <Image
                src="/LandingPage/faq.svg" // Path to your logo image
                alt="Krivisio logo"
                width={261}
                height={124}
            />
            <div className="grid grid-cols-2 justify-center gap-20 w-full mt-25">
                {/* left section */}
                <div className="flex flex-col">
                    <span className="text-[28px]">Got Question?</span>
                    <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] flex w-4/5  mt-5 py-2 rounded-sm px-4 gap-5">
                    <input type="text" placeholder="Send your question" className="w-full   text-sm  outline-none" />
                    <button className="bg-[#2C2C2C] text-white rounded-sm p-2">
                        <ArrowRight className="size-[15px]"/>
                    </button>
                    </div>
                    
                </div>
                {/* right section */}
                <div>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Product Information</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    Our flagship product combines cutting-edge technology with sleek
                                    design. Built with premium materials, it offers unparalleled
                                    performance and reliability.
                                </p>
                                <p>
                                    Key features include advanced processing capabilities, and an
                                    intuitive user interface designed for both beginners and experts.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Shipping Details</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    We offer worldwide shipping through trusted courier partners.
                                    Standard delivery takes 3-5 business days, while express shipping
                                    ensures delivery within 1-2 business days.
                                </p>
                                <p>
                                    All orders are carefully packaged and fully insured. Track your
                                    shipment in real-time through our dedicated tracking portal.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Return Policy</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    We stand behind our products with a comprehensive 30-day return
                                    policy. If you&apos;re not completely satisfied, simply return the
                                    item in its original condition.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Return Policy</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p>
                                    We stand behind our products with a comprehensive 30-day return
                                    policy. If you&apos;re not completely satisfied, simply return the
                                    item in its original condition.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}