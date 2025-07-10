import Image from "next/image";
"use client";
import Lenis from "lenis";
import { useEffect } from "react";
import LandingPage from "./Home/page";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.1,
      easing: (t) => Math.min(1, 1.5 * t - 0.5 * t * t),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <LandingPage />
    </div>
  );
}
