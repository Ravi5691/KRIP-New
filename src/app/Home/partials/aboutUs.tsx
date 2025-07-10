import Image from 'next/image';
import { Sacramento } from "next/font/google";
import { Inter } from 'next/font/google';

const sacramento = Sacramento({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: "400", subsets: ["latin"] });

export default function AboutUs() {
    return (
        <div className='flex flex-col place-items-center justify-center min-h-screen px-20 py-10 '>
            <Image
                src="/LandingPage/aboutus.svg" // Path to your logo image
                alt="Krivisio logo"
                width={418}
                height={124}
            />
            <div className={`text-center ${inter.className} text-[56px] mt-25`}>
                Krip is an <span className={`${sacramento.className} text-[#FB5711]`}>AI-powered execution engine</span> that helps tech teams, freelancers, and agencies go from project input (brief, SRS, client call, or task dump) to execution (roadmap, task assignment, and code delivery) — automatically.
            </div>

        </div>
    )
}