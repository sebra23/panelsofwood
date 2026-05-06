import { useState, useCallback } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import { getContent } from '../lib/content'
import type { WallProject } from '../lib/CartContext'
import { Minus, Plus, ShoppingCart } from 'lucide-react'

interface CalculatorProps {
  onAddWallProject: (project: Omit<WallProject, 'id'>) => void
}

export default function Calculator({ onAddWallProject }: CalculatorProps) {
  const { lang } = useLanguage()
  const c = getContent(lang)
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [finishIndex, setFinishIndex] = useState(0)
  const finish = c.priceBar.finishes[finishIndex]

  const PANEL_W = 0.6
  const PANEL_H = 2.4

  const panels = useCallback(() => {
    const w = parseFloat(width) || 0
    const h = parseFloat(height) || 0
    if (w <= 0 || h <= 0) return 0
    return Math.ceil(w / PANEL_W) * Math.ceil(h / PANEL_H)
  }, [width, height])

  const coverage = useCallback(() => {
    const w = parseFloat(width) || 0
    const h = parseFloat(height) || 0
    return w * h
  }, [width, height])

  const total = panels() * finish.price

  const adjust = (val: string, delta: number, setter: (v: string) => void) => {
    const cur = parseFloat(val) || 0
    const next = Math.max(0, +(cur + delta).toFixed(1))
    setter(next > 0 ? next.toFixed(1) : '')
  }

  const handleAdd = () => {
    const p = panels()
    if (p <= 0) return
    onAddWallProject({
      width: parseFloat(width),
      height: parseFloat(height),
      panels: p,
      finishName: finish.name,
      finishColor: finish.color,
      pricePerPanel: finish.price,
      totalPrice: total,
    })
  }

  return (
    <section id="calculator" style={{ backgroundColor: '#FAF8F5' }} className="py-16 md:py-24">
      <div className="max-w-[700px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-normal tracking-[-0.01em] mb-2" style={{ color: '#1C1917' }}>
            {c.calculator.title}
          </h2>
          <p className="text-[15px]" style={{ color: '#78716C' }}>{c.calculator.subtitle}</p>
        </div>

        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
          {/* Dimensions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {[
              { label: c.calculator.widthLabel, value: width, set: setWidth },
              { label: c.calculator.heightLabel, value: height, set: setHeight },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-[11px] font-semibold tracking-[0.06em] uppercase mb-3" style={{ color: '#78716C' }}>
                  {field.label}
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => adjust(field.value, -0.1, field.set)}
                    className="w-10 h-10 rounded-lg border flex items-center justify-center transition-colors hover:bg-[#FAF8F5]"
                    style={{ borderColor: '#E7E5E4' }}
                  >
                    <Minus size={16}  strokeWidth={1.5} />
                  </button>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={field.value}
                    onChange={(e) => field.set(e.target.value)}
                    className="flex-1 text-center text-[32px] font-light py-2 border-b-2 outline-none bg-transparent transition-colors focus:border-[#B45309]"
                    style={{ borderColor: '#E7E5E4', color: '#1C1917' }}
                    placeholder="0.0"
                  />
                  <button
                    onClick={() => adjust(field.value, 0.1, field.set)}
                    className="w-10 h-10 rounded-lg border flex items-center justify-center transition-colors hover:bg-[#FAF8F5]"
                    style={{ borderColor: '#E7E5E4' }}
                  >
                    <Plus size={16}  strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Finish */}
          <div className="mb-8">
            <label className="block text-[11px] font-semibold tracking-[0.06em] uppercase mb-3" style={{ color: '#78716C' }}>
              {c.calculator.finishLabel}
            </label>
            <div className="flex flex-wrap gap-3">
              {c.priceBar.finishes.map((f, i) => (
                <button
                  key={f.name}
                  onClick={() => setFinishIndex(i)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg border-2 transition-all text-left ${
                    finishIndex === i ? 'border-[#B45309]' : 'border-transparent hover:border-[#E7E5E4]'
                  }`}
                  style={{ backgroundColor: finishIndex === i ? '#FFF7ED' : '#FAF8F5' }}
                >
                  <div className="w-5 h-5 rounded-full" style={{ backgroundColor: f.color }} />
                  <div>
                    <p className="text-[13px] font-medium" style={{ color: '#1C1917' }}>{f.name}</p>
                    <p className="text-[11px]" style={{ color: '#78716C' }}>CHF {f.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          {panels() > 0 && (
            <div className="border-t mb-8" style={{ borderColor: '#E7E5E4' }}>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <p className="text-[11px] font-semibold tracking-[0.06em] uppercase mb-1" style={{ color: '#78716C' }}>
                    {c.calculator.panelsNeeded}
                  </p>
                  <p className="text-[32px] font-light" style={{ color: '#1C1917' }}>{panels()}</p>
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-semibold tracking-[0.06em] uppercase mb-1" style={{ color: '#78716C' }}>
                    {c.calculator.coverage}
                  </p>
                  <p className="text-[32px] font-light" style={{ color: '#1C1917' }}>
                    {coverage().toFixed(1)}<span className="text-[14px]"> m²</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-semibold tracking-[0.06em] uppercase mb-1" style={{ color: '#78716C' }}>
                    {c.calculator.total}
                  </p>
                  <p className="text-[32px] font-semibold" style={{ color: '#B45309' }}>
                    CHF {total.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={handleAdd}
            disabled={panels() <= 0}
            className="w-full flex items-center justify-center gap-2 text-[15px] font-semibold px-6 py-4 rounded-lg transition-all hover:opacity-85 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#B45309', color: '#FFFFFF' }}
          >
            <ShoppingCart size={18}  strokeWidth={1.5} />
            {panels() > 0
              ? `${c.calculator.addToCart} — CHF ${total.toLocaleString()}`
              : c.calculator.addToCart}
          </button>
        </div>
      </div>
    </section>
  )
}
