import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { secteurs } from '@/data/secteurs';
import { services } from '@/data/services';
import MarkdownContent from '@/components/MarkdownContent';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export async function generateStaticParams() {
  return secteurs.map((secteur) => ({
    slug: secteur.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const secteur = secteurs.find((s) => s.slug === params.slug);

  if (!secteur) {
    return {
      title: 'Secteur non trouvé',
    };
  }

  return {
    title: `${secteur.title} | Hayot Expertise - Expert-Comptable Paris 8`,
    description: secteur.description,
    keywords: secteur.seoKeywords.join(', '),
    openGraph: {
      title: secteur.title,
      description: secteur.description,
      type: 'article',
    },
  };
}

export default function SecteurPage({ params }: { params: { slug: string } }) {
  const secteur = secteurs.find((s) => s.slug === params.slug);

  if (!secteur) {
    notFound();
  }

  const Icon = (LucideIcons as any)[secteur.icon] || LucideIcons.Building;

  const relatedServicesList = services.filter(s =>
    secteur.relatedServices.includes(s.slug)
  );

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: secteur.title,
    description: secteur.description,
    provider: {
      '@type': 'AccountingService',
      name: 'Hayot Expertise',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '58 rue de Monceau',
        addressLocality: 'Paris',
        postalCode: '75008',
        addressCountry: 'FR'
      }
    },
    areaServed: 'Paris',
    url: `https://hayot-expertise.fr/secteurs/${secteur.slug}`
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="bg-gradient-to-br from-[#1a2e4c] to-[#2a3e5c] text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <Breadcrumb
            items={[
              { label: 'Secteurs', href: '/secteurs/immobilier-sci-lmnp' },
              { label: secteur.title },
            ]}
            className="text-white/70 mb-6"
          />
          <div className="flex items-center gap-3 mb-6">
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Icon className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            {secteur.title}
          </h1>
          <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
            {secteur.description}
          </p>
        </div>
      </div>

      {secteur.stats && secteur.stats.length > 0 && (
        <div className="bg-[#f7fafc] border-y border-[#e2e8f0]">
          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {secteur.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#4a5568] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <article className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-[#1a2e4c] to-[#2a3e5c] text-white p-8 rounded-xl mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Expert de votre secteur</h3>
              <p className="text-white/90">
                Bénéficiez d'un accompagnement sur-mesure adapté à vos enjeux
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Prendre RDV
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <a href="tel:+33148856101">
                  <Phone className="w-5 h-5 mr-2" />
                  01 48 85 61 01
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <MarkdownContent content={secteur.content} />
        </div>

        {relatedServicesList.length > 0 && (
          <aside className="border-t border-[#e2e8f0] pt-12">
            <h2 className="text-2xl font-bold text-[#1a2e4c] mb-6 font-serif">
              Services Associés
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedServicesList.map((service) => {
                const ServiceIcon = (LucideIcons as any)[service.icon] || LucideIcons.FileText;
                return (
                  <Card key={service.slug} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-[#1a2e4c]/10 rounded-lg">
                          <ServiceIcon className="w-5 h-5 text-[#1a2e4c]" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-[#4a5568] uppercase tracking-wide mb-1">
                            {service.category}
                          </div>
                          <CardTitle className="text-lg mb-1">
                            <Link href={`/services/${service.slug}`} className="hover:text-[#d4af37] transition-colors">
                              {service.title}
                            </Link>
                          </CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-[#1a2e4c] hover:text-[#d4af37] font-medium inline-flex items-center gap-2 transition-colors"
                      >
                        En savoir plus
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </aside>
        )}
      </article>
    </div>
  );
}
