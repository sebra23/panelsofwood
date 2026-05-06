import { useState } from 'react'
import { X, Check, CreditCard } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { getContent } from '../lib/content'

interface CheckoutModalProps {
  isOpen: boolean
  total: number
  onClose: () => void
  onSuccess: () => void
}

export default function CheckoutModal({ isOpen, total, onClose, onSuccess }: CheckoutModalProps) {
  const { lang } = useLanguage()
  const c = getContent(lang)
  const [step, setStep] = useState(0)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: '#FAF8F5', color: '#78716C' }}>
              {step === 0 ? c.checkout.step1 : c.checkout.step2}
            </span>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FAF8F5] transition-colors">
            <X size={20}  strokeWidth={1.5} />
          </button>
        </div>

        {/* Step 1 — Contact */}
        {step === 0 && (
          <>
            <h3 className="text-[20px] font-medium mb-6" style={{ color: '#1C1917' }}>{c.checkout.title}</h3>
            <div className="space-y-4 mb-6">
              <input type="text" placeholder={c.checkout.name} className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none focus:border-[#B45309] transition-colors" style={{ borderColor: '#E7E5E4' }} />
              <input type="email" placeholder={c.checkout.email} className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none focus:border-[#B45309] transition-colors" style={{ borderColor: '#E7E5E4' }} />
              <input type="tel" placeholder={c.checkout.phone} className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none focus:border-[#B45309] transition-colors" style={{ borderColor: '#E7E5E4' }} />
              <input type="text" placeholder={c.checkout.address} className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none focus:border-[#B45309] transition-colors" style={{ borderColor: '#E7E5E4' }} />
            </div>

            <div className="mb-6">
              <p className="text-[12px] font-semibold tracking-[0.06em] uppercase mb-3" style={{ color: '#78716C' }}>{c.checkout.delivery}</p>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:border-[#B45309] transition-colors" style={{ borderColor: '#E7E5E4' }}>
                  <input type="radio" name="delivery" defaultChecked className="accent-[#B45309]" />
                  <span className="text-[14px]" style={{ color: '#1C1917' }}>{c.checkout.deliveryStandard}</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-lg border cursor-pointer hover:border-[#B45309] transition-colors" style={{ borderColor: '#E7E5E4' }}>
                  <input type="radio" name="delivery" className="accent-[#B45309]" />
                  <span className="text-[14px]" style={{ color: '#1C1917' }}>{c.checkout.deliveryExpress}</span>
                </label>
              </div>
            </div>

            <button
              onClick={() => setStep(1)}
              className="w-full text-[15px] font-semibold px-6 py-4 rounded-lg transition-all hover:opacity-85"
              style={{ backgroundColor: '#B45309', color: '#FFFFFF' }}
            >
              {c.cart.checkout}
            </button>
          </>
        )}

        {/* Step 2 — Payment */}
        {step === 1 && (
          <>
            <div className="mb-6">
              <p className="text-[12px] font-semibold tracking-[0.06em] uppercase mb-3" style={{ color: '#78716C' }}>{c.checkout.payment}</p>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {['Card', 'PayPal', 'Twint'].map((m) => (
                  <button key={m} className="p-3 rounded-lg border text-center text-[13px] font-medium hover:border-[#B45309] transition-colors" style={{ borderColor: '#E7E5E4', color: '#1C1917' }}>
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="relative">
                <CreditCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#78716C' }}  strokeWidth={1.5} />
                <input type="text" placeholder={c.checkout.cardNumber} className="w-full pl-11 pr-4 py-3 rounded-lg border text-[14px] outline-none focus:border-[#B45309] transition-colors" style={{ borderColor: '#E7E5E4' }} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder={c.checkout.expiry} className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none focus:border-[#B45309] transition-colors" style={{ borderColor: '#E7E5E4' }} />
                <input type="text" placeholder={c.checkout.cvc} className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none focus:border-[#B45309] transition-colors" style={{ borderColor: '#E7E5E4' }} />
              </div>
            </div>

            <div className="border-t pt-4 mb-6 flex justify-between" style={{ borderColor: '#E7E5E4' }}>
              <p className="text-[15px] font-medium" style={{ color: '#1C1917' }}>Total</p>
              <p className="font-medium text-[20px]" style={{ color: '#B45309' }}>CHF {total.toLocaleString()}</p>
            </div>

            <button
              onClick={onSuccess}
              className="w-full text-[15px] font-semibold px-6 py-4 rounded-lg transition-all hover:opacity-85"
              style={{ backgroundColor: '#B45309', color: '#FFFFFF' }}
            >
              {c.checkout.pay} CHF {total.toLocaleString()}
            </button>
          </>
        )}

        {/* Success */}
        {step === 2 && (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ backgroundColor: '#15803D' }}>
              <Check size={28} color="#FFFFFF"  strokeWidth={1.5} />
            </div>
            <h3 className="text-[22px] font-medium mb-2" style={{ color: '#1C1917' }}>{c.checkout.success}</h3>
            <p className="text-[14px] mb-1" style={{ color: '#78716C' }}>{c.checkout.successMsg}</p>
            <p className="text-[14px] font-medium mb-6" style={{ color: '#1C1917' }}>CHF {total.toLocaleString()}</p>
            <button
              onClick={onClose}
              className="text-[14px] font-medium px-6 py-3 border rounded-lg transition-all hover:bg-[#1C1917] hover:text-white"
              style={{ borderColor: '#E7E5E4', color: '#1C1917' }}
            >
              {c.checkout.continue}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
