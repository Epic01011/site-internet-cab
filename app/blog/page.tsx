import { Metadata } from 'next';
import { blogPosts, blogCategories, calculateReadingTime, slugifyCategory } from '@/data/blog';
import Link from 'next/link';
import { ArrowRight, Calendar, User, Search, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export const metadata: Metadata = {
  title: 'Blog Expertise Comptable | Hayot Expertise Paris 8',
  description: 'Actualités fiscales, guides comptables, conseils entrepreneuriat. Blog de référence de votre expert-comptable à Paris 8.',
  keywords: 'blog expert-comptable, actualités fiscales, conseils comptables Paris, guide entrepreneuriat',
};

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1a2e4c] to-[#2a3e5c] text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">Blog</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
            Actualités & Conseils
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Fiscalité, comptabilité, entrepreneuriat. Nos experts partagent leur savoir-faire pour vous aider à optimiser votre activité.
          </p>
        </div>
      </div>

      {/* Categories filter */}
      <div className="bg-[#f7fafc] border-b border-gray-200 sticky top-[108px] z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3 overflow-x-auto">
          <Link
            href="/blog"
            className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium bg-[#1a2e4c] text-white"
          >
            Tous
          </Link>
          {blogCategories.map((cat) => (
            <Link
              key={cat}
              href={`/blog/category/${slugifyCategory(cat)}`}
              className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium bg-white border border-gray-200 text-[#1a2e4c] hover:bg-[#1a2e4c] hover:text-white transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {sortedPosts.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-[#4a5568]">Aucun article disponible pour le moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sortedPosts.map((post, index) => (
              <article key={post.slug} className={index === 0 ? 'md:col-span-2' : ''}>
                <Link href={`/blog/${post.slug}`}>
                  <div className={`bg-[#f7fafc] rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 group ${index === 0 ? 'md:flex md:gap-8 items-start' : ''}`}>
                    <div className={index === 0 ? 'flex-1' : ''}>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-[#4a5568]">
                          <Calendar className="w-3.5 h-3.5" />
                          {format(new Date(post.publishedDate), 'dd MMMM yyyy', { locale: fr })}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-[#4a5568]">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readingTime || calculateReadingTime(post.content)} min
                        </span>
                      </div>
                      <h2 className={`font-serif font-bold text-[#1a2e4c] leading-tight mb-3 group-hover:text-[#d4af37] transition-colors ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                        {post.title}
                      </h2>
                      <p className="text-[#4a5568] leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-sm text-[#4a5568]">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#d4af37] text-sm font-medium">
                          Lire la suite <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
