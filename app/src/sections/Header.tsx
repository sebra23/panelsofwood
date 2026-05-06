import { useState, useEffect } from 'react'
import { ShoppingCart, Search, Menu, X } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { useCurrency } from '../lib/CurrencyContext'
import { getContent, languages, type Language } from '../lib/content'
import { collections } from '../data/products'
import { useNavigate, useLocation } from 'react-router'

interface HeaderProps {
  cartCount: number
  onCartClick: () => void
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const { lang, setLang } = useLanguage()
  const { currency, setCurrency } = useCurrency()
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const c = getContent(lang)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLangChange = (newLang: Language) => {
    if (newLang === lang) return
    setLang(newLang)
    const parts = location.pathname.split('/')
    parts[1] = newLang
    navigate(parts.join('/') || `/${newLang}/`)
  }

  const goTo = (path: string) => {
    navigate(`/${lang}${path}`)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <>
      {/* Main header */}
      <header
        className="sticky top-0 z-50 transition-all duration-300 border-b"
        style={{
          backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : '#FFFFFF',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderColor: '#E7E5E4',
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Mobile menu */}
            <button className="lg:hidden p-2 -ml-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={22}  strokeWidth={1.5} /> : <Menu size={22}  strokeWidth={1.5} />}
            </button>

            {/* Logo */}
            <button
              onClick={() => goTo('/')}
              className="text-[18px] lg:text-[20px] font-semibold tracking-[-0.02em] absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
              style={{ color: '#1C1917', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
            >
              PanelsOfWood
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="relative group">
                <button className="text-[13px] font-medium py-5" style={{ color: '#1C1917' }}>
                  {c.nav.products}
                </button>
                {/* Dropdown */}
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-lg border p-3 min-w-[220px]" style={{ borderColor: '#E7E5E4' }}>
                    {collections.slice(0, 4).map(col => (
                      <button
                        key={col.id}
                        onClick={() => goTo(`/collections/${col.slug}`)}
                        className="block w-full text-left px-3 py-2 text-[13px] rounded-md hover:bg-[#FAF8F5] transition-colors"
                        style={{ color: '#1C1917' }}
                      >
                        {col.name[lang]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <button onClick={() => goTo(`/collections/${collections[4].slug}`)} className="text-[13px] font-medium" style={{ color: '#1C1917' }}>
                {c.nav.aluwood}
              </button>
              <button onClick={() => goTo(`/collections/${collections[5].slug}`)} className="text-[13px] font-medium" style={{ color: '#1C1917' }}>
                {c.nav.samples}
              </button>
              <button onClick={() => goTo('/blog')} className="text-[13px] font-medium" style={{ color: '#1C1917' }}>
                {c.nav.blog}
              </button>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 lg:gap-3">
              <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 rounded-full hover:bg-[#FAF8F5] transition-colors">
                <Search size={18} style={{ color: '#1C1917' }}  strokeWidth={1.5} />
              </button>

              {/* Language */}
              <div className="hidden md:flex items-center rounded-full p-0.5" style={{ backgroundColor: '#F5F5F4' }}>
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => handleLangChange(l.code)}
                    className="text-[11px] font-semibold px-2 py-1 rounded-full transition-all"
                    style={{
                      color: lang === l.code ? '#FFFFFF' : '#78716C',
                      backgroundColor: lang === l.code ? '#1C1917' : 'transparent',
                    }}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              {/* Currency */}
              <div className="hidden md:flex items-center rounded-full p-0.5" style={{ backgroundColor: '#F5F5F4' }}>
                {(['CHF', 'EUR'] as const).map(c => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className="text-[11px] font-semibold px-2 py-1 rounded-full transition-all"
                    style={{
                      color: currency === c ? '#FFFFFF' : '#78716C',
                      backgroundColor: currency === c ? '#1C1917' : 'transparent',
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <button onClick={onCartClick} className="relative p-2 rounded-full hover:bg-[#FAF8F5] transition-colors">
                <ShoppingCart size={18} style={{ color: '#1C1917' }}  strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center" style={{ backgroundColor: '#B45309', color: '#FFFFFF' }}>
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t px-4 py-4 space-y-3" style={{ borderColor: '#E7E5E4', backgroundColor: '#FFFFFF' }}>
            {collections.map(col => (
              <button
                key={col.id}
                onClick={() => goTo(`/collections/${col.slug}`)}
                className="block w-full text-left py-2 text-[14px] font-medium"
                style={{ color: '#1C1917' }}
              >
                {col.name[lang]}
              </button>
            ))}
            <button
              onClick={() => goTo('/blog')}
              className="block w-full text-left py-2 text-[14px] font-medium"
              style={{ color: '#1C1917' }}
            >
              {c.nav.blog}
            </button>
            <div className="flex gap-2 pt-2 border-t" style={{ borderColor: '#E7E5E4' }}>
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => handleLangChange(l.code)}
                  className="text-[12px] font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    color: lang === l.code ? '#FFFFFF' : '#78716C',
                    backgroundColor: lang === l.code ? '#1C1917' : '#F5F5F4',
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div className="flex gap-2 pt-2">
              {(['CHF', 'EUR'] as const).map(cur => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  className="text-[12px] font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    color: currency === cur ? '#FFFFFF' : '#78716C',
                    backgroundColor: currency === cur ? '#1C1917' : '#F5F5F4',
                  }}
                >
                  {cur}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-start justify-center pt-32" onClick={() => setSearchOpen(false)}>
          <div className="w-full max-w-xl mx-4 bg-white rounded-xl p-4 shadow-xl" onClick={e => e.stopPropagation()}>
            <input
              type="text"
              autoFocus
              placeholder="Suche..."
              className="w-full px-4 py-3 text-[16px] outline-none"
              style={{ color: '#1C1917' }}
            />
          </div>
        </div>
      )}
    </>
  )
}
