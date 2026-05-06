import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export interface CartItem {
  id: string
  productSlug: string
  productName: string
  productImage: string
  variantName?: string
  variantColor?: string
  quantity: number
  price: number
  totalPrice: number
}

export interface WallProject {
  id: string
  width: number
  height: number
  panels: number
  finishName: string
  finishColor: string
  pricePerPanel: number
  totalPrice: number
}

interface CartContextType {
  items: CartItem[]
  wallProjects: WallProject[]
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  addProduct: (item: Omit<CartItem, 'id' | 'totalPrice'>) => void
  addWallProject: (project: Omit<WallProject, 'id'>) => void
  removeItem: (id: string) => void
  removeWallProject: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  total: number
  itemCount: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [wallProjects, setWallProjects] = useState<WallProject[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addProduct = useCallback((item: Omit<CartItem, 'id' | 'totalPrice'>) => {
    setItems(prev => {
      const existing = prev.find(
        i => i.productSlug === item.productSlug && i.variantName === item.variantName
      )
      if (existing) {
        const newQty = existing.quantity + item.quantity
        return prev.map(i =>
          i.id === existing.id
            ? { ...i, quantity: newQty, totalPrice: newQty * i.price }
            : i
        )
      }
      const newItem: CartItem = {
        ...item,
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        totalPrice: item.quantity * item.price,
      }
      return [...prev, newItem]
    })
    setIsOpen(true)
  }, [])

  const addWallProject = useCallback((project: Omit<WallProject, 'id'>) => {
    setWallProjects(prev => [
      ...prev,
      { ...project, id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}` }
    ])
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])

  const removeWallProject = useCallback((id: string) => {
    setWallProjects(prev => prev.filter(p => p.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems(prev => prev.filter(i => i.id !== id))
      return
    }
    setItems(prev => prev.map(i =>
      i.id === id ? { ...i, quantity, totalPrice: quantity * i.price } : i
    ))
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
    setWallProjects([])
  }, [])

  const productTotal = items.reduce((sum, i) => sum + i.totalPrice, 0)
  const wallTotal = wallProjects.reduce((sum, p) => sum + p.totalPrice, 0)
  const total = productTotal + wallTotal
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0) + wallProjects.length

  return (
    <CartContext.Provider value={{
      items,
      wallProjects,
      isOpen,
      setIsOpen,
      addProduct,
      addWallProject,
      removeItem,
      removeWallProject,
      updateQuantity,
      clearCart,
      total,
      itemCount,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be inside CartProvider')
  return ctx
}
