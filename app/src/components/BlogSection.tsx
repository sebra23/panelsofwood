import { useNavigate } from 'react-router'
import type { Language } from '../lib/content'
import type { BlogPost } from '../data/blog'

interface BlogSectionProps {
  posts: BlogPost[]
  lang: Language
  title: string
  subtitle: string
}

export default function BlogSection({ posts, lang, title, subtitle }: BlogSectionProps) {
  const navigate = useNavigate()

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-normal tracking-[-0.01em] mb-1" style={{ color: '#1C1917' }}>{title}</h2>
            <p className="text-[14px]" style={{ color: '#78716C' }}>{subtitle}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(post => (
            <button
              key={post.id}
              onClick={() => navigate(`/${lang}/blog/${post.slug}`)}
              className="group text-left w-full"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[#FAF8F5]">
                <img
                  src={post.image}
                  alt={post.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-white/90" style={{ color: '#B45309' }}>
                  {post.category[lang]}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px]" style={{ color: '#78716C' }}>{post.date}</span>
                <span style={{ color: '#E7E5E4' }}>·</span>
                <span className="text-[11px]" style={{ color: '#78716C' }}>{post.readTime} min read</span>
              </div>
              <h3 className="text-[15px] font-medium mb-2 line-clamp-2" style={{ color: '#1C1917' }}>{post.title[lang]}</h3>
              <p className="text-[13px] leading-[1.5] line-clamp-2" style={{ color: '#78716C' }}>{post.excerpt[lang]}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
