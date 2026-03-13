'use client';

import { useState } from 'react';
import Link from 'next/link';
import { services } from '@/data/services';
import { secteurs } from '@/data/secteurs';
import { blogCategories } from '@/data/blog';
import { Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const resourceLinks = [
  { label: 'Simulateur SASU vs EURL', href: '/ressources#simulateur' },
  { label: 'FAQ Expert-Comptable', href: '/ressources#faq' },
  { label: 'Guides Fiscalité', href: '/ressources#guides' },
  { label: 'Outils Interactifs', href: '/ressources' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuEnter = (menu: string) => setActiveMenu(menu);
  const handleMenuLeave = () => setActiveMenu(null);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-[#1a2e4c] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              58 rue de Monceau, 75008 Paris
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+33148856101" className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors">
              <Phone className="w-3.5 h-3.5" />
              01 48 85 61 01
            </a>
            <Link href="/contact" className="bg-[#d4af37] text-[#1a2e4c] px-3 py-0.5 rounded text-xs font-semibold hover:bg-[#e8c95a] transition-colors">
              RDV Gratuit
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4" role="navigation" aria-label="Navigation principale">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-[#1a2e4c] rounded-lg flex items-center justify-center">
              <span className="text-[#d4af37] font-serif font-bold text-lg">H</span>
            </div>
            <div>
              <div className="font-serif font-bold text-[#1a2e4c] text-lg leading-none">Hayot Expertise</div>
              <div className="text-[10px] text-[#4a5568] leading-none">Expert-Comptable Paris 8</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('services')}
              onMouseLeave={handleMenuLeave}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#1a2e4c] hover:text-[#d4af37] transition-colors rounded-md hover:bg-gray-50">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeMenu === 'services' && (
                <div className="absolute top-full left-0 mt-1 w-[640px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-3">Nos Services</div>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block py-2 px-3 rounded-lg hover:bg-[#1a2e4c]/5 transition-colors group"
                      >
                        <div className="font-medium text-[#1a2e4c] text-sm group-hover:text-[#d4af37] transition-colors">{service.title}</div>
                        <div className="text-xs text-[#4a5568] mt-0.5 line-clamp-1">{service.description.slice(0, 70)}…</div>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gradient-to-br from-[#1a2e4c] to-[#2a3e5c] rounded-xl p-4 text-white">
                    <div className="text-sm font-bold mb-2">Audit Gratuit</div>
                    <p className="text-xs text-white/80 mb-4">Obtenez une analyse de votre situation comptable et fiscale sans engagement.</p>
                    <Link href="/contact" className="block text-center bg-[#d4af37] text-[#1a2e4c] py-2 px-4 rounded-lg text-sm font-semibold hover:bg-[#e8c95a] transition-colors">
                      Prendre RDV
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Secteurs Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('secteurs')}
              onMouseLeave={handleMenuLeave}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#1a2e4c] hover:text-[#d4af37] transition-colors rounded-md hover:bg-gray-50">
                Secteurs
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === 'secteurs' ? 'rotate-180' : ''}`} />
              </button>
              {activeMenu === 'secteurs' && (
                <div className="absolute top-full left-0 mt-1 w-[440px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6">
                  <div className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-3">Nos Secteurs</div>
                  <div className="grid grid-cols-1 gap-2">
                    {secteurs.map((secteur) => (
                      <Link
                        key={secteur.slug}
                        href={`/secteurs/${secteur.slug}`}
                        className="block py-2 px-3 rounded-lg hover:bg-[#1a2e4c]/5 transition-colors group"
                      >
                        <div className="font-medium text-[#1a2e4c] text-sm group-hover:text-[#d4af37] transition-colors">{secteur.title}</div>
                        <div className="text-xs text-[#4a5568] mt-0.5 line-clamp-1">{secteur.description.slice(0, 65)}…</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Ressources */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('ressources')}
              onMouseLeave={handleMenuLeave}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#1a2e4c] hover:text-[#d4af37] transition-colors rounded-md hover:bg-gray-50">
                Ressources
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === 'ressources' ? 'rotate-180' : ''}`} />
              </button>
              {activeMenu === 'ressources' && (
                <div className="absolute top-full left-0 mt-1 w-[280px] bg-white rounded-xl shadow-2xl border border-gray-100 p-4">
                  <div className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-3">Ressources Gratuites</div>
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 px-3 rounded-lg hover:bg-[#1a2e4c]/5 transition-colors text-sm text-[#1a2e4c] hover:text-[#d4af37] font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Blog */}
            <div
              className="relative"
              onMouseEnter={() => handleMenuEnter('blog')}
              onMouseLeave={handleMenuLeave}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#1a2e4c] hover:text-[#d4af37] transition-colors rounded-md hover:bg-gray-50">
                Blog
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === 'blog' ? 'rotate-180' : ''}`} />
              </button>
              {activeMenu === 'blog' && (
                <div className="absolute top-full left-0 mt-1 w-[240px] bg-white rounded-xl shadow-2xl border border-gray-100 p-4">
                  <div className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider mb-3">Catégories</div>
                  {blogCategories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/blog/category/${encodeURIComponent(cat.toLowerCase())}`}
                      className="block py-2 px-3 rounded-lg hover:bg-[#1a2e4c]/5 transition-colors text-sm text-[#1a2e4c] hover:text-[#d4af37] font-medium"
                    >
                      {cat}
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-gray-100">
                    <Link href="/blog" className="block py-2 px-3 rounded-lg text-sm text-[#d4af37] font-semibold hover:underline">
                      Tous les articles →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="px-4 py-2 text-sm font-medium text-[#1a2e4c] hover:text-[#d4af37] transition-colors rounded-md hover:bg-gray-50">
              Contact
            </Link>
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Button asChild className="hidden lg:flex bg-[#1a2e4c] hover:bg-[#2a3e5c] text-white" size="sm">
              <Link href="/contact">Consultation Gratuite</Link>
            </Button>
            <button
              className="lg:hidden p-2 rounded-md text-[#1a2e4c]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu mobile"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 pb-4">
            <div className="py-4 space-y-1">
              <div className="px-3 py-2 text-xs font-semibold text-[#d4af37] uppercase tracking-wider">Services</div>
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="block px-6 py-2 text-sm text-[#1a2e4c] hover:bg-gray-50 hover:text-[#d4af37]" onClick={() => setMobileOpen(false)}>
                  {service.title}
                </Link>
              ))}
              <div className="px-3 py-2 text-xs font-semibold text-[#d4af37] uppercase tracking-wider mt-2">Secteurs</div>
              {secteurs.map((secteur) => (
                <Link key={secteur.slug} href={`/secteurs/${secteur.slug}`} className="block px-6 py-2 text-sm text-[#1a2e4c] hover:bg-gray-50 hover:text-[#d4af37]" onClick={() => setMobileOpen(false)}>
                  {secteur.title}
                </Link>
              ))}
              <div className="px-3 py-2 text-xs font-semibold text-[#d4af37] uppercase tracking-wider mt-2">Ressources & Blog</div>
              {resourceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block px-6 py-2 text-sm text-[#1a2e4c] hover:bg-gray-50 hover:text-[#d4af37]" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link href="/blog" className="block px-6 py-2 text-sm text-[#1a2e4c] hover:bg-gray-50 hover:text-[#d4af37]" onClick={() => setMobileOpen(false)}>
                Blog
              </Link>
              <div className="px-3 pt-4">
                <Button asChild className="w-full bg-[#1a2e4c] hover:bg-[#2a3e5c] text-white">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>Consultation Gratuite</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
