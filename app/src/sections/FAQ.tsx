import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { getContent } from '../lib/content'

export default function FAQ() {
  const { lang } = useLanguage()
  const c = getContent(lang)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section style={{ backgroundColor: '#FAF8F5' }} className="py-16 md:py-20">
      <div className="max-w-[700px] mx-auto px-5">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-normal tracking-[-0.01em] mb-10" style={{ color: '#1C1917' }}>
          {c.faq.title}
        </h2>
        <div className="space-y-3">
          {c.faq.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden transition-all"
              style={{ boxShadow: openIndex === i ? '0 2px 8px rgba(0,0,0,0.04)' : 'none' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-[15px] font-medium pr-4" style={{ color: '#1C1917' }}>{item.q}</span>
                <ChevronDown
                  size={18}
                  className="shrink-0 transition-transform"
                  style={{
                    color: '#78716C',
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              <div
                className="overflow-hidden transition-all"
                style={{
                  maxHeight: openIndex === i ? '200px' : '0px',
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p className="px-5 pb-5 text-[14px] leading-[1.6]" style={{ color: '#78716C' }}>
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
