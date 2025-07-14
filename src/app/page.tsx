import Image from "next/image";
"use client";
import LandingPage from "./Home/page";
import SmoothScrollWrapper from "./(components)/smoothScroll";

export default function Home() {

  return (
    <div>
      <SmoothScrollWrapper/>
      <LandingPage />
    </div>
  );
}
