import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { secteurs } from '@/data/secteurs';
import MarkdownContent from '@/components/MarkdownContent';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service non trouvé',
    };
  }

  return {
    title: `${service.title} | Hayot Expertise - Expert-Comptable Paris 8`,
    description: service.description,
    keywords: service.seoKeywords.join(', '),
    openGraph: {
      title: service.title,
      description: service.description,
      type: 'article',
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = (LucideIcons as any)[service.icon] || LucideIcons.FileText;

  const relatedServicesList = services.filter(s =>
    service.relatedServices.includes(s.slug)
  );

  const relatedSecteursList = secteurs.filter(s =>
    service.relatedSecteurs.includes(s.slug)
  );

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
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
    url: `https://hayot-expertise.fr/services/${service.slug}`
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="max-w-5xl mx-auto px-4 py-16">
        <Breadcrumb
          items={[
            { label: 'Services', href: '/services/expertise-comptable-paris-8' },
            { label: service.title },
          ]}
          className="text-[#4a5568] mb-8"
        />
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-[#1a2e4c]/10 rounded-lg">
              <Icon className="w-8 h-8 text-[#1a2e4c]" />
            </div>
            <span className="text-sm font-medium text-[#4a5568] uppercase tracking-wide">
              {service.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2e4c] mb-4 font-serif">
            {service.title}
          </h1>
          <p className="text-xl text-[#4a5568] leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#1a2e4c] to-[#2a3e5c] text-white p-8 rounded-xl mb-12 shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Besoin d'un accompagnement expert ?</h3>
              <p className="text-white/90">
                Prenez rendez-vous pour un audit gratuit au cabinet
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
          <MarkdownContent content={service.content} />
        </div>

        {(relatedServicesList.length > 0 || relatedSecteursList.length > 0) && (
          <aside className="border-t border-[#e2e8f0] pt-12">
            <h2 className="text-2xl font-bold text-[#1a2e4c] mb-6 font-serif">
              Expertises Associées
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedServicesList.map((relatedService) => {
                const RelatedIcon = (LucideIcons as any)[relatedService.icon] || LucideIcons.FileText;
                return (
                  <Card key={relatedService.slug} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-[#1a2e4c]/10 rounded-lg">
                          <RelatedIcon className="w-5 h-5 text-[#1a2e4c]" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-1">
                            <Link href={`/services/${relatedService.slug}`} className="hover:text-[#d4af37] transition-colors">
                              {relatedService.title}
                            </Link>
                          </CardTitle>
                          <CardDescription>{relatedService.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={`/services/${relatedService.slug}`}
                        className="text-[#1a2e4c] hover:text-[#d4af37] font-medium inline-flex items-center gap-2 transition-colors"
                      >
                        En savoir plus
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}

              {relatedSecteursList.map((secteur) => {
                const SecteurIcon = (LucideIcons as any)[secteur.icon] || LucideIcons.Building;
                return (
                  <Card key={secteur.slug} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-[#d4af37]/10 rounded-lg">
                          <SecteurIcon className="w-5 h-5 text-[#d4af37]" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-1">
                            <Link href={`/secteurs/${secteur.slug}`} className="hover:text-[#d4af37] transition-colors">
                              {secteur.title}
                            </Link>
                          </CardTitle>
                          <CardDescription>{secteur.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={`/secteurs/${secteur.slug}`}
                        className="text-[#1a2e4c] hover:text-[#d4af37] font-medium inline-flex items-center gap-2 transition-colors"
                      >
                        Découvrir ce secteur
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
