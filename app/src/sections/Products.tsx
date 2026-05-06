import { useLanguage } from '../lib/LanguageContext'
import { getContent } from '../lib/content'

export default function Products() {
  const { lang } = useLanguage()
  const c = getContent(lang)

  const images = ['/akupanel-oak-1.jpg', '/product-aluwood-main.jpg', '/product-outdoor-main.jpg']

  return (
    <section id="products" style={{ backgroundColor: '#FFFFFF' }} className="py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-normal tracking-[-0.01em] mb-2" style={{ color: '#1C1917' }}>
            {c.products.title}
          </h2>
          <p className="text-[15px]" style={{ color: '#78716C' }}>{c.products.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {c.products.items.map((item, i) => (
            <div key={item.title} className="group cursor-pointer" onClick={() => {
              const el = document.getElementById('calculator')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}>
              <div className="rounded-xl overflow-hidden mb-4 aspect-[16/10]">
                <img
                  src={images[i]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[18px] font-medium mb-1" style={{ color: '#1C1917' }}>{item.title}</h3>
              <p className="text-[14px] leading-[1.5] mb-3" style={{ color: '#78716C' }}>{item.desc}</p>
              <span className="text-[13px] font-medium" style={{ color: '#B45309' }}>{item.cta} →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
