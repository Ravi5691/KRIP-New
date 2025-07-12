import Image from "next/image"

export default function Intro() {
    return (
        <div className="min-h-screen relative px-20 py-40 ">
            <div className="absolute dot-background h-[80%] top-[20px] left-0 w-[100%]"></div>
            <div className=" absolute top-[-60px] left-[1170px] ">
                <Image
                    src="/LandingPage/Ellipse.svg" // Path to your logo image
                    alt="Krivisio logo"
                    width={500}
                    height={500}
                />
            </div>
            <div>
                <div>
                    <Image
                        src="/LandingPage/intro.svg" // Path to your logo image
                        alt="Krivisio logo"
                        width={792}
                        height={520}
                    />
                </div>
                <div className="flex justify-end mt-10">
                    {/* Description */}
                    <div className="flex flex-col gap-8 w-[35%] bg-[#fbfaf9d2] z-50">
                        <p className="text-lg font-medium max-w-xl text-black">
                            It eliminates the manual work behind planning, communication, and coordination, making execution 3x faster and 40% cheaper.
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-8 ">
                            <button className="bg-[#F4511E] text-white font-semibold py-2 px-6 rounded-sm hover:bg-[#d84315] transition">
                                Get Started
                            </button>
                            <button className="border border-black text-black font-semibold py-2 px-6 rounded-sm hover:bg-black hover:text-white transition">
                                Get Demo
                            </button>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}