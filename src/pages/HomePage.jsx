import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = ['Home', 'About', 'Teams', 'Players', 'Tournaments', 'Leaderboards', 'Shop', 'Contact']

const stats = [
  ['Total Players', '140+'],
  ['Tournament Wins', '68'],
  ['Active Rosters', '5'],
  ['Community Members', '45K+'],
]

const teams = [
  { game: 'Free Fire Max', win: '74%', lineup: 'Rogue, Titan, Pulse, Nova, Coach Zed' },
  { game: 'BGMI', win: '79%', lineup: 'Falcon, Vortex, Sync, Arrow, Coach Kael' },
  { game: 'Indus', win: '71%', lineup: 'Echo, Raiden, Knell, Oni, Coach Ares' },
  { game: 'Pokemon Unite', win: '76%', lineup: 'Volt, Mira, Drake, Ivy, Coach Hex' },
  { game: 'FIFA', win: '81%', lineup: 'Zenith, Quantum, Coach Orion' },
]

const players = [
  ['GOAT_Raiden', 'IGL', '3.8', '42%', '72%', '480'],
  ['GOAT_Nova', 'Sniper', '4.2', '51%', '75%', '512'],
  ['GOAT_Pulse', 'Support', '2.9', '35%', '69%', '449'],
]

const tournaments = [
  ['GOAT Ascension Cup', 'Upcoming', '$35,000', '02d 14h'],
  ['Neon Strike League', 'Live', '$70,000', 'Live'],
  ['Crimson Arena Masters', 'Completed', '$50,000', 'Finished'],
]

function HomePage() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="relative overflow-hidden bg-[#05030a] text-white">
      <div className="ambient-grid" />
      <div className="ambient-gradient" />

      <nav className={`sticky top-0 z-50 transition ${scrolled ? 'bg-black/45 backdrop-blur-xl' : 'bg-transparent'}`}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
          <div className="text-xl font-bold tracking-[0.2em] text-cyan-300">GOAT ESPORTS</div>
          <ul className="hidden gap-6 text-sm lg:flex">
            {navLinks.map((link) => (
              <li key={link} className="group relative cursor-pointer">
                {link}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-2 lg:flex">
            <Link className="ghost-button" to="/login">Login</Link>
            <Link className="neon-button" to="/signup">Register</Link>
          </div>
          <button className="text-2xl lg:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-black/80 px-4 py-4 backdrop-blur-xl lg:hidden">
            <div className="grid gap-3 text-sm">
              {navLinks.map((link) => <button key={link} className="text-left">{link}</button>)}
              <Link to="/login">Login</Link>
              <Link to="/signup">Register</Link>
            </div>
          </div>
        )}
      </nav>

      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-title text-5xl font-black leading-tight md:text-7xl"
        >
          GOAT ESPORTS
        </motion.h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-200">Rise. Dominate. Conquer.</p>
        <p className="mt-3 max-w-3xl text-slate-300">
          Elite tournament ecosystem for competitive teams, creators, and rising talent. Built for speed, precision, and relentless execution.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {['Join Community', 'View Teams', 'Upcoming Tournaments'].map((cta, i) => (
            <motion.button key={cta} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className={i === 0 ? 'neon-button' : 'ghost-button'}>
              {cta}
            </motion.button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([label, value], idx) => (
            <motion.div key={label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="glass-panel p-4">
              <p className="text-3xl font-bold text-cyan-300">{value}</p>
              <p className="mt-1 text-sm text-slate-300">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <h2 className="section-title">Teams</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {teams.map((team) => (
            <motion.article key={team.game} whileHover={{ y: -6 }} className="glass-panel group p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">{team.game}</p>
              <p className="mt-3 text-sm text-slate-200">{team.lineup}</p>
              <p className="mt-4 text-sm text-slate-300">Roles: IGL, Sniper, Support, Rusher, Coach</p>
              <p className="mt-2 text-sm text-slate-300">Win Percentage: {team.win}</p>
              <button className="mt-5 ghost-button w-full group-hover:border-cyan-300/70">View Full Roster</button>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <h2 className="section-title">Tournaments</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {tournaments.map(([name, status, prize, timer]) => (
            <article key={name} className="glass-panel p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-indigo-300">{status}</p>
              <h3 className="mt-2 text-lg font-semibold">{name}</h3>
              <p className="mt-2 text-sm text-slate-300">Prize Pool: {prize}</p>
              <p className="mt-1 text-sm text-slate-300">Countdown: {timer}</p>
              <div className="mt-4 flex gap-2">
                <button className="neon-button">Register</button>
                <button className="ghost-button">Bracket</button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="glass-panel p-5">
            <h3 className="text-lg font-semibold">Interactive Bracket Preview</h3>
            <p className="mt-2 text-sm text-slate-300">Quarterfinals → Semifinals → Grand Finals with live progression states.</p>
          </article>
          <article className="glass-panel p-5">
            <h3 className="text-lg font-semibold">Admin-Controlled Management</h3>
            <p className="mt-2 text-sm text-slate-300">Concept-ready controls for seeding, scheduling, registrations, and result publishing.</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <h2 className="section-title">Player Profiles</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {players.map(([tag, role, kd, hs, win, matches]) => (
            <article key={tag} className="glass-panel p-5">
              <div className="mb-3 h-16 w-16 rounded-full border border-cyan-300/40 bg-gradient-to-br from-cyan-500/25 to-indigo-500/25" />
              <h3 className="text-xl font-semibold">{tag}</h3>
              <p className="text-sm text-cyan-300">{role}</p>
              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p>KD Ratio: {kd}</p><p>Headshot %: {hs}</p><p>Win Rate: {win}</p><p>Matches: {matches}</p>
                <p>Social: @goatesports</p><p>Badges: MVP, Clutch King</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <h2 className="section-title">Live Leaderboards</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {['Team Rankings', 'MVP Players', 'Kill Leaderboard', 'Weekly Top Performers'].map((item, i) => (
            <motion.article key={item} whileHover={{ scale: 1.02 }} className="glass-panel p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{item}</p>
              <p className="mt-3 text-2xl font-semibold">#{i + 1} GOAT Unit</p>
              <p className="mt-2 text-sm text-slate-300">Animated ranking transitions and point deltas ready for real-time API feeds.</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <h2 className="section-title">Match Schedule & Results</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {['Match Calendar', 'Upcoming Scrims', 'Past Results'].map((item) => (
            <article key={item} className="glass-panel p-5">
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-slate-300">Live score cards and countdown timers integrated with schedule services.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <h2 className="section-title">Community & Social</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {['Discord Integration', 'Instagram Feed', 'YouTube Highlights', 'Community Stats'].map((item) => (
            <article key={item} className="glass-panel p-5">
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-slate-300">Connected modules with CTA-focused growth flows and engagement tracking.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <h2 className="section-title">Sponsors & Partners</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {['Nexus Gear', 'HyperVolt Energy', 'Phantom Labs'].map((sponsor) => (
            <motion.article key={sponsor} whileHover={{ y: -4 }} className="glass-panel flex items-center justify-center p-8 text-center text-xl font-semibold">
              {sponsor}
            </motion.article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 text-center text-sm text-slate-400">
        <p>GOAT ESPORTS © 2026. Competitive excellence at global scale.</p>
        <div className="mt-3 flex justify-center gap-3">
          <Link to="/login" className="ghost-button">Login</Link>
          <Link to="/signup" className="ghost-button">Signup</Link>
          <Link to="/admin" className="ghost-button">Admin Dashboard</Link>
        </div>
      </footer>
    </main>
  )
}

export default HomePage
