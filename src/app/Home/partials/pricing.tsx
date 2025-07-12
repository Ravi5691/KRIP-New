import Image from "next/image"

const features = [
    "Plan → Assign → Code instantly",
    "Execution AI for entire team",
    "AI plans based on the brief",
    "Auto-tasking with ownership",
    "One system, one flow",
    "Krivisio thinks before you build",
];

export default function Pricing() {
    return (
        <div className="flex flex-col place-items-center justify-center min-h-screen px-20 py-30 mt-30">
            <Image
                src="/LandingPage/vs.svg" // Path to your logo image
                alt="Krivisio logo"
                width={794}
                height={124}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-10 w-full mx-auto h-[570px] mt-15">
                {/* Others Card */}
                <div className="bg-[#F6F6F6] rounded-2xl p-3 flex flex-col justify-between">
                    <div className="bg-white p-[24px] h-[341px]">
                        <div className="bg-[#F6F6F6] w-[185px] text-black text-center px-3 py-2 text-xs rounded-full mb-4 font-medium">
                            Others
                        </div>
                        <h2 className="text-[28px] font-semibold text-black mb-2 mt-10">
                            Lorem ipsum dolor sit amet consectetur adipiscing.
                        </h2>
                        <div className="flex justify-between ">
                            <p className="text-sm text-gray-500 mb-6">
                                Lorem ipsum dolor sit amet consectetur adipiscing.
                            </p>
                            <div className="text-red-600 font-bold text-2xl">
                                Rs. <span className="text-3xl">6000</span>
                                <span className="text-sm font-normal text-gray-500"> /year</span>
                            </div>
                        </div>

                    </div>
                    <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-black mt-6">
                        {features.map((item, i) => (
                            <li key={i} className="flex items-start">
                                •&nbsp;{item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Krivisio Card */}
                <div className="bg-[#0F1117] rounded-2xl border border-gray-800 shadow-md p-6 flex flex-col justify-between">
                    <div>
                        <div className="bg-red-100 text-red-600 px-3 py-1 text-xs rounded-full w-fit mb-4 font-medium">
                            KRIVISIO
                        </div>
                        <h2 className="text-xl font-semibold text-white mb-2">
                            Lorem ipsum dolor sit amet consectetur adipiscing.
                        </h2>
                        <p className="text-sm text-gray-400 mb-6">
                            Lorem ipsum dolor sit amet consectetur adipiscing.
                        </p>
                        <div className="text-green-500 font-bold text-2xl">
                            Rs. <span className="text-3xl">6000</span>
                            <span className="text-sm font-normal text-gray-400"> /year</span>
                        </div>
                    </div>
                    <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-white mt-6">
                        {features.map((item, i) => (
                            <li key={i} className="flex items-start">
                                •&nbsp;{item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}