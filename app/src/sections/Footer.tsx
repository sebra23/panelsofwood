import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'
import { getContent } from '../lib/content'
import { useNavigate } from 'react-router'

export default function Footer() {
  const { lang } = useLanguage()
  const c = getContent(lang)
  const navigate = useNavigate()

  const companyLinks: Record<string, string> = {
    'About Us': 'about',
    'Über uns': 'about',
    'À propos': 'about',
    'Chi siamo': 'about',
    'Blog': 'blog',
    'Sustainability': '',
    'Nachhaltigkeit': '',
    'Durabilité': '',
    'Sostenibilità': '',
    'Careers': '',
    'Karriere': '',
    'Carrières': '',
    'Carriere': '',
    'Press': '',
    'Presse': '',
  }

  return (
    <footer style={{ backgroundColor: '#1C1917', color: '#FAF8F5' }} className="py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto px-5">
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-light tracking-[-0.02em] mb-12" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
          PanelsOfWood
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.08em] uppercase mb-4" style={{ color: '#B45309' }}>Products</h4>
            <ul className="space-y-2.5">
              {c.footer.products.map((item) => (
                <li key={item}><span className="text-[13px] hover:text-[#B45309] transition-colors cursor-pointer">{item}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.08em] uppercase mb-4" style={{ color: '#B45309' }}>Company</h4>
            <ul className="space-y-2.5">
              {c.footer.company.map((item) => {
                const linkSlug = companyLinks[item]
                if (linkSlug) {
                  return (
                    <li key={item}>
                      <button onClick={() => navigate(`/${lang}/${linkSlug}`)} className="text-[13px] hover:text-[#B45309] transition-colors cursor-pointer">
                        {item}
                      </button>
                    </li>
                  )
                }
                return (
                  <li key={item}>
                    <span className="text-[13px] hover:text-[#B45309] transition-colors cursor-pointer">{item}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.08em] uppercase mb-4" style={{ color: '#B45309' }}>Support</h4>
            <ul className="space-y-2.5">
              {c.footer.support.map((item) => (
                <li key={item}><span className="text-[13px] hover:text-[#B45309] transition-colors cursor-pointer">{item}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.08em] uppercase mb-4" style={{ color: '#B45309' }}>Contact</h4>
            <ul className="space-y-2.5">
              <li><a href={`mailto:${c.footer.contact.email}`} className="flex items-center gap-2 text-[13px] hover:text-[#B45309] transition-colors"><Mail size={13}  strokeWidth={1.5} /> {c.footer.contact.email}</a></li>
              <li><a href={`tel:${c.footer.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-[13px] hover:text-[#B45309] transition-colors"><Phone size={13}  strokeWidth={1.5} /> {c.footer.contact.phone}</a></li>
              <li className="flex items-center gap-2 text-[13px]"><MapPin size={13}  strokeWidth={1.5} /> {c.footer.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between" style={{ borderColor: 'rgba(250,248,245,0.1)' }}>
          <p className="text-[12px] mb-3 md:mb-0" style={{ color: '#78716C' }}>{c.footer.copyright}</p>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-[#B45309] transition-colors"><Instagram size={16}  strokeWidth={1.5} /></a>
            <a href="#" className="hover:text-[#B45309] transition-colors"><Linkedin size={16}  strokeWidth={1.5} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
