import AboutUs from "./partials/aboutUs";
import FAQs from "./partials/faqs";
// import HowItWorks from "./partials/howItWorks";
import Intro from "./partials/intro";
import OurServices from "./partials/ourServices";
import Pricing from "./partials/pricing";
import DropTheChaos from "./partials/droptheChaos";
import { CountdownTimer } from "./partials/countdown";


export default function LandingPage() {

  return (
    <div className="bg-[#FBFAF9] min-h-screen hide-scroll  font-[var(--font-geist-sans)] overflow-x-hidden">
      <div>
        <Intro />
        <CountdownTimer/>
        <AboutUs />
        <OurServices />
        {/* <HowItWorks /> */}
        <Pricing />
        <DropTheChaos />
        <FAQs />
      </div>
    </div>
  );
}