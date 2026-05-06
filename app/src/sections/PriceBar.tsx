import { useLanguage } from '../lib/LanguageContext'
import { getContent } from '../lib/content'

export default function PriceBar() {
  const { lang } = useLanguage()
  const c = getContent(lang)

  return (
    <section id="price-bar" style={{ backgroundColor: '#FAF8F5' }} className="py-12 md:py-16">
      <div className="max-w-[1100px] mx-auto px-5 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
          <span className="text-[clamp(3rem,8vw,5rem)] font-semibold leading-none" style={{ color: '#B45309' }}>
            {c.priceBar.price}
          </span>
          <div className="text-left">
            <p className="text-[14px] font-medium" style={{ color: '#1C1917' }}>{c.priceBar.perPanel}</p>
            <p className="text-[13px]" style={{ color: '#78716C' }}>{c.priceBar.includes}</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {c.priceBar.finishes.map((f) => (
            <div key={f.name} className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-full border"
                style={{ backgroundColor: f.color, borderColor: 'rgba(0,0,0,0.08)' }}
              />
              <div className="text-left">
                <p className="text-[13px] font-medium" style={{ color: '#1C1917' }}>{f.name}</p>
                <p className="text-[11px]" style={{ color: '#78716C' }}>CHF {f.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
