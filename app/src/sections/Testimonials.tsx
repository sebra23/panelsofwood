import { Star } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { getContent } from '../lib/content'

export default function Testimonials() {
  const { lang } = useLanguage()
  const c = getContent(lang)

  return (
    <section style={{ backgroundColor: '#FFFFFF' }} className="py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto px-5">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-normal tracking-[-0.01em] mb-12" style={{ color: '#1C1917' }}>
          {c.testimonials.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {c.testimonials.items.map((item) => (
            <div key={item.name} className="p-6 rounded-xl" style={{ backgroundColor: '#FAF8F5' }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#B45309" color="#B45309"  strokeWidth={1.5} />
                ))}
              </div>
              <p className="text-[14px] leading-[1.6] mb-4" style={{ color: '#1C1917' }}>"{item.quote}"</p>
              <div>
                <p className="text-[13px] font-medium" style={{ color: '#1C1917' }}>{item.name}</p>
                <p className="text-[12px]" style={{ color: '#78716C' }}>{item.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
