import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useNavigate } from 'react-router'
import { useLanguage } from '../lib/LanguageContext'
import { useCurrency } from '../lib/CurrencyContext'
import type { Language } from '../lib/content'
import { getContent } from '../lib/content'
import { collections, products } from '../data/products'
import { blogPosts } from '../data/blog'
import { ArrowRight, Star, ChevronDown, AudioLines, Home as HomeIcon, TreePine, ShieldCheck } from 'lucide-react'
import BlogSection from '../components/BlogSection'

export default function Home() {
  const { lang } = useLanguage()
  const { format } = useCurrency()
  const c = getContent(lang)
  const navigate = useNavigate()
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const goTo = (path: string) => {
    navigate(`/${lang}${path}`)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  // Products on sale
  const newProducts = products.filter(p => p.originalPrice).slice(0, 4)

  return (
    <div>
      {/* Hero - Full screen with overlay text */}
      <section ref={heroRef} className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src="/hero-home.jpg"
          alt="Acoustic wood panels"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(28,25,23,0.45)' }} />
        <div className="hero-content relative z-10 text-center px-4 max-w-3xl">
          <p className="text-[12px] lg:text-[13px] font-semibold tracking-[0.15em] uppercase mb-5 lg:hidden" style={{ color: '#B45309' }}>
            {c.hero.eyebrow}
          </p>
          <h1
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.1] tracking-[-0.02em] mb-6 text-white"
          >
            {c.hero.h1}
          </h1>
          <p className="text-[16px] lg:text-[18px] leading-[1.6] mb-8 text-white/80 max-w-xl mx-auto">
            {c.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => goTo('/collections/' + collections[0].slug)}
              className="text-[13px] lg:text-[14px] font-semibold px-7 py-3.5 rounded-lg border border-white/40 text-white transition-all hover:bg-white/10"
            >
              {lang === 'de' ? 'Shop besuchen' : lang === 'fr' ? 'Visiter la boutique' : lang === 'it' ? 'Visita il negozio' : 'Visit our store'}
            </button>
          </div>
        </div>
      </section>

      {/* Collections Preview — Color Mood Grid */}
      <section id="collections-preview" className="py-16 lg:py-24" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-normal tracking-[-0.01em] mb-2" style={{ color: '#1C1917' }}>
              {c.products.title}
            </h2>
            <p className="text-[15px]" style={{ color: '#78716C' }}>{c.products.subtitle}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
            {[
              { moodImg: '/light-oak-gallery-3.jpg', hoverImg: '/light-oak-main.jpg', slug: 'akupanel-standard-light-oak', colorLabel: { de: 'Light Oak', fr: 'Chêne Clair', it: 'Rovere Chiaro', en: 'Light Oak' }, price: 59 },
              { moodImg: '/sonoma-oak-gallery-3.jpg', hoverImg: '/sonoma-oak-main.jpg', slug: 'akupanel-standard-sonoma-oak', colorLabel: { de: 'Sonoma Oak', fr: 'Chêne Sonoma', it: 'Rovere Sonoma', en: 'Sonoma Oak' }, price: 62 },
              { moodImg: '/rustic-oak-gallery-3.jpg', hoverImg: '/rustic-oak-main.jpg', slug: 'akupanel-standard-rustic-oak', colorLabel: { de: 'Rustic Oak', fr: 'Chêne Rustique', it: 'Rovere Rustico', en: 'Rustic Oak' }, price: 64 },
              { moodImg: '/walnut-gallery-3.jpg', hoverImg: '/walnut-main.jpg', slug: 'akupanel-standard-walnut', colorLabel: { de: 'Walnut', fr: 'Noyer', it: 'Noce', en: 'Walnut' }, price: 69 },
              { moodImg: '/grey-gallery-3.jpg', hoverImg: '/grey-main.jpg', slug: 'akupanel-standard-grey', colorLabel: { de: 'Grey', fr: 'Gris', it: 'Grigio', en: 'Grey' }, price: 64 },
              { moodImg: '/graphite-gallery-3.jpg', hoverImg: '/graphite-main.jpg', slug: 'akupanel-standard-graphite', colorLabel: { de: 'Graphite', fr: 'Graphite', it: 'Grafite', en: 'Graphite' }, price: 69 },
            ].map(item => (
              <button
                key={item.slug}
                onClick={() => goTo(`/products/${item.slug}`)}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden text-left"
              >
                {/* Primary mood image */}
                <img
                  src={item.moodImg}
                  alt={item.colorLabel[lang]}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* Hover mood image */}
                <img
                  src={item.hoverImg}
                  alt={`${item.colorLabel[lang]} hover`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 z-10">
                  <h3 className="text-[15px] lg:text-[17px] font-medium text-white mb-0.5">{item.colorLabel[lang]}</h3>
                  <p className="text-[12px] text-white/70">{format(item.price)}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - On Sale */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-normal tracking-[-0.01em] mb-1" style={{ color: '#1C1917' }}>
                {lang === 'de' ? 'Aktionen' : lang === 'fr' ? 'Promotions' : lang === 'it' ? 'Promozioni' : 'Sale'}
              </h2>
              <p className="text-[14px]" style={{ color: '#78716C' }}>
                {lang === 'de' ? 'Beste Preise auf ausgewählte Paneele' : lang === 'fr' ? 'Meilleurs prix sur panneaux sélectionnés' : lang === 'it' ? 'Migliori prezzi su pannelli selezionati' : 'Best prices on selected panels'}
              </p>
            </div>
            <button
              onClick={() => goTo(`/collections/${collections[0].slug}`)}
              className="hidden md:flex items-center gap-1 text-[13px] font-medium hover:opacity-70 transition-opacity"
              style={{ color: '#B45309' }}
            >
              {c.nav.cta} <ArrowRight size={16}  strokeWidth={1.5} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
            {newProducts.map(product => (
              <ProductCard key={product.id} product={product} lang={lang} onClick={() => goTo(`/products/${product.slug}`)} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection
        posts={[...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 6)}
        lang={lang}
        title={lang === 'de' ? 'Inspiration & Tipps' : lang === 'fr' ? 'Inspiration & Conseils' : lang === 'it' ? 'Ispirazione & Consigli' : 'Inspiration & Tips'}
        subtitle={lang === 'de' ? 'Ideen für Ihr nächstes Projekt' : lang === 'fr' ? 'Idées pour votre prochain projet' : lang === 'it' ? 'Idee per il vostro prossimo progetto' : 'Ideas for your next project'}
      />

      {/* Trustpilot-style trust bar */}
      <div className="border-t border-b py-4" style={{ borderColor: '#E7E5E4', backgroundColor: '#FAF8F5' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#B45309" color="#B45309"  strokeWidth={1.5} />
              ))}
            </div>
            <span className="text-[12px] font-medium" style={{ color: '#1C1917' }}>
              {lang === 'de' ? '4.9/5 bei 200+ Bewertungen' : lang === 'fr' ? '4.9/5 sur 200+ avis' : lang === 'it' ? '4.9/5 su 200+ recensioni' : '4.9/5 from 200+ reviews'}
            </span>
          </div>
          <span className="hidden sm:block" style={{ color: '#E7E5E4' }}>|</span>
          <span className="text-[12px]" style={{ color: '#78716C' }}>
            {lang === 'de' ? '2.000+ zufriedene Kunden in der Schweiz' : lang === 'fr' ? '2 000+ clients satisfaits en Suisse' : lang === 'it' ? '2.000+ clienti soddisfatti in Svizzera' : '2,000+ happy customers in Switzerland'}
          </span>
          <span className="hidden sm:block" style={{ color: '#E7E5E4' }}>|</span>
          <span className="text-[12px] flex items-center gap-1" style={{ color: '#78716C' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            {lang === 'de' ? 'SSL-gesichert' : lang === 'fr' ? 'Sécurisé SSL' : lang === 'it' ? 'SSL sicuro' : 'SSL secured'}
          </span>
        </div>
      </div>

      {/* Why PanelsOfWood */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-normal tracking-[-0.01em] mb-12" style={{ color: '#1C1917' }}>
            {c.features.title}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {c.features.items.map((item, i) => {
              const icons = [AudioLines, HomeIcon, TreePine, ShieldCheck]
              const Icon = icons[i]
              return (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FAF8F5' }}>
                    <Icon size={22} strokeWidth={1.5} style={{ color: '#B45309' }} />
                  </div>
                  <h3 className="text-[15px] font-medium mb-2" style={{ color: '#1C1917' }}>{item.title}</h3>
                  <p className="text-[13px] leading-[1.5]" style={{ color: '#78716C' }}>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-normal tracking-[-0.01em] mb-12" style={{ color: '#1C1917' }}>
            {c.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.testimonials.items.map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 lg:p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill="#B45309" color="#B45309"  strokeWidth={1.5} />
                  ))}
                </div>
                <p className="text-[14px] leading-[1.6] mb-5" style={{ color: '#1C1917' }}>"{item.quote}"</p>
                <div>
                  <p className="text-[13px] font-medium" style={{ color: '#1C1917' }}>{item.name}</p>
                  <p className="text-[12px]" style={{ color: '#78716C' }}>{item.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[700px] mx-auto px-4 lg:px-6">
          <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-normal tracking-[-0.01em] mb-10" style={{ color: '#1C1917' }}>
            {c.faq.title}
          </h2>
          <div className="space-y-3">
            {c.faq.items.map((item, i) => (
              <details key={i} className="bg-white rounded-lg border group" style={{ borderColor: '#E7E5E4' }}>
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="text-[15px] font-medium pr-4" style={{ color: '#1C1917' }}>{item.q}</span>
                  <ChevronDown size={18} className="shrink-0 transition-transform group-open:rotate-180" style={{ color: '#78716C' }}  strokeWidth={1.5} />
                </summary>
                <p className="px-5 pb-5 text-[14px] leading-[1.6]" style={{ color: '#78716C' }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Product Card Component
function ProductCard({ product, lang, onClick }: { product: typeof products[0]; lang: Language; onClick: () => void }) {
  const { format } = useCurrency()
  return (
    <button onClick={onClick} className="group text-left w-full">
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-[#FAF8F5]">
        {/* Primary image */}
        <img
          src={product.images[0]}
          alt={product.name[lang]}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        {/* Hover close-up image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name[lang]} detail`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        )}
        {product.badge && (
          <span
            className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded z-10"
            style={{ backgroundColor: '#B45309', color: '#FFFFFF' }}
          >
            {product.badge[lang]}
          </span>
        )}
        {product.originalPrice && (
          <span
            className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-white z-10"
            style={{ color: '#B45309' }}
          >
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </span>
        )}
        {/* Hover quick view overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 z-10">
          <span className="bg-white text-[12px] font-semibold px-4 py-2.5 rounded-lg shadow-lg" style={{ color: '#1C1917' }}>
            {lang === 'de' ? 'Schnellansicht' : lang === 'fr' ? 'Vue rapide' : lang === 'it' ? 'Vista rapida' : 'Quick view'}
          </span>
        </div>
      </div>
      <h3 className="text-[13px] lg:text-[14px] font-medium mb-1 line-clamp-1" style={{ color: '#1C1917' }}>{product.name[lang]}</h3>
      <div className="flex items-center gap-2">
        <span className="text-[14px] lg:text-[15px] font-semibold" style={{ color: '#1C1917' }}>{format(product.price)}</span>
        {product.originalPrice && (
          <span className="text-[13px] line-through" style={{ color: '#A8A29E' }}>{format(product.originalPrice)}</span>
        )}
      </div>
    </button>
  )
}
