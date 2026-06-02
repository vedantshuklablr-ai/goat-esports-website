import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import ParticleField from '../components/ParticleField'
import AnimatedCounter from '../components/AnimatedCounter'
import StatBar from '../components/StatBar'
import CountdownTimer from '../components/CountdownTimer'
import {
  stats,
  teams,
  players,
  tournaments,
  leaderboardTabs,
  matches,
  sponsors,
  shopItems,
} from '../data/siteData'

function SectionHeader({ id, title, subtitle }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="mt-2 max-w-2xl text-slate-300">{subtitle}</p>}
    </div>
  )
}

function HomePage() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="relative overflow-hidden bg-[#05030a] text-white">
      <ParticleField />
      <div className="ambient-grid" />
      <div className="ambient-gradient" />
      <div className="hero-beam" />

      <Navbar />

      <section id="home" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-4 pb-24 pt-16 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs uppercase tracking-[0.35em] text-cyan-300"
        >
          International Competitive Organization
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title font-display mt-4 text-5xl font-black leading-[1.05] md:text-8xl"
        >
          GOAT
          <span className="block bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-400 bg-clip-text text-transparent">
            ESPORTS
          </span>
        </motion.h1>
        <p className="mt-5 max-w-xl text-xl font-medium text-slate-100">Rise. Dominate. Conquer.</p>
        <p className="mt-3 max-w-3xl text-slate-300">
          Elite tournament ecosystem for competitive teams, creators, and rising talent — built for arena dominance and global recognition.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <motion.button whileHover={{ scale: 1.03 }} className="neon-button" onClick={() => scrollTo('#contact')}>
            Join Community
          </motion.button>
          <motion.button whileHover={{ scale: 1.03 }} className="ghost-button" onClick={() => scrollTo('#teams')}>
            View Teams
          </motion.button>
          <motion.button whileHover={{ scale: 1.03 }} className="ghost-button" onClick={() => scrollTo('#tournaments')}>
            Upcoming Tournaments
          </motion.button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glow-border glass-panel p-5"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-16 lg:px-8">
        <SectionHeader
          title="About GOAT ESPORTS"
          subtitle="A next-generation esports organization competing across mobile and console titles with professional operations, data-driven coaching, and a global fan community."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ['Competitive DNA', 'Structured scrims, VOD reviews, and performance analytics for every roster.'],
            ['Creator Power', 'Streamers and content teams amplifying brand reach across platforms.'],
            ['Community First', 'Discord-first engagement with events, giveaways, and fan squads.'],
          ].map(([title, desc]) => (
            <article key={title} className="glass-panel glow-border p-6">
              <h3 className="text-lg font-semibold text-cyan-300">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="teams" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-16 lg:px-8">
        <SectionHeader title="Teams" subtitle="Five title rosters. One championship mindset." />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {teams.map((team) => (
            <motion.article
              key={team.game}
              whileHover={{ y: -8 }}
              className="glow-border glass-panel group overflow-hidden p-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">{team.game}</p>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-500/10 font-display text-sm font-bold">
                  {team.logo}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {team.lineup.map((player, i) => (
                  <li key={player} className="flex justify-between text-sm text-slate-200">
                    <span>{player}</span>
                    <span className="text-cyan-300/80">{team.roles[i]}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-indigo-200">{team.coach}</p>
              <StatBar label="Win Rate" value={team.win} />
              <button type="button" className="mt-5 w-full ghost-button group-hover:border-cyan-300/70">
                View Full Roster
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="tournaments" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-16 lg:px-8">
        <SectionHeader title="Tournaments" subtitle="Upcoming, live, and completed events with prize pools and brackets." />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {tournaments.map((t) => (
            <article key={t.name} className="glow-border glass-panel p-6">
              <p
                className={`text-xs uppercase tracking-[0.24em] ${
                  t.live ? 'text-red-400' : t.completed ? 'text-slate-400' : 'text-indigo-300'
                }`}
              >
                {t.status} {t.live && <span className="live-pulse ml-1">● LIVE</span>}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-slate-300">Prize Pool: {t.prize}</p>
              {t.endsAt && <CountdownTimer targetIso={t.endsAt} />}
              {t.completed && <p className="mt-3 text-sm text-slate-400">Champion: GOAT BGMI</p>}
              <div className="mt-5 flex gap-2">
                <button type="button" className="neon-button">Register</button>
                <button type="button" className="ghost-button">Bracket</button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="glass-panel p-6">
            <h3 className="font-semibold">Bracket — Quarterfinals</h3>
            <div className="mt-4 space-y-2 font-mono text-sm text-slate-300">
              <p>QF1: GOAT BGMI vs Nova Clan</p>
              <p>QF2: GOAT FF vs Hyper Unit</p>
              <p>SF1: Winner QF1 vs Winner QF2</p>
              <p className="text-cyan-300">GF: GOAT ESPORTS Arena Finals</p>
            </div>
          </article>
          <article className="glass-panel p-6">
            <h3 className="font-semibold">Admin Tournament Control</h3>
            <p className="mt-2 text-sm text-slate-300">
              Manage registrations, seeding, match scheduling, and live results from the operations dashboard.
            </p>
            <Link to="/admin" className="mt-4 inline-block neon-button">
              Open Admin Concept
            </Link>
          </article>
        </div>
      </section>

      <section id="players" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-16 lg:px-8">
        <SectionHeader title="Player Profiles" subtitle="Performance metrics, achievements, and social presence." />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {players.map((p) => (
            <motion.article key={p.tag} whileHover={{ scale: 1.02 }} className="glow-border glass-panel p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/50 bg-gradient-to-br from-cyan-500/30 to-indigo-600/30 font-display text-lg font-bold">
                  {p.tag.slice(-1)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{p.tag}</h3>
                  <p className="text-sm text-cyan-300">{p.role}</p>
                </div>
              </div>
              <div className="space-y-3">
                <StatBar label="Win Rate" value={p.win} />
                <StatBar label="Headshot %" value={p.hs} color="from-fuchsia-400 to-indigo-500" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
                <p>KD: {p.kd}</p>
                <p>Matches: {p.matches}</p>
              </div>
              <p className="mt-3 text-sm text-slate-400">@goatesports</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.badges.map((b) => (
                  <span key={b} className="rounded-full border border-cyan-400/30 px-2 py-0.5 text-xs text-cyan-200">
                    {b}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="leaderboards" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-16 lg:px-8">
        <SectionHeader title="Live Leaderboards" subtitle="Real-time rankings across teams, MVPs, and weekly performers." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {leaderboardTabs.map((tab) => (
            <article key={tab.id} className="glass-panel p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{tab.title}</p>
              <ul className="mt-4 space-y-2">
                {tab.rows.map((row) => (
                  <motion.li
                    key={row.rank}
                    layout
                    className="flex items-center justify-between rounded-lg border border-white/5 bg-black/20 px-3 py-2 text-sm"
                  >
                    <span className="text-cyan-300">#{row.rank}</span>
                    <span>{row.name}</span>
                    <span className="text-slate-400">{row.points}</span>
                  </motion.li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-16 lg:px-8">
        <SectionHeader title="Match Schedule & Results" subtitle="Scrims, qualifiers, and live scorecards." />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {matches.map((m) => (
            <article key={`${m.date}-${m.event}`} className={`glass-panel p-5 ${m.live ? 'glow-border' : ''}`}>
              <p className="text-xs text-cyan-300">{m.date}</p>
              <h3 className="mt-1 font-semibold">{m.event}</h3>
              <p className="mt-2 text-sm text-slate-300">vs {m.opponent}</p>
              {m.live ? (
                <p className="mt-2 text-sm text-red-400 live-pulse">● LIVE — {m.time}</p>
              ) : m.score ? (
                <p className="mt-2 text-sm text-emerald-400">Result: {m.score} ({m.result})</p>
              ) : (
                <p className="mt-2 text-sm text-slate-400">{m.time}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-16 lg:px-8">
        <SectionHeader title="Community & Social" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { icon: FaDiscord, name: 'Discord', stat: '18,400 members', cta: 'Join Server' },
            { icon: FaInstagram, name: 'Instagram', stat: '42K followers', cta: 'Follow' },
            { icon: FaYoutube, name: 'YouTube', stat: '120+ highlights', cta: 'Watch' },
          ].map(({ icon: Icon, name, stat, cta }) => (
            <article key={name} className="glass-panel flex flex-col items-start p-6">
              <Icon className="text-3xl text-cyan-300" />
              <h3 className="mt-3 text-lg font-semibold">{name}</h3>
              <p className="mt-1 text-sm text-slate-300">{stat}</p>
              <button type="button" className="mt-4 ghost-button">{cta}</button>
            </article>
          ))}
        </div>
        <div className="mt-6 glass-panel glow-border flex flex-col items-center justify-between gap-4 p-8 md:flex-row">
          <div>
            <h3 className="text-2xl font-semibold">Join the GOAT Army</h3>
            <p className="mt-1 text-slate-300">Exclusive scrims, early access drops, and tournament alerts.</p>
          </div>
          <button type="button" className="neon-button" onClick={() => scrollTo('#contact')}>
            Join Community
          </button>
        </div>
      </section>

      <section id="shop" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-16 lg:px-8">
        <SectionHeader title="Shop" subtitle="Official GOAT ESPORTS merchandise." />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {shopItems.map((item) => (
            <article key={item.name} className="glass-panel p-6">
              <span className="rounded-full border border-fuchsia-400/40 px-2 py-0.5 text-xs text-fuchsia-300">{item.tag}</span>
              <h3 className="mt-3 text-lg font-semibold">{item.name}</h3>
              <p className="mt-2 text-cyan-300">{item.price}</p>
              <button type="button" className="mt-4 w-full ghost-button">Add to Cart</button>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-16 lg:px-8">
        <SectionHeader title="Contact" subtitle="Partnerships, roster inquiries, and media requests." />
        <form className="mt-8 grid max-w-2xl gap-4">
          <input className="auth-input" placeholder="Your name" />
          <input className="auth-input" type="email" placeholder="you@email.com" />
          <textarea className="auth-input min-h-[120px]" placeholder="Message" />
          <button type="button" className="neon-button w-fit">Send Message</button>
        </form>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-16 lg:px-8">
        <SectionHeader title="Sponsors & Partners" />
        <div className="sponsor-track mt-8 flex gap-4 overflow-hidden">
          <div className="flex min-w-full shrink-0 animate-marquee gap-4">
            {[...sponsors, ...sponsors].map((sponsor, i) => (
              <div key={`${sponsor}-${i}`} className="glass-panel flex h-24 min-w-[200px] items-center justify-center px-6 font-semibold">
                {sponsor}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-4 py-12 text-center text-sm text-slate-400">
        <p className="font-display text-lg text-white">GOAT ESPORTS</p>
        <p className="mt-2">© 2026 GOAT ESPORTS. Competitive excellence at global scale.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link to="/login" className="ghost-button">Login</Link>
          <Link to="/signup" className="ghost-button">Signup</Link>
          <Link to="/admin" className="ghost-button">Admin Dashboard</Link>
        </div>
      </footer>
    </main>
  )
}

export default HomePage
