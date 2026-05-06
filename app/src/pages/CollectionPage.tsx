import { getCollectionBySlug, getProductsByCollection, collections, type Product } from '../data/products'
import { useNavigate, useParams } from 'react-router'
import { ArrowLeft, SlidersHorizontal } from 'lucide-react'
import { useState, useMemo } from 'react'
import { useCurrency } from '../lib/CurrencyContext'

export default function CollectionPage() {
  const { lang, slug } = useParams<{ lang: string; slug: string }>()
  const language = (lang || 'en') as import('../lib/content').Language
  const navigate = useNavigate()
  const [sortBy, setSortBy] = useState('default')
  const [filterOpen, setFilterOpen] = useState(false)

  const collection = getCollectionBySlug(slug || '')
  const allProducts = getProductsByCollection(slug || '')

  const sortedProducts = useMemo(() => {
    let sorted = [...allProducts]
    if (sortBy === 'price-low') sorted.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-high') sorted.sort((a, b) => b.price - a.price)
    if (sortBy === 'sale') sorted.sort((a, b) => (b.originalPrice ? 1 : 0) - (a.originalPrice ? 1 : 0))
    return sorted
  }, [allProducts, sortBy])

  const goTo = (path: string) => {
    navigate(`/${language}${path}`)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4" style={{ color: '#1C1917' }}>Collection not found</h1>
          <button onClick={() => goTo('/')} className="text-[14px] font-medium" style={{ color: '#B45309' }}>← Back to home</button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Breadcrumb + Header */}
      <div className="border-b" style={{ borderColor: '#E7E5E4' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-4">
          <button
            onClick={() => goTo('/')}
            className="flex items-center gap-2 text-[13px] mb-4 hover:opacity-70 transition-opacity"
            style={{ color: '#78716C' }}
          >
            <ArrowLeft size={14}  strokeWidth={1.5} /> PanelsOfWood
          </button>
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-light tracking-[-0.02em] mb-2" style={{ color: '#1C1917' }}>
            {collection.name[language]}
          </h1>
          <p className="text-[15px] max-w-2xl" style={{ color: '#78716C' }}>{collection.description[language]}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b" style={{ borderColor: '#E7E5E4' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-3 flex items-center justify-between">
          <span className="text-[13px]" style={{ color: '#78716C' }}>
            {sortedProducts.length} {language === 'de' ? 'Produkte' : language === 'fr' ? 'produits' : language === 'it' ? 'prodotti' : 'products'}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="lg:hidden flex items-center gap-2 text-[13px] font-medium px-3 py-2 rounded-lg border"
              style={{ borderColor: '#E7E5E4', color: '#1C1917' }}
            >
              <SlidersHorizontal size={16}  strokeWidth={1.5} /> Filter
            </button>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-[13px] py-2 px-3 rounded-lg border outline-none bg-white cursor-pointer"
              style={{ borderColor: '#E7E5E4', color: '#1C1917' }}
            >
              <option value="default">{language === 'de' ? 'Standard' : language === 'fr' ? 'Par défaut' : language === 'it' ? 'Predefinito' : 'Default'}</option>
              <option value="price-low">{language === 'de' ? 'Preis: niedrig' : language === 'fr' ? 'Prix: bas' : language === 'it' ? 'Prezzo: basso' : 'Price: low'}</option>
              <option value="price-high">{language === 'de' ? 'Preis: hoch' : language === 'fr' ? 'Prix: haut' : language === 'it' ? 'Prezzo: alto' : 'Price: high'}</option>
              <option value="sale">{language === 'de' ? 'Aktionen' : language === 'fr' ? 'Promotions' : language === 'it' ? 'Promozioni' : 'On sale'}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-8 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} lang={language} onClick={() => goTo(`/products/${product.slug}`)} />
          ))}
        </div>
      </div>

      {/* Other collections */}
      <div className="border-t" style={{ borderColor: '#E7E5E4' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
          <h2 className="text-[18px] font-medium mb-6" style={{ color: '#1C1917' }}>
            {language === 'de' ? 'Weitere Kollektionen' : language === 'fr' ? 'Autres collections' : language === 'it' ? 'Altre collezioni' : 'Other collections'}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {collections.filter(c => c.slug !== slug).slice(0, 5).map(col => (
              <button
                key={col.id}
                onClick={() => goTo(`/collections/${col.slug}`)}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden text-left"
              >
                <img src={col.image} alt={col.name[language]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-[13px] font-medium text-white">{col.name[language]}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product, lang, onClick }: { product: Product; lang: import('../lib/content').Language; onClick: () => void }) {
  const { format } = useCurrency()
  return (
    <button onClick={onClick} className="group text-left w-full">
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-[#FAF8F5]">
        <img
          src={product.images[0]}
          alt={product.name[lang]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded" style={{ backgroundColor: '#B45309', color: '#FFFFFF' }}>
            {product.badge[lang]}
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-white" style={{ color: '#B45309' }}>
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <span className="bg-white text-[12px] font-semibold px-4 py-2.5 rounded-lg shadow-lg" style={{ color: '#1C1917' }}>
            {lang === 'de' ? 'Schnellansicht' : lang === 'fr' ? 'Vue rapide' : lang === 'it' ? 'Vista rapida' : 'Quick view'}
          </span>
        </div>
      </div>
      <h3 className="text-[13px] lg:text-[14px] font-medium mb-1 line-clamp-1" style={{ color: '#1C1917' }}>{product.name[lang]}</h3>
      <p className="text-[12px] mb-1.5" style={{ color: '#78716C' }}>{product.subtitle[lang]}</p>
      <div className="flex items-center gap-2">
        <span className="text-[14px] lg:text-[15px] font-semibold" style={{ color: '#1C1917' }}>{format(product.price)}</span>
        {product.originalPrice && (
          <span className="text-[13px] line-through" style={{ color: '#A8A29E' }}>{format(product.originalPrice)}</span>
        )}
      </div>
    </button>
  )
}
