import type { Language } from '../lib/content'

interface MarqueeBannerProps {
  lang: Language
}

const messages: Record<Language, string[]> = {
  de: [
    '✦ Kostenloser Versand ab CHF 200',
    '✦ 30 Tage Zufriedenheitsgarantie',
    '✦ Lieferung in 8-12 Tagen',
    '✦ FSC-zertifiziertes Holz',
    '✦ Kein Bohren nötig — Mieterfreundlich',
  ],
  fr: [
    '✦ Livraison gratuite dès CHF 200',
    '✦ Garantie de satisfaction 30 jours',
    '✦ Livraison en 8-12 jours',
    '✦ Bois certifié FSC',
    '✦ Aucun perçage nécessaire',
  ],
  it: [
    '✦ Spedizione gratuita da CHF 200',
    '✦ Garanzia di soddisfazione 30 giorni',
    '✦ Consegna in 8-12 giorni',
    '✦ Legno certificato FSC',
    '✦ Nessun trapano necessario',
  ],
  en: [
    '✦ Free shipping on orders over CHF 200',
    '✦ 30-day satisfaction guarantee',
    '✦ 8-12 day delivery',
    '✦ FSC-certified wood',
    '✦ No drilling needed — renter friendly',
  ],
}

export default function MarqueeBanner({ lang }: MarqueeBannerProps) {
  const items = messages[lang]
  const doubled = [...items, ...items]

  return (
    <div
      className="relative overflow-hidden whitespace-nowrap py-1.5"
      style={{ backgroundColor: '#292524' }}
    >
      <div className="animate-marquee inline-flex items-center gap-12">
        {doubled.map((text, i) => (
          <span key={i} className="text-[11px] font-medium tracking-wide" style={{ color: '#A8A29E' }}>
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
