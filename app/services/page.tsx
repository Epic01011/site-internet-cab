import { services } from '@/data/services';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { FadeInStagger, FadeInItem } from '@/components/FadeIn';

export const metadata = {
  title: 'Nos Services d\'Expertise Comptable - Hayot Expertise Paris 8',
  description: 'Découvrez notre gamme complète d\'accompagnement comptable, fiscal, juridique et social pour les entreprises.',
};

export default function ServicesIndexPage() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1a2e4c] mb-6 text-center">
        Nos Domaines d'Expertise
      </h1>
      <p className="text-[#4a5568] max-w-3xl mx-auto text-center mb-16 text-lg">
        De la création à la transmission, nous vous accompagnons à chaque étape de la vie de votre entreprise avec des solutions sur-mesure.
      </p>
      
      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = (LucideIcons as any)[service.icon] || Calculator;
          return (
            <FadeInItem key={service.slug} className="h-full">
              <Link href={`/services/${service.slug}`} className="block h-full">
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-100 group cursor-pointer flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#1a2e4c]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#1a2e4c] transition-colors">
                      <Icon className="w-6 h-6 text-[#1a2e4c] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs font-medium text-[#d4af37] uppercase tracking-wide mb-1 block">{service.category}</span>
                    <CardTitle className="text-[#1a2e4c] font-serif text-xl leading-snug">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <p className="text-[#4a5568] leading-relaxed mb-6 flex-1">{service.description}</p>
                    <div className="flex items-center gap-2 text-[#d4af37] font-medium group-hover:gap-3 transition-all mt-auto">
                      Découvrir ce service <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </FadeInItem>
          );
        })}
      </FadeInStagger>
    </div>
  );
}
