import { useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import { useCurrency } from '../lib/CurrencyContext'
import { getContent } from '../lib/content'
import { useCart } from '../lib/CartContext'
import Header from '../sections/Header'
import CartDrawer from '../sections/CartDrawer'
import Footer from '../sections/Footer'
import MarqueeBanner from './MarqueeBanner'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const { lang } = useLanguage()
  const { format } = useCurrency()
  const cart = useCart()
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [checkoutStep, setCheckoutStep] = useState(0)
  const c = getContent(lang)

  const handleCheckout = () => {
    cart.setIsOpen(false)
    setCheckoutOpen(true)
    setCheckoutStep(0)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MarqueeBanner lang={lang} />
      <Header cartCount={cart.itemCount} onCartClick={() => cart.setIsOpen(true)} />

      <main className="flex-1">
        {children}
      </main>

      <Footer />

      <CartDrawer
        items={cart.items}
        wallProjects={cart.wallProjects}
        isOpen={cart.isOpen}
        total={cart.total}
        onClose={() => cart.setIsOpen(false)}
        onRemoveItem={cart.removeItem}
        onRemoveWall={cart.removeWallProject}
        onUpdateQuantity={cart.updateQuantity}
        onCheckout={handleCheckout}
      />

      {/* Checkout Modal */}
      {checkoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setCheckoutOpen(false)} />
          <div className="relative w-full max-w-lg bg-white rounded-xl p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-[20px] font-medium mb-6" style={{ color: '#1C1917' }}>{c.checkout.title}</h3>

            {checkoutStep === 0 && (
              <>
                <div className="flex items-center gap-2 mb-4 p-3 rounded-lg" style={{ backgroundColor: '#FAF8F5' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 12 15 16 10"/></svg>
                  <span className="text-[12px]" style={{ color: '#78716C' }}>
                    {lang === 'de' ? 'SSL-verschlüsselte Übertragung' : lang === 'fr' ? 'Transmission cryptée SSL' : lang === 'it' ? 'Trasmissione crittografata SSL' : 'SSL encrypted transmission'}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <input type="text" placeholder={c.checkout.name} className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none focus:border-[#B45309]" style={{ borderColor: '#E7E5E4' }} />
                  <input type="email" placeholder={c.checkout.email} className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none focus:border-[#B45309]" style={{ borderColor: '#E7E5E4' }} />
                  <input type="tel" placeholder={c.checkout.phone} className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none focus:border-[#B45309]" style={{ borderColor: '#E7E5E4' }} />
                  <input type="text" placeholder={c.checkout.address} className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none focus:border-[#B45309]" style={{ borderColor: '#E7E5E4' }} />
                </div>
                <div className="mb-6">
                  <p className="text-[12px] font-semibold uppercase tracking-wider mb-3" style={{ color: '#78716C' }}>{c.checkout.delivery}</p>
                  <label className="flex items-center gap-3 p-3 rounded-lg border mb-2" style={{ borderColor: '#E7E5E4' }}>
                    <input type="radio" name="delivery" defaultChecked className="accent-[#B45309]" />
                    <span className="text-[14px]" style={{ color: '#1C1917' }}>{c.checkout.deliveryStandard}</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-lg border" style={{ borderColor: '#E7E5E4' }}>
                    <input type="radio" name="delivery" className="accent-[#B45309]" />
                    <span className="text-[14px]" style={{ color: '#1C1917' }}>{c.checkout.deliveryExpress}</span>
                  </label>
                </div>

                <div className="mb-6">
                  <p className="text-[12px] font-semibold uppercase tracking-wider mb-3" style={{ color: '#78716C' }}>{c.checkout.payment}</p>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {['Card', 'PayPal', 'Twint'].map(m => (
                      <button key={m} className="p-3 rounded-lg border text-center text-[13px] font-medium hover:border-[#B45309] transition-colors" style={{ borderColor: '#E7E5E4', color: '#1C1917' }}>{m}</button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setCheckoutStep(1)}
                  className="w-full text-[15px] font-semibold py-4 rounded-lg text-white"
                  style={{ backgroundColor: '#1C1917' }}
                >
                  {c.cart.checkout}
                </button>
              </>
            )}

            {checkoutStep === 1 && (
              <>
                <div className="mb-6">
                  <p className="text-[12px] font-semibold uppercase tracking-wider mb-3" style={{ color: '#78716C' }}>{c.checkout.payment}</p>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {['Card', 'PayPal', 'Twint'].map(m => (
                      <button key={m} className="p-3 rounded-lg border text-center text-[13px] font-medium hover:border-[#B45309] transition-colors" style={{ borderColor: '#E7E5E4', color: '#1C1917' }}>{m}</button>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <input type="text" placeholder={c.checkout.cardNumber} className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none focus:border-[#B45309]" style={{ borderColor: '#E7E5E4' }} />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder={c.checkout.expiry} className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none focus:border-[#B45309]" style={{ borderColor: '#E7E5E4' }} />
                    <input type="text" placeholder={c.checkout.cvc} className="w-full px-4 py-3 rounded-lg border text-[14px] outline-none focus:border-[#B45309]" style={{ borderColor: '#E7E5E4' }} />
                  </div>
                </div>
                <div className="border-t pt-4 mb-6 flex justify-between" style={{ borderColor: '#E7E5E4' }}>
                  <p className="text-[15px] font-medium" style={{ color: '#1C1917' }}>Total</p>
                  <p className="font-medium text-[20px]" style={{ color: '#B45309' }}>{format(cart.total)}</p>
                </div>
                <button
                  onClick={() => { setCheckoutStep(2); cart.clearCart(); }}
                  className="w-full text-[15px] font-semibold py-4 rounded-lg text-white"
                  style={{ backgroundColor: '#1C1917' }}
                >
                  {c.checkout.pay} {format(cart.total)}
                </button>
              </>
            )}

            {checkoutStep === 2 && (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center" style={{ backgroundColor: '#15803D' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 className="text-[22px] font-medium mb-2" style={{ color: '#1C1917' }}>{c.checkout.success}</h3>
                <p className="text-[14px] mb-1" style={{ color: '#78716C' }}>{c.checkout.successMsg}</p>
                <p className="text-[14px] font-medium mb-6" style={{ color: '#1C1917' }}>{format(cart.total)}</p>

                {/* AfterShip-style tracking */}
                <div className="text-left p-4 rounded-lg mb-6" style={{ backgroundColor: '#FAF8F5', border: '1px solid #E7E5E4' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span className="text-[13px] font-medium" style={{ color: '#1C1917' }}>
                      {lang === 'de' ? 'Live Sendungsverfolgung' : lang === 'fr' ? 'Suivi en direct' : lang === 'it' ? 'Tracciamento live' : 'Live tracking'}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#15803D' }} />
                      <span className="text-[12px]" style={{ color: '#78716C' }}>
                        {lang === 'de' ? 'Bestellung bestätigt — Tracking-Code wird per E-Mail gesendet' : lang === 'fr' ? 'Commande confirmée — Code de suivi envoyé par email' : lang === 'it' ? 'Ordine confermato — Codice di tracciamento inviato via email' : 'Order confirmed — Tracking code sent via email'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#B45309' }} />
                      <span className="text-[12px]" style={{ color: '#78716C' }}>Powered by AfterShip</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setCheckoutOpen(false)}
                  className="text-[14px] font-medium px-6 py-3 border rounded-lg"
                  style={{ borderColor: '#E7E5E4', color: '#1C1917' }}
                >
                  {c.checkout.continue}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
