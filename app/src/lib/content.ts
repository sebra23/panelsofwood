// All language-specific content for PanelsOfWood

export type Language = 'de' | 'fr' | 'it' | 'en'

export const languages: { code: Language; label: string; slug: string }[] = [
  { code: 'de', label: 'DE', slug: 'akustikpaneele-eiche' },
  { code: 'fr', label: 'FR', slug: 'panneaux-acoustiques-bois' },
  { code: 'it', label: 'IT', slug: 'pannelli-acustici-legno' },
  { code: 'en', label: 'EN', slug: 'acoustic-wood-panels' },
]

interface ContentSet {
  nav: { products: string; aluwood: string; samples: string; gallery: string; blog: string; cta: string }
  hero: { eyebrow: string; h1: string; subtitle: string; ctaPrimary: string; ctaSecondary: string }
  priceBar: {
    price: string
    perPanel: string
    includes: string
    finishes: { name: string; color: string; price: number }[]
  }
  products: {
    title: string
    subtitle: string
    items: { title: string; desc: string; cta: string }[]
  }
  calculator: {
    title: string
    subtitle: string
    widthLabel: string
    heightLabel: string
    finishLabel: string
    panelsNeeded: string
    coverage: string
    total: string
    addToCart: string
    perPanel: string
  }
  features: {
    title: string
    items: { title: string; desc: string }[]
  }
  steps: {
    title: string
    items: { step: string; title: string; desc: string }[]
  }
  testimonials: {
    title: string
    items: { quote: string; name: string; city: string }[]
  }
  faq: {
    title: string
    items: { q: string; a: string }[]
  }
  cart: {
    title: string
    empty: string
    remove: string
    total: string
    checkout: string
  }
  checkout: {
    title: string
    step1: string
    step2: string
    name: string
    email: string
    phone: string
    address: string
    delivery: string
    deliveryStandard: string
    deliveryExpress: string
    payment: string
    cardNumber: string
    expiry: string
    cvc: string
    pay: string
    success: string
    successMsg: string
    continue: string
  }
  productPage: {
    calcTitle: string
    calcSubtitle: string
    heightLabel: string
    widthLabel: string
    panelsNeeded: string
    pieces: string
    addToCart: string
    shippingTitle: string
    orderedOn: string
    preparedOn: string
    deliveredOn: string
    reviewsTitle: string
    infoTitle: string
    infoDesc: string
    infoMaterials: string
    infoGuarantee: string
    infoDelivery: string
    infoPayment: string
    infoSize: string
    contactTitle: string
    contactSubtitle: string
    contactPhone: string
    contactMessage: string
    readMore: string
    quantity: string
  }
  footer: {
    products: string[]
    company: string[]
    support: string[]
    contact: { email: string; phone: string; address: string }
    copyright: string
  }
}

