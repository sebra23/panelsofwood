import type { Language } from '../lib/content'

export interface ProductVariant {
  id: string
  name: Record<Language, string>
  color: string
  image: string
  price: number
  originalPrice?: number
}

export interface Product {
  id: string
  slug: string
  name: Record<Language, string>
  subtitle: Record<Language, string>
  description: Record<Language, string>
  longDescription?: Record<Language, string>
  images: string[]
  price: number
  originalPrice?: number
  specs: Record<Language, string[]>
  variants?: ProductVariant[]
  badge?: Record<Language, string>
  collection: string
  reviews?: ProductReview[]
}

export interface ProductReview {
  name: string
  rating: number
  date: string
  text: Record<Language, string>
  city: string
}

export interface Collection {
  id: string
  slug: string
  name: Record<Language, string>
  subtitle: Record<Language, string>
  description: Record<Language, string>
  image: string
}

export const collections: Collection[] = [
  {
    id: 'akupanel-standard',
    slug: 'akupanel-standard',
    name: { de: 'Standard Akustik-Holzpaneele', fr: 'Panneaux Acoustiques Standard', it: 'Pannelli Acustici Standard', en: 'Standard Acoustic Wood Panels' },
    subtitle: { de: 'Unsere beliebteste Kollektion', fr: 'Notre collection la plus populaire', it: 'La nostra collezione più popolare', en: 'Our most popular collection' },
    description: { de: 'Premium Eichen- und Nussbaumpaneele mit Akustikfilz. 60×240 cm. Direkt aus der Schweiz.', fr: 'Panneaux premium en chêne et noyer avec feutre acoustique. 60×240 cm. Expédié de Suisse.', it: 'Pannelli premium in rovere e noce con feltro acustico. 60×240 cm. Spedito dalla Svizzera.', en: 'Premium oak and walnut panels with acoustic felt. 60×240 cm. Shipped from Switzerland.' },
    image: '/akupanel-oak-1.jpg',
  },
  {
    id: 'akupanel-premium',
    slug: 'akupanel-premium',
    name: { de: 'Premium Akustik-Holzpaneele', fr: 'Panneaux Acoustiques Premium', it: 'Pannelli Acustici Premium', en: 'Premium Acoustic Wood Panels' },
    subtitle: { de: 'Extrabreite Lamellen', fr: 'Lamelles extra larges', it: 'Doghe extra larghe', en: 'Extra wide slats' },
    description: { de: 'Breitere Lamellen für einen noch eleganteren Look. Premium-Holz und verbesserter Schallschutz.', fr: 'Lamelles plus larges pour un look encore plus élégant. Bois premium et isolation acoustique améliorée.', it: 'Doghe più larghe per un look ancora più elegante. Legno premium e isolamento acustico migliorato.', en: 'Wider slats for an even more elegant look. Premium wood and improved sound insulation.' },
    image: '/product-premium-wide.jpg',
  },
  {
    id: 'akupanel-eco',
    slug: 'akupanel-eco',
    name: { de: 'ECO Line Akustikpaneele', fr: 'Panneaux Acoustiques ECO', it: 'Pannelli Acustici ECO', en: 'ECO Line Acoustic Panels' },
    subtitle: { de: 'Das beste Preis-Leistungs-Verhältnis', fr: 'Le meilleur rapport qualité-prix', it: 'Il miglior rapporto qualità-prezzo', en: 'Best value for money' },
    description: { de: 'Qualitativ hochwertige Paneele zum fairen Preis. Ideal für erste Projekte.', fr: 'Panneaux de qualité à prix équitable. Idéal pour les premiers projets.', it: 'Pannelli di qualità a prezzo equo. Ideale per i primi progetti.', en: 'Quality panels at a fair price. Ideal for first projects.' },
    image: '/product-eco-line.jpg',
  },
  {
    id: '3d-design',
    slug: '3d-design-paneele',
    name: { de: '3D Design Paneele', fr: 'Panneaux 3D Design', it: 'Pannelli 3D Design', en: '3D Design Panels' },
    subtitle: { de: 'Handgefertigte Kunstwerke', fr: 'Œuvres d\'art faites main', it: 'Opere d\'arte fatte a mano', en: 'Handcrafted artworks' },
    description: { de: 'Geometrische Holzpaneele für einzigartige Wände. Jedes Panel ist ein Unikat.', fr: 'Panneaux de bois géométriques pour des murs uniques. Chaque panneau est unique.', it: 'Pannelli in legno geometrici per pareti uniche. Ogni pannello è unico.', en: 'Geometric wood panels for unique walls. Each panel is one of a kind.' },
    image: '/product-3d-diamond.jpg',
  },
  {
    id: 'exterior',
    slug: 'aussenpaneele',
    name: { de: 'Aussenpaneele', fr: 'Panneaux Extérieurs', it: 'Pannelli Esterni', en: 'Exterior Panels' },
    subtitle: { de: 'Witterungsbeständig', fr: 'Résistant aux intempéries', it: 'Resistente alle intemperie', en: 'Weather resistant' },
    description: { de: 'Aluwood-Fassaden und Terrassenverkleidung für moderne Architektur.', fr: 'Façades Aluwood et bardage de terrasse pour une architecture moderne.', it: 'Facciate Aluwood e rivestimento terrazza per architettura moderna.', en: 'Aluwood facades and terrace cladding for modern architecture.' },
    image: '/product-aluwood-main.jpg',
  },
  {
    id: 'zubehoer',
    slug: 'zubehoer',
    name: { de: 'Zubehör & Muster', fr: 'Accessoires & Échantillons', it: 'Accessori & Campioni', en: 'Accessories & Samples' },
    subtitle: { de: 'Montage & Proben', fr: 'Montage & Échantillons', it: 'Montaggio & Campioni', en: 'Mounting & Samples' },
    description: { de: 'Montageclips, Kleber, Schrauben und Musterboxen für Ihre Planung.', fr: 'Clips de montage, colle, vis et boîtes d\'échantillons pour votre planification.', it: 'Clip di montaggio, colla, viti e scatole campione per la pianificazione.', en: 'Mounting clips, glue, screws and sample boxes for your planning.' },
    image: '/sample-box-new.jpg',
  },
]

