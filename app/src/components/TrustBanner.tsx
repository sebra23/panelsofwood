import { Truck, RotateCcw, Leaf } from 'lucide-react'
import type { Language } from '../lib/content'

interface TrustBadge {
  icon: typeof Truck
  label: Record<Language, string>
}

const badges: TrustBadge[] = [
  { icon: Truck, label: { de: 'Kostenloser Versand', fr: 'Livraison Gratuite', it: 'Spedizione Gratuita', en: 'Free Shipping' } },
  { icon: Leaf, label: { de: 'FSC-Zertifiziert', fr: 'Certifié FSC', it: 'Certificato FSC', en: 'FSC Certified' } },
  { icon: RotateCcw, label: { de: '30 Tage Rückgabe', fr: 'Retour 30 Jours', it: 'Reso 30 Giorni', en: '30-Day Returns' } },
]

export default function TrustBanner({ lang }: { lang: Language }) {
  return (
    <div className="border-b py-3" style={{ borderColor: '#E7E5E4', backgroundColor: '#FAF8F5' }}>
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-center gap-x-8 gap-y-2">
          {badges.map((b, i) => (
            <div key={i} className={`flex items-center gap-1.5 ${i === 1 ? 'hidden sm:flex' : ''}`}>
              <b.icon size={14} style={{ color: '#B45309' }}  strokeWidth={1.5} />
              <span className="text-[11px] font-medium tracking-wide uppercase" style={{ color: '#78716C' }}>{b.label[lang]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
