import { useState, useRef, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { getProductBySlug, getProductsByCollection, type Product } from '../data/products'
import { getContent } from '../lib/content'
import { ArrowLeft, Minus, Plus, ShoppingCart, Check, Star, ChevronDown, Smartphone, Factory, Home, Phone, MessageCircle, FileText, Leaf, Shield, Truck, CreditCard, Ruler } from 'lucide-react'
import { useCart } from '../lib/CartContext'
import { useCurrency } from '../lib/CurrencyContext'
import PaymentIcons from '../components/PaymentIcons'
import ContactForm from '../components/ContactForm'

export default function ProductPage() {
  const { lang, slug } = useParams<{ lang: string; slug: string }>()
  const language = (lang || 'en') as import('../lib/content').Language
  const c = getContent(language)
  const navigate = useNavigate()
  const cart = useCart()
  const { format, dualFormat } = useCurrency()
  const [contactOpen, setContactOpen] = useState(false)

  const product = getProductBySlug(slug || '')

  // JSON-LD Product Schema
  useEffect(() => {
    if (!product) return
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name[language],
      image: product.images.map(img => `https://panelsofwood.com${img}`),
      description: product.description[language],
      sku: product.id,
      brand: { '@type': 'Brand', name: 'PanelsOfWood' },
      offers: {
        '@type': 'Offer',
        url: `https://panelsofwood.com/${language}/products/${product.slug}`,
        priceCurrency: 'CHF',
        price: product.price.toString(),
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2026-12-31',
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
          merchantReturnDays: 30,
          returnMethod: 'https://schema.org/ReturnByMail',
          returnFees: 'https://schema.org/FreeReturn'
        },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'CHF' },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 3, unitCode: 'DAY' },
            transitTime: { '@type': 'QuantitativeValue', minValue: 8, maxValue: 12, unitCode: 'DAY' }
          }
        }
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '200',
        bestRating: '5'
      }
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    script.id = 'product-schema'
    document.head.appendChild(script)
    return () => { const s = document.getElementById('product-schema'); if (s) s.remove() }
  }, [product, language])
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  // Unified calculator state
  const [wallWidth, setWallWidth] = useState('')
  const [wallHeight, setWallHeight] = useState('')

  // Info accordion
  const [openInfo, setOpenInfo] = useState<string | null>('desc')
  const [reviewIndex, setReviewIndex] = useState(0)

  // Touch swipe for mobile gallery
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4" style={{ color: '#1C1917' }}>Product not found</h1>
          <button onClick={() => navigate(`/${language}/`)} className="text-[14px] font-medium" style={{ color: '#B45309' }}>← Back to home</button>
        </div>
      </div>
    )
  }

  const related = getProductsByCollection(product.collection).filter(p => p.id !== product.id).slice(0, 4)
  const reviews = product.reviews || []

  // Calculator logic: 240 x 60 cm panels
  const PANEL_W_CM = 60
  const PANEL_H_CM = 240
  const calcPanelsFromCm = (w: number, h: number) => Math.ceil(w / PANEL_W_CM) * Math.ceil(h / PANEL_H_CM)

  // When CM changes -> update quantity
  const updateQuantityFromCm = (newWidth: string, newHeight: string) => {
    const w = parseFloat(newWidth) || 0
    const h = parseFloat(newHeight) || 0
    if (w > 0 && h > 0) {
      const panels = calcPanelsFromCm(w, h)
      setQuantity(Math.max(1, panels))
    }
  }

  // When quantity changes -> always update CM: height=240, width=qty*60
  const updateCmFromQuantity = (newQty: number) => {
    setQuantity(newQty)
    const estimatedWidth = newQty * PANEL_W_CM
    setWallHeight(PANEL_H_CM.toString())
    setWallWidth(estimatedWidth.toString())
  }

  const handleWidthChange = (val: string) => {
    setWallWidth(val)
    updateQuantityFromCm(val, wallHeight)
  }

  const handleHeightChange = (val: string) => {
    setWallHeight(val)
    updateQuantityFromCm(wallWidth, val)
  }

  const handleQuantityChange = (newQty: number) => {
    if (newQty < 1) return
    updateCmFromQuantity(newQty)
  }

  const handleAddToCart = () => {
    cart.addProduct({
      productSlug: product.slug,
      productName: product.name[language],
      productImage: product.images[0],
      quantity,
      price: product.price,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const goTo = (path: string) => {
    navigate(`/${language}${path}`)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.changedTouches[0].screenX }
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) setSelectedImage(prev => (prev + 1) % product.images.length)
      else setSelectedImage(prev => (prev - 1 + product.images.length) % product.images.length)
    }
  }

  const today = new Date()
  const orderDate = new Date(today)
  const prepDate = new Date(today); prepDate.setDate(prepDate.getDate() + 3)
  const deliveryDate = new Date(today); deliveryDate.setDate(deliveryDate.getDate() + 10)
  const months: Record<string, string[]> = {
    de: ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'],
    fr: ['jan','fév','mars','avr','mai','juin','juil','août','sept','oct','nov','déc'],
    it: ['gen','feb','mar','apr','mag','giu','lug','ago','set','ott','nov','dic'],
    en: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  }
  const fmt = (d: Date) => `${d.getDate()}. ${months[language][d.getMonth()]}`

  const infoSections = [
    { key: 'desc', icon: FileText, label: c.productPage.infoDesc, content: product.longDescription?.[language] || product.description[language] },
    { key: 'materials', icon: Leaf, label: c.productPage.infoMaterials, content: language === 'de' ? 'Alle unsere Holzpaneele werden aus FSC-zertifiziertem Holz hergestellt. Der schwarze Akustikfilz besteht aus recyceltem Polyester mit einer Dichte von 200g/m². Die Oberfläche wird mit einem umweltfreundlichen, lösemittelfreien Öl behandelt.' : language === 'fr' ? 'Tous nos panneaux de bois sont fabriqués à partir de bois certifié FSC. Le feutre acoustique noir est en polyester recyclé avec une densité de 200g/m². La surface est traitée avec une huile écologique sans solvant.' : language === 'it' ? 'Tutti i nostri pannelli in legno sono realizzati in legno certificato FSC. Il feltro acustico nero è in poliestere riciclato con una densità di 200g/m². La superficie è trattata con un olio ecologico senza solventi.' : 'All our wood panels are made from FSC-certified wood. The black acoustic felt is made from recycled polyester with a density of 200g/m². The surface is treated with an eco-friendly, solvent-free oil.' },
    { key: 'guarantee', icon: Shield, label: c.productPage.infoGuarantee, content: language === 'de' ? 'Wir bieten eine 30-tägige Zufriedenheitsgarantie. Wenn Sie mit Ihren Paneelen nicht zufrieden sind, können Sie sie zurückgeben und erhalten eine volle Rückerstattung. Die Paneele müssen dabei im Originalzustand sein.' : language === 'fr' ? 'Nous offrons une garantie de satisfaction de 30 jours. Si vous n\'êtes pas satisfait de vos panneaux, vous pouvez les retourner et obtenir un remboursement complet. Les panneaux doivent être dans leur état d\'origine.' : language === 'it' ? 'Offriamo una garanzia di soddisfazione di 30 giorni. Se non sei soddisfatto dei tuoi pannelli, puoi restituirli e ricevere un rimborso completo. I pannelli devono essere nelle loro condizioni originali.' : 'We offer a 30-day satisfaction guarantee. If you are not satisfied with your panels, you can return them and receive a full refund. The panels must be in their original condition.' },
    { key: 'delivery', icon: Truck, label: c.productPage.infoDelivery, content: language === 'de' ? 'Lieferzeit: 8-12 Werktage innerhalb der Schweiz. Die Lieferung ist kostenlos ab einem Bestellwert von CHF 200. Für Bestellungen unter CHF 200 betragen die Versandkosten CHF 9.90. Express-Lieferung (+CHF 15) am nächsten Werktag möglich.' : language === 'fr' ? 'Délai de livraison: 8-12 jours ouvrables dans toute la Suisse. Livraison gratuite à partir de CHF 200 d\'achat. Pour les commandes inférieures à CHF 200, les frais d\'expédition sont de CHF 9.90. Livraison express (+CHF 15) le jour ouvrable suivant possible.' : language === 'it' ? 'Tempi di consegna: 8-12 giorni lavorativi in tutta la Svizzera. Consegna gratuita per ordini superiori a CHF 200. Per ordini inferiori a CHF 200, le spese di spedizione sono CHF 9.90. Consegna express (+CHF 15) il giorno lavorativo successivo disponibile.' : 'Delivery time: 8-12 business days within Switzerland. Free shipping on orders over CHF 200. For orders under CHF 200, shipping costs are CHF 9.90. Express delivery (+CHF 15) next business day available.' },
    { key: 'payment', icon: CreditCard, label: c.productPage.infoPayment, content: language === 'de' ? 'Wir akzeptieren Kreditkarte (Visa, Mastercard, Amex), PayPal, Twint und Vorauskasse per Banküberweisung. Alle Zahlungen werden über eine verschlüsselte SSL-Verbindung abgewickelt.' : language === 'fr' ? 'Nous acceptons les cartes de crédit (Visa, Mastercard, Amex), PayPal, Twint et le paiement anticipé par virement bancaire. Tous les paiements sont traités via une connexion SSL cryptée.' : language === 'it' ? 'Accettiamo carta di credito (Visa, Mastercard, Amex), PayPal, Twint e pagamento anticipato tramite bonifico bancario. Tutti i pagamenti vengono elaborati tramite una connessione SSL crittografata.' : 'We accept credit card (Visa, Mastercard, Amex), PayPal, Twint, and advance payment by bank transfer. All payments are processed via an encrypted SSL connection.' },
    { key: 'size', icon: Ruler, label: c.productPage.infoSize, content: product.specs[language].join(', ') },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>

      <div className="border-b" style={{ borderColor: '#E7E5E4' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-4">
          <button onClick={() => goTo(`/collections/${product.collection}`)} className="flex items-center gap-2 text-[13px] hover:opacity-70 transition-opacity" style={{ color: '#78716C' }}>
            <ArrowLeft size={14}  strokeWidth={1.5} /> {product.name[language]}
          </button>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-6 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Image Gallery */}
          <div>
            <div className="lg:hidden relative aspect-[4/5] rounded-xl overflow-hidden bg-[#FAF8F5] mb-3" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <div className="flex h-full transition-transform duration-300" style={{ transform: `translateX(-${selectedImage * 100}%)` }}>
                {product.images.map((img, i) => (
                  <div key={i} className="w-full h-full flex-shrink-0"><img src={img} alt={`${product.name[language]} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" decoding="async" /></div>
                ))}
              </div>
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {product.images.map((_, i) => (
                  <button key={i} onClick={() => setSelectedImage(i)} className="w-2 h-2 rounded-full transition-all" style={{ backgroundColor: selectedImage === i ? '#1C1917' : 'rgba(255,255,255,0.5)' }} />
                ))}
              </div>
            </div>

            {/* Mobile Thumbnails */}
            <div className="lg:hidden flex gap-2 overflow-x-auto pb-1 -mx-4 px-4" style={{ scrollSnapType: 'x mandatory' }}>
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === i ? 'border-[#B45309]' : 'border-transparent'}`}
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <img src={img} alt={`${product.name[language]} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </button>
              ))}
            </div>

            <div className="hidden lg:flex flex-row gap-3">
              <div className="flex flex-col gap-3">
                {product.images.map((img, i) => (
                  <button key={i} onClick={() => setSelectedImage(i)} className={`w-16 h-16 xl:w-20 xl:h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${selectedImage === i ? 'border-[#B45309]' : 'border-transparent hover:border-[#E7E5E4]'}`}>
                    <img src={img} alt={`${product.name[language]} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
              <div className="flex-1 aspect-[3/4] rounded-xl overflow-hidden bg-[#FAF8F5]">
                <img src={product.images[selectedImage]} alt={product.name[language]} className="w-full h-full object-cover" decoding="async" />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h1 className="text-[clamp(1.4rem,3vw,2.25rem)] font-normal tracking-[-0.01em] mb-1" style={{ color: '#1C1917' }}>{product.name[language]}</h1>
            <p className="text-[14px] mb-4" style={{ color: '#78716C' }}>{product.subtitle[language]}</p>

            <div className="flex items-center gap-3 mb-5">
              {(() => {
                const df = dualFormat(product.price)
                return (
                  <>
                    <span className="text-[28px] lg:text-[32px] font-semibold" style={{ color: '#1C1917' }}>{df.primary}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-[18px] line-through" style={{ color: '#A8A29E' }}>{dualFormat(product.originalPrice).primary}</span>
                        <span className="text-[11px] font-bold tracking-wider uppercase px-2 py-1 rounded" style={{ backgroundColor: '#B45309', color: '#FFFFFF' }}>
                          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </span>
                      </>
                    )}
                    <span className="text-[12px] hidden lg:inline" style={{ color: '#A8A29E' }}>{df.secondary}</span>
                  </>
                )
              })()}
            </div>

            {/* ─── UNIFIED QUANTITY + CALCULATOR ─── */}
            <div className="border rounded-xl p-4 lg:p-5 mb-5" style={{ borderColor: '#E7E5E4' }}>
              {/* Primary: Quantity */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[13px] font-semibold tracking-wider uppercase" style={{ color: '#78716C' }}>{c.productPage.quantity}</span>
                <div className="flex items-center border rounded-lg" style={{ borderColor: '#E7E5E4' }}>
                  <button onClick={() => handleQuantityChange(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-[#FAF8F5]"><Minus size={16}  strokeWidth={1.5} /></button>
                  <span className="w-10 text-center text-[15px] font-medium">{quantity}</span>
                  <button onClick={() => handleQuantityChange(quantity + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-[#FAF8F5]"><Plus size={16}  strokeWidth={1.5} /></button>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t mb-4" style={{ borderColor: '#E7E5E4' }}>
                <span className="relative -top-2.5 left-1/2 -translate-x-1/2 text-[11px] font-medium px-2 bg-white" style={{ color: '#A8A29E' }}>
                  {language === 'de' ? 'oder Wandfläche eingeben' : language === 'fr' ? 'ou saisir la surface murale' : language === 'it' ? 'o inserire la superficie della parete' : 'or enter wall area'}
                </span>
              </div>

              {/* Secondary: CM inputs */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-[11px] font-medium tracking-wider uppercase mb-1.5" style={{ color: '#A8A29E' }}>{c.productPage.heightLabel}</label>
                  <input type="number" value={wallHeight} onChange={e => handleHeightChange(e.target.value)} placeholder="240" className="w-full px-3 py-2.5 rounded-lg border text-[14px] outline-none focus:border-[#B45309] transition-colors" style={{ borderColor: '#E7E5E4' }} />
                </div>
                <div>
                  <label className="block text-[11px] font-medium tracking-wider uppercase mb-1.5" style={{ color: '#A8A29E' }}>{c.productPage.widthLabel}</label>
                  <input type="number" value={wallWidth} onChange={e => handleWidthChange(e.target.value)} placeholder="60" className="w-full px-3 py-2.5 rounded-lg border text-[14px] outline-none focus:border-[#B45309] transition-colors" style={{ borderColor: '#E7E5E4' }} />
                </div>
              </div>

              {/* m² summary */}
              {(() => {
                const w = parseFloat(wallWidth) || 0
                const h = parseFloat(wallHeight) || 0
                if (w > 0 && h > 0) {
                  const sqm = (w * h / 10000).toFixed(2)
                  return (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-medium" style={{ color: '#78716C' }}>
                        {language === 'de' ? 'Fläche' : language === 'fr' ? 'Surface' : language === 'it' ? 'Superficie' : 'Area'}
                      </span>
                      <span className="text-[13px] font-semibold" style={{ color: '#1C1917' }}>{sqm} m²</span>
                      <span className="text-[11px]" style={{ color: '#A8A29E' }}>· {quantity} {language === 'de' ? 'Paneele' : language === 'fr' ? 'panneaux' : language === 'it' ? 'pannelli' : 'panels'}</span>
                    </div>
                  )
                }
                return null
              })()}

              {/* Total */}
              <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: '#E7E5E4' }}>
                <span className="text-[13px]" style={{ color: '#78716C' }}>{language === 'de' ? 'Gesamt' : language === 'fr' ? 'Total' : language === 'it' ? 'Totale' : 'Total'}</span>
                <span className="text-[22px] font-semibold" style={{ color: '#1C1917' }}>{format(product.price * quantity)}</span>
              </div>
            </div>

            {/* One Add to Cart button */}
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 text-[14px] font-semibold px-6 py-4 rounded-lg transition-all mb-4"
              style={{ backgroundColor: addedToCart ? '#15803D' : '#1C1917', color: '#FFFFFF' }}
            >
              {addedToCart ? <><Check size={18}  strokeWidth={1.5} /> {language === 'de' ? 'Im Warenkorb' : language === 'fr' ? 'Ajouté' : language === 'it' ? 'Aggiunto' : 'Added'}</> : <><ShoppingCart size={18}  strokeWidth={1.5} /> {c.productPage.addToCart} • {format(product.price * quantity)}</>}
            </button>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-3 mb-3 flex-wrap">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#B45309" color="#B45309"  strokeWidth={1.5} />)}
                <span className="text-[11px] font-medium ml-1" style={{ color: '#1C1917' }}>4.9</span>
              </div>
              <span className="text-[11px]" style={{ color: '#78716C' }}>{language === 'de' ? '200+ Bewertungen' : language === 'fr' ? '200+ avis' : language === 'it' ? '200+ recensioni' : '200+ reviews'}</span>
            </div>

            <div className="mb-5"><PaymentIcons lang={language} /></div>
          </div>
        </div>
      </div>

      {/* Color / Finish Selector */}
      {product.collection && (
        <div className="border-t" style={{ borderColor: '#E7E5E4' }}>
          <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-8 lg:py-10">
            <h2 className="text-[15px] font-medium mb-5" style={{ color: '#1C1917' }}>
              {language === 'de' ? 'Verfügbare Farben' : language === 'fr' ? 'Finitions disponibles' : language === 'it' ? 'Finiture disponibili' : 'Available finishes'}
            </h2>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
              {getProductsByCollection(product.collection)
                .filter(p => p.slug !== product.slug)
                .map(p => {
                  const colorName = p.name[language].split('|')[1]?.trim() || p.name[language]
                  const isCurrent = p.slug === product.slug
                  return (
                    <button
                      key={p.slug}
                      onClick={() => navigate(`/${language}/products/${p.slug}`)}
                      className={`flex-shrink-0 text-left rounded-xl border-2 overflow-hidden transition-all hover:shadow-md ${isCurrent ? 'ring-2 ring-[#B45309]' : ''}`}
                      style={{
                        width: '132px',
                        borderColor: '#E7E5E4',
                        scrollSnapAlign: 'start',
                      }}
                    >
                      <div className="aspect-square overflow-hidden bg-[#FAF8F5]">
                        <img src={p.images[0]} alt={colorName} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                      </div>
                      <div className="p-2.5">
                        <p className="text-[12px] font-medium leading-tight" style={{ color: '#1C1917' }}>{colorName}</p>
                        <p className="text-[11px] mt-0.5" style={{ color: '#B45309' }}>{format(p.price)}</p>
                      </div>
                    </button>
                  )
                })}
            </div>
          </div>
        </div>
      )}

      {/* Shipping Timeline */}
      <div className="border-t" style={{ borderColor: '#E7E5E4' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-10 lg:py-14">
          <h2 className="text-center text-[18px] font-medium mb-8" style={{ color: '#1C1917' }}>{c.productPage.shippingTitle}</h2>
          <div className="max-w-[700px] mx-auto">
            <div className="flex items-center justify-center relative">
              <div className="absolute top-6 left-[16%] right-[16%] h-0.5" style={{ backgroundColor: '#E7E5E4' }} />
              {[{ icon: Smartphone, label: fmt(orderDate), sub: c.productPage.orderedOn }, { icon: Factory, label: fmt(prepDate), sub: c.productPage.preparedOn }, { icon: Home, label: fmt(deliveryDate), sub: c.productPage.deliveredOn }].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center" style={{ width: '33.333%' }}>
                  <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center mb-3 bg-white" style={{ borderColor: '#B45309' }}><item.icon size={20} style={{ color: '#B45309' }}  strokeWidth={1.5} /></div>
                  <p className="text-[13px] font-medium" style={{ color: '#1C1917' }}>{item.label}</p>
                  <p className="text-[12px]" style={{ color: '#78716C' }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      {reviews.length > 0 && (
        <div className="border-t" style={{ borderColor: '#E7E5E4' }}>
          <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-10 lg:py-14">
            <h2 className="text-center text-[18px] font-medium mb-8" style={{ color: '#1C1917' }}>{c.productPage.reviewsTitle}</h2>
            <div className="max-w-[600px] mx-auto">
              <div className="bg-white rounded-xl border p-6" style={{ borderColor: '#E7E5E4' }}>
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill={j < reviews[reviewIndex].rating ? '#B45309' : '#E7E5E4'} color={j < reviews[reviewIndex].rating ? '#B45309' : '#E7E5E4'}  strokeWidth={1.5} />)}
                  <span className="text-[14px] font-medium ml-1" style={{ color: '#1C1917' }}>{reviews[reviewIndex].name}</span>
                </div>
                <p className="text-[14px] leading-[1.6] mb-3" style={{ color: '#1C1917' }}>"{reviews[reviewIndex].text[language]}"</p>
                <p className="text-[12px]" style={{ color: '#78716C' }}>{reviews[reviewIndex].city} • {reviews[reviewIndex].date}</p>
              </div>
              {reviews.length > 1 && (
                <div className="flex items-center justify-center gap-3 mt-4">
                  <button onClick={() => setReviewIndex(prev => (prev - 1 + reviews.length) % reviews.length)} className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-[#FAF8F5]" style={{ borderColor: '#E7E5E4' }}><ChevronDown size={16} className="rotate-90" style={{ color: '#1C1917' }}  strokeWidth={1.5} /></button>
                  <span className="text-[13px]" style={{ color: '#78716C' }}>{reviewIndex + 1} / {reviews.length}</span>
                  <button onClick={() => setReviewIndex(prev => (prev + 1) % reviews.length)} className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-[#FAF8F5]" style={{ borderColor: '#E7E5E4' }}><ChevronDown size={16} className="-rotate-90" style={{ color: '#1C1917' }}  strokeWidth={1.5} /></button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Info Accordion */}
      <div className="border-t" style={{ borderColor: '#E7E5E4' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-10 lg:py-14">
          <h2 className="text-center text-[clamp(1.2rem,2vw,1.5rem)] font-normal tracking-[-0.01em] mb-10" style={{ color: '#1C1917' }}>{c.productPage.infoTitle}</h2>
          <div className="max-w-[700px] mx-auto space-y-2">
            {infoSections.map(section => {
              const Icon = section.icon
              const isOpen = openInfo === section.key
              return (
                <div key={section.key} className="border-b" style={{ borderColor: '#E7E5E4' }}>
                  <button
                    onClick={() => setOpenInfo(isOpen ? null : section.key)}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} strokeWidth={1.5} style={{ color: '#B45309' }} />
                      <span className="text-[15px] font-normal" style={{ color: '#1C1917' }}>{section.label}</span>
                    </div>
                    <ChevronDown
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 shrink-0"
                      style={{ color: '#78716C', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}
                  >
                    <div className="pb-5 pl-7">
                      <p className="text-[14px] leading-[1.7]" style={{ color: '#78716C' }}>{section.content}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="border-t" style={{ borderColor: '#E7E5E4' }}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-10 lg:py-14">
          <div className="max-w-[600px] mx-auto p-6 rounded-xl" style={{ backgroundColor: '#FAF8F5' }}>
            <h2 className="text-[18px] font-medium mb-2" style={{ color: '#1C1917' }}>{c.productPage.contactTitle}</h2>
            <p className="text-[14px] mb-5" style={{ color: '#78716C' }}>{c.productPage.contactSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+41766737581" className="flex items-center justify-center gap-2 text-[14px] font-semibold px-5 py-3 rounded-lg border transition-all hover:bg-white" style={{ borderColor: '#E7E5E4', color: '#1C1917' }}><Phone size={16}  strokeWidth={1.5} /> {c.productPage.contactPhone}</a>
              <button onClick={() => setContactOpen(true)} className="flex items-center justify-center gap-2 text-[14px] font-semibold px-5 py-3 rounded-lg transition-all" style={{ backgroundColor: '#1C1917', color: '#FFFFFF' }}><MessageCircle size={16}  strokeWidth={1.5} /> {c.productPage.contactMessage}</button>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="border-t" style={{ borderColor: '#E7E5E4' }}>
          <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-12 lg:py-16">
            <h2 className="text-[18px] font-medium mb-6" style={{ color: '#1C1917' }}>{language === 'de' ? 'Ähnliche Produkte' : language === 'fr' ? 'Produits similaires' : language === 'it' ? 'Prodotti simili' : 'Related products'}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {related.map(p => <ProductCard key={p.id} product={p} lang={language} onClick={() => goTo(`/products/${p.slug}`)} />)}
            </div>
          </div>
        </div>
      )}

      <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}

function ProductCard({ product, lang, onClick }: { product: Product; lang: import('../lib/content').Language; onClick: () => void }) {
  const { format } = useCurrency()
  return (
    <button onClick={onClick} className="group text-left w-full">
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 bg-[#FAF8F5]">
        <img src={product.images[0]} alt={product.name[lang]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
        {product.badge && <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded" style={{ backgroundColor: '#B45309', color: '#FFFFFF' }}>{product.badge[lang]}</span>}
        {product.originalPrice && <span className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-white" style={{ color: '#B45309' }}>-{Math.round((1 - product.price / product.originalPrice) * 100)}%</span>}
      </div>
      <h3 className="text-[13px] lg:text-[14px] font-medium mb-1 line-clamp-1" style={{ color: '#1C1917' }}>{product.name[lang]}</h3>
      <div className="flex items-center gap-2">
        <span className="text-[14px] lg:text-[15px] font-semibold" style={{ color: '#1C1917' }}>{format(product.price)}</span>
        {product.originalPrice && <span className="text-[13px] line-through" style={{ color: '#A8A29E' }}>{format(product.originalPrice)}</span>}
      </div>
    </button>
  )
}
