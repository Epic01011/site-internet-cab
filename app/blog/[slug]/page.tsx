import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, calculateReadingTime, slugifyCategory } from '@/data/blog';
import { services } from '@/data/services';
import MarkdownContent from '@/components/MarkdownContent';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Article non trouvé',
    };
  }

  return {
    title: `${post.title} | Blog Hayot Expertise`,
    description: post.excerpt,
    keywords: post.seoKeywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPostsList = blogPosts.filter(p =>
    post.relatedPosts.includes(p.slug)
  );

  const relatedServicesList = services.filter(s =>
    post.relatedServices.includes(s.slug)
  );

  const readingTime = post.readingTime || calculateReadingTime(post.content);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.publishedDate,
    publisher: {
      '@type': 'Organization',
      name: 'Hayot Expertise',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hayot-expertise.fr/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://hayot-expertise.fr/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <article className="max-w-4xl mx-auto px-4 py-16">
        <Breadcrumb
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.category, href: `/blog/category/${slugifyCategory(post.category)}` },
            { label: post.title },
          ]}
          className="text-[#4a5568] mb-8"
        />
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-sm font-medium rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-[#4a5568]">
              {format(new Date(post.publishedDate), 'dd MMMM yyyy', { locale: fr })}
            </span>
            <span className="text-sm text-[#4a5568] flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {readingTime} min de lecture
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a2e4c] mb-4 font-serif leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-[#4a5568] leading-relaxed mb-6">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2 text-[#4a5568]">
            <User className="w-4 h-4" />
            <span className="font-medium">{post.author}</span>
          </div>
        </div>

        <div className="bg-[#f7fafc] border-l-4 border-[#d4af37] p-6 rounded-r-lg mb-12">
          <p className="text-sm text-[#4a5568] leading-relaxed">
            <strong className="text-[#1a2e4c]">Note de l'expert :</strong> Cet article a été rédigé par notre cabinet d'expertise comptable.
            Les informations sont à jour en 2026. Pour une étude personnalisée de votre situation,
            <Link href="/contact" className="text-[#d4af37] hover:underline ml-1">
              contactez-nous
            </Link>.
          </p>
        </div>

        <div className="mb-16">
          <MarkdownContent content={post.content} />
        </div>

        <div className="bg-gradient-to-r from-[#1a2e4c] to-[#2a3e5c] text-white p-8 rounded-xl mb-12 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">Besoin d'un conseil personnalisé ?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Notre cabinet d'expertise comptable vous accompagne dans toutes vos démarches.
              Prenez rendez-vous pour un premier échange gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Prendre RDV
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {(relatedPostsList.length > 0 || relatedServicesList.length > 0) && (
          <aside className="border-t border-[#e2e8f0] pt-12">
            {relatedPostsList.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-[#1a2e4c] mb-6 font-serif">
                  Articles Similaires
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPostsList.map((relatedPost) => (
                    <Card key={relatedPost.slug} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-[#d4af37] font-medium">
                            {relatedPost.category}
                          </span>
                          <span className="text-xs text-[#4a5568]">
                            {format(new Date(relatedPost.publishedDate), 'dd MMM yyyy', { locale: fr })}
                          </span>
                        </div>
                        <CardTitle className="text-lg mb-2">
                          <Link href={`/blog/${relatedPost.slug}`} className="hover:text-[#d4af37] transition-colors">
                            {relatedPost.title}
                          </Link>
                        </CardTitle>
                        <CardDescription>{relatedPost.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="text-[#1a2e4c] hover:text-[#d4af37] font-medium inline-flex items-center gap-2 transition-colors"
                        >
                          Lire l'article
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {relatedServicesList.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1a2e4c] mb-6 font-serif">
                  Services Associés
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedServicesList.map((service) => (
                    <Card key={service.slug} className="hover:shadow-lg transition-shadow border-l-4 border-[#d4af37]">
                      <CardHeader>
                        <div className="text-xs text-[#4a5568] uppercase tracking-wide mb-1">
                          {service.category}
                        </div>
                        <CardTitle className="text-lg mb-2">
                          <Link href={`/services/${service.slug}`} className="hover:text-[#d4af37] transition-colors">
                            {service.title}
                          </Link>
                        </CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-[#1a2e4c] hover:text-[#d4af37] font-medium inline-flex items-center gap-2 transition-colors"
                        >
                          Découvrir ce service
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </aside>
        )}
      </article>
    </div>
  );
}
