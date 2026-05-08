import { useState } from 'react'
import { Lock, Mail } from 'lucide-react'

export default function ComingSoonPage({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('admin_auth', 'true')
      onLoginSuccess()
    } else {
      setError('Invalid credentials')
    }
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/coming-soon-bg.jpg"
        alt="Scandinavian Interior"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Main Content Box */}
      <div className="relative z-10 w-full max-w-md p-8 md:p-10 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl mx-4 text-center">
        <h1 
          className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-[#1C1917] mb-2"
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
        >
          PanelsOfWood
        </h1>
        <p className="text-[#78716C] mb-8 text-sm uppercase tracking-widest">Coming Soon</p>

        {!showLogin ? (
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl font-medium text-[#1C1917]">Be the first to know</h2>
              <p className="text-sm text-[#78716C]">
                We're crafting something beautiful. Sign up to get notified when we launch.
              </p>
              
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2 pt-2">
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-lg border border-[#E7E5E4] bg-white text-sm focus:outline-none focus:border-[#B45309] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#B45309] hover:bg-[#92400e] text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    Notify Me
                  </button>
                </form>
              ) : (
                <div className="bg-[#FAF8F5] text-[#B45309] px-4 py-3 rounded-lg text-sm font-medium border border-[#E7E5E4]">
                  Thank you! You're on the list.
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-[#E7E5E4]">
              <p className="text-sm text-[#78716C] mb-2">Get in touch with us</p>
              <a href="mailto:hello@panelsofwood.com" className="inline-flex items-center gap-2 text-[#1C1917] hover:text-[#B45309] transition-colors font-medium">
                <Mail size={16} />
                hello@panelsofwood.com
              </a>
            </div>

            <button
              onClick={() => setShowLogin(true)}
              className="mt-6 text-xs text-[#A8A29E] hover:text-[#1C1917] transition-colors flex items-center justify-center gap-1 mx-auto"
            >
              <Lock size={12} />
              Admin Login
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-xl font-medium text-[#1C1917]">Admin Access</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-[#E7E5E4] bg-white text-sm focus:outline-none focus:border-[#B45309] transition-colors"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-[#E7E5E4] bg-white text-sm focus:outline-none focus:border-[#B45309] transition-colors"
              />
              {error && <p className="text-red-500 text-xs text-left">{error}</p>}
              <button
                type="submit"
                className="w-full py-2.5 bg-[#1C1917] hover:bg-black text-white text-sm font-medium rounded-lg transition-colors"
              >
                Log In
              </button>
            </form>
            <button
              onClick={() => setShowLogin(false)}
              className="text-xs text-[#78716C] hover:text-[#1C1917] transition-colors"
            >
              &larr; Back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
