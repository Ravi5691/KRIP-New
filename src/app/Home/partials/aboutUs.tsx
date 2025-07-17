
"use client"

import Image from "next/image"
import { Sacramento, Inter } from "next/font/google"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const sacramento = Sacramento({ weight: "400", subsets: ["latin"] })
const inter = Inter({ weight: "400", subsets: ["latin"] })

gsap.registerPlugin(ScrollTrigger)

export default function AboutUs() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })

      if (textRef.current) {
        const node = textRef.current
        const wordSpans: HTMLElement[] = []

        const wrapWords = (element: HTMLElement | ChildNode) => {
          // Skip if this is the styled span (orange font)
          if (
            element.nodeType === Node.ELEMENT_NODE &&
            (element as HTMLElement).classList.contains(sacramento.className)
          ) {
            return // Don't process words inside the orange span
          }

          // Handle plain text
          if (element.nodeType === Node.TEXT_NODE) {
            const text = element.textContent || ""
            const words = text.split(" ")
            const fragment = document.createDocumentFragment()

            words.forEach((word, i) => {
              const span = document.createElement("span")
              span.className = "word-animate"
              span.style.color = "#d1d5db"
              span.textContent = word
              fragment.appendChild(span)
              if (i !== words.length - 1) fragment.appendChild(document.createTextNode(" "))
              wordSpans.push(span)
            })

            element.parentNode?.replaceChild(fragment, element)
          } else if (element.nodeType === Node.ELEMENT_NODE) {
            Array.from(element.childNodes).forEach(wrapWords)
          }
        }
        wrapWords(node)
        gsap.to(wordSpans, {
          color: "#000000",
          duration: 0.1,
          stagger: {
            amount: 2,
            from: "start",
          },
          ease: "none",
          scrollTrigger: {
            trigger: node,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="flex flex-col place-items-center justify-center min-h-screen px-6 md:px-20 py-10 my-8 mt-5"
    >
      <Image ref={imageRef} src="/LandingPage/aboutus.svg" alt="Krivisio logo" width={418} height={124} />

      <div
        ref={textRef}
        className={`text-center ${inter.className} text-[32px] sm:text-[40px] md:text-[56px] mt-20 leading-tight`}
      >
        Krip is an{" "}
        <span className={`${sacramento.className} text-[#FB5711]`}>
          AI-powered execution engine
        </span>{" "}
        that helps tech teams, freelancers, and agencies go from project input (brief, SRS, client call, or task dump)
        to execution (roadmap, task assignment, and code delivery) — automatically.
      </div>
    </div>
  )
}
