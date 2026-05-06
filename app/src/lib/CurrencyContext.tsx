import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type Currency = 'CHF' | 'EUR'

const RATE = 1.05 // 1 EUR = 1.05 CHF

interface CurrencyContextType {
  currency: Currency
  setCurrency: (c: Currency) => void
  format: (chfAmount: number) => string
  dualFormat: (chfAmount: number) => { primary: string; secondary: string }
}

const CurrencyContext = createContext<CurrencyContextType | null>(null)

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    try {
      return (localStorage.getItem('panelsofwood-currency') as Currency) || 'CHF'
    } catch {
      return 'CHF'
    }
  })

  const setCurrency = useCallback((c: Currency) => {
    setCurrencyState(c)
    try {
      localStorage.setItem('panelsofwood-currency', c)
    } catch {
      // ignore
    }
  }, [])

  const toEUR = useCallback((chf: number) => Math.round((chf / RATE) * 100) / 100, [])

  const format = useCallback(
    (chfAmount: number) => {
      if (currency === 'CHF') {
        return `CHF ${chfAmount.toLocaleString('de-CH', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
      }
      const eur = toEUR(chfAmount)
      return `€ ${eur.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
    },
    [currency, toEUR]
  )

  const dualFormat = useCallback(
    (chfAmount: number) => {
      const chfStr = `CHF ${chfAmount.toLocaleString('de-CH', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
      const eur = toEUR(chfAmount)
      const eurStr = `€ ${eur.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
      if (currency === 'CHF') {
        return { primary: chfStr, secondary: eurStr }
      }
      return { primary: eurStr, secondary: chfStr }
    },
    [currency, toEUR]
  )

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, format, dualFormat }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext)
  if (!ctx) throw new Error('useCurrency must be inside CurrencyProvider')
  return ctx
}
