import { X, Trash2, Minus, Plus, ArrowRight } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { useCurrency } from '../lib/CurrencyContext'
import { getContent } from '../lib/content'
import type { CartItem, WallProject } from '../lib/CartContext'
import { useNavigate } from 'react-router'

interface CartDrawerProps {
  items: CartItem[]
  wallProjects: WallProject[]
  isOpen: boolean
  total: number
  onClose: () => void
  onRemoveItem: (id: string) => void
  onRemoveWall: (id: string) => void
  onUpdateQuantity: (id: string, quantity: number) => void
  onCheckout: () => void
}

export default function CartDrawer({
  items, wallProjects, isOpen, total, onClose, onRemoveItem, onRemoveWall, onUpdateQuantity, onCheckout
}: CartDrawerProps) {
  const { lang } = useLanguage()
  const { format } = useCurrency()
  const c = getContent(lang)
  const navigate = useNavigate()

  if (!isOpen) return null

  const hasItems = items.length > 0 || wallProjects.length > 0

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/25" onClick={onClose} />
      <div className="relative w-full max-w-md h-full overflow-y-auto bg-white p-6 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[18px] font-medium" style={{ color: '#1C1917' }}>{c.cart.title}</h3>
          <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FAF8F5] transition-colors">
            <X size={20}  strokeWidth={1.5} />
          </button>
        </div>

        {!hasItems ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <p className="text-[14px] mb-4" style={{ color: '#78716C' }}>{c.cart.empty}</p>
            <button
              onClick={() => { onClose(); navigate(`/${lang}/`); }}
              className="text-[13px] font-medium flex items-center gap-1"
              style={{ color: '#B45309' }}
            >
              {c.checkout.continue} <ArrowRight size={14}  strokeWidth={1.5} />
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 mb-6">
              {/* Products */}
              {items.map(item => (
                <div key={item.id} className="flex gap-3 p-3 rounded-lg border" style={{ borderColor: '#E7E5E4' }}>
                  <img src={item.productImage} alt={item.productName} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[13px] font-medium line-clamp-2" style={{ color: '#1C1917' }}>{item.productName}</p>
                      <button onClick={() => onRemoveItem(item.id)} className="p-1 hover:bg-[#FAF8F5] rounded transition-colors flex-shrink-0">
                        <Trash2 size={14} style={{ color: '#A8A29E' }}  strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="text-[13px] font-semibold mt-1" style={{ color: '#1C1917' }}>{format(item.price)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded border flex items-center justify-center"
                        style={{ borderColor: '#E7E5E4' }}
                      >
                        <Minus size={12}  strokeWidth={1.5} />
                      </button>
                      <span className="text-[13px] font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded border flex items-center justify-center"
                        style={{ borderColor: '#E7E5E4' }}
                      >
                        <Plus size={12}  strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Wall Projects */}
              {wallProjects.map(project => (
                <div key={project.id} className="p-4 rounded-lg border" style={{ borderColor: '#E7E5E4', backgroundColor: '#FAF8F5' }}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: project.finishColor }} />
                      <p className="text-[13px] font-medium" style={{ color: '#1C1917' }}>{project.finishName}</p>
                    </div>
                    <button onClick={() => onRemoveWall(project.id)} className="p-1 hover:bg-white rounded transition-colors">
                      <Trash2 size={14} style={{ color: '#A8A29E' }}  strokeWidth={1.5} />
                    </button>
                  </div>
                  <p className="text-[12px] mb-1" style={{ color: '#78716C' }}>
                    {project.width}m × {project.height}m wall → {project.panels} panels
                  </p>
                  <div className="flex justify-between">
                    <p className="text-[12px]" style={{ color: '#78716C' }}>{format(project.pricePerPanel)} {c.calculator.perPanel}</p>
                    <p className="font-medium text-[14px]" style={{ color: '#1C1917' }}>{format(project.totalPrice)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total & Checkout */}
            <div className="border-t pt-5" style={{ borderColor: '#E7E5E4' }}>
              <div className="flex justify-between mb-5">
                <p className="text-[15px] font-medium" style={{ color: '#1C1917' }}>{c.cart.total}</p>
                <p className="font-medium text-[22px]" style={{ color: '#B45309' }}>{format(total)}</p>
              </div>
              <button
                onClick={onCheckout}
                className="w-full text-[15px] font-semibold px-6 py-4 rounded-lg transition-all hover:opacity-85"
                style={{ backgroundColor: '#1C1917', color: '#FFFFFF' }}
              >
                {c.cart.checkout}
              </button>
              <button
                onClick={() => { onClose(); navigate(`/${lang}/`); }}
                className="w-full text-[13px] mt-3 py-2 text-center hover:opacity-70 transition-opacity"
                style={{ color: '#78716C' }}
              >
                {c.checkout.continue}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
