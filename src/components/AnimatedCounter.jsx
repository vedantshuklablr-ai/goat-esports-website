import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return undefined

    const duration = 1400
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setDisplay(Math.round(value * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }

    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [inView, value])

  return (
    <span ref={ref} className="text-3xl font-bold text-cyan-300">
      {display}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
