import Link from 'next/link';
import { services } from '@/data/services';
import { secteurs } from '@/data/secteurs';
import { blogPosts } from '@/data/blog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Simulateur from '@/components/Simulateur';
import {
  ArrowRight, Calendar, CheckCircle, Star, MapPin, Phone, Users, Award, Clock, TrendingUp,
  Calculator, Building2, Scale, Briefcase, Home, Rocket
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const iconMap: Record<string, React.ElementType> = {
  Calculator, Building2, Scale, Briefcase, Home, Rocket,
};

const trustItems = [
  { icon: Users, value: '+200', label: 'Clients accompagnés' },
  { icon: Award, value: '10+', label: 'Années d\'expérience' },
  { icon: TrendingUp, value: '98%', label: 'Taux de satisfaction' },
  { icon: Clock, value: '24h', label: 'Délai de réponse' },
];

const processSteps = [
  { step: '01', title: 'Prise de contact', desc: 'Premier échange gratuit par téléphone ou email pour qualifier votre besoin.' },
  { step: '02', title: 'Audit initial', desc: 'Analyse de votre situation comptable, fiscale et juridique lors d\'un RDV au cabinet.' },
  { step: '03', title: 'Proposition', desc: 'Devis transparent et personnalisé adapté à vos enjeux et votre budget.' },
  { step: '04', title: 'Accompagnement', desc: 'Suivi continu, accès à nos outils digitaux et reporting régulier.' },
];

export default function HomePage() {
  const featuredServices = services.slice(0, 4);
  const featuredSecteurs = secteurs.slice(0, 4);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#1a2e4c] via-[#1e3458] to-[#0f1e33] text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#d4af37] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#d4af37]/20 border border-[#d4af37]/30 rounded-full px-4 py-1.5 text-sm text-[#d4af37] font-medium mb-6">
                <MapPin className="w-3.5 h-3.5" />
                58 rue de Monceau — Paris 8ème
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                Votre Expert-Comptable<br />
                <span className="text-[#d4af37]">Paris 8ème</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                Samuel HAYOT et son équipe accompagnent entrepreneurs, professions libérales et investisseurs immobiliers avec une approche digitale et personnalisée.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button asChild size="lg" className="bg-[#d4af37] hover:bg-[#e8c95a] text-[#1a2e4c] font-semibold gap-2">
                  <Link href="/contact">
                    <Calendar className="w-5 h-5" />
                    Réserver une Consultation Gratuite
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent">
                  <Link href="/services/expertise-comptable-paris-8">
                    Découvrir nos services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-4">
                {['Comptabilité', 'Fiscalité', 'LMNP & SCI', 'Holding', 'Paie', 'Juridique'].map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 text-sm text-white/70">
                    <CheckCircle className="w-4 h-4 text-[#d4af37]" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero card */}
            <div className="lg:flex justify-end hidden">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-sm w-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="font-serif font-bold text-[#1a2e4c] text-2xl">SH</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Samuel HAYOT</div>
                    <div className="text-sm text-white/70">Expert-Comptable</div>
                    <div className="flex items-center gap-1 mt-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />)}
                      <span className="text-xs text-white/60 ml-1">5.0/5</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {trustItems.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#d4af37]/20 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#d4af37]" />
                      </div>
                      <div>
                        <span className="font-bold text-white">{value}</span>
                        <span className="text-white/60 text-sm ml-2">{label}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <a href="tel:+33148856101" className="flex items-center gap-2 text-[#d4af37] font-medium hover:underline">
                    <Phone className="w-4 h-4" />
                    01 48 85 61 01
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────── */}
      <section className="bg-[#f7fafc] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustItems.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-12 bg-[#1a2e4c]/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#1a2e4c]" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#d4af37]">{value}</div>
                <div className="text-sm text-[#4a5568] font-medium mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider">Nos Expertises</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2e4c] mt-2 mb-4">
            Services d'Expertise Comptable
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto leading-relaxed">
            Un accompagnement global et sur-mesure pour toutes les dimensions comptables, fiscales et juridiques de votre activité.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service) => {
            const Icon = iconMap[service.icon] || Calculator;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-100 group cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-[#1a2e4c]/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#1a2e4c] transition-colors">
                      <Icon className="w-6 h-6 text-[#1a2e4c] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-[#d4af37] uppercase tracking-wide">{service.category}</span>
                    <CardTitle className="text-[#1a2e4c] font-serif text-lg leading-snug">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#4a5568] text-sm leading-relaxed line-clamp-3">{service.description}</p>
                    <div className="flex items-center gap-1 mt-4 text-[#d4af37] text-sm font-medium group-hover:gap-2 transition-all">
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-[#1a2e4c] text-[#1a2e4c] hover:bg-[#1a2e4c] hover:text-white">
            <Link href="/services/expertise-comptable-paris-8">Tous nos services <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* ── SIMULATEUR TEASER ────────────────────────── */}
      <section className="bg-[#f7fafc] py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider">Outil Gratuit</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2e4c] mt-2 mb-4">
              Simulateur Fiscal Interactif
            </h2>
            <p className="text-[#4a5568] max-w-xl mx-auto">
              Calculez votre optimisation fiscale en temps réel. Comparez dividendes vs salaire, SASU vs EURL.
            </p>
          </div>
          <Simulateur />
        </div>
      </section>

      {/* ── SECTEURS ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider">Secteurs d'Activité</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2e4c] mt-2 mb-4">
            Expertise Sectorielle
          </h2>
          <p className="text-[#4a5568] max-w-2xl mx-auto">
            Une maîtrise approfondie des enjeux comptables et fiscaux spécifiques à votre secteur.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSecteurs.map((secteur) => {
            const Icon = (LucideIcons as any)[secteur.icon] || Building2;
            return (
              <Link key={secteur.slug} href={`/secteurs/${secteur.slug}`}>
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1a2e4c] to-[#2a3e5c] p-6 text-white h-full min-h-[200px] flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#d4af37] transition-colors">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif font-bold text-white text-lg leading-tight mb-2">{secteur.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed flex-1 line-clamp-3">{secteur.description.slice(0, 100)}…</p>
                  <div className="flex items-center gap-1 mt-4 text-[#d4af37] text-sm font-medium">
                    Découvrir <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────── */}
      <section className="bg-[#1a2e4c] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider">Notre Méthode</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">Comment nous travaillons</h2>
            <p className="text-white/70 max-w-2xl mx-auto">Un processus clair et transparent pour un accompagnement optimal.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-[#1a2e4c] text-lg">{step.step}</span>
                </div>
                <h3 className="font-serif font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────────────── */}
      {recentPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider">Blog</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2e4c] mt-2">
                Actualités & Conseils
              </h2>
            </div>
            <Button asChild variant="ghost" className="text-[#1a2e4c] hidden md:flex">
              <Link href="/blog">Tous les articles <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-[#f7fafc] rounded-xl p-6 h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2.5 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-[#4a5568]">
                        {format(new Date(post.publishedDate), 'dd MMM yyyy', { locale: fr })}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-[#1a2e4c] text-lg leading-tight mb-3 group-hover:text-[#d4af37] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#4a5568] text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-1 mt-4 text-[#d4af37] text-sm font-medium">
                      Lire la suite <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="bg-[#f7fafc] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#d4af37] uppercase tracking-wider">Témoignages</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2e4c] mt-2 mb-4">
              Ce que disent nos clients
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marie L.',
                role: 'Directrice, Startup SaaS Paris',
                quote: 'Hayot Expertise a transformé notre gestion comptable. Réactifs, disponibles, et leurs conseils fiscaux nous ont fait économiser plus de 15 000€ la première année.',
                stars: 5,
              },
              {
                name: 'Thomas R.',
                role: 'Investisseur LMNP, Paris 17ème',
                quote: "Samuel HAYOT maîtrise parfaitement la fiscalité immobilière. Grâce au passage au régime réel avec amortissements, mon résultat fiscal est quasi nul sur mon portefeuille de 3 biens.",
                stars: 5,
              },
              {
                name: 'Dr. Sophie M.',
                role: 'Médecin libéral, Paris 8ème',
                quote: "En tant que médecin, je cherchais un cabinet qui comprenne les spécificités BNC. Hayot Expertise est un vrai partenaire : ils m'ont accompagnée dans le passage en SELARL avec une économie fiscale significative.",
                stars: 5,
              },
            ].map((testimonial) => (
              <blockquote key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>
                <p className="text-[#4a5568] leading-relaxed italic flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 bg-[#1a2e4c] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a2e4c] text-sm">{testimonial.name}</div>
                    <div className="text-xs text-[#4a5568]">{testimonial.role}</div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#d4af37] to-[#b8952e] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a2e4c] mb-4">
            Prenez rendez-vous au cabinet Monceau
          </h2>
          <p className="text-[#1a2e4c]/80 text-lg mb-8 max-w-2xl mx-auto">
            Un premier échange gratuit de 30 minutes pour analyser votre situation et définir la meilleure stratégie comptable et fiscale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#1a2e4c] hover:bg-[#0f1e33] text-white gap-2">
              <Link href="/contact">
                <Calendar className="w-5 h-5" />
                Réserver ma consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-[#1a2e4c] text-[#1a2e4c] hover:bg-[#1a2e4c] hover:text-white bg-transparent gap-2">
              <a href="tel:+33148856101">
                <Phone className="w-5 h-5" />
                01 48 85 61 01
              </a>
            </Button>
          </div>
          <p className="text-[#1a2e4c]/60 text-sm mt-6">
            📍 58 rue de Monceau, 75008 Paris · Lun–Ven 9h–18h
          </p>
        </div>
      </section>
    </div>
  );
}

