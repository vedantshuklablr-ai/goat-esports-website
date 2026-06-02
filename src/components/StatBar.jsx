import { motion } from 'framer-motion'

function StatBar({ label, value, color = 'from-cyan-400 to-indigo-500' }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs text-slate-300">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default StatBar
