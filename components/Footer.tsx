import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Linkedin, ExternalLink } from 'lucide-react';
import { services } from '@/data/services';
import { secteurs } from '@/data/secteurs';

const topSeoPages = [
  { label: 'Expert-comptable Paris 8', href: '/services/expertise-comptable-paris-8' },
  { label: 'Création Holding Paris', href: '/services/fiscalite-holding-paris' },
  { label: 'Comptabilité LMNP Paris', href: '/services/comptabilite-lmnp-paris' },
  { label: 'Gestion Paie & Social', href: '/services/social-paie-paris' },
  { label: 'Expert-comptable Immobilier', href: '/secteurs/immobilier-sci-lmnp' },
  { label: 'Expert-comptable Startup', href: '/secteurs/startups-tech' },
  { label: 'Expert-comptable Restauration', href: '/secteurs/restauration' },
  { label: 'SCI IS ou IR 2026', href: '/blog/sci-is-ou-ir-2026' },
  { label: 'Simulateur Fiscal', href: '/ressources#simulateur' },
  { label: 'Cabinet Monceau Paris', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a2e4c] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 – NAP + About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-[#d4af37] rounded-lg flex items-center justify-center">
                <span className="text-[#1a2e4c] font-serif font-bold text-lg">H</span>
              </div>
              <div>
                <div className="font-serif font-bold text-white text-base leading-none">Hayot Expertise</div>
                <div className="text-[10px] text-white/60 leading-none mt-0.5">Expert-Comptable Paris 8</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Cabinet d'expertise comptable fondé par Samuel HAYOT, dédié aux entrepreneurs, professions libérales et investisseurs parisiens.
            </p>
            {/* NAP */}
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] mt-0.5 shrink-0" />
                <span className="text-sm text-white/80">58 rue de Monceau<br />75008 Paris</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href="tel:+33148856101" className="text-sm text-white/80 hover:text-[#d4af37] transition-colors">01 48 85 61 01</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href="mailto:contact@hayot-expertise.fr" className="text-sm text-white/80 hover:text-[#d4af37] transition-colors">contact@hayot-expertise.fr</a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#d4af37] mt-0.5 shrink-0" />
                <span className="text-sm text-white/80">Lun–Ven : 9h00 – 18h00</span>
              </div>
            </address>
            <div className="mt-5 flex gap-3">
              <a href="https://www.linkedin.com/company/hayot-expertise" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a2e4c] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 – Services */}
          <div>
            <h3 className="font-semibold text-[#d4af37] mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} title={service.title} className="text-sm text-white/70 hover:text-[#d4af37] transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Secteurs + Resources */}
          <div>
            <h3 className="font-semibold text-[#d4af37] mb-4 text-sm uppercase tracking-wider">Secteurs</h3>
            <ul className="space-y-2 mb-6">
              {secteurs.map((secteur) => (
                <li key={secteur.slug}>
                  <Link href={`/secteurs/${secteur.slug}`} title={secteur.title} className="text-sm text-white/70 hover:text-[#d4af37] transition-colors">
                    {secteur.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-[#d4af37] mb-4 text-sm uppercase tracking-wider">Ressources</h3>
            <ul className="space-y-2">
              <li><Link href="/ressources" title="Accéder aux simulateurs fiscaux" className="text-sm text-white/70 hover:text-[#d4af37] transition-colors">Simulateurs Fiscaux</Link></li>
              <li><Link href="/ressources#faq" title="Lire la FAQ expert-comptable" className="text-sm text-white/70 hover:text-[#d4af37] transition-colors">FAQ Expert-Comptable</Link></li>
              <li><Link href="/blog" title="Lire nos articles de blog traitant de la comptabilité" className="text-sm text-white/70 hover:text-[#d4af37] transition-colors">Blog & Actualités</Link></li>
              <li><Link href="/contact" title="Prendre rendez-vous" className="text-sm text-white/70 hover:text-[#d4af37] transition-colors">Prendre RDV</Link></li>
            </ul>
          </div>

          {/* Column 4 – Top SEO pages */}
          <div>
            <h3 className="font-semibold text-[#d4af37] mb-4 text-sm uppercase tracking-wider">Pages clés</h3>
            <ul className="space-y-2">
              {topSeoPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} title={`En savoir plus sur : ${page.label}`} className="text-sm text-white/70 hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                    <ExternalLink className="w-3 h-3 opacity-50 text-[#d4af37]" />
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-sm text-white/50">
            © {new Date().getFullYear()} Hayot Expertise — Membre de l'Ordre des Experts-Comptables d'Île-de-France
          </div>
          <nav aria-label="Liens légaux" className="flex items-center gap-4">
            <Link href="/mentions-legales" className="text-xs text-white/50 hover:text-white/80 transition-colors">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="text-xs text-white/50 hover:text-white/80 transition-colors">Politique de confidentialité</Link>
            <Link href="/sitemap.xml" className="text-xs text-white/50 hover:text-white/80 transition-colors">Plan du site</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
