import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useLanguage } from '../lib/LanguageContext'
import { getContent } from '../lib/content'

export default function Hero() {
  const { lang } = useLanguage()
  const c = getContent(lang)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-eyebrow', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.2 })
      gsap.fromTo('.hero-h1', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.4 })
      gsap.fromTo('.hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.6 })
      gsap.fromTo('.hero-btns', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.8 })
      gsap.fromTo('.hero-img', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1 })
    }, ref)
    return () => ctx.revert()
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="pt-28 pb-12 md:pt-36 md:pb-16" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1100px] mx-auto px-5 text-center">
        <p className="hero-eyebrow text-[12px] font-semibold tracking-[0.08em] uppercase mb-5" style={{ color: '#B45309' }}>
          {c.hero.eyebrow}
        </p>
        <h1 className="hero-h1 text-[clamp(2.2rem,5vw,3.5rem)] font-light leading-[1.1] tracking-[-0.02em] mb-5" style={{ color: '#1C1917' }}>
          {c.hero.h1}
        </h1>
        <p className="hero-sub text-[16px] md:text-[18px] leading-[1.6] max-w-xl mx-auto mb-8" style={{ color: '#78716C' }}>
          {c.hero.subtitle}
        </p>
        <div className="hero-btns flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => scrollTo('calculator')}
            className="text-[14px] font-semibold px-7 py-3.5 rounded-lg transition-all hover:opacity-85"
            style={{ backgroundColor: '#B45309', color: '#FFFFFF' }}
          >
            {c.hero.ctaPrimary}
          </button>
          <button
            onClick={() => scrollTo('price-bar')}
            className="text-[14px] font-semibold px-7 py-3.5 rounded-lg border transition-all hover:bg-[#1C1917] hover:text-white hover:border-[#1C1917]"
            style={{ borderColor: '#E7E5E4', color: '#1C1917' }}
          >
            {c.hero.ctaSecondary}
          </button>
        </div>
        <div className="hero-img max-w-3xl mx-auto rounded-xl overflow-hidden">
          <img src="/product-akupanel-main.jpg" alt="Acoustic wood panels" className="w-full h-auto object-cover" style={{ maxHeight: '50vh' }} />
        </div>
      </div>
    </section>
  )
}
