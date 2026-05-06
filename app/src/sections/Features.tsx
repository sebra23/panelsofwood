import { Warehouse, Home, AudioWaveform, TreePine } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { getContent } from '../lib/content'

const icons = [Warehouse, Home, AudioWaveform, TreePine]

export default function Features() {
  const { lang } = useLanguage()
  const c = getContent(lang)

  return (
    <section style={{ backgroundColor: '#FFFFFF' }} className="py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto px-5">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-normal tracking-[-0.01em] mb-12" style={{ color: '#1C1917' }}>
          {c.features.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {c.features.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FAF8F5' }}>
                  <Icon size={22} style={{ color: '#B45309' }}  strokeWidth={1.5} />
                </div>
                <h3 className="text-[15px] font-medium mb-2" style={{ color: '#1C1917' }}>{item.title}</h3>
                <p className="text-[13px] leading-[1.5]" style={{ color: '#78716C' }}>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
