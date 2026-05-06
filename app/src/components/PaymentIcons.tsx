import type { Language } from '../lib/content'

export default function PaymentIcons({ lang }: { lang: Language }) {
  const klarnaText = lang === 'de' ? 'Später bezahlen' : lang === 'fr' ? 'Payer plus tard' : lang === 'it' ? 'Paga dopo' : 'Pay later'
  const twintText = lang === 'de' ? 'Twint' : lang === 'fr' ? 'Twint' : lang === 'it' ? 'Twint' : 'Twint'

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-center gap-1 flex-wrap">
        {/* Visa */}
        <div className="w-10 h-7 rounded bg-white border flex items-center justify-center" style={{ borderColor: '#E7E5E4' }}>
          <svg viewBox="0 0 48 32" className="w-7 h-4.5">
            <rect fill="#1A1F71" width="48" height="32" rx="2" />
            <text x="24" y="21" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold" fontFamily="Arial">VISA</text>
          </svg>
        </div>
        {/* Mastercard */}
        <div className="w-10 h-7 rounded bg-white border flex items-center justify-center" style={{ borderColor: '#E7E5E4' }}>
          <svg viewBox="0 0 48 32" className="w-7 h-4.5">
            <rect fill="white" width="48" height="32" rx="2" />
            <circle cx="19" cy="16" r="10" fill="#EB001B" opacity="0.8" />
            <circle cx="29" cy="16" r="10" fill="#F79E1B" opacity="0.8" />
          </svg>
        </div>
        {/* PayPal */}
        <div className="w-10 h-7 rounded bg-white border flex items-center justify-center" style={{ borderColor: '#E7E5E4' }}>
          <svg viewBox="0 0 48 32" className="w-7 h-4.5">
            <rect fill="#003087" width="48" height="32" rx="2" />
            <text x="24" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial">PayPal</text>
          </svg>
        </div>
        {/* Klarna */}
        <div className="px-2 h-7 rounded bg-white border flex items-center gap-1" style={{ borderColor: '#E7E5E4' }}>
          <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect fill="#FFB3C7" width="24" height="24" rx="4" />
            <text x="12" y="17" textAnchor="middle" fill="#0A0B09" fontSize="10" fontWeight="bold">K</text>
          </svg>
          <span className="text-[10px] font-medium" style={{ color: '#1C1917' }}>{klarnaText}</span>
        </div>
        {/* Twint */}
        <div className="px-2 h-7 rounded bg-white border flex items-center gap-1" style={{ borderColor: '#E7E5E4' }}>
          <svg viewBox="0 0 24 24" className="w-4 h-4">
            <rect fill="#D51067" width="24" height="24" rx="4" />
            <text x="12" y="17" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">T</text>
          </svg>
          <span className="text-[10px] font-medium" style={{ color: '#1C1917' }}>{twintText}</span>
        </div>
      </div>
    </div>
  )
}
