import { secteurs } from '@/data/secteurs';
import Link from 'next/link';
import { Building2, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { FadeInStagger, FadeInItem } from '@/components/FadeIn';

export const metadata = {
  title: 'Nos Pôles de Compétences Sectorielles - Hayot Expertise',
  description: 'Nous accompagnons des secteurs d\'activité variés : Immobilier, Startups, Professions Libérales, CHR, BTP et E-commerce.',
};

export default function SecteursIndexPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1a2e4c] mb-6 text-center">
        Notre Expertise Sectorielle
      </h1>
      <p className="text-[#4a5568] max-w-3xl mx-auto text-center mb-16 text-lg">
        Chaque métier a ses spécificités. Nos équipes sont spécialisées par secteur pour vous apporter des conseils précis et des solutions adaptées.
      </p>
      
      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {secteurs.map((secteur) => {
          const Icon = (LucideIcons as any)[secteur.icon] || Building2;
          return (
            <FadeInItem key={secteur.slug} className="h-full">
              <Link href={`/secteurs/${secteur.slug}`} className="block h-full">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1a2e4c] to-[#2a3e5c] p-8 text-white h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#d4af37] transition-colors">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="font-serif font-bold text-white text-2xl leading-tight mb-4">{secteur.title}</h2>
                  <p className="text-white/70 leading-relaxed flex-1 mb-8">{secteur.description}</p>
                  <div className="flex items-center gap-2 text-[#d4af37] font-medium group-hover:gap-3 transition-all mt-auto">
                    Voir l'expertise <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </FadeInItem>
          );
        })}
      </FadeInStagger>
    </div>
  );
}
