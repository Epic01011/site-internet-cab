import './globals.css';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Hayot Expertise - Expert-Comptable Paris 8ème | Cabinet Monceau',
  description: 'Cabinet d\'expertise comptable à Paris 8ème. Samuel HAYOT, Expert-Comptable diplômé. Comptabilité, Fiscalité, Social, Juridique. 58 rue de Monceau, 75008 Paris.',
  keywords: 'expert-comptable Paris 8, cabinet comptable Paris, expertise comptable 75008, comptable Monceau',
  authors: [{ name: 'Samuel HAYOT' }],
  creator: 'Hayot Expertise',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://hayot-expertise.fr',
    siteName: 'Hayot Expertise',
    title: 'Hayot Expertise - Expert-Comptable Paris 8ème',
    description: 'Cabinet d\'expertise comptable premium à Paris 8ème. Comptabilité, Fiscalité, Paie, Juridique.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hayot Expertise - Expert-Comptable Paris 8',
    description: 'Cabinet d\'expertise comptable premium à Paris 8ème.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://hayot-expertise.fr' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Hayot Expertise',
  description: 'Cabinet d\'expertise comptable à Paris 8ème',
  url: 'https://hayot-expertise.fr',
  telephone: '+33-1-48-85-61-01',
  email: 'contact@hayot-expertise.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '58 rue de Monceau',
    addressLocality: 'Paris',
    postalCode: '75008',
    addressCountry: 'FR',
    addressRegion: 'Île-de-France',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.8796,
    longitude: 2.3081,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  founder: {
    '@type': 'Person',
    name: 'Samuel HAYOT',
    jobTitle: 'Expert-Comptable',
    worksFor: { '@type': 'Organization', name: 'Hayot Expertise' },
  },
  areaServed: [
    { '@type': 'City', name: 'Paris' },
    { '@type': 'AdministrativeArea', name: 'Paris 8ème' },
    { '@type': 'AdministrativeArea', name: 'Île-de-France' },
  ],
  priceRange: '€€€',
  hasMap: 'https://maps.google.com/?q=58+rue+de+Monceau,+75008+Paris',
  sameAs: ['https://www.linkedin.com/company/hayot-expertise'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
