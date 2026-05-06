import { Routes, Route, Navigate } from 'react-router'
import { LanguageProvider } from './lib/LanguageContext'
import { CurrencyProvider } from './lib/CurrencyContext'
import { CartProvider } from './lib/CartContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import CollectionPage from './pages/CollectionPage'
import ProductPage from './pages/ProductPage'
import BlogPage from './pages/BlogPage'
import BlogOverviewPage from './pages/BlogOverviewPage'
import type { Language } from './lib/content'

function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/en/" replace />} />
        <Route path="/:lang" element={<Home />} />
        <Route path="/:lang/about" element={<AboutPage />} />
        <Route path="/:lang/collections/:slug" element={<CollectionPage />} />
        <Route path="/:lang/products/:slug" element={<ProductPage />} />
        <Route path="/:lang/blog" element={<BlogOverviewPage />} />
        <Route path="/:lang/blog/:slug" element={<BlogPage />} />
        <Route path="*" element={<Navigate to="/en/" replace />} />
      </Routes>
    </Layout>
  )
}

export default function App() {
  // With HashRouter, the route is in the hash (e.g. #/en/products/...)
  const hash = window.location.hash.replace('#', '') || '/'
  const pathLang = hash.split('/')[1] as Language
  const validLang: Language = ['de', 'fr', 'it', 'en'].includes(pathLang) ? pathLang : 'en'

  return (
    <LanguageProvider initialLang={validLang}>
      <CurrencyProvider>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </CurrencyProvider>
    </LanguageProvider>
  )
}
