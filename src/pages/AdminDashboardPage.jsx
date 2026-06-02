import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const cards = [
  { title: 'Tournament Management', value: '14', detail: 'Active tournaments across 5 games' },
  { title: 'Team Management', value: '09', detail: 'Registered rosters in current season' },
  { title: 'Match Scheduling', value: '36', detail: 'Upcoming matches and scrims this week' },
  { title: 'Announcements', value: '07', detail: 'Content pieces queued for publishing' },
]

const tasks = [
  ['Upload weekly highlight reel', 'Media'],
  ['Approve BGMI roster transfer', 'Teams'],
  ['Publish leaderboard update', 'Operations'],
  ['Audit sponsor campaign stats', 'Analytics'],
]

function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-[#06040f] px-4 py-10 text-white">
      <div className="ambient-grid" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">GOAT ESPORTS Admin</p>
            <h1 className="mt-2 text-3xl font-semibold">Operations Command Dashboard</h1>
          </div>
          <Link className="neon-button" to="/">
            Return to Website
          </Link>
        </div>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="glass-panel p-5"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{card.title}</p>
              <p className="mt-3 text-4xl font-semibold">{card.value}</p>
              <p className="mt-2 text-sm text-slate-300">{card.detail}</p>
            </motion.article>
          ))}
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <article className="glass-panel p-5">
            <h2 className="text-xl font-semibold">Tournament Pipeline</h2>
            <div className="mt-4 space-y-4">
              {[
                ['Qualifier Registrations', 84],
                ['Bracket Generation', 52],
                ['Live Match Compliance', 93],
                ['Post-Match Reporting', 61],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>{label}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${value}%` }}
                      transition={{ duration: 0.9 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="glass-panel p-5">
            <h2 className="text-xl font-semibold">Priority Tasks</h2>
            <ul className="mt-4 space-y-3">
              {tasks.map(([task, unit]) => (
                <li key={task} className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <p className="font-medium">{task}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{unit}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </main>
  )
}

export default AdminDashboardPage
