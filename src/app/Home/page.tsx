import AboutUs from "./partials/aboutUs";
import Footer from "./partials/footer";
import HowItWorks from "./partials/howItWorks";
import OurServices from "./partials/ourServices";
import Pricing from "./partials/pricing";
import DropTheChaos from "./partials/score";

export default function LandingPage() {
  return (
    <div className="bg-[#FBFAF9] min-h-screen hide-scroll  font-[var(--font-geist-sans)]">
        <div>
            <AboutUs/>
            <div className="my-25">
                <OurServices/>
            </div>
            <HowItWorks/>
            <Pricing/>
            <DropTheChaos/>
            <Footer/>
        </div>
    </div>
  );
}