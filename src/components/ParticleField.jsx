import { useEffect, useRef } from 'react'

function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4)
        gradient.addColorStop(0, `rgba(34, 211, 238, ${p.alpha})`)
        gradient.addColorStop(1, 'rgba(34, 211, 238, 0)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2)
        ctx.fill()
      })
      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 opacity-60" aria-hidden />
}

export default ParticleField
