import { useParams, useNavigate } from 'react-router'
import { useEffect } from 'react'
import { ArrowRight, Minus, MapPin, Leaf, Truck, ShieldCheck, Star, ChevronRight } from 'lucide-react'

export default function AboutPage() {
  const { lang } = useParams<{ lang: string }>()
  const language = (lang || 'en') as 'de' | 'fr' | 'it' | 'en'
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const t: Record<string, any> = {
    de: {
      breadcrumb: 'Über uns',
      headline: 'Luxus ist oft\ndas, was man hinzufügt.',
      subheadline: 'Wir definieren ihn durch das, was wir entfernen.',
      intro: 'Bei PanelsOfWood definieren wir Luxus durch das, was wir entfernen: das Echo, das Durcheinander und den Zwischenhändler. Geboren aus der Präzision der Schweizer Logistik und einer globalen Leidenschaft für minimalistisches Design, überbrücken wir die Lücke zwischen architekturklassierter Akustik und DIY-Einfachheit.',
      removeSection: {
        eyebrow: 'Unsere Philosophie',
        title: 'Weniger ist akustisch mehr',
        items: [
          { label: 'Das Echo', desc: 'Unsere Paneele mit integriertem Schallfilz absorbieren bis zu 40% mehr Geräusch als kahle Wände.' },
          { label: 'Das Durcheinander', desc: 'Keine Bohrlöcher. Keine Baustelle. Nur reine, vertikale Eichenlinien – montiert in unter 3 Stunden.' },
          { label: 'Der Zwischenhändler', desc: 'Lagerverkauf Schweiz. Keine Importgebühren. Keine Überraschungen. CHF 59.– pro Panel, transparent.' },
        ],
      },
      storySection: {
        eyebrow: 'Unsere Geschichte',
        title: 'Präzision trifft Leidenschaft',
        para1: 'PanelsOfWood wurde in Zürich gegründet, wo die Uhr nicht nur die Zeit misst, sondern die Qualität definiert. Wir vereinen Schweizer Logistikpräzision mit einem globalen Netzwerk nachhaltiger Forstwirtschaft.',
        para2: 'Jedes Panel ist FSC-zertifiziert, handverlesen und in der Schweiz lagergelagert. Wir glauben, dass großartiges Design kein Geheimnis sein sollte – weder in seiner Ästhetik noch in seinem Preis.',
        stats: [
          { value: '2000+', label: 'Zufriedene Kunden' },
          { value: '4.9/5', label: 'Trustpilot Bewertung' },
          { value: '8–12', label: 'Tage Lieferzeit' },
          { value: 'CHF 59', label: 'Preis pro Panel' },
        ],
      },
      missingPiece: {
        eyebrow: 'Das fehlende Puzzleteil',
        title: 'Wir verkaufen nicht nur Holz.',
        subtitle: 'Wir verkaufen das Gefühl eines Zuhauses, das endlich durchatmet.',
        para: 'Ob Sie in einer Züricher Wohnung oder einem Londoner Studio leben – wir liefern das „Missing Piece“ für Ihr Interieur. Ein einzelnes Akustikpanel kann den gesamten Charakter eines Raumes verändern. Die natürliche Wärme des Eichenholzes, die vertikale Textur, die akustische Ruhe.',
        cta: 'Zum Shop',
      },
      values: {
        eyebrow: 'Unsere Werte',
        title: 'Wofür wir stehen',
        items: [
          { icon: Leaf, title: 'Nachhaltigkeit', desc: 'FSC-zertifiziertes Eichen- und Nussbaumholz aus kontrollierten Wäldern.' },
          { icon: ShieldCheck, title: 'Mieterfreundlich', desc: 'Kein Bohren nötig. Clipsystem, das rückstandsfrei entfernbar ist.' },
          { icon: Truck, title: 'Schweizer Logistik', desc: 'Lager in Zürich. Lieferung in 8–12 Werktagen. Keine Zollabwicklung.' },
          { icon: MapPin, title: 'Lokal denken', desc: 'Entwickelt für Schweizer Räume – von Wohnzimmern bis Home Offices.' },
        ],
      },
    },
    fr: {
      breadcrumb: 'À propos',
      headline: 'Le luxe est souvent\nce que l\'on ajoute.',
      subheadline: 'Nous le définissons par ce que nous enlevons.',
      intro: 'Chez PanelsOfWood, nous définissons le luxe par ce que nous enlevons: l\'écho, le désordre et l\'intermédiaire. Nés de la précision de la logistique suisse et d\'une passion mondiale pour le design minimaliste, nous comblons le fossé entre l\'acoustique architecturale et la simplicité DIY.',
      removeSection: {
        eyebrow: 'Notre philosophie',
        title: 'Moins, c\'est acoustiquement plus',
        items: [
          { label: 'L\'écho', desc: 'Nos panneaux avec feutre phonique intégré absorbent jusqu\'à 40% de bruit en plus que les murs nus.' },
          { label: 'Le désordre', desc: 'Pas de trous. Pas de chantier. Juste des lignes de chêne pures et verticales – posées en moins de 3 heures.' },
          { label: 'L\'intermédiaire', desc: 'Pas de frais d\'importation. Pas de surprises. CHF 59 le panneau, transparent.' },
        ],
      },
      storySection: {
        eyebrow: 'Notre histoire',
        title: 'La précision rencontre la passion',
        para1: 'PanelsOfWood a été fondée à Zurich, où l\'horloge ne mesure pas seulement le temps, elle définit la qualité. Nous combinons la précision logistique suisse avec un réseau mondial de foresterie durable.',
        para2: 'Chaque panneau est certifié FSC, sélectionné à la main et stocké en Suisse. Nous croyons que le grand design ne devrait pas être un secret – ni dans son esthétique ni dans son prix.',
        stats: [
          { value: '2000+', label: 'Clients satisfaits' },
          { value: '4.9/5', label: 'Note Trustpilot' },
          { value: '8–12', label: 'Jours de livraison' },
          { value: 'CHF 59', label: 'Prix par panneau' },
        ],
      },
      missingPiece: {
        eyebrow: 'La pièce manquante',
        title: 'Nous ne vendons pas seulement du bois.',
        subtitle: 'Nous vendons la sensation d\'un chez-soi qui respire enfin.',
        para: 'Que vous viviez dans un appartement zurichois ou un studio londonien – nous fournissons la „pièce manquante" de votre intérieur. Un seul panneau acoustique peut changer le caractère entier d\'une pièce. La chaleur naturelle du chêne, la texture verticale, le calme acoustique.',
        cta: 'Découvrir',
      },
      values: {
        eyebrow: 'Nos valeurs',
        title: 'Ce qui nous guide',
        items: [
          { icon: Leaf, title: 'Durabilité', desc: 'Bois de chêne et noyer certifiés FSC de forêts contrôlées.' },
          { icon: ShieldCheck, title: 'Compatible locataire', desc: 'Aucun perçage nécessaire. Système de clips entièrement amovible.' },
          { icon: Truck, title: 'Logistique suisse', desc: 'Stock à Zurich. Livraison en 8–12 jours. Pas de douane.' },
          { icon: MapPin, title: 'Pensée locale', desc: 'Conçu pour les espaces suisses – du salon au bureau à domicile.' },
        ],
      },
    },
    it: {
      breadcrumb: 'Chi siamo',
      headline: 'Il lusso è spesso\nciò che si aggiunge.',
      subheadline: 'Noi lo definiamo per ciò che togliamo.',
      intro: 'Da PanelsOfWood definiamo il lusso per ciò che togliamo: l\'eco, il disordine e l\'intermediario. Nati dalla precisione della logistica svizzera e da una passione globale per il design minimalista, colmiamo il divario tra l\'acustica architettonica e la semplicità fai da te.',
      removeSection: {
        eyebrow: 'La nostra filosofia',
        title: 'Meno è acusticamente più',
        items: [
          { label: 'L\'eco', desc: 'I nostri pannelli con feltro fonoassorbente integrato assorbono fino al 40% di rumore in più rispetto alle pareti nude.' },
          { label: 'Il disordine', desc: 'Nessun foro. Nessun cantiere. Solo linee di rovere pure e verticali – montate in meno di 3 ore.' },
          { label: 'L\'intermediario', desc: 'Nessun dazio. Nessuna sorpresa. CHF 59 a pannello, trasparente.' },
        ],
      },
      storySection: {
        eyebrow: 'La nostra storia',
        title: 'Precisione incontra passione',
        para1: 'PanelsOfWood è stata fondata a Zurigo, dove l\'orologio non misura solo il tempo, ma definisce la qualità. Uniamo la precisione logistica svizzera con una rete globale di silvicoltura sostenibile.',
        para2: 'Ogni pannello è certificato FSC, selezionato a mano e stoccato in Svizzera. Crediamo che il grande design non debba essere un segreto – né nella sua estetica né nel suo prezzo.',
        stats: [
          { value: '2000+', label: 'Clienti soddisfatti' },
          { value: '4.9/5', label: 'Valutazione Trustpilot' },
          { value: '8–12', label: 'Giorni di consegna' },
          { value: 'CHF 59', label: 'Prezzo a pannello' },
        ],
      },
      missingPiece: {
        eyebrow: 'Il tassello mancante',
        title: 'Non vendiamo solo legno.',
        subtitle: 'Vendiamo la sensazione di una casa che finalmente respira.',
        para: 'Che viviate in un appartamento zurighese o uno studio londinese – forniamo il „tassello mancante" del vostro interno. Un solo pannello acustico può cambiare l\'intero carattere di una stanza. Il calore naturale del rovere, la texture verticale, la quiete acustica.',
        cta: 'Scopri',
      },
      values: {
        eyebrow: 'I nostri valori',
        title: 'Cosa ci guida',
        items: [
          { icon: Leaf, title: 'Sostenibilità', desc: 'Legno di rovere e noce certificato FSC da foreste controllate.' },
          { icon: ShieldCheck, title: 'Adatto agli inquilini', desc: 'Nessun trapano necessario. Sistema di clip completamente rimovibile.' },
          { icon: Truck, title: 'Logistica svizzera', desc: 'Magazzino a Zurigo. Consegna in 8–12 giorni. Nessuna dogana.' },
          { icon: MapPin, title: 'Pensiero locale', desc: 'Progettato per spazi svizzeri – dal soggiorno all\'ufficio domestico.' },
        ],
      },
    },
    en: {
      breadcrumb: 'About Us',
      headline: 'Luxury is often\ndefined by what is added.',
      subheadline: 'At PanelsOfWood, we define it by what we remove.',
      intro: 'Luxury is often defined by what is added. At PanelsOfWood, we define it by what we remove: the echo, the clutter, and the middleman. Born from the precision of Swiss logistics and a global passion for minimalist design, we bridge the gap between architectural-grade acoustics and DIY simplicity.',
      removeSection: {
        eyebrow: 'Our Philosophy',
        title: 'Less is acoustically more',
        items: [
          { label: 'The Echo', desc: 'Our panels with integrated sound-absorbing felt absorb up to 40% more noise than bare walls.' },
          { label: 'The Clutter', desc: 'No holes. No construction site. Just pure, vertical oak lines – installed in under 3 hours.' },
          { label: 'The Middleman', desc: 'Swiss warehouse stock. No import fees. No surprises. CHF 59 per panel, transparent.' },
        ],
      },
      storySection: {
        eyebrow: 'Our Story',
        title: 'Precision meets Passion',
        para1: 'PanelsOfWood was founded in Zurich, where the clock does not merely measure time – it defines quality. We unite Swiss logistics precision with a global network of sustainable forestry.',
        para2: 'Every panel is FSC-certified, hand-selected, and warehoused in Switzerland. We believe great design should not be a secret – neither in its aesthetics nor in its price.',
        stats: [
          { value: '2000+', label: 'Happy Customers' },
          { value: '4.9/5', label: 'Trustpilot Rating' },
          { value: '8–12', label: 'Days Delivery' },
          { value: 'CHF 59', label: 'Per Panel' },
        ],
      },
      missingPiece: {
        eyebrow: 'The Missing Piece',
        title: 'We don\'t just sell wood.',
        subtitle: 'We sell the feeling of a home that finally exhales.',
        para: 'Whether you are in a Zurich flat or a London studio, we provide the „Missing Piece" to your interior. A single acoustic panel can change the entire character of a room. The natural warmth of oak, the vertical texture, the acoustic silence.',
        cta: 'Shop Now',
      },
      values: {
        eyebrow: 'Our Values',
        title: 'What guides us',
        items: [
          { icon: Leaf, title: 'Sustainability', desc: 'FSC-certified oak and walnut from controlled forests.' },
          { icon: ShieldCheck, title: 'Renter-Friendly', desc: 'No drilling required. Fully removable clip system.' },
          { icon: Truck, title: 'Swiss Logistics', desc: 'Warehouse in Zurich. Delivery in 8–12 days. No customs.' },
          { icon: MapPin, title: 'Local Thinking', desc: 'Designed for Swiss spaces – from living rooms to home offices.' },
        ],
      },
    },
  }

  const c = t[language] || t.en

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>

      {/* Breadcrumbs */}
      <div className="max-w-[1100px] mx-auto px-4 lg:px-6 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-[12px]" style={{ color: '#78716C' }}>
          <button onClick={() => navigate(`/${language}/`)} className="hover:text-[#B45309] transition-colors">PanelsOfWood</button>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span style={{ color: '#1C1917' }}>{c.breadcrumb}</span>
        </nav>
      </div>

      {/* Hero */}
      <div className="max-w-[1100px] mx-auto px-4 lg:px-6 pt-8 pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <h1
            className="text-[clamp(2.2rem,5.5vw,3.8rem)] font-light leading-[1.1] tracking-[-0.02em] mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1C1917' }}
          >
            {c.headline.split('\n').map((line: string, i: number) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>
          <p className="text-[clamp(1.1rem,2.5vw,1.4rem)] font-light leading-[1.5] mb-10" style={{ color: '#78716C' }}>
            {c.subheadline}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map(s => (
                <Star key={s} size={14} fill="#B45309" color="#B45309" />
              ))}
            </div>
            <span className="text-[12px]" style={{ color: '#78716C' }}>4.9 / 5 — 200+ Reviews</span>
          </div>
        </div>
      </div>

      {/* Intro Statement */}
      <div className="border-t" style={{ borderColor: '#E7E5E4' }}>
        <div className="max-w-[1100px] mx-auto px-4 lg:px-6 py-14 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-[17px] lg:text-[19px] leading-[1.7] font-light" style={{ color: '#1C1917' }}>
              {c.intro}
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy: What We Remove */}
      <div style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-[1100px] mx-auto px-4 lg:px-6 py-14 lg:py-20">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-3" style={{ color: '#B45309' }}>{c.removeSection.eyebrow}</p>
          <h2 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-medium mb-10 lg:mb-14" style={{ color: '#1C1917' }}>
            {c.removeSection.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {c.removeSection.items.map((item: any, i: number) => (
              <div key={i} className="border-t pt-6" style={{ borderColor: '#E7E5E4' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Minus size={18} strokeWidth={1.5} style={{ color: '#B45309' }} />
                  <span className="text-[15px] font-medium" style={{ color: '#1C1917' }}>{item.label}</span>
                </div>
                <p className="text-[14px] leading-[1.6]" style={{ color: '#78716C' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story + Stats */}
      <div className="max-w-[1100px] mx-auto px-4 lg:px-6 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-3" style={{ color: '#B45309' }}>{c.storySection.eyebrow}</p>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium mb-6" style={{ color: '#1C1917' }}>
              {c.storySection.title}
            </h2>
            <p className="text-[15px] leading-[1.7] mb-5" style={{ color: '#78716C' }}>{c.storySection.para1}</p>
            <p className="text-[15px] leading-[1.7]" style={{ color: '#78716C' }}>{c.storySection.para2}</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {c.storySection.stats.map((stat: any, i: number) => (
              <div key={i} className="p-5 rounded-xl border" style={{ borderColor: '#E7E5E4', backgroundColor: '#FAF8F5' }}>
                <p className="text-[clamp(1.4rem,3vw,1.8rem)] font-semibold mb-1" style={{ color: '#B45309' }}>{stat.value}</p>
                <p className="text-[12px]" style={{ color: '#78716C' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="border-t" style={{ borderColor: '#E7E5E4' }}>
        <div className="max-w-[1100px] mx-auto px-4 lg:px-6 py-14 lg:py-20">
          <p className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-3" style={{ color: '#B45309' }}>{c.values.eyebrow}</p>
          <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium mb-10 lg:mb-14" style={{ color: '#1C1917' }}>
            {c.values.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.values.items.map((item: any, i: number) => {
              const Icon = item.icon
              return (
                <div key={i} className="p-5 rounded-xl border" style={{ borderColor: '#E7E5E4' }}>
                  <Icon size={20} strokeWidth={1.5} style={{ color: '#B45309' }} className="mb-4" />
                  <p className="text-[14px] font-medium mb-2" style={{ color: '#1C1917' }}>{item.title}</p>
                  <p className="text-[13px] leading-[1.5]" style={{ color: '#78716C' }}>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* The Missing Piece — Large CTA */}
      <div style={{ backgroundColor: '#1C1917' }}>
        <div className="max-w-[1100px] mx-auto px-4 lg:px-6 py-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase mb-4" style={{ color: '#B45309' }}>
              {c.missingPiece.eyebrow}
            </p>
            <h2
              className="text-[clamp(1.8rem,4vw,2.8rem)] font-light leading-[1.15] tracking-[-0.02em] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: '#FAF8F5' }}
            >
              {c.missingPiece.title}
            </h2>
            <p className="text-[clamp(1rem,2vw,1.2rem)] font-light leading-[1.5] mb-6" style={{ color: '#A8A29E' }}>
              {c.missingPiece.subtitle}
            </p>
            <p className="text-[15px] leading-[1.7] mb-10" style={{ color: '#78716C' }}>
              {c.missingPiece.para}
            </p>
            <button
              onClick={() => navigate(`/${language}/products/akupanel-standard-light-oak`)}
              className="inline-flex items-center gap-2 text-[14px] font-semibold px-6 py-3.5 rounded-lg transition-all"
              style={{ backgroundColor: '#B45309', color: '#FFFFFF' }}
            >
              {c.missingPiece.cta} <ArrowRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
