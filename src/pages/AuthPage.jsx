import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaDiscord, FaGoogle, FaTwitch } from 'react-icons/fa'

const pageCopy = {
  login: {
    title: 'Welcome Back, Champion',
    subtitle: 'Secure login to manage your teams, scrims, and tournaments.',
    button: 'Enter Command Center',
    alternateLabel: "Don't have an account?",
    alternatePath: '/signup',
    alternateAction: 'Create one',
  },
  signup: {
    title: 'Create Your GOAT Account',
    subtitle: 'Join the community and step into competitive dominance.',
    button: 'Create Competitive ID',
    alternateLabel: 'Already registered?',
    alternatePath: '/login',
    alternateAction: 'Login',
  },
  forgot: {
    title: 'Recover Access',
    subtitle: 'Reset your password and get back in the arena quickly.',
    button: 'Send Recovery Link',
    alternateLabel: 'Remember your password?',
    alternatePath: '/login',
    alternateAction: 'Back to login',
  },
}

function AuthPage({ mode = 'login' }) {
  const content = pageCopy[mode] ?? pageCopy.login

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#04030b] px-4 py-20 text-white">
      <div className="ambient-grid" />
      <div className="ambient-gradient" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_0_60px_rgba(71,71,255,0.22)] backdrop-blur-xl"
      >
        <Link to="/" className="text-sm text-cyan-300 transition hover:text-cyan-200">
          ← Back to GOAT ESPORTS
        </Link>
        <h1 className="mt-4 text-3xl font-semibold">{content.title}</h1>
        <p className="mt-2 text-sm text-slate-200">{content.subtitle}</p>

        <form className="mt-8 space-y-4">
          {(mode === 'signup' || mode === 'login') && (
            <label className="block">
              <span className="mb-1 block text-xs uppercase tracking-[0.2em] text-cyan-300">Email</span>
              <input type="email" className="auth-input" placeholder="pilot@goatesports.gg" />
            </label>
          )}

          {mode === 'signup' && (
            <label className="block">
              <span className="mb-1 block text-xs uppercase tracking-[0.2em] text-cyan-300">Gamer Tag</span>
              <input type="text" className="auth-input" placeholder="GOAT_Shadow" />
            </label>
          )}

          <label className="block">
            <span className="mb-1 block text-xs uppercase tracking-[0.2em] text-cyan-300">Password</span>
            <input type="password" className="auth-input" placeholder="••••••••••••" />
          </label>

          {mode !== 'forgot' && (
            <div className="text-right">
              <Link to="/forgot-password" className="text-xs text-indigo-200 hover:text-cyan-200">
                Forgot password?
              </Link>
            </div>
          )}

          <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="neon-button w-full">
            {content.button}
          </motion.button>
        </form>

        {mode !== 'forgot' && (
          <div className="mt-6 space-y-3">
            <p className="text-center text-xs uppercase tracking-[0.22em] text-slate-300">Or continue with</p>
            <div className="grid grid-cols-3 gap-2">
              <button className="social-btn"><FaGoogle /></button>
              <button className="social-btn"><FaDiscord /></button>
              <button className="social-btn"><FaTwitch /></button>
            </div>
          </div>
        )}

        <p className="mt-6 text-center text-sm text-slate-300">
          {content.alternateLabel}{' '}
          <Link to={content.alternatePath} className="text-cyan-300 hover:text-cyan-200">
            {content.alternateAction}
          </Link>
        </p>
      </motion.div>
    </main>
  )
}

export default AuthPage
