import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const allItems = [{ label: 'Accueil', href: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://hayot-expertise.fr${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Fil d'Ariane" className={`flex items-center flex-wrap gap-1.5 text-sm ${className}`}>
        {allItems.map((item, index) => (
          <span key={index} className="flex items-center gap-1.5">
            {index === 0 && <Home className="w-3.5 h-3.5 opacity-70 shrink-0" />}
            {index > 0 && <ChevronRight className="w-3.5 h-3.5 opacity-40 shrink-0" />}
            {item.href && index < allItems.length - 1 ? (
              <Link href={item.href} className="hover:text-[#d4af37] transition-colors opacity-80 hover:opacity-100">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