export const content: Record<Language, ContentSet> = {
  de: {
    nav: {
      products: 'Akupanel',
      aluwood: 'Aluwood',
      samples: 'Proben',
      gallery: 'Galerie',
      blog: 'Blog',
      cta: 'Konfigurieren',
    },
    hero: {
      eyebrow: 'Kostenlose Lieferung in der Schweiz',
      h1: 'Akustik-Holzpaneele',
      subtitle:
        'Premium Eiche- und Nussbaum-Paneele mit Schallfilz. Lagerverkauf Schweiz. Lieferung in 8-12 Tagen.',
      ctaPrimary: 'Meine Wand berechnen',
      ctaSecondary: 'Oberflächen ansehen',
    },
    priceBar: {
      price: 'CHF 59',
      perPanel: 'pro 60 × 240 cm Panel',
      includes: 'Inkl. Akustikfilz, Montageclips, Schweizer MwSt.',
      finishes: [
        { name: 'Light Oak', color: '#D4B896', price: 59 },
        { name: 'Sonoma Oak', color: '#C4A77D', price: 62 },
        { name: 'Rustic Oak', color: '#A68B5B', price: 64 },
        { name: 'Walnut', color: '#5C4033', price: 69 },
        { name: 'Grey', color: '#9E9E9E', price: 64 },
        { name: 'Graphite', color: '#2B2B2B', price: 69 },
        { name: 'Schwarz Eschen', color: '#2B2B2B', price: 69 },
        { name: 'Grau Eschen', color: '#9E9E9E', price: 64 },
      ],
    },
    products: {
      title: 'Unsere Kollektionen',
      subtitle: 'Drei Produktlinien. Ein Standard: Schweizer Qualität.',
      items: [
        {
          title: 'Akupanel',
          desc: 'Innenraum-Akustiklamellen aus Eiche, Nussbaum oder Eschenholz.',
          cta: 'Konfigurieren',
        },
        {
          title: 'Aluwood',
          desc: 'Aluminium-Holz-Verbundfassade für modernste Architektur.',
          cta: 'Konfigurieren',
        },
        {
          title: 'Outdoor',
          desc: 'Witterungsbeständige Holzverkleidung für Terrasse und Garten.',
          cta: 'Konfigurieren',
        },
      ],
    },
    calculator: {
      title: 'Ihr Projekt berechnen',
      subtitle:
        'Geben Sie die Wandmaße ein. Wir zeigen Ihnen die exakte Panelanzahl und den Preis.',
      widthLabel: 'Wandbreite (Meter)',
      heightLabel: 'Wandhöhe (Meter)',
      finishLabel: 'Oberfläche wählen',
      panelsNeeded: 'Benötigte Paneele',
      coverage: 'Fläche',
      total: 'Geschätzter Preis',
      addToCart: 'In den Warenkorb',
      perPanel: 'pro Panel',
    },
    features: {
      title: 'Warum PanelsOfWood',
      items: [
        {
          title: '40% weniger Echo',
          desc: 'Schallabsorptionsgrad NRC 0,85. Spürbar bessere Raumakustik.',
        },
        {
          title: 'Montage in 10 Minuten',
          desc: 'Kein Werkzeug. Kein Bohren. Clips anbringen & fertig.',
        },
        {
          title: 'Echtes Eichenholz',
          desc: 'FSC-zertifiziertes Echtholzfurnier. Kein MDF oder Plastik.',
        },
        {
          title: 'Mieterschonend',
          desc: 'Rückstandsfrei entfernbar. Die Wand bleibt makellos.',
        },
      ],
    },
    steps: {
      title: 'Montage in 3 Schritten',
      items: [
        { step: '1', title: 'Messen', desc: 'Wandbreite und -höhe in Metern eingeben.' },
        { step: '2', title: 'Clips montieren', desc: 'Selbstklebende Clips anbringen. Kein Bohren nötig.' },
        { step: '3', title: 'Paneele einhaken', desc: 'Paneele von oben nach unten einrasten. Fertig.' },
      ],
    },
    testimonials: {
      title: 'Kundenstimmen',
      items: [
        {
          quote: 'Lieferung nach Zürich in 8-12 Tagen. Die Paneele waren perfekt verpackt und die Montage super einfach.',
          name: 'Markus H.',
          city: 'Zürich',
        },
        {
          quote: 'Endlich Akustikpaneele in der Schweiz zu einem fairen Preis. Die Qualität ist erstklassig.',
          name: 'Sophie L.',
          city: 'Genf',
        },
        {
          quote: 'Ich habe mein Home Office damit komplett neu gestaltet. Der Klang ist deutlich besser.',
          name: 'Andrea B.',
          city: 'Lugano',
        },
      ],
    },
    faq: {
      title: 'Häufige Fragen',
      items: [
        {
          q: 'Wie lange dauert die Lieferung?',
          a: 'Wir liefern innerhalb von 8-12 Werktagen in die ganze Schweiz. Die Lieferung ist kostenlos ab einem Bestellwert von CHF 200.',
        },
        {
          q: 'Kann ich die Paneele selbst montieren?',
          a: 'Ja. Jeder Bausatz enthält selbstklebende Montageclips und eine detaillierte Anleitung. Kein Bohren erforderlich.',
        },
        {
          q: 'Sind die Paneele für Mietwohnungen geeignet?',
          a: 'Absolut. Das Clipsystem hinterlässt keine Löcher in der Wand und ist vollständig rückstandsfrei entfernbar.',
        },
        {
          q: 'Welche Holzarten gibt es?',
          a: 'Wir bieten Light Oak, Sonoma Oak, Rustic Oak, Walnut, Grey und Graphite an. Alle sind FSC-zertifiziert.',
        },
        {
          q: 'Wie viele Paneele brauche ich?',
          a: 'Nutzen Sie unseren Wandrechner oben auf der Seite. Er berechnet die exakte Anzahl basierend auf Ihren Maßen.',
        },
      ],
    },
    cart: {
      title: 'Warenkorb',
      empty: 'Ihr Warenkorb ist leer.',
      remove: 'Entfernen',
      total: 'Gesamt',
      checkout: 'Zur Kasse',
    },
    checkout: {
      title: 'Kasse',
      step1: 'Kontakt',
      step2: 'Zahlung',
      name: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      address: 'Lieferadresse',
      delivery: 'Lieferoption',
      deliveryStandard: 'Standard (kostenlos, 2 Tage)',
      deliveryExpress: 'Express (+15 CHF, nächster Tag)',
      payment: 'Zahlungsmethode',
      cardNumber: 'Kartennummer',
      expiry: 'MM/JJ',
      cvc: 'CVC',
      pay: 'Bezahlen',
      success: 'Bestellung bestätigt!',
      successMsg:
        'Vielen Dank für Ihre Bestellung. Wir melden uns innerhalb von 24 Stunden mit den Lieferdetails.',
      continue: 'Weiter einkaufen',
    },
    productPage: {
      calcTitle: 'Wie viele Paneele benötigen Sie?',
      calcSubtitle: 'Wandfläche eingeben — Panelgrösse 240×60 cm.',
      heightLabel: 'Höhe (cm)',
      widthLabel: 'Breite (cm)',
      panelsNeeded: 'Sie benötigen',
      pieces: 'Stk.',
      addToCart: 'IN DEN EINKAUFSWAGEN LEGEN',
      shippingTitle: 'Voraussichtliches Lieferdatum',
      orderedOn: 'Bestellt am',
      preparedOn: 'Bestellung wird vorbereitet',
      deliveredOn: 'Zugestellt',
      reviewsTitle: 'Kundenbewertungen',
      infoTitle: 'Mehr Informationen',
      infoDesc: 'Beschreibung',
      infoMaterials: 'Materialien & Zertifikate',
      infoGuarantee: 'Zufriedenheitsgarantie',
      infoDelivery: 'Lieferzeit und Versandkosten',
      infoPayment: 'Zahlungsmöglichkeiten',
      infoSize: 'Grösse & Abmessungen',
      contactTitle: 'Brauchen Sie Beratung oder Informationen?',
      contactSubtitle: 'Unser Team berät Sie gerne persönlich — Mo-Fr, 9:00-17:00 Uhr.',
      contactPhone: 'Anrufen',
      contactMessage: 'Nachricht schreiben',
      readMore: 'Weiterlesen',
      quantity: 'Menge',
    },
    footer: {
      products: ['Akupanel', 'Aluwood', 'Outdoor', 'Deckenpaneele'],
      company: ['Über uns', 'Nachhaltigkeit', 'Karriere', 'Presse'],
      support: ['Montageanleitung', 'FAQ', 'Lieferung', 'Rückgabe'],
      contact: {
        email: 'hello@panelsofwood.com',
        phone: '+41 76 673 75 81',
        address: 'Zürich, Schweiz',
      },
      copyright: '© 2024 PanelsOfWood. Alle Rechte vorbehalten.',
    },
  },

  fr: {
    nav: {
      products: 'Akupanel',
      aluwood: 'Aluwood',
      samples: 'Échantillons',
      gallery: 'Galerie',
      blog: 'Blog',
      cta: 'Configurer',
    },
    hero: {
      eyebrow: 'Livraison gratuite en Suisse',
      h1: 'Panneaux Acoustiques en Bois',
      subtitle:
        "Panneaux premium en chêne et noyer avec feutre acoustique. Livraison en 8-12 jours.",
      ctaPrimary: 'Calculer mon mur',
      ctaSecondary: 'Voir les finitions',
    },
    priceBar: {
      price: 'CHF 59',
      perPanel: 'par panneau 60 × 240 cm',
      includes: "Incl. feutre acoustique, clips de montage, TVA suisse.",
      finishes: [
        { name: 'Chêne Clair', color: '#D4B896', price: 59 },
        { name: 'Chêne Sonoma', color: '#C4A77D', price: 62 },
        { name: 'Chêne Rustique', color: '#A68B5B', price: 64 },
        { name: 'Noyer', color: '#5C4033', price: 69 },
        { name: 'Gris', color: '#9E9E9E', price: 64 },
        { name: 'Graphite', color: '#2B2B2B', price: 69 },
      ],
    },
    products: {
      title: 'Nos Collections',
      subtitle: 'Trois lignes. Un standard : qualité suisse.',
      items: [
        {
          title: 'Akupanel',
          desc: "Lamelles acoustiques intérieures en chêne, noyer ou frêne.",
          cta: 'Configurer',
        },
        {
          title: 'Aluwood',
          desc: "Façade composite aluminium-bois pour une architecture moderne.",
          cta: 'Configurer',
        },
        {
          title: 'Outdoor',
          desc: "Bardage bois résistant aux intempéries pour terrasse et jardin.",
          cta: 'Configurer',
        },
      ],
    },
    calculator: {
      title: 'Calculer votre projet',
      subtitle:
        "Entrez les dimensions du mur. Nous affichons le nombre exact de panneaux et le prix.",
      widthLabel: 'Largeur du mur (mètres)',
      heightLabel: 'Hauteur du mur (mètres)',
      finishLabel: 'Choisir la finition',
      panelsNeeded: 'Panneaux nécessaires',
      coverage: 'Surface',
      total: 'Prix estimé',
      addToCart: 'Ajouter au panier',
      perPanel: 'par panneau',
    },
    features: {
      title: 'Pourquoi PanelsOfWood',
      items: [
        {
          title: "40% d'écho en moins",
          desc: "Coefficient d'absorption NRC 0,85. Acoustique nettement améliorée.",
        },
        {
          title: 'Pose en 10 minutes',
          desc: "Aucun outil. Aucun perçage. Fixer les clips & c'est fait.",
        },
        {
          title: 'Vrai chêne massif',
          desc: "Placage de bois véritable certifié FSC. Pas de MDF ni plastique.",
        },
        {
          title: 'Respectueux locataire',
          desc: "Retrait sans résidu. Le mur reste impeccable.",
        },
      ],
    },
    steps: {
      title: 'Installation en 3 étapes',
      items: [
        { step: '1', title: 'Mesurer', desc: 'Entrez la largeur et la hauteur du mur en mètres.' },
        { step: '2', title: 'Poser les clips', desc: 'Clips autocollants. Aucun perçage nécessaire.' },
        { step: '3', title: 'Clipper les panneaux', desc: 'Emboîtez les panneaux de haut en bas. Terminé.' },
      ],
    },
    testimonials: {
      title: 'Avis clients',
      items: [
        {
          quote: "Livraison à Genève en 8-12 jours. Les panneaux étaient parfaitement emballés et le montage très simple.",
          name: 'Sophie L.',
          city: 'Genève',
        },
        {
          quote: "Enfin des panneaux acoustiques en Suisse à un prix juste. La qualité est exceptionnelle.",
          name: 'Jean-Pierre M.',
          city: 'Lausanne',
        },
        {
          quote: "J'ai transformé mon salon avec ces tasseaux bois. Un vrai changement d'ambiance.",
          name: 'Claire D.',
          city: 'Neuchâtel',
        },
      ],
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        {
          q: 'Combien de temps dure la livraison ?',
          a: "Nous livrons dans toute la Suisse en 8-12 jours ouvrables. La livraison est gratuite dès CHF 200 d'achat.",
        },
        {
          q: 'Puis-je installer les panneaux moi-même ?',
          a: "Oui. Chaque kit contient des clips autocollants et un guide détaillé. Aucun perçage nécessaire.",
        },
        {
          q: "Les panneaux conviennent-ils aux appartements locatifs ?",
          a: "Absolument. Le système de clips ne laisse aucun trou et peut être retiré sans trace.",
        },
        {
          q: "Quels types de bois proposez-vous ?",
          a: "Chêne Clair, Chêne Sonoma, Chêne Rustique, Noyer, Gris et Graphite. Tous sont certifiés FSC.",
        },
        {
          q: "Combien de panneaux me faut-il ?",
          a: "Utilisez notre calculateur en haut de page. Il calcule le nombre exact selon vos dimensions.",
        },
      ],
    },
    cart: {
      title: 'Panier',
      empty: 'Votre panier est vide.',
      remove: 'Retirer',
      total: 'Total',
      checkout: 'Passer la commande',
    },
    checkout: {
      title: 'Paiement',
      step1: 'Contact',
      step2: 'Paiement',
      name: 'Nom complet',
      email: 'Adresse e-mail',
      phone: 'Numéro de téléphone',
      address: 'Adresse de livraison',
      delivery: 'Option de livraison',
      deliveryStandard: 'Standard (gratuit, 8-12 jours)',
      deliveryExpress: 'Express (+15 CHF, lendemain)',
      payment: 'Mode de paiement',
      cardNumber: 'Numéro de carte',
      expiry: 'MM/AA',
      cvc: 'CVC',
      pay: 'Payer',
      success: 'Commande confirmée !',
      successMsg:
        "Merci pour votre commande. Nous vous contacterons dans les 24 heures avec les détails de livraison.",
      continue: "Continuer les achats",
    },
    productPage: {
      calcTitle: 'De combien de panneaux avez-vous besoin ?',
      calcSubtitle: "Entrez la surface murale — Taille du panneau 240×60 cm.",
      heightLabel: 'Hauteur (cm)',
      widthLabel: 'Largeur (cm)',
      panelsNeeded: 'Vous avez besoin de',
      pieces: 'pcs.',
      addToCart: "AJOUTER AU PANIER",
      shippingTitle: 'Date de livraison estimée',
      orderedOn: 'Commandé le',
      preparedOn: 'Commande préparée',
      deliveredOn: 'Livré',
      reviewsTitle: 'Avis clients',
      infoTitle: "Plus d'informations",
      infoDesc: 'Description',
      infoMaterials: 'Matériaux & Certificats',
      infoGuarantee: "Garantie de satisfaction",
      infoDelivery: "Délai de livraison & Frais d'expédition",
      infoPayment: 'Moyens de paiement',
      infoSize: 'Taille & Dimensions',
      contactTitle: "Besoin de conseils ou d'informations ?",
      contactSubtitle: 'Notre équipe se fera un plaisir de vous conseiller personnellement — Lun-Ven, 9h00-17h00.',
      contactPhone: 'Appeler',
      contactMessage: 'Écrire un message',
      readMore: 'Lire la suite',
      quantity: 'Quantité',
    },
    footer: {
      products: ['Akupanel', 'Aluwood', 'Outdoor', 'Panneaux plafond'],
      company: ['À propos', 'Blog', 'Durabilité', 'Carrière', 'Presse'],
      support: ["Guide d'installation", 'FAQ', 'Livraison', 'Retours'],
      contact: {
        email: 'hello@panelsofwood.com',
        phone: '+41 76 673 75 81',
        address: 'Zurich, Suisse',
      },
      copyright: '© 2024 PanelsOfWood. Tous droits réservés.',
    },
  },

  it: {
    nav: {
      products: 'Akupanel',
      aluwood: 'Aluwood',
      samples: 'Campioni',
      gallery: 'Galleria',
      blog: 'Blog',
      cta: 'Configura',
    },
    hero: {
      eyebrow: 'Consegna gratuita in Svizzera',
      h1: 'Pannelli Acustici in Legno',
      subtitle:
        'Pannelli premium in rovere e noce con feltro acustico. Consegna in 8-12 giorni.',
      ctaPrimary: 'Calcola il mio muro',
      ctaSecondary: 'Vedi le finiture',
    },
    priceBar: {
      price: 'CHF 59',
      perPanel: 'a pannello 60 × 240 cm',
      includes: 'Incl. feltro acustico, clip di montaggio, IVA svizzera.',
      finishes: [
        { name: 'Rovere Chiaro', color: '#D4B896', price: 59 },
        { name: 'Rovere Sonoma', color: '#C4A77D', price: 62 },
        { name: 'Rovere Rustico', color: '#A68B5B', price: 64 },
        { name: 'Noce', color: '#5C4033', price: 69 },
        { name: 'Grigio', color: '#9E9E9E', price: 64 },
        { name: 'Grafite', color: '#2B2B2B', price: 69 },
      ],
    },
    products: {
      title: 'Le Nostre Collezioni',
      subtitle: 'Tre linee. Uno standard: qualità svizzera.',
      items: [
        {
          title: 'Akupanel',
          desc: 'Doghe acustiche da interno in rovere, noce o frassino.',
          cta: 'Configura',
        },
        {
          title: 'Aluwood',
          desc: 'Facciata composita alluminio-legno per architettura moderna.',
          cta: 'Configura',
        },
        {
          title: 'Outdoor',
          desc: 'Rivestimento legno resistente alle intemperie per terrazza e giardino.',
          cta: 'Configura',
        },
      ],
    },
    calculator: {
      title: 'Calcola il tuo progetto',
      subtitle:
        "Inserisci le dimensioni del muro. Ti mostriamo il numero esatto di pannelli e il prezzo.",
      widthLabel: 'Larghezza muro (metri)',
      heightLabel: 'Altezza muro (metri)',
      finishLabel: 'Scegli la finitura',
      panelsNeeded: 'Pannelli necessari',
      coverage: 'Superficie',
      total: 'Prezzo stimato',
      addToCart: 'Aggiungi al carrello',
      perPanel: 'a pannello',
    },
    features: {
      title: 'Perché PanelsOfWood',
      items: [
        {
          title: '40% di eco in meno',
          desc: 'Coefficiente di assorbimento NRC 0,85. Acustica sensibilmente migliorata.',
        },
        {
          title: 'Montaggio in 10 minuti',
          desc: 'Nessun attrezzo. Nessun trapano. Fissa le clip & fatto.',
        },
        {
          title: 'Vero rovere massiccio',
          desc: 'Impiallacciatura di legno vero certificato FSC. Non MDF o plastica.',
        },
        {
          title: 'Adatto agli inquilini',
          desc: 'Rimozione senza residui. La parete rimane intatta.',
        },
      ],
    },
    steps: {
      title: 'Montaggio in 3 passi',
      items: [
        { step: '1', title: 'Misurare', desc: 'Inserisci larghezza e altezza del muro in metri.' },
        { step: '2', title: 'Fissare le clip', desc: 'Clip autoadesive. Nessun trapano necessario.' },
        { step: '3', title: 'Incastrare i pannelli', desc: 'Incastra i pannelli dall\'alto verso il basso. Fatto.' },
      ],
    },
    testimonials: {
      title: 'Dicono di noi',
      items: [
        {
          quote: "Consegna a Lugano in 8-12 giorni. I pannelli erano perfettamente imballati e il montaggio semplicissimo.",
          name: 'Andrea B.',
          city: 'Lugano',
        },
        {
          quote: "Finalmente pannelli acustici in Svizzera a un prezzo giusto. La qualità è eccezionale.",
          name: 'Marco T.',
          city: 'Bellinzona',
        },
        {
          quote: "Ho ristrutturato il mio ufficio in casa con questi pannelli. Un progetto fai da te perfetto per il weekend.",
          name: 'Giulia R.',
          city: 'Locarno',
        },
      ],
    },
    faq: {
      title: 'Domande frequenti',
      items: [
        {
          q: 'Quanto dura la consegna?',
          a: "Consegniamo in tutta la Svizzera in 8-12 giorni lavorativi. La spedizione è gratuita per ordini superiori a CHF 200.",
        },
        {
          q: 'Posso installare i pannelli da solo?',
          a: "Sì. Ogni kit include clip adesive e una guida dettagliata. Nessun trapano necessario.",
        },
        {
          q: 'I pannelli sono adatti ad appartamenti in affitto?',
          a: "Assolutamente. Il sistema a clip non lascia buchi e può essere rimosso senza lasciare tracce.",
        },
        {
          q: 'Quali tipi di legno offrite?',
          a: "Rovere Chiaro, Rovere Sonoma, Rovere Rustico, Noce, Grigio e Grafite. Tutti certificati FSC.",
        },
        {
          q: 'Quanti pannelli mi servono?',
          a: "Usa il nostro calcolatore in alto sulla pagina. Calcola il numero esatto in base alle tue misure.",
        },
      ],
    },
    cart: {
      title: 'Carrello',
      empty: 'Il tuo carrello è vuoto.',
      remove: 'Rimuovi',
      total: 'Totale',
      checkout: 'Procedi al pagamento',
    },
    checkout: {
      title: 'Pagamento',
      step1: 'Contatto',
      step2: 'Pagamento',
      name: 'Nome completo',
      email: 'Indirizzo e-mail',
      phone: 'Numero di telefono',
      address: 'Indirizzo di consegna',
      delivery: 'Opzione di consegna',
      deliveryStandard: 'Standard (gratuito, 8-12 giorni)',
      deliveryExpress: 'Express (+15 CHF, giorno dopo)',
      payment: 'Metodo di pagamento',
      cardNumber: 'Numero carta',
      expiry: 'MM/AA',
      cvc: 'CVC',
      pay: 'Paga',
      success: 'Ordine confermato!',
      successMsg:
        'Grazie per il tuo ordine. Ti contatteremo entro 24 ore con i dettagli della consegna.',
      continue: 'Continua a fare acquisti',
    },
    productPage: {
      calcTitle: 'Di quanti pannelli hai bisogno?',
      calcSubtitle: 'Inserisci la superficie della parete — Dimensione pannello 240×60 cm.',
      heightLabel: 'Altezza (cm)',
      widthLabel: 'Larghezza (cm)',
      panelsNeeded: 'Hai bisogno di',
      pieces: 'pz.',
      addToCart: 'AGGIUNGI AL CARRELLO',
      shippingTitle: 'Data di consegna stimata',
      orderedOn: 'Ordinato il',
      preparedOn: 'Ordine in preparazione',
      deliveredOn: 'Consegnato',
      reviewsTitle: 'Recensioni clienti',
      infoTitle: 'Più informazioni',
      infoDesc: 'Descrizione',
      infoMaterials: 'Materiali & Certificati',
      infoGuarantee: 'Garanzia di soddisfazione',
      infoDelivery: 'Tempi di consegna & Spese di spedizione',
      infoPayment: 'Metodi di pagamento',
      infoSize: 'Dimensioni & Misure',
      contactTitle: 'Hai bisogno di consigli o informazioni?',
      contactSubtitle: 'Il nostro team sarà lieto di consigliarti personalmente — Lun-Ven, 9:00-17:00.',
      contactPhone: 'Chiama',
      contactMessage: 'Scrivi un messaggio',
      readMore: 'Leggi di più',
      quantity: 'Quantità',
    },
    footer: {
      products: ['Akupanel', 'Aluwood', 'Outdoor', 'Pannelli soffitto'],
      company: ['Chi siamo', 'Sostenibilità', 'Carriera', 'Stampa'],
      support: ['Guida installazione', 'FAQ', 'Consegna', 'Resi'],
      contact: {
        email: 'hello@panelsofwood.com',
        phone: '+41 76 673 75 81',
        address: 'Zurigo, Svizzera',
      },
      copyright: '© 2024 PanelsOfWood. Tutti i diritti riservati.',
    },
  },

  en: {
    nav: {
      products: 'Akupanel',
      aluwood: 'Aluwood',
      samples: 'Samples',
      gallery: 'Gallery',
      blog: 'Blog',
      cta: 'Configure',
    },
    hero: {
      eyebrow: 'Free delivery across Switzerland',
      h1: 'Acoustic Wood Wall Panels',
      subtitle:
        'Premium oak and walnut panels with acoustic felt. Delivery in 8-12 days.',
      ctaPrimary: 'Calculate My Wall',
      ctaSecondary: 'View Finishes',
    },
    priceBar: {
      price: 'CHF 59',
      perPanel: 'per 60 × 240 cm panel',
      includes: 'Incl. acoustic felt, mounting clips, Swiss VAT.',
      finishes: [
        { name: 'Light Oak', color: '#D4B896', price: 59 },
        { name: 'Sonoma Oak', color: '#C4A77D', price: 62 },
        { name: 'Rustic Oak', color: '#A68B5B', price: 64 },
        { name: 'Walnut', color: '#5C4033', price: 69 },
        { name: 'Grey', color: '#9E9E9E', price: 64 },
        { name: 'Graphite', color: '#2B2B2B', price: 69 },
      ],
    },
    products: {
      title: 'Our Collections',
      subtitle: 'Three product lines. One standard: Swiss quality.',
      items: [
        {
          title: 'Akupanel',
          desc: 'Interior acoustic slats in oak, walnut or ash wood.',
          cta: 'Configure',
        },
        {
          title: 'Aluwood',
          desc: 'Aluminum-wood composite facade for modern architecture.',
          cta: 'Configure',
        },
        {
          title: 'Outdoor',
          desc: 'Weather-resistant wood cladding for terrace and garden.',
          cta: 'Configure',
        },
      ],
    },
    calculator: {
      title: 'Calculate Your Project',
      subtitle:
        'Enter your wall dimensions. We show the exact panel count and price instantly.',
      widthLabel: 'Wall Width (meters)',
      heightLabel: 'Wall Height (meters)',
      finishLabel: 'Choose finish',
      panelsNeeded: 'Panels needed',
      coverage: 'Coverage',
      total: 'Estimated total',
      addToCart: 'Add to Cart',
      perPanel: 'per panel',
    },
    features: {
      title: 'Why PanelsOfWood',
      items: [
        {
          title: '40% less echo',
          desc: 'Sound absorption rating NRC 0.85. Noticeably better room acoustics.',
        },
        {
          title: '10-minute install',
          desc: 'No tools. No drilling. Attach clips & done.',
        },
        {
          title: 'Real solid oak',
          desc: 'FSC-certified genuine wood veneer. Not MDF or plastic.',
        },
        {
          title: 'Rental-safe',
          desc: 'Residue-free removal. Your wall stays flawless.',
        },
      ],
    },
    steps: {
      title: 'Install in 3 Steps',
      items: [
        { step: '1', title: 'Measure', desc: 'Enter wall width and height in meters.' },
        { step: '2', title: 'Mount Clips', desc: 'Self-adhesive clips. No drilling needed.' },
        { step: '3', title: 'Click Panels', desc: 'Snap panels in from top to bottom. Done.' },
      ],
    },
    testimonials: {
      title: 'What Customers Say',
      items: [
        {
          quote: 'Delivery to Zurich in 8-12 days. Panels were perfectly packed and installation took under an hour.',
          name: 'James M.',
          city: 'Zurich',
        },
        {
          quote: 'Finally acoustic panels in Switzerland at a fair price. The quality rivals imports at double the cost.',
          name: 'Sarah K.',
          city: 'Geneva',
        },
        {
          quote: 'As a renter, the no-drill system is a game changer. My landlord will never know.',
          name: 'David L.',
          city: 'Basel',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          q: 'How long is delivery?',
          a: 'We deliver across Switzerland within 8-12 business days. Shipping is free on orders over CHF 200.',
        },
        {
          q: 'Can I install the panels myself?',
          a: 'Yes. Every kit includes self-adhesive mounting clips and a detailed guide. No drilling required.',
        },
        {
          q: 'Are panels suitable for rentals?',
          a: 'Absolutely. The clip system leaves no holes and is fully removable without any trace.',
        },
        {
          q: 'What wood types do you offer?',
          a: 'Light Oak, Sonoma Oak, Rustic Oak, Walnut, Grey, and Graphite. All are FSC-certified.',
        },
        {
          q: 'How many panels do I need?',
          a: 'Use our wall calculator at the top of the page. It calculates the exact number based on your dimensions.',
        },
      ],
    },
    cart: {
      title: 'Your Cart',
      empty: 'Your cart is empty.',
      remove: 'Remove',
      total: 'Total',
      checkout: 'Proceed to Checkout',
    },
    checkout: {
      title: 'Checkout',
      step1: 'Contact',
      step2: 'Payment',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      address: 'Delivery Address',
      delivery: 'Delivery Option',
      deliveryStandard: 'Standard (free, 8-12 days)',
      deliveryExpress: 'Express (+15 CHF, next day)',
      payment: 'Payment Method',
      cardNumber: 'Card Number',
      expiry: 'MM/YY',
      cvc: 'CVC',
      pay: 'Pay',
      success: 'Order Confirmed!',
      successMsg:
        'Thank you for your order. We will contact you within 24 hours with delivery details.',
      continue: 'Continue Shopping',
    },
    productPage: {
      calcTitle: 'How many panels do you need?',
      calcSubtitle: 'Enter wall area — Panel size 240×60 cm.',
      heightLabel: 'Height (cm)',
      widthLabel: 'Width (cm)',
      panelsNeeded: 'You need',
      pieces: 'pcs.',
      addToCart: 'ADD TO CART',
      shippingTitle: 'Estimated delivery date',
      orderedOn: 'Ordered on',
      preparedOn: 'Order prepared',
      deliveredOn: 'Delivered',
      reviewsTitle: 'Customer Reviews',
      infoTitle: 'More Information',
      infoDesc: 'Description',
      infoMaterials: 'Materials & Certificates',
      infoGuarantee: 'Satisfaction Guarantee',
      infoDelivery: 'Delivery Time & Shipping Costs',
      infoPayment: 'Payment Options',
      infoSize: 'Size & Dimensions',
      contactTitle: 'Need advice or information?',
      contactSubtitle: 'Our team will be happy to advise you personally — Mon-Fri, 9:00-17:00.',
      contactPhone: 'Call us',
      contactMessage: 'Write a message',
      readMore: 'Read more',
      quantity: 'Quantity',
    },
    footer: {
      products: ['Akupanel', 'Aluwood', 'Outdoor', 'Ceiling Panels'],
      company: ['About Us', 'Sustainability', 'Careers', 'Press'],
      support: ['Installation Guide', 'FAQ', 'Shipping', 'Returns'],
      contact: {
        email: 'hello@panelsofwood.com',
        phone: '+41 76 673 75 81',
        address: 'Zurich, Switzerland',
      },
      copyright: '© 2024 PanelsOfWood. All rights reserved.',
    },
  },
}

export function getContent(lang: Language): ContentSet {
  return content[lang]
}
