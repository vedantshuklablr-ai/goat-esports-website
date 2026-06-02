import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navLinks } from '../data/siteData'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition ${
        scrolled ? 'border-white/10 bg-black/55 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        <button
          type="button"
          onClick={() => scrollTo('#home')}
          className="font-display text-xl font-bold tracking-[0.18em] text-cyan-300"
        >
          GOAT <span className="text-white">ESPORTS</span>
        </button>

        <ul className="hidden gap-6 text-sm lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => scrollTo(link.href)}
                className="group relative text-slate-200 transition hover:text-cyan-300"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Link className="ghost-button" to="/login">Login</Link>
          <Link className="neon-button" to="/signup">Register</Link>
        </div>

        <button
          type="button"
          className="text-2xl lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-black/85 backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-3 px-4 py-4 text-sm">
              {navLinks.map((link) => (
                <button key={link.href} type="button" className="text-left" onClick={() => scrollTo(link.href)}>
                  {link.label}
                </button>
              ))}
              <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
              <Link to="/signup" onClick={() => setOpen(false)}>Register</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
