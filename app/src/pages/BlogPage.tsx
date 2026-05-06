import { useParams, useNavigate } from 'react-router'
import {
  ArrowRight, Ruler, Clock, Check, Shield, Truck,
  Star, ChevronDown, MapPin, Phone, MessageCircle,
  ChevronRight, Leaf
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { useCurrency } from '../lib/CurrencyContext'
import { blogPosts } from '../data/blog'
import { blogArticles } from '../data/blogContent'
import { getProductBySlug } from '../data/products'
import { useCart } from '../lib/CartContext'
import ContactForm from '../components/ContactForm'

function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border rounded-lg overflow-hidden" style={{ borderColor: '#E7E5E4' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-4 text-left"
          >
            <span className="text-[14px] font-medium pr-4" style={{ color: '#1C1917' }}>{faq.q}</span>
            <ChevronDown size={16} strokeWidth={1.5} style={{ color: '#78716C' }} className={`flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && (
            <div className="px-4 pb-4">
              <p className="text-[14px] leading-[1.6]" style={{ color: '#78716C' }}>{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function CalculatorWidget({ lang }: { lang: string }) {
  const { format } = useCurrency()
  const [width, setWidth] = useState('300')
  const [height, setHeight] = useState('250')
  const PANEL_W = 60
  const PANEL_H = 240
  const w = parseFloat(width) || 0
  const h = parseFloat(height) || 0
  const across = Math.ceil(w / PANEL_W)
  const up = Math.ceil(h / PANEL_H)
  const totalPanels = across * up
  const totalPrice = totalPanels * 59

  const labelMap: Record<string, { width: string; height: string; total: string; panels: string; perPanel: string }> = {
    de: { width: 'BREITE (CM)', height: 'HÖHE (CM)', total: 'Gesamt', panels: 'Paneele', perPanel: 'pro Panel' },
    fr: { width: 'LARGEUR (CM)', height: 'HAUTEUR (CM)', total: 'Total', panels: 'Panneaux', perPanel: 'par panneau' },
    it: { width: 'LARGHEZZA (CM)', height: 'ALTEZZA (CM)', total: 'Totale', panels: 'Pannelli', perPanel: 'a pannello' },
    en: { width: 'WIDTH (CM)', height: 'HEIGHT (CM)', total: 'Total', panels: 'Panels', perPanel: 'per panel' },
  }
  const labels = labelMap[lang] || labelMap.en

  return (
    <div className="p-5 rounded-xl border" style={{ borderColor: '#E7E5E4', backgroundColor: '#FAF8F5' }}>
      <div className="flex items-center gap-2 mb-4">
        <Ruler size={18} strokeWidth={1.5} style={{ color: '#B45309' }} />
        <span className="text-[13px] font-medium" style={{ color: '#1C1917' }}>{lang === 'de' ? 'Wandkosten-Rechner' : lang === 'fr' ? 'Calculateur de coût' : lang === 'it' ? 'Calcolatore costi' : 'Wall cost calculator'}</span>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <label className="block text-[10px] font-medium tracking-wider uppercase mb-1" style={{ color: '#A8A29E' }}>{labels.width}</label>
          <input type="number" value={width} onChange={e => setWidth(e.target.value)} className="w-full px-3 py-2 rounded-lg border text-[14px] outline-none focus:border-[#B45309]" style={{ borderColor: '#E7E5E4' }} />
        </div>
        <div>
          <label className="block text-[10px] font-medium tracking-wider uppercase mb-1" style={{ color: '#A8A29E' }}>{labels.height}</label>
          <input type="number" value={height} onChange={e => setHeight(e.target.value)} className="w-full px-3 py-2 rounded-lg border text-[14px] outline-none focus:border-[#B45309]" style={{ borderColor: '#E7E5E4' }} />
        </div>
      </div>
      <div className="flex justify-between items-end pt-3 border-t" style={{ borderColor: '#E7E5E4' }}>
        <div>
          <p className="text-[12px]" style={{ color: '#78716C' }}>{totalPanels} {labels.panels} {labels.perPanel}</p>
          <p className="text-[22px] font-semibold" style={{ color: '#B45309' }}>{format(totalPrice)}</p>
        </div>
      </div>
    </div>
  )
}

export default function BlogPage() {
  const { lang, slug } = useParams<{ lang: string; slug: string }>()
  const language = (lang || 'en') as import('../lib/content').Language
  const navigate = useNavigate()
  const { format } = useCurrency()
  const cart = useCart()
  const [contactOpen, setContactOpen] = useState(false)

  // Scroll to top when navigating to a blog post
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const article = blogArticles.find(a => a.slug === slug)
  const postMeta = blogPosts.find(p => p.slug === slug)

  // JSON-LD Article Schema
  useEffect(() => {
    if (!article || !postMeta) return
    const schema: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': article.schema.articleType,
      headline: article.h1[language],
      description: article.excerpt[language],
      image: `https://panelsofwood.com${article.image}`,
      datePublished: article.date,
      dateModified: article.date,
      author: { '@type': 'Organization', name: 'PanelsOfWood' },
      publisher: {
        '@type': 'Organization',
        name: 'PanelsOfWood',
        logo: { '@type': 'ImageObject', url: 'https://panelsofwood.com/logo.png' }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://panelsofwood.com/${language}/blog/${article.slug}`
      }
    }
    if (article.schema.faqSchema) {
      const faqSection = article.sections.find(s => s.type === 'faq')
      const faqs = faqSection?.faqs?.[language]
      if (faqs && faqs.length > 0) {
        schema.mainEntity = faqs.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      }
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    script.id = 'article-schema'
    document.head.appendChild(script)
    return () => { const s = document.getElementById('article-schema'); if (s) s.remove() }
  }, [article, postMeta, language, slug])

  if (!article || !postMeta) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4" style={{ color: '#1C1917' }}>Blog not found</h1>
          <button onClick={() => navigate(`/${language}/`)} className="text-[14px] font-medium" style={{ color: '#B45309' }}>← Back to home</button>
        </div>
      </div>
    )
  }

  const t = article
  const relatedPosts = t.sections.find(s => s.type === 'related')?.relatedSlugs
    ?.map(s => blogPosts.find(p => p.slug === s))
    .filter(Boolean) || []

  const ctaSection = t.sections.find(s => s.type === 'cta')
  const ctaProduct = ctaSection?.productSlug ? getProductBySlug(ctaSection.productSlug) : null

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>

      {/* Breadcrumbs */}
      <div className="max-w-[1100px] mx-auto px-4 lg:px-6 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-[12px]" style={{ color: '#78716C' }}>
          <button onClick={() => navigate(`/${language}/`)} className="hover:text-[#B45309] transition-colors">PanelsOfWood</button>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span>Blog</span>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span style={{ color: '#1C1917' }}>{t.category[language]}</span>
        </nav>
      </div>

      {/* H1 Header */}
      <div className="max-w-[1100px] mx-auto px-4 lg:px-6 pb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full" style={{ backgroundColor: '#FAF8F5', color: '#78716C' }}>
            {t.category[language]}
          </span>
          <span className="flex items-center gap-1 text-[11px]" style={{ color: '#78716C' }}>
            <Clock size={12} strokeWidth={1.5} /> {t.readTime} min
          </span>
        </div>
        <h1 className="text-[clamp(1.6rem,4vw,2.4rem)] font-medium leading-[1.2] mb-4" style={{ color: '#1C1917' }}>
          {t.h1[language]}
        </h1>
        <p className="text-[14px]" style={{ color: '#78716C' }}>
          {postMeta.excerpt[language]}
        </p>
      </div>

      {/* Hero image */}
      <div className="max-w-[1100px] mx-auto px-4 lg:px-6 mb-10">
        <div className="aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden">
          <img
            src={t.image}
            alt={t.title[language]}
            className="w-full h-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 lg:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">

          {/* Main Content */}
          <div>

            {/* Atomic Answer Box */}
            <div className="p-5 rounded-xl mb-10 border-l-4" style={{ backgroundColor: '#FAF8F5', borderColor: '#B45309' }}>
              <p className="text-[14px] lg:text-[15px] leading-[1.6] font-medium" style={{ color: '#1C1917' }}>
                {t.atomicAnswer[language]}
              </p>
            </div>

            {/* Article Sections */}
            {t.sections.map((section, idx) => {
              switch (section.type) {
                case 'h2':
                  return (
                    <h2 key={idx} className="text-[20px] lg:text-[22px] font-medium mt-10 mb-4" style={{ color: '#1C1917' }}>
                      {section.content?.[language]}
                    </h2>
                  )
                case 'h3':
                  return (
                    <h3 key={idx} className="text-[17px] font-medium mt-8 mb-3" style={{ color: '#1C1917' }}>
                      {section.content?.[language]}
                    </h3>
                  )
                case 'paragraph':
                  return (
                    <p key={idx} className="text-[15px] leading-[1.7] mb-5" style={{ color: '#78716C' }}>
                      {section.content?.[language]}
                    </p>
                  )
                case 'tip':
                  return (
                    <div key={idx} className="p-4 rounded-lg mb-5 border-l-4" style={{ backgroundColor: '#FFF7ED', borderColor: '#B45309' }}>
                      <p className="text-[14px] leading-[1.6]" style={{ color: '#1C1917' }}>
                        {section.content?.[language]}
                      </p>
                    </div>
                  )
                case 'list':
                  return (
                    <ol key={idx} className="space-y-3 mb-6 ml-1">
                      {section.items?.[language]?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-semibold mt-0.5" style={{ backgroundColor: '#1C1917', color: '#FFFFFF' }}>
                            {i + 1}
                          </span>
                          <span className="text-[14px] leading-[1.6]" style={{ color: '#78716C' }}>{item}</span>
                        </li>
                      ))}
                    </ol>
                  )
                case 'comparison':
                  const table = section.table?.[language]
                  if (!table) return null
                  return (
                    <div key={idx} className="mb-8 overflow-x-auto">
                      <table className="w-full text-[13px]" style={{ borderColor: '#E7E5E4' }}>
                        <thead>
                          <tr>
                            {table.headers.map((h, i) => (
                              <th key={i} className="text-left px-3 py-2.5 font-medium border-b" style={{ borderColor: '#E7E5E4', color: '#1C1917', backgroundColor: '#FAF8F5' }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row, ri) => (
                            <tr key={ri}>
                              {row.map((cell, ci) => (
                                <td key={ci} className={`px-3 py-2.5 border-b ${ci === 1 ? 'font-semibold' : ''}`} style={{ borderColor: '#E7E5E4', color: ci === 1 ? '#B45309' : '#78716C' }}>
                                  {cell.includes('PanelsOfWood') || cell === 'CHF 59' ? (
                                    <span className="font-semibold" style={{ color: '#B45309' }}>{cell}</span>
                                  ) : (
                                    cell.includes('Ja') || cell === 'Yes' || cell === 'Oui' || cell === 'Sì' ? (
                                      <span className="flex items-center gap-1"><Check size={12} strokeWidth={1.5} style={{ color: '#15803D' }} /> {cell}</span>
                                    ) : cell
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )
                case 'calculator':
                  return <div key={idx} className="mb-8"><CalculatorWidget lang={language} /></div>
                case 'faq':
                  const faqs = section.faqs?.[language]
                  if (!faqs) return null
                  return (
                    <div key={idx} className="mb-8">
                      <FAQAccordion faqs={faqs} />
                    </div>
                  )
                case 'cta':
                  if (!ctaProduct) return null
                  return (
                    <div key={idx} className="mb-10 p-6 rounded-xl border" style={{ borderColor: '#E7E5E4', backgroundColor: '#FAF8F5' }}>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={ctaProduct.images[0]} alt={ctaProduct.name[language]} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[11px] font-medium tracking-wider uppercase mb-1" style={{ color: '#78716C' }}>
                            {language === 'de' ? 'Empfohlenes Produkt' : language === 'fr' ? 'Produit recommandé' : language === 'it' ? 'Prodotto consigliato' : 'Recommended product'}
                          </p>
                          <p className="text-[16px] font-medium mb-1" style={{ color: '#1C1917' }}>{ctaProduct.name[language]}</p>
                          <p className="text-[20px] font-semibold" style={{ color: '#B45309' }}>{format(ctaProduct.price)}</p>
                        </div>
                        <button
                          onClick={() => {
                            cart.addProduct({
                              productSlug: ctaProduct.slug,
                              productName: ctaProduct.name[language],
                              productImage: ctaProduct.images[0],
                              price: ctaProduct.price,
                              quantity: 1,
                            })
                          }}
                          className="flex items-center gap-2 text-[14px] font-semibold px-5 py-3 rounded-lg transition-all flex-shrink-0"
                          style={{ backgroundColor: '#1C1917', color: '#FFFFFF' }}
                        >
                          {language === 'de' ? 'In den Warenkorb' : language === 'fr' ? 'Ajouter au panier' : language === 'it' ? 'Aggiungi al carrello' : 'Add to cart'}
                        </button>
                      </div>
                    </div>
                  )
                case 'related':
                  return null // handled after main content
                default:
                  return null
              }
            })}

            {/* Secondary CTA */}
            <div className="mt-10 p-6 rounded-xl border" style={{ borderColor: '#E7E5E4' }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
                <div>
                  <h3 className="text-[16px] font-medium mb-1" style={{ color: '#1C1917' }}>
                    {language === 'de' ? 'Bereit für Ihre Wandtransformation?' : language === 'fr' ? 'Prêt pour votre transformation murale?' : language === 'it' ? 'Pronto per la trasformazione della tua parete?' : 'Ready for your wall transformation?'}
                  </h3>
                  <p className="text-[13px]" style={{ color: '#78716C' }}>
                    {language === 'de' ? 'CHF 59 pro Panel • Kostenlose Lieferung • 30 Tage Rückgabe' : language === 'fr' ? 'CHF 59 le panneau • Livraison gratuite • Retour 30 jours' : language === 'it' ? 'CHF 59 a pannello • Consegna gratuita • Reso 30 giorni' : 'CHF 59 per panel • Free delivery • 30-day returns'}
                  </p>
                </div>
                <button
                  onClick={() => navigate(`/${language}/products/akupanel-eiche-natur`)}
                  className="flex items-center gap-2 text-[14px] font-semibold px-5 py-3 rounded-lg transition-all flex-shrink-0"
                  style={{ backgroundColor: '#1C1917', color: '#FFFFFF' }}
                >
                  {language === 'de' ? 'Jetzt entdecken' : language === 'fr' ? 'Découvrir' : language === 'it' ? 'Scopri' : 'Discover now'} <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-[16px] font-medium mb-5" style={{ color: '#1C1917' }}>
                  {language === 'de' ? 'Weitere Artikel' : language === 'fr' ? 'Autres articles' : language === 'it' ? 'Altri articoli' : 'Related articles'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedPosts.map((rp) => rp && (
                    <button
                      key={rp.slug}
                      onClick={() => navigate(`/${language}/blog/${rp.slug}`)}
                      className="flex gap-3 p-3 rounded-lg border text-left transition-all hover:border-[#B45309]"
                      style={{ borderColor: '#E7E5E4' }}
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={rp.image} alt={rp.title[language]} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-medium tracking-wider uppercase" style={{ color: '#B45309' }}>{rp.category[language]}</span>
                        <p className="text-[13px] font-medium mt-0.5 line-clamp-2" style={{ color: '#1C1917' }}>{rp.title[language]}</p>
                        <span className="text-[11px]" style={{ color: '#A8A29E' }}>{rp.readTime} min</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Swiss Context Sidebar */}
          <aside className="space-y-6">

            {/* Language Toggle */}
            <div className="p-4 rounded-xl border" style={{ borderColor: '#E7E5E4' }}>
              <p className="text-[11px] font-medium tracking-wider uppercase mb-3" style={{ color: '#A8A29E' }}>
                {language === 'de' ? 'Sprache' : language === 'fr' ? 'Langue' : language === 'it' ? 'Lingua' : 'Language'}
              </p>
              <div className="flex gap-2">
                {(['de', 'fr', 'it', 'en'] as const).map(l => (
                  <button
                    key={l}
                    onClick={() => navigate(`/${l}/blog/${slug}`)}
                    className="text-[12px] font-semibold px-2.5 py-1.5 rounded-full transition-all"
                    style={{
                      color: language === l ? '#FFFFFF' : '#78716C',
                      backgroundColor: language === l ? '#1C1917' : '#F5F5F4',
                    }}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Rental-Safe Badge */}
            <div className="p-4 rounded-xl border" style={{ borderColor: '#E7E5E4', backgroundColor: '#FAF8F5' }}>
              <div className="flex items-center gap-2 mb-3">
                <Shield size={18} strokeWidth={1.5} style={{ color: '#15803D' }} />
                <span className="text-[13px] font-medium" style={{ color: '#1C1917' }}>
                  {language === 'de' ? 'Mieterfreundlich' : language === 'fr' ? 'Compatible locataire' : language === 'it' ? 'Adatto agli inquilini' : 'Renter-friendly'}
                </span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-[12px]" style={{ color: '#78716C' }}>
                  <Check size={14} strokeWidth={1.5} style={{ color: '#15803D' }} className="mt-0.5 flex-shrink-0" />
                  {language === 'de' ? 'Kein Bohren nötig' : language === 'fr' ? 'Aucun perçage nécessaire' : language === 'it' ? 'Nessun trapano richiesto' : 'No drilling required'}
                </li>
                <li className="flex items-start gap-2 text-[12px]" style={{ color: '#78716C' }}>
                  <Check size={14} strokeWidth={1.5} style={{ color: '#15803D' }} className="mt-0.5 flex-shrink-0" />
                  {language === 'de' ? 'Rückstandsfrei entfernbar' : language === 'fr' ? 'Retrait sans résidu' : language === 'it' ? 'Rimozione senza residui' : 'Residue-free removal'}
                </li>
                <li className="flex items-start gap-2 text-[12px]" style={{ color: '#78716C' }}>
                  <Check size={14} strokeWidth={1.5} style={{ color: '#15803D' }} className="mt-0.5 flex-shrink-0" />
                  {language === 'de' ? 'Wand bleibt unbeschädigt' : language === 'fr' ? 'Mur intact' : language === 'it' ? 'Parete intatta' : 'Wall stays undamaged'}
                </li>
              </ul>
            </div>

            {/* Swiss Logistics */}
            <div className="p-4 rounded-xl border" style={{ borderColor: '#E7E5E4' }}>
              <div className="flex items-center gap-2 mb-3">
                <Truck size={18} strokeWidth={1.5} style={{ color: '#B45309' }} />
                <span className="text-[13px] font-medium" style={{ color: '#1C1917' }}>
                  {language === 'de' ? 'Schweizer Logistik' : language === 'fr' ? 'Logistique suisse' : language === 'it' ? 'Logistica svizzera' : 'Swiss logistics'}
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin size={14} strokeWidth={1.5} style={{ color: '#78716C' }} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[12px] font-medium" style={{ color: '#1C1917' }}>
                      {language === 'de' ? 'Versandlager' : language === 'fr' ? 'Entrepôt d\'expédition' : language === 'it' ? 'Magazzino di spedizione' : 'Shipping warehouse'}
                    </p>
                    <p className="text-[11px]" style={{ color: '#78716C' }}>Zürich / Basel</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Clock size={14} strokeWidth={1.5} style={{ color: '#78716C' }} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[12px] font-medium" style={{ color: '#1C1917' }}>
                      {language === 'de' ? '8–12 Tage Lieferzeit' : language === 'fr' ? '8–12 jours de livraison' : language === 'it' ? '8–12 giorni di consegna' : '8–12 days delivery'}
                    </p>
                    <p className="text-[11px]" style={{ color: '#78716C' }}>
                      {language === 'de' ? 'Kostenlos ab CHF 200' : language === 'fr' ? 'Gratuit dès CHF 200' : language === 'it' ? 'Gratuito da CHF 200' : 'Free over CHF 200'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Leaf size={14} strokeWidth={1.5} style={{ color: '#15803D' }} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[12px] font-medium" style={{ color: '#1C1917' }}>FSC Certified</p>
                    <p className="text-[11px]" style={{ color: '#78716C' }}>
                      {language === 'de' ? 'Nachhaltige Forstwirtschaft' : language === 'fr' ? 'Forêt durable' : language === 'it' ? 'Foresta sostenibile' : 'Sustainable forestry'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-2">
              <a
                href="tel:+41766737581"
                className="flex items-center justify-center gap-2 text-[13px] font-semibold px-4 py-3 rounded-lg border transition-all"
                style={{ borderColor: '#E7E5E4', color: '#1C1917' }}
              >
                <Phone size={15} strokeWidth={1.5} />
                +41 76 673 75 81
              </a>
              <button
                onClick={() => setContactOpen(true)}
                className="w-full flex items-center justify-center gap-2 text-[13px] font-semibold px-4 py-3 rounded-lg transition-all"
                style={{ backgroundColor: '#1C1917', color: '#FFFFFF' }}
              >
                <MessageCircle size={15} strokeWidth={1.5} />
                {language === 'de' ? 'Nachricht schreiben' : language === 'fr' ? 'Écrire un message' : language === 'it' ? 'Scrivi un messaggio' : 'Write a message'}
              </button>
            </div>

            {/* Star Rating Widget */}
            <div className="p-4 rounded-xl border" style={{ borderColor: '#E7E5E4', backgroundColor: '#FAF8F5' }}>
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} size={14} fill="#B45309" color="#B45309" />
                ))}
                <span className="text-[13px] font-medium ml-1" style={{ color: '#1C1917' }}>4.9</span>
              </div>
              <p className="text-[11px]" style={{ color: '#78716C' }}>
                {language === 'de' ? '200+ Bewertungen auf Trustpilot' : language === 'fr' ? '200+ avis Trustpilot' : language === 'it' ? '200+ recensioni Trustpilot' : '200+ Trustpilot reviews'}
              </p>
            </div>
          </aside>
        </div>
      </div>

      <ContactForm isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}