export const products: Product[] = [
  // AKUPANEL STANDARD
  {
    id: 'std-oak',
    slug: 'akupanel-standard-light-oak',
    collection: 'akupanel-standard',
    name: { de: 'Akupanel Standard | Light Oak', fr: 'Akupanel Standard | Chêne Clair', it: 'Akupanel Standard | Rovere Chiaro', en: 'Akupanel Standard | Light Oak' },
    subtitle: { de: '60×240 cm · Schwarzer Filz', fr: '60×240 cm · Feutre noir', it: '60×240 cm · Feltro nero', en: '60×240 cm · Black felt' },
    description: { de: 'Unser Bestseller. Natürliche Eiche mit schwarzem Akustikfilz für zeitlose Eleganz.', fr: 'Notre best-seller. Chêne naturel avec feutre acoustique noir pour une élégance intemporelle.', it: 'Il nostro bestseller. Rovere naturale con feltro acustico nero per un eleganza senza tempo.', en: 'Our bestseller. Natural oak with black acoustic felt for timeless elegance.' },
    images: ['/light-oak-main.jpg', '/light-oak-gallery-2.jpg', '/light-oak-gallery-3.jpg', '/light-oak-gallery-4.jpg'],
    price: 59,
    originalPrice: 79,
    specs: {
      de: ['Maße: 60 × 240 cm', 'Material: Eichenfurnier', 'Filz: Polyester, schwarz', 'NRC: 0.85', 'Montage: Clipsystem'],
      fr: ['Dimensions: 60 × 240 cm', 'Matériau: Placage chêne', 'Feutre: Polyester, noir', 'NRC: 0.85', 'Montage: Système clips'],
      it: ['Dimensioni: 60 × 240 cm', 'Materiale: Impiallacciatura rovere', 'Feltro: Poliestere, nero', 'NRC: 0.85', 'Montaggio: Sistema clip'],
      en: ['Dimensions: 60 × 240 cm', 'Material: Oak veneer', 'Felt: Polyester, black', 'NRC: 0.85', 'Mounting: Clip system'],
    },
    badge: { de: 'Bestseller', fr: 'Best-seller', it: 'Bestseller', en: 'Bestseller' },
    longDescription: {
      de: 'Entdecken Sie unsere exquisiten Holzpaneele, die nicht nur eine beeindruckende visuelle Ästhetik bieten, sondern auch eine erstklassige Schalldämpfung. Gefertigt aus hochwertigem MDF und nachhaltigen Materialien, verbessern unsere Akustikpaneele die Raumakustik nachweislich. Jedes Panel wird in der Schweiz verarbeitet und unterliegt strengen Qualitätskontrollen. Die schwarze Filzrückseite absorbiert Schallwellen effektiv und sorgt für ein angenehmes Raumklima. Ideal für Wohnzimmer, Büros, Restaurants und Studios.',
      fr: "Découvrez nos exquis panneaux de bois qui offrent non seulement une esthétique visuelle impressionnante, mais aussi une excellente atténuation du son. Fabriqués à partir de MDF de haute qualité et de matériaux durables, nos panneaux acoustiques améliorent l'acoustique de la pièce de manière prouvée. Chaque panneau est traité en Suisse et soumis à des contrôles qualité stricts. Le feutre noir à l'arrière absorbe efficacement les ondes sonores et crée un climat ambiant agréable. Idéal pour les salons, bureaux, restaurants et studios.",
      it: 'Scoprite i nostri splendidi pannelli in legno che offrono non solo un estetica visiva impressionante, ma anche un eccellente attenuazione del suono. Realizzati in MDF di alta qualità e materiali sostenibili, i nostri pannelli acustici migliorano l\'acustica della stanza in modo dimostrabile. Ogni pannello viene lavorato in Svizzera e sottoposto a rigidi controlli qualità. Il feltro nero sul retro assorbe efficacemente le onde sonore e garantisce un clima ambiente piacevole. Ideale per soggiorni, uffici, ristoranti e studi.',
      en: 'Discover our exquisite wood panels that not only offer an impressive visual aesthetic, but also first-class sound dampening. Made from high-quality MDF and sustainable materials, our acoustic panels demonstrably improve room acoustics. Each panel is processed in Switzerland and subject to strict quality controls. The black felt backing effectively absorbs sound waves and ensures a pleasant room ambience. Ideal for living rooms, offices, restaurants and studios.',
    },
    reviews: [
      { name: 'Laura E.', rating: 5, date: '2024-12-15', city: 'Zürich', text: { de: 'Wunderschöne Verarbeitung, passt perfekt zu unserem Stil.', fr: 'Magnifique finition, correspond parfaitement à notre style.', it: 'Finitura magnifica, si adatta perfettamente al nostro stile.', en: 'Beautiful workmanship, fits perfectly with our style.' } },
      { name: 'Markus H.', rating: 5, date: '2024-11-22', city: 'Basel', text: { de: 'Lieferung in 8-12 Tagen, Montage super einfach. Absolut empfehlenswert!', fr: 'Livraison en 8-12 jours, montage très simple. Absolument recommandable !', it: 'Consegna in 8-12 giorni, montaggio semplicissimo. Assolutamente consigliato!', en: 'Delivery in 8-12 days, assembly super easy. Absolutely recommended!' } },
      { name: 'Sophie L.', rating: 4, date: '2024-10-08', city: 'Genf', text: { de: 'Gute Qualität, aber ich hätte gerne mehr Farboptionen.', fr: 'Bonne qualité, mais j\'aurais aimé plus d\'options de couleurs.', it: 'Buona qualità, ma avrei gradito più opzioni di colore.', en: 'Good quality, but I would have liked more color options.' } },
    ],
  },
  {
    id: 'std-walnut',
    slug: 'akupanel-standard-walnut',
    collection: 'akupanel-standard',
    name: { de: 'Akupanel Standard | Walnut', fr: 'Akupanel Standard | Noyer', it: 'Akupanel Standard | Noce', en: 'Akupanel Standard | Walnut' },
    subtitle: { de: '60×240 cm · Schwarzer Filz', fr: '60×240 cm · Feutre noir', it: '60×240 cm · Feltro nero', en: '60×240 cm · Black felt' },
    description: { de: 'Reicher, dunkler Nussbaum für edle Räume. Premium-Qualität aus nachhaltigem Anbau.', fr: 'Noyer riche et foncé pour des espaces nobles. Qualité premium de culture durable.', it: 'Noce ricco e scuro per ambienti nobili. Qualità premium da coltivazione sostenibile.', en: 'Rich, dark walnut for refined spaces. Premium quality from sustainable cultivation.' },
    images: ['/walnut-main.jpg', '/walnut-gallery-2.jpg', '/walnut-gallery-3.jpg', '/walnut-gallery-4.jpg'],
    price: 69,
    originalPrice: 89,
    specs: {
      de: ['Maße: 60 × 240 cm', 'Material: Nussbaumfurnier', 'Filz: Polyester, schwarz', 'NRC: 0.85', 'Montage: Clipsystem'],
      fr: ['Dimensions: 60 × 240 cm', 'Matériau: Placage noyer', 'Feutre: Polyester, noir', 'NRC: 0.85', 'Montage: Système clips'],
      it: ['Dimensioni: 60 × 240 cm', 'Materiale: Impiallacciatura noce', 'Feltro: Poliestere, nero', 'NRC: 0.85', 'Montaggio: Sistema clip'],
      en: ['Dimensions: 60 × 240 cm', 'Material: Walnut veneer', 'Felt: Polyester, black', 'NRC: 0.85', 'Mounting: Clip system'],
    },
    badge: { de: 'Premium', fr: 'Premium', it: 'Premium', en: 'Premium' },
    reviews: [
      { name: 'Andrea B.', rating: 5, date: '2024-12-01', city: 'Lugano', text: { de: 'Der Nussbaum-Look ist atemberaubend. Echte Premium-Qualität.', fr: "L'aspect noyer est époustouflant. Véritable qualité premium.", it: 'L\'aspetto noce è mozzafiato. Vera qualità premium.', en: 'The walnut look is stunning. Real premium quality.' } },
    ],
  },
  {
    id: 'std-black',
    slug: 'akupanel-standard-graphite',
    collection: 'akupanel-standard',
    name: { de: 'Akupanel Standard | Graphite', fr: 'Akupanel Standard | Graphite', it: 'Akupanel Standard | Grafite', en: 'Akupanel Standard | Graphite' },
    subtitle: { de: '60×240 cm · Schwarzer Filz', fr: '60×240 cm · Feutre noir', it: '60×240 cm · Feltro nero', en: '60×240 cm · Black felt' },
    description: { de: 'Moderner, minimalistischer Look. Graphit-Ton für zeitgemäße Interiors.', fr: 'Look moderne et minimaliste. Ton graphite pour des intérieurs contemporains.', it: 'Look moderno e minimalista. Tono grafite per interni contemporanei.', en: 'Modern, minimalist look. Graphite tone for contemporary interiors.' },
    images: ['/graphite-main.jpg', '/graphite-gallery-2.jpg', '/graphite-gallery-3.jpg', '/graphite-gallery-4.jpg'],
    price: 69,
    specs: {
      de: ['Maße: 60 × 240 cm', 'Material: Eschenfurnier, schwarz', 'Filz: Polyester, schwarz', 'NRC: 0.85', 'Montage: Clipsystem'],
      fr: ['Dimensions: 60 × 240 cm', 'Matériau: Placage frêne, noir', 'Feutre: Polyester, noir', 'NRC: 0.85', 'Montage: Système clips'],
      it: ['Dimensioni: 60 × 240 cm', 'Materiale: Impiallacciatura frassino, nero', 'Feltro: Poliestere, nero', 'NRC: 0.85', 'Montaggio: Sistema clip'],
      en: ['Dimensions: 60 × 240 cm', 'Material: Ash veneer, black', 'Felt: Polyester, black', 'NRC: 0.85', 'Mounting: Clip system'],
    },
  },
  {
    id: 'std-grey',
    slug: 'akupanel-standard-grey',
    collection: 'akupanel-standard',
    name: { de: 'Akupanel Standard | Grey', fr: 'Akupanel Standard | Gris', it: 'Akupanel Standard | Grigio', en: 'Akupanel Standard | Grey' },
    subtitle: { de: '60×240 cm · Grauer Filz', fr: '60×240 cm · Feutre gris', it: '60×240 cm · Feltro grigio', en: '60×240 cm · Grey felt' },
    description: { de: 'Kühle, nordische Ästhetik. Graue Oberfläche mit passendem Filz für harmonische Räume.', fr: 'Esthétique nordique fraîche. Surface grise avec feutre assorti pour des espaces harmonieux.', it: 'Estetica nordica fresca. Superficie grigia con feltro abbinato per ambienti armoniosi.', en: 'Cool, Nordic aesthetic. Grey surface with matching felt for harmonious spaces.' },
    images: ['/grey-main.jpg', '/grey-gallery-2.jpg', '/grey-gallery-3.jpg', '/grey-gallery-4.jpg'],
    price: 64,
    originalPrice: 79,
    specs: {
      de: ['Maße: 60 × 240 cm', 'Material: Eschenfurnier, grau', 'Filz: Polyester, grau', 'NRC: 0.85', 'Montage: Clipsystem'],
      fr: ['Dimensions: 60 × 240 cm', 'Matériau: Placage frêne, gris', 'Feutre: Polyester, gris', 'NRC: 0.85', 'Montage: Système clips'],
      it: ['Dimensioni: 60 × 240 cm', 'Materiale: Impiallacciatura frassino, grigio', 'Feltro: Poliestere, grigio', 'NRC: 0.85', 'Montaggio: Sistema clip'],
      en: ['Dimensions: 60 × 240 cm', 'Material: Ash veneer, grey', 'Felt: Polyester, grey', 'NRC: 0.85', 'Mounting: Clip system'],
    },
  },
  {
    id: 'std-sonoma',
    slug: 'akupanel-standard-sonoma-oak',
    collection: 'akupanel-standard',
    name: { de: 'Akupanel Standard | Sonoma Oak', fr: 'Akupanel Standard | Chêne Sonoma', it: 'Akupanel Standard | Rovere Sonoma', en: 'Akupanel Standard | Sonoma Oak' },
    subtitle: { de: '60×240 cm · Schwarzer Filz', fr: '60×240 cm · Feutre noir', it: '60×240 cm · Feltro nero', en: '60×240 cm · Black felt' },
    description: { de: 'Warme Sonoma-Eiche für mediterrane Eleganz. Dezenter Goldton für sonnendurchflutete Räume.', fr: 'Chêne Sonoma chaud pour une élégance méditerranéenne. Ton doré discret pour des espaces ensoleillés.', it: 'Rovere Sonoma caldo per eleganza mediterranea. Tono dorato discreto per ambienti soleggiati.', en: 'Warm Sonoma oak for Mediterranean elegance. Subtle golden tone for sunlit spaces.' },
    images: ['/sonoma-oak-main.jpg', '/sonoma-oak-gallery-2.jpg', '/sonoma-oak-gallery-3.jpg', '/sonoma-oak-gallery-4.jpg'],
    price: 62,
    originalPrice: 79,
    specs: {
      de: ['Maße: 60 × 240 cm', 'Material: Eichenfurnier, Sonoma', 'Filz: Polyester, schwarz', 'NRC: 0.85', 'Montage: Clipsystem'],
      fr: ['Dimensions: 60 × 240 cm', 'Matériau: Placage chêne, Sonoma', 'Feutre: Polyester, noir', 'NRC: 0.85', 'Montage: Système clips'],
      it: ['Dimensioni: 60 × 240 cm', 'Materiale: Impiallacciatura rovere, Sonoma', 'Feltro: Poliestere, nero', 'NRC: 0.85', 'Montaggio: Sistema clip'],
      en: ['Dimensions: 60 × 240 cm', 'Material: Oak veneer, Sonoma', 'Felt: Polyester, black', 'NRC: 0.85', 'Mounting: Clip system'],
    },
  },
  {
    id: 'std-rustic',
    slug: 'akupanel-standard-rustic-oak',
    collection: 'akupanel-standard',
    name: { de: 'Akupanel Standard | Rustic Oak', fr: 'Akupanel Standard | Chêne Rustique', it: 'Akupanel Standard | Rovere Rustico', en: 'Akupanel Standard | Rustic Oak' },
    subtitle: { de: '60×240 cm · Schwarzer Filz', fr: '60×240 cm · Feutre noir', it: '60×240 cm · Feltro nero', en: '60×240 cm · Black felt' },
    description: { de: 'Charaktervolle Rustik-Eiche mit natürlichen Astlöchern und lebhafter Maserung. Für authentische Landhaus-Atmosphäre.', fr: 'Chêne rustique caractériel avec nœuds naturels et grain vivant. Pour une ambiance authentique de campagne.', it: 'Rovere rustico caratteristico con nodi naturali e venatura vivace. Per un\'atmosfera autentica di campagna.', en: 'Characterful rustic oak with natural knots and lively grain. For authentic farmhouse atmosphere.' },
    images: ['/rustic-oak-main.jpg', '/rustic-oak-gallery-2.jpg', '/rustic-oak-gallery-3.jpg', '/rustic-oak-gallery-4.jpg'],
    price: 64,
    originalPrice: 79,
    specs: {
      de: ['Maße: 60 × 240 cm', 'Material: Eichenfurnier, rustik', 'Filz: Polyester, schwarz', 'NRC: 0.85', 'Montage: Clipsystem'],
      fr: ['Dimensions: 60 × 240 cm', 'Matériau: Placage chêne, rustique', 'Feutre: Polyester, noir', 'NRC: 0.85', 'Montage: Système clips'],
      it: ['Dimensioni: 60 × 240 cm', 'Materiale: Impiallacciatura rovere, rustico', 'Feltro: Poliestere, nero', 'NRC: 0.85', 'Montaggio: Sistema clip'],
      en: ['Dimensions: 60 × 240 cm', 'Material: Oak veneer, rustic', 'Felt: Polyester, black', 'NRC: 0.85', 'Mounting: Clip system'],
    },
  },
  // AKUPANEL PREMIUM
  {
    id: 'prm-oak',
    slug: 'akupanel-premium-light-oak',
    collection: 'akupanel-premium',
    name: { de: 'Akupanel Premium | Light Oak', fr: 'Akupanel Premium | Chêne Clair', it: 'Akupanel Premium | Rovere Chiaro', en: 'Akupanel Premium | Light Oak' },
    subtitle: { de: '60×240 cm · Breite Lamellen · Schwarzer Filz', fr: '60×240 cm · Lamelles larges · Feutre noir', it: '60×240 cm · Doghe larghe · Feltro nero', en: '60×240 cm · Wide slats · Black felt' },
    description: { de: 'Extrabreite Lamellen für einen luxuriösen Look. Höhere Materialstärke und verbesserter Schallschutz.', fr: 'Lamelles extra larges pour un look luxueux. Épaisseur de matériau supérieure et isolation acoustique améliorée.', it: 'Doghe extra larghe per un look lussuoso. Spessore materiale superiore e isolamento acustico migliorato.', en: 'Extra wide slats for a luxurious look. Higher material thickness and improved sound insulation.' },
    images: ['/akupanel-light-oak-main.jpg', '/akupanel-light-oak-2.jpg', '/product-premium-wide.jpg', '/akupanel-oak-1.jpg', '/product-akupanel-detail.jpg'],
    price: 89,
    originalPrice: 109,
    specs: {
      de: ['Maße: 60 × 240 cm', 'Material: Eichenfurnier, 22mm', 'Filz: Polyester, schwarz, 12mm', 'NRC: 0.92', 'Montage: Clipsystem'],
      fr: ['Dimensions: 60 × 240 cm', 'Matériau: Placage chêne, 22mm', 'Feutre: Polyester, noir, 12mm', 'NRC: 0.92', 'Montage: Système clips'],
      it: ['Dimensioni: 60 × 240 cm', 'Materiale: Impiallacciatura rovere, 22mm', 'Feltro: Poliestere, nero, 12mm', 'NRC: 0.92', 'Montaggio: Sistema clip'],
      en: ['Dimensions: 60 × 240 cm', 'Material: Oak veneer, 22mm', 'Felt: Polyester, black, 12mm', 'NRC: 0.92', 'Mounting: Clip system'],
    },
  },
  {
    id: 'prm-walnut',
    slug: 'akupanel-premium-walnut',
    collection: 'akupanel-premium',
    name: { de: 'Akupanel Premium | Walnut', fr: 'Akupanel Premium | Noyer', it: 'Akupanel Premium | Noce', en: 'Akupanel Premium | Walnut' },
    subtitle: { de: '60×240 cm · Breite Lamellen · Schwarzer Filz', fr: '60×240 cm · Lamelles larges · Feutre noir', it: '60×240 cm · Doghe larghe · Feltro nero', en: '60×240 cm · Wide slats · Black felt' },
    description: { de: 'Edler Nussbaum mit breiten Lamellen. Maximale Wirkung für hochwertige Innenräume.', fr: 'Noyer noble avec lamelles larges. Impact maximal pour des intérieurs haut de gamme.', it: 'Noce nobile con doghe larghe. Massimo impatto per interni di alta gamma.', en: 'Noble walnut with wide slats. Maximum impact for high-end interiors.' },
    images: ['/product-walnut-restaurant.jpg', '/akupanel-oak-6.jpg', '/product-akupanel-detail.jpg'],
    price: 99,
    originalPrice: 119,
    specs: {
      de: ['Maße: 60 × 240 cm', 'Material: Nussbaumfurnier, 22mm', 'Filz: Polyester, schwarz, 12mm', 'NRC: 0.92', 'Montage: Clipsystem'],
      fr: ['Dimensions: 60 × 240 cm', 'Matériau: Placage noyer, 22mm', 'Feutre: Polyester, noir, 12mm', 'NRC: 0.92', 'Montage: Système clips'],
      it: ['Dimensioni: 60 × 240 cm', 'Materiale: Impiallacciatura noce, 22mm', 'Feltro: Poliestere, nero, 12mm', 'NRC: 0.92', 'Montaggio: Sistema clip'],
      en: ['Dimensions: 60 × 240 cm', 'Material: Walnut veneer, 22mm', 'Felt: Polyester, black, 12mm', 'NRC: 0.92', 'Mounting: Clip system'],
    },
  },
  {
    id: 'prm-graphite',
    slug: 'akupanel-premium-graphite',
    collection: 'akupanel-premium',
    name: { de: 'Akupanel Premium | Graphite', fr: 'Akupanel Premium | Graphite', it: 'Akupanel Premium | Grafite', en: 'Akupanel Premium | Graphite' },
    subtitle: { de: '60×240 cm · Breite Lamellen · Schwarzer Filz', fr: '60×240 cm · Lamelles larges · Feutre noir', it: '60×240 cm · Doghe larghe · Feltro nero', en: '60×240 cm · Wide slats · Black felt' },
    description: { de: 'Dramatischer Graphit-Ton mit breiten Lamellen. Maximaler Kontrast für zeitgemäße Interiors.', fr: 'Ton graphite dramatique avec lamelles larges. Contraste maximal pour des intérieurs contemporains.', it: 'Tono grafite drammatico con doghe larghe. Contrasto massimo per interni contemporanei.', en: 'Dramatic graphite tone with wide slats. Maximum contrast for contemporary interiors.' },
    images: ['/akupanel-oak-7.jpg', '/akupanel-oak-8.jpg', '/product-akupanel-detail.jpg'],
    price: 99,
    originalPrice: 119,
    specs: {
      de: ['Maße: 60 × 240 cm', 'Material: Eschenfurnier, 22mm', 'Filz: Polyester, schwarz, 12mm', 'NRC: 0.92', 'Montage: Clipsystem'],
      fr: ['Dimensions: 60 × 240 cm', 'Matériau: Placage frêne, 22mm', 'Feutre: Polyester, noir, 12mm', 'NRC: 0.92', 'Montage: Système clips'],
      it: ['Dimensioni: 60 × 240 cm', 'Materiale: Impiallacciatura frassino, 22mm', 'Feltro: Poliestere, nero, 12mm', 'NRC: 0.92', 'Montaggio: Sistema clip'],
      en: ['Dimensions: 60 × 240 cm', 'Material: Ash veneer, 22mm', 'Felt: Polyester, black, 12mm', 'NRC: 0.92', 'Mounting: Clip system'],
    },
  },
  {
    id: 'prm-grey',
    slug: 'akupanel-premium-grey',
    collection: 'akupanel-premium',
    name: { de: 'Akupanel Premium | Grey', fr: 'Akupanel Premium | Gris', it: 'Akupanel Premium | Grigio', en: 'Akupanel Premium | Grey' },
    subtitle: { de: '60×240 cm · Breite Lamellen · Grauer Filz', fr: '60×240 cm · Lamelles larges · Feutre gris', it: '60×240 cm · Doghe larghe · Feltro grigio', en: '60×240 cm · Wide slats · Grey felt' },
    description: { de: 'Kühles Premium-Grau mit breiten Lamellen. Nordische Ruhe für gehobene Räume.', fr: 'Gris premium frais avec lamelles larges. Calme nordique pour des espaces raffinés.', it: 'Grigio premium fresco con doghe larghe. Calma nordica per ambienti raffinati.', en: 'Cool premium grey with wide slats. Nordic calm for refined spaces.' },
    images: ['/akupanel-oak-8.jpg', '/product-premium-wide.jpg', '/product-akupanel-detail.jpg'],
    price: 94,
    originalPrice: 119,
    specs: {
      de: ['Maße: 60 × 240 cm', 'Material: Eschenfurnier, 22mm', 'Filz: Polyester, grau, 12mm', 'NRC: 0.92', 'Montage: Clipsystem'],
      fr: ['Dimensions: 60 × 240 cm', 'Matériau: Placage frêne, 22mm', 'Feutre: Polyester, gris, 12mm', 'NRC: 0.92', 'Montage: Système clips'],
      it: ['Dimensioni: 60 × 240 cm', 'Materiale: Impiallacciatura frassino, 22mm', 'Feltro: Poliestere, grigio, 12mm', 'NRC: 0.92', 'Montaggio: Sistema clip'],
      en: ['Dimensions: 60 × 240 cm', 'Material: Ash veneer, 22mm', 'Felt: Polyester, grey, 12mm', 'NRC: 0.92', 'Mounting: Clip system'],
    },
  },
  // ECO LINE
  {
    id: 'eco-oak',
    slug: 'akupanel-eco-light-oak',
    collection: 'akupanel-eco',
    name: { de: 'Akupanel ECO | Light Oak', fr: 'Akupanel ECO | Chêne Clair', it: 'Akupanel ECO | Rovere Chiaro', en: 'Akupanel ECO | Light Oak' },
    subtitle: { de: '60×240 cm · Schwarzer Filz · Dünne Lamellen', fr: '60×240 cm · Feutre noir · Lamelles fines', it: '60×240 cm · Feltro nero · Doghe sottili', en: '60×240 cm · Black felt · Thin slats' },
    description: { de: 'Die ECO Line bietet alle Vorteile unserer Akustikpaneele zum attraktiven Einstiegspreis. Ideal für erste Projekte und Budget-Bewusste.', fr: 'La ligne ECO offre tous les avantages de nos panneaux acoustiques à un prix d\'entrée attractif. Idéal pour les premiers projets et les budgets serrés.', it: 'La linea ECO offre tutti i vantaggi dei nostri pannelli acustici a un prezzo entry-level interessante. Ideale per i primi progetti e budget limitati.', en: 'The ECO Line offers all the benefits of our acoustic panels at an attractive entry-level price. Ideal for first projects and budget-conscious buyers.' },
    images: ['/akupanel-light-oak-main.jpg', '/akupanel-light-oak-2.jpg', '/product-eco-line.jpg', '/akupanel-oak-3.jpg', '/product-akupanel-detail.jpg'],
    price: 49,
    originalPrice: 69,
    specs: {
      de: ['Maße: 60 × 240 cm', 'Material: Eichenfurnier, 18mm', 'Filz: Polyester, schwarz, 9mm', 'NRC: 0.75', 'Montage: Clipsystem'],
      fr: ['Dimensions: 60 × 240 cm', 'Matériau: Placage chêne, 18mm', 'Feutre: Polyester, noir, 9mm', 'NRC: 0.75', 'Montage: Système clips'],
      it: ['Dimensioni: 60 × 240 cm', 'Materiale: Impiallacciatura rovere, 18mm', 'Feltro: Poliestere, nero, 9mm', 'NRC: 0.75', 'Montaggio: Sistema clip'],
      en: ['Dimensions: 60 × 240 cm', 'Material: Oak veneer, 18mm', 'Felt: Polyester, black, 9mm', 'NRC: 0.75', 'Mounting: Clip system'],
    },
    badge: { de: '-30%', fr: '-30%', it: '-30%', en: '-30%' },
    reviews: [
      { name: 'David L.', rating: 5, date: '2024-11-30', city: 'Bern', text: { de: 'Super Preis-Leistung! Für den Preis unschlagbar.', fr: 'Super rapport qualité-prix ! Imparable pour le prix.', it: 'Ottimo rapporto qualità-prezzo! Imbattibile per il prezzo.', en: 'Great value for money! Unbeatable for the price.' } },
    ],
  },
  {
    id: 'eco-walnut',
    slug: 'akupanel-eco-walnut',
    collection: 'akupanel-eco',
    name: { de: 'Akupanel ECO | Walnut', fr: 'Akupanel ECO | Noyer', it: 'Akupanel ECO | Noce', en: 'Akupanel ECO | Walnut' },
    subtitle: { de: '60×240 cm · Schwarzer Filz · Dünne Lamellen', fr: '60×240 cm · Feutre noir · Lamelles fines', it: '60×240 cm · Feltro nero · Doghe sottili', en: '60×240 cm · Black felt · Thin slats' },
    description: { de: 'Nussbaum-Optik zum Einstiegspreis. Perfektes Preis-Leistungs-Verhältnis für Einsteiger.', fr: 'Aspect noyer à prix d\'entrée. Excellent rapport qualité-prix pour les débutants.', it: 'Aspetto noce a prezzo entry-level. Ottimo rapporto qualità-prezzo per i principianti.', en: 'Walnut look at entry-level price. Perfect value for beginners.' },
    images: ['/akupanel-oak-6.jpg', '/product-eco-line.jpg', '/product-akupanel-detail.jpg'],
    price: 54,
    originalPrice: 74,
    specs: {
      de: ['Maße: 60 × 240 cm', 'Material: Nussbaumfurnier, 18mm', 'Filz: Polyester, schwarz, 9mm', 'NRC: 0.75', 'Montage: Clipsystem'],
      fr: ['Dimensions: 60 × 240 cm', 'Matériau: Placage noyer, 18mm', 'Feutre: Polyester, noir, 9mm', 'NRC: 0.75', 'Montage: Système clips'],
      it: ['Dimensioni: 60 × 240 cm', 'Materiale: Impiallacciatura noce, 18mm', 'Feltro: Poliestere, nero, 9mm', 'NRC: 0.75', 'Montaggio: Sistema clip'],
      en: ['Dimensions: 60 × 240 cm', 'Material: Walnut veneer, 18mm', 'Felt: Polyester, black, 9mm', 'NRC: 0.75', 'Mounting: Clip system'],
    },
  },
  {
    id: 'eco-graphite',
    slug: 'akupanel-eco-graphite',
    collection: 'akupanel-eco',
    name: { de: 'Akupanel ECO | Graphite', fr: 'Akupanel ECO | Graphite', it: 'Akupanel ECO | Grafite', en: 'Akupanel ECO | Graphite' },
    subtitle: { de: '60×240 cm · Schwarzer Filz · Dünne Lamellen', fr: '60×240 cm · Feutre noir · Lamelles fines', it: '60×240 cm · Feltro nero · Doghe sottili', en: '60×240 cm · Black felt · Thin slats' },
    description: { de: 'Dunkle ECO-Line in Graphit. Budgetfreundlicher Einstieg in die Welt der Akustikpaneele.', fr: 'Ligne ECO foncée en graphite. Entrée économique dans le monde des panneaux acoustiques.', it: 'Linea ECO scura in grafite. Ingresso economico nel mondo dei pannelli acustici.', en: 'Dark ECO line in graphite. Budget-friendly entry into the world of acoustic panels.' },
    images: ['/akupanel-oak-7.jpg', '/akupanel-oak-8.jpg', '/product-akupanel-detail.jpg'],
    price: 54,
    originalPrice: 74,
    specs: {
      de: ['Maße: 60 × 240 cm', 'Material: Eschenfurnier, 18mm', 'Filz: Polyester, schwarz, 9mm', 'NRC: 0.75', 'Montage: Clipsystem'],
      fr: ['Dimensions: 60 × 240 cm', 'Matériau: Placage frêne, 18mm', 'Feutre: Polyester, noir, 9mm', 'NRC: 0.75', 'Montage: Système clips'],
      it: ['Dimensioni: 60 × 240 cm', 'Materiale: Impiallacciatura frassino, 18mm', 'Feltro: Poliestere, nero, 9mm', 'NRC: 0.75', 'Montaggio: Sistema clip'],
      en: ['Dimensions: 60 × 240 cm', 'Material: Ash veneer, 18mm', 'Felt: Polyester, black, 9mm', 'NRC: 0.75', 'Mounting: Clip system'],
    },
  },
  {
    id: 'eco-grey',
    slug: 'akupanel-eco-grey',
    collection: 'akupanel-eco',
    name: { de: 'Akupanel ECO | Grey', fr: 'Akupanel ECO | Gris', it: 'Akupanel ECO | Grigio', en: 'Akupanel ECO | Grey' },
    subtitle: { de: '60×240 cm · Grauer Filz · Dünne Lamellen', fr: '60×240 cm · Feutre gris · Lamelles fines', it: '60×240 cm · Feltro grigio · Doghe sottili', en: '60×240 cm · Grey felt · Thin slats' },
    description: { de: 'Kühles ECO-Grau für minimalistische Budget-Projekte. Alle Vorteile zum Einstiegspreis.', fr: 'Gris ECO frais pour des projets minimalistes budgétaires. Tous les avantages à prix d\'entrée.', it: 'Grigio ECO fresco per progetti minimalisti a budget. Tutti i vantaggi a prezzo entry-level.', en: 'Cool ECO grey for minimalist budget projects. All benefits at entry-level price.' },
    images: ['/akupanel-oak-8.jpg', '/product-eco-line.jpg', '/product-akupanel-detail.jpg'],
    price: 49,
    originalPrice: 69,
    specs: {
      de: ['Maße: 60 × 240 cm', 'Material: Eschenfurnier, 18mm', 'Filz: Polyester, grau, 9mm', 'NRC: 0.75', 'Montage: Clipsystem'],
      fr: ['Dimensions: 60 × 240 cm', 'Matériau: Placage frêne, 18mm', 'Feutre: Polyester, gris, 9mm', 'NRC: 0.75', 'Montage: Système clips'],
      it: ['Dimensioni: 60 × 240 cm', 'Materiale: Impiallacciatura frassino, 18mm', 'Feltro: Poliestere, grigio, 9mm', 'NRC: 0.75', 'Montaggio: Sistema clip'],
      en: ['Dimensions: 60 × 240 cm', 'Material: Ash veneer, 18mm', 'Felt: Polyester, grey, 9mm', 'NRC: 0.75', 'Mounting: Clip system'],
    },
  },
  // 3D DESIGN
  {
    id: '3d-diamond',
    slug: '3d-paneel-diamond',
    collection: '3d-design',
    name: { de: '3D Paneel | Diamond', fr: 'Panneau 3D | Diamond', it: 'Pannello 3D | Diamond', en: '3D Panel | Diamond' },
    subtitle: { de: '60×60 cm · Massivholz · Wandmontage', fr: '60×60 cm · Bois massif · Montage mural', it: '60×60 cm · Legno massello · Montaggio a parete', en: '60×60 cm · Solid wood · Wall mount' },
    description: { de: 'Geometrisches Diamant-Muster aus massivem Eichenholz. Jedes Panel ist handgefertigt und ein Unikat.', fr: 'Motif géométrique diamant en chêne massif. Chaque panneau est fait main et unique.', it: 'Motivo geometrico diamante in rovere massello. Ogni pannello è fatto a mano e unico.', en: 'Geometric diamond pattern in solid oak. Each panel is handcrafted and one of a kind.' },
    images: ['/product-3d-diamond.jpg', '/product-3d-pyramid.jpg', '/product-3d-wave.jpg'],
    price: 56,
    specs: {
      de: ['Maße: 60 × 60 cm', 'Material: Massive Eiche, 25mm', 'Oberfläche: Natur geölt', 'Montage: Direktmontage oder Rahmen'],
      fr: ['Dimensions: 60 × 60 cm', 'Matériau: Chêne massif, 25mm', 'Surface: Huilé naturel', 'Montage: Montage direct ou cadre'],
      it: ['Dimensioni: 60 × 60 cm', 'Materiale: Rovere massello, 25mm', 'Superficie: Olio naturale', 'Montaggio: Montaggio diretto o cornice'],
      en: ['Dimensions: 60 × 60 cm', 'Material: Solid oak, 25mm', 'Surface: Natural oiled', 'Mounting: Direct mount or frame'],
    },
  },
  {
    id: '3d-pyramid',
    slug: '3d-paneel-pyramid',
    collection: '3d-design',
    name: { de: '3D Paneel | Pyramid', fr: 'Panneau 3D | Pyramid', it: 'Pannello 3D | Pyramid', en: '3D Panel | Pyramid' },
    subtitle: { de: '60×60 cm · Massivholz · Wandmontage', fr: '60×60 cm · Bois massif · Montage mural', it: '60×60 cm · Legno massello · Montaggio a parete', en: '60×60 cm · Solid wood · Wall mount' },
    description: { de: 'Dreidimensionale Pyramiden-Struktur für dramatische Licht- und Schatteneffekte.', fr: 'Structure pyramidale tridimensionale pour des effets de lumière et d\'ombre dramatiques.', it: 'Struttura piramidale tridimensionale per effetti di luce e ombra drammatici.', en: 'Three-dimensional pyramid structure for dramatic light and shadow effects.' },
    images: ['/product-3d-pyramid.jpg', '/product-3d-diamond.jpg', '/product-3d-wave.jpg'],
    price: 52,
    specs: {
      de: ['Maße: 60 × 60 cm', 'Material: Massive Eiche, 25mm', 'Oberfläche: Natur geölt', 'Montage: Direktmontage oder Rahmen'],
      fr: ['Dimensions: 60 × 60 cm', 'Matériau: Chêne massif, 25mm', 'Surface: Huilé naturel', 'Montage: Montage direct ou cadre'],
      it: ['Dimensioni: 60 × 60 cm', 'Materiale: Rovere massello, 25mm', 'Superficie: Olio naturale', 'Montaggio: Montaggio diretto o cornice'],
      en: ['Dimensions: 60 × 60 cm', 'Material: Solid oak, 25mm', 'Surface: Natural oiled', 'Mounting: Direct mount or frame'],
    },
  },
  {
    id: '3d-wave',
    slug: '3d-paneel-wave',
    collection: '3d-design',
    name: { de: '3D Paneel | Wave', fr: 'Panneau 3D | Wave', it: 'Pannello 3D | Wave', en: '3D Panel | Wave' },
    subtitle: { de: '60×60 cm · Massivholz · Wandmontage', fr: '60×60 cm · Bois massif · Montage mural', it: '60×60 cm · Legno massello · Montaggio a parete', en: '60×60 cm · Solid wood · Wall mount' },
    description: { de: 'Organische Wellenform für sanfte, fließende Wandgestaltung.', fr: 'Forme ondulée organique pour une décoration murale douce et fluide.', it: 'Forma ondulata organica per una decorazione murale morbida e fluida.', en: 'Organic wave form for soft, flowing wall design.' },
    images: ['/product-3d-wave.jpg', '/product-3d-diamond.jpg', '/product-3d-pyramid.jpg'],
    price: 58,
    specs: {
      de: ['Maße: 60 × 60 cm', 'Material: Massive Eiche, 25mm', 'Oberfläche: Natur geölt', 'Montage: Direktmontage oder Rahmen'],
      fr: ['Dimensions: 60 × 60 cm', 'Matériau: Chêne massif, 25mm', 'Surface: Huilé naturel', 'Montage: Montage direct ou cadre'],
      it: ['Dimensioni: 60 × 60 cm', 'Materiale: Rovere massello, 25mm', 'Superficie: Olio naturale', 'Montaggio: Montaggio diretto o cornice'],
      en: ['Dimensions: 60 × 60 cm', 'Material: Solid oak, 25mm', 'Surface: Natural oiled', 'Mounting: Direct mount or frame'],
    },
  },
  // EXTERIOR
  {
    id: 'ext-aluwood',
    slug: 'aluwood-fassade',
    collection: 'exterior',
    name: { de: 'Aluwood Fassadensystem', fr: 'Système de Façade Aluwood', it: 'Sistema Facciata Aluwood', en: 'Aluwood Facade System' },
    subtitle: { de: 'Aluminium-Holz-Verbund · Wetterfest', fr: 'Composite aluminium-bois · Résistant', it: 'Composito alluminio-legno · Resistente', en: 'Aluminum-wood composite · Weatherproof' },
    description: { de: 'Hochwertiges Fassadensystem aus Aluminium-Holz-Verbund. Witterungsbeständig, wartungsarm und ästhetisch.', fr: 'Système de façade haut de gamme en composite aluminium-bois. Résistant aux intempéries, peu d\'entretien et esthétique.', it: 'Sistema facciata di alta gamma in composito alluminio-legno. Resistente alle intemperie, bassa manutenzione ed estetico.', en: 'High-end facade system in aluminum-wood composite. Weatherproof, low maintenance and aesthetic.' },
    images: ['/product-aluwood-main.jpg', '/exterior-facade-2.jpg', '/product-aluwood-detail.jpg'],
    price: 129,
    specs: {
      de: ['Maße: 180 × 20 cm', 'Material: Alu-Holz-Verbund', 'Oberfläche: UV-stabil', 'Lebensdauer: 25+ Jahre', 'Montage: Unterkonstruktion'],
      fr: ['Dimensions: 180 × 20 cm', 'Matériau: Composite alu-bois', 'Surface: UV-stable', 'Durée de vie: 25+ ans', 'Montage: Sous-structure'],
      it: ['Dimensioni: 180 × 20 cm', 'Materiale: Composito alluminio-legno', 'Superficie: UV-stabile', 'Durata: 25+ anni', 'Montaggio: Sottostruttura'],
      en: ['Dimensions: 180 × 20 cm', 'Material: Alu-wood composite', 'Surface: UV-stable', 'Lifespan: 25+ years', 'Mounting: Substructure'],
    },
  },
  {
    id: 'ext-terrace',
    slug: 'terrasse-verkleidung',
    collection: 'exterior',
    name: { de: 'Terrassenverkleidung', fr: 'Bardage de Terrasse', it: 'Rivestimento Terrazza', en: 'Terrace Cladding' },
    subtitle: { de: 'Witterungsbeständiges Holz · FSC', fr: 'Bois résistant · FSC', it: 'Legno resistente · FSC', en: 'Weather-resistant wood · FSC' },
    description: { de: 'Hochwertige Terrassenverkleidung aus witterungsbeständigem Holz. FSC-zertifiziert und nachhaltig.', fr: 'Bardage de terrasse haut de gamme en bois résistant aux intempéries. Certifié FSC et durable.', it: 'Rivestimento terrazza di alta gamma in legno resistente alle intemperie. Certificato FSC e sostenibile.', en: 'High-quality terrace cladding in weather-resistant wood. FSC certified and sustainable.' },
    images: ['/product-outdoor-main.jpg', '/product-outdoor-detail.jpg', '/exterior-facade-2.jpg'],
    price: 89,
    specs: {
      de: ['Maße: 200 × 14 cm', 'Material: Thermoholz, FSC', 'Oberfläche: Natur geölt', 'Lebensdauer: 20+ Jahre', 'Montage: Versteckte Befestigung'],
      fr: ['Dimensions: 200 × 14 cm', 'Matériau: Bois thermo, FSC', 'Surface: Huilé naturel', 'Durée de vie: 20+ ans', 'Montage: Fixation cachée'],
      it: ['Dimensioni: 200 × 14 cm', 'Materiale: Legno termo, FSC', 'Superficie: Olio naturale', 'Durata: 20+ anni', 'Montaggio: Fissaggio nascosto'],
      en: ['Dimensions: 200 × 14 cm', 'Material: Thermowood, FSC', 'Surface: Natural oiled', 'Lifespan: 20+ years', 'Mounting: Hidden fastening'],
    },
  },
  // ACCESSORIES
  {
    id: 'acc-sample-box',
    slug: 'musterbox',
    collection: 'zubehoer',
    name: { de: 'Musterbox', fr: 'Boîte d\'Échantillons', it: 'Scatola Campioni', en: 'Sample Box' },
    subtitle: { de: '7 Holzproben · Alle Kollektionen', fr: '7 échantillons · Toutes collections', it: '7 campioni · Tutte le collezioni', en: '7 wood samples · All collections' },
    description: { de: 'Bestellen Sie vorab unsere Musterbox mit 7 verschiedenen Holzproben. So finden Sie die perfekte Farbe für Ihr Projekt.', fr: 'Commandez d\'abord notre boîte d\'échantillons avec 7 échantillons de bois différents. Trouvez la couleur parfaite pour votre projet.', it: 'Ordina prima la nostra scatola campione con 7 campioni di legno diversi. Trova il colore perfetto per il tuo progetto.', en: 'Order our sample box with 7 different wood samples first. Find the perfect color for your project.' },
    images: ['/sample-box-new.jpg'],
    price: 19,
    originalPrice: 29,
    specs: {
      de: ['Inhalt: 7 Proben 10×10 cm', 'Material: Eiche, Nussbaum, Esche', 'Lieferung: Kostenlos (werden mit erster Bestellung verrechnet)'],
      fr: ['Contenu: 7 échantillons 10×10 cm', 'Matériau: Chêne, noyer, frêne', 'Livraison: Gratuite (déduite de la première commande)'],
      it: ['Contenuto: 7 campioni 10×10 cm', 'Materiale: Rovere, noce, frassino', 'Consegna: Gratuita (detratto dal primo ordine)'],
      en: ['Contents: 7 samples 10×10 cm', 'Material: Oak, walnut, ash', 'Delivery: Free (credited on first order)'],
    },
    badge: { de: 'Kostenlose Lieferung', fr: 'Livraison gratuite', it: 'Consegna gratuita', en: 'Free delivery' },
  },
  {
    id: 'acc-mounting',
    slug: 'montagekit',
    collection: 'zubehoer',
    name: { de: 'Montage-Komplettset', fr: 'Kit de Montage Complet', it: 'Kit Montaggio Completo', en: 'Complete Mounting Kit' },
    subtitle: { de: 'Für 10 m² · Clips · Kleber · Schrauben', fr: 'Pour 10 m² · Clips · Colle · Vis', it: 'Per 10 m² · Clip · Colla · Viti', en: 'For 10 m² · Clips · Glue · Screws' },
    description: { de: 'Alles was Sie für die Montage von 10 m² Akustikpaneele brauchen. Inklusive Anleitung.', fr: 'Tout ce dont vous avez besoin pour monter 10 m² de panneaux acoustiques. Guide inclus.', it: 'Tutto ciò di cui hai bisogno per montare 10 m² di pannelli acustici. Guida inclusa.', en: 'Everything you need to mount 10 m² of acoustic panels. Guide included.' },
    images: ['/product-mounting-kit.jpg'],
    price: 39,
    specs: {
      de: ['Für: ca. 10 m²', 'Inhalt: 50 Clips, Kleber, Schrauben', 'Montagezeit: 2-3 Stunden'],
      fr: ['Pour: env. 10 m²', 'Contenu: 50 clips, colle, vis', 'Temps de montage: 2-3 heures'],
      it: ['Per: ca. 10 m²', 'Contenuto: 50 clip, colla, viti', 'Tempo montaggio: 2-3 ore'],
      en: ['For: approx. 10 m²', 'Contents: 50 clips, glue, screws', 'Mounting time: 2-3 hours'],
    },
  },
]

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find(c => c.slug === slug)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter(p => p.collection === collectionSlug)
}
