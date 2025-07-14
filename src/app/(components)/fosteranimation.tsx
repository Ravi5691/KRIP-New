import { gsap } from "gsap"
import { useEffect } from "react"


useEffect(() => {
  const tl = gsap.timeline()

  tl.from(".v-line", { height: 0, duration: 0.5 })
    .from(".h-line", { width: 0, duration: 0.5 }, "+=0.2")
    .from(".title", { opacity: 0, x: -50, duration: 0.6 }, "+=0.3")
}, [])
