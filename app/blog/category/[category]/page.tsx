import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, blogCategories } from '@/data/blog';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export async function generateStaticParams() {
  return blogCategories.map((cat) => ({
    category: encodeURIComponent(cat.toLowerCase()),
  }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const categoryName = decodeURIComponent(params.category);
  const displayName = blogCategories.find(
    (c) => c.toLowerCase() === categoryName
  );

  if (!displayName) {
    return { title: 'Catégorie non trouvée' };
  }

  return {
    title: `${displayName} | Blog Hayot Expertise`,
    description: `Articles et guides sur la thématique ${displayName} par les experts-comptables de Hayot Expertise Paris 8.`,
  };
}

export default function BlogCategoryPage({ params }: { params: { category: string } }) {
  const categoryName = decodeURIComponent(params.category);
  const displayName = blogCategories.find(
    (c) => c.toLowerCase() === categoryName
  );

  if (!displayName) {
    notFound();
  }

  const posts = blogPosts.filter(
    (p) => p.category.toLowerCase() === categoryName
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#1a2e4c] to-[#2a3e5c] text-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <nav aria-label="Fil d'Ariane" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white">Accueil</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li>/</li>
              <li className="text-white">{displayName}</li>
            </ol>
          </nav>
          <span className="text-xs font-semibold text-[#d4af37] uppercase tracking-wider">Catégorie</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">{displayName}</h1>
          <p className="text-white/80">{posts.length} article{posts.length > 1 ? 's' : ''} dans cette catégorie</p>
        </div>
      </div>

      {/* Category filter */}
      <div className="bg-[#f7fafc] border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3 overflow-x-auto">
          <Link href="/blog" className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium bg-white border border-gray-200 text-[#1a2e4c] hover:bg-[#1a2e4c] hover:text-white transition-colors">
            Tous
          </Link>
          {blogCategories.map((cat) => (
            <Link
              key={cat}
              href={`/blog/category/${encodeURIComponent(cat.toLowerCase())}`}
              className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${cat === displayName ? 'bg-[#1a2e4c] text-white' : 'bg-white border border-gray-200 text-[#1a2e4c] hover:bg-[#1a2e4c] hover:text-white'}`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#4a5568] mb-4">Aucun article dans cette catégorie pour le moment.</p>
            <Link href="/blog" className="text-[#d4af37] hover:underline font-medium">
              Voir tous les articles →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-[#f7fafc] rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#4a5568]">
                        <Calendar className="w-3.5 h-3.5" />
                        {format(new Date(post.publishedDate), 'dd MMMM yyyy', { locale: fr })}
                      </span>
                    </div>
                    <h2 className="text-xl font-serif font-bold text-[#1a2e4c] leading-tight mb-3 group-hover:text-[#d4af37] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-[#4a5568] text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-sm text-[#4a5568]">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#d4af37] text-sm font-medium">
                        Lire <ArrowRight className="w-4 h-4" />
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
