import { useEffect, useState } from 'react'

function pad(n) {
  return String(n).padStart(2, '0')
}

function CountdownTimer({ targetIso }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 })

  useEffect(() => {
    const target = new Date(targetIso).getTime()

    const tick = () => {
      const diff = Math.max(target - Date.now(), 0)
      setTime({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60),
      })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetIso])

  return (
    <div className="mt-3 flex gap-2 font-mono text-sm">
      {[
        ['D', time.d],
        ['H', time.h],
        ['M', time.m],
        ['S', time.s],
      ].map(([label, val]) => (
        <div key={label} className="rounded-lg border border-cyan-400/30 bg-black/30 px-2 py-1 text-center">
          <p className="text-cyan-300">{pad(val)}</p>
          <p className="text-[10px] text-slate-400">{label}</p>
        </div>
      ))}
    </div>
  )
}

export default CountdownTimer
