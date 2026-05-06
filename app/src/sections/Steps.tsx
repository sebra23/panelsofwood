import { Ruler, Magnet, Check } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { getContent } from '../lib/content'

const icons = [Ruler, Magnet, Check]

export default function Steps() {
  const { lang } = useLanguage()
  const c = getContent(lang)

  return (
    <section style={{ backgroundColor: '#FAF8F5' }} className="py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto px-5">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-normal tracking-[-0.01em] mb-12" style={{ color: '#1C1917' }}>
          {c.steps.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[60px] left-[16.66%] right-[16.66%] h-px" style={{ backgroundColor: '#E7E5E4' }} />

          {c.steps.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div key={item.step} className="text-center relative z-10">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border-2" style={{ backgroundColor: '#FFFFFF', borderColor: '#B45309' }}>
                  <Icon size={20} style={{ color: '#B45309' }}  strokeWidth={1.5} />
                </div>
                <h3 className="text-[16px] font-medium mb-2" style={{ color: '#1C1917' }}>{item.title}</h3>
                <p className="text-[14px] leading-[1.5] max-w-xs mx-auto" style={{ color: '#78716C' }}>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
