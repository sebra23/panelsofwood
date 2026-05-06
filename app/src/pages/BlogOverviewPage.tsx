import { useNavigate, useParams } from 'react-router'
import { Clock, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import { blogPosts } from '../data/blog'
import type { Language } from '../lib/content'

export default function BlogOverviewPage() {
  const { lang: urlLang } = useParams<{ lang: string }>()
  const { lang } = useLanguage()
  const language = (urlLang || lang || 'en') as Language
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const goToPost = (slug: string) => {
    navigate(`/${language}/blog/${slug}`)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const pageTitle = {
    de: 'Blog & Inspiration',
    fr: 'Blog & Inspiration',
    it: 'Blog & Ispirazione',
    en: 'Blog & Inspiration',
  }

  const pageSubtitle = {
    de: 'Tipps, Anleitungen und Inspirationen für Ihre Wandgestaltung mit Akustikpaneelen.',
    fr: "Conseils, guides et inspirations pour votre décoration murale avec des panneaux acoustiques.",
    it: 'Consigli, guide e ispirazioni per la tua decorazione murale con pannelli acustici.',
    en: 'Tips, guides, and inspiration for your wall design with acoustic panels.',
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Header Section */}
      <div className="max-w-[1100px] mx-auto px-4 lg:px-6 pt-8 pb-2">
        <nav className="flex items-center gap-2 text-[12px] mb-6" style={{ color: '#78716C' }}>
          <button onClick={() => navigate(`/${language}/`)} className="hover:text-[#B45309] transition-colors">
            PanelsOfWood
          </button>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span style={{ color: '#1C1917' }}>Blog</span>
        </nav>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 lg:px-6 pb-10">
        <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-medium tracking-[-0.02em] mb-3" style={{ color: '#1C1917' }}>
          {pageTitle[language]}
        </h1>
        <p className="text-[15px] max-w-2xl leading-[1.6]" style={{ color: '#78716C' }}>
          {pageSubtitle[language]}
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-[1100px] mx-auto px-4 lg:px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <button
              key={post.id}
              onClick={() => goToPost(post.slug)}
              className="group text-left w-full"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[#FAF8F5]">
                <img
                  src={post.image}
                  alt={post.title[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span
                  className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-white/90"
                  style={{ color: '#B45309' }}
                >
                  {post.category[language]}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px]" style={{ color: '#78716C' }}>{post.date}</span>
                <span style={{ color: '#E7E5E4' }}>·</span>
                <span className="text-[11px] flex items-center gap-1" style={{ color: '#78716C' }}>
                  <Clock size={11} strokeWidth={1.5} /> {post.readTime} min
                </span>
              </div>
              <h3 className="text-[16px] font-medium mb-2 line-clamp-2 group-hover:text-[#B45309] transition-colors" style={{ color: '#1C1917' }}>
                {post.title[language]}
              </h3>
              <p className="text-[13px] leading-[1.5] line-clamp-2" style={{ color: '#78716C' }}>
                {post.excerpt[language]}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
